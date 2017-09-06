<template>
    <nav class="fh5co-nav" role="navigation" style="background-color: black"> 
        <div class="container" >
            <div class="row">
                <div class="col-md-3 col-xs-2">
                    <div id="fh5co-logo"><a href="/"><img src="../assets/images/ad.png"></a></div>
                </div>
                <div class="col-md-6 col-xs-6 text-center menu-1">
                    <ul>
                        <li class="has-dropdown" >
                            <a href="page" style="color: white">男子</a>
                            <ul class="dropdown">
                                <li><a href="single.html" >Single Shop</a></li>
                            </ul>
                        </li>
                        <li><a href="#" style="color: white">女子</a></li>
                        <li class="has-dropdown">
                            <a href="#" style="color: white">童装</a>
                            <ul class="dropdown">
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">eCommerce</a></li>
                                <li><a href="#">Branding</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html" style="color: white">女子</a></li>
                        <li><a href="contact.html" style="color: white">运动</a></li>
                        <li><a href="contact.html" style="color: white">品牌</a></li>
                        <li><a href="contact.html" style="color: white">miadidas定制</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-xs-4 text-right hidden-xs menu-2">
                    <ul>
                        <li class="search">
                            <div class="input-group">
                                <input type="text" placeholder="搜索">
                                <span class="input-group-btn">
						        <button class="btn btn-primary" type="button"><i class="icon-search"></i></button>
						      </span>
                            </div>
                        </li>
                        <li class="shopping-cart"><a href="cart" class="cart"><span><small>{{this.$store.getters.getCartList.length}}</small><i class="icon-shopping-cart"></i></span></a></li>
                    </ul>
                </div>
            </div>

        </div>
    </nav>
</template>

<script>
export default {
  name: 'header',

    data () {
        return {
        }
    }
}
</script>

