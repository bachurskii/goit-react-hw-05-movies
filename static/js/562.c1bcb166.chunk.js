"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[562,958,92],{958:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var i=a(439),s=a(791),n=a(243),c=a(689),r={container:"Cast_container__K22qH",list:"Cast_list__EOB7N",cast_item:"Cast_cast_item__X69aV",actor_image:"Cast_actor_image__XELUX",actor_name:"Cast_actor_name__iKhiW"},o=a(184);var l=function(){var e=(0,c.UO)().movieId,t=(0,s.useState)([]),a=(0,i.Z)(t,2),l=a[0],_=a[1];return(0,s.useEffect)((function(){n.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat("1fe8270af09b2a2e2b930e18d767076b")).then((function(e){_(e.data.cast)})).catch((function(e){console.error("Error fetching cast:",e)}))}),[e]),(0,o.jsx)("div",{className:r.container,children:(0,o.jsx)("ul",{className:r.list,children:l.map((function(e){return(0,o.jsxs)("li",{className:r.item,children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(e.profile_path),alt:e.name,className:r.actor_image}),(0,o.jsx)("p",{className:r.actor_name,children:e.name})]},e.id)}))})})}},562:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var i=a(439),s=a(791),n=a(689),c=a(87),r=a(243),o="MovieDetails_movie_details__XPX9G",l="MovieDetails_movie_details_content__iEs6W",_="MovieDetails_movie_details_image__efNOl",v="MovieDetails_movie_title__heELk",m="MovieDetails_movie_info__MfxXl",d="MovieDetails_movie_rating__JXxyK",h="MovieDetails_movie_genre__MJbYl",u="MovieDetails_movie_overview__-ecdn",f="MovieDetails_additional_info__zEqEU",g="MovieDetails_goBackLink__ahSrr",x=a(958),j=a(92),w=a(184);var p=function(){var e,t,a=(0,n.UO)().movieId,p=(0,n.TH)(),N=(0,s.useState)({}),b=(0,i.Z)(N,2),S=b[0],k=b[1],E=(0,s.useState)(!1),I=(0,i.Z)(E,2),M=I[0],C=I[1],D=(0,s.useState)(!1),U=(0,i.Z)(D,2),Z=U[0],R=U[1],y=null!==(e=null===(t=p.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",X=new URLSearchParams(p.search),O="true"===X.get("cast")||"true"===localStorage.getItem("cast-".concat(a)),W="true"===X.get("review")||"true"===localStorage.getItem("review-".concat(a));(0,s.useEffect)((function(){r.Z.get("https://api.themoviedb.org/3/movie/".concat(a,"?api_key=").concat("1fe8270af09b2a2e2b930e18d767076b")).then((function(e){k(e.data)})).catch((function(e){console.error("Error fetching movie details:",e)}))}),[a]),(0,s.useEffect)((function(){C(O),R(W)}),[O,W]);var G=function(e,t){var a=new URLSearchParams(p.search);a.set(e,t?"true":"false");var i="".concat(p.pathname,"?").concat(a.toString());window.history.replaceState(null,"",i)};return(0,w.jsxs)("div",{children:[(0,w.jsxs)("div",{className:o,children:[(0,w.jsx)(c.rU,{to:y,className:g,children:"Go back"}),(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(S.poster_path),alt:S.title,className:_}),(0,w.jsxs)("div",{className:l,children:[(0,w.jsx)("div",{className:v,children:S.title}),(0,w.jsxs)("div",{className:m,children:[(0,w.jsxs)("p",{className:d,children:["Rating: ",S.vote_average]}),(0,w.jsxs)("p",{className:h,children:["Genre:"," ",S.genres&&S.genres.map((function(e){return e.name})).join(", ")]})]}),(0,w.jsx)("div",{className:u,children:S.overview})]})]}),(0,w.jsxs)("div",{className:f,children:[(0,w.jsx)("h2",{children:"Additional information"}),(0,w.jsxs)("div",{children:[(0,w.jsx)(c.rU,{to:"/movies/".concat(a,"/cast"),state:{from:y},onClick:function(){var e=!M;C(e),G("cast",e),localStorage.setItem("cast-".concat(a),e.toString())},children:"Cast"}),M&&(0,w.jsx)(x.default,{movieId:a})]}),(0,w.jsxs)("div",{children:[(0,w.jsx)(c.rU,{to:"/movies/".concat(a,"/reviews"),state:{from:y},onClick:function(){var e=!Z;R(e),G("review",e),localStorage.setItem("review-".concat(a),e.toString())},children:"Reviews"}),Z&&(0,w.jsx)(j.default,{movieId:a})]})]}),(0,w.jsxs)(n.Z5,{children:[(0,w.jsx)(n.AW,{path:"/movies/:movieId/*",element:(0,w.jsx)(x.default,{})}),(0,w.jsx)(n.AW,{path:"/movies/:movieId/reviews/*",element:(0,w.jsx)(j.default,{})})]})]})}},92:function(e,t,a){a.r(t),a.d(t,{default:function(){return l}});var i=a(439),s=a(791),n=a(243),c=a(689),r={review_container:"Review_review_container__2cQbN",review_item:"Review_review_item__GUgWH",author:"Review_author__GfOID",content:"Review_content__o+CFW"},o=a(184);var l=function(){var e=(0,c.UO)().movieId,t=(0,s.useState)([]),a=(0,i.Z)(t,2),l=a[0],_=a[1];return(0,s.useEffect)((function(){n.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("1fe8270af09b2a2e2b930e18d767076b")).then((function(e){_(e.data.results)})).catch((function(e){console.error("Error fetching reviews:",e)}))}),[e]),(0,o.jsx)("div",{className:r.review_container,children:0===l.length?(0,o.jsx)("p",{children:"Sorry,but we don't have any reviews for this movie."}):(0,o.jsx)("ul",{className:r.review_list,children:l.map((function(e){return(0,o.jsxs)("li",{className:r.review_item,children:[(0,o.jsx)("h3",{className:r.author,children:e.author}),(0,o.jsx)("p",{className:r.content,children:e.content})]},e.id)}))})})}}}]);
//# sourceMappingURL=562.c1bcb166.chunk.js.map