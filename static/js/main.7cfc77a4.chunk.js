(this["webpackJsonpmovie-hub"]=this["webpackJsonpmovie-hub"]||[]).push([[0],{34:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),c=t(18),o=t.n(c),a=t(7),s=t.n(a),u=t(2),l=t(3),d=t(6);var h=t(1),f={trending:{movie:[],tv:[]}};function b(n,e){return"UPDATE_TRENDING_BY_DAY"===e.type?Object(d.a)(Object(d.a)({},n),{},{trending:e.payload}):n}var m,p,v,g,j,x,O,w,z=function(){var n=r.createContext(void 0);return[function(){var e=r.useContext(n);if(void 0===e)throw new Error("useContext must be inside a Provider with a value");return e},n.Provider]}(),y=Object(l.a)(z,2),k=y[0],_=y[1],C=function(n){var e=n.children,t=Object(r.useReducer)(b,f),i=Object(l.a)(t,2),c=i[0],o=i[1];return Object(h.jsx)(_,{value:Object(d.a)(Object(d.a)({},c),{},{dispatch:o}),children:e})},S=t(4),E=t(20),T=["primary","secondary","onClick","children","disabled"],D=u.c.button(m||(m=Object(S.a)(["\n  width: min-content;\n  height: min-content;\n  color: ",";\n\n  border-radius: ",";\n  border: 1px solid ",";\n  font-weight: 600;\n\n  background-color: ",";\n\n  text-transform: capitalize;\n  cursor: pointer;\n\n  padding-block: ",";\n  padding-inline: ",";\n"])),(function(n){var e=n.theme;return n.primary?e.colors.surface1:e.colors.text1}),(function(n){return n.theme.size.xs}),(function(n){return n.theme.colors.text1}),(function(n){var e=n.theme;return n.primary?e.colors.text1:"inherit"}),(function(n){return n.theme.size.xxs}),(function(n){return n.theme.size.xl})),L=function(n){var e=n.primary,t=void 0===e||e,r=n.secondary,i=void 0!==r&&r,c=n.onClick,o=n.children,a=n.disabled,s=void 0!==a&&a,u=Object(E.a)(n,T);return Object(h.jsx)(D,Object(d.a)(Object(d.a)({primary:t,secondary:i,onClick:c,disabled:s},u),{},{children:o}))},R=u.c.ul(p||(p=Object(S.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  gap: ",";\n\n  padding-inline: ",";\n  padding-block: ",";\n\n  overflow-x: auto;\n  overscroll-behavior-inline: contain;\n  scroll-snap-type: inline mandatory;\n  scroll-padding-left: ",";\n  scroll-padding-right: ",";\n  scroll-padding-inline: ",";\n\n  @media (prefers-reduced-motion: no-preference) {\n    & {\n      scroll-behavior: smooth;\n    }\n  }\n"])),(function(n){return n.theme.size.xl}),(function(n){return n.theme.size.lg}),(function(n){return n.theme.size.sm}),(function(n){return n.theme.size.xl}),(function(n){return n.theme.size.xl}),(function(n){return n.theme.size.xl})),M=u.c.li(v||(v=Object(S.a)(["\n  display: inline-block;\n  inline-size: ",";\n  block-size: min-content;\n\n  &:last-of-type figure {\n    position: relative;\n\n    &::after {\n      content: '';\n      position: absolute;\n\n      inline-size: ",";\n      block-size: 100%;\n\n      inset-block-start: 0;\n      inset-inline-end: calc("," * -1);\n    }\n  }\n"])),(function(n){return n.width}),(function(n){return n.theme.size.lg}),(function(n){return n.theme.size.lg})),N=u.c.figure(g||(g=Object(S.a)(["\n  scroll-snap-align: start;\n\n  display: grid;\n  gap: calc("," / 2);\n  margin: 0;\n\n  cursor: pointer;\n  user-select: none;\n\n  outline-offset: 12px;\n\n  &:focus {\n    outline-offset: 7px;\n  }\n"])),(function(n){return n.theme.size.lg})),A=u.c.img(j||(j=Object(S.a)(["\n  inline-size: ",";\n  block-size: ",";\n  object-fit: cover;\n\n  border-radius: 1ex;\n  border: none;\n  overflow: hidden;\n\n  background-image: linear-gradient(to bottom, hsl(0 0% 40%), hsl(0 0% 20%));\n"])),(function(n){return n.width}),(function(n){return n.height})),P=u.c.figcaption(x||(x=Object(S.a)(["\n  line-height: ",";\n  font-weight: 600;\n  font-size: ",";\n\n  & > p {\n    font-size: ",";\n    font-weight: 400;\n    color: ",";\n    padding-block: ",";\n  }\n"])),(function(n){return n.theme.size.md}),(function(n){return n.theme.size.md}),(function(n){return n.theme.size.sm}),(function(n){return n.theme.colors.text2}),(function(n){return n.theme.size.sm})),U=function(n){var e=n.list,t=n.size,r=void 0===t?"10em:10em":t,i=n.loading,c=void 0!==i&&i,o=r.split(":"),a=Object(l.a)(o,2),u=a[0],d=a[1],f=c?Array(10).fill({}):e;return Object(h.jsx)(R,{children:f.map((function(n,e){return Object(h.jsx)(M,{width:u,height:d,children:Object(h.jsxs)(N,{children:[Object(h.jsx)("picture",{children:n.image?Object(h.jsx)(A,{alt:n.title,loading:"lazy",src:n.image,width:u,height:d}):Object(h.jsx)(s.a,{width:u,height:d})}),Object(h.jsxs)(P,{children:[n.title||Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(s.a,{}),Object(h.jsx)(s.a,{width:"65%"})]}),n.caption&&Object(h.jsx)("p",{children:n.caption})]})]})},n.id||e)}))})},B=t(5),I=t.n(B),F=t(8);!function(n){n.Movie="movie",n.Tv="tv"}(O||(O={})),function(n){n.En="en",n.Nl="nl"}(w||(w={}));var G={apiKey:"f274625ee8526fcb3150182ed7668864",baseURL:"https://api.themoviedb.org/3/",imageBaseURL:"https://image.tmdb.org/t/p/"},Y=G.apiKey,Q=G.baseURL,J=G.imageBaseURL,K=function(n){return"".concat(Q).concat(n,"?api_key=").concat(Y)};var q,H,V,W,X=function(){var n=Object(F.a)(I.a.mark((function n(){var e,t,r,i,c,o,a,s;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=K("trending/movie/day"),t=K("trending/tv/day"),n.next=4,Promise.all([e,t].map(function(){var n=Object(F.a)(I.a.mark((function n(e){var t;return I.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:return t=n.sent,n.abrupt("return",t.json());case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 4:return r=n.sent,i=Object(l.a)(r,2),c=i[0],o=i[1],a=c.results.map((function(n){return{title:n.title,id:n.id,backdrop_path:n.backdrop_path,poster_path:n.poster_path,vote_average:n.vote_average,release_date:n.release_date}})),s=o.results.map((function(n){var e=n.name,t=n.id,r=n.backdrop_path,i=n.poster_path,c=n.vote_average;return{title:e,release_date:n.first_air_date,id:t,backdrop_path:r,poster_path:i,vote_average:c}})),n.abrupt("return",{movie:a,tv:s});case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),Z=u.c.section(q||(q=Object(S.a)(["\n  background-image: linear-gradient(\n    to bottom,\n    ",",\n    ","\n  );\n"])),(function(n){return n.theme.colors.surface2}),(function(n){return n.theme.colors.surface3})),$=u.c.header(H||(H=Object(S.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  width: min-content;\n  padding-inline: ",";\n  padding-block: ",";\n  grid-gap: ",";\n\n  & h1 {\n    font-size: ",";\n  }\n"])),(function(n){return n.theme.size.lg}),(function(n){return n.theme.size.xs}),(function(n){return n.theme.size.xs}),(function(n){return n.theme.size.xl})),nn=u.c.div(V||(V=Object(S.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  width: min-content;\n  border-radius: ",";\n  border: 1px solid ",";\n\n  & > button {\n    border: none;\n    border-radius: inherit;\n  }\n"])),(function(n){return n.theme.size.md}),(function(n){return n.theme.colors.text1})),en=function(){var n=Object(r.useState)(O.Movie),e=Object(l.a)(n,2),t=e[0],i=e[1],c=function(n,e){var t=Object(r.useState)({state:"LOADING"}),i=Object(l.a)(t,2),c=i[0],o=i[1],a=k().dispatch,s=Object(r.useCallback)(Object(F.a)(I.a.mark((function t(){var r,i=arguments;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.apply(void 0,i);case 3:r=t.sent,o({state:"SUCCESS",data:r}),e&&a({type:e,payload:r}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),o({state:"ERROR",error:"Network Error"});case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),[a,n,e]);return[c,s]}(X,"UPDATE_TRENDING_BY_DAY"),o=Object(l.a)(c,2),a=o[0],s=o[1],u=k().trending,d=u.movie,f=u.tv;Object(r.useEffect)((function(){s()}),[s]);var b=("movie"===t?d:f).map((function(n){var e,t,r=n.id,i=n.title,c=n.poster_path,o=n.release_date;return{id:r,title:i,image:c&&(e=c,t="w185","".concat(J).concat(t).concat(e)),caption:new Date(o).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}}))||[];return Object(h.jsxs)(Z,{children:[Object(h.jsxs)($,{children:[Object(h.jsx)("h1",{children:"Trending"}),Object(h.jsxs)(nn,{children:[Object(h.jsx)(L,{primary:t===O.Movie,onClick:function(){return i(O.Movie)},children:O.Movie}),Object(h.jsx)(L,{primary:t===O.Tv,onClick:function(){return i(O.Tv)},children:O.Tv})]})]}),Object(h.jsx)(U,{list:b,size:"10em:15em",loading:"LOADING"===a.state})]})},tn=function(){var n,e=null===(n=window)||void 0===n?void 0:n.matchMedia("(prefers-color-scheme: dark)"),t=Object(r.useState)(null===e||void 0===e?void 0:e.matches),i=Object(l.a)(t,2),c=i[0],o=i[1];return Object(r.useEffect)((function(){var n=function(n){var e=n.matches;return o(e)};return null===e||void 0===e||e.addListener(n),function(){return e.removeEventListener("change",n)}}),[e]),c},rn=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e="200",t="100%",r="50%",i={brand:"hsl(".concat(e," ").concat(t," ").concat(r),text1:"hsl(".concat(e," ").concat(t," 10%)"),text2:"hsl(".concat(e," 30% 30%)"),surface1:"hsl(".concat(e," 25% 90%)"),surface2:"hsl(".concat(e," 20% 99%)"),surface3:"hsl(".concat(e," 20% 92%)"),surface4:"hsl(".concat(e," 20% 85%)"),surfaceShadow:"hsl(".concat(e," 10% 20%)"),shadowStrength:"0.02"},c={brand:"hsl(".concat(e," calc(").concat(t," / 2) calc(").concat(r," / 1.5))"),text1:"hsl(".concat(e," 15% 85%)"),text2:"hsl(".concat(e," 5% 65%)"),surface1:"hsl(".concat(e," 10% 10%)"),surface2:"hsl(".concat(e," 10% 15%)"),surface3:"hsl(".concat(e," 5% 20%)"),surface4:"hsl(".concat(e," 5% 25%)"),surfaceShadow:"hsl(".concat(e," 50% 3%)"),shadowStrength:"0.8"};function o(n){for(var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=1,r=1.25;n>1;)t=e?t*r:t/r,n--;return"calc(1em * ".concat(t,")")}return{colors:n?c:i,size:{xxxs:o(5,!1),xxs:o(4,!1),xs:o(3,!1),sm:o(2,!1),md:o(1),lg:o(2),xl:o(3),xxl:o(4),xxxl:o(5)},mediaQueries:{below768:"only screen and (max-width: 768px)",below375:"only screen and (max-width: 375px)"}}},cn=(rn(),Object(u.b)(W||(W=Object(S.a)(["\n  html {\n    font-size: 16px;\n    block-size: 100%;\n    background-color: ",";\n    color: ",";\n    font-family: 'Roboto Mono', monospace, system-ui, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n    @media "," {\n      font-size: 14px;\n    }\n\n    @media "," {\n      font-size: 12px;\n    }\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"])),(function(n){return n.theme.colors.surface1}),(function(n){return n.theme.colors.text1}),(function(n){return n.theme.mediaQueries.below768}),(function(n){return n.theme.mediaQueries.below375})));var on=function(){var n=tn(),e=rn(n);return Object(h.jsxs)(u.a,{theme:e,children:[Object(h.jsx)(cn,{}),Object(h.jsx)(C,{children:Object(h.jsx)(a.SkeletonTheme,{color:e.colors.surface2,highlightColor:e.colors.surface1,children:Object(h.jsx)(en,{})})})]})},an=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;t(n),r(n),i(n),c(n),o(n)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(on,{})}),document.getElementById("root")),an()}},[[34,1,2]]]);
//# sourceMappingURL=main.7cfc77a4.chunk.js.map