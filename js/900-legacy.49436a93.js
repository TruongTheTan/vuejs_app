(self["webpackChunkvuejs"]=self["webpackChunkvuejs"]||[]).push([[900],{6091:function(t,e,i){var s=i(6530).PROPER,a=i(7293),n=i(1361),r="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||r[t]()!==r||s&&n[t].name!==t}))}},3111:function(t,e,i){var s=i(1702),a=i(4488),n=i(1340),r=i(1361),o=s("".replace),l="["+r+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),h=function(t){return function(e){var i=n(a(e));return 1&t&&(i=o(i,c,"")),2&t&&(i=o(i,u,"")),i}};t.exports={start:h(1),end:h(2),trim:h(3)}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},3210:function(t,e,i){"use strict";var s=i(2109),a=i(3111).trim,n=i(6091);s({target:"String",proto:!0,forced:n("trim")},{trim:function(){return a(this)}})},1900:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return R}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"my-auto",attrs:{align:"center",justify:"center",dense:""}},[s("v-col",{attrs:{cols:"12",sm:"8",md:"4",lg:"4"}},[s("v-card",{attrs:{elevation:"0"}},[s("div",{staticClass:"text-center"},[s("h1",{staticClass:"mb-2"},[t._v("Forgot Password")]),s("p",[t._v("We will send a password reset link to the email address of the connected accounted.")])]),s("v-img",{attrs:{src:i(7768),alt:"Fedorae Education Log","aspect-ratio":4/3}}),s("v-form",{on:{submit:function(e){return e.preventDefault(),t.sendEmail()}}},[s("v-text-field",{staticClass:"rounded-0",attrs:{rules:t.rules,label:"Enter your email address",name:"email","prepend-inner-icon":"mdi-email",type:"email",outlined:"",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),s("v-btn",{staticClass:"rounded-0 mb-4",attrs:{color:"black",type:"submit","x-large":"",block:"",dark:""}},[t._v(" Send to Email ")]),s("p",{directives:[{name:"show",rawName:"v-show",value:t.wrongEmail,expression:"wrongEmail"}],staticStyle:{"text-align":"center",color:"red"}},[t._v(" Your email doesn't exist, please try again ")]),s("div",{staticStyle:{"text-align":"center"}},[s("router-link",{staticStyle:{color:"#000000"},attrs:{to:"/login"}},[t._v(" Back to Login ")])],1)],1),s("v-snackbar",{attrs:{top:"",color:"#4caf50",timeout:2e3},scopedSlots:t._u([{key:"action",fn:function(e){var i=e.attrs;return[s("v-btn",t._b({attrs:{color:"white",text:""},on:{click:function(e){t.snackBar=!1}}},"v-btn",i,!1),[t._v(" Close ")])]}}]),model:{value:t.snackBar,callback:function(e){t.snackBar=e},expression:"snackBar"}},[t._v(" We are sending new password to your email"),s("br"),t._v(" Please check your email ")])],1)],1)],1)],1)},a=[],n=i(6133),r=i(2751),o=i(3263),l=i(796),c=i(3855),u=i(3796),h=i(9726),d=(i(5003),i(1539),i(1299),i(2222),i(3210),i(140)),m=function(){function t(){(0,n.Z)(this,t)}return(0,r.Z)(t,[{key:"sendEmail",value:function(t){return!!t}}]),t}(),v=function(t,e,i,s){var a,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"===("undefined"===typeof Reflect?"undefined":(0,h.Z)(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(r=(n<3?a(r):n>3?a(e,i,r):a(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r},p=function(t){(0,l.Z)(i,t);var e=(0,c.Z)(i);function i(){var t;(0,n.Z)(this,i);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return t=e.call.apply(e,[this].concat(a)),(0,u.Z)((0,o.Z)(t),"email",""),(0,u.Z)((0,o.Z)(t),"snackBar",!1),(0,u.Z)((0,o.Z)(t),"wrongEmail",!1),(0,u.Z)((0,o.Z)(t),"rules",[function(t){return!!t||"Required"}]),t}return(0,r.Z)(i,[{key:"sendEmail",value:function(){var t=(new m).sendEmail(this.email.trim());t?(this.snackBar=!0,this.wrongEmail=!1):this.wrongEmail=!0}}]),i}(d.w3);p=v([d.wA],p);var f=p,g=f,k=i(1001),b=i(3453),w=i.n(b),y=i(9787),Z=i(2026),B=i(7024),_=i(1819),E=i(3240),x=i(5288),C=i(7894),T=i(4654),V=i(4980),$=(0,k.Z)(g,s,a,!1,null,"585b9188",null),R=$.exports;w()($,{VBtn:y.Z,VCard:Z.Z,VCol:B.Z,VContainer:_.Z,VForm:E.Z,VImg:x.Z,VRow:C.Z,VSnackbar:T.Z,VTextField:V.Z})},3240:function(t,e,i){"use strict";var s=i(5530),a=i(6141),n=i(950);e["Z"]=(0,s.Z)(a.Z,(0,n.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),i={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const i=this.watchers.find((t=>t._uid===e._uid));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},4654:function(t,e,i){"use strict";i.d(e,{Z:function(){return h}});var s=i(801),a=i(5836),n=i(2066),r=i(4552),o=i(8747),l=i(5530),c=i(8131),u=i(8219),h=(0,l.Z)(s.Z,a.Z,r.Z,(0,o.d)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:t=>"string"===typeof t||!1===t},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:n.Z.options.computed.isDark.call(this)},styles(){if(this.absolute||!this.app)return{};const{bar:t,bottom:e,footer:i,insetFooter:s,left:a,right:n,top:r}=this.$vuetify.application;return{paddingBottom:(0,c.kb)(e+i+s),paddingLeft:(0,c.kb)(a),paddingRight:(0,c.kb)(n),paddingTop:(0,c.kb)(t+r)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&(0,u.Jk)("auto-height",this),0==this.timeout&&(0,u.Rn)('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[(0,c.z9)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[(0,c.z9)(this)])},genWrapper(){const t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:s.Z.options.computed.classes.call(this),style:s.Z.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:()=>window.clearTimeout(this.activeTimeout),pointerleave:this.setTimeout}});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout((()=>{this.isActive=!1}),t))}},render(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},7768:function(t,e,i){"use strict";t.exports=i.p+"img/logo.cc583804.png"}}]);
//# sourceMappingURL=900-legacy.49436a93.js.map