<template>
  <div class="home">
    <div class="home_container">
      <div
        class="home_background"
        style="background-image: url(images/contact.jpg)"
      ></div>
      <div class="home_content_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_content">
                <div class="breadcrumbs">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Contact -->

  <div class="contact">
    <div class="container">
      <div class="row">
        <!-- Get in touch -->
        <GetInTouch />

        <!-- Contact Info -->
        <div class="col-lg-3 offset-xl-1 contact_col">
          <div class="contact_info">
            <div class="contact_info_section">
              <div class="contact_info_title">Marketing</div>
              <ul>
                <li>Phone: <span>+53 345 7953 3245</span></li>
                <li>Email: <span>yourmail@gmail.com</span></li>
              </ul>
            </div>
            <div class="contact_info_section">
              <div class="contact_info_title">Shippiing & Returns</div>
              <ul>
                <li>Phone: <span>+53 345 7953 3245</span></li>
                <li>Email: <span>yourmail@gmail.com</span></li>
              </ul>
            </div>
            <div class="contact_info_section">
              <div class="contact_info_title">Information</div>
              <ul>
                <li>Phone: <span>+53 345 7953 3245</span></li>
                <li>Email: <span>yourmail@gmail.com</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row map_row">
        <div class="col">
          <!-- Google Map -->
          <div class="map">
            <div id="google_map" class="google_map">
              <div class="map_container">
                <div id="map"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GetInTouch from "./components/GetInTouch.vue";
export default {
  components: { GetInTouch },
};
</script>

<style>
</style>