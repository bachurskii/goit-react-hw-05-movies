"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[958],{958:function(t,a,e){e.r(a),e.d(a,{default:function(){return _}});var c=e(439),i=e(791),s=e(243),n=e(689),r={container:"Cast_container__K22qH",list:"Cast_list__EOB7N",cast_item:"Cast_cast_item__X69aV",actor_image:"Cast_actor_image__XELUX",actor_name:"Cast_actor_name__iKhiW"},o=e(184);var _=function(){var t=(0,n.UO)().movieId,a=(0,i.useState)([]),e=(0,c.Z)(a,2),_=e[0],m=e[1];return(0,i.useEffect)((function(){s.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat("1fe8270af09b2a2e2b930e18d767076b")).then((function(t){m(t.data.cast)})).catch((function(t){console.error("Error fetching cast:",t)}))}),[t]),(0,o.jsx)("div",{className:r.container,children:(0,o.jsx)("ul",{className:r.list,children:_.map((function(t){return(0,o.jsxs)("li",{className:r.item,children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.profile_path),alt:t.name,className:r.actor_image}),(0,o.jsx)("p",{className:r.actor_name,children:t.name})]},t.id)}))})})}}}]);
//# sourceMappingURL=958.34424656.chunk.js.map