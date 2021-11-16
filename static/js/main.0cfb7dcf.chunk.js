(this["webpackJsonpmovie-hub"]=this["webpackJsonpmovie-hub"]||[]).push([[0],{65:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),o=t(22),c=t.n(o),a=t(15),s=t.n(a),u=t(10),l=t(5),d=t(16),f=t(6);function h(e,n){return e}var b,j={movies:{upcoming:[],popular:[],trending:[],genres:[]},tv:{trending:[],genres:[]}},m={poster:["w92","w154","w185","w342","w500","w780","original"],backdrop:["w300","w780","w1280","original"],profile:["w45","w185","original"]},v=t(1),p=function(){var e=r.createContext(void 0);return[function(){var n=r.useContext(e);if(void 0===n)throw new Error("useContext must be inside a Provider with a value");return n},e.Provider]}(),g=Object(f.a)(p,2),x=(g[0],g[1]),O=function(e){var n=e.children,t=Object(r.useReducer)(h,j),i=Object(f.a)(t,2),o=i[0],c=i[1];return Object(v.jsx)(x,{value:Object(d.a)(Object(d.a)({},o),{},{dispatch:c}),children:n})},w=t(7),k=t(43),y=["primary","onClick","children","disabled"],z=l.c.button(b||(b=Object(w.a)(["\n  min-width: max-content;\n  height: min-content;\n  color: ",";\n\n  border-radius: ",";\n  border: 1px solid ",";\n  font-weight: 600;\n\n  background-color: ",";\n\n  text-transform: capitalize;\n  cursor: pointer;\n\n  padding-block: ",";\n  padding-inline: ",";\n"])),(function(e){var n=e.theme;return e.primary?n.colors.surface1:n.colors.text1}),(function(e){return e.theme.size.xs}),(function(e){return e.theme.colors.text1}),(function(e){var n=e.theme;return e.primary?n.colors.text1:"inherit"}),(function(e){return e.theme.size.xxxs}),(function(e){return e.theme.size.md})),S=i.a.forwardRef((function(e,n){var t=e.primary,r=void 0===t||t,i=e.onClick,o=e.children,c=e.disabled,a=void 0!==c&&c,s=Object(k.a)(e,y);return Object(v.jsx)(z,Object(d.a)(Object(d.a)({ref:n,primary:r,onClick:i,disabled:a},s),{},{children:o}))}));var L=function(e,n){Object(r.useEffect)((function(){var t=function(t){var r=null===e||void 0===e?void 0:e.current;r&&!r.contains(t.target)&&n(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[e,n])},C=function(){return Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:5,d:"M19 9l-7 7-7-7"})})},M=function(){return Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:5,d:"M5 15l7-7 7 7"})})},_={apiKey:"f274625ee8526fcb3150182ed7668864",baseURL:"https://api.themoviedb.org/3/",imageBaseURL:"https://image.tmdb.org/t/p/"},T=_.apiKey,E=_.baseURL,R=_.imageBaseURL,P=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(E).concat(e,"?api_key=").concat(T).concat(n)};function W(e,n){var t={src:"",srcset:""};if(e){t.src="".concat(R,"original").concat(e);var r=m[n].filter((function(e){return"original"!==e})).map((function(n){return"".concat(R).concat(n).concat(e," ").concat(n.substring(1),"w")}));t.srcset=r.join(", ")}return t}var B=function(e){return e.map((function(e){return{title:e.title,id:e.id,backdrop_path:e.backdrop_path,poster_path:e.poster_path,vote_average:e.vote_average,release_date:e.release_date}}))},D=function(e){return e.map((function(e){var n=e.name,t=e.id,r=e.backdrop_path,i=e.poster_path,o=e.vote_average;return{title:n,release_date:e.first_air_date,id:t,backdrop_path:r,poster_path:i,vote_average:o}}))};function F(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];n&&clearTimeout(n),n=setTimeout((function(){e.apply(void 0,i),clearTimeout(n)}),t)}}var I,Q,U,A,G,H,N,J,K,V,q,X,Y,Z,$,ee,ne=Object(l.c)(S)(I||(I=Object(w.a)(["\n  background-color: inherit;\n  border: none;\n  border-radius: unset;\n  color: ",";\n  font-weight: ",";\n\n  &:hover {\n    background-color: ",';\n  }\n\n  &[aria-hidden="true"] {\n    visibility: hidden;\n  }\n'])),(function(e){var n=e.isSelected,t=e.theme.colors;return n?t.text1:t.text2}),(function(e){return e.isSelected?600:400}),(function(e){return e.theme.colors.surface4})),te=Object(l.c)(S)(Q||(Q=Object(w.a)(["\n  border: none;\n  position: absolute;\n  background-color: inherit;\n  z-index: 1;\n  color: ",";\n  visibility: ",";\n"])),(function(e){return e.theme.colors.text1}),(function(e){return e.isHidden?"hidden":"initial"})),re=l.c.div(U||(U=Object(w.a)(["\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: hidden;\n  border-bottom: 1px solid ",";\n  margin-inline: ",";\n  margin-block-end: ",";\n  padding-block: ",";\n\n  & > button > svg {\n    width: 2ch;\n  }\n"])),(function(e){return e.theme.colors.surface4}),(function(e){return e.theme.size.lg}),(function(e){return e.theme.size.md}),(function(e){return e.theme.size.xxxs})),ie=l.c.div(A||(A=Object(w.a)(["\n  background-color: ",";\n  width: max-content;\n\n  position: absolute;\n  transform: translate(-60%, -20px);\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n\n  max-block-size: 200px;\n  overflow-y: scroll;\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n\n  & > button {\n    width: 100%;\n    padding-block: ",";\n    text-align: left;\n  }\n"])),(function(e){return e.theme.colors.surface3}),(function(e){return e.theme.size.xs})),oe=l.c.div(G||(G=Object(w.a)(["\n  position: relative;\n  width: max-content;\n"]))),ce=function(e){var n=e.items,t=Object(r.useRef)(null),i=Object(r.useRef)(null),o=Object(r.useRef)(null),c=Object(r.useRef)([]),a=Object(r.useState)([]),s=Object(f.a)(a,2),u=s[0],l=s[1],d=Object(r.useState)(!1),h=Object(f.a)(d,2),b=h[0],j=h[1],m=function(){return j(!b)},p=Object(r.useCallback)((function(){var e=t.current;if(e){var r,a=e.offsetWidth,s=(null===(r=i.current)||void 0===r?void 0:r.offsetWidth)||0,u=c.current[0],d=[];c.current.forEach((function(e,t){if(e){var r=function(e){var n=window.getComputedStyle(e);return e.offsetWidth+parseInt(n.marginLeft,10)+parseInt(n.marginRight,10)}(e);s+r<=a?(e.setAttribute("aria-hidden","false"),u=e):(e.setAttribute("aria-hidden","true"),d.push(n[t])),s+=r}})),l(d),u&&i.current&&o.current&&(i.current.style.left="".concat(u.offsetLeft+u.clientWidth,"px"),o.current.style.left="".concat(i.current.offsetLeft,"px"))}}),[n]);return Object(r.useEffect)((function(){p();var e=F(p,100);return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[n,p]),L(o,(function(){return b&&m()})),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(re,{ref:t,children:[n.map((function(e,n){return Object(v.jsx)(ne,{"data-button-id":e.id,onClick:e.onClick,isSelected:e.isSelected,ref:function(e){return c.current[n]=e},children:e.label},e.id)})),Object(v.jsx)(te,{onClick:m,ref:i,isHidden:0===u.length,children:b?Object(v.jsx)(M,{}):Object(v.jsx)(C,{})})]}),Object(v.jsx)(oe,{ref:o,children:b&&Object(v.jsx)(ie,{children:u.map((function(e){return Object(v.jsx)(ne,{onClick:function(n){return e.onClick(n)},"data-button-id":e.id,isSelected:e.isSelected,children:e.label},e.id)}))})})]})},ae=function(){return Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:5,d:"M15 19l-7-7 7-7"})})},se=function(){return Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:5,d:"M9 5l7 7-7 7"})})},ue=l.c.div(H||(H=Object(w.a)(["\n  position: relative;\n"]))),le=l.c.span(N||(N=Object(w.a)(["\n  color: white;\n  background: rgba(20, 20, 20, 0.5);\n\n  cursor: pointer;\n  font-size: 6em;\n\n  position: absolute;\n  top: ",";\n  height: ",";\n  width: 4%;\n\n  text-align: center;\n  display: none;\n  justify-content: center;\n  align-items: center;\n\n  visibility: ",";\n\n  &:nth-of-type(1) {\n    left: 0;\n  }\n\n  &:nth-of-type(2) {\n    right: 0;\n  }\n  ",":hover & {\n    display: inline-flex;\n  }\n"])),(function(e){return e.theme.size.xs}),(function(e){return e.bsize}),(function(e){return e.isHidden?"hidden":"visible"}),ue),de=l.c.ul(J||(J=Object(w.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  gap: ",";\n\n  padding-inline: ",";\n  padding-block: ",";\n\n  overflow-x: auto;\n  overscroll-behavior-inline: contain;\n  scroll-snap-type: inline mandatory;\n  scroll-padding-left: ",";\n  scroll-padding-right: ",";\n  scroll-padding-inline: ",";\n\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n\n  @media (prefers-reduced-motion: no-preference) {\n    & {\n      scroll-behavior: smooth;\n    }\n  }\n"])),(function(e){return e.theme.size.xl}),(function(e){return e.theme.size.lg}),(function(e){return e.theme.size.xs}),(function(e){return e.theme.size.xl}),(function(e){return e.theme.size.xl}),(function(e){return e.theme.size.xl})),fe=l.c.li(K||(K=Object(w.a)(["\n  display: inline-block;\n  inline-size: ",";\n  block-size: min-content;\n"])),(function(e){return e.inlineSize})),he=l.c.figure(V||(V=Object(w.a)(["\n  scroll-snap-align: start;\n\n  display: grid;\n  gap: calc("," / 2);\n  margin: 0;\n\n  cursor: pointer;\n  user-select: none;\n\n  outline-offset: 12px;\n\n  &:focus {\n    outline-offset: 7px;\n  }\n"])),(function(e){return e.theme.size.lg})),be=l.c.img(q||(q=Object(w.a)(["\n  inline-size: ",";\n  block-size: ",";\n\n  aspect-ratio: ",";\n\n  object-fit: cover;\n\n  border-radius: 1ex;\n  border: none;\n  overflow: hidden;\n  background-image: ",";\n"])),(function(e){return e.inlineSize}),(function(e){return e.blockSize}),(function(e){return e.aspectRatio}),(function(e){return"linear-gradient(to bottom, ".concat(e.theme.colors.surface1,", ").concat(e.theme.colors.surface2,")")})),je=l.c.figcaption(X||(X=Object(w.a)(["\n  line-height: ",";\n  font-weight: 600;\n  font-size: ",";\n\n  & > p {\n    font-size: ",";\n    font-weight: 400;\n    color: ",";\n    padding-block: ",";\n  }\n"])),(function(e){return e.theme.size.lg}),(function(e){return e.theme.size.md}),(function(e){return e.theme.size.sm}),(function(e){return e.theme.colors.text2}),(function(e){return e.theme.size.sm})),me=function(e){var n=e.list,t=e.ratio,i=void 0===t?"1/1":t,o=e.loading,c=void 0!==o&&o,a=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1/1").split("/").map((function(e){return+e})),n=Object(f.a)(e,2),t=n[0],r=n[1],i="10rem",o=t>r?i:"".concat(10*r/t,"rem"),c=t>r?"".concat(10*t/r,"rem"):i;return[o,c]}(i),s=Object(f.a)(a,2),u=s[0],l=s[1],d=Object(r.useRef)(document.createElement("ul")),h=Object(r.useState)(!0),b=Object(f.a)(h,2),j=b[0],m=b[1],p=Object(r.useState)(!1),g=Object(f.a)(p,2),x=g[0],O=g[1],w=c?Array(10).fill({image:{}}):n;return Object(v.jsxs)(ue,{children:[!c&&!("ontouchstart"in window)&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(le,{bsize:u,onClick:function(){var e=d.current,n=e.offsetWidth,t=e.scrollLeft;d.current.scrollTo({top:0,left:t-n,behavior:"smooth"})},isHidden:j,children:Object(v.jsx)(ae,{})}),Object(v.jsx)(le,{bsize:u,onClick:function(){var e=d.current,n=e.offsetWidth,t=e.scrollLeft;d.current.scrollTo({top:0,left:t+n,behavior:"smooth"})},isHidden:x,children:Object(v.jsx)(se,{})})]}),Object(v.jsx)(de,{ref:d,onScroll:F((function(){var e=d.current,n=e.offsetWidth,t=e.scrollLeft;n+t>=e.scrollWidth?O(!0):x&&O(!1),0===t?m(!0):j&&m(!1)})),children:w.map((function(e,n){return Object(v.jsx)(ve,{item:e,width:l,height:u,ratio:i},e.id||n)}))})]})},ve=function(e){var n=e.height,t=e.item,r=e.width,i=e.ratio;return Object(v.jsx)(fe,{inlineSize:r,children:Object(v.jsxs)(he,{children:[Object(v.jsx)("picture",{children:t.image.src?Object(v.jsx)(be,{aspectRatio:i,inlineSize:r,blockSize:n,alt:t.title,loading:"lazy",srcSet:t.image.srcset,src:t.image.src}):Object(v.jsx)(s.a,{width:r,height:n})}),Object(v.jsxs)(je,{children:[t.title||Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(s.a,{}),Object(v.jsx)(s.a,{width:"65%"})]}),t.caption&&Object(v.jsx)("p",{children:t.caption})]})]})})},pe=l.c.header(Y||(Y=Object(w.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  justify-content: start;\n  padding-inline: ",";\n  padding-block: ",";\n  grid-gap: ",";\n\n  & h1 {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.size.lg}),(function(e){return e.theme.size.xs}),(function(e){return e.theme.size.xs}),(function(e){return e.theme.size.xl})),ge=l.c.div(Z||(Z=Object(w.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  width: min-content;\n  border-radius: ",";\n  border: 1px solid ",";\n\n  & > button {\n    border: none;\n    border-radius: inherit;\n  }\n"])),(function(e){return e.theme.size.md}),(function(e){return e.theme.colors.text1})),xe=t(30),Oe=t.n(xe),we=t(42),ke=function(){var e=Object(we.a)(Oe.a.mark((function e(n){var t,r;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(n);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),new Error("Api Error");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}();!function(e){e.Movie="movie",e.Tv="tv"}($||($={})),function(e){e.Popular="popular",e.Upcoming="upcoming"}(ee||(ee={}));var ye=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object(u.useQuery)(["genre",e,n],(function(){return ke(P("discover/".concat(e),"&with_genres=".concat(n)))}),{select:function(n){return e===$.Movie?B(n.results):D(n.results)},enabled:t})};var ze,Se=function(){return Object(u.useQuery)("genres",(function(){return function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return Promise.all(n.map(ke))}(P("genre/tv/list"),P("genre/movie/list"))}),{select:function(e){var n=Object(f.a)(e,2),t=n[0],r=n[1];return{tvGenres:t.genres,movieGenres:r.genres}}})},Le=function(e){var n=e.triggerOnce,t=e.threshold,i=void 0===t?0:t,o=e.root,c=void 0===o?null:o,a=e.rootMargin,s=void 0===a?"0%":a,u=Object(r.useRef)(null),l=Object(r.useState)(!1),d=Object(f.a)(l,2),h=d[0],b=d[1];return Object(r.useEffect)((function(){var e=null===u||void 0===u?void 0:u.current;if(!!window.IntersectionObserver&&e){var t=new IntersectionObserver((function(e,t){e.forEach((function(e){b(e.isIntersecting),e.isIntersecting&&n&&t.disconnect()}))}),{root:c,rootMargin:s,threshold:i});return t.observe(e),function(){return t.disconnect()}}}),[]),{ref:u,inView:h}},Ce=l.c.section(ze||(ze=Object(w.a)(["\n  background-image: ",";\n"])),(function(e){return e.isBackdrop?"linear-gradient(\n      to bottom,\n      ".concat(e.theme.colors.surface2,",\n      ").concat(e.theme.colors.surface3,"\n    )"):"none"})),Me=function(e){var n=e.genre,t=e.index,i=Le({triggerOnce:!0}),o=i.ref,c=i.inView,a=Object(r.useState)($.Movie),s=Object(f.a)(a,2),u=s[0],l=s[1],d=t%2===0,h=ye(u,n.id,c),b=h.data,j=void 0===b?[]:b,m=h.isLoading,p=j.map((function(e){var n=e.id,t=e.title,r=e.poster_path,i=e.backdrop_path,o=e.release_date;return{id:n,title:t,image:W(d?i:r,d?"backdrop":"poster"),caption:new Date(o).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}}));return Object(v.jsxs)(Ce,{ref:o,isBackdrop:d,children:[Object(v.jsxs)(pe,{children:[Object(v.jsx)("h1",{children:n.name}),Object(v.jsxs)(ge,{children:[Object(v.jsx)(S,{primary:u===$.Movie,onClick:function(){return l($.Movie)},children:$.Movie}),Object(v.jsx)(S,{primary:u===$.Tv,onClick:function(){return l($.Tv)},children:$.Tv})]})]}),Object(v.jsx)(me,{list:p,ratio:d?"16/9":"2/3",loading:!c||m})]})},_e=function(){var e,n=Object(r.useState)($.Tv),t=Object(f.a)(n,2),i=t[0],o=t[1],c=Se(),a=c.data,s=c.isLoading,u=a||{},l=u.tvGenres,d=void 0===l?[]:l,h=u.movieGenres,b=void 0===h?[]:h,j=d.map((function(e){return e.id})),m=b.filter((function(e){var n=e.id;return j.includes(n)})),p=i===$.Movie?b:d,g=Object(r.useState)(null===(e=p[0])||void 0===e?void 0:e.id),x=Object(f.a)(g,2),O=x[0],w=x[1],k=Object(r.useMemo)((function(){return p.map((function(e){var n=e.id;return{id:n,label:e.name,isSelected:n===O,onClick:function(e){var n=e.currentTarget.dataset.buttonId;n&&w(parseInt(n))}}}))}),[p,O]);Object(r.useEffect)((function(){var e;w(null===(e=p[0])||void 0===e?void 0:e.id)}),[p]);var y=ye(i,O,!0),z=y.data,L=void 0===z?[]:z,C=y.isLoading,M=L.map((function(e){var n=e.id,t=e.title,r=e.poster_path,i=e.release_date;return{id:n,title:t,image:W(r,"poster"),caption:new Date(i).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}}));return Object(v.jsx)(v.Fragment,{children:s?Object(v.jsx)(me,{list:[],loading:!0,ratio:"2/3"}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(pe,{children:[Object(v.jsx)("h1",{children:"Genres"}),Object(v.jsxs)(ge,{children:[Object(v.jsx)(S,{primary:i===$.Movie,onClick:function(){return o($.Movie)},children:$.Movie}),Object(v.jsx)(S,{primary:i===$.Tv,onClick:function(){return o($.Tv)},children:$.Tv})]})]}),Object(v.jsx)(ce,{items:k}),Object(v.jsx)(me,{list:M,ratio:"2/3",loading:C}),m.map((function(e,n){return Object(v.jsx)(Me,{genre:e,index:n},e.id)}))]})})};var Te,Ee=function(e){return Object(u.useQuery)(["movies",e],(function(){return ke(P("movie/".concat(e)))}),{select:function(e){return ee.Upcoming,B(e.results)}})},Re=l.c.section(Te||(Te=Object(w.a)(["\n  background-image: linear-gradient(\n    to bottom,\n    ",",\n    ","\n  );\n"])),(function(e){return e.theme.colors.surface2}),(function(e){return e.theme.colors.surface3})),Pe=function(){var e=Object(r.useState)(ee.Popular),n=Object(f.a)(e,2),t=n[0],i=n[1],o=Ee(t),c=o.data,a=void 0===c?[]:c,s=o.isLoading,u=a.map((function(e){var n=e.id,t=e.title,r=e.backdrop_path,i=e.release_date;return{id:n,title:t,image:W(r,"backdrop"),caption:new Date(i).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}})),l=function(){return i(t===ee.Popular?ee.Upcoming:ee.Popular)};return Object(v.jsxs)(Re,{id:"discover-movies",children:[Object(v.jsxs)(pe,{children:[Object(v.jsx)("h1",{children:"Discover Movies"}),Object(v.jsxs)(ge,{children:[Object(v.jsx)(S,{primary:t===ee.Popular,disabled:t===ee.Popular,onClick:l,children:"Popular"}),Object(v.jsx)(S,{primary:t===ee.Upcoming,disabled:t===ee.Upcoming,onClick:l,children:"Upcoming"})]})]}),Object(v.jsx)(me,{list:u,loading:s,ratio:"16/9"})]})};var We,Be=function(e){return Object(u.useQuery)(["trending",e],(function(){return ke(P("trending/".concat(e,"/day")))}),{select:function(n){return e===$.Movie?B(n.results):D(n.results)}})},De=function(){var e=Object(r.useState)($.Movie),n=Object(f.a)(e,2),t=n[0],i=n[1],o=Be(t),c=o.data,a=void 0===c?[]:c,s=o.isLoading,u=a.map((function(e){var n=e.id,t=e.title,r=e.poster_path,i=e.release_date;return{id:n,title:t,image:W(r,"poster"),caption:new Date(i).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}})),l=function(){return i(t===$.Movie?$.Tv:$.Movie)};return Object(v.jsxs)("section",{id:"trending",children:[Object(v.jsxs)(pe,{children:[Object(v.jsx)("h1",{children:"Trending"}),Object(v.jsxs)(ge,{children:[Object(v.jsx)(S,{primary:t===$.Movie,disabled:t===$.Movie,onClick:l,children:$.Movie}),Object(v.jsx)(S,{primary:t===$.Tv,disabled:t===$.Tv,onClick:l,children:$.Tv})]})]}),Object(v.jsx)(me,{list:u,ratio:"2/3",loading:s})]})},Fe=function(){var e,n=null===(e=window)||void 0===e?void 0:e.matchMedia("(prefers-color-scheme: dark)"),t=Object(r.useState)(null===n||void 0===n?void 0:n.matches),i=Object(f.a)(t,2),o=i[0],c=i[1];return Object(r.useEffect)((function(){var e=function(e){var n=e.matches;return c(n)};return null===n||void 0===n||n.addListener(e),function(){return n.removeEventListener("change",e)}}),[n]),o},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n="200",t="100%",r="50%",i={brand:"hsl(".concat(n," ").concat(t," ").concat(r),text1:"hsl(".concat(n," ").concat(t," 10%)"),text2:"hsl(".concat(n," 30% 30%)"),surface1:"hsl(".concat(n," 25% 90%)"),surface2:"hsl(".concat(n," 20% 99%)"),surface3:"hsl(".concat(n," 20% 92%)"),surface4:"hsl(".concat(n," 20% 85%)"),surfaceShadow:"hsl(".concat(n," 10% 20%)"),shadowStrength:"0.02"},o={brand:"hsl(".concat(n," calc(").concat(t," / 2) calc(").concat(r," / 1.5))"),text1:"hsl(".concat(n," 15% 85%)"),text2:"hsl(".concat(n," 5% 65%)"),surface1:"hsl(".concat(n," 10% 10%)"),surface2:"hsl(".concat(n," 10% 15%)"),surface3:"hsl(".concat(n," 5% 20%)"),surface4:"hsl(".concat(n," 5% 25%)"),surfaceShadow:"hsl(".concat(n," 50% 3%)"),shadowStrength:"0.8"};function c(e){for(var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=1,r=1.25;e>1;)t=n?t*r:t/r,e--;return"calc(1rem * ".concat(t,")")}return{colors:e?o:i,size:{xxxs:c(5,!1),xxs:c(4,!1),xs:c(3,!1),sm:c(2,!1),md:c(1),lg:c(2),xl:c(3),xxl:c(4),xxxl:c(5)},mediaQueries:{below1400:"only screen and (max-width: 1400px)",below768:"only screen and (max-width: 768px)",below375:"only screen and (max-width: 375px)"}}},Qe=(Ie(),Object(l.b)(We||(We=Object(w.a)(["\n  html {\n    /* grow as per screen width */\n    font-size: calc(1px + 1vw);\n    line-height: calc(1.5rem + 0.5vw);\n    block-size: 100%;\n    background-color: ",";\n    color: ",";\n    font-family: 'Roboto Mono', monospace, system-ui, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n    @media "," {\n      font-size: 16px;\n    }\n\n    @media "," {\n      font-size: 14px;\n    }\n\n    @media "," {\n      font-size: 12px;\n    }\n  }\n\n  body {\n    background-color: ",";\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"])),(function(e){return e.theme.colors.surface1}),(function(e){return e.theme.colors.text1}),(function(e){return e.theme.mediaQueries.below1400}),(function(e){return e.theme.mediaQueries.below768}),(function(e){return e.theme.mediaQueries.below375}),(function(e){return e.theme.colors.surface1})));var Ue=function(){var e=Fe(),n=Ie(e),t=new u.QueryClient({defaultOptions:{queries:{refetchOnWindowFocus:!1,staleTime:1/0}}});return Object(v.jsxs)(l.a,{theme:n,children:[Object(v.jsx)(Qe,{}),Object(v.jsx)(O,{children:Object(v.jsx)(a.SkeletonTheme,{color:n.colors.surface2,highlightColor:n.colors.surface1,children:Object(v.jsxs)(u.QueryClientProvider,{client:t,children:[Object(v.jsx)(De,{}),Object(v.jsx)(Pe,{}),Object(v.jsx)(_e,{})]})})})]})},Ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),r(e),i(e),o(e),c(e)}))};c.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(Ue,{})}),document.getElementById("root")),Ae()}},[[65,1,2]]]);
//# sourceMappingURL=main.0cfb7dcf.chunk.js.map