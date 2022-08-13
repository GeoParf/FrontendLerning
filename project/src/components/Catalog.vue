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
  props: {
    query: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      url: "/api/catalog",
      imgApi:
        "https://raw.githubusercontent.com/GeoParf/FrontendLerning/main/products",
      error: null,
    };
  },

  computed: {
    ...mapGetters({
      items: "Catalog/items",
    }),
  },

  watch: {
    query: {
      deep: true,
      async handler() {
        await this.getCatalog(this.query);
      },
    },
  },

  methods: {
    ...mapActions({
      getCatalog: "Catalog/getCatalog",
      addItem: "Cart/addItem",
    }),
  },

  async created() {
    try {
      await this.getCatalog(this.query);
    } catch (err) {
      this.error = err;
      console.warn(err);
    }
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