import {cart} from '@api'
export default {
  namespaced: true,
  state:() => ({
    data: {},

  }),
  actions:{
    async getCart({commit}) { 
      try {
        const data = await cart.getCart();
        commit('setCartItems', data);
      }
      catch(err) {
        throw err;
      }
    },

    async addItem({ state, commit }, val) {
      const { id, name, price, imgUrl, amount  = 1} = val;

      const findItem = state.data.items.find(item => item.id === id);
      if (!findItem) {
          try {
              const newItem = { id, imgUrl: imgUrl, name, price, amount };
              const data = await cart.postCart(newItem);
              if (!data.error) {
                  commit('setAddItem', newItem);
              };
          } catch (err) {
              throw err;
          };
      };
      
    },
  },

  mutations:{
    setCartItems(state, data) {
      state.data = data;
    },
    setAddItem(state, newItem) {
      state.data.items.push(newItem);
    }

  },
  getters:{
    cartItems(state){
      return state.data.items;
    },
    cartTotal(state){
      return state.data.total;
    },
    
  }
}