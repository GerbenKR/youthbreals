var h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function g(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function v(e){if(e.__esModule)return e;var i=e.default;if(typeof i=="function"){var f=function a(){return this instanceof a?Reflect.construct(i,arguments,this.constructor):i.apply(this,arguments)};f.prototype=i.prototype}else f={};return Object.defineProperty(f,"__esModule",{value:!0}),Object.keys(e).forEach(function(a){var n=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(f,a,n.get?n:{enumerable:!0,get:function(){return e[a]}})}),f}function y(e,i,f,a,n,s,u,p){var t=typeof e=="function"?e.options:e;i&&(t.render=i,t.staticRenderFns=f,t._compiled=!0),a&&(t.functional=!0),s&&(t._scopeId="data-v-"+s);var r;if(u?(r=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__<"u"&&(o=__VUE_SSR_CONTEXT__),n&&n.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(u)},t._ssrRegister=r):n&&(r=p?function(){n.call(this,(t.functional?this.parent:this).$root.$options.shadowRoot)}:n),r)if(t.functional){t._injectStyles=r;var c=t.render;t.render=function(_,d){return r.call(d),c(_,d)}}else{var l=t.beforeCreate;t.beforeCreate=l?[].concat(l,r):[r]}return{exports:e,options:t}}export{v as a,h as c,g,y as n};
//# sourceMappingURL=_plugin-vue2_normalizer-DEoWBRzu.js.map
