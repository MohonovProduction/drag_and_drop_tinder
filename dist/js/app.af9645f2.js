(function(){"use strict";var e={9535:function(e,t,n){var a=n(9242),o=n(3396);function i(e,t,n,a,i,r){const s=(0,o.up)("Header"),l=(0,o.up)("Main");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(s,{onModalShow:t[0]||(t[0]=e=>i.modal.show=!0)}),(0,o.Wm)(l,{"modal-show":i.modal.show,onModalClose:t[1]||(t[1]=e=>i.modal.show=!1)},null,8,["modal-show"])],64)}const r={class:"page-header"};function s(e,t,n,a,i,s){const l=(0,o.up)("m-button");return(0,o.wg)(),(0,o.iD)("header",r,[(0,o.Wm)(l,{class:"page-header__button",onClick:t[0]||(t[0]=t=>e.$emit("modal-show"))},{default:(0,o.w5)((()=>[(0,o.Uk)(" Watched ")])),_:1})])}var l={name:"Header"},c=n(89);const d=(0,c.Z)(l,[["render",s],["__scopeId","data-v-061c2345"]]);var u=d,m=n(7139);const _=e=>((0,o.dD)("data-v-6fa06148"),e=e(),(0,o.Cn)(),e),p={class:"modal__wrapper"},g=_((()=>(0,o._)("h2",{class:"heading"},"Liked",-1))),f={class:"heading card__heading"},v={class:"text card__text"},h=_((()=>(0,o._)("h2",{class:"heading"},"Canceled",-1))),w={class:"heading card__heading"},b={class:"text card__text"},D={class:"center"},k={class:"wrapper"},z={class:"heading card__heading"},I={class:"text card__text"},y={key:1,class:"heading main__heading_warn"};function M(e,t,n,i,r,s){const l=(0,o.up)("m-card"),c=(0,o.up)("m-modal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a.uT,{name:"fade"},{default:(0,o.w5)((()=>[n.modalShow?((0,o.wg)(),(0,o.j4)(c,{key:0,onCloseModal:t[0]||(t[0]=t=>e.$emit("modal-close"))},{default:(0,o.w5)((()=>[(0,o._)("div",p,[(0,o._)("div",null,[(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[g])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.liked,(e=>((0,o.wg)(),(0,o.j4)(l,null,{default:(0,o.w5)((()=>[(0,o._)("h1",f,(0,m.zw)(e.name),1),(0,o._)("p",v,(0,m.zw)(e.description),1)])),_:2},1024)))),256))]),(0,o._)("div",null,[(0,o.Wm)(l,null,{default:(0,o.w5)((()=>[h])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.canceled,(e=>((0,o.wg)(),(0,o.j4)(l,null,{default:(0,o.w5)((()=>[(0,o._)("h1",w,(0,m.zw)(e.name),1),(0,o._)("p",b,(0,m.zw)(e.description),1)])),_:2},1024)))),256))])])])),_:1})):(0,o.kq)("",!0)])),_:1}),(0,o._)("div",D,[(0,o._)("main",k,[r.itemNowId+1<r.items.length?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o._)("div",{class:(0,m.C_)(["zone zone__love",{zone__love_active:r.zones.liked.active}]),onDrop:t[1]||(t[1]=e=>{s.onDrop(e,1),r.zones.liked.active=!1}),onDragenter:t[2]||(t[2]=(0,a.iM)((e=>r.zones.liked.active=!0),["prevent"])),onDragover:t[3]||(t[3]=(0,a.iM)((()=>{}),["prevent"])),onDragleave:t[4]||(t[4]=e=>r.zones.liked.active=!1)},null,34),(0,o.Wm)(l,{draggable:"true",onDragstart:t[5]||(t[5]=e=>s.startDrag(e,r.itemNowId)),"img-src":r.items[r.itemNowId].image},{default:(0,o.w5)((()=>[(0,o._)("h1",z,(0,m.zw)(r.items[r.itemNowId].name),1),(0,o._)("p",I,(0,m.zw)(r.items[r.itemNowId].description),1)])),_:1},8,["img-src"]),(0,o._)("div",{class:(0,m.C_)(["zone zone__cancel",{zone__cancel_active:r.zones.canceled.active}]),onDrop:t[6]||(t[6]=e=>{s.onDrop(e,0),r.zones.canceled.active=!1}),onDragenter:t[7]||(t[7]=(0,a.iM)((e=>r.zones.canceled.active=!0),["prevent"])),onDragover:t[8]||(t[8]=(0,a.iM)((()=>{}),["prevent"])),onDragleave:t[9]||(t[9]=e=>r.zones.canceled.active=!1)},null,34)],64)):((0,o.wg)(),(0,o.iD)("h2",y,"Харош на девак пялить, иди поспи"))])])],64)}var j={name:"Main",props:{modalShow:Boolean},data(){return{modal:{show:!1},itemNowId:0,zones:{liked:{active:!1},canceled:{active:!1}},items:[{id:0,image:"https://webmodel.me/wp-content/uploads/2021/02/vebkamshhica-i-zarplata.jpg",name:"Настя",description:"Люблю геншен импакт, бравилик, смотрю аниме, состаю во многих фандомах.",list:null},{id:1,image:"https://cs14.pikabu.ru/post_img/big/2022/05/05/3/1651716779170925137.jpg",name:"Анджела",description:"Люблю геншен импакт, бравилик, смотрю аниме, состаю во многих фандомах.",list:null},{id:2,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuVF0RvX4Z8HG7L0gq8sfvIPojLDlD5yP-3Vk_PlaCtg&s",name:"Екатирина",description:"Люблю геншен импакт, бравилик, смотрю аниме, состаю во многих фандомах.",list:null},{id:3,image:"https://s16.stc.yc.kpcdn.net/share/i/12/12492885/wr-960.webp",name:"Маша",description:"Люблю геншен импакт, бравилик, смотрю аниме, состаю во многих фандомах.",list:null},{id:4,image:"https://cs12.pikabu.ru/post_img/2021/05/09/9/1620572733164886299.jpg",name:"Люта",description:"Люблю геншен импакт, бравилик, смотрю аниме, состаю во многих фандомах.",list:null}]}},methods:{startDrag(e,t){console.log(this.items.length,t),e.dataTransfer.dropEffect="move",e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("itemID",this.items[t].id)},onDrop(e,t){const n=e.dataTransfer.getData("itemID");console.log(n);let a=null;const o=this.items.filter(((e,t)=>(a=t,e.id==n)));console.log(o);const i=o[0];i.list=t?"liked":"canceled",this.itemNowId+1<this.items.length&&this.itemNowId++}},computed:{liked(){return this.items.filter((e=>"liked"===e.list))},canceled(){return this.items.filter((e=>"canceled"===e.list))}}};const C=(0,c.Z)(j,[["render",M],["__scopeId","data-v-6fa06148"]]);var W=C,O={components:{Header:u,Main:W},data(){return{modal:{show:!1}}}};const x=(0,c.Z)(O,[["render",i]]);var H=x;const N={class:"button"};function S(e,t,n,a,i,r){return(0,o.wg)(),(0,o.iD)("button",N,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}var T={name:"MButton"};const Z=(0,c.Z)(T,[["render",S],["__scopeId","data-v-0d6d3333"]]);var $=Z;const P=["src"],Y={class:"card__body"};function q(e,t,n,a,i,r){return(0,o.wg)(),(0,o.iD)("article",{class:(0,m.C_)(["card",{card_with_image:e.imgSrc}])},[e.imgSrc?((0,o.wg)(),(0,o.iD)("img",{key:0,src:e.imgSrc,alt:"",class:"img card__img"},null,8,P)):(0,o.kq)("",!0),(0,o._)("div",Y,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])],2)}var E={name:"MCard",props:{"img-src":String}};const L=(0,c.Z)(E,[["render",q],["__scopeId","data-v-7d0b19bc"]]);var A=L;const B={class:"modal"},F={class:"modal__body"};function G(e,t,n,a,i,r){const s=(0,o.up)("m-button");return(0,o.wg)(),(0,o.iD)("article",B,[(0,o._)("header",null,[(0,o.Wm)(s,{class:"modal__button",onClick:t[0]||(t[0]=t=>e.$emit("close-modal"))},{default:(0,o.w5)((()=>[(0,o.Uk)(" ✖ ")])),_:1})]),(0,o._)("article",F,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])])}var K={name:"MModal"};const R=(0,c.Z)(K,[["render",G],["__scopeId","data-v-0999c17b"]]);var U=R,V=[$,A,U];const X=(0,a.ri)(H);V.forEach((e=>X.component(e.name,e))),X.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var r=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],i=e[d][2];for(var s=!0,l=0;l<a.length;l++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,i<r&&(r=i));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,r=a[0],s=a[1],l=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var d=l(n)}for(t&&t(a);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},a=self["webpackChunkdrag_and_drop"]=self["webpackChunkdrag_and_drop"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(9535)}));a=n.O(a)})();
//# sourceMappingURL=app.af9645f2.js.map