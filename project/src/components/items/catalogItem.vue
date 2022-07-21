<template>
  <a class="product" @click.prevent="$router.push('/catalog/' + item.id)">
    <div class="product_image">
      <img :src="imgApi + item.imgUrl" alt="" />
      <div v-if="category" class="product_extra" :class="category.class">
        <a href="categories.html">{{ category.text }}</a>
      </div>
    </div>

    <div class="product_content">
      <div class="product_title">
        {{ item.name }}
      </div>
      <div class="product_price">${{ item.price }}</div>
    </div>
    <div
      class="button button_custom btn-add"
      @click="$emit('addProduc, item.id')"
    >
      <span>Add</span>
    </div>
  </a>
</template>

<script>
export default {
  name: "CatalogItem",
  props: ["item", "imgApi"],
  data() {
    return {
      categories: {
        1: "new",
        2: "hot",
        3: "sale",
      },
    };
  },

  computed: {
    category() {
      const { category } = this.item;
      return !category
        ? null
        : {
            class: "product_" + this.categories[category].toLowerCase(),
            text: this.categories[category],
          };
    },
  },

  methods: {
    addItem(item) {
      this.$emit("addItem", item);
    },
  },
};
</script>

<style>
.catalog-item {
  width: 150px;
  height: 150px;
  background: red;
  margin: 5px;
}
</style>