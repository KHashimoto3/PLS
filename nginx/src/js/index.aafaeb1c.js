(function(){"use strict";var t={6353:function(t,n,r){var o=r(9963),e=r(6252),i=r(3577);const a=t=>((0,e.dD)("data-v-29298cca"),t=t(),(0,e.Cn)(),t),c=a((()=>(0,e._)("h1",null,"コーディングスタイル学習システム",-1))),u=a((()=>(0,e._)("h2",null,"単元を選ぶ",-1))),f=["onClick"];function s(t,n,r,o,a,s){return(0,e.wg)(),(0,e.iD)("div",null,[c,u,((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(a.formListDataObj,(t=>((0,e.wg)(),(0,e.iD)("div",{key:t},[(0,e._)("p",null,[(0,e._)("a",{onClick:n=>s.selectForm(t.id)},(0,i.zw)(t.name),9,f)])])))),128))])}r(1703);var l={name:"App",data(){return{formListDataObj:null}},created:async function(){const t="./data/formlist.json";let n;try{const r=await fetch(t,{method:"GET"});if(r.ok){const t=await r.json();this.formListDataObj=t.formList,null==this.formListDataObj&&alert("フォームリストデータがありません。")}else switch(r.status){default:throw n="何らかの理由でエラーが発生しました。（E: "+r.status+")",new Error(n)}}catch(n){alert(n)}},methods:{selectForm:function(t){const n="codingform.html?formName="+this.formListDataObj[t-1].formLink;window.location.href=n}}},h=r(3744);const d=(0,h.Z)(l,[["render",s],["__scopeId","data-v-29298cca"]]);var m=d;(0,o.ri)(m).mount("#app")}},n={};function r(o){var e=n[o];if(void 0!==e)return e.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(n,o,e,i){if(!o){var a=1/0;for(s=0;s<t.length;s++){o=t[s][0],e=t[s][1],i=t[s][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](o[u])}))?o.splice(u--,1):(c=!1,i<a&&(a=i));if(c){t.splice(s--,1);var f=e();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[o,e,i]}}(),function(){r.d=function(t,n){for(var o in n)r.o(n,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){r.j=826}(),function(){var t={826:0};r.O.j=function(n){return 0===t[n]};var n=function(n,o){var e,i,a=o[0],c=o[1],u=o[2],f=0;if(a.some((function(n){return 0!==t[n]}))){for(e in c)r.o(c,e)&&(r.m[e]=c[e]);if(u)var s=u(r)}for(n&&n(o);f<a.length;f++)i=a[f],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(s)},o=self["webpackChunksystem"]=self["webpackChunksystem"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(6353)}));o=r.O(o)})();
//# sourceMappingURL=index.aafaeb1c.js.map