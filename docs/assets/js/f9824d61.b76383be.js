"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[4283],{5028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var i=a(7462),o=a(3366),r=(a(7294),a(3905)),n=["components"],s={id:"date-timezone",title:"Date & Timezone",sidebar_label:"Date & Timezone"},d="Date & Timezone",l={unversionedId:"api/date-timezone",id:"api/date-timezone",title:"Date & Timezone",description:"Datetime format",source:"@site/docs/api/date-timezone.md",sourceDirName:"api",slug:"/api/date-timezone",permalink:"/docs/api/date-timezone",editUrl:"https://github.com/tape-dev/developers.tapeapp.com/edit/main/apps/dev-portal/docs/api/date-timezone.md",tags:[],version:"current",frontMatter:{id:"date-timezone",title:"Date & Timezone",sidebar_label:"Date & Timezone"},sidebar:"mainSidebar",previous:{title:"Request Limits",permalink:"/docs/api/request-limits"},next:{title:"Record",permalink:"/docs/api/resource/record"}},p={},m=[{value:"Datetime format",id:"datetime-format",level:2},{value:"Date format",id:"date-format",level:2},{value:"Timezone support",id:"timezone-support",level:2}],u={toc:m};function c(e){var t=e.components,a=(0,o.Z)(e,n);return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"date--timezone"},"Date & Timezone"),(0,r.kt)("h2",{id:"datetime-format"},"Datetime format"),(0,r.kt)("p",null,"The Tape API returns all dates as a formatted string, similar to ISO 8601 and in UTC timezone."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-02-01 15:00\n")),(0,r.kt)("p",null,"which would be equal to the following in standardized ISO 8601:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-02-01T15:00Z\n")),(0,r.kt)("p",null,"The format chosen by Tape is optimized for readability. While not included in the official ISO 8601 standard, most programming languages & libraries support the chosen format."),(0,r.kt)("h2",{id:"date-format"},"Date format"),(0,r.kt)("p",null,"Dates are represented as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022-02-01\n")),(0,r.kt)("h2",{id:"timezone-support"},"Timezone support"),(0,r.kt)("p",null,"Tape supports time zone settings for users, however the API only works with UTC format, both for response and request bodies. When using the Tape web and mobile clients, users will see their dates properly formatted in their timezone, which is handled by browsers / client devices."))}c.isMDXComponent=!0}}]);