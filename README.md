# 说明
这个项目是我学习了vue之后重构了一下adidas的官网（只写了一部分
   
    1.点击图标——返回主页（轮播图、右下角有微博和微信跳转）      
    2.点击男子——商品页面（可以添加商品到购物车）     
    3.点击购物车图标——进入购物车页面     
    4.购物车结算——进入配送页面      
使用Vue构建六个模板（头、脚、购物车、商品、轮播图、配送）     
Vue-router用来切换路由（商品、购物车、配送）     
Vue-resource引入本地的模拟json数据（商品、地址）     
Vuex管理商品列表状态和做本地缓存     
页面布局使用bootstrap的栅格布局，图标使用雪碧图      
      
![Image text](https://github.com/Summer-xzy/Vue-shopping/blob/master/img-show/1.jpg)    
![Image text](https://github.com/Summer-xzy/Vue-shopping/blob/master/img-show/2.jpg)    
![Image text](https://github.com/Summer-xzy/Vue-shopping/blob/master/img-show/3.png)    
![Image text](https://github.com/Summer-xzy/Vue-shopping/blob/master/img-show/4.png)     
![Image text](https://github.com/Summer-xzy/Vue-shopping/blob/master/img-show/5.png)     
![Image text](https://github.com/Summer-xzy/Vue-shopping/blob/master/img-show/6.png)    

##安装   
// 安装前请先确保已安装node和npm   
//安装依赖   
npm install   
//运行   
webpack-dev-server   
//打开   
localhost:8080   


总结：      
1.v-modle 文本框、下拉框、表单、单选复选，购物车，双向、模型改变，文本框也会改变          
2.v-text  文本的渲染和{{}}一样             
3.v-show  控制dom显示和隐藏,加display:block/none（dom是存在的）      
4.v-if    如果dom不显示的话，这个dom都没有           
5.v-bind  绑定属性，给dom元素添加属性 图片渲染，如果src是变化的，我们就需要v-bind绑定src属性，给src赋值         
6.v-for   循环，表格、li标签、循环数组          
7.v-on    事件绑定              
8.computed:是计算属性，用来实时改变数据            
9.menthods:是方法，比如你点击事件要执行一个方法              
10.父子通信：父->子  props             
            子->父  使用emit发出自定义事件，父组件监听这个自定义事件，然后调用change方法接收数据        
11.Vuex——state存储状态， getters获取数据，mutations改变数据      
12.本地缓存       
window.localStorage.getItem(key):获取指定key本地存储的值        
window.localStorage.setItem(key,value)：将value存储到key字段           
window.localStorage.removeItem(key):删除指定key本地存储的值       
               
联系方式：   
E-mail：526162228@qq.com   
