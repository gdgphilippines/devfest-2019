<template>
  <center class="HomeInclusions">
    <div class="HomeInclusions__container container">
      <h1 class="section-title" style="font-size: 1.75rem">Each Ticket Gives You</h1>
      <div class="HomeInclusions__inclusions">
        <div class="HomeInclusions__inclusion">
          <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M16,21H8A1,1 0 0,1 7,20V12.07L5.7,13.12C5.31,13.5 4.68,13.5 4.29,13.12L1.46,10.29C1.07,9.9 1.07,9.27 1.46,8.88L7.34,3H9C9,4.1 10.34,5 12,5C13.66,5 15,4.1 15,3H16.66L22.54,8.88C22.93,9.27 22.93,9.9 22.54,10.29L19.71,13.12C19.32,13.5 18.69,13.5 18.3,13.12L17,12.07V20A1,1 0 0,1 16,21M20.42,9.58L16.11,5.28C15.8,5.63 15.43,5.94 15,6.2C14.16,6.7 13.13,7 12,7C10.3,7 8.79,6.32 7.89,5.28L3.58,9.58L5,11L8,9H9V19H15V9H16L19,11L20.42,9.58Z"
            />
          </svg>
          <div class="HomeInclusions__inclusion-label">DevFest Shirt</div>
        </div>
        <div class="HomeInclusions__inclusion">
          <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M4,3C2.89,3 2,3.89 2,5V15A2,2 0 0,0 4,17H12V22L15,19L18,22V17H20A2,2 0 0,0 22,15V8L22,6V5A2,2 0 0,0 20,3H16V3H4M12,5L15,7L18,5V8.5L21,10L18,11.5V15L15,13L12,15V11.5L9,10L12,8.5V5M4,5H9V7H4V5M4,9H7V11H4V9M4,13H9V15H4V13Z"
            />
          </svg>
          <div class="HomeInclusions__inclusion-label">Certificate of Attendance</div>
        </div>
        <div class="HomeInclusions__inclusion">
          <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
            />
          </svg>
          <div class="HomeInclusions__inclusion-label">Conference Kit</div>
        </div>
        <div class="HomeInclusions__inclusion">
          <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M15.5,21L14,8H16.23L15.1,3.46L16.84,3L18.09,8H22L20.5,21H15.5M5,11H10A3,3 0 0,1 13,14H2A3,3 0 0,1 5,11M13,18A3,3 0 0,1 10,21H5A3,3 0 0,1 2,18H13M3,15H8L9.5,16.5L11,15H12A1,1 0 0,1 13,16A1,1 0 0,1 12,17H3A1,1 0 0,1 2,16A1,1 0 0,1 3,15Z"
            />
          </svg>
          <div class="HomeInclusions__inclusion-label">Food and Drinks</div>
        </div>
        <div class="HomeInclusions__inclusion">
          <svg style="width:5rem;height:5rem" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z"
            />
          </svg>
          <div class="HomeInclusions__inclusion-label">Access to Video Content</div>
        </div>
      </div>
    </div>
  </center>
</template>

<style lang="sass">
@import '../assets/style'

.HomeInclusions
  background-color: $color-surface
  padding: 2rem
  @include from($hd)
    padding: 3rem

  &__inclusions
    display: flex
    flex-wrap: wrap
    place-items: center
    justify-content: space-evenly
    
  &__inclusion
    width: 10rem
    margin: 1rem
    svg
      path
        fill: $color-accent

  &__inclusion-label
    font-size: 1.05rem
    @include from($hd)
      font-size: 1.45rem

  
</style>