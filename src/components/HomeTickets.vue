<template>
  <div class="HomeTickets">
    <center>
      <h1 class="section-title">Tickets</h1>
    </center>
    <div class="HomeTickets__tickets">
      <div class="HomeTickets__ticket">
        <h1 class="HomeTickets__ticketName">Regular</h1>
        <h2 class="HomeTickets__ticketPrice"></h2>
        <p class="HomeTickets__ticketDetails" style="transform: scale(1.75); margin: 2rem">Sold out!</p>
        <a class="HomeTickets__button">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M15.58,16.8L12,14.5L8.42,16.8L9.5,12.68L6.21,10L10.46,9.74L12,5.8L13.54,9.74L17.79,10L14.5,12.68M20,12C20,10.89 20.9,10 22,10V6C22,4.89 21.1,4 20,4H4A2,2 0 0,0 2,6V10C3.11,10 4,10.9 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12Z"
            />
          </svg>
          <span>Buy Ticket</span>
        </a>
      </div>
      <div class="HomeTickets__ticket">
        <h1 class="HomeTickets__ticketName">Early Bird</h1>
        <h2 class="HomeTickets__ticketPrice"></h2>
        <p class="HomeTickets__ticketDetails" style="transform: scale(1.75); margin: 2rem">Sold out!</p>
        <a class="HomeTickets__button">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M15.58,16.8L12,14.5L8.42,16.8L9.5,12.68L6.21,10L10.46,9.74L12,5.8L13.54,9.74L17.79,10L14.5,12.68M20,12C20,10.89 20.9,10 22,10V6C22,4.89 21.1,4 20,4H4A2,2 0 0,0 2,6V10C3.11,10 4,10.9 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12Z"
            />
          </svg>
          <span>Buy Ticket</span>
        </a>
      </div>
      <div class="HomeTickets__ticket">
        <h1 class="HomeTickets__ticketName">Blind Bird</h1>
        <h2 class="HomeTickets__ticketPrice"></h2>
        <p class="HomeTickets__ticketDetails" style="transform: scale(1.75); margin: 2rem">Sold out!</p>
        <a class="HomeTickets__button">
          <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M15.58,16.8L12,14.5L8.42,16.8L9.5,12.68L6.21,10L10.46,9.74L12,5.8L13.54,9.74L17.79,10L14.5,12.68M20,12C20,10.89 20.9,10 22,10V6C22,4.89 21.1,4 20,4H4A2,2 0 0,0 2,6V10C3.11,10 4,10.9 4,12A2,2 0 0,1 2,14V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V14A2,2 0 0,1 20,12Z"
            />
          </svg>
          <span>Buy Ticket</span>
        </a>
      </div>
    </div>

    <!-- <a name="paymentmethods" style="padding-top: 4rem; display: inline-block;"></a> -->
    <center>
      <br>
      <div style="margin: 2rem; line-height: 1.5rem; max-width: 50rem; border: 1px solid white; padding: 2rem">
              For Official Receipt requests, please email at
              <a
                style="color: white;"
                href="mailto:gdgphmarketing@gmail.com"
              >gdgphmarketing@gmail.com</a>. Note that there will be an additional fee on top of the actual ticket cost. The Official Receipt will be issued weeks after the event.
            </div>
      <!-- <h1 class="section-title">Payment Methods</h1>
      <div class="HomeTickets__paymentmodes">
        <div class="HomeTickets__paymentmode">
          <svg style="width:42px;height:42px" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M21,8V6H7V8H21M21,16V11H7V16H21M21,4A2,2 0 0,1 23,6V16A2,2 0 0,1 21,18H7C5.89,18 5,17.1 5,16V6C5,4.89 5.89,4 7,4H21M3,20H18V22H3A2,2 0 0,1 1,20V9H3V20Z"
            />
          </svg>
          <h2 class="HomeTickets__paymentmodetitle">Online Payment</h2>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://gdgdevfest2019.eventbrite.com"
            class="HomeTickets__customlink"
            style="background-color: #D1410C"
          >
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="#ffffff"
                d="M12,17.5C10.15,17.5 8.42,16.56 7.41,15L17.41,12.75L22.08,11.75C22.05,10.32 21.71,8.92 21.08,7.64C18.66,2.61 12.62,0.5 7.58,2.92C2.55,5.34 0.44,11.38 2.86,16.41C5.29,21.44 11.33,23.56 16.36,21.14C18.5,20.09 20.25,18.31 21.22,16.11L16.61,15C15.6,16.57 13.86,17.5 12,17.5M12,6.5C13.76,6.5 15.41,7.34 16.44,8.77L6.57,11.19C6.96,8.5 9.28,6.5 12,6.5Z"
              />
            </svg>
            <span style="color: #ffffff">Eventbrite</span>
          </a>
          <div
            class="HomeTickets__customlink"
            @click="QRModalShown = true"
            style="background-color: #AA2222"
          >
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="#ffffff"
                d="M4,4H10V10H4V4M20,4V10H14V4H20M14,15H16V13H14V11H16V13H18V11H20V13H18V15H20V18H18V20H16V18H13V20H11V16H14V15M16,15V18H18V15H16M4,20V14H10V20H4M6,6V8H8V6H6M16,6V8H18V6H16M6,16V18H8V16H6M4,11H6V13H4V11M9,11H13V15H11V13H9V11M11,6H13V10H11V6M2,2V6H0V2A2,2 0 0,1 2,0H6V2H2M22,0A2,2 0 0,1 24,2V6H22V2H18V0H22M2,18V22H6V24H2A2,2 0 0,1 0,22V18H2M22,22V18H24V22A2,2 0 0,1 22,24H18V22H22Z"
              />
            </svg>
            <span style="color: #ffffff">BPI QR Code</span>
          </div>
        </div>
        <div class="HomeTickets__paymentmode">
          <svg style="width:42px;height:42px" viewBox="0 0 24 24">
            <path
              fill="#ffffff"
              d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z"
            />
          </svg>
          <h2 class="HomeTickets__paymentmodetitle">Offline Payment</h2>
          <h3 class="HomeTickets__paymentmodebank">BPI</h3>
          <p class="HomeTickets__paymentmodebody">
            Acct Name: Jielynn Diroy
            <br />Acct Number: 2289 2988 11
          </p>
          <h3 class="HomeTickets__paymentmodebank">BDO</h3>
          <p class="HomeTickets__paymentmodebody">
            Acct Name: Rochelae Faye Estacio
            <br />Acct number: 00 399 0155 142
          </p>
          <div
            style="display: flex; align-items: center; justify-content: center; cursor: pointer"
            @click="PaymentInstructionsModalShown = true"
          >
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path
                fill="#ffffff"
                d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"
              />
            </svg>
            &nbsp;
            <span>Payment Instructions</span>
          </div>
        </div>
      </div> -->
    </center>
    <!-- <transition name="scalein">
      <div class="HomeTickets__modalwrapper" v-if="QRModalShown">
        <div class="HomeTickets__modalbackground" @click="QRModalShown = false"></div>
        <div class="HomeTickets__modal">
          <center>
            <h4>BPI QR Code</h4>
          </center>
          <center>
            <span>GDGPH XXXXXXXXXXX811</span>
            <br />
            <br />
            <clazy-load src="/assets/qr-fbc424cf5fcbd5d.svg">
              <transition name="fade" appear>
                <img src="/assets/qr-fbc424cf5fcbd5d.svg" style="max-width: 90%; width: 20rem" />
              </transition>
            </clazy-load>
          </center>
          <center>
            <h3>Instructions</h3>
          </center>
          <ol style="line-height: 150%">
            <li>Check out current ticket rate available at the website.</li>
            <li>
              Pay your tickets thru BPI Mobile App
              <br />
              <a
                href="https://www.bpiexpressonline.com/p/1/2188/how-to-transfer-via-qr-code"
                rel="noreferrer"
                target="_blank"
                style="color: white;"
              >
                <span>Learn how to Transfer via QR Code</span>

                <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                  <path
                    fill="#ffffff"
                    d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              Fill out the
              <a
                style="color: white"
                href="https://docs.google.com/forms/d/1Gs0kj2JGKz-ZIPV_M3TcM3GWrWvBS5Mt6LdptWnykyk/"
                rel="noreferrer"
                target="_blank"
              >
                Google Form
                <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                  <path
                    fill="#ffffff"
                    d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                  />
                </svg>
              </a>
              and upload your transaction details.
              <br />(For Bundled payment, make sure to fill out the forms seperately depending on the number of ticket purchases and attach the same payment slip)
            </li>
            <li>Wait for an email for your ticket.</li>
            <br />
            <div style="border-left: 2px solid white; padding-left: 1rem;">
              For Official Receipt requests, please email at
              <a
                style="color: white"
                href="mailto:gdgphmarketing@gmail.com"
              >gdgphmarketing@gmail.com</a>. Note that there will be an additional fee on top of the actual ticket cost. The OR will be issued weeks after the event.
            </div>
          </ol>
          <center>
            <button @click="QRModalShown = false" class="HomeTickets__modalbutton">Close</button>
          </center>
        </div>
      </div>
    </transition>
    <transition name="scalein">
      <div class="HomeTickets__modalwrapper" v-if="PaymentInstructionsModalShown">
        <div class="HomeTickets__modalbackground" @click="PaymentInstructionsModalShown = false"></div>
        <div class="HomeTickets__modal">
          <center>
            <h3>Instructions</h3>
          </center>
          <ol style="line-height: 150%">
            <li>Check out current ticket rate available at the website.</li>
            <li>
              Go pay your tickets thru the following banks. (excluding the eventbrite fee)
              <br />
              <br />BPI
              <br />Acct Name: Jielynn Diroy
              <br />Acct Number: 2289 2988 11
              <br />
              <br />BDO
              <br />Acct Name: Rochelae Faye Estacio
              <br />Acct number: 00 399 0155 142
              <br />
              <br />
            </li>
            <li>
              Fill out the
              <a
                style="color: white"
                rel="noreferrer"
                target="_blank"
                href="https://docs.google.com/forms/d/1Gs0kj2JGKz-ZIPV_M3TcM3GWrWvBS5Mt6LdptWnykyk/"
              >
                Google Form
                <svg style="width:18px;height:18px" viewBox="0 0 24 24">
                  <path
                    fill="#ffffff"
                    d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                  />
                </svg>
              </a>
              and attach your transaction details.
              <br />(For Bundled payment, make sure to fill out the forms seperately depending on the number of ticket purchases and attach the same payment slip)
            </li>
            <li>Wait for an email confirmation for your ticket.</li>
            <br />
            <div style="border-left: 2px solid white; padding-left: 1rem;">
              For Official Receipt requests, please email at
              <a
                style="color: white"
                href="mailto:gdgphmarketing@gmail.com"
              >gdgphmarketing@gmail.com</a>. Note that there will be an additional fee on top of the actual ticket cost. The OR will be issued weeks after the event.
            </div>
          </ol>
          <center>
            <button
              @click="PaymentInstructionsModalShown = false"
              class="HomeTickets__modalbutton"
            >Close</button>
          </center>
        </div>
      </div>
    </transition> -->
  </div>
</template>

<style lang="sass">
@import '../assets/style'

.HomeTickets
  padding: 2rem
  
  background: url(https://firebasestorage.googleapis.com/v0/b/devfestph.appspot.com/o/Other%20Images%2Fabstract-background.png?alt=media&token=5f3b72b8-fea2-4b61-8b50-72a11ab44853)
  background-size: cover
  overflow: hidden
  position: relative
  @include from($desktop)
    padding-bottom: 5rem

  .section-title
    color: $color-on-background

  &__tickets
    @include to($tablet)
      max-width: 500px
      margin: auto
    @include from($desktop)
      display: flex
      justify-content: center
      align-items: center
      margin-top: 4rem

  &__ticket
    position: relative
    text-align: center
    padding: 3rem 2rem
    border-radius: 0.5rem
    @include from($desktop)
      background: white // fallback
      background: radial-gradient(circle at 50% 0, transparent, 1.25rem, white, calc(1.25rem + 0.25px), white 70%, transparent 70%), radial-gradient(circle at 50% 100%, transparent, 1.25rem, white calc(1.25rem + 0.25px), white 70%, transparent 70%)
    @include from($hd)
      padding: 5rem 4rem
      border-radius: 1rem

    

    &--active
      @include to($tablet)
        background-color: white
        box-shadow: 0px 0px 10px $color-primary

    & + &
      @include to($tablet)
        margin-top: 1rem
      @include from($desktop)
        margin-left: 0.5rem

    &:not(&--active)
      @include to($tablet)
        background-color: $color-primary
      @include from($desktop)
        background: $color-primary // fallback
        background: radial-gradient(circle at 50% 0, transparent, 1.25rem, $color-primary, calc(1.25rem + 0.25px), $color-primary 70%, transparent 70%), radial-gradient(circle at 50% 100%, transparent, 1.25rem, $color-primary calc(1.25rem + 0.25px), $color-primary 70%, transparent 70%)
      

      .HomeTickets__button
          display: none

      .HomeTickets__ticketName
        color: $color-on-background
        display: block
        

      .HomeTickets__ticketDetails
        color: $color-on-background

      .HomeTickets__ticketPrice
        color: $color-on-background

        

  &__ticketName
    font-weight: normal
    
    font-size: 1.5rem
    color: $color-primary
    margin: 0
    @include from($hd)
      font-size: 1.75rem

  &__ticketPrice
    font-size: 2rem
    font-weight: normal
    
    margin-top: 0.5rem
    margin-bottom: 0
    color: $color-primary
    @include from($hd)
      font-size: 2.75rem
  
  &__ticket--active &__ticketDetails
    color: $color-primary
    font-size: 0.9rem
    @include from($hd)
      font-size: 1.25rem

  & .HomeTickets__button
    cursor: pointer
    text-decoration: none
    background-color: $color-primary
    color: $color-on-primary
    padding: 0.5rem 1rem
    border-radius: 1rem
    display: inline-block
    margin-top: 1rem
    display: inline-flex
    align-items: center
    transition: 0.2s background-color
    font-size: 1.1rem
    @include from($hd)
      font-size: 1.5rem
      padding: 0.75rem 1.5rem

    &:hover
      background-color: lighten($color-primary, 10)

    span
      margin-left: 0.5rem

  &__paymentmodes
    display: flex
    justify-content: center
    flex-wrap: wrap
    
  
  &__paymentmode
    width: 100%
    border: 2px solid $color-on-background
    border-radius: 1rem
    padding: 1rem 1rem
    margin-top: 2rem
    @include from($tablet)
      padding: 1rem 2rem
      margin: 2rem
      width: auto

  &__paymentmodetitle
    font-weight: normal

  &__customlink
    text-decoration: none
    cursor: pointer
    background-color: $color-on-background
    display: flex
    padding: 1rem
    width: 15rem
    max-width: 100%
    border-radius: 1rem
    align-items: center
    justify-content: center
    margin-bottom: 1rem
    &:hover
      filter: brightness(1.05)
    span
      font-weight: bold
      margin-left: 0.5rem
      color: #333


  &__paymentmodebank
    background-color: $color-on-background
    display: inline-block
    color: $color-primary
    padding: 0.25rem
    margin: 0
    width: 5rem

  &__modalwrapper
    transition-duration: 0.3s !important
    top: 0
    left: 0
    position: fixed
    width: 100vw
    height: 100vh
    display: flex
    z-index: 10


  &__modal
    margin: auto
    background-color: $color-surface
    padding: 0.5rem
    z-index: 10
    font-size: 1.15rem
    max-height: 90vh
    overflow: auto
    @include from($tablet)
      padding: 1rem
      max-width: 50rem

  &__modalbackground
    position: fixed
    width: 100%
    height: 100vh
    top: 0
    left: 0
    background-color: rgba(0,0,0,0.75)

  &__modalbutton
    background-color: transparent
    color: $color-on-background
    padding: 0.5rem 1rem
    border: 2px solid $color-on-background
    border-radius: 1rem
    font-size: 1.15rem
    cursor: pointer
    margin-bottom: 1rem


</style>

<script>
export default {
  data: function() {
    return {
      QRModalShown: false,
      PaymentInstructionsModalShown: false
    };
  },
  methods: {
    scrollToPaymentMethods() {
      window.document.querySelector("[name=paymentmethods]").scrollIntoView();
    }
  }
};
</script>