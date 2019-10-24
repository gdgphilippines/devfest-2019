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
          <transition name="scalein" mode="out-in">
            <a
              :key="selectedAlbum.year"
              :href="selectedAlbum.link"
              target="_blank"
              rel="noreferrer"
              class="HomePhotos__mainbutton button-link"
            >
              <span style="display: inline-block; transition-duration: 0.3s">{{selectedAlbum.year}}</span>
              &nbsp;Highlight Photos
            </a>
          </transition>
        </div>

        <div
          class="HomePhotos__griditem HomePhotos__griditem--hasphoto"
          :key="photo"
          v-for="photo in selectedAlbum.photos"
        >
          <clazy-load :src="photo" :threshold="0" :ratio="0">
            <transition name="fadescale" appear>
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
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2018%2F1.jpg?alt=media&token=d8239b72-8d4e-43a1-8ed1-18b58854b702",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2018%2F2.jpg?alt=media&token=5a8509cb-f83e-405f-8b42-bea6d49b6ef9",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2018%2F3.jpg?alt=media&token=263d2ced-68ea-4719-a147-2d66a795840f",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2018%2F4.jpg?alt=media&token=0c338c02-9990-494f-95c7-8fce28e15e1c",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2018%2F5.jpg?alt=media&token=606d2a97-e1e0-43d0-8a4f-da9c2e934272",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2018%2F6.jpg?alt=media&token=fe24015c-463b-4ced-9bbd-f9eebc11a62b",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2018%2F7.jpg?alt=media&token=33366f91-06cb-4bde-b625-b51665e43ed4"
          ]
        },
        {
          year: "2017",
          link: "https://photos.app.goo.gl/wtVxLphf9ERMkWtYA",
          photos: [
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2017%2F1.jpg?alt=media&token=b7093d4f-11dd-4704-ae59-268987306eb1",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2017%2F2.jpg?alt=media&token=5092f6aa-f323-465e-bbaf-d3fabe5475fc",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2017%2F3.jpg?alt=media&token=b04032c4-5229-4166-81ff-c04bd5e04d8b",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2017%2F4.jpg?alt=media&token=3bf56191-c587-43b9-a533-bf86e6216972",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2017%2F5.jpg?alt=media&token=abd63a99-1001-4c3b-af7e-c5f80226008a",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2017%2F6.jpg?alt=media&token=7459a138-69ea-4860-876a-6da841df9072",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2017%2F7.jpg?alt=media&token=bb385da4-c5b0-4abd-aec8-3923463e1ef0"
          ]
        },
        {
          year: "2016",
          link: "https://photos.app.goo.gl/jTsuUu3irxmNSNKs9",
          photos: [
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2016%2F1.JPG?alt=media&token=47f7c92a-a8a0-4267-87b9-811eab833038",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2016%2F2.JPG?alt=media&token=3461610f-fb46-4e44-a87a-47cd8e84b211",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2016%2F3.JPG?alt=media&token=c7f3282d-d024-4ebc-ba9b-e11b6b633f83",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2016%2F4.JPG?alt=media&token=05fd9112-e304-406a-8298-54e34682c034",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2016%2F5.JPG?alt=media&token=f32078c0-73cc-4c68-82df-ade4d6beb5c0",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2016%2F6.JPG?alt=media&token=4466a1a8-5c80-4ed0-942f-ea945fc70124",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2016%2F7.JPG?alt=media&token=9edddd95-b4fa-4f7c-9374-59f157e2e2da"
          ]
        },
        {
          year: "2015",
          link: "https://photos.app.goo.gl/4wmm3vvYzCvZiaAu9",
          photos: [
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2015%2F1.jpg?alt=media&token=e2a7e317-5d3a-4f07-add8-0eba8d8eb260",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2015%2F2.jpg?alt=media&token=775325bf-3dc6-47e7-9f6d-69cf57bc91c0",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2015%2F3.jpg?alt=media&token=f301f49c-2e20-4094-9ccd-745a332db6d4",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2015%2F4.jpg?alt=media&token=acb1a9f4-37b1-4753-acc2-183d8f29078b",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2015%2F5.jpg?alt=media&token=60431dce-284d-49b4-8298-0c35f62ca722",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2015%2F6.jpg?alt=media&token=37df987e-dca8-4032-8efd-b506fa427c73",
            "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Past%20Galleries%2F2015%2F7.jpg?alt=media&token=d90e12a9-51ca-422f-8933-50d781a9c42b"
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