(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68fd3ec0"],{a2ba:function(t,e,o){"use strict";var n=o("ea1f"),a=o.n(n);a.a},b02b:function(t,e,o){},c2be:function(t,e,o){"use strict";var n=o("b02b"),a=o.n(n);a.a},ea1f:function(t,e,o){},eda7:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"book-container"},t._l(t.books,(function(t,e){return o("book-view",{key:e,staticClass:"book-item",attrs:{"book-id":t.id,title:t.title,cover:t.cover}})})),1)},a=[],i=o("f62a"),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-card",{staticClass:"book-card",attrs:{shadow:"hover"}},[o("el-image",{staticClass:"book-cover",staticStyle:{width:"200px",height:"300px"},attrs:{src:t.cover,fit:"cover"}}),o("div",{staticClass:"book-remark"},[o("p",{staticClass:"remark-title"},[t._v(t._s(t.title))]),o("el-button",{staticClass:"read-button",attrs:{type:"text"},on:{click:t.showSections}},[t._v("点击阅读")])],1)],1)},r=[],c={name:"BookView",props:{bookId:{type:String,default:""},title:{type:String,default:""},cover:{type:String,default:""}},methods:{showSections:function(){this.$router.push("/books/"+this.bookId+"/sections")}}},u=c,l=(o("c2be"),o("2877")),d=Object(l["a"])(u,s,r,!1,null,"2855c7d4",null),b=d.exports,f={name:"Books",components:{BookView:b},data:function(){return{books:[]}},mounted:function(){this.loadBooks()},methods:{loadBooks:function(){var t=this;Object(i["e"])().then((function(e){t.books=e.data.results}))}}},k=f,p=(o("a2ba"),Object(l["a"])(k,n,a,!1,null,"418ba676",null));e["default"]=p.exports},f62a:function(t,e,o){"use strict";o.d(e,"e",(function(){return a})),o.d(e,"d",(function(){return i})),o.d(e,"c",(function(){return s})),o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return c}));var n=o("b775");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Object(n["a"])({url:"/api/books/book/",method:"get",params:{page:t,page_size:e}})}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(n["a"])({url:"/api/books/section/",method:"get",params:{book:t,page:e,page_size:o}})}function s(t){return Object(n["a"])({url:"/api/books/section/"+t+"/",method:"get"})}function r(t){return Object(n["a"])({url:"/api/books/section/"+t+"/get_next/",method:"get"})}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(n["a"])({url:"/api/books/content/",method:"get",params:{section:t,page:e,page_size:o}})}}}]);