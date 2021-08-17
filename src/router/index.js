import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

 const Home = () => import('views/home/Home')
const Category = () =>import('views/category/Category')
const ShopCart = () =>import('views/cart/Cart')
const Profile = () =>import('views/profile/Profile')



const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'Home',
    component:Home
  },
  {
    path:'/category',
    name:'Category',
    component:Category
  },
  {
    path:'/cart',
    name:'Cart',
    component:ShopCart
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile
  }
]


const router = createRouter({
  history:createWebHistory(),

  routes,

})


export default router


