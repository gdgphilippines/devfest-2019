<template>
  <div class="home">
    <homeLanding></homeLanding>
    <HomeStats></HomeStats>
    <HomeTickets></HomeTickets>
    <HomeInclusions></HomeInclusions>
    <!-- <HomePhotos></HomePhotos> -->
    <HomeAboutGDG></HomeAboutGDG>
    <!-- <HomeMap></HomeMap> -->
    <HomeSponsors></HomeSponsors>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeLanding from "@/components/HomeLanding";
import HomeStats from "@/components/HomeStats";
import HomeTickets from "@/components/HomeTickets";
import HomeInclusions from "@/components/HomeInclusions";
import HomePhotos from "@/components/HomePhotos";
import HomeAboutGDG from "@/components/HomeAboutGDG";
import HomeMap from "@/components/HomeMap";
import HomeSponsors from "@/components/HomeSponsors";
import HomeFooter from "@/components/HomeFooter";

export default {
  name: "home",
  mounted() {
    // window.scrollTo(0, 0);
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 300);
    window.addEventListener("beforeunload", function() {
      window.document.body.style.display = "none";
      window.scrollTo(0, 0);
    });
  },
  components: {
    HomeLanding,
    HomeStats,
    HomeTickets,
    HomeInclusions,
    HomePhotos,
    HomeAboutGDG,
    HomeMap,
    HomeSponsors,
    HomeFooter
  }
};
</script>

<style lang="sass">
@import '../assets/style'
.home
  color: $color-on-surface
</style>