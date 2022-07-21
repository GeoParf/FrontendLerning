<template>
  <div class="catalog">
    <item
      v-for="item of items"
      :key="item.id"
      :item="item"
      :imgApi="imgApi"
      @addItem="addItem"
    />
  </div>
</template>

<script>
import item from "./items/catalogItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Catalog",
  components: { item },
  data() {
    return {
      url: "/api/catalog",
      imgApi:
        "https://raw.githubusercontent.com/GeoParf/FrontendLerning/main/products",
      error: null,
    };
  },
  async created() {
    try {
      await this.getCatalog(this.url);
    } catch (err) {
      this.error = err;
      console.warn(err);
    }
  },

  computed: {
    ...mapGetters({
      items: "Catalog/itemsMain",
    }),
  },

  methods: {
    ...mapActions({
      getCatalog: "Catalog/getCatalog",
      addItem: "Cart/addItem",
    }),
  },
};
</script>

<style>
.catalog {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>