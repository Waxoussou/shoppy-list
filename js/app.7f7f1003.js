(function(t){function e(e){for(var o,r,c=e[0],s=e[1],l=e[2],m=0,f=[];m<c.length;m++)r=c[m],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/shoppy-list/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},3350:function(t,e,n){"use strict";n("b1a8")},"4f93":function(t,e,n){"use strict";n("f050")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("f309");o["a"].use(a["a"]);var i=new a["a"]({}),r=n("2f62"),c=(n("b0c0"),n("4de4"),n("c740"),n("a434"),{items:[{name:"fraise",quantity:1},{name:"orange",quantity:3}],currentSelection:null}),s={},l={addItem:function(t,e){var n=t.items.some((function(t){return t.name===e.name}));if(n){var o=t.items.filter((function(t){return t.name===e.name}))[0];o.quantity++;var a=t.items.findIndex((function(t){return t.name===e.name}));t.items.splice(a,1,o)}else t.items.push({name:e.name,quantity:1})},removeItem:function(t,e){var n=t.items.findIndex((function(t){return t.name===e.name}));-1!==n&&t.items.splice(n,1)},select:function(t,e){t.currentSelection=e}},u={},m={namespaced:!0,state:c,getters:s,mutations:l,actions:u};o["a"].use(r["a"]);var f=new r["a"].Store({state:{},mutations:{},actions:{},modules:{selection:m}}),d=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticStyle:{height:"100%"}},[n("v-row",{attrs:{justify:"center"}},[n("ItemList")],1),n("v-row",{staticClass:"searchBar",attrs:{align:"end"}},[n("ItemSearchBar")],1)],1)},p=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center","no-gutters":""}},[n("v-col",{attrs:{cols:"7","align-self":"center"}},[n("v-autocomplete",{attrs:{items:t.items,clearable:"",solo:""},on:{keyup:t.updateCurrentValue},scopedSlots:t._u([{key:"no-data",fn:function(){return[n("v-list-item",{staticClass:"d-flex flex-column space-around"},[n("v-list-item-title",[t._v(" No result ")]),n("v-list-item-content",[n("v-btn",{attrs:{color:"primary"}},[t._v(" Add a new Item")])],1)],1)]},proxy:!0}]),model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),n("v-col",{attrs:{cols:"1"}},[n("v-btn",{attrs:{disabled:!t.select,fab:"",color:"success"},on:{click:t.addItemToSelection}},[n("v-icon",[t._v(" mdi-plus ")])],1)],1)],1)},b=[],y={name:"ItemSearchBar",data:function(){return{select:null,items:["tomatoes","oranges","yaourt","lait"]}},methods:{updateCurrentValue:function(t){return console.log(t.target.value),t.target.value},addItemToSelection:function(){console.log(this.select),this.$store.commit("selection/addItem",{name:this.select})}}},g=y,V=n("2877"),I=n("6544"),w=n.n(I),_=n("c6a6"),x=n("8336"),S=n("62ad"),C=n("132d"),O=n("da13"),j=n("5d23"),k=n("0fd9"),L=Object(V["a"])(g,h,b,!1,null,null,null),$=L.exports;w()(L,{VAutocomplete:_["a"],VBtn:x["a"],VCol:S["a"],VIcon:C["a"],VListItem:O["a"],VListItemContent:j["b"],VListItemTitle:j["c"],VRow:k["a"]});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("v-card",[n("v-list",t._l(t.items,(function(e,o){return n("v-list-item",{key:o},[n("v-container",[n("v-row",[n("v-list-item-action-text",[t._v(" X "+t._s(e.quantity||1)+" ")]),n("v-list-item-content",[t._v(" "+t._s(e.name||e)+" ")]),n("v-list-item-action",[n("v-row",[n("v-btn",{attrs:{color:"primary",fab:"",icon:""},on:{click:function(n){return t.openUpdateItemModal(e)}}},[n("v-icon",[t._v(" mdi-pencil ")])],1),n("v-btn",{attrs:{color:"success",icon:"",fab:""},on:{click:function(n){return t.removeItem(e)}}},[n("v-icon",[t._v("mdi-check")])],1)],1)],1)],1),t.isLastItem(e)?t._e():n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-divider")],1)],1)],1)],1)})),1)],1):t._e()},B=[],T={computed:{items:function(){return this.$store.state.selection.items}},methods:{isLastItem:function(t){var e=this.items.length,n=this.items.indexOf(t);return n+1===e},openUpdateItemModal:function(t){this.$store.commit("selection/select",t)},removeItem:function(t){this.$store.commit("selection/removeItem",t)}}},M=T,P=(n("4f93"),n("b0af")),A=n("a523"),E=n("ce7e"),R=n("8860"),F=n("1800"),J=Object(V["a"])(M,q,B,!1,null,"0348e742",null),U=J.exports;w()(J,{VBtn:x["a"],VCard:P["a"],VCol:S["a"],VContainer:A["a"],VDivider:E["a"],VIcon:C["a"],VList:R["a"],VListItem:O["a"],VListItemAction:F["a"],VListItemActionText:j["a"],VListItemContent:j["b"],VRow:k["a"]});var D={name:"ShoppingList",components:{ItemList:U,ItemSearchBar:$},data:function(){return{}}},N=D,X=(n("3350"),Object(V["a"])(N,v,p,!1,null,"761ca1d3",null)),z=X.exports;w()(X,{VContainer:A["a"],VRow:k["a"]}),o["a"].use(d["a"]);var G=[{path:"/",name:"Shopping List",component:z}],H=new d["a"]({mode:"history",base:"/shoppy-list/",routes:G}),K=H,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",[n("v-main",[n("v-container",{staticStyle:{height:"100%"},attrs:{fluid:""}},[n("router-view")],1)],1),n("v-footer",{attrs:{app:""}}),n("v-bottom-sheet",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-sheet",{staticClass:"text-center",attrs:{height:"200px"}},[n("v-btn",{staticClass:"mt-6",attrs:{text:"",color:"red"},on:{click:function(e){t.dialog=!t.dialog}}},[t._v(" close ")]),n("div",{staticClass:"py-3"},[n("v-form",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)},W=[],Y={data:function(){return{dialog:!1,quantity:1}},computed:{select:function(){return this.$store.state.selection.currentSelection}},watch:{select:function(){this.dialog=!this.dialog}}},Z=Y,tt=(n("5c0b"),n("7496")),et=n("288c"),nt=n("553a"),ot=n("4bd4"),at=n("f6c4"),it=n("8dd9"),rt=n("8654"),ct=Object(V["a"])(Z,Q,W,!1,null,null,null),st=ct.exports;w()(ct,{VApp:tt["a"],VBottomSheet:et["a"],VBtn:x["a"],VCol:S["a"],VContainer:A["a"],VFooter:nt["a"],VForm:ot["a"],VMain:at["a"],VRow:k["a"],VSheet:it["a"],VTextField:rt["a"]}),o["a"].config.productionTip=!1,new o["a"]({store:f,router:K,vuetify:i,render:function(t){return t(st)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){},b1a8:function(t,e,n){},f050:function(t,e,n){}});
//# sourceMappingURL=app.7f7f1003.js.map