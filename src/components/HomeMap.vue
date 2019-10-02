<template>
  <div class="HomeMap">
    <center>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6319607470577!2d121.05224131484054!3d14.620029689790078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7c07aad92cf%3A0xc3b7e3f370b96d0e!2sNovotel%20Manila%20Araneta%20City!5e0!3m2!1sen!2sph!4v1569919338301!5m2!1sen!2sph" width="800" height="600" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </center>
    <div id="location">
      <h2>Location</h2>
      <br>
      Novotel Manila Araneta Center is a mid-scale hotel in Quezon City's business and leisure district with access to LRT and MRT stations.
      <h5>Gen. Aguinaldo Ave, Quezon City, Philippines</h5>
    </div>

  </div>
</template>

<style>
  .HomeMap, iframe {
    height: 100vh;
    width: 100vw;
    position: relative;
  }
  #location {
    height: 280px;
    width: 325px;
    position: absolute;
    margin-left: 70px;
    margin-bottom: -20px;
    background-color: #730df6;
    border-radius: 5px;
    padding: 15px 20px 15px 20px;
  }
</style> 
