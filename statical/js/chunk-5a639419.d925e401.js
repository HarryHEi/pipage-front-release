(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a639419"],{"0f97":function(t,n,e){},"7f51":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"section-container"},t._l(t.sections,(function(n,o){return e("div",{key:o,staticClass:"section-item"},[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.showContent(n)}}},[t._v(t._s(n.title))])],1)})),0)},i=[],c=e("f62a"),s={name:"SectionView",data:function(){return{bookId:"",sections:[]}},created:function(){this.bookId=this.$route.params.bookId},mounted:function(){this.loadSections()},methods:{loadSections:function(){var t=this;Object(c["d"])().then((function(n){t.sections=n.data}))},showContent:function(t){this.$router.push("/books/"+this.bookId+"/sections/"+t.id)}}},r=s,a=(e("9149"),e("2877")),u=Object(a["a"])(r,o,i,!1,null,"25c29647",null);n["default"]=u.exports},9149:function(t,n,e){"use strict";var o=e("0f97"),i=e.n(o);i.a},f62a:function(t,n,e){"use strict";e.d(n,"e",(function(){return i})),e.d(n,"d",(function(){return c})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return a}));var o=e("b775");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Object(o["a"])({url:"/api/books/book/",method:"get",params:{page:t,page_size:n}})}function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(o["a"])({url:"/api/books/section/",method:"get",params:{book:t,page:n,page_size:e}})}function s(t){return Object(o["a"])({url:"/api/books/section/"+t+"/",method:"get"})}function r(t){return Object(o["a"])({url:"/api/books/section/"+t+"/get_next/",method:"get"})}function a(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(o["a"])({url:"/api/books/content/",method:"get",params:{section:t,page:n,page_size:e}})}}}]);