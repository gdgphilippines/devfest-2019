<template>
  <div class="HomeSponsors">
    <div class="container">
      <!-- <h1 class="section-title">Sponsors</h1> -->
      <ul class="HomeSponsors__categories">
        <li
          class="HomeSponsors__category"
          v-for="category in sponsorCategories"
          :key="category.name"
        >
          <h1 class="HomeSponsors__categoryname section-title">{{category.name}}</h1>
          <ul class="HomeSponsors__sponsors">
            <li v-for="sponsor in category.sponsors" :key="sponsor.name">
              <clazy-load :src="'/assets/partners/' + sponsor.image">
                <img class="HomeSponsors__sponsorimage" :src="'/assets/partners/' + sponsor.image" />
              </clazy-load>
            </li>
          </ul>
        </li>
      </ul>
      <p>For sponsorships, email us at</p>
      <span class="HomeSponsors__email">
        <a href="mailto:gdgphmarketing@gmail.com">gdgphmarketing@gmail.com</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      sponsorCategories: [
        {
          name: "Community Partners",
          sponsors: [
            {
              name: "DevCon",
              image: "devcon.png"
            },
            {
              name: "Flutter PH",
              image: "flutter-ph.png"
            },
            {
              name: "Girls Will Code",
              image: "girls-will-code.png"
            },
            {
              name: "Space PH",
              image: "space-ph.png"
            },
            {
              name: "PWA Pilipinas",
              image: "pwa-pilipinas.png"
            },

            {
              name: "Women Who Code Manila",
              image: "women-who-code-manila.png"
            },
            {
              name: "VR Philippines",
              image: "vr-ph.png"
            },
            {
              name: "UXPH",
              image: "uxph.png"
            },
            {
              name: "Philippine Web Designers",
              image: "philippine-web-designers.png"
            }
          ]
        }
      ]
    };
  }
};
</script>


<style lang="sass">
@import '../assets/style'

.HomeSponsors
  background-color: $color-surface
  text-align: center
  border-top: 1px solid rgba(0,0,0,0.5)
  border-bottom: 1px solid rgba(0,0,0,0.5)
  padding-top: 2rem
  padding-bottom: 5rem

  &__categories
    list-style-type: none
    padding: 0
    margin: 0

  &__sponsors
    list-style-type: none
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: center
    padding: 0
    margin: 0
    

  &__sponsorimage
    max-width: 7rem
    max-height: 7rem
    margin: 2rem 4rem
    @include from($hd)
      margin: 3rem 5rem
      max-width: 10rem
      max-height: 10rem

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