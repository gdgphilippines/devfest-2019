<template>
  <div class="HomeSponsors">
    <h1 class="section-title">Sponsors</h1>
    <p>For sponsorships, email us at</p>
    <span class="HomeSponsors__email">
      <a href="mailto:gdgphmarketing@gmail.com">gdgphmarketing@gmail.com</a>
    </span>
  </div>
</template>


<style lang="sass">
@import '../assets/style'

.HomeSponsors
  background-color: $color-surface
  text-align: center
  border-top: 1px solid rgba(0,0,0,0.5)
  border-bottom: 1px solid rgba(0,0,0,0.5)
  padding-top: 2rem
  padding-bottom: 5rem

  &__email a
    text-decoration: none
    background-color: transparentize($color-background, 0.7)
    color: $color-accent
    
    font-size: 1.15rem
    padding: 0.5rem 1rem
    @include from($hd)
      font-size: 1.45rem
      padding: 0.75rem 1.25rem
</style>