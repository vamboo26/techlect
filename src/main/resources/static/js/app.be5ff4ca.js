(function(t){function e(e){for(var a,o,c=e[0],s=e[1],l=e[2],p=0,f=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0939":function(t,e,n){t.exports=n.p+"img/z.c67b5309.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"dark",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"zingoworks Logo",contain:"",src:n("0939"),transition:"scale-transition",width:"40"}}),a("h1",{staticClass:"mr-2"},[t._v("techlect.")])],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/zingoworks",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("@zingoworks")]),a("v-icon",[t._v("mdi-github")])],1)],1),a("v-main",[a("Container")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("article",[n("v-list",[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.item,callback:function(e){t.item=e},expression:"item"}},t._l(t.articles,(function(e){return n("v-list-item",{key:e.id,attrs:{inactive:t.inactive},on:{click:function(n){return t.popArticlePage(e.link,e.id)}}},[n("v-list-item-content",[n("v-list-item-title",[t.isRecentArticle(e.authoredOn)?n("v-badge",{attrs:{color:"blue",content:"NEW","offset-x":"-3"}},[n("span",{staticClass:"article-title"},[t._v(t._s(e.title))])]):t._e(),t.isRecentArticle(e.authoredOn)?t._e():n("span",{staticClass:"article-title"},[t._v(" "+t._s(e.title)+" ")])],1),n("v-list-item-subtitle",{domProps:{innerHTML:t._s(e.authoredOn+", "+e.author)}})],1)],1)})),1)],1)],1),n("v-pagination",{attrs:{length:t.pagination.totalPages,"total-visible":7},on:{input:t.onPageChange},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1)},c=[],s=n("bc3a"),l=n.n(s),u=void 0,p={data:function(){return{articles:[],pagination:{page:1,totalPages:""}}},created:function(){var t=this;l.a.get("/api/articles?page=1").then((function(e){t.articles=e.data.content,t.pagination.totalPages=e.data.totalPages}))},watch:{"pagination.page":function(t){u.onPageChange(t)}},methods:{popArticlePage:function(t,e){window.open(t,"_blank"),l.a.post("/api/articles/hits",{id:e}).then((function(t){return console.log(t)}))},onPageChange:function(t){var e=this;l.a.get("/api/articles?page="+t).then((function(t){return e.articles=t.data.content}))},isRecentArticle:function(t){var e=new Date,n=new Date(t),a=(e.getTime()-n.getTime())/864e5;return a<=7}}},f=p,g=(n("7c6a"),n("2877")),d=n("6544"),v=n.n(d),h=n("4ca6"),m=n("8860"),b=n("da13"),_=n("5d23"),w=n("1baa"),y=n("891e"),P=Object(g["a"])(f,o,c,!1,null,"ea2c2b98",null),k=P.exports;v()(P,{VBadge:h["a"],VList:m["a"],VListItem:b["a"],VListItemContent:_["a"],VListItemGroup:w["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VPagination:y["a"]});var O={name:"App",components:{Container:k}},V=O,x=n("7496"),C=n("40dc"),j=n("8336"),A=n("132d"),L=n("adda"),I=n("f6c4"),S=n("2fa4"),T=Object(g["a"])(V,i,r,!1,null,null,null),M=T.exports;v()(T,{VApp:x["a"],VAppBar:C["a"],VBtn:j["a"],VIcon:A["a"],VImg:L["a"],VMain:I["a"],VSpacer:S["a"]});var z=n("f309");a["a"].use(z["a"]);var $=new z["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:$,render:function(t){return t(M)}}).$mount("#app")},"5e8c":function(t,e,n){},"7c6a":function(t,e,n){"use strict";var a=n("5e8c"),i=n.n(a);i.a}});
//# sourceMappingURL=app.be5ff4ca.js.map