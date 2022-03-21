"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[5359],{7859:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(2263),r=a(1483),i=a(1736),l=a(6010),o=a(7294);const s="codeBlock_FKPJ";function u(e){var t=e.children,a=e.language,u=e.title,d=(0,o.useState)((0,r.W5)()),c=d[0],p=d[1];(0,o.useEffect)((0,r.kw)((0,n.Z)(),p),[]);var m=(0,r.hd)(c),f=(0,r.jM)(c),v=(0,r.dz)(c),h=(0,r.xe)(c);function g(e){return(e||"").replace(new RegExp("#USER_API_KEY","g"),m).replace(new RegExp("#BASE_URL","g"),h).replace(new RegExp("#RECORD_ID","g"),f).replace(new RegExp("#RECORD_TITLE","g"),v)}var b=("string"==typeof t?[t]:Array.isArray(t)?t:[]).map((function(e){return"string"==typeof e?g(e):e})),k=g(u);return o.createElement("div",{className:(0,l.Z)(s)},o.createElement(i.Z,{title:k,language:a},b))}},4757:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){var t,a=e.method,r=e.url;switch(a){case"GET":t="#007959";break;case"POST":t="#0071BB";break;case"PUT":t="#DEA700";break;case"DELETE":t="#DF245E"}return n.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},n.createElement("span",{style:{backgroundColor:t,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},a.toUpperCase()),n.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},r))}},1483:(e,t,a)=>{a.d(t,{hd:()=>w,M:()=>E,hU:()=>U,S$:()=>C,W5:()=>l,jM:()=>D,dz:()=>P,xe:()=>T,kw:()=>I});var n,r,i=(n=[],r={initializing:!1,runtime:"PRD",activeUserContext:void 0,activeUserContextIsLoading:!0,demoRecord:void 0,demoRecordIsLoading:!0},{get:function(){return r},set:function(e){r!==e&&(r=e,n.forEach((function(e){return e(r)})))},subscribe:function(e){return n.push(e),function(){return function(e){n=n.filter((function(t){return t!==e}))}(e)}}});function l(){return i.get()}function o(e){i.set(e)}var s=a(5861),u=a(7757),d=a.n(u);function c(e){return"DEV"===e?"http://localhost:3000":"https://tapeapp.com"}var p=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalContext {\n    ... on ActiveUserDevPortalContextDto {\n      userId\n      apiKey\n      user {\n        id\n        primaryName\n      }\n    }\n  }\n}\n"}),m=JSON.stringify({operationName:null,variables:{},query:"{\n      getUserSessions {\n        active\n        userId\n      }\n    }\n"});function f(e,t){return fetch(e+"/graphql/getActiveUserDevPortalContext",{method:"POST",headers:{"content-type":"application/json",uid:t},credentials:"include",mode:"cors",body:p}).then((function(e){return e.text()})).then((function(e){var t,a=JSON.parse(e);return(null==a||null==(t=a.data)?void 0:t.getActiveUserDevPortalContext)||{}}))}function v(e){return fetch(e+"/graphql/getUserSessions",{method:"POST",headers:{"content-type":"application/json"},credentials:"include",mode:"cors",body:m}).then((function(e){return e.text()})).then((function(e){var t,a=JSON.parse(e);return(null==a||null==(t=a.data)?void 0:t.getUserSessions)||[]}))}function h(e){return g.apply(this,arguments)}function g(){return(g=(0,s.Z)(d().mark((function e(t){var a,n,r,i;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:if(a=e.sent,(n=a.filter((function(e){return e.active}))).length){e.next=6;break}return e.abrupt("return",{});case 6:return r=n[0].userId,e.next=9,f(t,r);case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalDemoBlabItem {\n    id\n    title\n  }\n}"});function k(e,t){return fetch(e+"/graphql/getActiveUserDevPortalDemoRecord",{method:"POST",headers:{"content-type":"application/json",uid:t},credentials:"include",mode:"cors",body:b}).then((function(e){return e.text()})).then((function(e){var t,a=JSON.parse(e);return(null==a||null==(t=a.data)?void 0:t.getActiveUserDevPortalDemoBlabItem)||{}}))}function x(){return(x=(0,s.Z)(d().mark((function e(t){var a,n,r,i,s;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l().initializing){e.next=2;break}return e.abrupt("return");case 2:return o(Object.assign({},l(),{initializing:!0})),a=c(t),e.prev=4,e.next=7,h(a);case 7:if(r=e.sent,o(Object.assign({},l(),{activeUserContext:r,activeUserContextIsLoading:!1})),!(i=null==(n=r.user)?void 0:n.id)){e.next=15;break}return e.next=13,k(a,i);case 13:s=e.sent,o(Object.assign({},l(),{demoRecord:s,demoRecordIsLoading:!1}));case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),console.error(e.t0),o(Object.assign({},l(),{activeUserContextIsLoading:!1,demoRecordIsLoading:!1}));case 21:case"end":return e.stop()}}),e,null,[[4,17]])})))).apply(this,arguments)}function y(e){return e.runtime}function T(e){return function(e){return"DEV"===e?"http://localhost:3000":"https://api.tapeapp.com"}(y(e))}function N(e){var t;return null!=(t=e.activeUserContext)?t:{}}function E(e){return e.activeUserContextIsLoading}function w(e){var t;return null!=(t=function(e){return N(e).apiKey}(e))?t:"user_key_replace_with_your_api_key"}function U(e){var t;return null==(t=N(e).user)?void 0:t.primaryName}function C(e){var t;return null!=(t=U(e))?t:"Developer"}function _(e){var t;return null!=(t=e.demoRecord)?t:{}}function D(e){var t;return null!=(t=function(e){return _(e).id}(e))?t:123}function P(e){var t;return null!=(t=function(e){return _(e).title}(e))?t:"Demo Record"}function I(e,t){var a,n,r=((null==e||null==(a=e.siteConfig)||null==(n=a.customFields)?void 0:n.runtime)||"PRD").trim().toUpperCase();return y(l())!==r&&o(Object.assign({},l(),{runtime:r})),function(e){x.apply(this,arguments)}(r),function(){return function(e){return i.subscribe(e)}(t)}}},8215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294);function r(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),i=a(2389),l=a(3725),o=a(6010);const s="tabItem_LplD";function u(e){var t,a,i,u=e.lazy,d=e.block,c=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==b&&!h.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.UB)(),x=k.tabGroupChoices,y=k.setTabGroupChoices,T=(0,r.useState)(b),N=T[0],E=T[1],w=[],U=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=x[m];null!=C&&C!==N&&h.some((function(e){return e.value===C}))&&E(C)}var _=function(e){var t=e.currentTarget,a=w.indexOf(t),n=h[a].value;n!==N&&(U(t),E(n),null!=m&&y(m,n))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.currentTarget)+1;a=w[n]||w[0];break;case"ArrowLeft":var r=w.indexOf(e.currentTarget)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},f)},h.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return w.push(e)},onKeyDown:D,onFocus:_,onClick:_},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),u?(0,r.cloneElement)(v.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function d(e){var t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},5189:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>v});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=a(7859),o=a(4757),s=a(9877),u=a(8215),d=["components"],c={id:"files",title:"File",sidebar_label:"File"},p=void 0,m={unversionedId:"api/resource/files",id:"api/resource/files",title:"File",description:"A file is a container for data and primarily identified by its file name. A file could be a spreadsheet, an image, PDF, video, or just binary data. Tape supports various file formats to be attached to resources like records, comments and chat messages.",source:"@site/docs/api/resource/files.md",sourceDirName:"api/resource",slug:"/api/resource/files",permalink:"/docs/api/resource/files",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/files.md",tags:[],version:"current",frontMatter:{id:"files",title:"File",sidebar_label:"File"},sidebar:"mainSidebar",previous:{title:"Workspace",permalink:"/docs/api/resource/workspace"},next:{title:"Introduction",permalink:"/docs/calculation/introduction"}},f={},v=[{value:"Upload a file",id:"upload-a-file",level:2},{value:"Upload multiple files",id:"upload-multiple-files",level:2},{value:"Thumbnails",id:"thumbnails",level:2},{value:"Upload limits",id:"upload-limits",level:2},{value:"Rate limit credits",id:"rate-limit-credits",level:2},{value:"Validation errors",id:"validation-errors",level:2}],h={toc:v};function g(e){var t=e.components,a=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A file is a container for data and primarily identified by its file name. A file could be a spreadsheet, an image, PDF, video, or just binary data. Tape supports various file formats to be attached to resources like records, comments and chat messages."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There are many reasons why a file upload via HTTP can fail (file too large, bad network connection, ...). To prevent critical operations like creating a record to fail due to an unsuccessful upload, attaching a file to a resource is a two-step process:"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"The file is uploaded to Tape and the server returns a unique file ID."),(0,i.kt)("li",{parentName:"ol"},"The file ID is used to attach the uploaded file to a resource (record, comment, ...).")))),(0,i.kt)("p",null,"Files can be uploaded to Tape via the API by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"multipart/form-data")," HTTP content type. Once uploaded, file objects have a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"filename"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"download_url"),".\nFiles that are uploaded but not attached to a resource will be deleted automatically after 24 hours."),(0,i.kt)("h2",{id:"upload-a-file"},"Upload a file"),(0,i.kt)(o.Z,{method:"POST",url:"https://api.tapeapp.com/v1/file/upload",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"When uploading files to Tape, use the dedicated endpoint to create a temporary file reference first:"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"shell",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/file/upload \\\n  -u #USER_API_KEY: \\\n  -F 'file=@./filename.txt'\n")),(0,i.kt)(u.Z,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"http",mdxType:"ContextCodeBlock"},"POST /v1/file/upload HTTP/1.1\nHost: api.tapeapp.com\nAuthorization: Bearer #USER_API_KEY\nAccept: */*\nContent-Length: 20\nContent-Type: multipart/form-data"))),(0,i.kt)("p",null,"You receive a file reference, that can then be used when creating or updating a resource. See the example below to attach a file to a single attachment field:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "filename": "filename.txt",\n  "size": 20,\n  "created_on": "2022-01-01 12:00:00",\n  "download_url": "https://s3.eu-central-1.amazonaws.com/tape-thumbnails/d8f205f4daaced0f3f714b5ebb76ad"\n}\n')),(0,i.kt)("h2",{id:"upload-multiple-files"},"Upload multiple files"),(0,i.kt)(o.Z,{method:"POST",url:"https://api.tapeapp.com/v1/file/upload",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"You can also upload multiple files at the same time by providing the ",(0,i.kt)("inlineCode",{parentName:"p"},"file")," field multiple times:"),(0,i.kt)(s.Z,{mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"shell",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/file/upload \\\n  -u #USER_API_KEY: \\\n  -F 'file=@./filename1.txt' \\\n  -F 'file=@./filename2.txt'\n")),(0,i.kt)(u.Z,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,i.kt)(l.Z,{language:"http",mdxType:"ContextCodeBlock"},"POST /v1/file/upload HTTP/1.1\nHost: api.tapeapp.com\nAuthorization: Bearer #USER_API_KEY\nAccept: */*\nContent-Length: 40\nContent-Type: multipart/form-data"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 2,\n    "filename": "filename1.txt",\n    "size": 20,\n    "created_on": "2022-01-01 12:00:00",\n    "download_url": "61bc95fa43c2bbef3e29a13bc3307d"\n  },\n  {\n    "id": 3,\n    "filename": "filename2.txt",\n    "size": 20,\n    "created_on": "2022-01-01 12:00:00",\n    "download_url": "a0af01bf9c34413d15511608ec0e1d"\n  }\n]\n')),(0,i.kt)("h2",{id:"thumbnails"},"Thumbnails"),(0,i.kt)("p",null,"Tape tries to generate thumbnail images for uploaded files in multiple sizes. Thumbnails are optimized for displaying them as a user avatar, a file thumbnail or something similar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "small": "",\n  "medium": "",\n  "large": ""\n}\n')),(0,i.kt)("h2",{id:"upload-limits"},"Upload limits"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Variable"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Limit"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"})))),(0,i.kt)("h2",{id:"rate-limit-credits"},"Rate limit credits"),(0,i.kt)("p",null,"File uploads are rate limited based on their filesize. For uploading multiple files, the sum of all filesizes is used. The filesize limit for a single file is 100MB. Uploading a file always cost 2x credits of a normal request. Uploading a file with the maximum filesize costs 4x credits. Uploading a file with half the maximum filesize costs 3x credits."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Uploading 1KB: 2x credits\nUploading 50MB: 3x credits\nUploading 100MB: 4x credits\nUploading 150MB: 5x credits\nUploading 200MB: 6x credits\nUploading 300MB: 8x credits\n...\n")),(0,i.kt)("p",null,"As you can see, uploading multiple files at once costs less credits than uploading every file individually."),(0,i.kt)("h2",{id:"validation-errors"},"Validation errors"),(0,i.kt)("p",null,"A lot can go wrong when uploading files via HTTP. Tape handles most error cases and returns detailed error messages."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="No file provided validation error"',title:'"No',file:!0,provided:!0,validation:!0,'error"':!0},'{\n  "status_code": 400,\n  "endpoint": "/v1/file/upload",\n  "error_code": "validation",\n  "error_message": "No file provided to upload endpoint \'/v1/file/upload/\' via multipart/form-data name: \'file\'"\n}\n')))}g.isMDXComponent=!0}}]);