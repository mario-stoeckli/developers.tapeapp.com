"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[3133],{7859:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(2263),i=n(1483),a=n(1736),o=n(6010),s=n(7294);const c="codeBlock_FKPJ";function l(e){var t=e.children,n=e.language,l=e.title,u=(0,s.useState)((0,i.W5)()),d=u[0],p=u[1];(0,s.useEffect)((0,i.kw)((0,r.Z)(),p),[]);var v=(0,i.hd)(d),m=(0,i.jM)(d),h=(0,i.dz)(d),f=(0,i.xe)(d);function g(e){return(e||"").replace(new RegExp("#USER_API_KEY","g"),v).replace(new RegExp("#BASE_URL","g"),f).replace(new RegExp("#RECORD_ID","g"),m).replace(new RegExp("#RECORD_TITLE","g"),h)}var w=("string"==typeof t?[t]:Array.isArray(t)?t:[]).map((function(e){return"string"==typeof e?g(e):e})),k=g(l);return s.createElement("div",{className:(0,o.Z)(c)},s.createElement(a.Z,{title:k,language:n},w))}},1483:(e,t,n)=>{n.d(t,{hd:()=>E,M:()=>C,hU:()=>D,S$:()=>I,W5:()=>o,jM:()=>P,dz:()=>T,xe:()=>b,kw:()=>U});var r,i,a=(r=[],i={initializing:!1,runtime:"PRD",activeUserContext:void 0,activeUserContextIsLoading:!0,demoRecord:void 0,demoRecordIsLoading:!0},{get:function(){return i},set:function(e){i!==e&&(i=e,r.forEach((function(e){return e(i)})))},subscribe:function(e){return r.push(e),function(){return function(e){r=r.filter((function(t){return t!==e}))}(e)}}});function o(){return a.get()}function s(e){a.set(e)}var c=n(5861),l=n(7757),u=n.n(l);function d(e){return"DEV"===e?"http://localhost:3000":"https://tapeapp.com"}var p=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalContext {\n    ... on ActiveUserDevPortalContextDto {\n      userId\n      apiKey\n      user {\n        id\n        primaryName\n      }\n    }\n  }\n}\n"}),v=JSON.stringify({operationName:null,variables:{},query:"{\n      getUserSessions {\n        active\n        userId\n      }\n    }\n"});function m(e,t){return fetch(e+"/graphql/getActiveUserDevPortalContext",{method:"POST",headers:{"content-type":"application/json",uid:t},credentials:"include",mode:"cors",body:p}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalContext)||{}}))}function h(e){return fetch(e+"/graphql/getUserSessions",{method:"POST",headers:{"content-type":"application/json"},credentials:"include",mode:"cors",body:v}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getUserSessions)||[]}))}function f(e){return g.apply(this,arguments)}function g(){return(g=(0,c.Z)(u().mark((function e(t){var n,r,i,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:if(n=e.sent,(r=n.filter((function(e){return e.active}))).length){e.next=6;break}return e.abrupt("return",{});case 6:return i=r[0].userId,e.next=9,m(t,i);case 9:return a=e.sent,e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalDemoBlabItem {\n    id\n    title\n  }\n}"});function k(e,t){return fetch(e+"/graphql/getActiveUserDevPortalDemoRecord",{method:"POST",headers:{"content-type":"application/json",uid:t},credentials:"include",mode:"cors",body:w}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalDemoBlabItem)||{}}))}function x(){return(x=(0,c.Z)(u().mark((function e(t){var n,r,i,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o().initializing){e.next=2;break}return e.abrupt("return");case 2:return s(Object.assign({},o(),{initializing:!0})),n=d(t),e.prev=4,e.next=7,f(n);case 7:if(i=e.sent,s(Object.assign({},o(),{activeUserContext:i,activeUserContextIsLoading:!1})),!(a=null==(r=i.user)?void 0:r.id)){e.next=15;break}return e.next=13,k(n,a);case 13:c=e.sent,s(Object.assign({},o(),{demoRecord:c,demoRecordIsLoading:!1}));case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),console.error(e.t0),s(Object.assign({},o(),{activeUserContextIsLoading:!1,demoRecordIsLoading:!1}));case 21:case"end":return e.stop()}}),e,null,[[4,17]])})))).apply(this,arguments)}function y(e){return e.runtime}function b(e){return function(e){return"DEV"===e?"http://localhost:3000":"https://api.tapeapp.com"}(y(e))}function N(e){var t;return null!=(t=e.activeUserContext)?t:{}}function C(e){return e.activeUserContextIsLoading}function E(e){var t;return null!=(t=function(e){return N(e).apiKey}(e))?t:"user_key_replace_with_your_api_key"}function D(e){var t;return null==(t=N(e).user)?void 0:t.primaryName}function I(e){var t;return null!=(t=D(e))?t:"Developer"}function R(e){var t;return null!=(t=e.demoRecord)?t:{}}function P(e){var t;return null!=(t=function(e){return R(e).id}(e))?t:123}function T(e){var t;return null!=(t=function(e){return R(e).title}(e))?t:"Demo Record"}function U(e,t){var n,r,i=((null==e||null==(n=e.siteConfig)||null==(r=n.customFields)?void 0:r.runtime)||"PRD").trim().toUpperCase();return y(o())!==i&&s(Object.assign({},o(),{runtime:i})),function(e){x.apply(this,arguments)}(i),function(){return function(e){return a.subscribe(e)}(t)}}},3123:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),i=n(6010),a={note:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},o={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function s(e){var t=e.children,n=e.type,s=e.title,c=void 0===s?n:s,l=e.icon,u=void 0===l?a[n]:l;return r.createElement("div",{className:(0,i.Z)("admonition","admonition-"+n,"alert","alert--"+o[n])},r.createElement("div",{className:"admonition-heading"},r.createElement("h5",null,r.createElement("span",{className:"admonition-icon"},u),c)),r.createElement("div",{className:"admonition-content"},t))}},7072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=(n(7859),n(3123),["components"]),s={id:"introduction",title:"Tape Developer API",sidebar_label:"Introduction"},c=void 0,l={unversionedId:"api/introduction",id:"api/introduction",title:"Tape Developer API",description:"Developers use the API to access Tape's core resources like records, apps or workspaces. Developers can connect services to Tape and build interactive experiences for users within Tape. Using the navigation on the left, you'll find details for each endpoint and type of resource used in the API.",source:"@site/docs/api/introduction.md",sourceDirName:"api",slug:"/api/introduction",permalink:"/docs/api/introduction",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/introduction.md",tags:[],version:"current",frontMatter:{id:"introduction",title:"Tape Developer API",sidebar_label:"Introduction"},sidebar:"mainSidebar",next:{title:"Authentication",permalink:"/docs/api/authentication"}},u={},d=[{value:"Conventions",id:"conventions",level:2},{value:"Code samples",id:"code-samples",level:2}],p={toc:d};function v(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Developers use the API to access Tape's core resources like records, apps or workspaces. Developers can connect services to Tape and build interactive experiences for users within Tape. Using the navigation on the left, you'll find details for each endpoint and type of resource used in the API."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If this is your first look at the Tape API, we recommend beginning with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/guide/getting-started"},"Getting started guide"),"."))),(0,a.kt)("h2",{id:"conventions"},"Conventions"),(0,a.kt)("p",null,"The base URL to send all API requests is ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.tapeapp.com"),". HTTPS is required for all API requests."),(0,a.kt)("p",null,"The Tape API follows RESTful conventions when possible, with most operations performed via ",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"PUT"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," requests on all resources. Request and response bodies are encoded as JSON."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JSON conventions")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Property names are in snake_case (not camelCase or kebab-case)."),(0,a.kt)("li",{parentName:"ul"},"Temporal values (dates and datetimes) are returned as strings in a ISO 8601 similar format. Datetimes will include the time value (2020-08-12 02:12:33) while dates will include only the date (2020-08-12). ",(0,a.kt)("a",{parentName:"li",href:"date-timezone"},"More details on date and datetimes"),".")),(0,a.kt)("h2",{id:"code-samples"},"Code samples"),(0,a.kt)("p",null,"Samples requests and responses are shown for each endpoint. Requests are shown using cURL. To increase readability, we use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-u")," option of cURL to pass the user API key instead of specifiying the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header. These samples make it easy to copy, paste, and modify as you build your integration."))}v.isMDXComponent=!0}}]);