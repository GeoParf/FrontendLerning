import {catalog} from '@api';

export default {
  namespaced: true,
  state:() => ({
    items:[],
    product: null,
  }),
  actions:{
    async getCatalog({commit}, parametres = null) { 
      try {
        const {data, pagination: {total}} =  await catalog.getCatalog(parametres);
        commit('setCatalogItems', data);
        commit('Pagination/setTotal', total, {root: true});
      }
      catch(err) {
        throw err;
      };
    },
    
    async getProduct({commit}, id){
      try{
        const item = await catalog.getProduct(id);
        commit('setProduct', item);
      }
      catch(err){
        throw err;
      }
    },
  },

  mutations:{
    setCatalogItems(state, items) {
      state.items = items;
    },

    setProduct(state, item){
      state.product = item;
    }
  },
  getters:{
    items(state){
      return state.items;
    },
    getProduct(state){
      return state.product;
    },
  }
}