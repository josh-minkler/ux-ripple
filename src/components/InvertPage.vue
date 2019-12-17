<template lang="html">
<div class="container">
  <input
    id="InvertPage"
    type="checkbox"
    v-model="$root.inverted"
    @click.stop
  />
  <label class="invert-page" for="InvertPage" @click.stop>Invert ripples</label>
</div>
</template>


<script>
export default {};
</script>


<style lang="css" scoped>
.container {
  text-align: left;
}

.invert-page {
  margin-left: 0.2em;
  color: #0d3;
  cursor: pointer;
}
</style>
