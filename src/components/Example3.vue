<template lang="html">
<section>
  <h3 class="example-header">Customize your ripples</h3>
  <div class="box" @click="uxRipple($event, null, {vigor: 2, inverted: $root.inverted})">
    <p>I make a little ripple</p>
  </div>
  <div class="box box-2" @click="uxRipple($event, null, {vigor: 10, inverted: $root.inverted})">
    <p>I make a big ripple</p>
  </div>
</section>
</template>


<script>
import uxRipple from 'ux-ripple';

export default {
  methods: {
    uxRipple
  }
};
</script>


<style lang="css" scoped>
.box {
  display: inline-block;
  border: 1px solid #fff;
}

.inverted .box {
  border-color: #111;
  border-width: 2px;
}

.box-2 {
  margin-left: 1em;
}

.box > p {
  padding: 1em 2em;
}

@media (max-width: 550px) {
  .box {
    display: block;
    text-align: center;
  }

  .box-2 {
    margin-top: 1em;
    margin-left: 0;
  }
}
</style>
