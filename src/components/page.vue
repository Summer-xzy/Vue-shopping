<template>
  <div id="page">
    <div id="fh5co-product">
      <div class="container">
        <div class="row animate-box">
          <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2> impossible is Nothing </h2>
            <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
          </div>
        </div>
        <div class="row" v-for="( row , rowIndex ) in listFilter">
          <div class="col-md-4 text-center animate-box" v-for="(item , itemIndex) in row">
            <div class="product">
              <div class="product-grid" :style="{backgroundImage: 'url('+item.productImage+')'}"></div>
              <div class="desc">
                <h3><a href="">{{item.productName}}</a></h3>
                <span class="price">{{item.productPrice}}</span>
              </div>
             <div class="inner">
                  <p>
                    <a href="javascript:void(0)" @click="addToCart(item)">加入购物车</a>
                  </p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
        name: 'page',
        data () {
            return {
                productList : [],
            }
        },
        mounted () {
            this.$nextTick(function () {
                this.populateProduct();
            })
        },
        methods :{
            populateProduct() {   //获取商品数据
                this.$http.get("src/assets/data/productData.json", {"id": 123}).then((response)=> {
                    this.productList = response.body.list;
                });
            },
            addToCart(product) {  //添加到购物车
                var cartList = this.$store.getters.getCartList; //在状态管理中取到商品列表
                var filterResult = cartList.filter((item)=> {
                    return item.productId == product.productId; //购物车中商品的ID=当前所选商品的ID
                })
                if (filterResult.length < 1){ //如果当前购物车没有商品，就把商品添加进列表中
                    cartList.push(product)
                }else{   //如果当前购物车有该商品，就把数量增加
                    filterResult[0].productQuantity++;
                }
                this.$store.commit("saveCartList",cartList);  //把新列表渲染到状态管理中
            }
        },        
        computed :{
            listFilter  () {  //列表过滤，按三个一行排列
                var list = this.productList;  
                var index = 0;
                var sectionCount = 3;
                var arrTemp = [];
                for(var i = 0; i < list.length ; i++){   //二维数组，0放三个，1放三个
                    index = parseInt( i / sectionCount);
                    if(arrTemp.length <= index){
                        arrTemp.push([]);
                    }
                    arrTemp[index].push(list[i]);
                }
                return arrTemp;
            }
        },
    }
</script>
