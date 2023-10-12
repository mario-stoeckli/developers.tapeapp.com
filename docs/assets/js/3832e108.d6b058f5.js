"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[7622],{4757:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);function o(e){var t,n=e.method,o=e.url;switch(n){case"GET":t="#007959";break;case"POST":t="#0071BB";break;case"PUT":t="#DEA700";break;case"DELETE":t="#DF245E"}return a.createElement("div",{style:{display:"flex",flexDirection:"row",fontSize:"15px",lineHeight:"15px",marginBottom:"13px"}},a.createElement("span",{style:{backgroundColor:t,color:"var(--tape-color-lightest)",borderRadius:"999px",padding:"4px 9px 3px 9px",fontWeight:700,fontSize:"11px",lineHeight:"11px"}},n.toUpperCase()),a.createElement("span",{style:{color:"var(--tape-color-darker)",marginLeft:"9px",marginTop:"2px"}},o))}},4092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>f});var a=n(7462),o=n(3366),s=(n(7294),n(3905)),i=n(4757),l=n(9877),p=n(8215),r=n(7859),d=["components"],u={id:"status",title:"Status Field",sidebar_label:"Status"},c=void 0,m={unversionedId:"api/resource/field/status",id:"api/resource/field/status",title:"Status Field",description:"What is a Status field?",source:"@site/docs/api/resource/field/status.md",sourceDirName:"api/resource/field",slug:"/api/resource/field/status",permalink:"/docs/api/resource/field/status",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/field/status.md",tags:[],version:"current",frontMatter:{id:"status",title:"Status Field",sidebar_label:"Status"},sidebar:"mainSidebar",previous:{title:"Category",permalink:"/docs/api/resource/field/category"},next:{title:"Relation",permalink:"/docs/api/resource/field/relation"}},h={},f=[{value:"What is a Status field?",id:"what-is-a-status-field",level:2},{value:"Working with Status fields",id:"working-with-status-fields",level:2},{value:"Properties",id:"properties",level:2},{value:"App creation",id:"app-creation",level:2},{value:"App update",id:"app-update",level:2}],k={toc:f};function g(e){var t=e.components,n=(0,o.Z)(e,d);return(0,s.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"what-is-a-status-field"},"What is a Status field?"),(0,s.kt)("p",null,"Status fields are a special field type within Tape that are used to represent task-like records.\nStatus fields are created or updated like ",(0,s.kt)("inlineCode",{parentName:"p"},"single_category")," fields, with one difference: The options of a status field have a required ",(0,s.kt)("inlineCode",{parentName:"p"},"means_completed")," property."),(0,s.kt)("p",null,"An option with ",(0,s.kt)("inlineCode",{parentName:"p"},"means_completed"),' set to true means that the record is resolved. Descriptive labels for such an option could be e.g. ("Done", "Discarded", "Duplicate")\nAn option with ',(0,s.kt)("inlineCode",{parentName:"p"},"means_completed"),' set to false means that the record is not yet resolved. Descriptive labels for such an option could be e.g. ("Open", "In Progress", "Blocked")'),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"means_completed")," property of a status option determines whether the record that has this option selected within its status field value, is added to, or removed from the Focus section within the Home section of Tape.\nFor further information on the Focus feature or on how to configure an App so that its records land in a users Focus section, please refer to ",(0,s.kt)("a",{parentName:"p",href:"https://help.tapeapp.com/en/articles/6394049-focus"},"https://help.tapeapp.com/en/articles/6394049-focus")),(0,s.kt)("h2",{id:"working-with-status-fields"},"Working with Status fields"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"status")," field values can only hold a single selected option. There is no multi-select version of a ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," field."),(0,s.kt)("p",null,"Within Tape, a record can have maximally one status, therefore you can only add up to one ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," field to an App."),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," field must be set to ",(0,s.kt)("inlineCode",{parentName:"p"},"required"),". In case an App has a ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," field, each record within this app needs to select an option for this field in order to be created or updated."),(0,s.kt)("p",null,"A ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," field must specify at least one option with ",(0,s.kt)("inlineCode",{parentName:"p"},"means_completed")," set to true and at least one option with ",(0,s.kt)("inlineCode",{parentName:"p"},"means_completed")," set to false."),(0,s.kt)("h2",{id:"properties"},"Properties"),(0,s.kt)("p",null,"In addition to the common field properties, a status field definition has a ",(0,s.kt)("inlineCode",{parentName:"p"},"settings")," property containing the selectable ",(0,s.kt)("inlineCode",{parentName:"p"},"options")," of the field.\nThe ",(0,s.kt)("inlineCode",{parentName:"p"},"options")," property is an array of objects with the following properties:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"id"),": Once an option has been created, the id property can be used to update the option. This is also the id of the option that is used to specify an option within record update or creation."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"text")," (required): The text (=label) of the option. This is the name of the option that is displayed to the user."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"means_completed")," (required): Whether this status-options means that the task it refers to is completed or not."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"color")," (optional): The color of the option. This is the color of the option that is displayed to the user. The color can be one of ",'["gray", "brown", "orange", "yellow", "green", "blue", "purple", "pink", "red"]')),(0,s.kt)("h2",{id:"app-creation"},"App creation"),(0,s.kt)(i.Z,{method:"POST",url:"https://api.tapeapp.com/v1/app",mdxType:"EndpointBadge"}),(0,s.kt)("p",null,"A status field can be created as part of an App creation. Here is an example request body for creating an excerp of a Tasks app within a workspace with ID 1."),(0,s.kt)("p",null,"The app contains a ",(0,s.kt)("inlineCode",{parentName:"p"},"status"),' field "Status". Other useful fields for a Tasks app, like "Title", "Due Date" or "Description" are omitted for brevity.'),(0,s.kt)(l.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,s.kt)(p.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(r.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'\ncurl -X POST http://localhost:3000/v1/app/ \\\n   -u #USER_API_KEY: \\\n   -H "Content-Type: application/json" \\\n   --data \'{\n    "workspace_id": 1,\n    "name": "Tasks",\n    "item_name": "Task",\n    "fields": [\n      {\n        "field_type": "status",\n        "config": {\n          "label": "Status",\n          "description": "The current status of the task.",\n          "required": true,\n          "settings": {\n            "options": [\n              {\n                "text": "Open",\n                "color": "blue",\n                "means_completed": false\n              },\n              {\n                "text": "In Progress",\n                "color": "yellow",\n                "means_completed": false\n              },\n              {\n                "text": "Done",\n                "color": "green",\n                "means_completed": true\n              }\n            ]\n          }\n        }\n      }\n    ] \n  }\'\n')),(0,s.kt)(p.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "workspace_id": 1,\n  "name": "Tasks",\n  "item_name": "Task",\n  "fields": [\n    {\n      "field_type": "status",\n      "config": {\n        "label": "Status",\n        "description": "The current status of the task.",\n        "required": true,\n        "settings": {\n          "options": [\n            {\n              "text": "Open",\n              "color": "blue",\n              "means_completed": false\n            },\n            {\n              "text": "In Progress",\n              "color": "yellow",\n              "means_completed": false\n            },\n            {\n              "text": "Done",\n              "color": "green",\n              "means_completed": true\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n')))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "app_id": 1,\n  "workspace_id": 1,\n  "slug": "tasks",\n  "external_id": "tasks",\n  "name": "Tasks",\n  "item_name": "Task",\n  "config": {\n    "item_name": "Task",\n    "name": "Tasks"\n  },\n  "fields": [\n    {\n      "field_id": 1,\n      "slug": "status",\n      "label": "Status",\n      "field_type": "status",\n      "type": "category",\n      "config": {\n        "label": "Status",\n        "slug": "status",\n        "description": "The current status of the task.",\n        "required": true,\n        "always_hidden": false,\n        "hidden_if_empty": false,\n        "settings": {\n          "multiple": false,\n          "options": [\n            {\n              "id": 1,\n              "text": "Open",\n              "color": "BLUE",\n              "means_completed": false\n            },\n            {\n              "id": 2,\n              "text": "In Progress",\n              "color": "YELLOW",\n              "means_completed": false\n            },\n            {\n              "id": 3,\n              "text": "Done",\n              "color": "GREEN",\n              "means_completed": true\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n')),(0,s.kt)("h2",{id:"app-update"},"App update"),(0,s.kt)(i.Z,{method:"POST",url:"https://api.tapeapp.com/v1/app/{appId}",mdxType:"EndpointBadge"}),(0,s.kt)("p",null,'A status field can be created or updated as part of an App update. Here is an example request body for updating the previously created contacts app with ID 1.\nThe update adds an option "Discarded" to the "Status" field.\nWhen updating a status field, the order of the options in the input is preserved in case you specify all existing options.'),(0,s.kt)("p",null,"In case you want to remove one or multiple options from a ",(0,s.kt)("inlineCode",{parentName:"p"},"status")," field, you can specify the property ",(0,s.kt)("inlineCode",{parentName:"p"},"options_to_delete")," within the ",(0,s.kt)("inlineCode",{parentName:"p"},"settings")," property of the field.\nJust add the options you want to delete to the ",(0,s.kt)("inlineCode",{parentName:"p"},"options_to_delete")," array. The options are identified by their ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," property."),(0,s.kt)("p",null,'Attention: In case you delete a status option, all status field values that have this option selected, will be migrated to the first option (smallest position/index) of the status field that has the same means_completed property as the deleted option.\nIn our example below: If we would delete the "Open" option, all status field values that have the "Open" option selected, would be migrated to the "In Progress" option, because both options have ',(0,s.kt)("inlineCode",{parentName:"p"},"means_completed")," set to false."),(0,s.kt)(l.Z,{defaultValue:"curl",mdxType:"Tabs"},(0,s.kt)(p.Z,{value:"curl",label:"cURL",mdxType:"TabItem"},(0,s.kt)(r.Z,{language:"shell",title:"\u27a1\ufe0f \xa0\xa0   Request",mdxType:"ContextCodeBlock"},'\ncurl -X PUT http://localhost:3000/v1/app/1 \\\n   -u #USER_API_KEY: \\\n   -H "Content-Type: application/json" \\\n   --data \'{\n    "app_id": 1,\n    "fields": [\n      {\n        "field_id": 1,\n        "config": {\n          "settings": {\n            "label": "Status",\n            "options": [\n              {\n                "id": 1,\n                "text": "Open",\n                "color": "blue",\n                "means_completed": false\n              },\n              {\n                "id": 2,\n                "text": "In Progress",\n                "color": "yellow",\n                "means_completed": false\n              },\n              {\n                "id": 3,\n                "text": "Done",\n                "color": "green",\n                "means_completed": true\n              },\n              {\n                "text": "Discarded",\n                "color": "red",\n                "means_completed": true\n              }\n            ],\n            "options_to_delete": []\n          }\n        }\n      }\n    ]\n  }\'\n')),(0,s.kt)(p.Z,{value:"json",label:"JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request">',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request">':!0},'{\n  "app_id": 1,\n  "fields": [\n    {\n      "field_id": 1,\n      "config": {\n        "settings": {\n          "options": [\n            {\n              "id": 1,\n              "text": "Open",\n              "color": "blue",\n              "means_completed": false\n            },\n            {\n              "id": 2,\n              "text": "In Progress",\n              "color": "yellow",\n              "means_completed": false\n            },\n            {\n              "id": 3,\n              "text": "Done",\n              "color": "green",\n              "means_completed": true\n            },\n            {\n              "text": "Discarded",\n              "color": "red",\n              "means_completed": true\n            }\n          ],\n          "options_to_delete": []\n        }\n      }\n    }\n  ]\n}\n')))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "app_id": 1,\n  "workspace_id": 1,\n  "slug": "tasks",\n  "external_id": "tasks",\n  "name": "Tasks",\n  "item_name": "Task",\n  "config": {\n    "item_name": "Task",\n    "name": "Tasks"\n  },\n  "fields": [\n    {\n      "field_id": 1,\n      "slug": "status",\n      "label": "Status",\n      "field_type": "status",\n      "type": "category",\n      "config": {\n        "label": "Status",\n        "slug": "status",\n        "description": "The current status of the task.",\n        "required": true,\n        "always_hidden": false,\n        "hidden_if_empty": false,\n        "settings": {\n          "multiple": false,\n          "options": [\n            {\n              "id": 1,\n              "text": "Open",\n              "color": "BLUE",\n              "means_completed": false\n            },\n            {\n              "id": 2,\n              "text": "In Progress",\n              "color": "YELLOW",\n              "means_completed": false\n            },\n            {\n              "id": 3,\n              "text": "Done",\n              "color": "GREEN",\n              "means_completed": true\n            }\n          ]\n        }\n      }\n    }\n  ]\n}\n```\n\n')))}g.isMDXComponent=!0}}]);