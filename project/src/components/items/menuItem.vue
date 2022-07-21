<template>
 <li :class="{hassubs: item.hessubs}">
  <a :href="item.link">{{item.text}}</a>
    <ul v-if="item.hassubs">
      <li v-for="item of item.hassubs" :key="item.id">
        <a :href="item.link">{{item.text}}</a>
      </li>
    </ul>
 </li>
</template>

<script>
export default {
  name: 'menuItem',
  props:{
    item: {
      type: Object
    }
   
  },
}
 </script>

<style>

</style>