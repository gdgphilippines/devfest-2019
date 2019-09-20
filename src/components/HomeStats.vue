<template>
  <div class="HomeStats">
    <div class="HomeStats__container container">
      <div class="left">
        <h1 class="section-title">About DevFest Philipines</h1>
        <p>GDG Philippines is set to brought up once again the most awaited technology conference of the year - DevFest Philippines 2019.</p>
        <p>DevFest 2019 brings together experts in Android, Web and Cloud technologies to Manila for sessions, workshops and showcases. In this conference, our goal is to equip you with new knowledge and skills that you can immediately apply or bring back to your companies.</p>
        <a
          class="button-link button-link--inverted"
          target="_blank"
          rel="noreferrer"
          href="https://photos.app.goo.gl/Vwi7Lvt7CQhJw3gQ7"
        >See what happened in 2018</a>
        <br />
        <br />
      </div>
      <div class="HomeStats__grid">
        <div class="HomeStats__stat">
          <div class="HomeStats__statNumber">300+</div>
          <div class="HomeStats__statDivider"></div>
          <div class="HomeStats__statName">Attendees</div>
        </div>
        <div class="HomeStats__stat">
          <div class="HomeStats__statNumber">14</div>
          <div class="HomeStats__statDivider"></div>
          <div class="HomeStats__statName">Speakers</div>
        </div>
        <div class="HomeStats__stat">
          <div class="HomeStats__statNumber">4</div>
          <div class="HomeStats__statDivider"></div>
          <div class="HomeStats__statName">Tracks</div>
        </div>
        <div class="HomeStats__stat">
          <div class="HomeStats__statNumber">12</div>
          <div class="HomeStats__statDivider"></div>
          <div class="HomeStats__statName">Sessions</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import '../assets/style'

.HomeStats
  background-color: $color-surface

  &__container
    padding: 1rem 1rem 3rem 1rem
    @include from($desktop)
      padding: 3rem
      display: flex
      align-items: center
    @include from($hd)
      padding: 4rem 3rem

  .left
    @include from($desktop)
      margin-left: 2rem


  &__grid
    display: grid
    grid-template-columns: 1fr 1fr
    grid-template-rows: 1fr 1fr
    grid-gap: 1rem 2rem

    // Desktop only
    @include from($tablet)
      grid-gap: 1rem 3rem
      min-width: 35%
      margin-left: 2rem
    @include from($desktop)
      grid-gap: 1rem 5rem
      margin-left: 10rem

  &__stat
    // background-color: red
    // background-color: $color-primary
    // padding: 1rem

  &__statNumber
    font-size: 3.5rem
    
    @include from($hd)
      font-size: 4.5rem

  &__statDivider
    height: 0.25rem
    width: 5rem
    background-color: $color-primary
    background: linear-gradient(to right, $color-accent 33%, $color-primary 33%, $color-primary 66%, $color-secondary 66%)
    margin-top: 0.25rem
    @include from($hd)
      margin-top: 0.5rem
      height: 0.35rem
      width: 6rem
    

  &__statName
    margin-top: 0.5rem
    font-size: 1.05rem
    
    @include from($hd)
      font-size: 1.5rem
  
</style>