(this["webpackJsonpmovie-hub"]=this["webpackJsonpmovie-hub"]||[]).push([[0],{34:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),c=t(18),a=t.n(c),o=t(8),s=t.n(o),u=t(3),l=t(2),d=t(4);var h=t(1),p={trending:{movie:[],tv:[]},movies:{upcoming:[],popular:[]}};function f(e,n){switch(n.type){case"UPDATE_TRENDING_BY_DAY":return Object(d.a)(Object(d.a)({},e),{},{trending:n.payload});case"UPDATE_POPULAR_MOVIES":return Object(d.a)(Object(d.a)({},e),{},{movies:Object(d.a)(Object(d.a)({},e.movies),{},{popular:n.payload})});case"UPDATE_UPCOMING_MOVIES":return Object(d.a)(Object(d.a)({},e),{},{movies:Object(d.a)(Object(d.a)({},e.movies),{},{upcoming:n.payload})});default:return e}}var b,m,j,v,g,x,O,_,w=function(){var e=r.createContext(void 0);return[function(){var n=r.useContext(e);if(void 0===n)throw new Error("useContext must be inside a Provider with a value");return n},e.Provider]}(),y=Object(l.a)(w,2),k=y[0],z=y[1],P=function(e){var n=e.children,t=Object(r.useReducer)(f,p),i=Object(l.a)(t,2),c=i[0],a=i[1];return Object(h.jsx)(z,{value:Object(d.a)(Object(d.a)({},c),{},{dispatch:a}),children:n})},E=t(20),D=t(5),S=["primary","onClick","children","disabled"],C=u.c.button(b||(b=Object(D.a)(["\n  width: min-content;\n  height: min-content;\n  color: ",";\n\n  border-radius: ",";\n  border: 1px solid ",";\n  font-weight: 600;\n\n  background-color: ",";\n\n  text-transform: capitalize;\n  cursor: pointer;\n\n  padding-block: ",";\n  padding-inline: ",";\n"])),(function(e){var n=e.theme;return e.primary?n.colors.surface1:n.colors.text1}),(function(e){return e.theme.size.xs}),(function(e){return e.theme.colors.text1}),(function(e){var n=e.theme;return e.primary?n.colors.text1:"inherit"}),(function(e){return e.theme.size.xxs}),(function(e){return e.theme.size.xl})),U=function(e){var n=e.primary,t=void 0===n||n,r=e.onClick,i=e.children,c=e.disabled,a=void 0!==c&&c,o=Object(E.a)(e,S);return Object(h.jsx)(C,Object(d.a)(Object(d.a)({primary:t,onClick:r,disabled:a},o),{},{children:i}))},L=u.c.ul(m||(m=Object(D.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  gap: ",";\n\n  padding-inline: ",";\n  padding-block: ",";\n\n  overflow-x: auto;\n  overscroll-behavior-inline: contain;\n  scroll-snap-type: inline mandatory;\n  scroll-padding-left: ",";\n  scroll-padding-right: ",";\n  scroll-padding-inline: ",";\n\n  @media (prefers-reduced-motion: no-preference) {\n    & {\n      scroll-behavior: smooth;\n    }\n  }\n"])),(function(e){return e.theme.size.xl}),(function(e){return e.theme.size.lg}),(function(e){return e.theme.size.xs}),(function(e){return e.theme.size.xl}),(function(e){return e.theme.size.xl}),(function(e){return e.theme.size.xl})),T=u.c.li(j||(j=Object(D.a)(["\n  display: inline-block;\n  inline-size: ",";\n  block-size: min-content;\n\n  &:last-of-type figure {\n    position: relative;\n\n    &::after {\n      content: '';\n      position: absolute;\n\n      inline-size: ",";\n      block-size: 100%;\n\n      inset-block-start: 0;\n      inset-inline-end: calc("," * -1);\n    }\n  }\n"])),(function(e){return e.width}),(function(e){return e.theme.size.lg}),(function(e){return e.theme.size.lg})),A=u.c.figure(v||(v=Object(D.a)(["\n  scroll-snap-align: start;\n\n  display: grid;\n  gap: calc("," / 2);\n  margin: 0;\n\n  cursor: pointer;\n  user-select: none;\n\n  outline-offset: 12px;\n\n  &:focus {\n    outline-offset: 7px;\n  }\n"])),(function(e){return e.theme.size.lg})),M=u.c.img(g||(g=Object(D.a)(["\n  inline-size: ",";\n  block-size: ",";\n  object-fit: cover;\n\n  border-radius: 1ex;\n  border: none;\n  overflow: hidden;\n\n  background-image: linear-gradient(to bottom, hsl(0 0% 40%), hsl(0 0% 20%));\n"])),(function(e){return e.width}),(function(e){return e.height})),I=u.c.figcaption(x||(x=Object(D.a)(["\n  line-height: ",";\n  font-weight: 600;\n  font-size: ",";\n\n  & > p {\n    font-size: ",";\n    font-weight: 400;\n    color: ",";\n    padding-block: ",";\n  }\n"])),(function(e){return e.theme.size.md}),(function(e){return e.theme.size.md}),(function(e){return e.theme.size.sm}),(function(e){return e.theme.colors.text2}),(function(e){return e.theme.size.sm})),R=function(e){var n=e.list,t=e.size,r=void 0===t?"10em:10em":t,i=e.loading,c=void 0!==i&&i,a=r.split(":"),o=Object(l.a)(a,2),u=o[0],d=o[1],p=c?Array(10).fill({}):n;return Object(h.jsx)(L,{children:p.map((function(e,n){return Object(h.jsx)(T,{width:u,height:d,children:Object(h.jsxs)(A,{children:[Object(h.jsx)("picture",{children:e.image?Object(h.jsx)(M,{alt:e.title,loading:"lazy",src:e.image,width:u,height:d}):Object(h.jsx)(s.a,{width:u,height:d})}),Object(h.jsxs)(I,{children:[e.title||Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(s.a,{}),Object(h.jsx)(s.a,{width:"65%"})]}),e.caption&&Object(h.jsx)("p",{children:e.caption})]})]})},e.id||n)}))})},N=u.c.header(O||(O=Object(D.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  justify-content: start;\n  padding-inline: ",";\n  padding-block: ",";\n  grid-gap: ",";\n\n  & h1 {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.size.lg}),(function(e){return e.theme.size.xs}),(function(e){return e.theme.size.xs}),(function(e){return e.theme.size.xl})),G=u.c.div(_||(_=Object(D.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  width: min-content;\n  border-radius: ",";\n  border: 1px solid ",";\n\n  & > button {\n    border: none;\n    border-radius: inherit;\n  }\n"])),(function(e){return e.theme.size.md}),(function(e){return e.theme.colors.text1})),B=t(6),F=t.n(B),V=t(7);function Y(e,n){var t=Object(r.useState)({state:"LOADING"}),i=Object(l.a)(t,2),c=i[0],a=i[1],o=k().dispatch,s=Object(r.useCallback)(Object(V.a)(F.a.mark((function t(){var r,i=arguments;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({state:"LOADING"}),t.next=4,e.apply(void 0,i);case 4:r=t.sent,a({state:"SUCCESS",data:r}),n&&o({type:n,payload:r}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),a({state:"ERROR",error:"Network Error"});case 13:case"end":return t.stop()}}),t,null,[[0,9]])}))),[o,e,n]);return[c,s]}var Q={apiKey:"f274625ee8526fcb3150182ed7668864",baseURL:"https://api.themoviedb.org/3/",imageBaseURL:"https://image.tmdb.org/t/p/"},J=Q.apiKey,K=Q.baseURL,q=Q.imageBaseURL,H=function(e){return"".concat(K).concat(e,"?api_key=").concat(J)};function W(e,n,t){return"".concat(q).concat(t).concat(e)}var X,Z=function(){var e=Object(V.a)(F.a.mark((function e(){var n,t,r,i,c,a,o,s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=H("trending/movie/day"),t=H("trending/tv/day"),e.next=4,Promise.all([n,t].map(function(){var e=Object(V.a)(F.a.mark((function e(n){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 4:return r=e.sent,i=Object(l.a)(r,2),c=i[0],a=i[1],o=c.results.map((function(e){return{title:e.title,id:e.id,backdrop_path:e.backdrop_path,poster_path:e.poster_path,vote_average:e.vote_average,release_date:e.release_date}})),s=a.results.map((function(e){var n=e.name,t=e.id,r=e.backdrop_path,i=e.poster_path,c=e.vote_average;return{title:n,release_date:e.first_air_date,id:t,backdrop_path:r,poster_path:i,vote_average:c}})),e.abrupt("return",{movie:o,tv:s});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(V.a)(F.a.mark((function e(){var n,t,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(H("movie/popular"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,r=t.results.map((function(e){return{title:e.title,id:e.id,backdrop_path:e.backdrop_path,poster_path:e.poster_path,vote_average:e.vote_average,release_date:e.release_date}})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(V.a)(F.a.mark((function e(){var n,t,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(H("movie/upcoming"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,r=t.results.map((function(e){return{title:e.title,id:e.id,backdrop_path:e.backdrop_path,poster_path:e.poster_path,vote_average:e.vote_average,release_date:e.release_date}})),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!function(e){e.Popular="popular",e.Upcoming="upcoming"}(X||(X={}));var ne,te,re=function(){var e=Object(r.useState)(X.Popular),n=Object(l.a)(e,2),t=n[0],i=n[1],c=Y(t===X.Popular?$:ee,t===X.Popular?"UPDATE_POPULAR_MOVIES":"UPDATE_UPCOMING_MOVIES"),a=Object(l.a)(c,2),o=a[0],s=a[1];Object(r.useEffect)((function(){s()}),[s]);var u=k().movies,d=u.popular,p=u.upcoming,f=(t===X.Popular?d:p).map((function(e){var n=e.id,t=e.title,r=e.backdrop_path,i=e.release_date;return{id:n,title:t,image:r&&W(r,0,"w300"),caption:new Date(i).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}}));return console.log(o),Object(h.jsxs)("section",{id:"discover-movies",children:[Object(h.jsxs)(N,{children:[Object(h.jsx)("h1",{children:"Discover Movies"}),Object(h.jsxs)(G,{children:[Object(h.jsx)(U,{primary:t===X.Popular,onClick:function(){return i(X.Popular)},children:"Popular"}),Object(h.jsx)(U,{primary:t===X.Upcoming,onClick:function(){return i(X.Upcoming)},children:"Upcoming"})]})]}),Object(h.jsx)(R,{list:f,loading:"LOADING"===o.state,size:"16em:9em"})]})};!function(e){e.Movie="movie",e.Tv="tv"}(ne||(ne={}));var ie,ce=u.c.section(te||(te=Object(D.a)(["\n  background-image: linear-gradient(\n    to bottom,\n    ",",\n    ","\n  );\n"])),(function(e){return e.theme.colors.surface2}),(function(e){return e.theme.colors.surface3})),ae=function(){var e=Object(r.useState)(ne.Movie),n=Object(l.a)(e,2),t=n[0],i=n[1],c=Y(Z,"UPDATE_TRENDING_BY_DAY"),a=Object(l.a)(c,2),o=a[0],s=a[1],u=k().trending,d=u.movie,p=u.tv;Object(r.useEffect)((function(){s()}),[s]);var f=("movie"===t?d:p).map((function(e){var n=e.id,t=e.title,r=e.poster_path,i=e.release_date;return{id:n,title:t,image:r&&W(r,0,"w185"),caption:new Date(i).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}}))||[];return Object(h.jsxs)(ce,{children:[Object(h.jsxs)(N,{children:[Object(h.jsx)("h1",{children:"Trending"}),Object(h.jsxs)(G,{children:[Object(h.jsx)(U,{primary:t===ne.Movie,onClick:function(){return i(ne.Movie)},children:ne.Movie}),Object(h.jsx)(U,{primary:t===ne.Tv,onClick:function(){return i(ne.Tv)},children:ne.Tv})]})]}),Object(h.jsx)(R,{list:f,size:"10em:15em",loading:"LOADING"===o.state})]})},oe=function(){var e,n=null===(e=window)||void 0===e?void 0:e.matchMedia("(prefers-color-scheme: dark)"),t=Object(r.useState)(null===n||void 0===n?void 0:n.matches),i=Object(l.a)(t,2),c=i[0],a=i[1];return Object(r.useEffect)((function(){var e=function(e){var n=e.matches;return a(n)};return null===n||void 0===n||n.addListener(e),function(){return n.removeEventListener("change",e)}}),[n]),c},se=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n="200",t="100%",r="50%",i={brand:"hsl(".concat(n," ").concat(t," ").concat(r),text1:"hsl(".concat(n," ").concat(t," 10%)"),text2:"hsl(".concat(n," 30% 30%)"),surface1:"hsl(".concat(n," 25% 90%)"),surface2:"hsl(".concat(n," 20% 99%)"),surface3:"hsl(".concat(n," 20% 92%)"),surface4:"hsl(".concat(n," 20% 85%)"),surfaceShadow:"hsl(".concat(n," 10% 20%)"),shadowStrength:"0.02"},c={brand:"hsl(".concat(n," calc(").concat(t," / 2) calc(").concat(r," / 1.5))"),text1:"hsl(".concat(n," 15% 85%)"),text2:"hsl(".concat(n," 5% 65%)"),surface1:"hsl(".concat(n," 10% 10%)"),surface2:"hsl(".concat(n," 10% 15%)"),surface3:"hsl(".concat(n," 5% 20%)"),surface4:"hsl(".concat(n," 5% 25%)"),surfaceShadow:"hsl(".concat(n," 50% 3%)"),shadowStrength:"0.8"};function a(e){for(var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=1,r=1.25;e>1;)t=n?t*r:t/r,e--;return"calc(1em * ".concat(t,")")}return{colors:e?c:i,size:{xxxs:a(5,!1),xxs:a(4,!1),xs:a(3,!1),sm:a(2,!1),md:a(1),lg:a(2),xl:a(3),xxl:a(4),xxxl:a(5)},mediaQueries:{below768:"only screen and (max-width: 768px)",below375:"only screen and (max-width: 375px)"}}},ue=(se(),Object(u.b)(ie||(ie=Object(D.a)(["\n  html {\n    font-size: 16px;\n    block-size: 100%;\n    background-color: ",";\n    color: ",";\n    font-family: 'Roboto Mono', monospace, system-ui, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n    @media "," {\n      font-size: 14px;\n    }\n\n    @media "," {\n      font-size: 12px;\n    }\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"])),(function(e){return e.theme.colors.surface1}),(function(e){return e.theme.colors.text1}),(function(e){return e.theme.mediaQueries.below768}),(function(e){return e.theme.mediaQueries.below375})));var le=function(){var e=oe(),n=se(e);return Object(h.jsxs)(u.a,{theme:n,children:[Object(h.jsx)(ue,{}),Object(h.jsx)(P,{children:Object(h.jsxs)(o.SkeletonTheme,{color:n.colors.surface2,highlightColor:n.colors.surface1,children:[Object(h.jsx)(ae,{}),Object(h.jsx)(re,{})]})})]})},de=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,c=n.getLCP,a=n.getTTFB;t(e),r(e),i(e),c(e),a(e)}))};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(le,{})}),document.getElementById("root")),de()}},[[34,1,2]]]);
//# sourceMappingURL=main.15561509.chunk.js.map