"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[837],{837:function(e,i,t){t.r(i),t.d(i,{default:function(){return m}});var o=t(439),s=t(791),a=t(243),r=t(689),c=t(87),n={movie_list:"Movie_movie_list__OIQ-j",movie_card:"Movie_movie_card__jtgdY",movie_title:"Movie_movie_title__ZbwIB",movieItem:"Movie_movieItem__XTDhg",title_movies:"Movie_title_movies__MT4Ch",form_movies:"Movie_form_movies__h5Evg",search_input:"Movie_search_input__YXi+C"},_=t(184);var m=function(){var e=(0,s.useState)(""),i=(0,o.Z)(e,2),t=i[0],m=i[1],v=(0,s.useState)([]),l=(0,o.Z)(v,2),u=l[0],h=l[1],f=(0,s.useState)(!1),d=(0,o.Z)(f,2),p=d[0],g=d[1],j=(0,r.s0)(),b=(0,r.TH)();(0,s.useEffect)((function(){var e=new URLSearchParams(b.search).get("query");e&&(m(e),x(e))}),[b.search]);var x=function(e){a.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat("1fe8270af09b2a2e2b930e18d767076b","&query=").concat(e)).then((function(e){h(e.data.results),g(!0)})).catch((function(e){console.error("Error searching movies:",e)}))};return(0,_.jsxs)("div",{className:n.movieContainer,children:[(0,_.jsx)("h1",{className:n.title_movies,children:"Search Movies"}),(0,_.jsxs)("form",{className:n.form_movies,onSubmit:function(e){e.preventDefault(),t&&(m(t),x(t),j("/movies?query=".concat(t)))},children:[(0,_.jsx)("input",{type:"text",placeholder:"Search for a movie...",value:t,onChange:function(e){var i=e.target.value;m(i)},className:n.search_input}),(0,_.jsx)("button",{type:"submit",children:"Search"})]}),p&&0===u.length&&(0,_.jsx)("p",{children:"No movies found."}),u.length>0&&(0,_.jsx)("ul",{className:n.movie_list,children:u.map((function(e){return(0,_.jsx)("li",{className:n.movieItem,children:(0,_.jsx)(c.rU,{to:"/movies/".concat(e.id),state:{from:b},className:n.movie_link,children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=837.6ec8160f.chunk.js.map