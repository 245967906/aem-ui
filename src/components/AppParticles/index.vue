<template>
  <vue-particles
    color="#e1e1e1"
    :particleOpacity="0.5"
    :particlesNumber="20"
    shapeType="circle"
    :particleSize="12"
    linesColor="#cfcfcf"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.26"
    :linesDistance="600"
    :moveSpeed="2"
    :hoverEffect="false"
    :clickEffect="false"
  >
  </vue-particles>
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

export default {
  name: 'AppParticles'
}
</script>

<style lang="stylus" scoped>
#particles-js
  position absolute
  top 0
  z-index 0
  width 100%
  height 100%
</style>
