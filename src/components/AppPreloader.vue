<template>
  <div class="app-preloader">
    <div class="app-wrapper">
      <div class="blue ball"></div>
      <div class="red ball"></div>
      <div class="yellow ball"></div>
      <div class="green ball"></div>
    </div>
  </div>
</template>

<style lang="sass">
@import '../assets/style'

.app-preloader
  position: fixed
  background-color: $color-background
  z-index: 1
  display: flex
  align-items: center
  justify-content: center
  width: 100vw
  height: 100vh

.app-wrapper
  display: flex
  justify-content: center
  align-items: center
  height: 200px

.ball 
  width: 22px
  height: 22px
  border-radius: 11px
  margin: 0 10px
  
  animation: 2s bounce ease infinite

.blue
  background-color: #4285F5
  animation-delay: -0.75s

.red
  background-color: #EA4436
  animation-delay: -0.5s
  background-color: $color-primary

.yellow 
  background-color: #FBBD06
  animation-delay: -0.25s
  background-color: $color-on-background

.green
  background-color: #34A952
  background-color: $color-primary
  background-color: #4285F5

@keyframes bounce 
  50%
    transform: translateY(25px)

</style>