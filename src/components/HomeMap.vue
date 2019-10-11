<template>
  <div class="HomeMap">
    <center>
      <iframe
        class="HomeMap__map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6294615164798!2d121.05203351398961!3d14.620171880518342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM3JzEyLjYiTiAxMjHCsDAzJzE1LjIiRQ!5e0!3m2!1sen!2sph!4v1569978742593!5m2!1sen!2sph"
        frameborder="0"
        style="border:0;"
        allowfullscreen
      ></iframe>
    </center>
    <div id="location">
      <h2>Location</h2>
      <p>
        <b style="color: white">Novotel Manila Araneta Center</b> is a mid-scale hotel in Quezon City's business and leisure district with access to LRT and MRT stations.
      </p>
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <p>
          <small>
            Gen. Aguinaldo Ave, Cubao,
            <br />Quezon City
          </small>
        </p>
        <a
          href="https://goo.gl/maps/V9BDMV22r5yHfQHc7"
          target="_blank"
          rel="noreferrer"
          style="cursor: pointer"
        >
          <svg style="width:36px;height:36px;cursor: pointer" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M14,14.5V12H10V15H8V11A1,1 0 0,1 9,10H14V7.5L17.5,11M21.71,11.29L12.71,2.29H12.7C12.31,1.9 11.68,1.9 11.29,2.29L2.29,11.29C1.9,11.68 1.9,12.32 2.29,12.71L11.29,21.71C11.68,22.09 12.31,22.1 12.71,21.71L21.71,12.71C22.1,12.32 22.1,11.68 21.71,11.29Z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/style";
center {
  display: flex;
}
.HomeMap {
  position: relative;
}

// .HomeMap__map {
//   filter: brightness(0.8) contrast(1.3) invert(1) sepia(1) hue-rotate(-167deg)
//     saturate(4);
// }
iframe {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

#location {
  width: 100%;
  padding: 1rem 2rem;
  background-color: $color-primary;
  color: white !important;
  @include from($tablet) {
    // height: 280px;
    // width: 325px;
    width: 375px;
    position: absolute;
    left: 70px;
    bottom: -20px;
    // background-color: #730df6;
    border-radius: 5px;
    // padding: 15px 20px 15px 20px;
  }

  @include from($hd) {
    width: 500px;
  }
}
</style> 
