<template>
  <div class="PageNotFound container">
    <h1>404</h1>
    <br />
    <h2>Sorry, the page you were looking for is not available.</h2>
  </div>
</template>

<style lang="sass">
@import '../assets/style'
.PageNotFound
  width: 100%
  height: 100vh
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  
  color: $color-on-background
  text-align: center

  h1
    margin: 0
    font-size: 4rem

  h2
    font-weight: normal
</style>