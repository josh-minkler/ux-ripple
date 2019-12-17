<template lang="html">
<section>
  <h3 class="example-header">Ripple your buttons</h3>
  <button class="button" @click="uxRipple($event, null, {inverted: $root.inverted})">Button</button>
</section>
</template>


<script>
import UXRipple from '../mixins/UXRipple.js';

export default {
  mixins: [UXRipple]
};
</script>


<style lang="css" scoped>
.button {
  font-size: 1.5em;
  padding: 1em 3em;
  border: none;
  border-radius: 0.3em;
  outline: none;
  background-color: #900;
  color: #fff;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.button:focus {
  background-color: #700;
}

.button:active {
  background-color: #500;
}

.inverted .button {
  background-color: #c00;
}

@media (max-width: 500px) {
  .button {
    font-size: 1em;
  }
}
</style>
