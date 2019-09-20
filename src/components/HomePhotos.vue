<template>
  <div class="HomePhotos">
    <div class="HomePhotos__container">
      <div class="HomePhotos__grid">
        <div class="HomePhotos__griditem HomePhotos__main">
          <div class="HomePhotos__mainlinks">
            <a
              class="HomePhotos__mainlink"
              :class="selectedAlbum == album.year ? 'active' : ''"
              @click="selectedAlbum = album.year"
              v-for="album in albums"
              :key="album.year"
            >{{album.year}}</a>
          </div>
          <h2 class="HomePhotos__maintitle">#devfest19 Highlights</h2>
          <p
            class="HomePhotos__mainparagraph"
          >Check out photos from featured talks, hands-on learning sessions, and after-hours fun.</p>
          <a
            :href="albums.find(album => album.year == selectedAlbum).link"
            target="_blank"
            rel="noreferrer"
            class="HomePhotos__mainbutton button-link"
          >{{selectedAlbum}} Highlight Photos</a>
        </div>

        <div class="HomePhotos__griditem"></div>
        <div class="HomePhotos__griditem"></div>
        <div class="HomePhotos__griditem"></div>
        <div class="HomePhotos__griditem"></div>
        <div class="HomePhotos__griditem"></div>
        <div class="HomePhotos__griditem"></div>
        <div class="HomePhotos__griditem"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      selectedAlbum: "2018",
      albums: [
        {
          year: "2018",
          link: "https://photos.app.goo.gl/Vwi7Lvt7CQhJw3gQ7"
        },
        {
          year: "2017",
          link: "https://photos.app.goo.gl/wtVxLphf9ERMkWtYA"
        },
        {
          year: "2016",
          link: "https://photos.app.goo.gl/jTsuUu3irxmNSNKs9"
        },
        {
          year: "2015",
          link: "https://photos.app.goo.gl/4wmm3vvYzCvZiaAu9"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
@import '../assets/style'

.HomePhotos
  background-color: $color-surface
  padding: 2rem 0

  &__main
    grid-area: main
    display: block
    padding: 1.5rem

  &__mainlink
    display: inline-block
    padding: 0 1rem
    padding-bottom: 0.5rem
    border-bottom: 0.2rem solid transparent
    cursor: pointer
    font-size: 1.05rem

    &.active
      border-bottom: 0.2rem solid $color-on-primary

  &__maintitle
    display: none
    
  &__mainparagraph
    padding: 0
    
    font-weight: normal

  &__mainbutton
    color: $color-on-background
    border: 0.1rem solid $color-accent !important
    &::after
      border-left: 10px solid $color-on-primary !important
    &:hover
      border-color: $color-on-primary !important
      color: $color-on-background
      &::after
        transform: translateY(-50%) translateX(0.25rem)

  &__grid
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-template-areas: 'one one two' 'three four two' 'main main main' 'five six six' 'seven six six'
    grid-gap: 0.5rem
    @include from($desktop)
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr
      grid-template-areas: 'one one two three three' 'one one main main four' 'five six six seven four'
  
  &__griditem
    background-color: $color-primary
    min-height: 20vw
    @include from($desktop)
      min-height: 13vw
    &:nth-child(2)
      grid-area: one
    &:nth-child(3)
      grid-area: two
    &:nth-child(4)
      grid-area: three
    &:nth-child(5)
      grid-area: four
    &:nth-child(6)
      grid-area: five
    &:nth-child(7)
      grid-area: six
    &:nth-child(8)
      grid-area: seven
      
  
  
</style>