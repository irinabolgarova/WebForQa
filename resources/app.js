!function(e){function t(t){for(var r,o,s=t[0],u=t[1],c=t[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={1:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;a.push([0,0]),n()}({"+fAT":function(e,t,n){var r={"./components/Landing.vue":"1ESB","./components/Qr.vue":"E6ch","./components/Vk.vue":"QHPI","./components/checkout/StripeCheckout.vue":"3HDy","./components/contents/LoadingContent.vue":"RZyw","./components/forms/AppForm.vue":"6LNC","./components/forms/errors/FormError.vue":"TVZe","./components/forms/errors/InputError.vue":"TAje","./components/forms/inputs/PhoneInput.vue":"EPYE","./components/forms/inputs/TextInput.vue":"v+D0","./components/forms/inputs/foundation/ContentInput.vue":"t3Ah","./components/forms/inputs/foundation/PasswordInput.vue":"/9sK","./components/landing/WidgetMedia.vue":"9wDT","./components/landing/WidgetText.vue":"WTgu","./components/landing/channels/WidgetChannel.vue":"UWgb","./components/landing/channels/WidgetChannelsList.vue":"pnqz","./components/landing/inputs/WidgetInput.vue":"oqwH","./components/landing/inputs/WidgetInputsList.vue":"oz5y","./components/landing/navigation/WidgetFooter.vue":"j2te","./components/vkontakte/VkontakteSubscription.vue":"s4u2"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="+fAT"},"/9sK":function(e,t,n){"use strict";n.r(t);var r=n("EVdn"),i=n.n(r),a=n("T9Qt"),o={components:{InputError:n("TAje").default},props:{form:{type:a.a,required:!0},name:{type:String,required:!0},title:{type:String,required:!0}},data:function(){return{visible:!1}},methods:{toggleVisibility:function(e){this.visible=!this.visible,i()(e.target).closest(".icon-eye").toggleClass("icon-eye--active")}}},s=n("KHd+"),u=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{staticClass:"label-text label-text--password"},["checkbox"===[e.visible?"text":"password"]?n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.data[e.name],expression:"form.data[name]"}],staticClass:"input-text",attrs:{name:e.name,placeholder:" ",type:"checkbox"},domProps:{checked:Array.isArray(e.form.data[e.name])?e._i(e.form.data[e.name],null)>-1:e.form.data[e.name]},on:{change:function(t){var n=e.form.data[e.name],r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=e._i(n,null);r.checked?a<0&&e.$set(e.form.data,e.name,n.concat([null])):a>-1&&e.$set(e.form.data,e.name,n.slice(0,a).concat(n.slice(a+1)))}else e.$set(e.form.data,e.name,i)}}}):"radio"===[e.visible?"text":"password"]?n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.data[e.name],expression:"form.data[name]"}],staticClass:"input-text",attrs:{name:e.name,placeholder:" ",type:"radio"},domProps:{checked:e._q(e.form.data[e.name],null)},on:{change:function(t){return e.$set(e.form.data,e.name,null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.data[e.name],expression:"form.data[name]"}],staticClass:"input-text",attrs:{name:e.name,placeholder:" ",type:[e.visible?"text":"password"]},domProps:{value:e.form.data[e.name]},on:{input:function(t){t.target.composing||e.$set(e.form.data,e.name,t.target.value)}}}),e._v(" "),n("span",{staticClass:"span-input-text"},[e._v(e._s(e.$t(e.title)))]),e._v(" "),n("span",{staticClass:"login__btn-eye",on:{click:e.toggleVisibility}},[n("svg",{staticClass:"icon icon-eye"},[n("use",{attrs:{"xlink:href":"/img/sprite.svg#icon-eye"}})])]),e._v(" "),n("input-error",{attrs:{name:e.name,form:e.form}})],1)])}),[],!1,null,null,null);t.default=u.exports},0:function(e,t,n){n("bUC5"),n("g57v"),n("S8Fg"),e.exports=n("mBE4")},"1ESB":function(e,t,n){"use strict";n.r(t);var r=n("WTgu"),i=n("9wDT"),a=n("j2te"),o=n("oz5y"),s=n("pnqz"),u=n("xmUa"),c=n("WdxZ"),l=n("Y0p3");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={components:{WidgetMedia:i.default,WidgetInputsList:o.default,WidgetText:r.default,WidgetChannelsList:s.default,WidgetFooter:a.default},props:{widget:{type:Object,required:!0},locale:{type:Object,required:!0}},mixins:[l.a],methods:{decode:function(e){return decodeURIComponent(escape(atob(e)))},formatQuery:function(e){return e.replace(" ","+")},formatContext:function(e){return Object.keys(u.c.default).forEach((function(t){!1===Object.keys(e).includes(t)&&(e[t]={})})),e},getAllParameters:function(e){var t={};return e.forEach((function(e,n){return t[n]=e})),t}},computed:{query:function(){var e=new URLSearchParams(window.location.search);if(e.has(u.c.query)){var t=this.formatQuery(e.get(u.c.query)),n=JSON.parse(this.decode(t));return this.formatContext(n)}return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u.c.default,{},{variables:this.getAllParameters(e)})},resource:function(){return this.widget.content.resource},viewStyles:function(){return"none"!==this.resource.background.type?{backgroundImage:"url(".concat(this.resource.background.url)}:{}}},created:function(){c.a.locale=this.locale.language}},m=n("KHd+"),h=Object(m.a)(p,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"widget-view-container",style:e.viewStyles},[n("div",{ref:"widget",staticClass:"widget-view centered"},[n("widget-media",{attrs:{media:e.resource.form.media,title:e.resource.form.title}}),e._v(" "),n("div",{staticClass:"widget-content-container"},[n("widget-inputs-list",{attrs:{widget:e.widget,query:e.query}}),e._v(" "),n("widget-text",{attrs:{text:e.resource.form.description,"additional-class":"widget-description"}}),e._v(" "),n("widget-text",{attrs:{text:e.resource.form.title,"additional-class":"widget-title"}}),e._v(" "),n("widget-channels-list",{attrs:{channels:e.widget.channels}}),e._v(" "),n("widget-footer")],1)],1)])}),[],!1,null,null,null);t.default=h.exports},"3HDy":function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),i=n.n(r),a=n("v4r+");function o(e,t,n,r,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,i)}var s,u,c={props:{scope:{type:Object,required:!0},locale:{type:Object,required:!0}},methods:{loadCheckout:(s=i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.a)(this.scope.token);case 2:return t=e.sent,e.next=5,t.redirectToCheckout({sessionId:this.scope.sid});case 5:case"end":return e.stop()}}),e,this)})),u=function(){var e=this,t=arguments;return new Promise((function(n,r){var i=s.apply(e,t);function a(e){o(i,n,r,a,u,"next",e)}function u(e){o(i,n,r,a,u,"throw",e)}a(void 0)}))},function(){return u.apply(this,arguments)})},created:function(){this.loadCheckout()}},l=n("KHd+"),d=Object(l.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=d.exports},"6LNC":function(e,t,n){"use strict";n.r(t);var r=n("TVZe"),i=n("T9Qt"),a={components:{FormError:r.default},props:{form:{type:i.a,required:!0},callback:{type:Function,required:!0}},methods:{clearInput:function(e){this.$delete(this.form.errors.bag,e.target.name)}}},o=n("KHd+"),s=Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-form"},[n("form-error",{attrs:{form:e.form}}),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.callback(t)},keypress:e.clearInput}},[e._t("default")],2)],1)}),[],!1,null,null,null);t.default=s.exports},"9Wh1":function(e,t,n){"use strict";n.r(t);var r=n("XuX8"),i=n.n(r),a=n("9i5l"),o=n("1W/C"),s=n("Kink");function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.vue=t,this.store={}}var t,n,r;return t=e,(n=[{key:"fire",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.vue.$emit(e,t)}},{key:"listen",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null!==n){if(this.store.hasOwnProperty(n)||(this.store[n]=[]),this.store[n].includes(e))return;this.store[n].push(e)}this.vue.$on(e,t)}}])&&u(t.prototype,n),r&&u(t,r),e}())(new i.a);i.a.use(o.a),i.a.use(a.a),window.Vue=i.a,i.a.prototype.$http=s.a,i.a.prototype.$dispatcher=c},"9wDT":function(e,t,n){"use strict";n.r(t);var r=n("xmUa"),i={props:{media:{type:Object,required:!0},title:{type:Object,required:!0},mediaTypes:{type:Object,default:function(){return r.i.types}}},methods:{isType:function(e){return e===this.media.type}}},a=n("KHd+"),o=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isType(e.mediaTypes.none)?e._e():n("div",{staticClass:"form-media"},[[e.isType(e.mediaTypes.picture)?n("div",{staticClass:"covered-image",style:{backgroundImage:"url("+e.media.url+")"}},[n("img",{attrs:{src:e.media.url,alt:e.title.content}})]):e.isType(e.mediaTypes.video)?n("video",{attrs:{controls:""}},[n("source",{attrs:{src:e.media.url}})]):e._e()]],2)}),[],!1,null,null,null);t.default=o.exports},E6ch:function(e,t,n){"use strict";n.r(t);var r=n("P850"),i=n("WdxZ"),a=n("Y0p3"),o={components:{Qrcode:r.a},mixins:[a.a],props:{widget:{type:Object,required:!0},locale:{type:Object,required:!0}},computed:{resource:function(){return this.widget.content.resource},value:function(){return this.resource.link.destination}},created:function(){i.a.locale=this.locale.language}},s=n("KHd+"),u=Object(s.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"widget-view-container"},[t("div",{ref:"widget",staticClass:"widget-view widget-qr-view centered"},[t("qrcode",{attrs:{value:this.value,options:{width:400}}})],1)])}),[],!1,null,null,null);t.default=u.exports},EPYE:function(e,t,n){"use strict";n.r(t);var r=n("T9Qt"),i=n("TAje"),a=n("xmUa"),o={components:{InputError:i.default},props:{form:{type:r.a,required:!0},name:{type:String,required:!0},title:{type:String,required:!0}},watch:{number:{handler:function(e){this.form.data[this.name]="+"+e.code+e.input},deep:!0},value:function(e){var t=this;this.number.code===a.d.ua&&"0"===e.charAt(0)&&this.$nextTick((function(){return t.number.input=e.substr(1)})),a.n.space.test(e)&&this.$nextTick((function(){return t.number.input=e.removeSpaces()}))}},computed:{value:function(){return this.number.input}},methods:{onInput:function(e,t){this.number.input=t.number.input,this.number.code=t.country.dialCode},getDefaultValue:function(){return this.form.data[this.name]}},data:function(){return{number:{code:"",input:this.getDefaultValue()},config:a.l}}},s=n("KHd+"),u=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"label-text"},[n("vue-tel-input",{attrs:{mode:e.config.mode,name:e.name,autocomplete:e.config.autocomplete,placeholder:e.title,enabledCountryCode:e.config.enabledCountryCode,"valid-characters-only":e.config.validCharactersOnly,"preferred-countries":e.config.preferredCountries},on:{input:e.onInput},model:{value:e.number.input,callback:function(t){e.$set(e.number,"input",t)},expression:"number.input"}}),e._v(" "),n("input-error",{attrs:{name:e.name,form:e.form}})],1)}),[],!1,null,null,null);t.default=u.exports},Kbz1:function(e){e.exports=JSON.parse('{"You agree with":"Ви згодні з","Terms of use":"Умовами експлуатації","And":"і","Privacy policy":"Політикою конфіденційності","Powered by":"Створено","Invalid referer given":"Вказано недійсний курсор","Enter email":"Введіть email","Invalid email given":"Введено недійсний email","Invalid phone number given":"Введено недійсний номер телефону","Enter phone number":"Введіть номер телефону","Continue":"Продовжити","To continue, click on the button below":"Для продовження натисніть на кнопку нижче"}')},Kink:function(e,t,n){"use strict";var r=n("vDqi"),i=n.n(r),a=n("xmUa");i.a.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";var o=document.head.querySelector('meta[name="csrf-token"]');o?i.a.defaults.headers.common["X-CSRF-TOKEN"]=o.content:console.error("CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token"),i.a.defaults.baseURL=a.g.baseUrl,t.a=i.a},QHPI:function(e,t,n){"use strict";n.r(t);var r=n("WTgu"),i=n("9wDT"),a=n("RZyw"),o={methods:{getHashValues:function(e){for(var t={},n=(e.hash||"").replace(/^#/,"").split("&"),r=0;r<n.length;r++){var i=n[r].split("=");t[i[0]]=i[1]}return t}}},s=n("j2te"),u=n("s4u2"),c=n("pnqz"),l=n("WdxZ"),d=n("xmUa"),f={components:{VkontakteSubscription:u.default,LoadingContent:a.default,WidgetMedia:i.default,WidgetText:r.default,WidgetChannelsList:c.default,WidgetFooter:s.default},mixins:[o],props:{locale:{type:Object,required:!0}},methods:{markAsLoaded:function(){this.info.loaded=!0},resolve:function(e){var t=this.getHashValues(e);this.referral=t[d.o.referral],this.loadWidget(t[d.o.customer],t[d.o.sign])},loadWidget:function(e,t){var n=this;if(t&&e){var r="/customers/{customer}/widgets/{sign}".replaceMany([{key:"{sign}",value:t},{key:"{customer}",value:e}]);return this.$http.get(r).then((function(e){var t=e.data;n.widget=t})).catch((function(){})).then((function(){return n.markAsLoaded()}))}this.markAsLoaded()}},computed:{resource:function(){return this.widget?this.widget.content.resource:null},subtitle:function(){return this.resource?this.resource.form.description:null},direct:function(){return null===this.widget},title:function(){return{color:d.s.title.color,content:this.$t(d.s.title.content)}},query:function(){return new URLSearchParams(window.location.search)}},data:function(){return{info:{loaded:!1},widget:null,referral:null}},created:function(){this.resolve(window.location),l.a.locale=this.query.get(d.s.params.languageKey)||"en"}},p=n("KHd+"),m=Object(p.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("loading-content",{attrs:{state:e.info.loaded}},[n("div",{staticClass:"widget-view-container"},[n("div",{staticClass:"widget-view centered"},[e.resource?n("widget-media",{attrs:{media:e.resource.form.media,title:e.resource.form.title}}):e._e(),e._v(" "),n("div",{staticClass:"widget-content-container"},[e.subtitle?n("widget-text",{attrs:{text:e.subtitle,"additional-class":"widget-description"}}):e._e(),e._v(" "),e.direct?n("widget-text",{attrs:{text:e.title,"additional-class":"widget-title"}}):e._e(),e._v(" "),n("vkontakte-subscription",{attrs:{query:e.query,referral:e.referral}}),e._v(" "),n("widget-footer")],1)],1)])])}),[],!1,null,null,null);t.default=m.exports},RZyw:function(e,t,n){"use strict";n.r(t);var r={props:{state:{type:Boolean,required:!0}}},i=n("KHd+"),a=Object(i.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-loading"},[this.state?this._t("default"):t("div",{staticClass:"preloader content-loader"},[t("div",{staticClass:"preloader__wrp"},[t("div",{staticClass:"logo"},[t("img",{attrs:{id:"logo",src:"https://console.smartsender.com/img/preloader_logo.png",alt:this.$t("Loading ...")}})])])])],2)}),[],!1,null,null,null);t.default=a.exports},S8Fg:function(e,t){},T9Qt:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.bag={}}var t,n,i;return t=e,i=[{key:"create",value:function(t){var n=new e;return n.record(t),n}}],(n=[{key:"first",value:function(){var e=Object.keys(this.bag);return this.get(e[0])}},{key:"has",value:function(e){return this.bag.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.bag).length>0}},{key:"get",value:function(e){if(this.bag[e])return this.bag[e][0]}},{key:"record",value:function(e){this.bag=e}},{key:"clear",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e?delete this.bag[e]:this.bag={}}}])&&r(t.prototype,n),i&&r(t,i),e}(),a=n("Kink");function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return s}));var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors=new i,this.setOriginalData(t),this.data=t}var t,n,r;return t=e,(n=[{key:"setOriginalData",value:function(e){this.originalData=JSON.parse(JSON.stringify(e))}},{key:"rollbackChanges",value:function(){this.data=this.originalData,this.setOriginalData(this.data)}},{key:"reset",value:function(){for(var e in this.data)this.data[e]=Array.isArray(this.data[e])?[]:"";this.errors.clear()}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var n=this,r=this;return new Promise((function(i){a.a[e](t,r.data).then((function(e){i(e.data)})).catch((function(e){return n.recordFailure(e)}))}))}},{key:"recordFailure",value:function(e){this.onFail(e.response.data.errors||{})}},{key:"onFail",value:function(e){this.errors.record(e||{})}}])&&o(t.prototype,n),r&&o(t,r),e}()},TAje:function(e,t,n){"use strict";n.r(t);var r={props:{form:{type:n("T9Qt").a,required:!0},name:{type:String,required:!0}}},i=n("KHd+"),a=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.form.errors.has(e.name)?n("p",{staticClass:"input-text-error"},[e._v(e._s(e.$t(e.form.errors.get(e.name))))]):e._e()}),[],!1,null,null,null);t.default=a.exports},TVZe:function(e,t,n){"use strict";n.r(t);var r={props:{form:{type:n("T9Qt").a,required:!0},name:{type:String,default:"form"}}},i=n("KHd+"),a=Object(i.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return this.form.errors.has(this.name)?t("p",{staticClass:"login__text-error",domProps:{textContent:this._s(this.$t(this.form.errors.get(this.name)))}}):this._e()}),[],!1,null,null,null);t.default=a.exports},UWgb:function(e,t,n){"use strict";n.r(t);var r={props:{channel:{type:Object,required:!0}},computed:{type:function(){return this.channel.type.capitalizeFirstLetter()},imageUrl:function(){return"/img/icons/{type}.svg".replaceMany([{key:"{type}",value:this.channel.type}])},identifier:function(){return[this.channel.type,"channel"].join("-")},textIdentifier:function(){return[this.channel.type,"channel","text"].join("-")},imageIdentifier:function(){return[this.channel.type,"channel","image"].join("-")},containerIdentifier:function(){return[this.channel.type,"channel","container"].join("-")}},methods:{resolve:function(e){e.isTrusted&&this.$dispatcher.fire("widget:resolve",this.channel)}}},i=n("KHd+"),a=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.identifier,attrs:{id:e.identifier},on:{click:function(t){return e.resolve(t)}}},[n("span",{staticClass:"channel-icon",attrs:{id:e.containerIdentifier}},[n("img",{attrs:{id:e.imageIdentifier,src:e.imageUrl,alt:e.type}})]),e._v(" "),n("div",{attrs:{id:e.textIdentifier},domProps:{textContent:e._s(e.type)}})])}),[],!1,null,null,null);t.default=a.exports},WTgu:function(e,t,n){"use strict";n.r(t);var r={props:{text:{type:Object,required:!0},additionalClass:{type:String,required:!0}}},i=n("KHd+"),a=Object(i.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"widget-text-container"},[t("p",{class:this.additionalClass,style:{color:this.text.color.hex},domProps:{innerHTML:this._s(this.text.content)}})])}),[],!1,null,null,null);t.default=a.exports},WdxZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("XuX8"),i=n.n(r),a=n("qSUR");i.a.use(a.a);var o=new a.a({locale:"en",fallbackLocale:"en",silentTranslationWarn:!0});n("fXMc").keys().map((function(e){var t=e.split("/").pop().split(".")[0];o.setLocaleMessage(t,n("djdT")("./".concat(t,".json")))}))},Y0p3:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("xmUa"),i={props:{widget:{type:Object,required:!0}},methods:{onCreate:function(){var e=this;this.onUpdate(),r.f.delays.forEach((function(t){return setTimeout((function(){return e.onUpdate()}),t)}))},onUpdate:function(){var e=this.$refs.widget.offsetHeight,t={sign:this.widget.sign,updates:{height:e+r.f.offsetHeight}};window.parent.postMessage({widget:t},"*")}},mounted:function(){this.onCreate()}}},Yfz1:function(e,t){Array.prototype.isEmpty=function(){return 0===this.length},Array.prototype.notEmpty=function(){return!this.isEmpty()},String.prototype.removeSpaces=function(){return this.replace(/\s/g,"")},String.prototype.capitalizeFirstLetter=function(){return this.charAt(0).toUpperCase()+this.slice(1)},String.prototype.replaceMany=function(e){var t=this;return(e||[]).forEach((function(e){t=t.replace(e.key,e.value)})),t}},bUC5:function(e,t,n){"use strict";n.r(t);var r=n("XuX8"),i=n.n(r),a=n("WdxZ");n("9Wh1"),n("Yfz1");var o=n("+fAT");o.keys().map((function(e){return i.a.component(e.split("/").pop().split(".")[0],o(e).default)}));new i.a({el:"#app",i18n:a.a})},cAHJ:function(e){e.exports=JSON.parse('{"You agree with":"Вы согласны с","Terms of use":"Условиями эксплуатации","and":"и","Privacy policy":"Политикой конфиденциальности","Powered by":"Создано","Invalid referer given":"Указан недействительный указатель","Enter email":"Введите email","Invalid email given":"Указан неверный email","Invalid phone number given":"Указан неверный номер телефона","Enter phone number":"Введите номер телефона","Continue":"Продолжить","To continue, click on the button below":"Чтобы продолжить, нажмите на кнопку ниже"}')},djdT:function(e,t,n){var r={"./ru.json":"cAHJ","./uk.json":"Kbz1"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="djdT"},fXMc:function(e,t,n){var r={"./ru.json":"cAHJ","./uk.json":"Kbz1"};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=a,e.exports=i,i.id="fXMc"},g57v:function(e,t){},j2te:function(e,t,n){"use strict";n.r(t);var r=n("xmUa"),i={data:function(){return{companyName:r.b,baseUrl:r.a}},computed:{termRoute:function(){return this.usingOwnership?r.k.terms:r.r},privacyRoute:function(){return this.usingOwnership?r.k.privacy:r.m},usingOwnership:function(){return-1===window.location.hostname.indexOf(r.e)}}},a=n("KHd+"),o=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"widget-footer"},[n("div",{staticClass:"widget-footer-left"},[n("span",[e._v("\n            "+e._s(e.$t("You agree with"))+" "),n("a",{attrs:{href:e.termRoute,title:e.$t("Terms of use"),target:"_blank"}},[e._v(e._s(e.$t("Terms of use")))]),e._v("\n            "+e._s(e.$t("and"))+" "),n("a",{attrs:{href:e.privacyRoute,title:e.$t("Privacy policy"),target:"_blank"}},[e._v(e._s(e.$t("Privacy policy")))])])]),e._v(" "),n("div",{staticClass:"widget-footer-right"},[n("span",[e._v("\n            "+e._s(e.$t("Powered by"))+" "),n("a",{attrs:{href:e.baseUrl,target:"_blank"},domProps:{textContent:e._s(e.companyName)}})])])])}),[],!1,null,null,null);t.default=o.exports},mBE4:function(e,t){},oqwH:function(e,t,n){"use strict";n.r(t);var r=n("T9Qt"),i=n("v+D0"),a=n("EPYE"),o=n("xmUa"),s={components:{PhoneInput:a.default,TextInput:i.default},props:{form:{type:r.a,required:!0},field:{type:Object,required:!0}},computed:{isPhone:function(){return o.h.phone===this.field.type}}},u=n("KHd+"),c=Object(u.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-input"},[n("div",{staticClass:"form-input-title"},[n("span",[e._v(e._s(e.field.resource.name))])]),e._v(" "),n("div",{staticClass:"form-input-field"},[e.isPhone?[n("phone-input",{attrs:{form:e.form,name:e.field.type,title:e.field.resource.name}})]:[n("text-input",{attrs:{form:e.form,name:e.field.type,title:e.field.resource.name}})]],2)])}),[],!1,null,null,null);t.default=c.exports},oz5y:function(e,t,n){"use strict";n.r(t);var r=n("oqwH"),i=n("T9Qt"),a={computed:{isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}},o=n("xmUa"),s={components:{WidgetInput:r.default},props:{widget:{type:Object,required:!0},query:{type:Object,required:!0}},mixins:[a],computed:{fields:function(){return this.widget.content.resource.form.fields},fieldsList:function(){var e=this;return this.fields.filter((function(t){return!1===e.query.hasOwnProperty(t.type)}))}},methods:{getContextVariable:function(e){return o.j.deep[e.type]||null},hasContextVariable:function(e){return Object.keys(o.j.deep).includes(e.type)},getContext:function(e){var t=null!==e?"w:%w|%s":"w:%s",n=[{key:"%w",value:this.widget.sign}];return null!==e&&n.push({key:"%s",value:e.id}),btoa(t.replaceMany(n))},getScope:function(){return window.scope||[]},getEmptyForm:function(){var e=this,t={referer:this.widget.id,variables:this.query.variables,scope:this.query.scope};return this.fields.forEach((function(n){return t[n.type]=e.getDefaultFormValue(n)})),t.range=this.fields.filter((function(e){return e.attributes.required})).map((function(e){return e.type})),new i.a(t)},getDefaultFormValue:function(e){return this.query.form[e.type]||null},redirect:function(e,t){var n=this.getContextVariable(e),r=this.getContext(t);if(null===n)return window.top.location=e[o.j.app.includes(e.type)?"app":"link"];var i=n+"="+r;if(o.j.app.includes(e.type))return window.top.location=e.app+"&"+i;if(o.j.types.vkontakte===e.type)return window.top.location=(this.isMobile?e.app:e.link)+"#"+[i,o.o.sign+"="+this.widget.sign,o.o.customer+"="+this.widget.domain].join("&");if(o.j.types.whatsapp===e.type){var a=e.link+o.p.space+r;if(e.optIn){var s=a.split("?").shift();a=s+"?"+n+"="+e.optIn.title.replace(o.q.context,r)}return window.top.location=a}return window.top.location=e.link+"?"+i},save:function(e){var t=this;return this.hasContextVariable(e)?(this.getScope().forEach((function(e){t.form.data.variables[e.name]=e.value})),this.form.post("/store")):new Promise((function(e){return e(null)}))}},data:function(){return{form:null}},created:function(){var e=this;this.form=this.getEmptyForm(),this.$dispatcher.listen("widget:resolve",(function(t){e.save(t).then((function(n){return e.redirect(t,n)}))}))}},u=n("KHd+"),c=Object(u.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.fieldsList.notEmpty()?n("div",{staticClass:"form-inputs"},e._l(e.fieldsList,(function(t,r){return n("widget-input",{key:r,attrs:{form:e.form,field:t}})})),1):e._e()}),[],!1,null,null,null);t.default=c.exports},pnqz:function(e,t,n){"use strict";n.r(t);var r={components:{WidgetChannel:n("UWgb").default},props:{channels:{type:Array,required:!0}}},i=n("KHd+"),a=Object(i.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return this.channels.notEmpty()?t("div",{staticClass:"widget-channels"},this._l(this.channels,(function(e,n){return t("widget-channel",{key:n,attrs:{channel:e}})})),1):this._e()}),[],!1,null,null,null);t.default=a.exports},s4u2:function(e,t,n){"use strict";n.r(t);var r=n("1QEB"),i=n.n(r),a=n("xmUa");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={props:{referral:{type:[String,null],default:null},query:{type:URLSearchParams,required:!0}},methods:{subscribe:function(){var e=this,t={group_id:parseInt(this.groupIdentifier)};i.a.send("VKWebAppAllowMessagesFromGroup",t).then((function(t){t.result&&e.resolve(!0)})).catch((function(e){return console.log(e)}))},resolve:function(e){var t=this;this.$http.post("/vk/check",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({force:e},this.values)).then((function(n){var r=n.data;if(e||r.state)return t.isMobile&&!t.isWeb?t.$refs.link.click():window.top.location=t.redirectTo})).catch((function(e){return console.log(e)}))}},computed:{values:function(){return{referral:this.referral,userId:this.userIdentifier,groupId:this.groupIdentifier}},isWeb:function(){return-1!==this.platformName.indexOf("web")},isMobile:function(){return-1!==this.platformName.indexOf("mobile")},redirectTo:function(){return(this.isMobile&&!this.isWeb?a.s.appUrl:a.s.baseUrl)+"/im?sel=-"+this.groupIdentifier},platformName:function(){return this.query.get(a.s.params.platformName)},userIdentifier:function(){return this.query.get(a.s.params.userId)},groupIdentifier:function(){return this.query.get(a.s.params.groupId)}},created:function(){this.resolve(!1),i.a.send("VKWebAppInit").then((function(){return i.a.subscribe((function(e){return console.log(e)}))}))}},c=n("KHd+"),l=Object(c.a)(u,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"widget-channels widget-single-channel"},[t("button",{on:{click:this.subscribe}},[this._v(this._s(this.$t("Continue")))]),this._v(" "),t("a",{ref:"link",staticClass:"hidden",attrs:{href:this.redirectTo}})])}),[],!1,null,null,null);t.default=l.exports},t3Ah:function(e,t,n){"use strict";n.r(t);var r=n("T9Qt"),i={components:{InputError:n("TAje").default},props:{form:{type:r.a,required:!0},name:{type:String,required:!0},title:{type:String,required:!0}}},a=n("KHd+"),o=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"label-text"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.data[e.name],expression:"form.data[name]"}],staticClass:"input-text",attrs:{type:"text",name:e.name,placeholder:" "},domProps:{value:e.form.data[e.name]},on:{input:function(t){t.target.composing||e.$set(e.form.data,e.name,t.target.value)}}}),e._v(" "),n("span",{staticClass:"span-input-text"},[e._v(e._s(e.$t(e.title)))]),e._v(" "),n("input-error",{attrs:{name:e.name,form:e.form}})],1)}),[],!1,null,null,null);t.default=o.exports},"v+D0":function(e,t,n){"use strict";n.r(t);var r=n("T9Qt"),i={components:{InputError:n("TAje").default},props:{form:{type:r.a,required:!0},name:{type:String,required:!0},title:{type:String,required:!0}}},a=n("KHd+"),o=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"label-text"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.form.data[e.name],expression:"form.data[name]"}],staticClass:"input-text",attrs:{type:"text",name:e.name,placeholder:e.title},domProps:{value:e.form.data[e.name]},on:{input:function(t){t.target.composing||e.$set(e.form.data,e.name,t.target.value)}}}),e._v(" "),n("input-error",{attrs:{name:e.name,form:e.form}})],1)}),[],!1,null,null,null);t.default=o.exports},xmUa:function(e,t,n){"use strict";n.d(t,"m",(function(){return r})),n.d(t,"r",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"p",(function(){return u})),n.d(t,"q",(function(){return c})),n.d(t,"c",(function(){return l})),n.d(t,"j",(function(){return d})),n.d(t,"f",(function(){return f})),n.d(t,"g",(function(){return p})),n.d(t,"i",(function(){return m})),n.d(t,"h",(function(){return h})),n.d(t,"l",(function(){return v})),n.d(t,"n",(function(){return g})),n.d(t,"d",(function(){return y})),n.d(t,"s",(function(){return b})),n.d(t,"o",(function(){return w})),n.d(t,"k",(function(){return k}));var r="https://smartsender.com/privacy-policy",i="https://smartsender.com/terms",a="https://smartsender.com",o="Smart Sender",s="customer.smartsender.eu",u={space:"%20"},c={context:"@context"},l={default:{variables:{},scope:{},form:{}},query:"context"},d={types:{skype:"skype",viber:"viber",whatsapp:"whatsapp",telegram:"telegram",facebook:"facebook",vkontakte:"vkontakte",instagram:"instagram"},titles:{skype:"Skype Messenger",viber:"Viber Messenger",instagram:"Instagram Direct",whatsapp:"WhatsApp Messenger",facebook:"Facebook Messenger",telegram:"Telegram Messenger",vkontakte:"Vkontakte Messenger"},classes:{facebook:"messenger__btn_fb",viber:"messenger__btn_viber",skype:"messenger__btn_skype",whatsapp:"messenger__btn_whatsapp",telegram:"messenger__btn_telegram",instagram:"messenger__btn_instagram",vkontakte:"messenger__btn_vkontakte"},deep:{vkontakte:"r",facebook:"ref",instagram:"ref",viber:"context",telegram:"start",whatsapp:"text"},app:["viber","telegram"]},f={offsetHeight:80,delays:[0,500,1e3,1500,2500,3500]},p={statuses:{tooManyRequests:429,entityTooLarge:413,sessionExpired:419,serverError:500,notAllowed:401,notFound:404},baseUrl:"/api/i"},m={types:{none:"none",video:"video",picture:"picture"}},h={email:"email",phone:"phone"},v={mode:"national",autocomplete:"off",enabledCountryCode:!0,validCharactersOnly:!0,preferredCountries:["us","ua","ru"]},g={space:/\s/},y={ua:"380"},b={params:{userId:"vk_user_id",groupId:"vk_group_id",languageKey:"vk_language",platformName:"vk_platform"},title:{color:{hex:"#000000"},content:"To continue, click on the button below"},appUrl:"vk://vk.com",baseUrl:"https://vk.com"},w={sign:"s",referral:"r",customer:"c"},k={terms:"/terms-of-use",privacy:"/privacy-policy"}}});