<template lang="html">
<section>
  <h3 class="example-header">Ripple any element, any time</h3>
  <div id="AutoSubmit">Auto-submit in {{auto_submit_in}}</div>
</section>
</template>


<script>
import UXRipple from '../mixins/UXRipple.js';

export default {
  mixins: [UXRipple],
  data: function() {
    return {
      auto_submit_element: null,
      auto_submit_in: 3
    };
  },
  mounted() {
    this.auto_submit_element = document.getElementById('AutoSubmit');
    this.updateAutoSubmit();
  },
  methods: {
    updateAutoSubmit: function() {
      setTimeout(function() {
        this.auto_submit_in -= 1;

        if (this.auto_submit_in === 0) {
          this.uxRipple(null, this.auto_submit_element, {
            vigor: 7,
            inverted: this.$root.inverted
          });
        } else if (this.auto_submit_in === -1) {
          this.auto_submit_in = 3;
        }

        this.updateAutoSubmit();
      }.bind(this), 1000);
    }
  }
};
</script>


<style lang="css" scoped>
#AutoSubmit {
  display: inline-block;
  font-size: 1.5em;
  padding: 1em 3em;
  border: none;
  border-radius: 0.3em;
  outline: none;
  background-color: #900;
  color: #fff;
  -webkit-tap-highlight-color: transparent;
}

.inverted #AutoSubmit {
  background-color: #c00;
}

@media (max-width: 500px) {
  #AutoSubmit {
    font-size: 1em;
  }
}
</style>
