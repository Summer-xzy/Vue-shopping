<template>
  <div>
    <nav-header></nav-header>
    <carousel></carousel>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
    import './../assets/css/icomoon.css'
    import './../assets/css/bootstrap.css'
    import './../assets/css/style.css'



    import NavHeader from "./header.vue"  //引入头组件
    import Carousel from "./Carousel.vue"  //引入轮播图
    import NavFooter from "./footer.vue"  //引入尾组件
    export default {
      name: 'app',
        data() {
            return {
                
            }
        },
      components :{
          NavHeader,
          Carousel,
          NavFooter
      },
        mounted () {
            this.$nextTick(function () { //确保获取指定key本地存储的值，如果为空，就将数据存储到key字段
                if(window.localStorage.getItem("cartList") == "undefined"){
                    window.localStorage.setItem("cartList",JSON.stringify([]));
                }

        })
        }
    }
</script>
