(this["webpackJsonpswapi-search"]=this["webpackJsonpswapi-search"]||[]).push([[0],{109:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(21),o=t.n(c),u=(t(70),t(6)),i=t(7),s=t(31),l=t(10),p=t(24),f=(t(45),t(13)),m=t(8),d=t.n(m),b=t(14),v=t(64),h=t(22),x=t(19),g=t(15),w=t.n(g),j=function(){var e=Object(b.a)(d.a.mark((function e(n){var t,r,a,c,o,u,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://swapi.dev/api/people/?search=".concat(n));case 2:return t=e.sent,r=t.data,a=r.results,c=r.count,o=r.next,u=r.previous,i=a.map((function(e){return{name:e.name,id:e.url.split("/")[5],homeworld_url:e.homeworld,species_url:e.species[0]}})),e.abrupt("return",{characters:i,count:c,next:o,previous:u});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(d.a.mark((function e(n){var t,r,a,c,o,u,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.replace(/^http:\/\//i,"https://"),e.next=3,w.a.get(t);case 3:return r=e.sent,a=r.data,c=a.results,o=a.next,u=a.previous,i=c.map((function(e){return{name:e.name,id:e.url.split("/")[5],homeworld_url:e.homeworld,species_url:e.species[0]}})),e.abrupt("return",{characters:i,next:o,previous:u});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),E=function(){var e=Object(b.a)(d.a.mark((function e(n,t){var r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("https://swapi.dev/api/people/1/",{cancelToken:t});case 2:return r=e.sent,a=r.data,e.abrupt("return",{name:a.name,id:n,homeworld_url:a.homeworld,species_url:a.species[0],films_url:a.films});case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),k=function(){var e=Object(b.a)(d.a.mark((function e(n,t){var r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}throw"No valid species found";case 2:return r=n.replace(/^http:\/\//i,"https://"),e.next=5,w.a.get(r,{cancelToken:t});case 5:return a=e.sent,c=a.data,e.abrupt("return",{name:c.name});case 8:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(d.a.mark((function e(n,t){var r,a,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",{});case 2:return r=n.replace(/^http:\/\//i,"https://"),e.next=5,w.a.get(r,{cancelToken:t});case 5:return a=e.sent,c=a.data,"unknown"!==(o=c.population)&&(o=parseInt(o).toLocaleString()),e.abrupt("return",{name:c.name,population:o});case 10:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),S=function(){var e=Object(b.a)(d.a.mark((function e(n,t){var r,a,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return",{});case 2:return r=n.replace(/^http:\/\//i,"https://"),e.next=5,w.a.get(r,{cancelToken:t});case 5:return a=e.sent,c=a.data,o=c.opening_crawl.substring(0,150),e.abrupt("return",{title:c.title,release_date:c.release_date,opening_crawl:o});case 9:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();function _(){var e=Object(u.a)(["\n  display: inline-block;\n  cursor: pointer;\n\n  svg {\n    pointer-events: none;\n  }\n\n  &:first-of-type {\n    svg {\n      margin-right: 10px;\n    }\n  }\n\n  &:last-of-type {\n    margin-left: 20px;\n\n    svg {\n      margin-left: 8px;\n    }\n  }\n\n  &[disabled] {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"]);return _=function(){return e},e}function C(){var e=Object(u.a)([""]);return C=function(){return e},e}function F(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n"]);return F=function(){return e},e}function L(){var e=Object(u.a)(["\n  input {\n    padding: 8px 6px;\n    width: 100%;\n    -webkit-appearance: none;\n    appearance: none;\n    border-radius: 3px;\n    border: 1px solid #ccc;\n    font-size: larger;\n  }\n\n  .dropdown-menu {\n    z-index: 5;\n    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);\n    border-radius: 2px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    background: white;\n\n    a {\n      display: block;\n      padding: 12px 6px;\n      color: #000000;\n      text-decoration: none;\n\n      &:hover {\n        background: rgba(0, 0, 0, 0.08);\n      }\n    }\n\n    p {\n      margin: 0;\n      color: #000000;\n    }\n  }\n"]);return L=function(){return e},e}function z(){var e=Object(u.a)(["\n  text-align: center;\n  color: #ffe81f;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 3.5rem;\n"]);return z=function(){return e},e}var T=function(e){var n=e.setCharacters,t=e.isLoading,c=e.setIsLoading,o=Object(r.useRef)(),u=Object(r.useState)(1),i=Object(f.a)(u,2),s=i[0],l=i[1],m=Object(r.useState)(0),v=Object(f.a)(m,2),g=v[0],w=v[1],E=Object(r.useState)(""),k=Object(f.a)(E,2),y=k[0],S=k[1],_=Object(r.useState)(""),C=Object(f.a)(_,2),F=C[0],L=C[1];Object(r.useEffect)((function(){o.current.focus()}),[]);var z=function(){var e=Object(b.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c(!0),"next"!==t.target.id){e.next=9;break}return e.next=5,O(y);case 5:r=e.sent,l(s+1),e.next=13;break;case 9:return e.next=11,O(F);case 11:r=e.sent,l(s-1);case 13:n(r.characters),S(r.next),L(r.previous),c(!1),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),p.b.error(e.t0.response.data.detail),console.error(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(n){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),l(1),e.next=5,j(t);case 5:r=e.sent,n(r.characters),w(r.count),S(r.next),L(r.previous),c(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),p.b.error(e.t0.response.data.detail),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(n){return e.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement(I,null,"SWAPI SEARCH"),a.a.createElement(P,{placeholder:"Type to search for a Star Wars character",id:"characterSearch",isLoading:t,labelKey:function(e){return e.name},onSearch:T,onInputChange:function(e){e||(w(0),n([]))},minLength:1,useCache:!1,open:!1,ref:o}),!!g&&a.a.createElement(W,null,a.a.createElement(A,null,a.a.createElement("p",null,g," ",a.a.createElement("span",null,"results")," | Page: ",s)),a.a.createElement(A,null,F&&a.a.createElement(R,{id:"previous",onClick:z},a.a.createElement(h.a,{icon:x.a}),"Prev"),y&&a.a.createElement(R,{id:"next",onClick:z},"Next",a.a.createElement(h.a,{icon:x.b})))))},I=i.a.h1(z()),P=Object(i.a)(v.a)(L()),W=i.a.div(F()),A=i.a.div(C()),R=i.a.span(_());function B(){var e=Object(u.a)(["\n  margin-left: 5px;\n"]);return B=function(){return e},e}function D(){var e=Object(u.a)(["\n  margin: 0;\n"]);return D=function(){return e},e}function J(){var e=Object(u.a)(["\n  margin-top: 0;\n"]);return J=function(){return e},e}function N(){var e=Object(u.a)(["\n  cursor: pointer;\n  list-style-type: none;\n  border-radius: 4px;\n  width: 100%;\n  padding: 2em;\n  margin-bottom: 2em;\n  background: rgba(255, 255, 255, 0.05);\n  transform: scale(0.98);\n  transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;\n  position: relative;\n\n  @media only screen and (min-width: 600px) {\n    width: calc(50% - 20px);\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    border-radius: inherit;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    display: block;\n    box-shadow: 0px 0px 0px 1px #ffe81f;\n    opacity: 0;\n    transition: opacity 0.2s ease-in-out;\n  }\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.12);\n    transform: scale(1);\n    transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;\n\n    &:before {\n      opacity: 1;\n      transition: opacity 0.2s ease-in-out;\n    }\n  }\n"]);return N=function(){return e},e}var q=function(e){var n=e.character,t=Object(r.useState)(),c=Object(f.a)(t,2),o=c[0],u=c[1],i=Object(r.useState)({}),s=Object(f.a)(i,2),p=s[0],m=s[1],v=Object(l.f)(),g=w.a.CancelToken.source(),j=function(){var e=Object(b.a)(d.a.mark((function e(){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(n.species_url,g.token);case 3:t=e.sent,r=t.name,u(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w.a.isCancel(e.t0)||console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y(n.homeworld_url,g.token);case 3:t=e.sent,m(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),w.a.isCancel(e.t0)||console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return j(),O(),function(){g.cancel("Component unmounted, canceling promises")}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(G,{onClick:function(){return e=n.id,void v.push("/character/".concat(e));var e}},a.a.createElement(H,null,n.name,o&&a.a.createElement(M,null,"(",o,")")),p.name?a.a.createElement(K,null,"From ",p.name," (population: ",p.population,")"):a.a.createElement(h.a,{icon:x.c,spin:!0})))},G=i.a.div(N()),H=i.a.h3(J()),K=i.a.p(D()),M=i.a.span(B());function $(){var e=Object(u.a)(["\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]);return $=function(){return e},e}function Q(){var e=Object(u.a)(["\n  padding: 0;\n  list-style-type: none;\n  text-align: center;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return Q=function(){return e},e}var U=function(e){var n=e.characters,t=e.isLoading;return a.a.createElement(a.a.Fragment,null,t?a.a.createElement(X,null,a.a.createElement(h.a,{icon:x.c,spin:!0,size:"5x"})):a.a.createElement(V,null,n.map((function(e){return a.a.createElement(q,{key:e.id,character:e})}))))},V=i.a.ul(Q()),X=i.a.div($()),Y=function(){var e=Object(r.useState)(!1),n=Object(f.a)(e,2),t=n[0],c=n[1],o=Object(r.useState)([]),u=Object(f.a)(o,2),i=u[0],s=u[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(T,{setCharacters:s,isLoading:t,setIsLoading:c}),a.a.createElement(U,{characters:i,isLoading:t}))};function Z(){var e=Object(u.a)(["\n  // text-transform: uppercase;\n  margin-top: 0;\n  font-weight: bolder;\n"]);return Z=function(){return e},e}function ee(){var e=Object(u.a)(["\n  list-style-type: none;\n  width: calc(50% - 10px);\n  padding: 28px;\n  margin-bottom: 15px;\n  background: rgba(255, 255, 255, 0.05);\n"]);return ee=function(){return e},e}function ne(){var e=Object(u.a)(["\n  padding: 0;\n  list-style-type: none;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return ne=function(){return e},e}var te=function(e){var n=Object(r.useState)(),t=Object(f.a)(n,2),c=t[0],o=t[1];return Object(r.useEffect)((function(){var n=e.films;o(n.sort((function(e,n){return Date.parse(n.release_date)-Date.parse(e.release_date)})))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(re,null,c&&c.map((function(e){return a.a.createElement(ae,{key:e.title},a.a.createElement(ce,null,e.title),a.a.createElement("p",null,"Release date: ",e.release_date),a.a.createElement("p",null,e.opening_crawl))}))))},re=i.a.ul(ne()),ae=i.a.li(ee()),ce=i.a.h3(Z());function oe(){var e=Object(u.a)(["\n  margin-left: 8px;\n"]);return oe=function(){return e},e}function ue(){var e=Object(u.a)([""]);return ue=function(){return e},e}function ie(){var e=Object(u.a)([""]);return ie=function(){return e},e}function se(){var e=Object(u.a)(["\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return se=function(){return e},e}function le(){var e=Object(u.a)([""]);return le=function(){return e},e}function pe(){var e=Object(u.a)([""]);return pe=function(){return e},e}function fe(){var e=Object(u.a)(["\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0);\n  padding: 15px;\n  border-radius: 40px;\n\n  svg {\n    pointer-events: none;\n  }\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.12);\n  }\n"]);return fe=function(){return e},e}function me(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid white;\n  padding-bottom: 0.75em;\n  margin-bottom: 2.5em;\n"]);return me=function(){return e},e}var de=function(e){var n=e.match,t=Object(r.useState)(!0),c=Object(f.a)(t,2),o=c[0],u=c[1],i=Object(r.useState)(),s=Object(f.a)(i,2),m=s[0],v=s[1],g=Object(r.useState)({}),j=Object(f.a)(g,2),O=j[0],_=j[1],C=Object(r.useState)(),F=Object(f.a)(C,2),L=F[0],z=F[1],T=Object(r.useState)({}),I=Object(f.a)(T,2),P=I[0],W=I[1],A=w.a.CancelToken.source(),R=Object(l.f)(),B=function(){var e=Object(b.a)(d.a.mark((function e(n){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,E(n,A.token);case 4:t=e.sent,v(t),u(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),w.a.isCancel(e.t0)||(p.b.error("Something went wrong."),console.error(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),D=function(){var e=Object(b.a)(d.a.mark((function e(n){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.homeworld_url,e.next=4,y(t,A.token);case 4:r=e.sent,_(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w.a.isCancel(e.t0)||console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(d.a.mark((function e(n){var t,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.species_url,e.next=4,k(t,A.token);case 4:r=e.sent,a=r.name,z(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),w.a.isCancel(e.t0)||console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),N=function(){var e=Object(b.a)(d.a.mark((function e(n){var t,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=n.films_url,e.next=4,Promise.all(t.map((function(e){return S(e,A.token)})));case 4:r=e.sent,W(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w.a.isCancel(e.t0)||console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return B(n.params.id),function(){A.cancel("API Get request canceled")}}),[]),Object(r.useEffect)((function(){return m&&(D(m),J(m),N(m)),function(){A.cancel("Component unmounted, canceling promises")}}),[m]),a.a.createElement(a.a.Fragment,null,o?a.a.createElement(ge,null,a.a.createElement(h.a,{icon:x.c,size:"6x",spin:!0})):a.a.createElement(he,null,a.a.createElement(be,null,a.a.createElement(xe,null,m&&a.a.createElement(we,null,m.name,L&&a.a.createElement(Oe,null,"(",L,")")),O.name&&a.a.createElement(je,null,"From ",O.name," (population: ",O.population,")")),a.a.createElement(xe,null,a.a.createElement(ve,{onClick:function(){R.push("/")}},a.a.createElement(h.a,{icon:x.d,size:"lg"})))),a.a.createElement(xe,null,P[0]&&a.a.createElement(a.a.Fragment,null,a.a.createElement("h4",null,"Films appeared in:"),a.a.createElement("div",null,P&&a.a.createElement(te,{films:P}))))))},be=i.a.div(me()),ve=i.a.span(fe()),he=i.a.div(pe()),xe=i.a.div(le()),ge=i.a.div(se()),we=i.a.h1(ie()),je=i.a.p(ue()),Oe=i.a.span(oe());function Ee(){var e=Object(u.a)(["\n  font-size: 3rem;\n"]);return Ee=function(){return e},e}function ke(){var e=Object(u.a)(["\n  font-size: 10rem;\n  font-weight: 800;\n  margin-top: 0;\n  margin-bottom: 0;\n"]);return ke=function(){return e},e}function ye(){var e=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n"]);return ye=function(){return e},e}var Se=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(_e,null,a.a.createElement(Ce,null,"404"),a.a.createElement(Fe,null,"This is not the page you are looking for.")))},_e=i.a.div(ye()),Ce=i.a.h1(ke()),Fe=i.a.h2(Ee());function Le(){var e=Object(u.a)(["\n  padding: 4em 20px;\n  max-width: 1000px;\n  width: 100%;\n  margin: auto;\n"]);return Le=function(){return e},e}var ze=i.a.div(Le()),Te=function(){return a.a.createElement(ze,null,a.a.createElement(p.a,null),a.a.createElement(s.a,{basename:"/swapi-search"},a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:Y}),a.a.createElement(l.a,{exact:!0,path:"/character/:id",component:de}),a.a.createElement(l.a,{component:Se}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,n,t){e.exports=t(109)},70:function(e,n,t){}},[[65,1,2]]]);
//# sourceMappingURL=main.727a5ce9.chunk.js.map