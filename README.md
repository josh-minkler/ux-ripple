# UX Ripple

Function that generates a UX ripple in any element.<br/>
[Demo](https://josh-minkler.github.io/ux-ripple/)

## Getting started

Install with npm

    npm install --save ux-ripple

Simply call the `uxRipple` function to create a ripple.

    import uxRipple from 'ux-ripple';
    uxRipple(event, element, options);

### Usage

You must pass an event or an element to the `uxRipple` function so it knows where to put the ripple.

-   If you pass an element, it will put the ripple inside that element
-   If you pass an event, it will put the ripple inside the element the event was attached to
-   If you pass both, it will put the ripple inside the element, but position it based on the events' mouse position

```
// Usage with an event

myElement.addEventListener('click', uxRipple);

myElement.addEventListener('click', function(e) {
    uxRipple(e);
    // Your code for handling a click
});

// If you pass an event with no mouse position,
// it will ripple from the center of the element.
myElement.addEventListener('focus', uxRipple);
```
```
// Usage with an element

// This will ripple from the center of myElement
uxRipple(null, myElement);
```
```
// You can also pass both an event and an element

myElement.addEventListener('click', function(e) {
    uxRipple(e, anotherElement);
});
```

### Options

**Vigor:** Determines how vigorously your element ripples. Should be an integer from 1 to 10. Default is 5.<br/>
**Inverted:** Inverts the ripple when `true`.  Default is `false`.

    uxRipple(event, element, { vigor: 5, inverted: false });

## Browser support

In unsupported browsers, calling `uxRipple()` will simply do nothing.<br/>
Supported in all browsers that support CSS transitions. Internet explorer 10+<br/>
[View support on caniuse](https://caniuse.com/#search=CSS%20Transitions)
