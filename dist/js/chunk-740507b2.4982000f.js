(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-740507b2"],{"0082":function(t,i,a){"use strict";var n=a("7b02"),e=a.n(n);e.a},"0a20":function(t,i,a){"use strict";var n=a("31c3"),e=a.n(n);e.a},"28f9":function(t,i,a){"use strict";var n=a("6e66"),e=a.n(n);e.a},"31c3":function(t,i,a){},"460e":function(t,i,a){"use strict";var n=a("4a44"),e=a.n(n);e.a},"4a44":function(t,i,a){},"4bdd":function(t,i,a){"use strict";var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("footer",{attrs:{id:"footer"}},[a("ul",[a("router-link",{attrs:{tag:"li",to:"/movie"}},[a("i",{staticClass:"iconfont icon-dianying"}),a("p",[t._v("电影")])]),a("router-link",{attrs:{tag:"li",to:"/cinema"}},[a("i",{staticClass:"iconfont icon-yingyuan"}),a("p",[t._v("影院")])]),a("router-link",{attrs:{tag:"li",to:"/mine"}},[a("i",{staticClass:"iconfont icon-wode"}),a("p",[t._v("我的")])])],1)])},e=[],s={name:"TabBar"},c=s,r=(a("460e"),a("2877")),o=Object(r["a"])(c,n,e,!1,null,"641ff9fa",null);i["a"]=o.exports},"6e66":function(t,i,a){},"7b02":function(t,i,a){},"981c":function(t,i,a){"use strict";var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("header",{attrs:{id:"header"}},[t._t("default"),a("h1",[t._v(t._s(t.title))])],2)},e=[],s={name:"Header",props:{title:{type:String,default:"喵电影"}}},c=s,r=(a("0082"),a("2877")),o=Object(r["a"])(c,n,e,!1,null,"fe3b6ba0",null);i["a"]=o.exports},b32a:function(t,i,a){"use strict";a.r(i);var n=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{attrs:{id:"main"}},[a("Header",{attrs:{title:"喵影院"}}),a("div",{attrs:{id:"content"}},[t._m(0),a("CinemaList")],1),a("TabBar")],1)},e=[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"cinema_menu"},[a("div",{staticClass:"city_switch"},[t._v("\n          全城 "),a("i",{staticClass:"iconfont icon-lower-triangle"})]),a("div",{staticClass:"brand_swtich"},[t._v("\n          品牌 "),a("i",{staticClass:"iconfont icon-lower-triangle"})]),a("div",{staticClass:"feature_switch"},[t._v("\n          特色 "),a("i",{staticClass:"iconfont icon-lower-triangle"})])])}],s=a("981c"),c=a("4bdd"),r=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"cinema_body"},[t.isLoading?a("Loading"):a("Scroller",[a("ul",t._l(t.cinemaList,function(i){return a("li",{key:i.id},[a("div",[a("span",[t._v(t._s(i.nm))]),a("span",{staticClass:"q"},[a("span",{staticClass:"price"},[t._v(t._s(i.sellPrice))]),t._v(" 元起")])]),a("div",{staticClass:"address"},[a("span",[t._v(t._s(i.addr))]),a("span",[t._v(t._s(i.distance))])]),i.tag.vipTag?a("div",{staticClass:"card"},[a("div",[t._v("小吃")]),a("div",[t._v("折扣卡")])]):t._e()])}),0)])],1)},o=[],l={name:"CinemaList",data:function(){return{cinemaList:[],isLoading:!0,preCityId:-1}},activated:function(){var t=this,i=this.$store.state.city.id;this.preCityId!==i&&this.axios.get("/api/cinemaList?cityId="+i).then(function(a){var n=a.data.msg;if("ok"===n){var e=a.data.data.cinemas;t.cinemaList=e,t.isLoading=!1,t.preCityId=i}})}},d=l,u=(a("0a20"),a("2877")),f=Object(u["a"])(d,r,o,!1,null,"916bf92c",null),v=f.exports,_={name:"Cinema",components:{Header:s["a"],TabBar:c["a"],CinemaList:v}},m=_,p=(a("28f9"),Object(u["a"])(m,n,e,!1,null,"1ae82a58",null));i["default"]=p.exports}}]);