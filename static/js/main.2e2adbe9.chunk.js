(this["webpackJsonpwebdev-6"]=this["webpackJsonpwebdev-6"]||[]).push([[0],{33:function(t,e,c){},62:function(t,e,c){},63:function(t,e,c){"use strict";c.r(e);var n=c(1),s=c.n(n),a=c(27),r=c.n(a),i=(c(33),c(11)),j=c(2),o=c(0);var b=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 text-center align-items-center",children:[Object(o.jsx)("h1",{children:"Cats, Dogs, Foxes! Pick one! "}),Object(o.jsx)("button",{type:"button",className:"btn btn-light",children:Object(o.jsx)(i.b,{to:"/cats",children:"Cats"})})," ",Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"button",className:"btn btn-light",children:Object(o.jsx)(i.b,{to:"/dogs",children:"Dogs"})})," ",Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"button",className:"btn btn-light",children:Object(o.jsx)(i.b,{to:"/foxPic",children:"Foxes"})})," ",Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"button",className:"btn btn-light",children:Object(o.jsx)(i.b,{to:"/catfacts",children:"Cat Facts"})})," ",Object(o.jsx)("br",{})]})})})})},l=c(7),u=c.n(l),d=c(9),h=c(10),x=c(14);var O=function(){var t=Object(n.useState)(null),e=Object(h.a)(t,2),c=e[0],s=e[1];return Object(n.useEffect)((function(){(function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("https://thatcopy.pw/catapi/rest/");case 2:200===(e=t.sent).status&&s(e.data.webpurl);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 text-center",children:[Object(o.jsx)("h1",{children:"Cats"}),Object(o.jsx)("img",{src:c,alt:"Cat Pic"})]})})})})},f=c(14);var p=function(){var t=Object(n.useState)(null),e=Object(h.a)(t,2),c=e[0],s=e[1];return Object(n.useEffect)((function(){(function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("https://dog.ceo/api/breeds/image/random");case 2:200===(e=t.sent).status&&s(e.data.message);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 text-center align-items-center",children:[Object(o.jsx)("h1",{children:"Dogs"}),Object(o.jsx)("img",{src:c,alt:"Dog Pic"})]})})})})},m=c(14);var v=function(){var t=Object(n.useState)([]),e=Object(h.a)(t,2),c=e[0],s=e[1];return Object(n.useEffect)((function(){(function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.get("https://cat-fact.herokuapp.com/facts");case 2:e=t.sent,s(e.data.map((function(t){return Object(o.jsxs)("p",{children:[" ",t.text," "]},t._id)})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 text-center",children:[Object(o.jsx)("h1",{children:"Cats Fact:"}),Object(o.jsx)("h2",{children:"These facts change every day!"}),Object(o.jsx)("h3",{children:"Feel free to come back tomorrow for a new set of facts."})," ",Object(o.jsx)("br",{}),c]})})})})},g=c(14);var w=function(){var t=Object(n.useState)(""),e=Object(h.a)(t,2),c=e[0],s=e[1];return Object(n.useEffect)((function(){(function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.get("https://randomfox.ca/floof/");case 3:e=t.sent,s(e.data.image),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("Not Found");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container-fluid",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 text-center",children:[Object(o.jsx)("h1",{children:"Random Fox Pic"}),Object(o.jsx)("h2",{children:"Refresh the page for a fox pic!"}),null!=c&&Object(o.jsx)("img",{src:c,alt:"foxPic"})]})})})})};c(62);var N=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/dogs",component:p}),Object(o.jsx)(j.a,{path:"/cats",component:O}),Object(o.jsx)(j.a,{path:"/catfacts",component:v}),Object(o.jsx)(j.a,{path:"/foxPic",component:w}),Object(o.jsx)(j.a,{path:"/",component:b})]})})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.2e2adbe9.chunk.js.map