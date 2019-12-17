<template lang="html">
<section>
  <h3 class="example-header">Ripple your menus</h3>
  <div class="menu">
    <div class="item" @click="uxRipple($event, null, {inverted: $root.inverted})">Apples</div>
    <div class="item" @click="uxRipple($event, null, {inverted: $root.inverted})">Oranges</div>
    <div class="item" @click="uxRipple($event, null, {inverted: $root.inverted})">Pears</div>
  </div>
</section>
</template>


<script>
import UXRipple from '../mixins/UXRipple.js';

export default {
  mixins: [UXRipple]
};
</script>


<style lang="css" scoped>
.item {
  font-size: 1.5em;
  padding: 0.5em;
  border: 1px solid #fff;
  border-bottom: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

.item:last-of-type {
  border-bottom: 1px solid #fff;
}

.inverted .item {
  border-color: #111;
  border-width: 2px;
}
</style>
