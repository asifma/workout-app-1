(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["excercises"],{"555f":function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"loader"})},n=[],s=(a("9a64"),a("2877")),i={},c=Object(s["a"])(i,t,n,!1,null,"74161296",null);r["a"]=c.exports},"7f7f":function(e,r,a){var t=a("86cc").f,n=Function.prototype,s=/^\s*function ([^ (]*)/,i="name";i in n||a("9e1e")&&t(n,i,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},"9a64":function(e,r,a){"use strict";var t=a("eebd"),n=a.n(t);n.a},b280:function(e,r,a){"use strict";a.r(r);var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",[a("Loader",{directives:[{name:"show",rawName:"v-show",value:!e.exercises,expression:"!exercises"}]}),e.exercises?a("b-container",[a("h2",{staticClass:"view-header"},[e._v("Exercises")]),a("b-row",e._l(e.exercises,function(r){return a("b-col",{key:r.id,attrs:{cols:"12",md:"6"}},[a("ExerciseCard",{attrs:{exercise:r,areas:e.areas}})],1)}),1)],1):e._e()],1)},n=[],s=a("59ca"),i=a.n(s),c=a("555f"),o=a("f5c6"),u={components:{Loader:c["a"],ExerciseCard:o["a"]},data:function(){return{areas:[],exercises:[]}},mounted:function(){var e=this;i.a.database().ref("exercises").once("value").then(function(r){e.exercises=r.val()}),i.a.database().ref("exercise-areas").once("value").then(function(r){e.areas=r.val()})}},l=u,d=a("2877"),f=Object(d["a"])(l,t,n,!1,null,null,null);r["default"]=f.exports},eebd:function(e,r,a){},f5c6:function(e,r,a){"use strict";var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return e.exercise?a("b-card",{staticClass:"mb-3",attrs:{header:e.exercise.name,"header-tag":"h2","img-src":e.exercise.image?e.publicPath+"img/exercises/"+e.exercise.id+".jpg":"","img-alt":e.exercise.name,"img-top":"",tag:"article","bg-variant":"dark"}},[a("b-card-text",[a("div",{staticClass:"pb-3"},e._l(e.exercise.areas,function(r){return a("b-badge",{key:r,staticClass:"mr-1",attrs:{pill:"",variant:"info",to:"search?query="+encodeURI(e.getAreaName(r))}},[e._v("\n        "+e._s(e.getAreaName(r))+"\n      ")])}),1),a("span",{domProps:{innerHTML:e._s(e.exerciseDescription)}})]),e.exercise.video?a("b-button",{attrs:{target:"_blank",rel:"noopener",href:e.exercise.video,variant:"primary"}},[e._v("\n    Watch video\n  ")]):e._e()],1):e._e()},n=[],s=(a("7f7f"),a("7514"),a("a481"),{name:"ExerciseCard",props:{areas:Array,exercise:Object},computed:{exerciseDescription:function(){return this.exercise.description.replace(/\n/g,"<br />")}},data:function(){return{publicPath:"/"}},methods:{getAreaName:function(e){var r=this.areas.find(function(r){return r.id===e});return r?r.name:"Error"}}}),i=s,c=a("2877"),o=Object(c["a"])(i,t,n,!1,null,null,null);r["a"]=o.exports}}]);