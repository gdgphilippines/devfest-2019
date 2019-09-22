<template>
  <div class="HomePhotos">
    <div class="HomePhotos__container">
      <div class="HomePhotos__grid">
        <div class="HomePhotos__griditem HomePhotos__main">
          <div class="HomePhotos__mainlinks">
            <a
              class="HomePhotos__mainlink"
              :class="selectedAlbum.year == album.year ? 'active' : ''"
              @click="selectedAlbum = album"
              v-for="album in albums"
              :key="album.year"
            >{{album.year}}</a>
          </div>
          <h2 class="HomePhotos__maintitle">#devfest19 Highlights</h2>
          <p
            class="HomePhotos__mainparagraph"
          >Check out photos from featured talks, hands-on learning sessions, and after-hours fun.</p>
          <a
            :href="selectedAlbum.link"
            target="_blank"
            rel="noreferrer"
            class="HomePhotos__mainbutton button-link"
          >
            <transition name="scalein" mode="out-in">
              <span
                style="display: inline-block; transition-duration: 0.3s"
                :key="selectedAlbum.year"
              >{{selectedAlbum.year}}</span>
            </transition>&nbsp;Highlight Photos
          </a>
        </div>

        <div
          class="HomePhotos__griditem HomePhotos__griditem--hasphoto"
          :key="photo"
          v-for="photo in selectedAlbum.photos"
        >
          <clazy-load :src="photo">
            <transition name="fadescale" appear :ratio="0.1" :threshold="0">
              <div class="HomePhotos__photo" :style="{backgroundImage: 'url(' + photo + ')'}"></div>
            </transition>
            <div class="preloader" slot="placeholder"></div>
          </clazy-load>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.selectedAlbum = this.albums[0];
  },
  data: function() {
    return {
      albums: [
        {
          year: "2018",
          link: "https://photos.app.goo.gl/Vwi7Lvt7CQhJw3gQ7",
          photos: [
            "/assets/2018/1.jpg",
            "/assets/2018/2.jpg",
            "/assets/2018/3.jpg",
            "/assets/2018/4.jpg",
            "/assets/2018/5.jpg",
            "/assets/2018/6.jpg",
            "/assets/2018/7.jpg"
          ]
        },
        {
          year: "2017",
          link: "https://photos.app.goo.gl/wtVxLphf9ERMkWtYA",
          photos: [
            "/assets/2017/1.jpg",
            "/assets/2017/2.jpg",
            "/assets/2017/3.jpg",
            "/assets/2017/4.jpg",
            "/assets/2017/5.jpg",
            "/assets/2017/6.jpg",
            "/assets/2017/7.jpg"
          ]
        },
        {
          year: "2016",
          link: "https://photos.app.goo.gl/jTsuUu3irxmNSNKs9",
          photos: [
            "/assets/2016/1.jpg",
            "/assets/2016/2.jpg",
            "/assets/2016/3.jpg",
            "/assets/2016/4.jpg",
            "/assets/2016/5.jpg",
            "/assets/2016/6.jpg",
            "/assets/2016/7.jpg"
          ]
        },
        {
          year: "2015",
          link: "https://photos.app.goo.gl/4wmm3vvYzCvZiaAu9",
          photos: [
            "/assets/2015/1.jpg",
            "/assets/2015/2.jpg",
            "/assets/2015/3.jpg",
            "/assets/2015/4.jpg",
            "/assets/2015/5.jpg",
            "/assets/2015/6.jpg",
            "/assets/2015/7.jpg"
          ]
        }
      ],
      selectedAlbum: {}
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
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    padding: 1.5rem
    @include from($hd)
      padding: 3rem

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
    grid-gap: 0.75rem
    @include from($desktop)
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr
      grid-template-areas: 'one one two three three' 'one one main main four' 'five six six seven four'
  
  &__griditem
    background-color: $color-primary
    
    min-height: 30vw
    @include from($desktop)
      min-height: 16vw
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
    &--hasphoto
      position: relative
      overflow: hidden

      
  &__photo
    position: absolute
    background-size: cover
    background-position: center
    width: 100%
    height: 100%
    opacity: 0.75
        
  
  
</style>