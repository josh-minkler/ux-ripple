<template>
<div id="app" :class="{'inverted': $root.inverted}" @click="uxRipple($event, null, {vigor: 2, inverted: $root.inverted})">
  <div class="content-container">
    <h1 class="main-header">Vuejs UX Ripple</h1>
    <hr />
    <p>Click anywhere to see the ripple.</p>
    <invert-page />
    <examples />
    <view-on-git-hub />
  </div>
</div>
</template>

<script>
import InvertPage from './components/InvertPage.vue';
import Examples from './components/Examples.vue';
import ViewOnGitHub from './components/ViewOnGitHub.vue';
import UXRipple from './mixins/UXRipple.js';

export default {
  components: {
    InvertPage,
    Examples,
    ViewOnGitHub
  },
  mixins: [UXRipple]
};
</script>

<style>
body {
  text-align: center;
  font-size: 18px;
  min-width: 320px;
  margin: 0;
  padding: 0;
  -ms-overflow-style: none;
  color: #0cf;
  font-family: Arial, sans-serif;
}

body::-webkit-scrollbar {
  display: none;
}

#app {
  padding: 45px 15px 50px 15px;
  background-color: #000;
}

#app.inverted {
  background-color: #fff;
}

hr {
  border-color: #0cf;
}

.main-header {
  font-size: 4em;
  margin: 0;
}

.content-container {
  width: 800px;
  margin: 0 auto;
}

@media (max-width: 829px) {
  .content-container {
    width: 100%;
  }

  .main-header {
    font-size: 3.5em;
  }
}

@media (max-width: 500px) {
  #app {
    padding-top: 35px;
  }

  .main-header {
    font-size: 3em;
  }
}
</style>
