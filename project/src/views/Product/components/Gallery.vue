<template>
  <div class="col-lg-6">
    <div class="details_image" v-if="activeImg">
      <div class="details_image_large">
        <img :src="activeImg.url" alt="" />
        <!-- <div class="product_extra product_new">
          <a href="categories.html">New</a>
        </div> -->
      </div>
      <div
        class="
          details_image_thumbnails
          d-flex
          flex-row
          align-items-start
          justify-content-between
        "
      >
        <div
          v-for="(img, idx) of images"
          class="details_image_thumbnail active"
          :key="idx"
          @click="changeImg(idx)"
        >
          <img :src="activeImg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  props: {
    images: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  created() {},

  methods: {
    changeImg(idx) {
      this.active = idx;
    },
  },

  computed: {
    activeImg() {
      return this.images[this.active] || null;
    },
  },
};
</script>

<style>
.details_image_thumbnail {
  width: 450px;
}
</style>