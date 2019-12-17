<template lang="html">
<div class="container">
  <hr class="divider"/>
  <a
    class="view-on-github"
    href="https://github.com/josh-minkler/vuejs-ux-ripple"
    @click.stop
  >
    View on GitHub
  </a>
  <hr class="divider"/>
</div>
</template>


<script>
export default {};
</script>


<style lang="css" scoped>
.container {
  margin-top: 2em;
  text-align: center;
}

.view-on-github {
  font-size: 1.5em;
  color: #0d3;
  text-decoration: none;
  cursor: pointer;
}

.divider {
  border-color: #0d3;
}
</style>
