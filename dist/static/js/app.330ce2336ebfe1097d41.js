webpackJsonp([1],[,,,,,,,,,function(e,t,a){"use strict";var n=a(3),s=a(47),r=a(41),i=a.n(r),o=a(42),c=a.n(o);n.a.use(s.a),t.a=new s.a({mode:"history",routes:[{path:"/",name:"Express-Vue-QuickStart",component:i.a},{path:"/Marketplace",name:"Marketplace",component:c.a},{path:"*",name:"",component:i.a}]})},function(e,t,a){function n(e){a(35)}var s=a(1)(a(29),a(45),n,null,null);e.exports=s.exports},,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(40),s=a.n(n);t.default={name:"app",components:{appHeader:s.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Home",data:function(){return{}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(39),s=a.n(n),r=a(11),i=a.n(r),o=a(51),c=a.n(o);t.default={name:"MarketPlace",data:function(){return{newItemObj:{username:"",itemName:"",NumberOfItem:"",itemPrice:"",contact:""},items:""}},methods:{addItem:function(){var e=this;if(this.newItemObj.itemName&&this.newItemObj.itemPrice&&(this.newItemObj.username||this.newItemObj.contact)){this.newItemObj.NumberOfItem||(this.newItemObj.NumberOfItem="1");!0===confirm("Please confirm your post: \nitemName: "+this.newItemObj.itemName+"\nitemPrice: "+this.newItemObj.itemPrice+"\nNumberOfItem: "+this.newItemObj.NumberOfItem+"\nusername: "+this.newItemObj.username+"\ncontact: "+this.newItemObj.contact+"\n")&&i.a.post("http://"+c.a.hostip+":"+c.a.hostport+"/api/marketplacedb",e.newItemObj).then(function(t){s.a.success("Lottery Added successfully"),e.getItems(),e.newItemObj.username="",e.newItemObj.itemName="",e.newItemObj.itemPrice="",e.newItemObj.NumberOfItem="",e.newItemObj.username="",e.newItemObj.contact=""}).catch(function(e){console.log(e)})}else s.a.warning("Please input necessary information!")},getItems:function(){var e=this;i.a.get("http://"+c.a.hostip+":"+c.a.hostport+"/api/marketplacedb").then(function(t){e.items=t.data}).catch(function(t){console.log(e.errors)})},removeItem:function(e){var t=this;console.log(e),i.a.delete("http://"+c.a.hostip+":"+c.a.hostport+"/api/marketplacedb/"+e._id).then(function(e){t.Item=e.data,t.getItems()}).catch(function(e){console.log(t.errors)}),s.a.success("Item removed successfully")}},created:function(){this.getItems()}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(3),s=a(10),r=a.n(s),i=a(9);n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},function(e,t){},function(e,t){},function(e,t){},,,,,function(e,t,a){var n=a(1)(null,a(46),null,null,null);e.exports=n.exports},function(e,t,a){function n(e){a(33)}var s=a(1)(a(30),a(43),n,"data-v-07c1b177",null);e.exports=s.exports},function(e,t,a){function n(e){a(34)}var s=a(1)(a(31),a(44),n,null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("h1",[e._v(" Home Page")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading "},[e._v("\n      Post your items\n    ")]),e._v(" "),a("div",{staticClass:"panel-body "},[a("form",{staticClass:"input-group col-md-9 col-md-offset-1  ",attrs:{id:"form"},on:{submit:function(t){t.preventDefault(),e.addItem(t)}}},[a("div",{staticClass:"form-group col-sm-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newItemObj.itemName,expression:"newItemObj.itemName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"itemName"},domProps:{value:e.newItemObj.itemName},on:{input:function(t){t.target.composing||(e.newItemObj.itemName=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-sm-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newItemObj.itemPrice,expression:"newItemObj.itemPrice"}],staticClass:"form-control",attrs:{type:"text",placeholder:"itemPrice"},domProps:{value:e.newItemObj.itemPrice},on:{input:function(t){t.target.composing||(e.newItemObj.itemPrice=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-sm-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newItemObj.NumberOfItem,expression:"newItemObj.NumberOfItem"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Number"},domProps:{value:e.newItemObj.NumberOfItem},on:{input:function(t){t.target.composing||(e.newItemObj.NumberOfItem=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-sm-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newItemObj.username,expression:"newItemObj.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"username"},domProps:{value:e.newItemObj.username},on:{input:function(t){t.target.composing||(e.newItemObj.username=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group col-sm-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newItemObj.contact,expression:"newItemObj.contact"}],staticClass:"form-control",attrs:{type:"text",placeholder:"contact"},domProps:{value:e.newItemObj.contact},on:{input:function(t){t.target.composing||(e.newItemObj.contact=t.target.value)}}})]),e._v(" "),e._m(1)])])]),e._v(" "),a("div",{staticClass:"panel panel-default"},[a("div",{staticClass:"panel-heading"},[e._v("Trade items list:")]),e._v(" "),a("table",{staticClass:"table table-hover"},[e._m(2),e._v(" "),a("tbody",e._l(e.items,function(t){return a("tr",[a("td",[e._v(e._s(t.itemName))]),e._v(" "),a("td",[e._v(e._s(t.itemPrice))]),e._v(" "),a("td",[e._v(e._s(t.NumberOfItem))]),e._v(" "),a("td",[e._v(e._s(t.username))]),e._v(" "),a("td",[e._v(e._s(t.contact))]),e._v(" "),a("td",[a("span",{staticClass:"glyphicon glyphicon-trash",attrs:{"aria-hidden":"true"},on:{click:function(a){e.removeItem(t)}}})])])}))])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"row col-sm-12 "},[a("div",{staticClass:"panel panel-info "},[a("div",{staticClass:"panel-heading  "},[e._v("Info")]),e._v(" "),a("div",{staticClass:"panel-body "},[e._v("\n          Express-Vue-QuickStart\n        ")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"input-group-btn col-sm-2"},[a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Add"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[e._v("Item Name")]),e._v(" "),a("th",[e._v("Item Price")]),e._v(" "),a("th",[e._v("Item Number")]),e._v(" "),a("th",[e._v("username")]),e._v(" "),a("th",[e._v("Contact")])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("app-header"),e._v(" "),a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12"},[a("transition",{attrs:{name:"slide",mode:"out-in"}},[a("router-view")],1)],1)])])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-default"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-header"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("QuickStart")])],1),e._v(" "),a("div",{staticClass:"collapse navbar-collapse"},[a("ul",{staticClass:"nav navbar-nav"},[a("router-link",{attrs:{to:"/Marketplace","active-class":"active",tag:"li"}},[a("a",[e._v("Marketplace")])])],1),e._v(" "),a("ul",{staticClass:"nav navbar-nav navbar-right"})])])])},staticRenderFns:[]}},,,,,function(e,t){e.exports={hostip:"127.0.0.1",hostport:"9000"}}],[32]);