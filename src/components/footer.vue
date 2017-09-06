<template>
    <footer id="fh5co-footer" role="contentinfo">
        <div class="container">
            <div class="row row-pb-md">
                  <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                    <ul class="fh5co-footer-links">
                        <strong>产品</strong>
                        <li><a href="#">鞋类</a></li>
                        <li><a href="#">服装</a></li>
                        <li><a href="#">配件</a></li>
                        <li><a href="#">新品上市</a></li>
                        <li><a href="#">折扣专区</a></li>
                    </ul>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                    <ul class="fh5co-footer-links">
                        <strong>运动</strong>
                        <li><a href="#">跑步</a></li>
                        <li><a href="#">训练</a></li>
                        <li><a href="#">足球</a></li>
                        <li><a href="#">篮球</a></li>
                        <li><a href="#">户外</a></li>
                    </ul>
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                    <ul class="fh5co-footer-links">
                       <strong>帮助中心</strong>
                        <li><a href="#">尺码表</a></li>
                        <li><a href="#">adiCLUB会员</a></li>
                        <li><a href="#">门店查询</a></li>
                        <li><a href="#">关于我们</a></li>
                        <li><a href="#">企业社会责任</a></li>
                        <li><a href="#">Confirmed app</a></li>
                    </ul>
                </div>

                <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                    <ul class="fh5co-footer-links">
                        <strong>网站政策</strong>
                        <li><a href="#">使用条款</a></li>
                        <li><a href="#">隐私声明</a></li>
                        <li><a href="#">物流配送规则</a></li>
                        <li><a href="#">退换货规则</a></li>
                        <li><a href="#">定制和印制服务条款</a></li>
                        <li><a href="#">adiCLUB会员规则</a></li>
                    </ul>
                </div>
                <div class="col-md-2 col-sm-4 col-xs-6 col-md-push-1">
                    <ul class="fh5co-footer-links">
                        <strong>关注我们</strong>
                        <li><a href="http://www.weibo.com/shopadidas" target="_blank" title="微博">
                            <i class="icon1 icon1-sina" ></i></a></li>
                        <li><a title="微信"><i class="icon1 icon1-wechat" @mouseenter="change" @mouseleave="change"></i></a>
                            <div class="wechat-code-box" v-show="flag"> 
                                    <img src="https://img.adidas.com.cn/resources/2017/7/7/14993983520786712.jpg?version=000000"> 
                               <p class="">扫一扫，关注adidas官方微信</p> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>



        </div>
    </footer>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      flag:false
    }
  },
  methods: {
    change:function(){
        this.flag = !this.flag
    }
  }
}
</script>

<style>

</style>
