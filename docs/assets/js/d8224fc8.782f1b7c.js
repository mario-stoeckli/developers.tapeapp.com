"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[1196],{7859:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2263),a=n(5208),o=n(1736),i=n(6010),l=n(7294);const u="codeBlock_FKPJ";function s(e){var t=e.children,n=e.language,s=e.title,c=(0,r.Z)(),d=(0,l.useState)((0,a.W5)()),p=d[0],h=d[1];(0,l.useEffect)((function(){return(0,a.kw)(c,h)}),[]);var v=(0,a.hd)(p),m=(0,a.jM)(p),g=(0,a.dz)(p),f=(0,a.xe)(p);function y(e){return(e||"").replace(new RegExp("#USER_API_KEY","g"),v).replace(new RegExp("#BASE_URL","g"),f).replace(new RegExp("#RECORD_ID","g"),m).replace(new RegExp("#RECORD_TITLE","g"),g)}var b=("string"==typeof t?[t]:Array.isArray(t)?t:[]).map((function(e){return"string"==typeof e?y(e):e})),E=y(s);return l.createElement("div",{className:(0,i.Z)(u)},l.createElement(o.Z,{title:E,language:n},b))}},5208:(e,t,n)=>{n.d(t,{hd:()=>C,M:()=>I,hU:()=>_,S$:()=>N,W5:()=>i,jM:()=>A,dz:()=>D,xe:()=>x,kw:()=>S});var r,a,o=(r=[],a={initializing:!1,runtime:"PRD",activeUserContext:void 0,activeUserContextIsLoading:!0,demoRecord:void 0,demoRecordIsLoading:!0},{get:function(){return a},set:function(e){a!==e&&(a=e,r.forEach((function(e){return e(a)})))},subscribe:function(e){return r.push(e),function(){return function(e){r=r.filter((function(t){return t!==e}))}(e)}}});function i(){return o.get()}function l(e){o.set(e)}var u=n(5861),s=n(7757),c=n.n(s);function d(e){return"DEV"===e?"http://localhost:3000":"https://tapeapp.com"}var p=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalContext {\n    ... on ActiveUserDevPortalContextDto {\n      userId\n      apiKey\n      user {\n        id\n        primaryName\n      }\n    }\n  }\n}\n"}),h=JSON.stringify({operationName:null,variables:{},query:"{\n      getUserSessions {\n        active\n        userId\n      }\n    }\n"}),v={"content-type":"application/json"};function m(e,t){return fetch(e+"/graphql/getActiveUserDevPortalContext",{method:"POST",headers:Object.assign({},v,{uid:t}),credentials:"include",mode:"cors",body:p}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalContext)||{}}))}function g(e){return fetch(e+"/graphql/getUserSessions",{method:"POST",headers:v,credentials:"include",mode:"cors",body:h}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getUserSessions)||[]}))}function f(e){return y.apply(this,arguments)}function y(){return(y=(0,u.Z)(c().mark((function e(t){var n,r,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:if(n=e.sent,(r=n.filter((function(e){return e.active}))).length){e.next=6;break}return e.abrupt("return",{});case 6:return a=r[0].userId,e.next=9,m(t,a);case 9:return o=e.sent,e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalDemoBlabItem {\n    id\n    title\n  }\n}"}),E={"content-type":"application/json"};function k(e,t){return fetch(e+"/graphql/getActiveUserDevPortalDemoRecord",{method:"POST",headers:Object.assign({},E,{uid:t}),credentials:"include",mode:"cors",body:b}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalDemoBlabItem)||{}}))}function w(){return(w=(0,u.Z)(c().mark((function e(t){var n,r,a,o,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i().initializing){e.next=2;break}return e.abrupt("return");case 2:return l(Object.assign({},i(),{initializing:!0})),r=d(t),e.next=6,f(r);case 6:if(a=e.sent,l(Object.assign({},i(),{activeUserContext:a,activeUserContextIsLoading:!1})),!(o=null==(n=a.user)?void 0:n.id)){e.next=14;break}return e.next=12,k(r,o);case 12:u=e.sent,l(Object.assign({},i(),{demoRecord:u,demoRecordIsLoading:!1}));case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return e.runtime}function x(e){return function(e){return"DEV"===e?"http://localhost:3000":"https://api.tapeapp.com"}(T(e))}function R(e){var t;return null!=(t=e.activeUserContext)?t:{}}function I(e){return e.activeUserContextIsLoading}function C(e){var t;return null!=(t=function(e){return R(e).apiKey}(e))?t:"user_key_replace_with_your_api_key"}function _(e){var t;return null==(t=R(e).user)?void 0:t.primaryName}function N(e){var t;return null!=(t=_(e))?t:"Developer"}function P(e){var t;return null!=(t=e.demoRecord)?t:{}}function A(e){var t;return null!=(t=function(e){return P(e).id}(e))?t:123}function D(e){var t;return null!=(t=function(e){return P(e).title}(e))?t:"Demo Record"}function S(e,t){var n,r,a=((null==e||null==(n=e.siteConfig)||null==(r=n.customFields)?void 0:r.runtime)||"PRD").trim().toUpperCase();return T(i())!==a&&l(Object.assign({},i(),{runtime:a})),function(e){w.apply(this,arguments)}(a),function(e){return o.subscribe(e)}(t)}},3123:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010),o={note:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},i={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function l(e){var t=e.children,n=e.type,l=e.title,u=void 0===l?n:l,s=e.icon,c=void 0===s?o[n]:s;return r.createElement("div",{className:(0,a.Z)("admonition","admonition-"+n,"alert","alert--"+i[n])},r.createElement("div",{className:"admonition-heading"},r.createElement("h5",null,r.createElement("span",{className:"admonition-icon"},c),u)),r.createElement("div",{className:"admonition-content"},t))}},8215:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7462),a=n(7294),o=n(2389),i=n(3725),l=n(6010);const u="tabItem_LplD";function s(e){var t,n,o,s=e.lazy,c=e.block,d=e.defaultValue,p=e.values,h=e.groupId,v=e.className,m=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:m.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),f=(0,i.lx)(g,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=m.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=m[0])?void 0:o.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.UB)(),E=b.tabGroupChoices,k=b.setTabGroupChoices,w=(0,a.useState)(y),T=w[0],x=w[1],R=[],I=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var C=E[h];null!=C&&C!==T&&g.some((function(e){return e.value===C}))&&x(C)}var _=function(e){var t=e.currentTarget,n=R.indexOf(t),r=g[n].value;r!==T&&(I(t),x(r),null!=h&&k(h,r))},N=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=R.indexOf(e.currentTarget)+1;n=R[r]||R[0];break;case"ArrowLeft":var a=R.indexOf(e.currentTarget)-1;n=R[a]||R[R.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return R.push(e)},onKeyDown:N,onFocus:_,onClick:_},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(m.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,o.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},6956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>w,frontMatter:()=>g,metadata:()=>y,toc:()=>E});var r=n(7462),a=n(3366),o=n(7294),i=n(3905),l=n(2263),u=n(3123),s=n(5208),c="180px";function d(){var e=(0,l.Z)(),t=(0,o.useState)((0,s.W5)()),n=t[0],r=t[1];(0,o.useEffect)((function(){return(0,s.kw)(e,r)}),[]);var a=(0,s.M)(n),i=(0,s.hU)(n);return a?o.createElement("div",{style:{minHeight:c}}):i?o.createElement("div",{style:{minHeight:c}},o.createElement(u.Z,{type:"tip",title:"Logged in",icon:"\u2705"},o.createElement("span",null,"Hey ",i,' \ud83d\udc4b Looks like you are already logged into Tape, so we were able to pre-fill your user API key and some IDs in the examples below. You can use the "copy" button to copy the code to your clipboard. Most cURL requests work out of the box and can be directly pasted into a terminal.'))):o.createElement("div",{style:{minHeight:c}},o.createElement(u.Z,{type:"info",title:"Log in",icon:"\ud83d\udc64"},o.createElement("span",null,"Hey there \ud83d\udc4b Looks like you are currently not logged into Tape. All examples in this guide will be pre-filled with stub data. To change this, log into your Tape account and refresh this page."),o.createElement("p",null,o.createElement("a",{target:"_blank",href:"https://tapeapp.com/signin"},o.createElement("button",{type:"outline-darkest",style:{margin:"9px 0px"}},"Login here")))))}var p=n(7859),h=n(9877),v=n(8215),m=["components"],g={id:"getting-started",title:"Getting Started"},f=void 0,y={unversionedId:"guide/getting-started",id:"guide/getting-started",title:"Getting Started",description:"If you're new to the Tape API, you've come to the right place. In this guide you'll learn how to use the Tape API by interacting with a record.",source:"@site/docs/guide/getting-started.md",sourceDirName:"guide",slug:"/guide/getting-started",permalink:"/docs/guide/getting-started",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/guide/getting-started.md",tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"guidesSidebar",next:{title:"Contribute",permalink:"/docs/contribute"}},b={},E=[{value:"Authentication",id:"authentication",level:2},{value:"The Basics",id:"the-basics",level:2},{value:"Retrieve your first Record",id:"retrieve-your-first-record",level:2}],k={toc:E};function w(e){var t=e.components,n=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"UserLoginInfo"}),(0,i.kt)("p",null,"If you're new to the Tape API, you've come to the right place. In this guide you'll learn how to use the Tape API by interacting with a record."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The easiest way to authenticate with the Developer API is to use your personal user API key. User API keys have the prefix ",(0,i.kt)("inlineCode",{parentName:"p"},"user_key_"),". If you are not already a Tape user, the first step is to sign up and create an account ",(0,i.kt)("a",{parentName:"p",href:"https://tapeapp.com/signup"},"here"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note that your API key carries the same privileges as your user account, so be sure to keep it secret! However, if your API key gets leaked, you can always deactivate it and generate a new one inside your user settings.")),(0,i.kt)("h2",{id:"the-basics"},"The Basics"),(0,i.kt)("p",null,"The world runs on JSON over HTTP (or HTTPS hopefully). The Tape API is no exception, so if you know how to send and receive JSON data via HTTPS, you are all set.\nThe API is RESTful for the most part, meaning that you can use the HTTP verbs ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," to interact with resources like records, apps and workspaces.\nThe base URL to send all API requests is ",(0,i.kt)("inlineCode",{parentName:"p"},"https://api.tapeapp.com"),"."),(0,i.kt)("h2",{id:"retrieve-your-first-record"},"Retrieve your first Record"),(0,i.kt)("p",null,"Records are the place where work gets done inside every Tape organization. The endpoint for retrieving a record is ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/records/{record_id}"),". Let's go ahead and retrieve a record:"),(0,i.kt)(h.Z,{mdxType:"Tabs"},(0,i.kt)(v.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(p.Z,{language:"shell",title:'Get your record "#RECORD_TITLE"',mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/#RECORD_ID  \\\n  -u #USER_API_KEY:\n")),(0,i.kt)(v.Z,{value:"js",label:"Node.js",mdxType:"TabItem"},(0,i.kt)(p.Z,{language:"javascript",title:'Get your record "#RECORD_TITLE"',mdxType:"ContextCodeBlock"},'let req = https.get(\n  "#BASE_URL/v1/record/#RECORD_ID",\n  {\n    method: "get",\n    headers: {\n      Authorization: "Bearer #USER_API_KEY",\n    },\n  },\n  (res) => {\n    res.on("data", (data) => {\n      console.log(JSON.stringify(JSON.parse(data.toString()), null, 2));\n    });\n  }\n);')),(0,i.kt)(v.Z,{value:"php",label:"PHP",mdxType:"TabItem"},(0,i.kt)(p.Z,{language:"php",title:'Get your record "#RECORD_TITLE"',mdxType:"ContextCodeBlock"},"<?php\n$opts = array(\n  'http'=>array(\n    'method'=>\"GET\",\n    'header'=>\"Authorization: Bearer #USER_API_KEY\"\n  )\n);\n\n\n$context = stream_context_create($opts);\n$data = file_get_contents('#BASE_URL/v1/record/20', false, $context);\n$responseContent = json_decode($data, true);\necho json_encode($responseContent, JSON_PRETTY_PRINT);\n?>")),(0,i.kt)(v.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,i.kt)(p.Z,{language:"python",title:'Get your record "#RECORD_TITLE"',mdxType:"ContextCodeBlock"},"\nimport requests\nimport json\n\n\nreq = requests.get('#BASE_URL/v1/record/#RECORD_ID', auth=('#USER_API_KEY', ''))\nprint(json.dumps(req.json(), indent=2))\n"))),(0,i.kt)("p",null,"That's it, you just got your first response from the Tape API \ud83c\udf89 ",(0,i.kt)("br",null)," Explore all you can do with records ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/resource/record"},"here"),"."))}w.isMDXComponent=!0}}]);