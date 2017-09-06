import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({ //管理购物车中的商品列表
    state :{
        cartList :[]
    },
    getters : {//store的计算属性，获取数据，可以抽取数据共享，但是不能改变数据
        getCartList : state => { 
            if(JSON.parse(window.localStorage.getItem("cartList")) != null)                
                state.cartList = JSON.parse(window.localStorage.getItem("cartList"));
            return state.cartList;
        }
    },
    mutations : {//改变数据,用setItem将改变的值存储到新的列表中
        saveCartList (state , cartList ) {
            state.cartList = cartList;
            window.localStorage.setItem("cartList",JSON.stringify(state.cartList));//把更新的数据同步到购物车中
        }
    }
})
