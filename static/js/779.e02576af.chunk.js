"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{779:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var r,a=n(439),c=n(791),u=n(689),o=n(818),s=n(168),i=n(934).Z.ul(r||(r=(0,s.Z)(["\n\tli{\n\t\tmargin-bottom: 20px;\n\t\th4{\n\t\t\tmargin-bottom: 10px;\n\t\t}\n\t}\n"]))),p=n(184);function l(){var t=(0,u.UO)().movieId,e=(0,c.useState)([]),n=(0,a.Z)(e,2),r=n[0],s=n[1];return(0,c.useEffect)((function(){(0,o.tx)(t).then((function(t){return s(t)}))}),[t]),(0,p.jsx)(p.Fragment,{children:0===r.length?(0,p.jsx)("div",{children:"We don`t have any reviews for this movie"}):(0,p.jsx)(i,{children:r.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h4",{children:["Author: ",n]}),(0,p.jsx)("p",{children:r})]},e)}))})})}},818:function(t,e,n){n.d(e,{Df:function(){return i},TP:function(){return l},gH:function(){return m},tx:function(){return d},zv:function(){return f}});var r=n(861),a=n(687),c=n.n(a),u=n(243),o="6ee8f442105c5771b43e4ffd32101863",s="https://api.themoviedb.org/3/trending/all/day?api_key=".concat(o);function i(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get(s);case 3:return e=t.sent,n=e.data.results,t.next=7,n;case 7:return t.abrupt("return",t.sent);case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o,"&language=en-US"),t.prev=1,t.next=4,u.Z.get(n);case 4:return r=t.sent,a=r.data,t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function f(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o,"&language=en-US"),t.prev=1,t.next=4,u.Z.get(n);case 4:return r=t.sent,a=r.data.cast,t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function d(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"),t.prev=1,t.next=4,u.Z.get(n);case 4:return r=t.sent,a=r.data.results,t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(o,"&language=en-US&page=1&include_adult=false"),t.prev=1,t.next=4,u.Z.get(n);case 4:return r=t.sent,a=r.data.results,t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=779.e02576af.chunk.js.map