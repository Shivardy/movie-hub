(this["webpackJsonpmovie-hub"]=this["webpackJsonpmovie-hub"]||[]).push([[0],{34:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t.n(r),a=t(18),i=t.n(a),o=t(8),s=t.n(o),u=t(5),l=t(2),d=t(3);function f(e,n){switch(n.type){case"UPDATE_TRENDING_MOVIES_BY_DAY":return Object(l.a)(Object(l.a)({},e),{},{movies:Object(l.a)(Object(l.a)({},e.movies),{},{trending:n.payload})});case"UPDATE_TRENDING_TV_BY_DAY":return Object(l.a)(Object(l.a)({},e),{},{tv:Object(l.a)(Object(l.a)({},e.movies),{},{trending:n.payload})});case"UPDATE_POPULAR_MOVIES":return Object(l.a)(Object(l.a)({},e),{},{movies:Object(l.a)(Object(l.a)({},e.movies),{},{popular:n.payload})});case"UPDATE_UPCOMING_MOVIES":return Object(l.a)(Object(l.a)({},e),{},{movies:Object(l.a)(Object(l.a)({},e.movies),{},{upcoming:n.payload})});case"UPDATE_MOVIES_BY_GENRE":var t=e.movies.genres.map((function(e){return e.id===n.payload.genreId&&(e.data=n.payload.data),e}));return Object(l.a)(Object(l.a)({},e),{},{movies:Object(l.a)(Object(l.a)({},e.movies),{},{genres:t})});case"UPDATE_TV_BY_GENRE":var r=e.tv.genres.map((function(e){return e.id===n.payload.genreId&&(e.data=n.payload.data),e}));return Object(l.a)(Object(l.a)({},e),{},{tv:Object(l.a)(Object(l.a)({},e.tv),{},{genres:r})});case"UPDATE_GENRES":return Object(l.a)(Object(l.a)({},e),{},{tv:Object(l.a)(Object(l.a)({},e.tv),{},{genres:n.payload.tvGenres}),movies:Object(l.a)(Object(l.a)({},e.movies),{},{genres:n.payload.movieGenres})});default:return e}}var p,b,h,m,j,v,O,g,x={movies:{upcoming:[],popular:[],trending:[],genres:[]},tv:{trending:[],genres:[]}},w=t(1),_=function(){var e=r.createContext(void 0);return[function(){var n=r.useContext(e);if(void 0===n)throw new Error("useContext must be inside a Provider with a value");return n},e.Provider]}(),y=Object(d.a)(_,2),k=y[0],E=y[1],z=function(e){var n=e.children,t=Object(r.useReducer)(f,x),c=Object(d.a)(t,2),a=c[0],i=c[1];return Object(w.jsx)(E,{value:Object(l.a)(Object(l.a)({},a),{},{dispatch:i}),children:n})},D=t(20),S=t(6),P=["primary","onClick","children","disabled"],T=u.c.button(p||(p=Object(S.a)(["\n  width: min-content;\n  height: min-content;\n  color: ",";\n\n  border-radius: ",";\n  border: 1px solid ",";\n  font-weight: 600;\n\n  background-color: ",";\n\n  text-transform: capitalize;\n  cursor: pointer;\n\n  padding-block: ",";\n  padding-inline: ",";\n"])),(function(e){var n=e.theme;return e.primary?n.colors.surface1:n.colors.text1}),(function(e){return e.theme.size.xs}),(function(e){return e.theme.colors.text1}),(function(e){var n=e.theme;return e.primary?n.colors.text1:"inherit"}),(function(e){return e.theme.size.xxs}),(function(e){return e.theme.size.xl})),M=function(e){var n=e.primary,t=void 0===n||n,r=e.onClick,c=e.children,a=e.disabled,i=void 0!==a&&a,o=Object(D.a)(e,P);return Object(w.jsx)(T,Object(l.a)(Object(l.a)({primary:t,onClick:r,disabled:i},o),{},{children:c}))},A=u.c.ul(b||(b=Object(S.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  gap: ",";\n\n  padding-inline: ",";\n  padding-block: ",";\n\n  overflow-x: auto;\n  overscroll-behavior-inline: contain;\n  scroll-snap-type: inline mandatory;\n  scroll-padding-left: ",";\n  scroll-padding-right: ",";\n  scroll-padding-inline: ",";\n\n  scrollbar-width: none;\n\n  &::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n\n  @media (prefers-reduced-motion: no-preference) {\n    & {\n      scroll-behavior: smooth;\n    }\n  }\n"])),(function(e){return e.theme.size.xl}),(function(e){return e.theme.size.lg}),(function(e){return e.theme.size.xs}),(function(e){return e.theme.size.xl}),(function(e){return e.theme.size.xl}),(function(e){return e.theme.size.xl})),U=u.c.li(h||(h=Object(S.a)(["\n  display: inline-block;\n  inline-size: ",";\n  block-size: min-content;\n\n  &:last-of-type figure {\n    position: relative;\n\n    &::after {\n      content: '';\n      position: absolute;\n\n      inline-size: ",";\n      block-size: 100%;\n\n      inset-block-start: 0;\n      inset-inline-end: calc("," * -1);\n    }\n  }\n"])),(function(e){return e.inlineSize}),(function(e){return e.theme.size.lg}),(function(e){return e.theme.size.lg})),I=u.c.figure(m||(m=Object(S.a)(["\n  scroll-snap-align: start;\n\n  display: grid;\n  gap: calc("," / 2);\n  margin: 0;\n\n  cursor: pointer;\n  user-select: none;\n\n  outline-offset: 12px;\n\n  &:focus {\n    outline-offset: 7px;\n  }\n"])),(function(e){return e.theme.size.lg})),N=u.c.img(j||(j=Object(S.a)(["\n  inline-size: ",";\n  block-size: ",";\n\n  aspect-ratio: ",";\n\n  object-fit: cover;\n\n  border-radius: 1ex;\n  border: none;\n  overflow: hidden;\n\n  background-image: linear-gradient(to bottom, hsl(0 0% 40%), hsl(0 0% 20%));\n"])),(function(e){return e.inlineSize}),(function(e){return e.blockSize}),(function(e){return e.aspectRatio})),R=u.c.figcaption(v||(v=Object(S.a)(["\n  line-height: ",";\n  font-weight: 600;\n  font-size: ",";\n\n  & > p {\n    font-size: ",";\n    font-weight: 400;\n    color: ",";\n    padding-block: ",";\n  }\n"])),(function(e){return e.theme.size.md}),(function(e){return e.theme.size.md}),(function(e){return e.theme.size.sm}),(function(e){return e.theme.colors.text2}),(function(e){return e.theme.size.sm})),G=function(e){var n=e.list,t=e.ratio,r=void 0===t?"1/1":t,c=e.loading,a=void 0!==c&&c,i=r.split("/").map((function(e){return+e})),o=Object(d.a)(i,2),u=o[0],l=o[1],f="10em",p=u>l?f:"".concat(10*l/u,"em"),b=u>l?"".concat(10*u/l,"em"):f,h=a?Array(10).fill({}):n;return Object(w.jsx)(A,{children:h.map((function(e,n){return Object(w.jsx)(U,{inlineSize:b,children:Object(w.jsxs)(I,{children:[Object(w.jsx)("picture",{children:e.image?Object(w.jsx)(N,{aspectRatio:r,inlineSize:b,blockSize:p,alt:e.title,loading:"lazy",src:e.image}):Object(w.jsx)(s.a,{width:b,height:p})}),Object(w.jsxs)(R,{children:[e.title||Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(s.a,{}),Object(w.jsx)(s.a,{width:"65%"})]}),e.caption&&Object(w.jsx)("p",{children:e.caption})]})]})},e.id||n)}))})},C=u.c.header(O||(O=Object(S.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  justify-content: start;\n  padding-inline: ",";\n  padding-block: ",";\n  grid-gap: ",";\n\n  & h1 {\n    font-size: ",";\n  }\n"])),(function(e){return e.theme.size.lg}),(function(e){return e.theme.size.xs}),(function(e){return e.theme.size.xs}),(function(e){return e.theme.size.xl})),L=u.c.div(g||(g=Object(S.a)(["\n  display: grid;\n  grid-auto-flow: column;\n  width: min-content;\n  border-radius: ",";\n  border: 1px solid ",";\n\n  & > button {\n    border: none;\n    border-radius: inherit;\n  }\n"])),(function(e){return e.theme.size.md}),(function(e){return e.theme.colors.text1})),B=t(4),V=t.n(B),Y=t(7);function F(e,n){var t=Object(r.useState)({state:"LOADING"}),c=Object(d.a)(t,2),a=c[0],i=c[1],o=k().dispatch,s=Object(r.useCallback)(Object(Y.a)(V.a.mark((function t(){var r,c=arguments;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i({state:"LOADING"}),t.next=4,e.apply(void 0,c);case 4:r=t.sent,i({state:"SUCCESS",data:r}),n&&o({type:n,payload:r}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0),i({state:"ERROR",error:"Network Error"});case 13:case"end":return t.stop()}}),t,null,[[0,9]])}))),[o,e,n]);return[a,s]}var Q={apiKey:"f274625ee8526fcb3150182ed7668864",baseURL:"https://api.themoviedb.org/3/",imageBaseURL:"https://image.tmdb.org/t/p/"},J=Q.apiKey,K=Q.baseURL,q=Q.imageBaseURL,H=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(K).concat(e,"?api_key=").concat(J).concat(n)};function W(e,n,t){return"".concat(q).concat(t).concat(e)}var X,Z=function(e){return e.map((function(e){return{title:e.title,id:e.id,backdrop_path:e.backdrop_path,poster_path:e.poster_path,vote_average:e.vote_average,release_date:e.release_date}}))},$=function(e){return e.map((function(e){var n=e.name,t=e.id,r=e.backdrop_path,c=e.poster_path,a=e.vote_average;return{title:n,release_date:e.first_air_date,id:t,backdrop_path:r,poster_path:c,vote_average:a}}))},ee=function(){var e=Object(Y.a)(V.a.mark((function e(){var n,t,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(H("trending/tv/day"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,r=$(t.results),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(Y.a)(V.a.mark((function e(){var n,t,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(H("trending/movie/day"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,r=Z(t.results),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(Y.a)(V.a.mark((function e(){var n,t,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(H("movie/popular"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,r=Z(t.results),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(Y.a)(V.a.mark((function e(){var n,t,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(H("movie/upcoming"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,r=Z(t.results),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=function(){var e=Object(Y.a)(V.a.mark((function e(){var n,t,r,c,a,i;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=H("genre/tv/list"),t=H("genre/movie/list"),e.next=4,Promise.all([n,t].map(function(){var e=Object(Y.a)(V.a.mark((function e(n){var t,r,c;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return r=e.sent,e.next=5,r.json();case 5:return c=e.sent,e.abrupt("return",null===c||void 0===c||null===(t=c.genres)||void 0===t?void 0:t.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{data:[]})})));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 4:return r=e.sent,c=Object(d.a)(r,2),a=c[0],i=c[1],e.abrupt("return",{tvGenres:a,movieGenres:i});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ae=function(){var e=Object(Y.a)(V.a.mark((function e(n){var t,r,c,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H("discover/movie","&with_genres=".concat(n)),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=Z(c.results),e.abrupt("return",{genreId:n,data:a});case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ie=function(){var e=Object(Y.a)(V.a.mark((function e(n){var t,r,c,a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H("discover/tv","&with_genres=".concat(n)),e.next=3,fetch(t);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=$(c.results),e.abrupt("return",{data:a,genreId:n});case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();!function(e){e.Movie="movie",e.Tv="tv"}(X||(X={}));var oe,se,ue=function(e){var n=e.genre,t=Object(r.useState)(X.Movie),c=Object(d.a)(t,2),a=c[0],i=c[1],o=F(a===X.Movie?ae:ie,a===X.Movie?"UPDATE_MOVIES_BY_GENRE":"UPDATE_TV_BY_GENRE"),s=Object(d.a)(o,2),u=s[0],l=s[1];Object(r.useEffect)((function(){l(n.id)}),[n.id,l]);var f=k(),p=f.movies,b=f.tv,h=(a===X.Movie?p.genres:b.genres).find((function(e){var t=e.id;return n.id===t})),m=(null===h||void 0===h?void 0:h.data.map((function(e){var n=e.id,t=e.title,r=e.poster_path,c=e.release_date;return{id:n,title:t,image:r&&W(r,0,"original"),caption:new Date(c).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}})))||[];return Object(w.jsxs)("section",{children:[Object(w.jsxs)(C,{children:[Object(w.jsx)("h1",{children:n.name}),Object(w.jsxs)(L,{children:[Object(w.jsx)(M,{primary:a===X.Movie,onClick:function(){return i(X.Movie)},children:X.Movie}),Object(w.jsx)(M,{primary:a===X.Tv,onClick:function(){return i(X.Tv)},children:X.Tv})]})]}),Object(w.jsx)(G,{list:m,ratio:"2/3",loading:"LOADING"===u.state})]})},le=function(){var e=F(ce,"UPDATE_GENRES"),n=Object(d.a)(e,2),t=n[0],c=n[1];Object(r.useEffect)((function(){c()}),[c]);var a=k(),i=a.movies.genres,o=a.tv.genres.map((function(e){return e.id})),s=i.filter((function(e){var n=e.id;return o.includes(n)}));return Object(w.jsx)(w.Fragment,{children:"LOADING"===t.state?Object(w.jsx)(G,{list:[],loading:!0}):s.map((function(e){return Object(w.jsx)(ue,{genre:e},e.id)}))})};!function(e){e.Popular="popular",e.Upcoming="upcoming"}(se||(se={}));var de,fe=u.c.section(oe||(oe=Object(S.a)(["\n  background-image: linear-gradient(\n    to bottom,\n    ",",\n    ","\n  );\n"])),(function(e){return e.theme.colors.surface2}),(function(e){return e.theme.colors.surface3})),pe=function(){var e=Object(r.useState)(se.Popular),n=Object(d.a)(e,2),t=n[0],c=n[1],a=F(t===se.Popular?te:re,t===se.Popular?"UPDATE_POPULAR_MOVIES":"UPDATE_UPCOMING_MOVIES"),i=Object(d.a)(a,2),o=i[0],s=i[1];Object(r.useEffect)((function(){s()}),[s]);var u=k().movies,l=u.popular,f=u.upcoming,p=(t===se.Popular?l:f).map((function(e){var n=e.id,t=e.title,r=e.backdrop_path,c=e.release_date;return{id:n,title:t,image:r&&W(r,0,"original"),caption:new Date(c).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}}));return Object(w.jsxs)(fe,{id:"discover-movies",children:[Object(w.jsxs)(C,{children:[Object(w.jsx)("h1",{children:"Discover Movies"}),Object(w.jsxs)(L,{children:[Object(w.jsx)(M,{primary:t===se.Popular,onClick:function(){return c(se.Popular)},children:"Popular"}),Object(w.jsx)(M,{primary:t===se.Upcoming,onClick:function(){return c(se.Upcoming)},children:"Upcoming"})]})]}),Object(w.jsx)(G,{list:p,loading:"LOADING"===o.state,ratio:"16/9"})]})},be=function(){var e=Object(r.useState)(X.Movie),n=Object(d.a)(e,2),t=n[0],c=n[1],a=F(t===X.Movie?ne:ee,t===X.Movie?"UPDATE_TRENDING_MOVIES_BY_DAY":"UPDATE_TRENDING_TV_BY_DAY"),i=Object(d.a)(a,2),o=i[0],s=i[1],u=k(),l=u.movies,f=u.tv;Object(r.useEffect)((function(){s()}),[s]);var p=(t===X.Movie?l.trending:f.trending).map((function(e){var n=e.id,t=e.title,r=e.poster_path,c=e.release_date;return{id:n,title:t,image:r&&W(r,0,"original"),caption:new Date(c).toLocaleDateString("en-us",{year:"numeric",month:"short",day:"numeric"})}}));return Object(w.jsxs)("section",{id:"trending",children:[Object(w.jsxs)(C,{children:[Object(w.jsx)("h1",{children:"Trending"}),Object(w.jsxs)(L,{children:[Object(w.jsx)(M,{primary:t===X.Movie,onClick:function(){return c(X.Movie)},children:X.Movie}),Object(w.jsx)(M,{primary:t===X.Tv,onClick:function(){return c(X.Tv)},children:X.Tv})]})]}),Object(w.jsx)(G,{list:p,ratio:"2/3",loading:"LOADING"===o.state})]})},he=function(){var e,n=null===(e=window)||void 0===e?void 0:e.matchMedia("(prefers-color-scheme: dark)"),t=Object(r.useState)(null===n||void 0===n?void 0:n.matches),c=Object(d.a)(t,2),a=c[0],i=c[1];return Object(r.useEffect)((function(){var e=function(e){var n=e.matches;return i(n)};return null===n||void 0===n||n.addListener(e),function(){return n.removeEventListener("change",e)}}),[n]),a},me=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n="200",t="100%",r="50%",c={brand:"hsl(".concat(n," ").concat(t," ").concat(r),text1:"hsl(".concat(n," ").concat(t," 10%)"),text2:"hsl(".concat(n," 30% 30%)"),surface1:"hsl(".concat(n," 25% 90%)"),surface2:"hsl(".concat(n," 20% 99%)"),surface3:"hsl(".concat(n," 20% 92%)"),surface4:"hsl(".concat(n," 20% 85%)"),surfaceShadow:"hsl(".concat(n," 10% 20%)"),shadowStrength:"0.02"},a={brand:"hsl(".concat(n," calc(").concat(t," / 2) calc(").concat(r," / 1.5))"),text1:"hsl(".concat(n," 15% 85%)"),text2:"hsl(".concat(n," 5% 65%)"),surface1:"hsl(".concat(n," 10% 10%)"),surface2:"hsl(".concat(n," 10% 15%)"),surface3:"hsl(".concat(n," 5% 20%)"),surface4:"hsl(".concat(n," 5% 25%)"),surfaceShadow:"hsl(".concat(n," 50% 3%)"),shadowStrength:"0.8"};function i(e){for(var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=1,r=1.25;e>1;)t=n?t*r:t/r,e--;return"calc(1em * ".concat(t,")")}return{colors:e?a:c,size:{xxxs:i(5,!1),xxs:i(4,!1),xs:i(3,!1),sm:i(2,!1),md:i(1),lg:i(2),xl:i(3),xxl:i(4),xxxl:i(5)},mediaQueries:{below1400:"only screen and (max-width: 1400px)",below768:"only screen and (max-width: 768px)",below375:"only screen and (max-width: 375px)"}}},je=(me(),Object(u.b)(de||(de=Object(S.a)(["\n  html {\n    /* grow as per screen width */\n    font-size: calc(1px + 1vw);\n    line-height: calc(1.1em + 0.5vw);\n    block-size: 100%;\n    background-color: ",";\n    color: ",";\n    font-family: 'Roboto Mono', monospace, system-ui, sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n\n    @media "," {\n      font-size: 16px;\n    }\n\n    @media "," {\n      font-size: 14px;\n    }\n\n    @media "," {\n      font-size: 12px;\n    }\n  }\n\n  body {\n    background-color: ",";\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n"])),(function(e){return e.theme.colors.surface1}),(function(e){return e.theme.colors.text1}),(function(e){return e.theme.mediaQueries.below768}),(function(e){return e.theme.mediaQueries.below768}),(function(e){return e.theme.mediaQueries.below375}),(function(e){return e.theme.colors.surface1})));var ve=function(){var e=he(),n=me(e);return Object(w.jsxs)(u.a,{theme:n,children:[Object(w.jsx)(je,{}),Object(w.jsx)(z,{children:Object(w.jsxs)(o.SkeletonTheme,{color:n.colors.surface2,highlightColor:n.colors.surface1,children:[Object(w.jsx)(be,{}),Object(w.jsx)(pe,{}),Object(w.jsx)(le,{})]})})]})},Oe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(ve,{})}),document.getElementById("root")),Oe()}},[[34,1,2]]]);
//# sourceMappingURL=main.b59f1c36.chunk.js.map