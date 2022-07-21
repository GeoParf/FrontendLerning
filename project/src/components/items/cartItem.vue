<template>
  <div class="cart__item">
    <a @click.prevent="$router.push('/catalog/' + item.id)">
      <img class="cart__item__img" :src="getImgUrl" alt="no img" />
    </a>

    <div class="cart__item__info">
      <span>
        <b>{{ item.name }}</b>
      </span>
      <div class="price__block">
        <ul class="ul-cart-item">
          <li>Price</li>
          <li>
            <b>${{ item.price }}</b>
          </li>
        </ul>
        <ul class="ul-cart-item">
          <li>Amount</li>
          <li>
            <button class="item-amount-change-btn" @click="changeAmaunt(false)">
              -
            </button>
            <b>{{ item.amount }}</b>
            <button class="item-amount-change-btn" @click="changeAmaunt(true)">
              +
            </button>
          </li>
        </ul>
        <ul class="ul-cart-item">
          <li>Total</li>
          <li>
            <b>{{ countTotal }}</b>
          </li>
        </ul>
      </div>
    </div>
    <button class="btn-delete" @click="deleteItem()">Del</button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
    },
    imgApi: {
      type: String,
    },
  },

  data() {
    return {
      itemsCount: 0,
    };
  },

  methods: {
    changeAmaunt(add) {
      this.$emit("changeItem", { id: this.item.id, amount: add ? 1 : -1 });
    },
    deleteItem() {
      this.$emit("deleteItem", { id: this.item.id });
    },
  },

  computed: {
    countTotal() {
      return this.item.amount * this.item.price;
    },

    getImgUrl() {
      return this.imgApi + this.item.imgUrl;
    },
  },
};
</script>

<style>
.item-amount-change-btn {
  border: none;
  width: 15px;
  background-color: #fff;
  color: #000;
  margin: 0 8px 0 8px;
  transition: 0.5s;
}

.item-amount-change-btn:hover {
  color: red;
  transition: 0.5s;
}
</style>

