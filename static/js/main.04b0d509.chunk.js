(this["webpackJsonpswapi-search"]=this["webpackJsonpswapi-search"]||[]).push([[0],{109:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(21),i=t.n(c),o=(t(70),t(4)),u=t(5),s=t(31),l=t(10),p=t(24),f=(t(45),t(13)),m=t(8),d=t.n(m),b=t(14),v=t(64),h=t(22),x=t(19),g=t(15),w=t.n(g),j=function(){var n=Object(b.a)(d.a.mark((function n(e){var t,r,a,c,i,o,u;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.a.get("https://swapi.dev/api/people/?search=".concat(e));case 2:return t=n.sent,r=t.data,a=r.results,c=r.count,i=r.next,o=r.previous,u=a.map((function(n){return{name:n.name,id:n.url.split("/")[5],homeworld_url:n.homeworld,species_url:n.species[0]}})),n.abrupt("return",{characters:u,count:c,next:i,previous:o});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),O=function(){var n=Object(b.a)(d.a.mark((function n(e){var t,r,a,c,i,o,u;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.replace(/^http:\/\//i,"https://"),n.next=3,w.a.get(t);case 3:return r=n.sent,a=r.data,c=a.results,i=a.next,o=a.previous,u=c.map((function(n){return{name:n.name,id:n.url.split("/")[5],homeworld_url:n.homeworld,species_url:n.species[0]}})),n.abrupt("return",{characters:u,next:i,previous:o});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),E=function(){var n=Object(b.a)(d.a.mark((function n(e,t){var r,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.a.get("https://swapi.dev/api/people/".concat(e,"/"),{cancelToken:t});case 2:return r=n.sent,a=r.data,n.abrupt("return",{name:a.name,id:e,homeworld_url:a.homeworld,species_url:a.species[0],films_url:a.films});case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),k=function(){var n=Object(b.a)(d.a.mark((function n(e,t){var r,a,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.replace(/^http:\/\//i,"https://"),n.next=3,w.a.get(r,{cancelToken:t});case 3:return a=n.sent,c=a.data,n.abrupt("return",{name:c.name});case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),y=function(){var n=Object(b.a)(d.a.mark((function n(e,t){var r,a,c,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",{});case 2:return r=e.replace(/^http:\/\//i,"https://"),n.next=5,w.a.get(r,{cancelToken:t});case 5:return a=n.sent,c=a.data,"unknown"!==(i=c.population)&&(i=parseInt(i).toLocaleString()),n.abrupt("return",{name:c.name,population:i});case 10:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),S=function(){var n=Object(b.a)(d.a.mark((function n(e,t){var r,a,c,i;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return",{});case 2:return r=e.replace(/^http:\/\//i,"https://"),n.next=5,w.a.get(r,{cancelToken:t});case 5:return a=n.sent,c=a.data,i=c.opening_crawl.substring(0,150),n.abrupt("return",{title:c.title,release_date:c.release_date,opening_crawl:i});case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function z(){var n=Object(o.a)(["\n  display: inline-block;\n  cursor: pointer;\n  border-radius: 4px;\n  margin: 8px;\n  text-transform: uppercase;\n\n  svg {\n    pointer-events: none;\n    margin: 0 8px;\n  }\n\n  &:last-of-type {\n    margin-right: 0px;\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);return z=function(){return n},n}function _(){var n=Object(o.a)([""]);return _=function(){return n},n}function C(){var n=Object(o.a)(["\n  display: inline-block;\n  margin: 0 10px;\n"]);return C=function(){return n},n}function F(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px 0;\n  font-size: 0.85rem;\n"]);return F=function(){return n},n}function L(){var n=Object(o.a)(["\n  input {\n    padding: 10px 8px;\n    width: 100%;\n    -webkit-appearance: none;\n    appearance: none;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n    font-size: 1.1rem;\n    @media only screen and (min-width: 600px) {\n      font-size: 1.65rem;\n    }\n  }\n"]);return L=function(){return n},n}function I(){var n=Object(o.a)(["\n  font-size: 1.1rem;\n  text-align: center;\n  margin-bottom: 2.25em;\n  @media only screen and (min-width: 600px) {\n    font-size: 1.85rem;\n  }\n"]);return I=function(){return n},n}function T(){var n=Object(o.a)(["\n  text-align: center;\n  color: #ffe81f;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 2.5rem;\n  margin-top: 0;\n  @media only screen and (min-width: 600px) {\n    font-size: 4rem;\n  }\n"]);return T=function(){return n},n}var P=function(n){var e=n.setCharacters,t=n.isLoading,c=n.setIsLoading,i=Object(r.useRef)(),o=Object(r.useState)(1),u=Object(f.a)(o,2),s=u[0],l=u[1],m=Object(r.useState)(0),v=Object(f.a)(m,2),g=v[0],w=v[1],E=Object(r.useState)(""),k=Object(f.a)(E,2),y=k[0],S=k[1],z=Object(r.useState)(""),_=Object(f.a)(z,2),C=_[0],F=_[1];Object(r.useEffect)((function(){return i.current.focus(),document.addEventListener("keydown",L),function(){document.removeEventListener("keydown",L)}}),[]);var L=function(){i.current.focus()},I=function(){var n=Object(b.a)(d.a.mark((function n(t){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,c(!0),"next"!==t.target.id){n.next=9;break}return n.next=5,O(y);case 5:r=n.sent,l(s+1),n.next=13;break;case 9:return n.next=11,O(C);case 11:r=n.sent,l(s-1);case 13:e(r.characters),S(r.next),F(r.previous),c(!1),n.next=23;break;case 19:n.prev=19,n.t0=n.catch(0),p.b.error(n.t0.response.data.detail),console.error(n.t0);case 23:case"end":return n.stop()}}),n,null,[[0,19]])})));return function(e){return n.apply(this,arguments)}}(),T=function(){var n=Object(b.a)(d.a.mark((function n(t){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c(!0),l(1),n.next=5,j(t);case 5:r=n.sent,e(r.characters),w(r.count),S(r.next),F(r.previous),c(!1),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(0),p.b.error(n.t0.response.data.detail),console.error(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement(A,null,"SWAPI SEARCH"),a.a.createElement(R,null,"Find your favorite Star Wars character!"),a.a.createElement(D,{placeholder:"Start typing to search",id:"characterSearch",isLoading:t,labelKey:function(n){return n.name},onSearch:T,onInputChange:function(n){n||(w(0),e([]))},minLength:1,useCache:!1,open:!1,ref:i}),!!g&&a.a.createElement(J,null,a.a.createElement(q,null,a.a.createElement("p",null,g," ",a.a.createElement("span",null,"results"),a.a.createElement(W,null,"|"),"Page: ",s)),a.a.createElement(q,null,C&&a.a.createElement(B,{id:"previous",onClick:I},a.a.createElement(h.a,{icon:x.a}),"Prev"),y&&a.a.createElement(B,{id:"next",onClick:I},"Next",a.a.createElement(h.a,{icon:x.b})))))},A=u.a.h1(T()),R=u.a.p(I()),D=Object(u.a)(v.a)(L()),J=u.a.div(F()),W=u.a.span(C()),q=u.a.div(_()),B=u.a.span(z());function G(){var n=Object(o.a)(["\n  margin-left: 5px;\n"]);return G=function(){return n},n}function H(){var n=Object(o.a)(["\n  margin: 0;\n"]);return H=function(){return n},n}function K(){var n=Object(o.a)(["\n  margin-top: 0;\n"]);return K=function(){return n},n}function M(){var n=Object(o.a)(["\n  cursor: pointer;\n  list-style-type: none;\n  border-radius: 4px;\n  width: 100%;\n  padding: 2em;\n  margin-bottom: 2em;\n  background: rgba(255, 255, 255, 0.05);\n  transform: scale(0.98);\n  transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;\n  position: relative;\n\n  @media only screen and (min-width: 600px) {\n    width: calc(50% - 1em);\n  }\n\n  &:before {\n    content: '';\n    position: absolute;\n    border-radius: inherit;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    display: block;\n    box-shadow: 0px 0px 0px 1px #ffe81f;\n    opacity: 0;\n    transition: opacity 0.2s ease-in-out;\n  }\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.16);\n    transform: scale(1);\n    transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;\n\n    &:before {\n      opacity: 1;\n      transition: opacity 0.2s ease-in-out;\n    }\n  }\n"]);return M=function(){return n},n}var N=function(n){var e=n.character,t=Object(r.useState)(),c=Object(f.a)(t,2),i=c[0],o=c[1],u=Object(r.useState)({}),s=Object(f.a)(u,2),p=s[0],m=s[1],v=Object(l.f)(),g=w.a.CancelToken.source(),j=function(){var n=Object(b.a)(d.a.mark((function n(){var t,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!e.species_url){n.next=7;break}return n.next=4,k(e.species_url,g.token);case 4:t=n.sent,r=t.name,o(r);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),w.a.isCancel(n.t0)||console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}(),O=function(){var n=Object(b.a)(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!e.homeworld_url){n.next=6;break}return n.next=4,y(e.homeworld_url,g.token);case 4:t=n.sent,m(t);case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),w.a.isCancel(n.t0)||console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){return j(),O(),function(){g.cancel("Component unmounted, canceling promises")}}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(Q,{onClick:function(){return n=e.id,void v.push("/character/".concat(n));var n}},a.a.createElement(U,null,e.name,i&&a.a.createElement(X,null,"(",i,")")),p.name?a.a.createElement(V,null,"From ",p.name," (population: ",p.population,")"):a.a.createElement(h.a,{icon:x.c,spin:!0})))},Q=u.a.div(M()),U=u.a.h3(K()),V=u.a.p(H()),X=u.a.span(G());function Y(){var n=Object(o.a)(["\n  margin-top: 50px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n"]);return Y=function(){return n},n}function Z(){var n=Object(o.a)(["\n  padding: 0;\n  list-style-type: none;\n  text-align: center;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return Z=function(){return n},n}var $=function(n){var e=n.characters,t=n.isLoading;return a.a.createElement(a.a.Fragment,null,t?a.a.createElement(en,null,a.a.createElement(h.a,{icon:x.c,spin:!0,size:"5x"})):a.a.createElement(nn,null,e.map((function(n){return a.a.createElement(N,{key:n.id,character:n})}))))},nn=u.a.ul(Z()),en=u.a.div(Y()),tn=function(){var n=Object(r.useState)(!1),e=Object(f.a)(n,2),t=e[0],c=e[1],i=Object(r.useState)([]),o=Object(f.a)(i,2),u=o[0],s=o[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,{setCharacters:s,isLoading:t,setIsLoading:c}),a.a.createElement($,{characters:u,isLoading:t}))};function rn(){var n=Object(o.a)(["\n  font-size: 1rem;\n  align-self: bottom;\n  p {\n    width: 100%;\n    padding-top: 15px;\n    margin-bottom: 0;\n    border-top: 1px solid white;\n  }\n"]);return rn=function(){return n},n}function an(){var n=Object(o.a)(["\n  line-height: 1.65;\n  margin: 20px 0;\n\n  @media only screen and (min-width: 600px) {\n    font-size: 1.1rem;\n    line-height: 1.85;\n  }\n"]);return an=function(){return n},n}function cn(){var n=Object(o.a)(["\n  // text-transform: uppercase;\n  font-size: 1.15rem;\n  margin-top: 0;\n  font-weight: bolder;\n  @media only screen and (min-width: 600px) {\n    font-size: 1.4rem;\n  }\n"]);return cn=function(){return n},n}function on(){var n=Object(o.a)([""]);return on=function(){return n},n}function un(){var n=Object(o.a)(["\n  list-style-type: none;\n  padding: 30px;\n  border-radius: 8px;\n  margin-bottom: 25px;\n  background: rgba(255, 255, 255, 0.08);\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  @media only screen and (min-width: 600px) {\n    width: calc(50% - 15px);\n    margin-bottom: 30px;\n  }\n"]);return un=function(){return n},n}function sn(){var n=Object(o.a)(["\n  padding: 0;\n  list-style-type: none;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return sn=function(){return n},n}var ln=function(n){var e=Object(r.useState)(),t=Object(f.a)(e,2),c=t[0],i=t[1];return Object(r.useEffect)((function(){var e=n.films;i(e.sort((function(n,e){return Date.parse(e.release_date)-Date.parse(n.release_date)})))}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(pn,null,c&&c.map((function(n){return a.a.createElement(fn,{key:n.title},a.a.createElement(mn,null,a.a.createElement(dn,null,n.title),a.a.createElement(bn,null,n.opening_crawl)),a.a.createElement(vn,null,a.a.createElement("p",null,"Release date: ",n.release_date)))}))))},pn=u.a.ul(sn()),fn=u.a.li(un()),mn=u.a.div(on()),dn=u.a.h3(cn()),bn=u.a.p(an()),vn=u.a.div(rn());function hn(){var n=Object(o.a)(["\n  margin-left: 8px;\n"]);return hn=function(){return n},n}function xn(){var n=Object(o.a)(["\n  font-size: 0.92rem;\n  @media only screen and (min-width: 600px) {\n    font-size: 1.5rem;\n  }\n"]);return xn=function(){return n},n}function gn(){var n=Object(o.a)(["\n  margin-top: 0;\n  font-size: 1.5rem;\n  @media only screen and (min-width: 600px) {\n    font-size: 2.75rem;\n  }\n"]);return gn=function(){return n},n}function wn(){var n=Object(o.a)(["\n  width: 100%;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]);return wn=function(){return n},n}function jn(){var n=Object(o.a)([""]);return jn=function(){return n},n}function On(){var n=Object(o.a)([""]);return On=function(){return n},n}function En(){var n=Object(o.a)(["\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0);\n  padding: 15px;\n  border-radius: 40px;\n  position: relative;\n\n  svg {\n    pointer-events: none;\n  }\n\n  &:after {\n    content: 'Close';\n    font-size: smaller;\n    font-weight: bolder;\n    padding: 4px;\n    bottom: 5px;\n    position: absolute;\n    left: 50%;\n    bottom: -30px;\n    background: black;\n    text-transform: uppercase;\n    transform: translate(-50%, -50%);\n    pointer-events: none;\n    opacity: 0;\n    z-index: 5;\n    transition: all 0.25s ease-in-out;\n  }\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.12);\n\n    &:after {\n      opacity: 1;\n      transform: translate(-50%, -40%);\n      transition: all 0.25s ease-in-out;\n    }\n  }\n"]);return En=function(){return n},n}function kn(){var n=Object(o.a)(["\n  text-align: center;\n  margin-bottom: 30px;\n\n  @media only screen and (min-width: 600px) {\n    text-align: left;\n  }\n"]);return kn=function(){return n},n}function yn(){var n=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid white;\n  padding-bottom: 0.75em;\n  margin-bottom: 2.5em;\n\n  @media only screen and (min-width: 600px) {\n    align-items: center;\n  }\n"]);return yn=function(){return n},n}var Sn=function(n){var e=n.match,t=Object(r.useState)(!0),c=Object(f.a)(t,2),i=c[0],o=c[1],u=Object(r.useState)(),s=Object(f.a)(u,2),m=s[0],v=s[1],g=Object(r.useState)({}),j=Object(f.a)(g,2),O=j[0],z=j[1],_=Object(r.useState)(),C=Object(f.a)(_,2),F=C[0],L=C[1],I=Object(r.useState)({}),T=Object(f.a)(I,2),P=T[0],A=T[1],R=w.a.CancelToken.source(),D=Object(l.f)(),J=function(){var n=Object(b.a)(d.a.mark((function n(e){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,E(e,R.token);case 4:t=n.sent,v(t),o(!1),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),w.a.isCancel(n.t0)||(p.b.error("Something went wrong."),console.error(n.t0));case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),W=function(){var n=Object(b.a)(d.a.mark((function n(e){var t,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!(t=e.homeworld_url)){n.next=7;break}return n.next=5,y(t,R.token);case 5:r=n.sent,z(r);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),w.a.isCancel(n.t0)||console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),q=function(){var n=Object(b.a)(d.a.mark((function n(e){var t,r,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!(t=e.species_url)){n.next=8;break}return n.next=5,k(t,R.token);case 5:r=n.sent,a=r.name,L(a);case 8:n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),w.a.isCancel(n.t0)||console.error(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),B=function(){var n=Object(b.a)(d.a.mark((function n(e){var t,r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!(t=e.films_url)){n.next=7;break}return n.next=5,Promise.all(t.map((function(n){return S(n,R.token)})));case 5:r=n.sent,A(r);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),w.a.isCancel(n.t0)||console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}();return Object(r.useEffect)((function(){return J(e.params.id),function(){R.cancel("API Get request canceled")}}),[]),Object(r.useEffect)((function(){return m&&(W(m),q(m),B(m)),function(){R.cancel("Component unmounted, canceling promises")}}),[m]),a.a.createElement(a.a.Fragment,null,i?a.a.createElement(In,null,a.a.createElement(h.a,{icon:x.c,size:"6x",spin:!0})):a.a.createElement(Fn,null,a.a.createElement(zn,null,a.a.createElement(Ln,null,m&&a.a.createElement(Tn,null,m.name,F&&a.a.createElement(An,null,"(",F,")")),O.name&&a.a.createElement(Pn,null,"From ",O.name," (population: ",O.population,")")),a.a.createElement(Ln,null,a.a.createElement(Cn,{onClick:function(){D.push("/")}},a.a.createElement(h.a,{icon:x.d,size:"lg"})))),a.a.createElement(Ln,null,P[0]&&a.a.createElement(a.a.Fragment,null,a.a.createElement(_n,null,"Film(s) appeared in:"),a.a.createElement("div",null,P&&a.a.createElement(ln,{films:P}))))))},zn=u.a.div(yn()),_n=u.a.h4(kn()),Cn=u.a.span(En()),Fn=u.a.div(On()),Ln=u.a.div(jn()),In=u.a.div(wn()),Tn=u.a.h1(gn()),Pn=u.a.p(xn()),An=u.a.span(hn());function Rn(){var n=Object(o.a)(["\n  font-size: 3rem;\n"]);return Rn=function(){return n},n}function Dn(){var n=Object(o.a)(["\n  font-size: 10rem;\n  font-weight: 800;\n  margin-top: 0;\n  margin-bottom: 0;\n"]);return Dn=function(){return n},n}function Jn(){var n=Object(o.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n"]);return Jn=function(){return n},n}var Wn=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(qn,null,a.a.createElement(Bn,null,"404"),a.a.createElement(Gn,null,"This is not the page you are looking for.")))},qn=u.a.div(Jn()),Bn=u.a.h1(Dn()),Gn=u.a.h2(Rn());function Hn(){var n=Object(o.a)(["\n  padding: 2em 20px;\n  max-width: 1000px;\n  width: 100%;\n  margin: auto;\n\n  @media only screen and (min-width: 600px) {\n    padding: 4em 20px;\n  }\n"]);return Hn=function(){return n},n}var Kn=function(){return a.a.createElement(Mn,null,a.a.createElement(p.a,null),a.a.createElement(s.a,{basename:"/swapi-search"},a.a.createElement(l.c,null,a.a.createElement(l.a,{exact:!0,path:"/",component:tn}),a.a.createElement(l.a,{exact:!0,path:"/character/:id",component:Sn}),a.a.createElement(l.a,{component:Wn}))))},Mn=u.a.div(Hn());i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Kn,null)),document.getElementById("root"))},65:function(n,e,t){n.exports=t(109)},70:function(n,e,t){}},[[65,1,2]]]);
//# sourceMappingURL=main.04b0d509.chunk.js.map