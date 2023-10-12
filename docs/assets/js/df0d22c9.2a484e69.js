"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[6790],{5853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>_,frontMatter:()=>m,metadata:()=>c,toc:()=>f});var i=n(7462),a=n(3366),l=(n(7294),n(3905)),r=n(4757),o=n(9877),p=n(8215),d=n(7859),s=["components"],m={id:"image",title:"Image Field Value",sidebar_label:"Image"},u=void 0,c={unversionedId:"api/resource/field-value/image",id:"api/resource/field-value/image",title:"Image Field Value",description:"An image field value consists of its value property which holds a reference to an image. An image has the properties id (unique ID), filename (the filename), size (filesize in bytes), downloadurl (URL to download the file) and others. Right now, there is only a multiimage field, where the value can hold multiple image references.",source:"@site/docs/api/resource/field-value/image.md",sourceDirName:"api/resource/field-value",slug:"/api/resource/field-value/image",permalink:"/docs/api/resource/field-value/image",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field-value/image.md",tags:[],version:"current",frontMatter:{id:"image",title:"Image Field Value",sidebar_label:"Image"},sidebar:"mainSidebar",previous:{title:"Attachment",permalink:"/docs/api/resource/field-value/attachment"},next:{title:"Checklist",permalink:"/docs/api/resource/field-value/checklist"}},g={},f=[{value:"Record creation",id:"record-creation",level:2},{value:"Record retrieval",id:"record-retrieval",level:2},{value:"Record update",id:"record-update",level:2}],h={toc:f};function _(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An image field value consists of its ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," property which holds a reference to an image. An image has the properties ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," (unique ID), ",(0,l.kt)("inlineCode",{parentName:"p"},"filename")," (the filename), ",(0,l.kt)("inlineCode",{parentName:"p"},"size")," (filesize in bytes), ",(0,l.kt)("inlineCode",{parentName:"p"},"download_url")," (URL to download the file) and others. Right now, there is only a ",(0,l.kt)("inlineCode",{parentName:"p"},"multi_image")," field, where the value can hold multiple image references."),(0,l.kt)("p",null,"Image fields behave quite similarly to ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/resource/field-value/attachment"},"attachment fields"),", allowing only image files."),(0,l.kt)("p",null,"More details on the file object and the two-step file upload process can be found ",(0,l.kt)("a",{parentName:"p",href:"/docs/api/resource/file"},"here"),"."),(0,l.kt)("h2",{id:"record-creation"},"Record creation"),(0,l.kt)(r.Z,{method:"POST",url:"https://api.tapeapp.com/v1/record/app/{app_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"A image field value can be created as part of a record creation. Files can be specified as temporary file IDs (strings), existing file IDs of the same field (integers) and existing file IDs of different Attachment or Image fields (integers). Existing files of Attachment fields can only be used as inputs to the image field, in case the files are of type ",(0,l.kt)("inlineCode",{parentName:"p"},"jpeg"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"jpg"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"png"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"gif"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tiff"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"svg"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bmp")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"webp"),'.\nHere is an example request body for creating a record with a value for the "Recruting Photos" field with ID 3, type ',(0,l.kt)("inlineCode",{parentName:"p"},"multi_image")," and external ID ",(0,l.kt)("inlineCode",{parentName:"p"},"recruiting_photos"),":"),(0,l.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,l.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X POST #BASE_URL/v1/record/app/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "recruiting_photos": ["temporary-file-2", "temporary-file-3"]\n    }\n  }\' \n')),(0,l.kt)(p.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "recruiting_photos": ["temporary-file-2", "temporary-file-3"]\n  }\n}\n')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "record_id": 1,\n  "title": "200301_recruiting_photo_1.jpeg",\n  "fields": [\n    {\n      "field_id": 3,\n      "external_id": "recruiting_photos",\n      "label": "Recruiting Photos",\n      "field_type": "multi_image",\n      "type": "image",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_recruiting_photo_1.jpeg",\n            "size": 12300\n          }\n        },\n        {\n          "value": {\n            "id": 101,\n            "filename": "200301_recruiting_photo_2.jpeg",\n            "size": 11300\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"record-retrieval"},"Record retrieval"),(0,l.kt)(r.Z,{method:"GET",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"A image field value can be retrieved as part of a record retrieval:"),(0,l.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},"curl #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "200301_recruiting_photo_1.jpeg",\n  "fields": [\n    {\n      "field_id": 3,\n      "external_id": "recruiting_photos",\n      "label": "Recruiting Photos",\n      "field_type": "multi_image",\n      "type": "image",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_recruiting_photo_1.jpeg",\n            "size": 12300\n          }\n        },\n        {\n          "value": {\n            "id": 101,\n            "filename": "200301_recruiting_photo_2.jpeg",\n            "size": 11300\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"record-update"},"Record update"),(0,l.kt)(r.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/record/{record_id}",mdxType:"EndpointBadge"}),(0,l.kt)("p",null,"One or more image field values can be updated as part of a record update. Both existing IDs (integers) as well as temporary file IDs (strings) can be provided as input. Existing IDs of the same field (integers), existing IDs of different Attachment or Image fields (integers) as well as temporary file IDs (strings) can be provided as input. Existing files of Attachment fields can only be used as inputs to the image field, in case the files are of type ",(0,l.kt)("inlineCode",{parentName:"p"},"jpeg"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"jpg"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"png"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"gif"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"tiff"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"svg"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"bmp")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"webp"),".\nHere is an example request body for updating multiple image field values of a record:"),(0,l.kt)(o.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,l.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'curl -X PUT #BASE_URL/v1/record/1 \\\n  -u #USER_API_KEY: \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n    "fields": {\n      "letter_of_recommendation": "temporary-file-2",\n      "recruiting_photos": ["temporary-file-6", 102]\n    }\n  }\' \n')),(0,l.kt)(p.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "fields": {\n    "recruiting_photos": ["temporary-file-6", 102]\n  }\n}\n')))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='\u2b05\ufe0f \xa0\xa0   Response'",title:"'\u2b05\ufe0f","\xa0\xa0":!0,"":!0,"Response'":!0},'{\n  "record_id": 1,\n  "title": "200301_recruiting_photo_1.jpeg",\n  "fields": [\n    {\n      "field_id": 3,\n      "external_id": "recruiting_photos",\n      "label": "Recruiting Photos",\n      "field_type": "multi_image",\n      "type": "image",\n      "values": [\n        {\n          "value": {\n            "id": 100,\n            "filename": "200301_recruiting_photo_1.jpeg",\n            "size": 12300\n          }\n        },\n        {\n          "value": {\n            "id": 101,\n            "filename": "200301_recruiting_photo_2.jpeg",\n            "size": 11300\n          }\n        }\n      ]\n    }\n  ]\n}\n')))}_.isMDXComponent=!0}}]);