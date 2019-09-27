(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"555f":function(e,r,t){"use strict";var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"loader"})},s=[],l=(t("9a64"),t("2877")),n={},o=Object(l["a"])(n,a,s,!1,null,"74161296",null);r["a"]=o.exports},"8a2b":function(e,r,t){"use strict";var a=t("f40a"),s=t.n(a);s.a},"9a64":function(e,r,t){"use strict";var a=t("eebd"),s=t.n(a);s.a},ac6a:function(e,r,t){for(var a=t("cadf"),s=t("0d58"),l=t("2aba"),n=t("7726"),o=t("32e9"),i=t("84f2"),u=t("2b4c"),c=u("iterator"),v=u("toStringTag"),f=i.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=s(m),w=0;w<d.length;w++){var g,b=d[w],h=m[b],p=n[b],D=p&&p.prototype;if(D&&(D[c]||o(D,c,f),D[v]||o(D,v,b),i[b]=f,h))for(g in a)D[g]||l(D,g,a[g],!0)}},c66d:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("Loader",{directives:[{name:"show",rawName:"v-show",value:!e.currentDBUser.id,expression:"!currentDBUser.id"}]}),e.currentDBUser&&e.currentDBUser.id?t("b-container",[t("b-row",[t("b-col",{staticClass:"text-center mb-3"},[e.currentDBUser.gravatar?t("b-img",{staticClass:"mb-4 avatar",attrs:{thumbnail:"",fluid:"",rounded:"circle",src:"https://www.gravatar.com/avatar/"+e.currentDBUser.gravatar+"?s=200",alt:"Profile"}}):e._e(),t("h4",[e._v(e._s(e.currentDBUser.name)+" "+e._s(e.currentDBUser.lastname))]),t("small",{staticClass:"text-muted"},[e._v("Last workout: TODO")])],1)],1),t("b-row",[e.workoutGoals.length>0?t("b-col",{staticClass:"mt-3 col-12 col-sm-6 col-lg-4"},[t("b-card",{staticClass:"mb-3 text-center",attrs:{tag:"article","bg-variant":"dark"}},[t("b-card-text",[t("img",{staticClass:"icon mt-2 mb-4",attrs:{src:e.publicPath+"img/icons/goals/"+e.currentDBUser.goal+".svg",alt:"Goal: "+e.goalName(e.currentDBUser.goal),title:"Goal: "+e.goalName(e.currentDBUser.goal)}}),t("h4",{staticClass:"mb-4"},[e._v("Goals")]),e.viewOnlyProfile?e._e():t("b-form",[t("b-form-group",{attrs:{label:"I will become "+e.goalName(e.currentDBUser.goal)}},[t("b-form-input",{attrs:{id:"goal-range",number:"",type:"range",min:e.workoutGoals[0].id,max:e.workoutGoals[e.workoutGoals.length-1].id},model:{value:e.currentDBUser.goal,callback:function(r){e.$set(e.currentDBUser,"goal",r)},expression:"currentDBUser.goal"}})],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.viewOnlyProfile,expression:"viewOnlyProfile"}]},[e._v("\n              "+e._s(e.currentDBUser.name)+"? No, call me "+e._s(e.goalName(e.currentDBUser.goal))+"\n            ")])],1)],1)],1):e._e(),e.workoutLevels.length>0?t("b-col",{staticClass:"mt-3 col-12 col-sm-6 col-lg-4"},[t("b-card",{staticClass:"mb-3 text-center",attrs:{tag:"article","bg-variant":"dark"}},[t("b-card-text",[t("img",{staticClass:"icon mt-2 mb-4",attrs:{src:e.publicPath+"img/icons/levels/"+e.currentDBUser.level+".svg",alt:"Level: "+e.levelName(e.currentDBUser.level),title:"Level: "+e.levelName(e.currentDBUser.level)}}),t("h4",{staticClass:"mb-4"},[e._v(e._s(e.levelName(e.currentDBUser.level)))]),e.viewOnlyProfile?e._e():t("b-form",[t("b-form-group",{attrs:{label:"Your current level"}},[t("b-form-input",{attrs:{id:"level-range",number:"",type:"range",min:e.workoutLevels[0].id,max:e.workoutLevels[e.workoutLevels.length-1].id},model:{value:e.currentDBUser.level,callback:function(r){e.$set(e.currentDBUser,"level",r)},expression:"currentDBUser.level"}})],1)],1),t("div",{directives:[{name:"show",rawName:"v-show",value:e.viewOnlyProfile,expression:"viewOnlyProfile"}]},[t("span",{directives:[{name:"show",rawName:"v-show",value:1===+e.currentDBUser.level,expression:"+currentDBUser.level === 1"}]},[e._v("Just getting started")]),t("span",{directives:[{name:"show",rawName:"v-show",value:2===+e.currentDBUser.level,expression:"+currentDBUser.level === 2"}]},[e._v("Above average")]),t("span",{directives:[{name:"show",rawName:"v-show",value:3===+e.currentDBUser.level,expression:"+currentDBUser.level === 3"}]},[e._v("Unstoppable")])])],1)],1)],1):e._e()],1)],1):e._e()],1)},s=[],l=(t("ac6a"),t("7f7f"),t("7514"),t("59ca")),n=t.n(l),o=t("17e1"),i=t("555f"),u=t("940c"),c={components:{Loader:i["a"]},data:function(){return{publicPath:"/",currentUser:n.a.auth().currentUser,currentDBUser:{},updating:!1,users:[],viewOnlyProfile:!1,workoutGoals:[],workoutLevels:[]}},firebase:{users:o["a"].ref(u["a"].users),workoutGoals:o["a"].ref(u["a"].workoutGoals),workoutLevels:o["a"].ref(u["a"].workoutLevel)},mounted:function(){var e=this,r=parseInt(this.$route.params.user_id,10);n.a.database().ref(u["a"].users).once("value").then(function(t){e.users=t.val();var a=t.val().find(function(r){return r.email===e.currentUser.email});r!==a.id&&(e.viewOnlyProfile=!0,a=t.val().find(function(e){return e.id===r})),e.currentDBUser=a})},methods:{pushProfileSavedMessage:function(){this.$bvToast.toast("Profile saved.",{variant:"success",solid:!0,toaster:"b-toaster-top-left",autoHideDelay:2e3,noCloseButton:!0})},goalName:function(e){if(this.workoutGoals){var r=this.workoutGoals.find(function(r){return r.id===parseInt(e,10)});if(r)return r.name}return""},levelName:function(e){if(this.workoutLevels){var r=this.workoutLevels.find(function(r){return r.id===parseInt(e,10)});if(r)return r.name}return""},saveProfile:function(){var e=this;this.users.forEach(function(r,t){r.id===e.currentDBUser.id&&(e.users[t]=e.currentDBUser)}),n.a.database().ref(u["a"].users).set(this.users).then(function(){e.pushProfileSavedMessage()})}},watch:{"currentDBUser.level":function(e,r){r&&this.saveProfile()},"currentDBUser.goal":function(e,r){r&&this.saveProfile()}}},v=c,f=(t("8a2b"),t("2877")),m=Object(f["a"])(v,a,s,!1,null,"30e8682c",null);r["default"]=m.exports},eebd:function(e,r,t){},f40a:function(e,r,t){}}]);