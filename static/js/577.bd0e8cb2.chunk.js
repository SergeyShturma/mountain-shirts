"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[577],{1375:function(e,t,i){i.d(t,{Z:function(){return c}});i(8040);var s=i(197),a="ImgCarousel_wrapper__CaXRf",r="ImgCarousel_item__0wm5V",n=i(184);function c(e){var t=e.data;return(0,n.jsx)(s.lr,{autoPlay:!0,emulateTouch:!0,infiniteLoop:!0,centerMode:!0,centerSlidePercentage:50,transitionTime:2200,interval:5e3,width:450,showThumbs:!1,showArrows:!1,className:a,children:t.map((function(e){var t=e.id,i=e.image;return(0,n.jsx)("div",{children:(0,n.jsx)("img",{className:r,src:i,alt:"the mountain item"})},t)}))})}},3723:function(e,t,i){i.d(t,{Z:function(){return P}});var s=i(3433),a=i(9439),r=i(2791),n="SizeOptions_options__jjNTo",c="SizeOptions_wrapper__0SW+o",o="SizeOptions_label__IryRl",l="SizeOptions_checkbox__y+RN9",m="SizeOptions_gif__g1fHx",d="SizeOptions_gif_wrapper__6G25x",p="SizeOptions_gif_text__ETerz",f="ShirtsWomenPage_portfolio__examples__9BoOi",h="ShirtsWomenPage_portfolio__item__fGRsE",u="ShirtsWomenPage_portfolio__box__H3A84",_="ShirtsWomenPage_portfolio__wrapper__sz8Tw",x="ShirtsWomenPage_portfolio__pic__F9uf2",w="ShirtsWomenPage_portfolio__title_code__tWWD9",g="ShirtsWomenPage_portfolio__title_link__cSYuY",j="ShirtsWomenPage_portfolio__subtitle__uD+cP",k="ShirtsWomenPage_portfolio__text__G2fxv",b="ShirtsWomenPage_portfolio__title__Pa4FZ",v="ShirtsWomenPage_portfolio__overlay__9nSKA",N=i(184),S=function(e){var t=e.sortedItems;return(0,N.jsx)(N.Fragment,{children:(0,N.jsx)("div",{className:f,children:t.map((function(e,t){var i=e.id,s=e.price,a=e.size,r=e.image,n=e.link;return s?(0,N.jsx)("li",{className:h,children:(0,N.jsxs)("div",{className:u,children:[(0,N.jsxs)("div",{className:_,children:[(0,N.jsx)("img",{className:x,src:r[0],alt:"t-shirt"}),(0,N.jsxs)("p",{className:w,children:["#",i]}),(0,N.jsxs)("p",{className:v,children:["\u041f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u0437\u0430 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c ",(0,N.jsx)("br",{}),"\u0434\u043b\u044f \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0445 \u0437\u0430\u043c\u0456\u0440\u0456\u0432 \u0442\u0430 ",(0,N.jsx)("br",{}),"\u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u0444\u043e\u0442\u043e ",(0,N.jsx)("br",{})]})]}),(0,N.jsxs)("div",{className:j,children:[(0,N.jsx)("a",{className:g,href:n,rel:"noreferrer",target:"_blank",children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"}),(0,N.jsx)("h2",{className:b,children:a.join(", ")}),(0,N.jsxs)("p",{className:k,children:[s," \u0433\u0440\u043d"]})]})]})},t):(0,N.jsx)("li",{className:h,children:(0,N.jsxs)("div",{className:u,children:[(0,N.jsxs)("div",{className:_,children:[(0,N.jsx)("img",{className:x,src:r,alt:"t-shirt"}),(0,N.jsxs)("p",{className:w,children:["#",i]}),(0,N.jsxs)("p",{className:v,children:["\u0420\u043e\u0437\u043c\u0456\u0440\u0438 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u043b\u0438\u0441\u044f. ",(0,N.jsx)("br",{}),"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0456\u043d\u0448\u0443 \u043c\u043e\u0434\u0435\u043b\u044c ",(0,N.jsx)("br",{})]})]}),(0,N.jsxs)("div",{className:j,children:[(0,N.jsx)("p",{className:g,children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"}),(0,N.jsx)("h2",{className:b,children:a}),(0,N.jsx)("p",{className:k,children:"\xa0"})]})]})},t)}))})})},z=["S","M","L","XL"],P=function(e){var t=e.sortedItems,i=(0,r.useState)([]),f=(0,a.Z)(i,2),h=f[0],u=f[1],_=t.filter((function(e){return e.size.some((function(e){return h.includes(e.trim())}))})),x=t.reduce((function(e,t){return t.size.forEach((function(t){z.includes(t)&&e[t]++})),e}),{S:0,M:0,L:0,XL:0});return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("div",{className:n,children:z.map((function(e,t){return(0,N.jsxs)("div",{className:c,children:[(0,N.jsxs)("label",{className:o,htmlFor:t,children:[e,"(",x[e],")"]}),(0,N.jsx)("input",{type:"checkbox",className:l,value:e,id:t,onChange:function(e){return function(e){var t=e.target.value;u((function(e){return e.includes(t)?e.filter((function(e){return e!==t})):[].concat((0,s.Z)(e),[t])}))}(e)}})]},e)}))}),h.length?_.length?(0,N.jsx)(S,{sortedItems:_}):(0,N.jsxs)("div",{className:d,children:[(0,N.jsx)("p",{className:p,children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0456\u043d\u0448\u0438\u0439 \u0440\u043e\u0437\u043c\u0456\u0440, \u0431\u043e \u0446\u0435\u0439 \u0432\u0436\u0435 \u0440\u043e\u0437\u0456\u0431\u0440\u0430\u043b\u0438..."}),(0,N.jsx)("iframe",{title:"Fun",className:m,src:"https://giphy.com/embed/kcerH6iby9Id8KRTHr",alt:"gif"})]}):(0,N.jsx)(S,{sortedItems:t})]})}},9927:function(e,t,i){var s=[{price:250,image:i(9558),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:1},{price:250,image:i(2597),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:2},{price:200,image:i(1527),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:3},{price:200,image:i(2382),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:4},{price:250,image:i(202),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:5},{price:200,image:i(4332),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:6},{price:250,image:i(6473),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:7},{price:150,image:i(2486),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:8}];t.Z=s},4223:function(e,t,i){i.d(t,{Z:function(){return m}});var s=i(8977),a="DropDown_dropdown_wrapper__9KJHb",r="DropDown_dropdown_select__hdTvP",n="DropDown_dropdown_text__itrhD",c=i(184),o=new Date,l=(0,s.Z)(o,"dd.MM.yyyy"),m=function(e){var t=e.setSortDir;return(0,c.jsxs)("div",{className:a,children:[(0,c.jsxs)("p",{className:n,children:["*\u0426\u0456\u043d\u0438 \u0442\u0430 \u043d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0456 \u043d\u0430 ",l]}),(0,c.jsxs)("select",{className:r,onChange:function(e){return t(e.target.value)},children:[(0,c.jsx)("option",{value:"default",children:"\u0437\u0430 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0441\u0442\u044e "}),(0,c.jsx)("option",{value:"lowtohigh",children:"\u0446\u0456\u043d\u0430: low to high "}),(0,c.jsx)("option",{value:"hightolow",children:"\u0446\u0456\u043d\u0430: high to low "})]})]})}},1369:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var s=i(9439),a=i(2791),r=i(4223),n=i(3433),c=[{price:550,size:["M"],image:[i(1077)],link:"https://www.kidstaff.com.ua/tema-32286980.html",id:1},{price:450,size:["S"],image:[i(5520)],link:"https://www.kidstaff.com.ua/tema-32286980.html",id:2},{price:550,size:["M"],image:[i(8700)],link:"https://www.kidstaff.com.ua/tema-33233408.html",id:3},{price:450,size:["M"],image:[i(7114)],link:"https://www.kidstaff.com.ua/tema-32286980.html",id:4},{price:450,size:["S"],image:[i(7439)],link:"https://www.kidstaff.com.ua/tema-32286980.html",id:5},{price:0,size:["\u0420\u043e\u0437\u043f\u0440\u043e\u0434\u0430\u043d\u043e!"],image:[i(2050)],link:"",id:6}],o=i(3723),l=i(184),m=function(e){var t=e.sortDir,i=(0,a.useMemo)((function(){return(0,n.Z)(c).sort((function(e,i){return"lowtohigh"===t?e.price-i.price:"hightolow"===t?i.price-e.price:e.id-i.id}))}),[t]);return(0,l.jsx)(o.Z,{sortedItems:i})},d=i(1375),p=i(9927),f=function(){var e=(0,a.useState)("default"),t=(0,s.Z)(e,2),i=t[0],n=t[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{setSortDir:n}),(0,l.jsx)(m,{sortDir:i}),(0,l.jsx)(d.Z,{data:p.Z})]})}},9558:function(e,t,i){e.exports=i.p+"static/media/mask1.6d10273fe42ce3fcbb72.jpg"},2597:function(e,t,i){e.exports=i.p+"static/media/mask2.be4e491fe6299c62c1f9.jpg"},1527:function(e,t,i){e.exports=i.p+"static/media/mask3.2c76d75eb52f900dba5f.jpg"},2382:function(e,t,i){e.exports=i.p+"static/media/mask4.0ee7aaf3ba226c352441.jpg"},202:function(e,t,i){e.exports=i.p+"static/media/mask5.0f59861426997124a885.jpg"},4332:function(e,t,i){e.exports=i.p+"static/media/mask6.c36deea46975277c4dbb.jpg"},6473:function(e,t,i){e.exports=i.p+"static/media/mask7.60f9ea551f02cea5c484.jpg"},2486:function(e,t,i){e.exports=i.p+"static/media/mask8.55833a45d6ff10ffb66c.jpg"},1077:function(e,t,i){e.exports=i.p+"static/media/women1.fb0f87411ff09dc68a98.jpg"},5520:function(e,t,i){e.exports=i.p+"static/media/women2.7cc3eba315b315ebbdf1.jpg"},8700:function(e,t,i){e.exports=i.p+"static/media/women3.d7082d6488afeb08ea5f.jpg"},7114:function(e,t,i){e.exports=i.p+"static/media/women4.023ca4e223f6aa56d1e7.jpg"},7439:function(e,t,i){e.exports=i.p+"static/media/women5.80950ca057b7f353e5b6.jpg"},2050:function(e,t,i){e.exports=i.p+"static/media/women6.612ca6b7ad9190e98615.jpg"}}]);
//# sourceMappingURL=577.bd0e8cb2.chunk.js.map