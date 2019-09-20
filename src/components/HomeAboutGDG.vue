<template>
  <div class="HomeAboutGDG">
    <div class="HomeAboutGDG__container container">
      <clazy-load src="/assets/team.jpg" :threshold="0">
        <transition name="fade" appear>
          <div class="HomeAboutGDG__image"></div>
        </transition>
        <div class="preloader" slot="placeholder"></div>
      </clazy-load>

      <div class="HomeAboutGDG__about">
        <h1 class="section-title">About GDG Philippines</h1>
        <p>Google Developer Group (GDG) Philippines is a group of enthusiastic Filipino developers interested to collaborate and learn more about new technologies.</p>
        <p>GDG Philippines is an independent group; our activities and the opinions expressed on any of our official social media pages should in no way be linked to Google, the corporation.</p>
        <a
          class="button-link button-link--white"
          target="_blank"
          rel="noreferrer"
          href="https://www.gdgph.org/#/team"
        >Meet the Team</a>
      </div>
    </div>
  </div>
</template>


<style lang="sass">
@import '../assets/style'
.HomeAboutGDG
  background-color: $color-surface
  background: url(/assets/abstract-background.png)
  background-size: cover


  &__container
    padding: 2rem 1rem
    @include from($tablet)
      padding: 3rem
    @include from($desktop)
      display: flex
      align-items: stretch
      align-content: stretch
    @include from($hd)
      padding: 4rem 3rem

  &__image
    background: url(/assets/team.jpg)
    background-size: cover
    background-position: center
    background-repeat: no-repeat

  &__image, .loaded
    width: 100%
    
    margin: auto
    border-radius: 1rem
    height: 250px
    @include from($tablet)
      height: 300px
    @include from($desktop)
      margin-right: 3rem
      max-width: 40vw
    @include from($hd)
      height: 400px

  &__about
    @include from($hd)
      width: 50%

  
</style>