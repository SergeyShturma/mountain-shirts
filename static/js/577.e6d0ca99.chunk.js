"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[577],{1375:function(e,i,t){t.d(i,{Z:function(){return o}});t(8040);var s=t(197),a="ImgCarousel_wrapper__CaXRf",r="ImgCarousel_item__0wm5V",n=t(184);function o(e){var i=e.data;return(0,n.jsx)(s.lr,{autoPlay:!0,emulateTouch:!0,infiniteLoop:!0,centerMode:!0,centerSlidePercentage:50,transitionTime:2200,interval:5e3,width:450,showThumbs:!1,showArrows:!1,className:a,children:i.map((function(e){var i=e.id,t=e.image;return(0,n.jsx)("div",{children:(0,n.jsx)("img",{className:r,src:t,alt:"the mountain item"})},i)}))})}},3723:function(e,i,t){t.d(i,{Z:function(){return P}});var s=t(3433),a=t(9439),r=t(2791),n="SizeOptions_options__jjNTo",o="SizeOptions_wrapper__0SW+o",c="SizeOptions_label__IryRl",l="SizeOptions_checkbox__y+RN9",m="SizeOptions_gif__g1fHx",d="SizeOptions_gif_wrapper__6G25x",p="SizeOptions_gif_text__ETerz",f="ShirtsWomenPage_portfolio__examples__9BoOi",u="ShirtsWomenPage_portfolio__item__fGRsE",h="ShirtsWomenPage_portfolio__box__H3A84",_="ShirtsWomenPage_portfolio__wrapper__sz8Tw",x="ShirtsWomenPage_portfolio__pic__F9uf2",j="ShirtsWomenPage_portfolio__title_code__tWWD9",g="ShirtsWomenPage_portfolio__title_link__cSYuY",w="ShirtsWomenPage_portfolio__subtitle__uD+cP",k="ShirtsWomenPage_portfolio__text__G2fxv",v="ShirtsWomenPage_portfolio__title__Pa4FZ",N="ShirtsWomenPage_portfolio__overlay__9nSKA",b=t(184),S=function(e){var i=e.sortedItems;return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:f,children:i.map((function(e,i){var t=e.id,s=e.price,a=e.size,r=e.image,n=e.link;return s?(0,b.jsx)("li",{className:u,children:(0,b.jsxs)("div",{className:h,children:[(0,b.jsxs)("div",{className:_,children:[(0,b.jsx)("img",{className:x,src:r[0],alt:"t-shirt"}),(0,b.jsxs)("p",{className:j,children:["#",t]}),(0,b.jsxs)("p",{className:N,children:["\u041f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u0437\u0430 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c ",(0,b.jsx)("br",{}),"\u0434\u043b\u044f \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0445 \u0437\u0430\u043c\u0456\u0440\u0456\u0432 \u0442\u0430 ",(0,b.jsx)("br",{}),"\u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0438\u0445 \u0444\u043e\u0442\u043e ",(0,b.jsx)("br",{})]})]}),(0,b.jsxs)("div",{className:w,children:[(0,b.jsx)("a",{className:g,href:n,rel:"noreferrer",target:"_blank",children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"}),(0,b.jsx)("h2",{className:v,children:a.join(", ")}),(0,b.jsxs)("p",{className:k,children:[s," \u0433\u0440\u043d"]})]})]})},i):(0,b.jsx)("li",{className:u,children:(0,b.jsxs)("div",{className:h,children:[(0,b.jsxs)("div",{className:_,children:[(0,b.jsx)("img",{className:x,src:r,alt:"t-shirt"}),(0,b.jsxs)("p",{className:j,children:["#",t]}),(0,b.jsxs)("p",{className:N,children:["\u0420\u043e\u0437\u043c\u0456\u0440\u0438 \u0437\u0430\u043a\u0456\u043d\u0447\u0438\u043b\u0438\u0441\u044f. ",(0,b.jsx)("br",{}),"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0456\u043d\u0448\u0443 \u043c\u043e\u0434\u0435\u043b\u044c ",(0,b.jsx)("br",{})]})]}),(0,b.jsxs)("div",{className:w,children:[(0,b.jsx)("p",{className:g,children:"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435"}),(0,b.jsx)("h2",{className:v,children:a}),(0,b.jsx)("p",{className:k,children:"\xa0"})]})]})},i)}))})})},z=["S","M","L","XL"],P=function(e){var i=e.sortedItems,t=(0,r.useState)([]),f=(0,a.Z)(t,2),u=f[0],h=f[1],_=i.filter((function(e){return e.size.some((function(e){return u.includes(e.trim())}))})),x=i.reduce((function(e,i){return i.size.forEach((function(i){z.includes(i)&&(e[i]+=1)})),e}),{S:0,M:0,L:0,XL:0});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:n,children:z.map((function(e,i){return(0,b.jsxs)("div",{className:o,children:[(0,b.jsxs)("label",{className:c,htmlFor:i,children:[e,"(",x[e],")"]}),(0,b.jsx)("input",{type:"checkbox",className:l,value:e,id:i,onChange:function(e){return function(e){var i=e.target.value;h((function(e){return e.includes(i)?e.filter((function(e){return e!==i})):[].concat((0,s.Z)(e),[i])}))}(e)}})]},e)}))}),u.length?_.length?(0,b.jsx)(S,{sortedItems:_}):(0,b.jsxs)("div",{className:d,children:[(0,b.jsx)("p",{className:p,children:"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0456\u043d\u0448\u0438\u0439 \u0440\u043e\u0437\u043c\u0456\u0440, \u0431\u043e \u0446\u0435\u0439 \u0432\u0436\u0435 \u0440\u043e\u0437\u0456\u0431\u0440\u0430\u043b\u0438..."}),(0,b.jsx)("iframe",{title:"Fun",className:m,src:"https://giphy.com/embed/kcerH6iby9Id8KRTHr",alt:"gif"})]}):(0,b.jsx)(S,{sortedItems:i})]})}},9927:function(e,i,t){var s=[{price:250,image:t(9558),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:1},{price:200,image:t(2382),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:4},{price:250,image:t(202),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:5},{price:200,image:t(4332),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:6},{price:250,image:t(6473),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:7},{price:150,image:t(2486),link:"https://www.kidstaff.com.ua/tema-32646875.html",id:8}];i.Z=s},4223:function(e,i,t){t.d(i,{Z:function(){return m}});var s=t(8977),a="DropDown_dropdown_wrapper__9KJHb",r="DropDown_dropdown_select__hdTvP",n="DropDown_dropdown_text__itrhD",o=t(184),c=new Date,l=(0,s.Z)(c,"dd.MM.yyyy"),m=function(e){var i=e.setSortDir;return(0,o.jsxs)("div",{className:a,children:[(0,o.jsxs)("p",{className:n,children:["*\u0426\u0456\u043d\u0438 \u0442\u0430 \u043d\u0430\u044f\u0432\u043d\u0456\u0441\u0442\u044c \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0456 \u043d\u0430 ",l]}),(0,o.jsxs)("select",{className:r,onChange:function(e){return i(e.target.value)},children:[(0,o.jsx)("option",{value:"default",children:"\u0437\u0430 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456\u0441\u0442\u044e "}),(0,o.jsx)("option",{value:"lowtohigh",children:"\u0446\u0456\u043d\u0430: low to high "}),(0,o.jsx)("option",{value:"hightolow",children:"\u0446\u0456\u043d\u0430: high to low "})]})]})}},1369:function(e,i,t){t.r(i),t.d(i,{default:function(){return f}});var s=t(9439),a=t(2791),r=t(4223),n=t(3433),o=[{price:550,size:["M"],image:[t(1077)],link:"https://www.kidstaff.com.ua/tema-32286980.html",id:1},{price:450,size:["S"],image:[t(5520)],link:"https://www.kidstaff.com.ua/tema-32286980.html",id:2},{price:550,size:["M"],image:[t(8700)],link:"https://www.kidstaff.com.ua/tema-33233408.html",id:3},{price:0,size:["\u0420\u043e\u0437\u043f\u0440\u043e\u0434\u0430\u043d\u043e!"],image:[t(7114)],link:"",id:4},{price:0,size:["\u0420\u043e\u0437\u043f\u0440\u043e\u0434\u0430\u043d\u043e!"],image:[t(7439)],link:"",id:5},{price:0,size:["\u0420\u043e\u0437\u043f\u0440\u043e\u0434\u0430\u043d\u043e!"],image:[t(2050)],link:"",id:6}],c=t(3723),l=t(184),m=function(e){var i=e.sortDir,t=(0,a.useMemo)((function(){return(0,n.Z)(o).sort((function(e,t){return"lowtohigh"===i?e.price-t.price:"hightolow"===i?t.price-e.price:e.id-t.id}))}),[i]);return(0,l.jsx)(c.Z,{sortedItems:t})},d=t(1375),p=t(9927),f=function(){var e=(0,a.useState)("default"),i=(0,s.Z)(e,2),t=i[0],n=i[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{setSortDir:n}),(0,l.jsx)(m,{sortDir:t}),(0,l.jsx)(d.Z,{data:p.Z})]})}},9558:function(e,i,t){e.exports=t.p+"static/media/mask1.6d10273fe42ce3fcbb72.jpg"},2382:function(e,i,t){e.exports=t.p+"static/media/mask4.0ee7aaf3ba226c352441.jpg"},202:function(e,i,t){e.exports=t.p+"static/media/mask5.0f59861426997124a885.jpg"},4332:function(e,i,t){e.exports=t.p+"static/media/mask6.c36deea46975277c4dbb.jpg"},6473:function(e,i,t){e.exports=t.p+"static/media/mask7.60f9ea551f02cea5c484.jpg"},2486:function(e,i,t){e.exports=t.p+"static/media/mask8.55833a45d6ff10ffb66c.jpg"},1077:function(e,i,t){e.exports=t.p+"static/media/women1.fb0f87411ff09dc68a98.jpg"},5520:function(e,i,t){e.exports=t.p+"static/media/women2.7cc3eba315b315ebbdf1.jpg"},8700:function(e,i,t){e.exports=t.p+"static/media/women3.d7082d6488afeb08ea5f.jpg"},7114:function(e,i,t){e.exports=t.p+"static/media/women4.023ca4e223f6aa56d1e7.jpg"},7439:function(e,i,t){e.exports=t.p+"static/media/women5.80950ca057b7f353e5b6.jpg"},2050:function(e,i,t){e.exports=t.p+"static/media/women6.612ca6b7ad9190e98615.jpg"}}]);
//# sourceMappingURL=577.e6d0ca99.chunk.js.map