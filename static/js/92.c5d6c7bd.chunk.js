"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[92],{92:function(e,i,t){t.r(i),t.d(i,{default:function(){return c}});var o=t(439),n=t(791),a=t(243),_=t(689),r={movie_details:"Review_movie_details__gSuXI",movie_details_content:"Review_movie_details_content__8iZr-",movie_details_image:"Review_movie_details_image__vU91R",movie_title:"Review_movie_title__mhDJz",movie_overview:"Review_movie_overview__ecKrs",additional_info:"Review_additional_info__Ok4R5"},s=t(184);var c=function(){var e=(0,_.UO)().movieId,i=(0,n.useState)([]),t=(0,o.Z)(i,2),c=t[0],v=t[1];return(0,n.useEffect)((function(){a.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat("1fe8270af09b2a2e2b930e18d767076b")).then((function(e){v(e.data.results)})).catch((function(e){console.error("Error fetching reviews:",e)}))}),[e]),(0,s.jsx)("div",{className:r.review_container,children:0===c.length?(0,s.jsx)("p",{children:"Sorry,but we don't have any reviews for this movie."}):(0,s.jsx)("ul",{className:r.review_list,children:c.map((function(e){return(0,s.jsxs)("li",{className:r.review_item,children:[(0,s.jsx)("h3",{className:r.author,children:e.author}),(0,s.jsx)("p",{className:r.content,children:e.content})]},e.id)}))})})}}}]);
//# sourceMappingURL=92.c5d6c7bd.chunk.js.map