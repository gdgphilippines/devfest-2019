<template>
  <div id="app">
    <!-- Main route -->
    <!-- <clazy-load src="/assets/cover.png"> -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <!-- <AppPreloader slot="placeholder"></AppPreloader>
    </clazy-load>-->
  </div>
</template>



<style lang="sass">
@import '/assets/style'

#app
  background-color: $color-background
  min-height: 100vh
  min-width: 100%

html,body
  scroll-behavior: smooth
  font-family: $font-family-primary

button, input
  font-family: inherit



</style>
