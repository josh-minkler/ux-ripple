<template lang="html">
<div class="examples">
  <example-1/>
  <example-2/>
  <example-3/>
  <example-4/>
  <example-5/>
  <example-6/>
</div>
</template>


<script>
import Example1 from './Example1.vue';
import Example2 from './Example2.vue';
import Example3 from './Example3.vue';
import Example4 from './Example4.vue';
import Example5 from './Example5.vue';
import Example6 from './Example6.vue';

export default {
  components: {
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6
  }
};
</script>


<style lang="css" scoped>
.examples {
  text-align: left;
  padding-bottom: 2em;
}
</style>
