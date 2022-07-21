<template>
  <div>
     <item
     v-for="item of items"
     :key="item.id"
     :item="item"
     :api="api"
     />
  </div>
</template>

<script>
import item from './items/menuItem.vue'
export default {
  name: 'Menu',
  components: {item},
  
  data(){
    return{
     items: [],
     url: 'api/menu',
     error: false,
    }
  },

  async created(){
    this.fetchData();
  },

  methods:{
    async fetchData(){
      try {
      const data = await $api.send(this.url, 'GET');
      this.items = data.items;
      this.total = data.total;
      }
      catch (err) {
          this.error = err;
      };
    },
  }

  
}



</script>

<style>

</style>