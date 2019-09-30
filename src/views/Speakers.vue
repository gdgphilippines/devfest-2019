<template>
  <div class="Speakers">
    <div class="Speakers__container container">
      <h1 class="Speakers__title section-title">Speakers</h1>
      <p class="Speakers__about">
        Hear from the Googlers, Partners, and Guest Speakers who are building the future of tech.
        <br />Check back often as we add more speakers, including our customers and partners.
      </p>
      <div class="Speakers__speakers">
        <div
          class="Speakers__speaker"
          v-for="speaker in speakers"
          :key="speaker.name"
          @click="selectedSpeaker = speaker; speakerModalShown=true"
        >
          <clazy-load :src="'/assets/speakers/' + speaker.id + '.jpg'">
            <transition name="fade" appear>
              <div
                class="Speakers__speaker-photo"
                :style="'background-image: url(/assets/speakers/' + speaker.id + '.jpg'"
              />
            </transition>
          </clazy-load>
          <p class="Speakers__speaker-name">{{speaker.name}}</p>
          <p class="Speakers__speaker-title">{{speaker.position}}, {{speaker.company}}</p>
          <p class="Speakers__speaker-country">{{speaker.country}}</p>
        </div>
      </div>
    </div>
    <!-- <div class="Speakers__modalwrapper" v-if="speakerModalShown">
      <div class="Speakers__modal">
        <div class="Speakers__modal-speaker-photo"></div>
        <div class="Speakers__modal-elements">
          <div class="Speakers__modal-element Speakers__modal-element-cross"></div>
          <div class="Speakers__modal-element Speakers__modal-element-dots"></div>
          <div class="Speakers__modal-element Speakers__modal-element-slash">///</div>
          <div class="Speakers__modal-element Speakers__modal-element-close"></div>
        </div>
        <div class="Speakers__modal-speaker-details">
          <p class="Speakers__modal-speaker-name">Cho Eun</p>
          <p class="Speakers__modal-speaker-title">Software Engineer, Finastra</p>
          <p class="Speakers__modal-speaker-country">Philippines</p>

          <p
            class="Speakers__modal-speaker-bio"
          >Android developer, currently works at EPAM. Have experience in both server and mobile side development. All my free time I spend on the endless search of silver bullets, perfect architectures and holy wars.</p>
        </div>
      </div>
    </div>-->
    <transition name="scalein">
      <div
        class="Speakers__modalwrapper"
        v-if="speakerModalShown"
        style="transition-duration: 0.3s"
      >
        <div class="Speakers__modalbackground" @click="speakerModalShown = false"></div>
        <div class="Speakers__modal">
          <div class="Speakers__modal-close" @click="speakerModalShown = false">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="#ffffff"
                d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
              />
            </svg>
            <span>Close</span>
          </div>
          <transition name="slideup" appear>
            <div
              class="Speakers__modal-photo"
              :style="'background-image: url(/assets/speakers/' + selectedSpeaker.id + '.jpg'"
            ></div>
          </transition>
          <div class="container">
            <div class="Speakers__modal-name">{{selectedSpeaker.name}}</div>
            <div
              class="Speakers__modal-title"
            >{{selectedSpeaker.position}}, {{selectedSpeaker.company}}</div>
            <div class="Speakers__modal-country">{{selectedSpeaker.country}}</div>
            <p class="Speakers__modal-bio">{{selectedSpeaker.bio}}</p>
            <h2 class="Speakers__modal-heading">Session</h2>
            <p class="Speakers__modal-session">{{selectedSpeaker.session}}</p>
          </div>
        </div>
      </div>
    </transition>
    <center>
      <h1 class="Speakers__toberevealed">More speakers to be revealed soon!</h1>
    </center>
    <br />
    <br />
    <br />
  </div>
</template>

<style lang="sass">
@import '../assets/style'
.Speakers

  &__container
    padding: 0.5rem
  &__title
    margin-top: 6rem
    @include from($desktop)
      margin-top: 10rem
  &__about
    color: $color-on-background
  &__speakers
    margin-top: 2rem
    padding-top: 2rem
    border-top: 1px solid rgba(0,0,0,0.5)
    display: flex
    align-items: center
    justify-content: center
    flex-wrap: wrap
  &__speaker
    cursor: pointer
    display: flex
    flex-direction: column
    align-items: center
    text-align: center
    margin-bottom: 1rem
    width: 15rem
    border: 1px solid transparent
    transition: 0.2s border-color
    -webkit-tap-highlight-color: transparent
    // border-radius: 1rem
    @include from($tablet)
      margin: 1rem 2rem
      width: 20rem
    &:hover
      // background-color: rgba(255,255,255,0.2)
      border: 1px solid white
  &__speaker-photo
    margin-top: 1rem
    border-radius: 50%
    width: 8rem
    height: 8rem
    background-size: cover
    background-position: center
  &__speaker-name
    font-size: 1.5rem
    color: $color-on-background
    margin-bottom: 0
  &__speaker-title
    margin-top: 0
    color: $color-on-background
    margin-bottom: 0
    max-width: 80%
    font-family: $font-family-secondary
    @include from($hd)
      font-size: 1.25rem
  &__speaker-country
    color: $color-on-background
    margin-top: 0
    font-family: $font-family-secondary
    @include from($hd)
      font-size: 1.25rem

  &__modalwrapper
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    z-index: 10
  &__modalbackground
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100vh
    background-color: rgba(0,0,0,0.75)
  
  &__modal
    background-color: $color-background
    background: url(/assets/abstract-background.png)
    background-size: cover
    width: calc(100% - 2rem)
    height: calc(100% - 10rem)
    overflow: auto
    position: relative
    text-align: center
    @include from($tablet)
      display: flex
      align-items: stretch
      height: 25rem
      max-width: 50rem
      text-align: left
      overflow: initial
    @include from($hd)
      height: 30rem
      max-width: 60rem

    .container
      overflow: initial
      height: 100%
      @include from($tablet)
        padding: 1rem 2rem
        overflow: auto
        &::-webkit-scrollbar
          display: none
  &__modal-photo
    height: 50vw
    will-change: transform
    background-size: cover
    background-position: center
    @include from($tablet)
      width: 25rem
      height: 100%

  &__modal-name
    font-size: 1.5rem
    background-color: $color-on-background
    color: $color-background
    display: inline-block
    padding: 0.25rem
    font-weight: bold
    margin-bottom: 0
    margin-top: 1rem
    @include from($tablet)
      font-size: 1.75rem
    @include from($hd)
      font-size: 2.25rem
  &__modal-title
    margin-top: 0.5rem
    color: $color-on-background
    max-width: 90%
    margin-left: auto
    margin-right: auto
    margin-bottom: 0
    font-size: 1.15rem
    @include from($tablet)
      margin: 0.5rem 0 0
    @include from($hd)
      font-size: 1.5rem
  &__modal-country
    color: $color-on-background
    margin-top: 0
    @include from($hd)
      font-size: 1.25rem

  &__modal-bio
    color: $color-on-background
    text-align: left
    white-space: pre-wrap
    font-size: 1rem
    font-family: $font-family-secondary
    @include from($tablet)
      margin-top: 2rem
  &__modal-heading
    margin-top: 2rem
    color: $color-on-background
    font-weight: normal
  &__modal-session
    color: $color-on-background
    margin-bottom: 1rem
    @include from($hd)
      font-size: 1.25rem
  &__modal-close
    z-index: 20
    text-transform: uppercase
    cursor: pointer
    color: $color-on-background
    background-color: rgba(0,0,0,0.5)
    padding: 0.25rem
    position: absolute
    right: 0rem
    top: 0rem
    display: flex
    align-items: center
    @include from($tablet)
      background-color: transparent
      top: -2rem
      right: 0rem
      z-index: 20
    @include from($hd)
      font-size: 1.5rem
      top: -3rem
      svg
        width: 2rem !important
        height: 2rem !important
  &__toberevealed
    margin-bottom: 0
    color: $color-background
    background-color: $color-on-background
    display: inline-block
    padding: 0.25rem 0.5rem
    

  // &__modal-speaker-photo
  //   width: 25rem
  //   height: 100%
  //   position: absolute
  //   z-index: 0
  //   top: 2rem
  //   right: 0rem
  //   clip-path: polygon(40% 0, 100% 0%, 60% 100%, 0 100%)
  //   background-image: url(https://i.pravatar.cc/300)
  //   background-size: cover
  //   background-position: center

  // &__modal-elements
  //   position: absolute
  //   top: 0
  //   left: 0
  //   width: 100%
  //   height: 100%

  // &__modal-element-cross
  //   width: 4rem
  //   height: 4rem
  //   background-color: white
  //   clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 50%, 50% 100%, 0 100%)
  //   position: absolute
  //   bottom: -2rem
  //   right: -2rem

  // &__modal-element-dots
  //   width: 16rem
  //   height: 6rem
  //   background-image: radial-gradient(white 8%, transparent 10%)
  //   background-size: 2rem 2rem
  //   position: absolute
  //   left: 1rem
  //   bottom: 0

  // &__modal-element-slash
  //   position: absolute
  //   color: white
  //   font-size: 4rem
  //   top: -2rem
  //   right: 20rem

  // &__modal-element-close
  //   position: absolute
  //   width: 2rem
  //   height: 2rem
  //   background-color: transparentize(white, 0.7)
  //   border-radius: 50%
  //   right: -1rem
  //   top: -1rem

  //   &::before
  //     content: ''
  //     width: 100%
  //     height: 100%
  //     width: 1rem
  //     height: 1rem
  //     top: 50%
  //     transform: translate(-50%, -50%)
  //     left: 50%
  //     background-color: white
  //     position: absolute
  //     clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)

  // &__modal-speaker-details
  //   position: relative
  //   z-index: 0
  // &__modal-speaker-name
  //   display: inline-block
  //   margin: 0
  //   font-size: 2.5rem
  //   color: $color-background
  //   background-color: white
  //   font-weight: bold
  //   padding: 0rem 0.5rem
  // &__modal-speaker-title
  //   color: $color-on-background
  // &__modal-speaker-bio
  //   margin-top: 2rem
  //   color: $color-on-background
  //   width: 50%
  //   opacity: 0.75

    
    
</style>

<script>
import speakers from "@/assets/data/speakers";
export default {
  data: function() {
    return {
      speakerModalShown: false,
      selectedSpeaker: {},
      speakers
    };
  }
};
</script>