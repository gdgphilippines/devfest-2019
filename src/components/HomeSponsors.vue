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
          <h2 class="HomeSponsors__categoryname section-title">{{category.name}}</h2>
          <ul class="HomeSponsors__sponsors">
            <li v-for="sponsor in category.sponsors" :key="sponsor.name">
              <clazy-load :src="sponsor.image">
                <img
                  class="HomeSponsors__sponsorimage"
                  :src="sponsor.image"
                  :title="sponsor.name"
                  :alt="sponsor.name"
                />
              </clazy-load>
            </li>
          </ul>
        </li>
      </ul>
      <br />
      <hr />
      <br />
      <ul class="HomeSponsors__categories">
        <li
          class="HomeSponsors__category"
          v-for="category in communityCategories"
          :key="category.name"
        >
          <h1 class="HomeSponsors__categoryname section-title">{{category.name}}</h1>
          <ul class="HomeSponsors__sponsors">
            <li v-for="sponsor in category.sponsors" :key="sponsor.name">
              <clazy-load :src="sponsor.image">
                <img
                  class="HomeSponsors__communityimage"
                  :src="sponsor.image"
                  :title="sponsor.name"
                  :alt="sponsor.name"
                />
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
          name: "Powered by",
          sponsors: [
            {
              name: "Google",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fgoogle.png?alt=media&token=8514fee8-142f-444f-bb31-4010d67042ee"
            }
          ]
        },
        {
          name: "Special thanks to",
          sponsors: [
            {
              name: "Coffee Bean and Tea Leaf",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2FCBTL%20New.png?alt=media&token=0e5f32eb-cc62-4f48-b57a-6bdd5306fad9"
            },
            {
              name: "Senti Techlabs",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fsenti-full-white.png?alt=media&token=cbc9b060-8913-4b48-9813-8e327bcff484"
            }
          ]
        },
        {
          name: "Official Media Partners",
          sponsors: [
            {
              name: "ABS-CBN News Channel",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2FANC_logo_reg_FINAL%20copy.png?alt=media&token=8d87fd9f-3746-4be4-a760-6f18807e4379"
            },
            {
              name: "Adobo Magazine",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fadobo%20magazine%20full%20colour.png?alt=media&token=28644cf1-38fe-47d9-a777-94e3b2ee3f2c"
            },
            {
              name: "Ambidextr",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2FAmbidextr_logo_negative.png?alt=media&token=5d284662-a813-4a5b-bb9f-44d98b603923"
            },
            {
              name: "Philippine Primer",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2FPrimer%20English%20Logo%20on%20white%20background.jpg?alt=media&token=88c63fda-ae66-48a5-b8de-97777a9e9520"
            }
          ]
        }
      ],
      communityCategories: [
        {
          name: "Community Partners",
          sponsors: [
            {
              name: "DevCon",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fdevcon.png?alt=media&token=9de79c6f-c56c-473d-a459-27974e054454"
            },
            {
              name: "Flutter PH",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fflutter-ph.png?alt=media&token=a5b3e4f9-2358-474c-aa8b-717701fd6070"
            },
            {
              name: "Girls Will Code",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fgirls-will-code.png?alt=media&token=17f287eb-739e-4a37-badc-1ca7c3a98b21"
            },
            {
              name: "QBO",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fqbo.png?alt=media&token=c41158e1-6dec-48e5-80e1-06aeccf4c381"
            },
            {
              name: "Philippine Android Developer Community",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fphandroid-head-2014%20(1).png?alt=media&token=92f36207-11e3-48e0-a928-7216c8bdd10a"
            },
            {
              name: "Kotlin Philippines",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2F18739705_181969042329089_4568479661334659617_n%20(1).png?alt=media&token=e6382f89-fa96-4bd5-9c7d-62baaf1de510"
            },
            {
              name: "Space PH",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fspace-ph.png?alt=media&token=f093629f-58bc-44c7-9a70-57948feccefc"
            },
            {
              name: "PWA Pilipinas",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fpwa-pilipinas.png?alt=media&token=5ceaf74b-7796-4920-ba57-3b928f9bf2a0"
            },

            {
              name: "Women Who Code Manila",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fwomen-who-code-manila.png?alt=media&token=5c84a549-afd6-4273-98d0-3ad6d9911c48"
            },
            {
              name: "VR Philippines",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fvr-ph.png?alt=media&token=cbac16f0-2288-4663-b66f-b79de1bbc09b"
            },
            {
              name: "UXPH",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fuxph.png?alt=media&token=c6ed965d-233e-44f9-a814-46461c9f54db"
            },
            {
              name: "Philippine Web Designers Organization",
              image:
                "https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Sponsor%20Photos%2Fphilippine-web-designers.png?alt=media&token=b1275eac-1b1e-4caa-90fd-999f5ca1a5dc"
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
    max-width: 10rem
    max-height: 8rem
    margin: 2rem 4rem
    @include from($hd)
      margin: 3rem 5rem
      max-width: 13rem
      max-height: 10rem

  &__communityimage
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