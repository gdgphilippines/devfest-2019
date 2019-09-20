<template>
  <div class="HomeLanding">
    <!-- Background cover for mobile -->
    <clazy-load src="/assets/cover.png">
      <transition name="scalein" appear>
        <div class="HomeLanding__background HomeLanding__background--mobile"></div>
      </transition>
      <div class="preloader" slot="placeholder"></div>
    </clazy-load>

    <!-- Background cover for desktop -->
    <clazy-load src="/assets/cover.png">
      <transition name="scalein" appear>
        <div class="HomeLanding__background HomeLanding__background--desktop" v-parallax="0.4"></div>
      </transition>
      <div class="preloader" slot="placeholder"></div>
    </clazy-load>
    <!-- Video background-->
    <transition name="fade" appear>
      <div class="HomeLanding__overlay" v-cloak>
        <div class="HomeLanding__particles">
          <clazy-load src="/assets/matrix-left.svg">
            <img src="/assets/matrix-left.svg" class="HomeLanding__matrix-left" alt />
            <div class="preloader" slot="placeholder"></div>
          </clazy-load>
          <clazy-load src="/assets/matrix-right.svg">
            <img src="/assets/matrix-right.svg" class="HomeLanding__matrix-right" alt />
            <div class="preloader" slot="placeholder"></div>
          </clazy-load>

          <div class="HomeLanding__bar-top element"></div>
          <div class="HomeLanding__bar-bottom element"></div>
          <div class="HomeLanding__box-left element"></div>
          <div class="HomeLanding__box-right-one element"></div>
          <div class="HomeLanding__box-right-two element"></div>
        </div>
        <!-- logo -->
        <clazy-load src="/assets/logo-only-white.svg">
          <transition name="slideup" appear>
            <div class="HomeLanding__devfest-logo">
              <img
                class="HomeLanding__devfest-logo-image"
                src="/assets/logo-only-white.svg"
                alt="DevFest Philippines Logo"
              />
              <div class="HomeLanding__devfest-logo-textgroup">
                <h1 class="HomeLanding__devfest-logo-text">
                  GDG DevFest
                  <br />Philippines 2019
                </h1>
              </div>
            </div>
          </transition>
          <transition name="slideup" appear>
            <div class="HomeLanding__tagline">Moving Beyond Innovation</div>
          </transition>
          <transition name="slideup" appear>
            <div class="HomeLanding__motto" style="transition-delay: 0.1s">
              The Grandest Technology
              <br />Conference in the Philippines
            </div>
          </transition>
          <transition name="slideup" appear>
            <div class="HomeLanding__details" style="transition-delay: 0.2s">
              <div class="HomeLanding__date">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path
                    fill="#ffffff"
                    d="M19,4H18V2H16V4H8V2H6V4H5C3.89,4 3,4.9 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M19,8H5V6H19V8Z"
                  />
                </svg>
                <p>November 23, 2019</p>
              </div>
              <div class="HomeLanding__venue">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path
                    fill="#ffffff"
                    d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"
                  />
                </svg>
                <p>Novotel Manila</p>
              </div>
            </div>
          </transition>
          <br />
          <button @click="scrollToTickets()" class="HomeLanding__cta">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="#ffffff"
                d="M15.58,16.8L12,14.5L8.42,16.8L9.5,12.68L6.21,10L10.46,9.74L12,5.8L13.54,9.74L17.79,10L14.5,12.68M20,12C20,10.89 20.9,10 22,10V6C22,4.89 21.1,4 20,4H4A2,2 0 0,0 2,6V10C3.11,10 4,10.9 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12Z"
              />
            </svg>
            <span class="HomeLanding__cta-text">Buy Ticket</span>
          </button>
          <div class="HomeLanding__mouse"></div>
          <div class="preloader" slot="placeholder"></div>
        </clazy-load>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTickets() {
      // window.scroll({
      //   top: window.document.querySelector(".HomeTickets").offsetTop,
      //   left: 0,
      //   behavior: "smooth"
      // });
      window.document.querySelector(".HomeTickets").scrollIntoView();
    }
  }
};
</script>

<style lang="sass">
@import '../assets/style'

.HomeLanding
  height: 100vh
  min-height: 35rem
  background-position: center
  background-size: cover
  position: relative
  top: 0
  right: 0
  bottom: 0
  left: 0
  overflow: hidden
  color: $color-on-background

  &__background
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: url('/assets/cover.png')
    background-position: center
    background-size: cover
    width: 100%
    height: 100%
    display: none
    // filter: blur(2px)

    &--mobile
      @include to($tablet)
        display: block
    &--desktop
      @include from($desktop)
        display: block

  &__overlay
    padding: 1rem
    position: absolute
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    background: linear-gradient($color-secondary, transparent, transparent, $color-secondary)

  [v-cloak]
    animation-name: ssrfade
    animation-duration: 2s

  @keyframes ssrfade
    0%
      opacity: 0
    50%
      opacity: 0
    100%
      opacity: 1
      transform: scale(1)

  &__particles
    width: 100vw
    height: 100vh
    position: absolute

  .element
    opacity: 1
    @include to($tablet)
      display: none

  &__matrix-left
    position: absolute
    left: -15rem
    bottom: 8rem
    height: 6.5rem
    @include from($desktop)
      left: -15rem
      height: 9.5rem
    @include from($hd)
      height: 12.5rem
      bottom: 13rem
      left: -15rem

  &__matrix-right
    position: absolute
    top: -4rem
    right: -3rem
    height: 12rem
    @include from($desktop)
      height: 16rem
    @include from($hd)
      height: 20rem
      top: -2rem

  &__bar-top
    position: absolute
    width: 10rem
    height: 1rem
    background-color: white
    left: 7rem
    top: 9rem
    @include from($hd)
      height: 1.5rem
      width: 15rem
      top: 12rem
      left: 9rem


  &__bar-bottom
    position: absolute
    width: 10rem
    height: 1rem
    background-color: white
    right: 7rem
    bottom: 6rem
    @include from($hd)
      height: 1.5rem
      width: 15rem
      right: 12rem
      bottom: 10rem

  &__box-left
    position: absolute
    width: 1.5rem
    height: 1.5rem
    background-color: white
    left: 15rem
    bottom: 5rem
    @include from($hd)
      height: 2.5rem
      width: 2.5rem
      left: 20rem
      bottom: 9rem

  &__box-right-one
    position: absolute
    width: 1.5rem
    height: 1.5rem
    background-color: white
    right: 10rem
    top: 8.5rem
    @include from($hd)
      height: 2.5rem
      width: 2.5rem
      right: 15.5rem
      top: 12rem

  &__box-right-two
    position: absolute
    width: 1.5rem
    height: 1.5rem
    background-color: white
    right: 8.5rem
    top: 10rem
    @include from($hd)
      height: 2.5rem
      width: 2.5rem
      right: 13rem
      top: 14.5rem



  

  &__devfest-logo
    z-index: 1
    margin-top: 2rem
    display: flex
    align-items: center
    justify-content: center

  &__devfest-logo-text
    margin: 0
    font-weight: normal
    
    font-size: 1.25rem
    line-height: 1.25rem
    @include from($tablet)
      font-size: 1.75rem
      line-height: 1.75rem
    @include from($desktop)
      font-size: 1.75rem
      line-height: 1.75rem
    @include from($hd)
      font-size: 2.5rem
      line-height: 2.5rem


  &__devfest-logo-image
    height: 2rem
    margin-right: 0.75rem
    @include from($tablet)
      height: 2.75rem
    @include from($hd)
      height: 3.5rem

  .loaded
    display: flex
    flex-direction: column
    align-items: center

  &__details
    z-index: 1
    display: flex
    align-items: center
    flex-direction: column
    @include from($tablet)
      flex-direction: row
    svg
      margin-right: 0.25rem
      width: 2rem !important
      height: 2rem !important
      @include from($hd)
        width: 3rem !important
        height: 3rem !important
      
    p
      font-size: 1.45rem
      margin: 0.25rem
      @include from($hd)
        font-size: 2.25rem
  &__date
    display: flex
    align-items: center
  &__venue
    display: flex
    align-items: center
    @include from($desktop)
      margin-left: 1rem
  
    
    @include from($desktop)
      padding: 0.25rem 0.5rem
      font-size: 1.75rem
    @include from($hd)
      padding: 0.5rem 1rem
      font-size: 2.75rem

  &__tagline
    z-index: 1
    text-align: center
    letter-spacing: 0.2rem
    display: inline
    font-weight: normal
    
    font-size: 0.75rem
    // background-color: $color-on-primary
    // color: $color-secondary
    padding: 0.5rem
    @include from($tablet)
      letter-spacing: 0.25rem
      font-size: 1rem
    @include from($hd)
      font-size: 1.65rem

  &__motto
    display: flex
    align-items: center
    font-size: 1.75rem
    min-height: 2.5rem
    margin-top: 2rem
    margin-bottom: 1.5rem
    color: $color-on-primary
    
    text-align: center
    text-transform: uppercase
    @include from($tablet)
      font-size: 2.5rem
      min-height: 5.5rem
    @include from($desktop)
      font-size: 2.75rem
      min-height: 7rem
    @include from($hd)
      font-size: 4rem
      min-height: 7.5rem
      margin-top: 4rem
      margin-bottom: 3rem

  &__cta
    margin-top: 2rem
    margin-bottom: 2rem
    z-index: 1
    text-decoration: none
    padding: 0.5rem 1.5rem
    cursor: pointer
    outline: none
    background-color: transparent
    border: 0.2rem solid $color-on-primary
    border-radius: 1rem
    display: flex
    align-items: center
    transition: 0.2s background-color
    @include from($tablet)
      display: none

    &:hover
      background-color: transparentize($color-on-primary, 0.7)

    @include from($hd)
      svg
        transform: scale(1.5)

  &__cta-text
    color: $color-on-background
    
    font-size: 1.25rem
    margin-left: 0.5rem
    @include from($hd)
      font-size: 2rem
      margin-left: 1rem

  &__mouse
    width: 1.5rem
    height: 2.25rem
    border: 0.1rem solid $color-on-background
    border-radius: 1rem
    margin-top: 2rem
    position: relative
    @include to($phone)
      display: none
    @include from($hd)
      margin-top: 6rem
      transform: scale(1.5)

    &::after
      content: ''
      position: absolute
      height: 0.6rem
      width: 0.25rem
      background-color: $color-on-background
      border-radius: 0.5rem
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      animation: mousetrack 1s infinite alternate

  @keyframes mousetrack
    0%
      transform: translate(-50%, -50%)
    100%
      transform: translate(-50%, -100%)

  &__video
    background-color: $color-secondary
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    

@media (min-aspect-ratio: 16/9)
  .HomeLanding__video
    height: 300%
    top: -100%

@media (max-aspect-ratio: 16/9)
  .HomeLanding__video
    width: 300%
    left: -100%
</style>
