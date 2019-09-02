(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{"20d6":function(e,t,a){"use strict";var i=a("5ca1"),r=a("0a49")(6),s="findIndex",n=!0;s in[]&&Array(1)[s](function(){n=!1}),i(i.P+i.F*n,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(s)},3530:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",[a("b-row",[a("b-col",[a("h2",{staticClass:"view-header"},[e._v("Admin")]),a("b-tabs",{attrs:{"content-class":"mt-3"}},[a("b-tab",{attrs:{title:"Exercises",active:""}},[a("exercises")],1),a("b-tab",{attrs:{title:"Tags"}},[a("exerciseTags")],1),a("b-tab",{attrs:{title:"Workouts"}})],1)],1)],1)],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{staticClass:"text-capitalize"},[e._v(e._s(e.action))]),a("b-form",{ref:"form",on:{submit:e.onSubmit}},[a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1","label-for":"name"}},[a("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{id:"input-group-3","label-for":"video"}},[a("b-form-input",{attrs:{id:"video",type:"text",placeholder:"Video"},model:{value:e.form.video,callback:function(t){e.$set(e.form,"video",t)},expression:"form.video"}})],1)],1),a("b-col",[a("b-form-group",{staticClass:"mt-2",attrs:{id:"input-group-4","label-for":"image"}},[a("b-form-checkbox",{attrs:{id:"image",name:"image",switch:""},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}},[a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"File must be committed to public/img/exercises as\n              a JPG with the exercise ID as filename."}},[e._v("\n              Image\n            ")])])],1)],1)],1),a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-2","label-for":"textarea"}},[a("b-form-textarea",{attrs:{id:"textarea",name:"description",placeholder:"Description",rows:"3","max-rows":"6",required:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1),a("b-col",[a("b-form-group",{attrs:{label:"Tags"}},[a("b-form-checkbox-group",{attrs:{id:"checkbox-group-1",options:e.tags,name:"tags"},model:{value:e.form.tags,callback:function(t){e.$set(e.form,"tags",t)},expression:"form.tags"}})],1)],1)],1),a("b-button",{attrs:{type:"submit",variant:"create"!==e.action&&e.form.id?"warning":"primary",disabled:0===e.form.tags.length||!e.form.name||!e.form.description}},[a("span",{directives:[{name:"show",rawName:"v-show",value:"create"===e.action,expression:"action === 'create'"}]},[e._v("Create Exercise")]),"create"!==e.action&&e.form.id?a("span",[e._v("Update Exercise")]):e._e()]),"create"!==e.action&&e.form.id?a("b-button",{staticClass:"ml-2",attrs:{type:"reset",variant:"secondary"},on:{click:function(t){return e.resetForm()}}},[e._v("\n        Cancel\n      ")]):e._e()],1),a("h3",{staticClass:"mt-4"},[e._v("List")]),a("b-row",[a("b-col",[a("Loader",{directives:[{name:"show",rawName:"v-show",value:0===e.exercises.length,expression:"exercises.length === 0"}]}),e.exercises.length>0?a("b-table",{attrs:{striped:"",hover:"",items:e.exercises,fields:e.fields},scopedSlots:e._u([{key:"description",fn:function(t){return[a("span",{domProps:{innerHTML:e._s(e.exerciseDescription(t.item.description))}})]}},{key:"tags",fn:function(e){return[a("TagsBadges",{attrs:{tags:e.item.tags}})]}},{key:"video",fn:function(t){return[t.item.video?a("a",{attrs:{href:t.item.video,target:"_blank",title:"View video"}},[a("font-awesome-icon",{attrs:{size:"lg",icon:["fas","video"]}})],1):e._e()]}},{key:"image",fn:function(t){return[t.item.image?a("a",{attrs:{href:e.publicPath+"img/exercises/"+t.item.id+".jpg",target:"_blank",title:"View image"}},[a("font-awesome-icon",{attrs:{size:"lg",icon:["far","image"]}})],1):e._e()]}},{key:"edit",fn:function(t){return[a("font-awesome-icon",{staticClass:"cursor--pointer",attrs:{size:"lg",icon:["far","edit"],title:"Edit"},on:{click:function(a){e.action="edit",e.form=t.item}}})]}},{key:"delete",fn:function(t){return[a("ConfirmDelete",{attrs:{exercise:t.item},on:{"confirm-delete":e.onConfirmDelete}})]}}],null,!1,1224950732)}):e._e()],1)],1)],1)},n=[],o=(a("20d6"),a("a481"),a("7f7f"),a("2b0e")),c=a("59ca"),l=a.n(c),m=a("17e1"),f=a("555f"),u=a("c3e0"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-button",{directives:[{name:"show",rawName:"v-show",value:e.showConfirmation,expression:"showConfirmation"}],staticClass:"mr-1",attrs:{variant:"danger",size:"sm"},on:{click:e.emitMessage}},[e._v("\n      Yes\n    ")]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:e.showConfirmation,expression:"showConfirmation"}],attrs:{variant:"success",size:"sm"},on:{click:function(t){e.showConfirmation=!1}}},[e._v("\n      No\n    ")]),a("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:!e.showConfirmation,expression:"!showConfirmation"}],staticClass:"cursor--pointer",attrs:{size:"lg",icon:["far","trash-alt"],title:"Delete?"},on:{click:function(t){e.showConfirmation=!e.showConfirmation}}})],1)},b=[],g={name:"ConfirmDelete",props:{exercise:Object},data:function(){return{showConfirmation:!1}},methods:{emitMessage:function(){this.showConfirmation=!1,this.$emit("confirm-delete",this.exercise.id)}}},p=g,h=a("2877"),v=Object(h["a"])(p,d,b,!1,null,null,null),x=v.exports,w={name:"Exercises",components:{Loader:f["a"],TagsBadges:u["a"],ConfirmDelete:x},data:function(){return{action:"create",tags:[],exercises:[],fields:{id:{label:"Id"},name:{label:"Name"},tags:{label:"Tags"},description:{label:"Description",thClass:"description"},video:{label:"Video",tdClass:"text-center"},image:{label:"Image",tdClass:"text-center"},edit:{label:"Edit",tdClass:"text-center"},delete:{label:"Delete",tdClass:"text-center",thClass:"delete text-center"}},form:{tags:[],image:!1},publicPath:"/"}},firebase:{exercises:m["a"].ref("exercises")},mounted:function(){var e=this;l.a.database().ref("exercise-tags").once("value").then(function(t){e.tags=t.val().map(function(e){return{value:e.id,text:e.name}})})},methods:{exerciseDescription:function(e){return e.replace(/\n/g,"<br />")},resetForm:function(){this.action="create",this.form={},this.form.tags=[],this.form.image=!1,this.$refs.form.reset()},onSubmit:function(e){e.preventDefault();var t=o["a"].util.extend([],this.exercises);"create"!==this.action||this.form.id||(this.form.id=parseInt(this.exercises[0].id,10)+1,t.unshift(this.form)),m["a"].ref("exercises").set(t),this.resetForm()},onConfirmDelete:function(e){var t=o["a"].util.extend([],this.exercises);t.splice(t.findIndex(function(t){return t.id===e}),1),m["a"].ref("exercises").set(t),this.resetForm()}}},_=w,C=(a("8615"),Object(h["a"])(_,s,n,!1,null,null,null)),k=C.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-row",[a("b-col",{attrs:{cols:"4"}},[a("h3",{staticClass:"text-capitalize"},[e._v(e._s(e.action))]),a("b-alert",{attrs:{show:"",variant:"warning"}},[a("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:["fas","exclamation-triangle"]}}),e._v("\n        Tags can not be deleted as their ID could be assigned to an exercise.\n        Instead of delete, rename it if needed.\n      ")],1),a("b-form",{ref:"form",on:{submit:e.onSubmit}},[a("b-row",[a("b-col",[a("b-form-group",{attrs:{id:"input-group-1","label-for":"name"}},[a("b-form-input",{attrs:{id:"name",type:"text",required:"",placeholder:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1)],1),a("b-button",{attrs:{type:"submit",variant:"create"!==e.action&&e.form.id?"warning":"primary",disabled:!e.form.name}},[a("span",{directives:[{name:"show",rawName:"v-show",value:"create"===e.action,expression:"action === 'create'"}]},[e._v("Create Tag")]),"create"!==e.action&&e.form.id?a("span",[e._v("Update Tag")]):e._e()]),"create"!==e.action&&e.form.id?a("b-button",{staticClass:"ml-2",attrs:{type:"reset",variant:"secondary"},on:{click:function(t){return e.resetForm()}}},[e._v("\n            Cancel\n          ")]):e._e()],1)],1),e.tags?a("b-col",[a("h3",{staticClass:"mt-4"},[e._v("List")]),a("Loader",{directives:[{name:"show",rawName:"v-show",value:0===e.tags.length,expression:"tags.length === 0"}]}),e.tags.length>0?a("b-table",{attrs:{striped:"",hover:"",items:e.tags,fields:e.fields},scopedSlots:e._u([{key:"edit",fn:function(t){return[a("font-awesome-icon",{staticClass:"cursor--pointer",attrs:{size:"lg",icon:["far","edit"],title:"Edit"},on:{click:function(a){e.action="edit",e.form=t.item}}})]}}],null,!1,3621869500)}):e._e()],1):e._e()],1)],1)},D=[],E={name:"ExerciseTags",components:{Loader:f["a"]},data:function(){return{tags:[],action:"create",fields:{id:{label:"Id"},name:{label:"Name"},edit:{label:"Edit",tdClass:"text-center",thClass:"text-center"}},form:{name:""}}},firebase:{tags:m["a"].ref("exercise-tags")},methods:{resetForm:function(){this.action="create",this.form={},this.$refs.form.reset()},onSubmit:function(e){e.preventDefault();var t=o["a"].util.extend([],this.tags);"create"!==this.action||this.form.id||(this.form.id=parseInt(this.tags[0].id,10)+1,t.unshift(this.form)),m["a"].ref("exercise-tags").set(t),this.resetForm()}}},N=E,T=Object(h["a"])(N,y,D,!1,null,null,null),$=T.exports,I={components:{Exercises:k,ExerciseTags:$},data:function(){return{}},mounted:function(){}},F=I,z=Object(h["a"])(F,i,r,!1,null,null,null);t["default"]=z.exports},"4c74":function(e,t,a){},"555f":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loader"})},r=[],s=(a("9a64"),a("2877")),n={},o=Object(s["a"])(n,i,r,!1,null,"74161296",null);t["a"]=o.exports},"7f7f":function(e,t,a){var i=a("86cc").f,r=Function.prototype,s=/^\s*function ([^ (]*)/,n="name";n in r||a("9e1e")&&i(r,n,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},8615:function(e,t,a){"use strict";var i=a("4c74"),r=a.n(i);r.a},"9a64":function(e,t,a){"use strict";var i=a("eebd"),r=a.n(i);r.a},c3e0:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.tagsDB.length>0?a("div",e._l(e.tags,function(t){return a("b-badge",{key:t,staticClass:"mr-1",attrs:{pill:"",variant:"info",to:"search?query="+encodeURI(e.getTagName(t))}},[e._v("\n    "+e._s(e.getTagName(t))+"\n  ")])}),1):e._e()},r=[],s=(a("7f7f"),a("7514"),a("17e1")),n={name:"TagsBadges",props:{tags:Array},data:function(){return{tagsDB:[]}},firebase:{tagsDB:s["a"].ref("exercise-tags")},methods:{getTagName:function(e){var t=this.tagsDB.find(function(t){return t.id===e});return t?t.name:"Error"}}},o=n,c=a("2877"),l=Object(c["a"])(o,i,r,!1,null,null,null);t["a"]=l.exports},eebd:function(e,t,a){}}]);