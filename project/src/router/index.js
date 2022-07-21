import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/Home/Home';
import Categories from '@views/Categories/Categories';
import Contacts from '@views/Contacts/Contacts';
import Product from '@views/Product/Product';
import Cart from '@views/Cart/Cart'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/catalog/:id',
    name: 'Product',
    component: Product
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
