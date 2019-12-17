export default {
  methods: {
    uxRipple(event, element, options) {
      // If we don't have an event or an element, we won't know where to put the ripple.
      if (!event && !element) {
        return;
      }


      // This checks if the browser supports transitions
      var supported_transition = function() {
        if ('transition' in document.body.style) {
          return 'transition';
        } else if ('WebkitTransition' in document.body.style) {
          return 'WebkitTransition';
        } else if ('MozTransition' in document.body.style) {
          return 'MozTransition';
        } else if ('OTransition' in document.body.style) {
          return 'OTransition';
        }

        return null;
      }();

      // If the browser doesn't support transitions, we just won't do anything
      if (!supported_transition) {
        return;
      }


      /*
        This prevents the ripple from happening twice.
        The click event will still bubble, but the ripple will only
        be generated on the highest level element.
      */
      if (event) {
        if (event.$_vuejs_ux_ripple_ripple_caught === true) {
          return;
        }
        event.$_vuejs_ux_ripple_ripple_caught = true;
      }


      /*
        Element is the element that will contain the ripple. We'll default
        it to the element the event handler was attached to.
      */
      element = element || event.currentTarget;


      // Everything after this is for adding, styling, and removing the ripple elements
      var
        element_border_radius = window.getComputedStyle(element, null).borderRadius,
        ripple_container = document.createElement('DIV'),
        ripple = document.createElement('DIV'),
        starting_opacity = '0.5',
        ending_scale = '2',
        ripple_size,
        ripple_top,
        ripple_left;

      // The element needs to be positioned in order for the ripple to work
      if (
        window.getComputedStyle(element, null).position === 'static'
      ) {
        element.style.position = 'relative';
      }

      // This is to make the ripple a circle
      if (element.offsetWidth > element.offsetHeight) {
        ripple_size = element.offsetWidth;
      } else {
        ripple_size = element.offsetHeight;
      }

      /*
        This calculates what the top and left properties of the ripple
        should be. If we don't have a click event, the ripple will
        start in the center of our element.
      */
      if (event && (event.type === 'click' || event.pageY || event.pageX)) {
        ripple_top =
          event.pageY -
          (
            // This is for cross-browser compatability
            (window.scrollY ? window.scrollY : window.pageYOffset) +
            /*
              Note: getBoundingClientRect may not return the correct value
              in safari on ios if the phone is zoomed-in.
              Note: getBoundingClientRect may not return the correct value
              on elements that have transforms applied in old versions of firefox.
            */
            element.getBoundingClientRect().top
          ) -
          (ripple_size / 2);
        ripple_left =
          event.pageX -
          (
            (window.scrollX ? window.scrollX : window.pageXOffset) +
            element.getBoundingClientRect().left
          ) -
          (ripple_size / 2);
      } else {
        ripple_top = (element.offsetHeight / 2) - (ripple_size / 2);
        ripple_left = (element.offsetWidth / 2) - (ripple_size / 2);
      }

      /*
        This calculates what the ripple starting opacity and ending scale
        should be based on options.vigor.
      */
      if (options && options.vigor && !isNaN(options.vigor)) {
        // Clean up the "vigor" input
        if (options.vigor > 10) {
          options.vigor = 10;
        } else if (options.vigor < 1) {
          options.vigor = 1;
        }
        options.vigor = Math.round(options.vigor);

        // "1" vigor is "0.1" opacity, "10" vigor is "1" opacity
        starting_opacity = options.vigor / 10;

        if (options.vigor > 5) {
          // Add 0.4 to the ending scale for every "1" vigor above 5
          ending_scale = 2 + (
            0.4 * (options.vigor - 5)
          );
        } else if (options.vigor < 5) {
          // Remove 0.35 from the ending scale for every "1" vigor below 5
          ending_scale = 2 - (
            0.35 * (5 - options.vigor)
          );
        }

        /*
          Ending scale might end up as a weird value because of
          floating point numbers.
        */
        ending_scale = Math.round(ending_scale * 10) / 10;
      }


      /*
        Request animation frame tells the browser to run a function
        before the next screen repaint. We're using it to apply
        default styles to the ripple element before we transition it.
        For example we need the elements' opacity to be 0.5 before
        we can transition it to 0, otherwise it will transition
        from 1 opacity (the browser default) and look terrible.
        They way it's set up below, we're telling the browser we want it
        to apply the default styles before the next repaint, then apply
        the transition styles before the next repaint after that.
        This way the default styles will be applied before we try to
        transition the element.
      */
      // This function is for cross-browser support
      function requestAnimationFrame($_function, timeout_as_alternate) {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame($_function);
        } else if (window.webkitRequestAnimationFrame) {
          window.webkitRequestAnimationFrame($_function);
        } else if (window.mozRequestAnimationFrame) {
          window.mozRequestAnimationFrame($_function);
        } else {
          /*
            If the browser doesn't support requestAnimationFrame, we'll have
            to use setTimeout instead. It's not as reliable.
          */
          if (timeout_as_alternate) {
            setTimeout($_function, 50);
          } else {
            $_function();
          }
        }
      };

      requestAnimationFrame(function() {
        ripple_container.style.position = 'absolute';
        ripple_container.style.top = '0';
        ripple_container.style.left = '0';
        ripple_container.style.height = '100%';
        ripple_container.style.width = '100%';
        // So you can click on stuff behind the ripple (when it's rippling)
        ripple_container.style.pointerEvents = 'none';
        ripple_container.style.overflow = 'hidden';
        /*
          So the ripple doesn't appear to go "outside" an
          element with rounded corners.
        */
        ripple_container.style.borderRadius = element_border_radius;

        ripple.style.position = 'absolute';
        ripple.style.top = ripple_top + 'px';
        ripple.style.left = ripple_left + 'px';
        ripple.style.width = ripple_size + 'px';
        ripple.style.height = ripple_size + 'px';
        ripple.style.borderRadius = '50%';
        ripple.style.opacity = starting_opacity;
        // Ripple background should be black if it's inverted
        if (options && options.inverted) {
          ripple.style.backgroundColor = '#000';
        } else {
          ripple.style.backgroundColor = '#fff';
        }
        ripple.style.pointerEvents = 'none';
        ripple.style.transform =
          ripple.style.WebkitTransform =
          ripple.style.MsTransform =
          ripple.style.MozTransform =
          ripple.style.OTransform =
          'scale(0)';

        element.appendChild(ripple_container);
        ripple_container.appendChild(ripple);

        requestAnimationFrame(function() {
          ripple.style.opacity = '0';
          ripple.style.transform =
            ripple.style.WebkitTransform =
            ripple.style.MsTransform =
            ripple.style.MozTransform =
            ripple.style.OTransform =
            'scale(' + ending_scale + ')';
          ripple.style[supported_transition] =
            'opacity 0.4s linear 0s, transform 0.4s linear 0s';

          // Wait for transition to end, then remove the created elements
          ripple.addEventListener('transitionend', removeRipple, false);
          ripple.addEventListener('webkitTransitionEnd', removeRipple, false);

          function removeRipple(e) {
            if (ripple_container.parentNode) {
              ripple_container.parentNode.removeChild(ripple_container);
            }
          };
        }, true);
      });
    }
  }
};
