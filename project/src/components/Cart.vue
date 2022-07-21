<template>
  <div class="shopping_cart">
    <button class="cart_btn" @click="open = !open">
      <img src="../assets/img/cartIcon.svg" class="cart_btn-img" />
      <span>Cart (${{ total }})</span>
    </button>
    <div class="cart__content" v-show="open">
      <item
        v-for="item of items"
        :item="item"
        :imgApi="imgApi"
        :key="item.id"
        @changeItem="changeItem($event)"
        @deleteItem="deleteItem"
      />
      <hr />
      <span>{{ total ? "Total: $" + total : "Your cart is empty" }}</span>
    </div>
  </div>
</template>

<script>
import item from "./items/cartItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Cart",
  components: { item },
  data() {
    return {
      url: "/api/cart",
      imgApi:
        "https://raw.githubusercontent.com/GeoParf/FrontendLerning/main/products",
      error: null,
      open: false,
      interval: null,
    };
  },

  async created() {
    this.fetchCart();
    this.interval = setInterval(() => {
      this.fetchCart();
    }, 10000);
  },

  methods: {
    async fetchCart() {
      try {
        await this.getCart(this.url);
      } catch (err) {
        console.warn(err);
      }
    },

    async deleteItem(item) {
      const { id } = item;
      const find = this.items.find((item) => item.id === id);
      try {
        //DELETE item
        const data = await $api.send(this.url, "DELETE", "", id);
        if (data) {
          this.items = this.items.filter((el) => el.id !== id);
        }
      } catch (err) {
        console.warn(err);
      }
    },

    async changeItem(payload) {
      const { id, amount } = payload;
      const find = this.items.find((item) => item.id === id);
      try {
        const data = await $api.send(this.url + `/${id}`, "PUT", { amount });
        if (!data.err) {
          if (amount == -1 && find.amount == 1) {
            await this.deleteItem(id);
          } else {
            find.amount += amount;
          }
        }
      } catch (err) {
        console.warn(err);
      }
    },

    ...mapActions({
      getCart: "Cart/getCart",
    }),
  },
  computed: {
    ...mapGetters({
      items: "Cart/cartItems",
      total: "Cart/cartTotal",
    }),
  },

  beforeUnmount() {
    window.clearInterval(this.interval);
    this.interval = null;
  },
};
</script>

<style>
.cart_btn {
  border: none;
  background-color: #fff;
  height: 30px;
  width: 220px;
  display: flex;
  align-items: center;
}

.cart-counter {
  width: 200px;
  height: 40px;
}

.total-price {
  margin: auto;
  font-weight: 600;
  padding-bottom: 1rem;
}

.ul-cart-item {
  padding: 10px;
}

.cart_btn-img {
  width: 25px;
  height: 25px;
}
</style>