"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[97],{7859:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(2263),r=n(1483),i=n(1736),l=n(6010),o=n(7294);const u="codeBlock_FKPJ";function s(e){var t=e.children,n=e.language,s=e.title,c=(0,o.useState)((0,r.W5)()),d=c[0],p=c[1];(0,o.useEffect)((0,r.kw)((0,a.Z)(),p),[]);var m=(0,r.hd)(d),f=(0,r.jM)(d),v=(0,r.dz)(d),h=(0,r.xe)(d);function g(e){return(e||"").replace(new RegExp("#USER_API_KEY","g"),m).replace(new RegExp("#BASE_URL","g"),h).replace(new RegExp("#RECORD_ID","g"),f).replace(new RegExp("#RECORD_TITLE","g"),v)}var _=("string"==typeof t?[t]:Array.isArray(t)?t:[]).map((function(e){return"string"==typeof e?g(e):e})),y=g(s);return o.createElement("div",{className:(0,l.Z)(u)},o.createElement(i.Z,{title:y,language:n},_))}},4757:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){var t,n=e.method,r=e.url;switch(n){case"GET":t="#007959";break;case"POST":t="#0071BB";break;case"PUT":t="#DEA700";break;case"DELETE":t="#DF245E"}return a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},a.createElement("span",{style:{backgroundColor:t,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},n.toUpperCase()),a.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},r))}},1483:(e,t,n)=>{n.d(t,{hd:()=>D,M:()=>E,hU:()=>T,S$:()=>N,W5:()=>l,jM:()=>w,dz:()=>U,xe:()=>x,kw:()=>I});var a,r,i=(a=[],r={initializing:!1,runtime:"PRD",activeUserContext:void 0,activeUserContextIsLoading:!0,demoRecord:void 0,demoRecordIsLoading:!0},{get:function(){return r},set:function(e){r!==e&&(r=e,a.forEach((function(e){return e(r)})))},subscribe:function(e){return a.push(e),function(){return function(e){a=a.filter((function(t){return t!==e}))}(e)}}});function l(){return i.get()}function o(e){i.set(e)}var u=n(5861),s=n(7757),c=n.n(s);function d(e){return"DEV"===e?"http://localhost:3000":"https://tapeapp.com"}var p=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalContext {\n    ... on ActiveUserDevPortalContextDto {\n      userId\n      apiKey\n      user {\n        id\n        primaryName\n      }\n    }\n  }\n}\n"}),m=JSON.stringify({operationName:null,variables:{},query:"{\n      getUserSessions {\n        active\n        userId\n      }\n    }\n"});function f(e,t){return fetch(e+"/graphql/getActiveUserDevPortalContext",{method:"POST",headers:{"content-type":"application/json",uid:t},credentials:"include",mode:"cors",body:p}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalContext)||{}}))}function v(e){return fetch(e+"/graphql/getUserSessions",{method:"POST",headers:{"content-type":"application/json"},credentials:"include",mode:"cors",body:m}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getUserSessions)||[]}))}function h(e){return g.apply(this,arguments)}function g(){return(g=(0,u.Z)(c().mark((function e(t){var n,a,r,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:if(n=e.sent,(a=n.filter((function(e){return e.active}))).length){e.next=6;break}return e.abrupt("return",{});case 6:return r=a[0].userId,e.next=9,f(t,r);case 9:return i=e.sent,e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=JSON.stringify({operationName:null,variables:{},query:"{\n  getActiveUserDevPortalDemoBlabItem {\n    id\n    title\n  }\n}"});function y(e,t){return fetch(e+"/graphql/getActiveUserDevPortalDemoRecord",{method:"POST",headers:{"content-type":"application/json",uid:t},credentials:"include",mode:"cors",body:_}).then((function(e){return e.text()})).then((function(e){var t,n=JSON.parse(e);return(null==n||null==(t=n.data)?void 0:t.getActiveUserDevPortalDemoBlabItem)||{}}))}function b(){return(b=(0,u.Z)(c().mark((function e(t){var n,a,r,i,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l().initializing){e.next=2;break}return e.abrupt("return");case 2:return o(Object.assign({},l(),{initializing:!0})),n=d(t),e.prev=4,e.next=7,h(n);case 7:if(r=e.sent,o(Object.assign({},l(),{activeUserContext:r,activeUserContextIsLoading:!1})),!(i=null==(a=r.user)?void 0:a.id)){e.next=15;break}return e.next=13,y(n,i);case 13:u=e.sent,o(Object.assign({},l(),{demoRecord:u,demoRecordIsLoading:!1}));case 15:e.next=21;break;case 17:e.prev=17,e.t0=e.catch(4),console.error(e.t0),o(Object.assign({},l(),{activeUserContextIsLoading:!1,demoRecordIsLoading:!1}));case 21:case"end":return e.stop()}}),e,null,[[4,17]])})))).apply(this,arguments)}function k(e){return e.runtime}function x(e){return function(e){return"DEV"===e?"http://localhost:3000":"https://api.tapeapp.com"}(k(e))}function R(e){var t;return null!=(t=e.activeUserContext)?t:{}}function E(e){return e.activeUserContextIsLoading}function D(e){var t;return null!=(t=function(e){return R(e).apiKey}(e))?t:"user_key_replace_with_your_api_key"}function T(e){var t;return null==(t=R(e).user)?void 0:t.primaryName}function N(e){var t;return null!=(t=T(e))?t:"Developer"}function C(e){var t;return null!=(t=e.demoRecord)?t:{}}function w(e){var t;return null!=(t=function(e){return C(e).id}(e))?t:123}function U(e){var t;return null!=(t=function(e){return C(e).title}(e))?t:"Demo Record"}function I(e,t){var n,a,r=((null==e||null==(n=e.siteConfig)||null==(a=n.customFields)?void 0:a.runtime)||"PRD").trim().toUpperCase();return k(l())!==r&&o(Object.assign({},l(),{runtime:r})),function(e){b.apply(this,arguments)}(r),function(){return function(e){return i.subscribe(e)}(t)}}},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),i=n(2389),l=n(3725),o=n(6010);const u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.lx)(h,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var _=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=v[0])?void 0:i.props.value;if(null!==_&&!h.some((function(e){return e.value===_})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+_+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),b=y.tabGroupChoices,k=y.setTabGroupChoices,x=(0,r.useState)(_),R=x[0],E=x[1],D=[],T=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var N=b[m];null!=N&&N!==R&&h.some((function(e){return e.value===N}))&&E(N)}var C=function(e){var t=e.currentTarget,n=D.indexOf(t),a=h[n].value;a!==R&&(T(t),E(a),null!=m&&k(m,a))},w=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=D.indexOf(e.currentTarget)+1;n=D[a]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;n=D[r]||D[D.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:R===t?0:-1,"aria-selected":R===t,key:t,ref:function(e){return D.push(e)},onKeyDown:w,onFocus:C,onClick:C},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":R===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(v.filter((function(e){return e.props.value===R}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==R})}))))}function c(e){var t=(0,i.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},7437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>p,default:()=>g,frontMatter:()=>d,metadata:()=>m,toc:()=>v});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=n(4757),o=n(9877),u=n(8215),s=n(7859),c=["components"],d={id:"attachment",title:"Attachment Field Value",sidebar_label:"Attachment"},p=void 0,m={unversionedId:"api/resource/field-value/attachment",id:"api/resource/field-value/attachment",title:"Attachment Field Value",description:"A attachment field value consists of its value property which holds a reference to an attachment. An attachment has the properties id (unique ID), filename (the filename), size (filesize in bytes), download_url (URL to download the file) and others.",source:"@site/docs/api/resource/field-value/attachment.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/attachment",permalink:"/docs/api/resource/field-value/attachment",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/attachment.md",tags:[],version:"current",frontMatter:{id:"attachment",title:"Attachment Field Value",sidebar_label:"Attachment"},sidebar:"mainSidebar",previous:{title:"Relation",permalink:"/docs/api/resource/field-value/relation"},next:{title:"Checklist",permalink:"/docs/api/resource/field-value/checklist"}},f={},v=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],h={toc:v};function g(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A attachment field value consists of its ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," property which holds a reference to an attachment. An attachment has the properties ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," (unique ID), ",(0,i.kt)("inlineCode",{parentName:"p"},"filename")," (the filename), ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," (filesize in bytes), ",(0,i.kt)("inlineCode",{parentName:"p"},"download_url")," (URL to download the file) and others.\nA ",(0,i.kt)("inlineCode",{parentName:"p"},"single_attachment")," field value holds at most one attachment reference while a ",(0,i.kt)("inlineCode",{parentName:"p"},"multi_attachment")," field value can hold multiple attachment references."),(0,i.kt)("p",null,"More details on the file object and the two-step file upload process can be found ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/resource/file"},"here"),"."),(0,i.kt)("h2",{id:"record-creation"},"Record creation"),(0,i.kt)(l.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,'A attachment field value can be created as part of a record creation. Here is an example request body for creating a record with a value for the "Letter of recommendation" field with ID 2, type ',(0,i.kt)("inlineCode",{parentName:"p"},"single_attachment")," and external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"letter_of_recommendation"),' and a value for the "HR documents" field with ID 3, type ',(0,i.kt)("inlineCode",{parentName:"p"},"multi_attachment")," and external ID ",(0,i.kt)("inlineCode",{parentName:"p"},"hr_documents"),":"),(0,i.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "letter_of_recommendation": "temporary-file-1",\n      "hr_documents": ["temporary-file-2", "temporary-file-3"]\n    }\n  }\' \n')),(0,i.kt)(u.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "letter_of_recommendation": "temporary-file-1",\n    "hr_documents": ["temporary-file-2", "temporary-file-3"]\n  }\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "200301_letter-of-recommendation.pdf",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "letter_of_recommendation",\n      "label": "Letter of recommendation",\n      "type": "user",\n      "field_type": "single_attachment",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_letter-of-recommendation.pdf",\n            "size": 12300\n          }\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "external_id": "hr_documents",\n      "label": "HR Documents",\n      "field_type": "multi_attachment",\n      "type": "user",\n      "values": [\n        {\n          "value": {\n            "user_id": 101,\n            "mail": ["dan@tapeapp.com"],\n            "image": null,\n            "name": "Dan Jacob",\n            "org_id": 1,\n            "type": "user"\n          }\n        },\n        {\n          "value": {\n            "user_id": 102,\n            "mail": ["sierra@tapeapp.com"],\n            "image": null,\n            "name": "Sierra Johns",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,i.kt)(l.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"A attachment field value can be retrieved as part of a record retrieval:"),(0,i.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "200301_letter-of-recommendation.pdf",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "letter_of_recommendation",\n      "label": "Letter of recommendation",\n      "type": "user",\n      "field_type": "single_attachment",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_letter-of-recommendation.pdf",\n            "size": 12300\n          }\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "external_id": "hr_documents",\n      "label": "HR Documents",\n      "field_type": "multi_attachment",\n      "type": "user",\n      "values": [\n        {\n          "value": {\n            "user_id": 101,\n            "mail": ["dan@tapeapp.com"],\n            "image": null,\n            "name": "Dan Jacob",\n            "org_id": 1,\n            "type": "user"\n          }\n        },\n        {\n          "value": {\n            "user_id": 102,\n            "mail": ["sierra@tapeapp.com"],\n            "image": null,\n            "name": "Sierra Johns",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"record-update"},"Record update"),(0,i.kt)(l.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"One or more attachment field values can be updated as part of a record update. Both existing IDs (integers) as well as temporary file IDs (strings) can be provided as input.\nHere is an example request body for updating multiple attachment field values of a record:"),(0,i.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,i.kt)(u.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,i.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1  \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "letter_of_recommendation": "temporary-file-2",\n      "hr_documents": ["temporary-file-6", 102]\n    }\n  }\' \n')),(0,i.kt)(u.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "letter_of_recommendation": "temporary-file-2",\n    "hr_documents": ["temporary-file-6", 102]\n  }\n}\n')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Delaney Beatty",\n  "fields": [\n    {\n      "field_id": 2,\n      "external_id": "letter_of_recommendation",\n      "label": "Letter of recommendation",\n      "type": "user",\n      "field_type": "single_attachment",\n      "values": [\n        {\n          "value": {\n            "user_id": 2,\n            "mail": ["delaney@tapeapp.com"],\n            "image": null,\n            "name": "Delaney Beatty",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    },\n    {\n      "field_id": 3,\n      "external_id": "hr_documents",\n      "label": "HR Documents",\n      "field_type": "multi_attachment",\n      "type": "user",\n      "values": [\n        {\n          "value": {\n            "user_id": 102,\n            "mail": ["sierra@tapeapp.com"],\n            "image": null,\n            "name": "Sierra Johns",\n            "org_id": 1,\n            "type": "user"\n          }\n        }\n      ]\n    }\n  ]\n}\n')))}g.isMDXComponent=!0}}]);