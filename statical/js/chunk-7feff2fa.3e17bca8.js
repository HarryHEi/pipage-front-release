(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7feff2fa"],{1795:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content-container"},[e("div",{staticClass:"content-body"},[e("div",{staticClass:"content-title"},[t._v(t._s(t.title))]),t._l(t.content.split("\n"),(function(n,o){return e("div",{key:o,staticClass:"content-line"},[t._v(" "+t._s(n)+" ")])}))],2),e("el-button",{staticClass:"content-next",attrs:{type:"text"},on:{click:t.goNext}},[t._v("下一章")])],1)},i=[],a=e("f62a"),c={name:"ContentView",data:function(){return{bookId:"",sectionId:"",title:"",next:"",content:""}},created:function(){this.bookId=this.$route.params.bookId,this.sectionId=this.$route.params.sectionId},mounted:function(){this.loadContent(),this.loadSectionInfo(),this.loadNext()},methods:{loadContent:function(){var t=this;Object(a["b"])().then((function(n){n.data.length>0&&(t.content=n.data[0]["body"])}))},loadSectionInfo:function(){var t=this;Object(a["c"])(this.sectionId).then((function(n){t.title=n.data.title}))},loadNext:function(){var t=this;Object(a["a"])(this.sectionId).then((function(n){t.next=n.data.id}))},goNext:function(){this.$router.push("/books/"+this.bookId+"/sections/"+this.next)}}},s=c,r=(e("7885"),e("2877")),u=Object(r["a"])(s,o,i,!1,null,"697b5be9",null);n["default"]=u.exports},4443:function(t,n,e){},7885:function(t,n,e){"use strict";var o=e("4443"),i=e.n(o);i.a},f62a:function(t,n,e){"use strict";e.d(n,"e",(function(){return i})),e.d(n,"d",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return r}));var o=e("b775");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Object(o["a"])({url:"/api/books/book/",method:"get",params:{page:t,page_size:n}})}function a(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(o["a"])({url:"/api/books/section/",method:"get",params:{book:t,page:n,page_size:e}})}function c(t){return Object(o["a"])({url:"/api/books/section/"+t+"/",method:"get"})}function s(t){return Object(o["a"])({url:"/api/books/section/"+t+"/get_next/",method:"get"})}function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return Object(o["a"])({url:"/api/books/content/",method:"get",params:{section:t,page:n,page_size:e}})}}}]);