"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[2443],{4757:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(7294);function p(e){var a,t=e.method,p=e.url;switch(t){case"GET":a="#007959";break;case"POST":a="#0071BB";break;case"PUT":a="#DEA700";break;case"DELETE":a="#DF245E"}return n.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},n.createElement("span",{style:{backgroundColor:a,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},t.toUpperCase()),n.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},p))}},4890:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>d,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var n=t(7462),p=t(3366),i=(t(7294),t(3905)),o=t(4757),s=(t(9877),t(8215),t(7859)),r=["components"],l={id:"app",title:"App",sidebar_label:"App"},d=void 0,c={unversionedId:"api/resource/app",id:"api/resource/app",title:"App",description:"Retrieve apps for a workspace",source:"@site/docs/api/resource/app.md",sourceDirName:"api/resource",slug:"/api/resource/app",permalink:"/docs/api/resource/app",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/app.md",tags:[],version:"current",frontMatter:{id:"app",title:"App",sidebar_label:"App"},sidebar:"mainSidebar",previous:{title:"Record Revision",permalink:"/docs/api/resource/record-revision"},next:{title:"Overview",permalink:"/docs/api/resource/field/overview"}},m={},u=[{value:"Retrieve apps for a workspace",id:"retrieve-apps-for-a-workspace",level:2},{value:"Retrieve all available apps",id:"retrieve-all-available-apps",level:2},{value:"Retrieve a single app",id:"retrieve-a-single-app",level:2},{value:"Create, delete or update Apps",id:"create-delete-or-update-apps",level:2}],k={toc:u};function v(e){var a=e.components,t=(0,p.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"retrieve-apps-for-a-workspace"},"Retrieve apps for a workspace"),(0,i.kt)(o.Z,{method:"GET",url:"https://api.tapeapp.com/v1/app/workspace/{workspaceId}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"Retrieve all apps for the workspace with ID ",(0,i.kt)("inlineCode",{parentName:"p"},"200")," (Note that the response does not contain the fields):"),(0,i.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/app/workspace/200 \\\n  -u #USER_API_KEY:"),(0,i.kt)(s.Z,{language:"json",title:"\u2b05\ufe0f \xa0\xa0   Response",mdxType:"ContextCodeBlock"},'{\n  "total": 2,\n  "apps": [\n    {\n      "app_id": 1,\n      "workspace_id": 200,\n      "name": "Tasks",\n      "slug": "tasks",\n      "config": {\n        "item_name": "Task",\n        "name": "Tasks",\n        "description": ""\n      }\n    },\n    {\n      "app_id": 2,\n      "workspace_id": 200,\n      "name": "Projects",\n      "slug": "projects",\n      "config": { \n        "item_name": "Project",\n        "name": "Projects",\n        "description": ""\n      }\n    }\n]\n}'),(0,i.kt)("h2",{id:"retrieve-all-available-apps"},"Retrieve all available apps"),(0,i.kt)(o.Z,{method:"GET",url:"https://api.tapeapp.com/v1/app/workspace/{workspaceId}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"Retrieve all apps inside the workspaces that you have access to (Note that the response does not contain the fields):"),(0,i.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/app \\\n  -u #USER_API_KEY:"),(0,i.kt)(s.Z,{language:"json",title:"\u2b05\ufe0f \xa0\xa0   Response",mdxType:"ContextCodeBlock"},'{\n  "total": 3,\n  "apps": [\n    {\n      "app_id": 1,\n      "workspace_id": 200,\n      "name": "Tasks",\n      "slug": "tasks",\n      "config": {\n        "item_name": "Task",\n        "name": "Tasks",\n        "description": ""\n      }\n    },\n    {\n      "app_id": 2,\n      "workspace_id": 200,\n      "name": "Projects",\n      "slug": "projects",\n      "config": { \n        "item_name": "Project",\n        "name": "Projects",\n        "description": ""\n      },\n    },\n    {\n    "app_id": 3,\n    "workspace_id": 300,\n    "name": "Contacts",\n    "slug": "contacts",\n    "config": { \n      "item_name": "Contact",\n      "name": "Contacts",\n      "description": ""\n    }\n  }\n]\n}'),(0,i.kt)("h2",{id:"retrieve-a-single-app"},"Retrieve a single app"),(0,i.kt)(o.Z,{method:"GET",url:"https://api.tapeapp.com/v1/app/{appId}",mdxType:"EndpointBadge"}),(0,i.kt)("p",null,"Retrieve an app with fields by its ID ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,i.kt)(s.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/app/1 \\\n  -u #USER_API_KEY:"),(0,i.kt)(s.Z,{language:"json",title:"\u2b05\ufe0f \xa0\xa0   Response",mdxType:"ContextCodeBlock"},'\n  {\n    "app_id": 1,\n    "workspace_id": 200,\n    "name": "Tasks",\n    "slug": "tasks",\n    "config": {\n      "item_name": "Task",\n      "name": "Tasks",\n      "description": ""\n    },\n    "fields": [\n      {\n        "field_id": 1,\n        "external_id": "full_name",\n        "label": "Full Name",\n        "type": "text",\n        "field_type": "single_text",\n        "config": {\n          "description": null,\n          "required": false,\n          "label": "FST",\n          "settings": {\n            "format": "plain",\n            "size": "small"\n          }\n        },\n      }\n    ]\n  }\n'),(0,i.kt)("h2",{id:"create-delete-or-update-apps"},"Create, delete or update Apps"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Not available")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Mutating ",(0,i.kt)("strong",{parentName:"p"},"App")," endpoints are not available yet. ",(0,i.kt)("a",{parentName:"p",href:"https://community.tapeapp.com/c/requests/8"},"Create a community feature request")," if those are important for your integrations."))))}v.isMDXComponent=!0}}]);