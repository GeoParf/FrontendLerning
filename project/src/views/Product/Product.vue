<template>
  <div class="product_details">
    <div class="container" v-if="!loading">
      <div class="row details_row">
        <!-- Product Image -->

        <Gallery :images="[imgApi + product.imgUrl]" />

        <!-- Product Content -->
        <div class="col-lg-6">
          <div class="details_content">
            <div class="details_name">{{ product.name }}</div>
            <div class="details_discount" v-if="discount">$890</div>
            <div class="details_price">{{ product.price }}</div>

            <!-- In Stock -->
            <div class="in_stock_container">
              <div class="availability">Availability:</div>
              <span>In Stock</span>
            </div>
            <div class="details_text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. Phasellus id nisi quis justo
                tempus mollis sed et dui. In hac habitasse platea dictumst.
                Suspendisse ultrices mauris diam. Nullam sed aliquet elit.
                Mauris consequat nisi ut mauris efficitur lacinia.
              </p>
            </div>

            <!-- Product Quantity -->
            <div class="product_quantity_container">
              <div class="product_quantity clearfix">
                <span>Qty</span>
                <input
                  id="quantity_input"
                  type="text"
                  pattern="[0-9]*"
                  value="1"
                />
                <div class="quantity_buttons">
                  <div
                    id="quantity_inc_button"
                    class="quantity_inc quantity_control"
                  >
                    <i class="fa fa-chevron-up" aria-hidden="true"></i>
                  </div>
                  <div
                    id="quantity_dec_button"
                    class="quantity_dec quantity_control"
                  >
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div class="button cart_button"><a href="#">Add to cart</a></div>
            </div>

            <!-- Share -->
            <div class="details_share">
              <span>Share:</span>
              <ul>
                <li>
                  <a href="#"
                    ><i class="fa fa-pinterest" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-instagram" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-facebook" aria-hidden="true"></i
                  ></a>
                </li>
                <li>
                  <a href="#"
                    ><i class="fa fa-twitter" aria-hidden="true"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="row description_row">
        <div class="col">
          <div class="description_title_container">
            <div class="description_title">Description</div>
            <div class="reviews_title">
              <a href="#">Reviews <span>(1)</span></a>
            </div>
          </div>
          <div class="description_text">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. Phasellus id nisi quis justo tempus
              mollis sed et dui. In hac habitasse platea dictumst. Suspendisse
              ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat
              nisi ut mauris efficitur lacinia.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-else>
      <div class="row details_row">
        <h1>LOADING</h1>
      </div>
    </div>
  </div>

  <!-- Newsletter -->

  <div class="newsletter">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="newsletter_border"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="newsletter_content text-center">
            <div class="newsletter_title">Subscribe to our newsletter</div>
            <div class="newsletter_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                a ultricies metus. Sed nec molestie eros
              </p>
            </div>
            <div class="newsletter_form_container">
              <form action="#" id="newsletter_form" class="newsletter_form">
                <input
                  type="email"
                  class="newsletter_input"
                  required="required"
                />
                <button class="newsletter_button trans_200">
                  <span>Subscribe</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gallery from "./components/Gallery.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Product",
  components: { Gallery },

  data() {
    return {
      loading: false,
      discount: 0,
      imgApi:
        "https://raw.githubusercontent.com/GeoParf/FrontendLerning/main/products",
    };
  },

  async created() {
    this.loading = true;
    try {
      await this.getProduct(this.$route.params.id);
    } catch (err) {
      throw err;
    } finally {
      this.loading = false;
    }
  },

  methods: {
    ...mapActions({
      getProduct: "Catalog/getProduct",
    }),
  },

  computed: {
    ...mapGetters({
      product: "Catalog/getProduct",
    }),
  },
};
</script>

<style>
</style>