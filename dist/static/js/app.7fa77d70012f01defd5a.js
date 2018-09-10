webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n={name:"App",mounted:function(){document.addEventListener("DOMContentLoaded",()=>{const t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.target,a=document.getElementById(e);t.classList.toggle("is-active"),a.classList.toggle("is-active")})})})}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("nav",{staticClass:"navbar has-shadow is-fixed-top"},[a("div",{staticClass:"container"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"button is-white",attrs:{to:"/",id:"header-nav-logo"}},[t._v("LightPoll")]),t._v(" "),t._m(0)],1),t._v(" "),t._m(1)])])]),t._v(" "),a("router-view"),t._v(" "),t._m(2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"navbar-burger is-flex-mobile",attrs:{role:"button","data-target":"header-nav-menu","aria-label":"menu","aria-expanded":"false"}},[e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"navbar-menu",attrs:{id:"header-nav-menu"}},[e("div",{staticClass:"navbar-end"},[e("a",{staticClass:"navbar-item"},[this._v("Register")]),this._v(" "),e("a",{staticClass:"navbar-item is-hidden-desktop"},[this._v("Login")]),this._v(" "),e("div",{staticClass:"is-hidden-touch"},[e("a",{staticClass:"button is-success is-outlined is-rounded"},[this._v("Login")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container margin-top-5"},[a("div",{staticClass:"divider-10"}),t._v(" "),a("div",{attrs:{id:"footer-container"}},[a("a",{attrs:{href:"#"}},[t._v("About")]),t._v("\n         • \n        "),a("a",{attrs:{href:"#"}},[t._v("Privacy")]),t._v("\n         • \n        "),a("a",{attrs:{href:"#"}},[t._v("GitHub")]),t._v("\n         • \n        "),a("a",{attrs:{href:"#"}},[t._v("Contact")])])])])}]};var o=a("VU/8")(n,i,!1,function(t){a("rqlX")},null,null).exports,r=a("/ocq"),c=a("+b6B"),l=a.n(c),d=a("JnrT"),u=a.n(d),h=a("i3BJ"),v=a.n(h),m={name:"Create",data:function(){return{name:null,options:[],anonymous:!0,enforceUnique:!1,errors:[]}},methods:{optionPlaceholder:function(t){return 0===t?"And then enter an option...":1===t?"And now another...":"And maybe another..."},setCharRestrictEffects:function(){const t=document.getElementsByClassName("140char");for(let e of t)u()(e),e.addEventListener("keydown",t=>{const e=t.target;e.value.length>=140&&(e.style.setProperty("color","deeppink"),setTimeout(()=>e.style.removeProperty("color"),500))})},hasErrors:function(){let t=new Set,e=0,a=[];this.name||t.add("This poll needs a name."),this.name&&!l.a.isAscii(this.name)&&t.add("Unacceptable characters in name."),this.name&&this.name.length>140&&t.add("The poll name is too long.");for(let s of this.options)(s=String(s)).length>=1&&e++,s.length>=1&&!l.a.isAscii(s)&&t.add("Unacceptable characters in one or more options."),s.length>140&&t.add("One or more options is too long."),0===s.trim().length&&t.add("One or more options is blank."),a.includes(s)&&t.add("Options must be unique."),a.includes(s)||a.push(s);return e<2&&t.add("This poll needs at least two options."),t},sendPollAndRetrieveId:function(t){if(this.errors=[],t.target.classList.add("is-loading"),this.hasErrors().size>0)return this.errors=Array.from(this.hasErrors()),setTimeout(()=>t.target.classList.remove("is-loading"),200),void setTimeout(()=>v.a.attach(),200);fetch("http://localhost:3000/poll",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:this.name,options:this.options,enforceUnique:this.enforceUnique,anonymous:this.anonymous})}).then(t=>t.json()).then(t=>{}).catch(()=>{}).finally(()=>setTimeout(()=>t.target.classList.remove("is-loading"),200))}},watch:{"options.length":function(){this.setCharRestrictEffects()}},mounted:function(){this.setCharRestrictEffects()}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-two-thirds"},[a("div",{staticClass:"card",attrs:{id:"main-poll-form-card"}},[a("form",{attrs:{id:"main-poll-form"}},[a("header",{staticClass:"card-header"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"140char",attrs:{id:"main-poll-form-name",rows:"1",maxlength:"140",placeholder:"Enter your question here..."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"card-content"},t._l(t.options.length+1,function(e){return a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.options[e-1],expression:"options[index-1]"}],staticClass:"main-poll-form-option 140char",attrs:{rows:"1",maxlength:"140",placeholder:t.optionPlaceholder(e-1)},domProps:{value:t.options[e-1]},on:{input:function(a){a.target.composing||t.$set(t.options,e-1,a.target.value)}}})})),t._v(" "),t.errors.length>0?a("div",{attrs:{id:"main-poll-errors"}},[a("div",{staticClass:"accordions"},[a("div",{staticClass:"accordion"},[a("div",{staticClass:"accordion-header toggle"},[a("p",[t._v(t._s(t.errors.length)+" error"+t._s(t.errors.length>1?"s":"")+".")]),t._v(" "),t._m(0)]),t._v(" "),a("div",{staticClass:"accordion-body"},[a("div",{staticClass:"accordion-content"},t._l(t.errors,function(e){return a("div",[t._m(1,!0),t._v("\n                                         "+t._s(e)+"\n                                         ")])}))])])])]):t._e(),t._v(" "),a("footer",{staticClass:"card-footer"},[a("div",[a("a",{staticClass:"button is-success is-outlined is-rounded",attrs:{id:"main-poll-create"},on:{click:t.sendPollAndRetrieveId}},[t._v("\n                                Create Poll\n                            ")])]),t._v(" "),a("div",{attrs:{id:"main-poll-checkbox-group"}},[a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.anonymous,expression:"anonymous"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.anonymous)?t._i(t.anonymous,null)>-1:t.anonymous},on:{change:function(e){var a=t.anonymous,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.anonymous=a.concat([null])):i>-1&&(t.anonymous=a.slice(0,i).concat(a.slice(i+1)))}else t.anonymous=n}}}),t._v(" Post anonymously\n                            ")]),t._v(" "),a("label",{staticClass:"checkbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.enforceUnique,expression:"enforceUnique"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.enforceUnique)?t._i(t.enforceUnique,null)>-1:t.enforceUnique},on:{change:function(e){var a=t.enforceUnique,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.enforceUnique=a.concat([null])):i>-1&&(t.enforceUnique=a.slice(0,i).concat(a.slice(i+1)))}else t.enforceUnique=n}}}),t._v(" Prevent duplicate votes\n                            ")])])])])])]),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon has-text-warning"},[e("i",{staticClass:"fas fa-exclamation-triangle"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-one-third"},[e("p",{staticClass:"is-size-5 fw-500"},[this._v("What is LightPoll?")]),this._v(" "),e("div",{staticClass:"br-50"}),this._v(" "),e("p",[this._v("LightPoll allows you to instantaneosly create and share online polls without registration.")]),this._v(" "),e("div",{staticClass:"br-25"}),this._v(" "),e("p",[this._v("It is a free and open source software project released under the MIT License.")])])}]};var f=a("VU/8")(m,p,!1,function(t){a("Y7o6")},"data-v-4589ec97",null).exports;s.a.use(r.a);var _=new r.a({routes:[{path:"/",component:f}]});new s.a({el:"#app",router:_,components:{App:o},template:"<App/>"})},Y7o6:function(t,e){},rqlX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7fa77d70012f01defd5a.js.map