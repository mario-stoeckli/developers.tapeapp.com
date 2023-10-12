"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[2339],{5011:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>g,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>f});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),l=t(4757),p=t(9877),r=t(8215),d=t(7859),s=["components"],c={id:"category",title:"Category Field",sidebar_label:"Category"},g=void 0,u={unversionedId:"api/resource/field/category",id:"api/resource/field/category",title:"Category Field",description:"There are two types of category fields: singlecategory and multicategory.",source:"@site/docs/api/resource/field/category.md",sourceDirName:"api/resource/field",slug:"/api/resource/field/category",permalink:"/docs/api/resource/field/category",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field/category.md",tags:[],version:"current",frontMatter:{id:"category",title:"Category Field",sidebar_label:"Category"},sidebar:"mainSidebar",previous:{title:"User",permalink:"/docs/api/resource/field/user"},next:{title:"Status",permalink:"/docs/api/resource/field/status"}},m={},f=[{value:"App creation",id:"app-creation",level:2},{value:"App update",id:"app-update",level:2}],y={toc:f};function h(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are two types of category fields: ",(0,o.kt)("inlineCode",{parentName:"p"},"single_category")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"multi_category"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"single_category")," fields can only hold a single selected option while ",(0,o.kt)("inlineCode",{parentName:"p"},"multi_category")," fields can hold multiple selected options."),(0,o.kt)("p",null,"In addition to the common field properties, a category field definition has a ",(0,o.kt)("inlineCode",{parentName:"p"},"settings")," property containing the selectable ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," of the field.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," property is an array of objects with the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"id"),": Once an option has been created, the id property can be used to update the option. This is also the id of the option that is used to specify an option within record update or creation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text")," (required): The text (= label) of the option. This is the name of the option that is displayed to the user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"color")," (optional): The color of the option. This is the color of the option that is displayed to the user. The color can be one of ",'["gray", "brown", "orange", "yellow", "green", "blue", "purple", "pink", "red"]')),(0,o.kt)("h2",{id:"app-creation"},"App creation"),(0,o.kt)(l.Z,{method:"POST",url:"https://api.tapeapp.com/v1/app",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,"A category field can be created as part of an App creation. Here is an example request body for creating an excerp of a leads app within a workspace with ID 1."),(0,o.kt)("p",null,"The app contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"single_category"),' field "Pipeline Stage". Other useful fields for a leads app, like "Name", "Company" or "Notes" are omitted for brevity.\n',(0,o.kt)("inlineCode",{parentName:"p"},"multi_category")," fields are created in the same way as ",(0,o.kt)("inlineCode",{parentName:"p"},"single_category")," fields."),(0,o.kt)(p.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'\ncurl -X POST #BASE_URL/v1/app/ \\\n   -u #USER_API_KEY: \\\n   -H "Content-Type: application/json" \\\n   --data \'{\n    "workspace_id": 1,\n    "name": "Leads",\n    "item_name": "Lead",\n    "fields": [\n      {\n        "field_type": "single_category",\n        "config": {\n          "label": "Pipeline Stage",\n          "description": "The current stage of the lead in the sales pipeline.",\n          "required": true,\n          "settings": {\n            "options": [\n              {\n                "text": "New",\n                "color": "gray"\n              },\n              {\n                "text": "Contacted",\n                "color": "blue"\n              },\n              {\n                "text": "Won",\n                "color": "green"\n              },\n              {\n                "text": "Lost",\n                "color": "red"\n              }\n            ]\n          }\n        }\n      },\n    ] \n  }\'\n')),(0,o.kt)(r.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "workspace_id": 1,\n  "name": "Leads",\n  "item_name": "Lead",\n  "fields": [\n    {\n      "field_type": "single_category",\n      "config": {\n        "label": "Pipeline Stage",\n        "description": "The current stage of the lead in the sales pipeline.",\n        "required": true,\n        "settings": {\n          "options": [\n            {\n              "text": "New",\n              "color": "gray"\n            },\n            {\n              "text": "Contacted",\n              "color": "blue"\n            },\n            {\n              "text": "Won",\n              "color": "green"\n            },\n            {\n              "text": "Lost",\n              "color": "red"\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "app_id": 1,\n  "workspace_id": 1,\n  "slug": "leads",\n  "external_id": "leads",\n  "name": "Leads",\n  "item_name": "Lead",\n  "config": {\n    "item_name": "Lead",\n    "name": "Leads"\n  },\n  "fields": [\n    {\n      "field_id": 1,\n      "slug": "pipeline_stage",\n      "label": "Pipeline Stage",\n      "type": "category",\n      "field_type": "single_category",\n      "config": {\n        "label": "Pipeline Stage",\n        "slug": "pipeline_stage",\n        "description": "The current stage of the lead in the sales pipeline.",\n        "required": true,\n        "always_hidden": false,\n        "hidden_if_empty": false,\n        "settings": {\n          "multiple": false,\n          "options": [\n            {\n              "id": 1,\n              "text": "New",\n              "color": "GRAY"\n            },\n            {\n              "id": 2,\n              "text": "Contacted",\n              "color": "BLUE"\n            },\n            {\n              "id": 3,\n              "text": "Won",\n              "color": "GREEN"\n            },\n            {\n              "id": 4,\n              "text": "Lost",\n              "color": "RED"\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"app-update"},"App update"),(0,o.kt)(l.Z,{method:"PUT",url:"https://api.tapeapp.com/v1/app/{appId}",mdxType:"EndpointBadge"}),(0,o.kt)("p",null,'A category field can be created or updated as part of an App update. Here is an example request body for updating the previously created contacts app with ID 1.\nThe update adds an option "Negoatiating" to the "Pipeline Stage" field and updates the color of the "Lost" option to "orange".\nWhen updating a category field, the order of the options in the input is preserved in case you specify all existing options.'),(0,o.kt)("p",null,"In case you want to remove one or multiple options from a ",(0,o.kt)("inlineCode",{parentName:"p"},"category")," field, you can specify the property ",(0,o.kt)("inlineCode",{parentName:"p"},"options_to_delete")," within the ",(0,o.kt)("inlineCode",{parentName:"p"},"settings")," property of the field.\nJust add the options you want to delete to the ",(0,o.kt)("inlineCode",{parentName:"p"},"options_to_delete")," array. The options are identified by their ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"multi_category")," fields are updated in the same way as ",(0,o.kt)("inlineCode",{parentName:"p"},"single_category")," fields."),(0,o.kt)(p.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,o.kt)(d.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'\ncurl -X PUT #BASE_URL/v1/app/1 \\\n   -u #USER_API_KEY: \\\n   -H "Content-Type: application/json" \\\n   --data \'{\n    "app_id": 1,\n    "fields": [\n      {\n        "field_id": 1,\n        "config": {\n          "settings": {\n            "label": "Pipeline Stage",\n            "options": [\n              {\n                "id": 1,\n                "text": "New",\n                "color": "gray"\n              },\n              {\n                "id": 2,\n                "text": "Contacted",\n                "color": "blue"\n              },\n              {\n                "text": "Negoatiating",\n                "color": "yellow"\n              },\n              {\n                "id": 3,\n                "text": "Won",\n                "color": "green"\n              },\n              {\n                "id": 4,\n                "text": "Lost",\n                "color": "orange"\n              },\n            ],\n            "options_to_delete": []\n          }\n        }\n      }\n    ]\n}\'\n')),(0,o.kt)(r.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "app_id": 1,\n  "fields": [\n    {\n      "field_id": 1,\n      "config": {\n        "label": "Pipeline Stage",\n        "settings": {\n          "options": [\n            {\n              "id": 1,\n              "text": "New",\n              "color": "gray"\n            },\n            {\n              "id": 2,\n              "text": "Contacted",\n              "color": "blue"\n            },\n            {\n              "text": "Negoatiating",\n              "color": "yellow"\n            },\n            {\n              "id": 3,\n              "text": "Won",\n              "color": "green"\n            },\n            {\n              "id": 4,\n              "text": "Lost",\n              "color": "orange"\n            }\n          ],\n          "options_to_delete": []\n        }\n      }\n    }\n  ]\n}\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "app_id": 1,\n  "workspace_id": 1,\n  "slug": "leads",\n  "external_id": "leads",\n  "name": "Leads",\n  "record_name": "Lead",\n  "item_name": "Lead",\n  "position": 0,\n  "config": {\n    "item_name": "Lead",\n    "name": "Leads"\n  },\n  "fields": [\n    {\n      "field_id": 1,\n      "external_id": "pipeline_stage",\n      "slug": "pipeline_stage",\n      "label": "Pipeline Stage",\n      "type": "category",\n      "field_type": "single_category",\n      "config": {\n        "label": "Pipeline Stage",\n        "slug": "pipeline_stage",\n        "description": "The current stage of the lead in the sales pipeline.",\n        "required": false,\n        "always_hidden": false,\n        "hidden_if_empty": false,\n        "settings": {\n          "multiple": false,\n          "options": [\n            {\n              "id": 1,\n              "text": "New",\n              "color": "GRAY"\n            },\n            {\n              "id": 6,\n              "text": "Contacted",\n              "color": "BLUE"\n            },\n            {\n              "id": 3,\n              "text": "Negoatiating",\n              "color": "YELLOW"\n            },\n            {\n              "id": 4,\n              "text": "Won",\n              "color": "GREEN"\n            },\n            {\n              "id": 5,\n              "text": "Lost",\n              "color": "ORANGE"\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n```\n\n')))}h.isMDXComponent=!0}}]);