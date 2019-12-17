<template lang="html">
<section>
  <h3 class="example-header">Have full control over your ripples</h3>
  <div class="rippling-parent" @click="uxRipple($event, childContainer, {inverted: $root.inverted})">
    <p>Click out here!</p>
    <div class="rippling-child" id="ChildContainer">
      Ripple is only visible in here
    </div>
  </div>
</section>
</template>


<script>
import UXRipple from '../mixins/UXRipple.js';

export default {
  mixins: [UXRipple],
  data: function() {
    return {
      childContainer: null
    };
  },
  mounted: function() {
    this.childContainer = document.getElementById('ChildContainer');
  }
};
</script>


<style lang="css" scoped>
.rippling-parent {
  position: relative;
}

.rippling-child {
  margin: 4em 5em;
  padding: 2em;
}

.rippling-parent,
.rippling-child {
  border: 1px solid #fff;
}

.inverted .rippling-parent,
.inverted .rippling-child {
  border-color: #111;
  border-width: 2px;
}

.rippling-parent > p {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5em 1em;
}

@media (max-width: 500px) {
  .rippling-child {
    margin-left: 1.5em;
    margin-right: 1.5em;
    text-align: center;
  }
}
</style>
