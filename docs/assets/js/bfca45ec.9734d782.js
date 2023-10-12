"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9239],{7586:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var i=a(7462),n=a(3366),r=(a(7294),a(3905)),o=(a(7859),a(4757)),p=(a(9877),a(8215),["components"]),s={id:"link-preview",title:"Link Preview",sidebar_label:"Link Preview"},l=void 0,d={unversionedId:"api/resource/link-preview",id:"api/resource/link-preview",title:"Link Preview",description:"Tape generates link previews for URLs inside link fields or that are shared via comments, replies and chat messages. A link preview always has the id and url properties, all other properties (title, description, previewImage) are optional, depending on whether Tape was able to access the provided URL.",source:"@site/docs/api/resource/link-preview.md",sourceDirName:"api/resource",slug:"/api/resource/link-preview",permalink:"/docs/api/resource/link-preview",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/resource/link-preview.md",tags:[],version:"current",frontMatter:{id:"link-preview",title:"Link Preview",sidebar_label:"Link Preview"},sidebar:"mainSidebar",previous:{title:"Icon",permalink:"/docs/api/resource/icon"},next:{title:"Webhook",permalink:"/docs/api/resource/webhook"}},c={},m=[{value:"Create a link preview",id:"create-a-link-preview",level:2}],h={toc:m};function u(e){var t=e.components,a=(0,n.Z)(e,p);return(0,r.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Tape generates link previews for URLs inside link fields or that are shared via comments, replies and chat messages. A link preview always has the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," properties, all other properties (",(0,r.kt)("inlineCode",{parentName:"p"},"title"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"description"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"previewImage"),") are optional, depending on whether Tape was able to access the provided URL."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There are many reasons why generating a link preview can take a long time or fail (website not reachable, website takes a long time to respond, ...). To prevent critical operations like creating a record to fail due to an unsuccessful link preview generation, Tape accepts only the URL as an input and will generate the full link preview after the operation was successful. Therefore, generating a link preview via the dedicated endpoint is optional and only needed if you want full control over the process."))),(0,r.kt)("h2",{id:"create-a-link-preview"},"Create a link preview"),(0,r.kt)(o.Z,{method:"POST",url:"https://api.tapeapp.com/v1/link-preview",mdxType:"EndpointBadge"}),(0,r.kt)("p",null,"Create a link preview by providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," property in the request body:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u27a1\ufe0f \xa0\xa0   Request"',title:'"\u27a1\ufe0f',"\xa0\xa0":!0,"":!0,'Request"':!0},'{\n  "url": "https://tapeapp.com" // The absolute url of the link to generate the preview for\n}\n')),(0,r.kt)("p",null,"The response will be a link preview object containing the information Tape could generate for the provided URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="\u2b05\ufe0f \xa0\xa0   Response"',title:'"\u2b05\ufe0f',"\xa0\xa0":!0,"":!0,'Response"':!0},'{\n  "id": 1, // The unique ID of the link preview object\n  "url": "https://tapeapp.com", // The absolute url of the link\n  "title": "Tape - Build your own powerful business platform", // The title of the link\'s website\n  "description": "Fully customizable. No-code. Low-code.", // The description of the link\'s website\n  "previewImage": {\n    // A representative thumbnail image for the link\'s website (e.g., the favicon)\n    "small": "https://s3.eu-central-1.amazonaws.com/tape-thumbnails/def09e9319ca30e9ab2bc13e061982",\n    "medium": "https://s3.eu-central-1.amazonaws.com/tape-thumbnails/82f3c2669deca95c16d1ad955734e0",\n    "large": "https://s3.eu-central-1.amazonaws.com/tape-thumbnails/f8f105f4daaced0f3f714b5ebb76ae"\n  }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"previewImage")," property is a thumbnail object. Read more about thumbnails ",(0,r.kt)("a",{parentName:"p",href:"file#thumbnails"},"here"),"."))}u.isMDXComponent=!0}}]);