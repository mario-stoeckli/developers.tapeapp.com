"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9440],{6229:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>c,default:()=>g,frontMatter:()=>m,metadata:()=>u,toc:()=>f});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),d=a(4757),i=a(9877),o=a(8215),p=a(7859),s=["components"],m={id:"record",title:"Record",sidebar_label:"Record"},c=void 0,u={unversionedId:"api/resource/record",id:"api/resource/record",title:"Record",description:"Records are the place where work gets done inside a Tape organization. Records can be created, retrieved, updated and deleted via the API.",source:"@site/docs/api/resource/record.md",sourceDirName:"api/resource",slug:"/api/resource/record",permalink:"/docs/api/resource/record",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/record.md",tags:[],version:"current",frontMatter:{id:"record",title:"Record",sidebar_label:"Record"},sidebar:"mainSidebar",previous:{title:"Date & Timezone",permalink:"/docs/api/date-timezone"},next:{title:"General",permalink:"/docs/api/resource/field-value/general"}},k={},f=[{value:"Create a record",id:"create-a-record",level:2},{value:"Retrieve a record",id:"retrieve-a-record",level:2},{value:"Update a record",id:"update-a-record",level:2},{value:"Delete a record",id:"delete-a-record",level:2},{value:"Retrieve records for an app",id:"retrieve-records-for-an-app",level:2}],N={toc:f};function g(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Records are the place where work gets done inside a Tape organization. Records can be created, retrieved, updated and deleted via the API."),(0,l.kt)("h2",{id:"create-a-record"},"Create a record"),(0,l.kt)(d.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"To create a new record for the app with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"app_id"),", issue a POST request to this endpoint. The POST body specifies has to contain the ",(0,l.kt)("inlineCode",{parentName:"p"},"fields")," property with the key-value pairs of the field values to create for this record.\nThe following query paramters are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Query param"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"silent")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Do not generate notifications for this operation (default: ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"hook")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Execute webhooks for this operation (default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),")")))),(0,l.kt)(i.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,l.kt)(p.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "first_name": "Adam Smith"\n    }\n  }\' \n')),(0,l.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "first_name": "Adam Smith"\n  }\n}\n')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Adam Smith",\n  "created_on": "2022-03-01 12:00:00",\n  "fields": [\n    {\n      "field_id": 1,\n      "external_id": "full_name",\n      "label": "Full Name",\n      "type": "text",\n      "field_type": "single_text",\n      "values": [\n        {\n          "value": "Adam Smith"\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"The example above only specifies a ",(0,l.kt)("inlineCode",{parentName:"p"},"single_text")," field value as part of the record creation. See the ",(0,l.kt)("a",{parentName:"p",href:"field-value/general"},"field value")," documentation section for examples of all supported field types."),(0,l.kt)("h2",{id:"retrieve-a-record"},"Retrieve a record"),(0,l.kt)(d.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"Retrieve the record with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"record_id"),":"),(0,l.kt)(p.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Adam Smith",\n  "created_on": "2022-03-01 12:00:00",\n  "fields": [\n    {\n      "field_id": 1,\n      "external_id": "full_name",\n      "label": "Full Name",\n      "type": "text",\n      "field_type": "single_text",\n      "values": [\n        {\n          "value": "Adam Smith"\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"The example response above only contains a ",(0,l.kt)("inlineCode",{parentName:"p"},"single_text")," field value. See the ",(0,l.kt)("a",{parentName:"p",href:"field-value/general"},"field value")," documentation section for examples of all supported field types."),(0,l.kt)("p",null,"Attempting to retrieve a deleted record returns the following error:"),(0,l.kt)(p.Z,{language:"json",mdxType:"ContextCodeBlock"},'{\n"status_code": 400,\n"endpoint": "/v1/record/17",\n"error_code": "record_deleted",\n"error_message": "Record is deleted(17)!"\n}'),(0,l.kt)("h2",{id:"update-a-record"},"Update a record"),(0,l.kt)(d.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"Updates the record with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"record_id")," and returns the updated record.\nThe following query paramters are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Query param"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"silent")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Do not generate notifications for this operation (default: ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"hook")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Execute webhooks for this operation (default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),")")))),(0,l.kt)(i.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,l.kt)(p.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "first_name": "Andrea Lim"\n    }\n  }\' \n')),(0,l.kt)(o.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "first_name": "Andrea Lim"\n  }\n}\n')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "Andrea Lim",\n  "created_on": "2022-03-01 12:00:00",\n  "fields": [\n    {\n      "field_id": 1,\n      "external_id": "full_name",\n      "label": "Full Name",\n      "type": "text",\n      "field_type": "single_text",\n      "values": [\n        {\n          "value": "Andrea Lim"\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"The example above only specifies a ",(0,l.kt)("inlineCode",{parentName:"p"},"single_text")," field value as part of the record update. See the ",(0,l.kt)("a",{parentName:"p",href:"field-value/general"},"field value")," documentation section for examples of all supported field types."),(0,l.kt)("h2",{id:"delete-a-record"},"Delete a record"),(0,l.kt)(d.Z,{method:"DELETE",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"Delete the record with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"record_id"),".\nThe following query paramters are available:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Query param"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"silent")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Do not generate notifications for this operation (default: ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"hook")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Execute webhooks for this operation (default: ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),")")))),(0,l.kt)(p.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl -X DELETE #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:\n"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},"{}\n")),(0,l.kt)("p",null,"If the record has already been deleted, the following error is returned:"),(0,l.kt)(p.Z,{language:"json",mdxType:"ContextCodeBlock"},'{\n  "status_code": 400,\n  "endpoint": "/v1/record/1",\n  "error_code": "record_deleted",\n  "error_message": "Record is deleted(1)!"\n}'),(0,l.kt)("h2",{id:"retrieve-records-for-an-app"},"Retrieve records for an app"),(0,l.kt)(d.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"Retrieve records for the app with the specified ",(0,l.kt)("inlineCode",{parentName:"p"},"app_id"),":"),(0,l.kt)(p.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/app/1?limit=2 \\\n  -u #USER_API_KEY:"),(0,l.kt)(p.Z,{language:"json",title:"\u2b05\ufe0f \xa0\xa0   Response",mdxType:"ContextCodeBlock"},'{\n  "total": 2,\n  "cursor": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJibGFiRGVmSWQiOjgsInZhbHVlcyI6WzE1OV0sImV4cCI6MTY1MDYxODc3OH0.iY5TnLSBDGCnFXbStcrLPTmP6MATnS_JKywbvC4tx3g",\n  "records": [\n    {\n      "record_id": 2,\n      "title": "Adam Smith",\n      "created_on": "2022-03-23 08:48:42",\n      "app": {\n        "app_id": 1,\n        "icon": "event_available",\n        "name": "Contacts",\n        "record_name": "Contact",\n        "workspace_id": 1\n      },\n      "fields": [\n        {\n          "field_id": 1,\n          "external_id": "full_name",\n          "label": "Full Name",\n          "type": "text",\n          "field_type": "single_text",\n          "values": [\n            {\n              "value": "Adam Smith"\n            }\n          ]\n        }\n      ]\n    },\n    {\n      "record_id": 1,\n      "title": "Andrea Lim",\n      "created_on": "2022-03-23 08:43:03",\n      "app": {\n        "app_id": 1,\n        "icon": "event_available",\n        "name": "Contacts",\n        "record_name": "Contact",\n        "workspace_id": 1\n      },\n      "fields": [\n        {\n          "field_id": 1,\n          "external_id": "full_name",\n          "label": "Full Name",\n          "type": "text",\n          "field_type": "single_text",\n          "values": [\n            {\n              "value": "Andrea Lim"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Query Parameters")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"}," Type")),(0,l.kt)("th",{parentName:"tr",align:null},"Min"),(0,l.kt)("th",{parentName:"tr",align:null},"Max"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"limit")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"integer")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of records to return. Defaults to 50."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"500")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cursor")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Cursor for pagination"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"sort_by")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"External ID of the field that should be sorted by."),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))}g.isMDXComponent=!0}}]);