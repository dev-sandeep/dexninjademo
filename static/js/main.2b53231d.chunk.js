(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{102:function(e,t,a){e.exports=a(176)},107:function(e,t,a){},108:function(e,t,a){},136:function(e,t){},138:function(e,t){},139:function(e,t){},140:function(e,t){},141:function(e,t){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(45),l=a.n(o),r=(a(107),a(108),a(6)),i=a(101),u=a(36),s=a.n(u),m=a(43),d=a(14),f=a(7);var E=c.a.createContext([{},function(){}]),v={ROUTE:{COLLECTIONS:"collections",DETAILS:"details"}},p=function(e){var t=Object(n.useState)({dashboard:[{id:1,name:"Manage Collections",icon:f.i,color:"bg-aqua",link:v.ROUTE.COLLECTIONS},{id:2,name:"Manage Documents",icon:f.f,color:"bg-green",link:v.ROUTE.COLLECTIONS},{id:3,name:"Manage Configurations",icon:f.c,color:"bg-yellow",link:v.ROUTE.COLLECTIONS},{id:4,name:"Manage Users",icon:f.m,color:"bg-red",link:v.ROUTE.COLLECTIONS}]}),a=Object(r.a)(t,2),o=a[0],l=a[1];return c.a.createElement(E.Provider,{value:[o,l]},e.children)},h=function(){var e=Object(n.useContext)(E),t=Object(r.a)(e,2),a=t[0],c=t[1];return{setData:function(e,t,a){c((function(n){var c=Object(d.a)({},n,Object(m.a)({},t,e));return"function"===typeof a&&a(c),c}))},getData:function(e){return a[e]}}};var b=a(55);var O=function(){var e=h(),t=(e.setData,e.getData,Object(n.useState)("")),a=Object(r.a)(t,2);return a[0],a[1],c.a.createElement(b.a,{bg:"light",expand:"lg"},c.a.createElement(b.a.Brand,{href:"/"},"Dexninja"),c.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),c.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},c.a.createElement(i.a,{className:"mr-auto"})))},g=a(10),N=a(37);function j(e){var t=Object(N.f)();return c.a.createElement("div",{className:"col-lg-3 col-xs-6"},c.a.createElement("div",{className:"small-box ".concat(e.color)},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,e.name)),c.a.createElement("div",{className:"icon"},c.a.createElement(g.a,{icon:e.icon})),c.a.createElement("a",{href:"#",className:"small-box-footer",onClick:function(a){t.push("/".concat(e.link))}},"More info ",c.a.createElement(g.a,{icon:f.a}))))}var y=function(){var e=(0,h().getData)("dashboard").map((function(e){return c.a.createElement(j,{key:e.name,link:e.link,icon:e.icon,name:e.name,color:e.color})}));return c.a.createElement("section",{id:"home-pg",className:"m-10-b"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},e)))},C=a(12),w=a(68),k=a(53),T=a(54),S={URL:{COLLECTIONS:{GET:"http://ec2-35-176-120-96.eu-west-2.compute.amazonaws.com:5000/api/collections",KEY:"collections"},FILTERS:{GET:"http://ec2-35-176-120-96.eu-west-2.compute.amazonaws.com:5002/dexninja_api/collections/$id/filters",KEY:"filters"},DOCUMENT:{GET:"http://ec2-35-176-120-96.eu-west-2.compute.amazonaws.com:5002/dexninja_api/collections/$cid/documents/$did",POST:"http://ec2-35-176-120-96.eu-west-2.compute.amazonaws.com:5002/dexninja_api/collections/$cid/documents",KEY:"document"},DOCUMENTS:{GET:"http://ec2-35-176-120-96.eu-west-2.compute.amazonaws.com:5002/dexninja_api/collections/$id/documents?size=20",KEY:"documents"},ENTITIES:{GET:"http://ec2-35-176-120-96.eu-west-2.compute.amazonaws.com:5002/dexninja_api/collections/$cid/documents/$did/entities",PUT:"http://ec2-35-176-120-96.eu-west-2.compute.amazonaws.com:5002/dexninja_api/collections/$cid/documents/$did/entities",KEY:"entities"}}};function x(e,t){t=t||"";var a=""+S.URL.DOCUMENTS.GET+t;return a=a.replace("$id",e),new Promise((function(e,t){U(a).then((function(t){var a=t.data;e(a)}),(function(e){t(e)}))}))}function L(e,t){var a=""+S.URL.DOCUMENT.POST;return a=a.replace("$cid",e),new Promise((function(e,n){(function(e,t){if(!e)return void console.error("URL is a mandatory field to make an API call");return new Promise((function(a,n){s.a.post(e,t).then((function(e){a(e)}),(function(){n()}))}))})(a,t).then((function(t){var a=t.data;e(a)}),(function(e){n(e)}))}))}function I(e,t,a){var n=""+S.URL.ENTITIES.PUT;return n=n.replace("$cid",e).replace("$did",t),new Promise((function(e,t){(function(e,t){if(!e)return void console.error("URL is a mandatory field to make an API call");return new Promise((function(a,n){s.a.put(e,t).then((function(e){a(e)}),(function(){n()}))}))})(n,a).then((function(t){var a=t.data;e(a)}),(function(e){t(e)}))}))}function U(e){if(e)return new Promise((function(t,a){s.a.get(e).then((function(e){t(e)}),(function(e){a(e)}))}));console.error("URL is a mandatory field to make an API call")}function D(e){var t=h(),a=t.setData,o=t.getData,l=Object(n.useState)({}),i=Object(r.a)(l,2),u=i[0],s=i[1],f=function(e){var t=e.target.checked,n=e.target.name,c=e.target.id,l=o("filter-data")||{};t?(l.hasOwnProperty(n)||(l[n]=[]),a(Object(d.a)({},l,Object(m.a)({},n,[].concat(Object(w.a)(l[n]),[c]))),"filter-data",E)):a(Object(d.a)({},l,Object(m.a)({},n,l[n].filter((function(e){return e!=c})))),"filter-data",E)},E=function(e){var t=o("selectedCollectionId"),n=e["filter-data"],c=[];s(n),Object.keys(n).map((function(e){n[e].map((function(t){c.push("".concat(e,":").concat(t))}))})),x(t,"&filter="+c.join(",")).then((function(e){a(e,"documents")}))};return c.a.createElement(T.a,null,c.a.createElement(k.a.Toggle,{as:T.a.Header,eventKey:e.event},e.head,c.a.createElement("b",{className:"float-right"},JSON.stringify(),u.hasOwnProperty(e.head)&&u[e.head].length||"")),c.a.createElement(k.a.Collapse,{eventKey:e.event},c.a.createElement(T.a.Body,null,c.a.createElement(C.a.Group,{id:"formGridCheckbox"},e.checks.map((function(t){return c.a.createElement(C.a.Check,{custom:!0,key:t,onChange:f,name:e.head,id:t,type:"checkbox",label:t})}))))))}var P=a(39),R=a(98),_=a(100),G=a(48),$=a(76),M=a(42);function K(e){var t=Object(n.useState)({type:e.type,value:e.val}),a=Object(r.a)(t,2),o=a[0],l=a[1];return c.a.createElement($.a,{className:"mb-3 input-btn input-btn-comp"},c.a.createElement(G.a,{defaultValue:e.type,onChange:function(e){return l(Object(d.a)({},o,{type:e.target.value}))},"aria-label":e.type}),c.a.createElement(G.a,{defaultValue:e.val,onChange:function(e){return l(Object(d.a)({},o,{value:e.target.value}))},"aria-label":e.val}),c.a.createElement($.a.Append,null,c.a.createElement(M.a,{variant:"outline-secondary",className:"border-1-gray",onClick:function(){var t=o.type,a=o.value;if(e.click(),e.type==t&&e.val==a)return console.log("values are same"),!1;e.save(e.type,t,e.val,a,e.activestatus)}},c.a.createElement(g.a,{icon:f.b}))))}function A(e){var t=Object(n.useState)(),a=Object(r.a)(t,2),o=(a[0],a[1]),l=function(t,a){var n=d.map((function(e){return e.value==t&&(e.is_active=a,o(a)),e})),c=e.head,l=[{_active:a,previous_type:c,updated_type:c,previous_value:t,updated_value:t}];I(e.cid,e.did,l).then((function(e){console.log("values updated",e),E(n)}))},i=function(e,t){var a=d.map((function(a){return a.value==e&&(a.user_modified=t),a}));E(a)},u=function(t,a,n,c,o){var l=[{_active:o,previous_type:t,updated_type:a,previous_value:n,updated_value:c}];I(e.cid,e.did,l).then((function(e){console.log("values updated",e)}))},s=Object(n.useState)([]),m=Object(r.a)(s,2),d=m[0],E=m[1];return Object(n.useEffect)((function(){E(e.val)}),[]),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("th",null,e.head)),d.map((function(t){return c.a.createElement("tr",{className:"detail-setting"},c.a.createElement("td",null,c.a.createElement("div",{className:t.user_modified?"hide":"show"},c.a.createElement("span",{className:"text ".concat(t.is_active?"":"line-through")},t.value),c.a.createElement("span",{className:"float-right"},c.a.createElement(R.a,{as:_.a,title:""},t.is_active?c.a.createElement(P.a.Item,{eventKey:"1",onClick:function(){return l(t.value,!1)}},c.a.createElement(g.a,{icon:f.j}),"Disable"):c.a.createElement(P.a.Item,{eventKey:"3",onClick:function(){return l(t.value,!0)}},c.a.createElement(g.a,{icon:f.j}),"Enable"),c.a.createElement(P.a.Item,{eventKey:"2",onClick:function(){return i(t.value,!0)}},c.a.createElement(g.a,{icon:f.e}),"Edit")))),c.a.createElement("div",{className:t.user_modified?"show":"hide"},c.a.createElement(K,{activestatus:t.is_active,type:e.head,val:t.value,save:u,click:function(){return i(t.value,!1)}}))))})))}function z(e){var t={};e.data.map((function(e){t[e.type]||(t[e.type]=[]),t[e.type].push(e)}));var a=Object.keys(t).map((function(a){return c.a.createElement(A,{cid:e.cid,did:e.did,head:a,val:Object(w.a)(t[a])})}));return c.a.createElement(c.a.Fragment,null,a)}function F(e){return c.a.createElement("div",{className:"box box-".concat(e.type||"primary"," ").concat(e.solid?"box-solid":""," ").concat(e.css)},c.a.createElement("div",{className:"box-body"},e.children))}var B=a(77);function Y(e){var t=Object(n.useState)({page:1}),a=Object(r.a)(t,2),o=a[0],l=a[1];return c.a.createElement("div",{className:"document-part"},c.a.createElement("div",{className:"pdf-control"},c.a.createElement("a",{className:o.page==o.totalPage?"hide":"show",onClick:function(){var e=o.page;l(Object(d.a)({},o,{page:++e}))}},"Next")," \xa0\xa0 ",c.a.createElement("a",{className:1==o.page?"hide":"show",onClick:function(){var e=o.page;l(Object(d.a)({},o,{page:--e}))}},"Previous")),c.a.createElement(B.Document,{onLoadSuccess:function(e){var t=e.numPages;l(Object(d.a)({},o,{totalPage:t}))},file:e.document},c.a.createElement(B.Page,{width:window.innerWidth*(8.5/12),pageNumber:o.page})))}var J=function(e){var t=h().getData,a=Object(n.useState)({}),o=Object(r.a)(a,2),l=(o[0],o[1]),i=Object(n.useState)([]),u=Object(r.a)(i,2),s=u[0],m=u[1],d=Object(n.useState)(""),f=Object(r.a)(d,2),E=f[0],v=f[1],p=Object(n.useState)("pdf"),b=Object(r.a)(p,2),O=b[0],g=b[1],N=Object(n.useState)(""),j=Object(r.a)(N,2),y=j[0],w=j[1],k=e.match.params.cid,T=e.match.params.did;T||console.error("ERROR OCCURRED! Go to home page");var x=function(e){var t=e._links;if(!t||0==t.length)return"";var a=t.find((function(e){return"text"==e.rel}));U(a.href).then((function(e){w(e.data)})),a=t.find((function(e){return"file"==e.rel})),v(a.href)},L=function(){var e=t("documents");if(e&&0!=e.length){var a=e.find((function(e){return e.id==T}));l(a),x(a)}else(function(e,t){var a=""+S.URL.DOCUMENT.GET;return a=a.replace("$cid",e).replace("$did",t),new Promise((function(e,t){U(a).then((function(t){var a=t.data;e(a)}),(function(e){t(e)}))}))})(k,T).then((function(e){l(e),x(e)}))},I=function(){(function(e,t){var a=""+S.URL.ENTITIES.GET;return a=a.replace("$cid",e).replace("$did",t),new Promise((function(e,t){U(a).then((function(t){var a=t.data;e(a)}),(function(e){t(e)}))}))})(k,T).then((function(e){m(e)}))};return Object(n.useEffect)((function(){L(),I()}),[]),["Loc","Invoice Date","Billing Cycle","Total","FAC","Invoice","Previous Balance"].map((function(e,t){return c.a.createElement(D,{head:e,event:t},c.a.createElement(C.a.Group,{id:"formGridCheckbox"},c.a.createElement(C.a.Check,{type:"checkbox",label:"check box #1"}),c.a.createElement(C.a.Check,{type:"checkbox",label:"check box #2"}),c.a.createElement(C.a.Check,{type:"checkbox",label:"check box #3"})))})),c.a.createElement("section",{id:"detail-pg",className:"m-2-b custom"},c.a.createElement("div",{className:"row text-l m-l-r-10"},c.a.createElement("div",{className:"col-lg-9 pdf-view"},c.a.createElement(F,{head:"Document",solid:!0,type:"primary",className:"box"},c.a.createElement("div",{className:"text-data"},c.a.createElement("div",{className:"pdf"==O?"show":"hide"},c.a.createElement(Y,{document:E})),c.a.createElement("div",{className:"text"==O?"show":"hide"},y)))),c.a.createElement("div",{class:"col-lg-3 setting"},c.a.createElement(F,{head:"Settings",solid:!0,type:"primary"},c.a.createElement(C.a.Group,{controlId:"formGridState"},c.a.createElement(C.a.Control,{as:"select",onChange:function(e){var t=e.target.value;g(t)}},c.a.createElement("option",{value:"pdf"},"PDF"),c.a.createElement("option",{value:"text"},"TEXT"))),c.a.createElement("table",{size:"sm",className:"table p-5-tbl setting-tbl "},c.a.createElement(z,{cid:e.match.params.cid,did:e.match.params.did,data:s}))))))};function W(e){var t=Object(N.f)();return c.a.createElement(c.a.Fragment,null,e.data.map((function(a){return c.a.createElement("div",{className:"single-row",key:a.id},c.a.createElement("div",{className:"icon"},c.a.createElement(g.a,{icon:f.g})),c.a.createElement("div",{className:"row pointer",onClick:function(){return t.push("/collections/".concat(e.cid,"/details/").concat(a.id))}},c.a.createElement("div",{className:"col-lg-12"}," ",a.name),c.a.createElement("div",{className:"col-lg-12"}," ",c.a.createElement("b",null,a.type)," |  ",a.created_on)),c.a.createElement("div",{className:"toolbar"},c.a.createElement("span",{className:"action-btn"},c.a.createElement(g.a,{icon:f.k})),c.a.createElement("span",{className:"action-btn"},c.a.createElement(g.a,{icon:f.d}))))})))}function V(e){return c.a.createElement("div",{className:"filter-text"},Object.keys(e.data).map((function(t){return c.a.createElement("div",{key:t,className:e.data[t].length>0?"show":"hide"},c.a.createElement(g.a,{icon:f.h}),"  \xa0",c.a.createElement("b",{className:"head"},t)," \xa0 \xa0",c.a.createElement("span",{className:"body-text"},e.data[t].length>0?e.data[t].join(", "):""))})))}var q=function(){var e=h(),t=e.setData,a=e.getData,o=Object(n.useState)([]),l=Object(r.a)(o,2),i=l[0],u=l[1],s=Object(n.useState)([]),m=Object(r.a)(s,2),E=m[0],v=m[1],p=Object(n.useState)({}),b=Object(r.a)(p,2),O=b[0],N=b[1],j=Object(n.useState)(""),y=Object(r.a)(j,2),w=y[0],T=y[1],I=Object(n.useState)(""),P=Object(r.a)(I,2);function R(e){_(e).then((function(e){G(e),$(e)}))}P[0],P[1];var _=function(e){return new Promise((function(a,n){(function(){var e=""+S.URL.COLLECTIONS.GET;return new Promise((function(t,a){U(e).then((function(e){var a=e.data;t(a)}),(function(e){a(e)}))}))})().then((function(n){if(n&&0!=n.length){var c=n[0],o=e||c.id;N(Object(d.a)({},O,{collection:o})),u(n),t(o,"selectedCollectionId"),t(n,"collections"),a(o)}}))}))},G=function(e){(function(e){var t=""+S.URL.FILTERS.GET;return t=t.replace("$id",e),new Promise((function(e,a){U(t).then((function(t){var a=t.data;e(a)}),(function(e){a(e)}))}))})(e=e||O.collection).then((function(e){v(e),t(e,"filters")}))},$=function(e){x(e=e||O.collection).then((function(e){t(e,"documents")}))},K=function(e){N(Object(d.a)({},O,{collection:e.target.value})),t(e.target.values,"selectedCollectionId"),R(e.target.value)};Object(n.useEffect)((function(){R()}),[]);var A=[];return E&&E.length>0&&(A=E.map((function(e,t){return c.a.createElement(D,{key:e.label,head:e.label,event:t,checks:e.keywords})}))),c.a.createElement("section",{id:"home-pg",className:"custom"},c.a.createElement("div",{className:"row text-l m-l-r-10"},c.a.createElement("div",{className:"col-lg-3"},c.a.createElement("small",null,"Select Collection"),c.a.createElement(C.a.Group,{md:"4",controlId:"formGridState"},c.a.createElement(C.a.Control,{as:"select",onChange:K},i.map((function(e){return c.a.createElement("option",{value:e.id,key:e.name},e.name)}))))),c.a.createElement("div",{className:"col-lg-9"},c.a.createElement("div",{className:"filter-element"},c.a.createElement("div",{className:"opt"},c.a.createElement("small",null,"Order By"),c.a.createElement(C.a.Group,{md:"3",className:"w-240",controlId:"formGridState"},c.a.createElement(C.a.Control,{as:"select",onChange:K},c.a.createElement("option",{value:1,key:1},"Date Modified")))),c.a.createElement("div",{className:"opt-upload-btn"},c.a.createElement("input",{type:"file",ref:function(e){return T(e)},className:"hide",onChange:function(e){var t=e.target.files[0],a=new FormData;a.append("cid",O.collection),a.append("files",t,t.name),L(O.collection,a).then((function(){$(O.collection),G(O.collection)}))}}),c.a.createElement(M.a,{variant:"primary",onClick:function(){w.click()}},c.a.createElement(g.a,{icon:f.l}),"\xa0 Upload")," "))),c.a.createElement("div",{className:"col-lg-3"},c.a.createElement(F,{head:"Filters",solid:!0,type:"primary"},c.a.createElement(k.a,{defaultActiveKey:"0"},A))),c.a.createElement("div",{className:"col-lg-9"},c.a.createElement(F,{head:"Document List",solid:!0,type:"primary"},c.a.createElement(V,{data:a("filter-data")||{}}),c.a.createElement("div",{className:"doc-list"},c.a.createElement(W,{cid:O.collection,data:a("documents")||[]}))))))},H=a(50);var X=function(){var e={ROUTE:{COLLECTIONS:"collections",DETAILS:"details"}};return c.a.createElement("div",{className:"App"},c.a.createElement(p,null,c.a.createElement(O,null),c.a.createElement(H.a,null,c.a.createElement(N.c,null,c.a.createElement(N.a,{exact:!0,path:"/",component:y}),c.a.createElement(N.a,{exact:!0,path:"/".concat(e.ROUTE.COLLECTIONS),component:q}),c.a.createElement(N.a,{exact:!0,path:"/".concat(e.ROUTE.COLLECTIONS,"/:cid/").concat(e.ROUTE.DETAILS,"/:did"),component:J})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},58:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=58}},[[102,1,2]]]);
//# sourceMappingURL=main.2b53231d.chunk.js.map