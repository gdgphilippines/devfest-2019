<template>
  <div class="AppNavigation">
    <nav class="AppNavigation__nav" ref="appBar">
      <div class="AppNavigation__container container">
        <div class="AppNavigation__devfest-logo">
          <img
            class="AppNavigation__devfest-logo-image"
            src="/assets/logo-only-colored.svg"
            alt="DevFest Philippines Logo"
          />
          <h1 class="AppNavigation__devfest-logo-text">
            GDG DevFest
            <br />Philippines 2019
          </h1>
        </div>
        <a class="AppNavigation__menu" @click="asideSync = true">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="#FFFFFF" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </a>
        <ul class="AppNavigation__navlinks">
          <li>
            <router-link
              :to="{name: route.name}"
              :key="route.path"
              class="AppNavigation__navlink"
              v-for="route in indexNavigationRoutes"
            >{{route.name}}</router-link>
          </li>
          <!-- <li>
            <button
              @click="scrollToTickets()"
              class="AppNavigation__navlink AppNavigation__navlink--cta"
            >
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path
                  fill="#ffffff"
                  d="M15.58,16.8L12,14.5L8.42,16.8L9.5,12.68L6.21,10L10.46,9.74L12,5.8L13.54,9.74L17.79,10L14.5,12.68M20,12C20,10.89 20.9,10 22,10V6C22,4.89 21.1,4 20,4H4A2,2 0 0,0 2,6V10C3.11,10 4,10.9 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12Z"
                />
              </svg>
              <span>Buy Ticket</span>
            </button>
          </li> -->
          <!-- <li>
            <button
              @click="scrollToTickets()"
              class="AppNavigation__navlink AppNavigation__navlink--cta"
            >
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path
                  fill="#ffffff"
                  d="M9 10A3.04 3.04 0 0 1 12 7A3.04 3.04 0 0 1 15 10A3.04 3.04 0 0 1 12 13A3.04 3.04 0 0 1 9 10M12 19L16 20V16.92A7.54 7.54 0 0 1 12 18A7.54 7.54 0 0 1 8 16.92V20M12 4A5.78 5.78 0 0 0 7.76 5.74A5.78 5.78 0 0 0 6 10A5.78 5.78 0 0 0 7.76 14.23A5.78 5.78 0 0 0 12 16A5.78 5.78 0 0 0 16.24 14.23A5.78 5.78 0 0 0 18 10A5.78 5.78 0 0 0 16.24 5.74A5.78 5.78 0 0 0 12 4M20 10A8.04 8.04 0 0 1 19.43 12.8A7.84 7.84 0 0 1 18 15.28V23L12 21L6 23V15.28A7.9 7.9 0 0 1 4 10A7.68 7.68 0 0 1 6.33 4.36A7.73 7.73 0 0 1 12 2A7.73 7.73 0 0 1 17.67 4.36A7.68 7.68 0 0 1 20 10Z"
                />
              </svg>
              <span>Become a Speaker</span>
            </button>
          </li>-->
        </ul>
      </div>
    </nav>
    <transition name="fade">
      <div v-show="asideSync" class="AppNavigation__asidebg" @click="asideSync = false"></div>
    </transition>
    <transition name="slideleft">
      <aside v-show="asideSync" class="AppNavigation__aside">
        <div class="AppNavigation__devfest-logo">
          <img
            class="AppNavigation__devfest-logo-image"
            src="/assets/logo-only-colored.svg"
            alt="DevFest Philippines Logo"
          />
          <h1 class="AppNavigation__devfest-logo-text">
            GDG DevFest
            <br />Philippines 2019
          </h1>
        </div>
        <button
          @click="scrollToTickets(); asideSync = false"
          class="AppNavigation__navlink AppNavigation__navlink--cta"
        >
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M15.58,16.8L12,14.5L8.42,16.8L9.5,12.68L6.21,10L10.46,9.74L12,5.8L13.54,9.74L17.79,10L14.5,12.68M20,12C20,10.89 20.9,10 22,10V6C22,4.89 21.1,4 20,4H4A2,2 0 0,0 2,6V10C3.11,10 4,10.9 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12Z"
            />
          </svg>
          <span>Buy Ticket</span>
        </button>
        <ul class="AppNavigation__links">
          <li v-for="route in indexNavigationRoutes" :key="route.path" @click="asideSync = false">
            <router-link class="AppNavigation__link" :to="{name: route.name}">{{route.name}}</router-link>
          </li>
        </ul>
      </aside>
    </transition>
  </div>
</template>

<style lang="sass">
@import '../assets/style'

.AppNavigation
  width: 100%
  position: fixed
  top: 0
  left: 0
  right: 0
  z-index: 10

  &__nav
    position: sticky
    top: 0
    background-color: transparent
    color: $color-on-background
    transition: 0.2s background-color, 0.2s box-shadow
    box-shadow: 0px 4px 4px rgba(0,0,0,0)
    will-change: background-color, box-shadow

    &--fill
      background-color: $color-surface
      box-shadow: 0px 4px 4px rgba(0,0,0,0.2)

      .AppNavigation__container
        padding-top: 0rem

      .AppNavigation__devfest-logo
        opacity: 1

      .AppNavigation__devfest-logo-text
        color: $color-on-surface

      .AppNavigation__navlink
        color: $color-on-surface

        &.router-link-exact-active
          border-bottom-color: $color-accent !important

  &__asidebg
    width: 100%
    height: 100%
    position: fixed
    left: 0
    top: 0
    background-color: rgba(0,0,0,0.5)
    z-index: 0
  
  &__aside
    position: fixed
    top: 0
    height: 100vh
    width: 80vw
    max-width: 18rem
    background-color: $color-surface
    box-shadow: 4px 0px 4px rgba(0,0,0,0.2)
    @include from($tablet)
      display: none
    
    .AppNavigation
      &__links
        list-style: none
        padding: 0
        margin: 0
      &__link
        display: inline-block
        padding: 0.5rem 2rem
        font-size: 1.1rem
        color: $color-on-background
        text-decoration: none
        
        border-left: 0.25rem solid transparent


        &.router-link-exact-active
          border-left: 0.25rem solid $color-primary !important

    
  
    
  &__container
    display: flex
    justify-content: space-between
    align-items: center
    @include from($tablet)
      padding-top: 0.5rem
      transition: 0.2s padding-top
      will-change: padding-top
    @include from($hd)
      padding-top: 1.5rem
      

  .AppNavigation__nav 
  
    .AppNavigation__devfest-logo
      opacity: 1
      transition: opacity 0.4s
      display: flex
      align-items: center
      @include to($phone)
        display: none
    .AppNavigation__devfest-logo-text
      @include from($hd)
        font-size: 1.5rem
    .AppNavigation__devfest-logo-image
      width: 3rem
      @include from($hd)
        width: 5rem


  .AppNavigation__aside 
    .AppNavigation__devfest-logo
      opacity: 1
      transition: opacity 0.4s
      display: flex
      align-items: center
      padding: 2rem
      color: $color-on-background
  
  &__devfest-logo-image
    width: 2.5rem
    @include from($hd)
      width: 3rem

  &__devfest-logo-text
    
    font-size: 1.1rem
    margin: 0 0.5rem
    font-weight: normal
    @include from($hd)
      font-size: 1.25rem

  &__navlinks
    margin: 0
    padding: 0
    list-style: none
    display: flex
    align-items: center
    outline: none

    

  &__menu
    padding: 0.5rem
    margin: 0.5rem 0
    @include from($tablet)
      display: none

  &__navlink
    display: inline-block
    margin-top: 0.25rem
    padding: 1.25rem 1rem
    
    text-decoration: none
    color: $color-on-background
    font-size: 1.05rem
    border-bottom: 0.2rem solid transparent
    @include from($hd)
      font-size:  1.5rem
      padding: 1.5rem 1.5rem
    &:hover:not(.AppNavigation__navlink--cta)
      border-bottom: 0.2rem solid transparentize($color-primary, 0.5)


    @include to($phone)
      display: none

    &.router-link-exact-active
      border-bottom: 0.2rem solid $color-accent !important


    &--cta
      background-color: transparent
      cursor: pointer
      outline: none
      white-space: nowrap
      display: flex
      align-items: center
      border: 0.1rem solid $color-on-primary
      border-radius: 1rem
      padding: 0.5rem 1rem
      margin: 0.75rem 0.25rem
      @include from($hd)
        border-radius: 1.25rem
        padding: 0.75rem 1.5rem

      svg
        margin-right: 0.5rem

      &:hover
        background-color: transparentize($color-on-primary, 0.5)

.AppNavigation__nav
  .AppNavigation__navlink--cta
    @include to($phone)
      display: none

.AppNavigation__aside
  .AppNavigation__navlink--cta
    @include to($phone)
      display: inline-flex
      margin-left: 2rem
      
      
</style>

<script>
import { indexNavigationRoutes } from "@/assets/data/routes.js";
import { setTimeout } from "timers";
export default {
  data: function() {
    return {
      asideSync: false,
      indexNavigationRoutes,
      lastScrollTop: 0,
      lastRelativePosition: 0,
      autoStyle: {}
    };
  },
  methods: {
    scrollToTickets() {
      if (this.$route.path === "/")
        window.scroll({
          top:
            window.document.querySelector(".HomeTickets").offsetTop -
            window.document.querySelector(".AppNavigation__nav").clientHeight,
          left: 0,
          behavior: "smooth"
        });
      else {
        this.$router.push("/");
        setTimeout(() => {
          window.scroll({
            top:
              window.document.querySelector(".HomeTickets").offsetTop -
              window.document.querySelector(".AppNavigation__nav").clientHeight,
            left: 0,
            behavior: "smooth"
          });
        }, 1000);
      }
    }
  },
  watch: {
    appBarDisplay: {
      immediate: true,
      handler: function(value) {
        window.addEventListener(
          "scroll",
          () => {
            // or window.addEventListener("scroll"....
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

            // if (st > this.lastScrollTop) {
            //   if (
            //     Math.abs(this.lastRelativePosition - st) <
            //     this.$refs.appBar.clientHeight
            //   ) {
            // if scroll difference is less than size and scroll viewport is at nav original location
            // this.autoStyle = {
            //   transform:
            //     "translateY(" + (this.lastRelativePosition - st) + "px)",
            //   transition: "0s transform, 0.4s background-color"
            // };
            // } else {
            // this.autoStyle = {
            //   transform: "translateY(-100%)",
            //   transition: "0.1s transform, 0.4s background-color"
            // };
            //   }
            // } else {
            // this.autoStyle = {
            //   transform: "translateY(0)",
            //   transition: "0.4s transform, 0.4s background-color"
            // };
            this.lastRelativePosition = st <= 0 ? 0 : st;
            this.$refs.appBar.classList.add("AppNavigation__nav--fill");
            // }
            this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
            if (st === 0) {
              this.$refs.appBar.classList.remove("AppNavigation__nav--fill");
            } else {
              this.$refs.appBar.classList.add("AppNavigation__nav--fill");
            }
          },
          false
        );
      }
    }
  }
};
</script>