(this["webpackJsonppic-some"]=this["webpackJsonppic-some"]||[]).push([[0],{26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),i=c(18),a=c.n(i),o=(c(26),c(9)),s=c(2),l=c(16),u=c(21),j=c(7),d=c(1),m=n.a.createContext();function b(e){var t=e.children,c=Object(r.useState)([]),n=Object(j.a)(c,2),i=n[0],a=n[1],o=Object(r.useState)([]),s=Object(j.a)(o,2),b=s[0],O=s[1];return console.log("cart items: ",b),Object(r.useEffect)((function(){localStorage.getItem("itemsSelected")&&O(JSON.parse(localStorage.getItem("itemsSelected")));fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(d.jsx)(m.Provider,{value:{allPhotos:i,cartItems:b,toggleFavorite:function(e){var t=i.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{isFavorite:!t.isFavorite}):t}));a(t)},addToCart:function(e){O((function(t){return[].concat(Object(u.a)(t),[e])})),function(e){var t;t=null===localStorage.getItem("itemsSelected")?[]:JSON.parse(localStorage.getItem("itemsSelected"));t.push(e),localStorage.setItem("itemsSelected",JSON.stringify(t))}(e)},removeFromCart:function(e){var t=b.filter((function(t){return t.id!==e}));O(t),function(e){var t;t=null===localStorage.getItem("itemsSelected")?[]:JSON.parse(localStorage.getItem("itemsSelected"));var c=t.filter((function(t){return t.id!==e}));localStorage.setItem("itemsSelected",JSON.stringify(c))}(e)},emptyCart:function(){O([]),function(){var e=JSON.parse(localStorage.getItem("itemsSelected"));e=[],localStorage.setItem("itemsSelected",JSON.stringify(e))}()}},children:t})}var O=function(){var e=Object(r.useContext)(m).cartItems.length>0?"fill":"line";return Object(d.jsxs)("header",{children:[Object(d.jsx)(o.b,{to:"/",children:Object(d.jsx)("div",{className:"logo",children:"Pic Some"})}),Object(d.jsx)(o.b,{to:"/cart",children:Object(d.jsx)("i",{className:"ri-shopping-cart-".concat(e," ri-fw ri-2x")})})]})};var h=function(){var e=Object(r.useState)(!1),t=Object(j.a)(e,2),c=t[0],n=t[1],i=Object(r.useRef)(null);function a(){n(!0)}function o(){n(!1)}return Object(r.useEffect)((function(){var e=i.current;return i.current.addEventListener("mouseenter",a),i.current.addEventListener("mouseleave",o),function(){e.removeEventListener("mouseenter",a),e.removeEventListener("mouseleave",o)}}),[]),[c,i]};var f=function(e){var t=e.className,c=e.photo,n=h(),i=Object(j.a)(n,2),a=i[0],o=i[1],s=Object(r.useContext)(m),l=s.toggleFavorite,u=s.addToCart,b=s.cartItems,O=s.removeFromCart;return Object(d.jsxs)("div",{ref:o,className:"".concat(t," image-container"),children:[Object(d.jsx)("img",{src:c.url,alt:"",className:"image-grid"}),c.isFavorite?Object(d.jsx)("i",{className:"ri-heart-fill favorite",onClick:function(){return l(c.id)}}):a&&!c.isFavorite?Object(d.jsx)("i",{className:"ri-heart-line favorite",onClick:function(){return l(c.id)}}):void 0,b.some((function(e){return e.id===c.id}))?Object(d.jsx)("i",{className:"ri-add-circle-fill cart",onClick:function(){return O(c.id)}}):a?Object(d.jsx)("i",{className:"ri-add-circle-line cart",onClick:function(){return u(c)}}):void 0]})};var v=function(){var e=Object(r.useContext)(m).allPhotos.map((function(e,t){return Object(d.jsx)(f,{photo:e,className:(c=t,c%5===0?"big":c%6===0?"wide":c%4===0?"tall":void 0)},e.id);var c}));return Object(d.jsxs)("main",{children:[Object(d.jsxs)("div",{className:"intro",children:[Object(d.jsx)("h1",{children:"A pho-tastic site for ordering and favoriting beautiful photos."}),Object(d.jsx)("p",{children:" Click on the heart icon to show some love as you hover over our photo selection. To order, simply click on the plus icon in the upper right corner to add images to your shopping cart."})]}),Object(d.jsx)("div",{className:"photos",children:e})]})};var g=function(e){var t=e.item,c=Object(r.useContext)(m).removeFromCart,n=h(),i=Object(j.a)(n,2),a=i[0],o=i[1],s=a?"fill":"line";return Object(d.jsxs)("div",{className:"cart-item",children:[Object(d.jsx)("i",{className:"ri-delete-bin-".concat(s),ref:o,onClick:function(){return c(t.id)}}),Object(d.jsx)("img",{src:t.url,alt:"",width:"130px"}),Object(d.jsx)("p",{children:"$5.99"})]})};var x=function(){var e=Object(r.useContext)(m),t=e.cartItems,c=e.emptyCart,n=(5.99*t.length).toLocaleString("en-US",{style:"currency",currency:"USD"}),i=Object(r.useState)("Place Order"),a=Object(j.a)(i,2),o=a[0],s=a[1],l=t.map((function(e){return Object(d.jsx)(g,{item:e},e.id)}));return Object(d.jsxs)("main",{className:"cart-page",children:[Object(d.jsx)("h1",{children:"Check out"}),l,Object(d.jsxs)("p",{className:"total-cost",children:["Total: ",n]}),t.length>0?Object(d.jsx)("div",{className:"order-button",children:Object(d.jsx)("button",{onClick:function(){s("Ordering..."),setTimeout((function(){console.log("Order Placed"),s("Place Orders"),c()}),3e3)},children:o})}):Object(d.jsx)("p",{children:"You have no items in your cart."})]})};var p=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(O,{}),Object(d.jsxs)(s.c,{children:[Object(d.jsx)(s.a,{exact:!0,path:"/",children:Object(d.jsx)(v,{})}),Object(d.jsx)(s.a,{path:"/cart",children:Object(d.jsx)(x,{})})]})]})};a.a.render(Object(d.jsx)(b,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(p,{})})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.5f4f5fd0.chunk.js.map