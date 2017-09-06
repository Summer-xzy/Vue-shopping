<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>

<script>
   import a from './../assets/images/croll1.jpg'
   import b from './../assets/images/croll2.jpg'
   import c from './../assets/images/croll3.jpg'
   import d from './../assets/images/croll4.jpg'
    import VueAwesomeSwiper from 'vue-awesome-swiper'
    import '../assets/css/swiper-3.4.2.min.css'
    
    export default {
        data() {
        	return {
        		listImg: [{url: a},{url: b},{url: c},{url: d}]
        	}
        },
        mounted() {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 3000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
        }
    }
</script>

<style lang="less">
    .swiper-container {
        width: 100%;
        height: 500px;
        .swiper-wrapper {
        	position: relative;
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width:0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
</style>