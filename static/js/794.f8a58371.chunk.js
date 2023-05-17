"use strict";(self.webpackChunkMedAir3=self.webpackChunkMedAir3||[]).push([[794],{6877:function(e,n,t){var r=t(3655),i=t(5820),a=t(2791),s=t(2622),l=t(4087),o=t(184);function c(e){var n=e.onClick;return(0,o.jsx)(r.Z.Link,{children:(0,o.jsx)(l.xu,{color:"red",onClick:function(e){return e.stopPropagation()},children:(0,o.jsx)(i.Z,{title:"Are you sure you want to delete this item?",okText:"Yes",cancelText:"No",onConfirm:n,children:(0,o.jsx)(s.Z,{})})})})}n.Z=(0,a.memo)(c)},4478:function(e,n,t){var r=t(9439),i=t(1041),a=t(3099),s=t(9389),l=t(2706),o=t(7309),c=t(9420),u=t(1830),d=t(2791),m=t(2491),h=t(4087),p=t(175),x=t(3052),f=(t(8431),t(184));function Z(e){var n=e.button,t=e.form,d=e.readOnly,Z=void 0!==d&&d,j=(0,m.a)("(min-width: 600px)"),v=(0,r.Z)(j,1)[0],b=(0,x.b)(),g=b.inPatientCollapse,y=b.setInPatientCollapse;return(0,f.jsx)(h.xu,{boxShadow:"xl",p:"2",bg:"pink.100",borderRadius:"15px",children:(0,f.jsxs)(i.Z,{id:"patientForm",form:t,layout:v?"inline":"vertical",children:[(0,f.jsx)(i.Z.Item,{label:"Name",children:(0,f.jsxs)(a.Z.Compact,{children:[(0,f.jsx)(i.Z.Item,{noStyle:!0,name:"patientName",children:(0,f.jsx)(s.Z,{readOnly:Z,placeholder:"Name"})},"patientName"),(0,f.jsx)(i.Z.Item,{name:"patientId",noStyle:!0,children:(0,f.jsx)(l.Z,{readOnly:Z,addonBefore:"\u2116",placeholder:"Patient \u2116"})}),(0,f.jsx)(o.ZP,{type:"ghost",onClick:function(){return y((function(e){return!e}))},icon:g?(0,f.jsx)(c.Z,{}):(0,f.jsx)(u.Z,{})})]})}),(0,f.jsx)(p.U,{in:g,animateOpacity:!0,children:(0,f.jsxs)(i.Z,{form:t,layout:v?"inline":"vertical",children:[(0,f.jsx)(i.Z.Item,{name:"patientSurName",label:"Suriname",children:(0,f.jsx)(s.Z,{readOnly:Z,placeholder:"Suriname"})},"patientSurName"),(0,f.jsx)(i.Z.Item,{name:"phoneNumber",label:"Phone number",children:(0,f.jsx)(s.Z,{readOnly:Z,placeholder:"Phone number"})},"phoneNumber")]})}),n]})})}n.Z=(0,d.memo)(Z)},667:function(e,n,t){var r=t(4165),i=t(1413),a=t(5861),s=t(2791),l=t(4478),o=t(7027),c=t(1041),u=t(3099),d=t(7309),m=t(3052),h=t(1244),p=t(9572),x=t(184),f=function(){var e=(0,m.b)(),n=e.personInfoForm,t=e.diseaseHistoryForm,s=e.patientForm,l=e.familyMembersList,f=e.treatmentHistoryForm,Z=(0,h.o)((function(e){return e.dataSourceDiseaseHistoryTable})),j=(0,h.o)((function(e){return e.savedDrawingCanvas})),v=(0,h.o)((function(e){return e.descriptionsCanvas})),b=(0,h.o)((function(e){return e.dataSourceVisitTable})),g=(0,h.o)((function(e){return e.dataSourceAnalysisTable})),y=(0,h.o)((function(e){return e.dataSourceTreatmentTable})),w=(0,h.o)((function(e){return e.recipeList})),I=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var a,c,u,d,m,h,x,I,k,C,S,F;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.ZP.loading({content:"Loading...",key:"doc_save"}),!(a=s.getFieldsValue().patientId)){e.next=6;break}c=a,e.next=9;break;case 6:return e.next=8,(0,p.$M)();case 8:c=e.sent;case 9:c&&(Object.keys(n.getFieldsValue()).length&&(u=s.getFieldsValue(),d=u.patientName,m=u.patientSurName,h=u.patientPatronymic,x=u.patientId,I=(0,i.Z)((0,i.Z)({},n.getFieldsValue()),{},{patientName:d,patientSurName:m,patientPatronymic:h,patientId:x}),(0,p.bp)(I)),Object.keys(t.getFieldsValue()).length&&(j.deseaseImageDesc=JSON.stringify(v),k=(0,i.Z)((0,i.Z)({},t.getFieldsValue()),{},{patientId:c,familyMembersList:l,deseaseImagesList:j,deseaseHistoryDynamicsList:Z}),(0,p.Yo)(k)),b&&(C={patientVisitsList:b,patientId:c},(0,p.jW)(C)),g&&(S={analyzesMediaList:g,patientId:c},(0,p.H9)(S)),g&&(F=(0,i.Z)((0,i.Z)({},f.getFieldsValue()),{},{patientId:c,treatmentDynamics:y,recipeList:w}),(0,p.si)(F))),console.log("patientForm",s.getFieldsValue()),console.log("personInfoForm",n.getFieldsValue()),console.log("diseaseHistoryForm",t.getFieldsValue()),console.log("dataSourceDiseaseHistoryTable",Z),console.log("familyMembersList",l),console.log("savedDrawingCanvas",j),console.log("descriptionsCanvas",v),console.log("dataSourceVisitTable",b),console.log("dataSourceAnalysisTable",g),console.log("treatmentHistoryForm",f.getFieldsValue()),console.log("dataSourceTreatmentTable",y),console.log("recipeList",w);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,x.jsx)(c.Z.Item,{noStyle:!0,children:(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(d.ZP,{onClick:I,form:"patientForm",type:"primary",htmlType:"submit",children:"Save"}),(0,x.jsx)(d.ZP,{danger:!0,children:"Clear"})]})})};function Z(){var e=(0,m.b)().patientForm;return(0,x.jsx)(l.Z,{form:e,button:(0,x.jsx)(f,{}),readOnly:!0})}n.Z=(0,s.memo)(Z)},378:function(e,n,t){var r=t(4087),i=t(7885),a=t(6070),s=t(2791),l=t(2414),o=t(184);function c(e){var n=e.items,t=e.isOpen,s=e.onOpenChange;return(0,o.jsx)(r.xu,{cursor:"pointer",children:(0,o.jsx)(a.Z,{trigger:["click"],menu:{items:n},open:t,onOpenChange:s,children:(0,o.jsx)(i.h,{variant:"ghost",color:"pink.500",size:"sm",isRound:!0,"aria-label":"Search database",icon:(0,o.jsx)(l.Z,{})})})})}n.Z=(0,s.memo)(c)},9572:function(e,n,t){t.d(n,{$M:function(){return o},H9:function(){return m},M9:function(){return Z},Yo:function(){return u},bp:function(){return c},dK:function(){return f},jW:function(){return d},si:function(){return h}});var r=t(4165),i=t(5861),a=t(7027),s=t(4488),l=function(e,n){e&&"string"!==typeof e?a.ZP.success({content:n+" saved",key:n+"_save",duration:2}):a.ZP.error({content:n+" don't saved",key:n+"_save",duration:2})},o=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.Z)("patientid",{},"get");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0),a.ZP.error({content:e.t0,key:"doc_save",duration:2});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("vite",n,"post");case 2:t=e.sent,l(t,"Person Info");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("morby",n,"post");case 2:t=e.sent,l(t,"Disease History");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("visits",n,"post");case 2:t=e.sent,l(t,"Visit");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("analyses",n,"post");case 2:t=e.sent,l(t,"Analyses");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("treatment",n,"post");case 2:t=e.sent,l(t,"Treatment");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.Z)("visitsformcalendar",n,"post"));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,s.Z)("patients/".concat(n)));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,i,s,l,u,d,m,h,f,Z,j,v;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=n.sendObj).patientId){e.next=7;break}s=t.patientId,x(s).then((function(e){null!==e&&void 0!==e&&e.data?i=t.patientId:a.ZP.warning({content:"The Patient not find",key:"info_message",duration:4})})),i=t.patientId,e.next=10;break;case 7:return e.next=9,o();case 9:i=e.sent;case 10:if(l=t.patientName,u=t.patientSurName,d=t.patientPatronymic,m=t.visitDate,h=t.phoneNumber,f=t.status,Z=t.visitReason,j={patientVisitsList:[{patientId:i,status:f,visitDate:m,visitReason:Z}]},v={patientId:i,patientName:l,patientSurName:u,patientPatronymic:d,phoneNumber:h},!i){e.next=20;break}if(t.patientId){e.next=17;break}return e.next=17,c(v);case 17:return e.next=19,p(j);case 19:e.sent;case 20:return e.abrupt("return",!0);case 21:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Z=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("managers/pathologists");case 2:if(null===(n=e.sent)||void 0===n||!n.data){e.next=5;break}return e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},3416:function(e,n,t){function r(e){return JSON.parse(JSON.stringify(e))}t.d(n,{p:function(){return r}})},4096:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ze}});var r=t(9439),i=t(2791),a=t(3433),s=t(3722),l=t(1041),o=t(9389),c=t(9555),u=t(4960),d=t(3099),m=t(2706),h=t(7309),p=t(1244),x=t(1933),f=t(9572),Z=t(184);function j(){var e=(0,x.useQuery)(["managers/pathologists"],f.M9,{enabled:!1}),n=e.data,t=e.isLoading,r=e.refetch;return(0,Z.jsx)(c.Z,{allowClear:!0,lazyLoad:!0,loading:t,onFocus:r,children:null===n||void 0===n?void 0:n.map((function(e){return(0,Z.jsx)(c.Z.Option,{value:e.pathologistName,children:e.pathologistName},e.pathologistId)}))})}var v=(0,i.memo)(j);function b(e){var n=e.selectedRowKey,t=e.setSelectedRowKey,r=e.form,i=(0,p.o)((function(e){return e.dataSourceDiseaseHistoryTable})),x=(0,p.o)((function(e){return e.setDataSourceDiseaseHistoryTable})),f=function(e){if(n){var s=i.map((function(n){return n.id===e.id?e:n}));x(s)}else{var l=(new Date).getTime();e.id=l,e.key=l,x([].concat((0,a.Z)(i),[e]))}r.resetFields(),t()};return(0,Z.jsxs)(s.M,{columns:["1","2"],children:[(0,Z.jsxs)(l.Z,{onFinish:f,id:"diseaseHistoryFormBloke",form:r,labelWrap:!0,labelAlign:"right",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},children:[(0,Z.jsx)(l.Z.Item,{hidden:!0,name:"id",children:(0,Z.jsx)(o.Z,{})}),(0,Z.jsx)(l.Z.Item,{label:"Breast",name:"complaintBreastType",children:(0,Z.jsxs)(c.Z,{allowClear:!0,children:[(0,Z.jsx)(c.Z.Option,{value:"no",children:"Missing"}),(0,Z.jsx)(c.Z.Option,{value:"right",children:"Right"}),(0,Z.jsx)(c.Z.Option,{value:"left",children:"Left"}),(0,Z.jsx)(c.Z.Option,{value:"both",children:"Both"}),(0,Z.jsx)(c.Z.Option,{value:"postmastektR",children:"Post mastectomy right"}),(0,Z.jsx)(c.Z.Option,{value:"postmastektL",children:"Post mastectomy left"}),(0,Z.jsx)(c.Z.Option,{value:"axilaR",children:"Axilla right"}),(0,Z.jsx)(c.Z.Option,{value:"axilaL",children:"Axilla left"}),(0,Z.jsx)(c.Z.Option,{value:"anotherBrestR",children:"Extra breast right"}),(0,Z.jsx)(c.Z.Option,{value:"anotherBrestL",children:"Extra breast left"}),(0,Z.jsx)(c.Z.Option,{value:"anotherBrestBoth",children:"Both extra breasts"})]})}),(0,Z.jsx)(l.Z.Item,{label:"Duration of illness",name:"durationOfIllness",children:(0,Z.jsx)(o.Z,{})}),(0,Z.jsx)(l.Z.Item,{label:"Complaints",name:"complaintDescription",children:(0,Z.jsx)(o.Z.TextArea,{showCount:!0,maxLength:3e3,rows:3})})]}),(0,Z.jsxs)(l.Z,{onFinish:f,id:"diseaseHistoryFormBloke",form:r,labelWrap:!0,labelAlign:"right",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},children:[(0,Z.jsxs)(l.Z.Item,{label:"ER",children:[(0,Z.jsx)(l.Z.Item,{noStyle:!0,name:"ihkEr",children:(0,Z.jsx)(u.ZP.Group,{children:(0,Z.jsxs)(d.Z,{direction:"horizontal",children:[(0,Z.jsx)(u.ZP,{value:1,children:"Positive"}),(0,Z.jsx)(u.ZP,{value:2,children:"Negative"})]})})}),(0,Z.jsx)(l.Z.Item,{noStyle:!0,shouldUpdate:function(e,n){return e.ihkEr!==n.ihkEr},children:function(e){return 1===(0,e.getFieldValue)("ihkEr")?(0,Z.jsx)(l.Z.Item,{noStyle:!0,name:"erN",children:(0,Z.jsx)(m.Z,{size:"small"})}):""}})]}),(0,Z.jsxs)(l.Z.Item,{label:"PR",children:[(0,Z.jsx)(l.Z.Item,{noStyle:!0,name:"ihkPr",children:(0,Z.jsx)(u.ZP.Group,{children:(0,Z.jsxs)(d.Z,{direction:"horizontal",children:[(0,Z.jsx)(u.ZP,{value:1,children:"Positive"}),(0,Z.jsx)(u.ZP,{value:2,children:"Negative"})]})})}),(0,Z.jsx)(l.Z.Item,{noStyle:!0,shouldUpdate:function(e,n){return e.ihkPr!==n.ihkPr},children:function(e){return 1===(0,e.getFieldValue)("ihkPr")?(0,Z.jsx)(l.Z.Item,{noStyle:!0,name:"prN",children:(0,Z.jsx)(m.Z,{size:"small"})}):""}})]}),(0,Z.jsx)(l.Z.Item,{label:"HER2",name:"her2",children:(0,Z.jsx)(m.Z,{min:0,max:3,defaultValue:0})}),(0,Z.jsx)(l.Z.Item,{noStyle:!0,shouldUpdate:function(e,n){return e.her2!==n.her2},children:function(e){return 2===(0,e.getFieldValue)("her2")?(0,Z.jsx)(l.Z.Item,{label:"FT",name:"her2FT",children:(0,Z.jsx)(m.Z,{})}):""}}),(0,Z.jsx)(l.Z.Item,{label:"K67",name:"k67",children:(0,Z.jsx)(m.Z,{min:0,defaultValue:0})}),(0,Z.jsx)(l.Z.Item,{label:"Pathologist",name:"pathologist",children:(0,Z.jsx)(v,{})}),(0,Z.jsx)(l.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(h.ZP,{form:"diseaseHistoryFormBloke",htmlType:"submit",type:"primary",children:n?"Edit":"Add"}),(0,Z.jsx)(h.ZP,{onClick:function(){r.resetFields(),t()},danger:!0,children:n?"Close":"Clear"})]})})]})]})}var g=(0,i.memo)(b),y=t(667),w=t(8792),I=t(8348),k=t(4087),C=t(176),S=t(4464),F=t(7885),P=t(4942),R=["Mother","Father","Maternal grandmother","Paternal grandmother","Paternal grandfather","Maternal grandfather","Brother","Sister","Father's brother","Mother's brother","Father's sister","Mother's sister"],O=t(2964),T=t(9286),N=t(1820),V=t(3380),M=t(1078),D=t(7693),L=t(1461),E=t(4805),A=t(4653),H=t(3416);var B=function(e){var n=e.isOpen,t=e.onClose,r=e.initialRef,i=e.finalRef,a=e.title,s=e.handleEdit,c=e.isEdit,u=e.handleAdd,d=e.form;return(0,Z.jsxs)(N.u_,{isOpen:n,onClose:function(){d.resetFields(),t()},initialFocusRef:r,finalFocusRef:i,children:[(0,Z.jsx)(V.Z,{}),(0,Z.jsxs)(M.h,{children:[(0,Z.jsx)(D.x,{children:a}),(0,Z.jsx)(L.o,{}),(0,Z.jsx)(E.f,{children:(0,Z.jsxs)(l.Z,{form:d,labelWrap:!0,labelAlign:"left",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},children:[(0,Z.jsx)(l.Z.Item,{hidden:!0,name:"Id",children:(0,Z.jsx)(o.Z,{})}),(0,Z.jsx)(l.Z.Item,{hidden:!0,name:"familyMember",children:(0,Z.jsx)(o.Z,{})}),(0,Z.jsx)(l.Z.Item,{label:"Trauma",name:"familyMemberInjury",children:(0,Z.jsx)(o.Z,{ref:r,allowClear:!0})}),(0,Z.jsx)(l.Z.Item,{label:"Deceased of cancer",name:"familyMemberDied",children:(0,Z.jsx)(o.Z,{allowClear:!0})}),(0,Z.jsx)(l.Z.Item,{label:"Living with cancer",name:"familyMemberCurrentCancer",children:(0,Z.jsx)(o.Z,{allowClear:!0})}),(0,Z.jsx)(l.Z.Item,{label:"Description",name:"familyMemberDesc",children:(0,Z.jsx)(o.Z.TextArea,{showCount:!0,maxLength:3e3,rows:3})})]})}),(0,Z.jsx)(A.m,{children:(0,Z.jsx)(h.ZP,{type:"primary",block:!0,icon:(0,Z.jsx)(T.Z,{}),onClick:function(){try{var e=d.getFieldsValue(),n=(0,H.p)(e);c?s(n):u(n),d.resetFields()}catch(t){console.log("%c error","background: red; color: dark",t)}},children:c?"Edit":"Add"})})]})]})},z=t(3052),W=["Brother","Sister","Father's-brother","Mother's-brother","Father's-sister","Mother's-sister"];function K(){var e=(0,I.q)(),n=e.isOpen,t=e.onOpen,s=e.onClose,o=(0,z.b)(),u=o.familyMembersList,m=o.setFamilyMembersList,p=i.useRef(null),x=i.useRef(null),f=(0,i.useState)(),j=(0,r.Z)(f,2),v=j[0],b=j[1],g=(0,i.useState)({}),y=(0,r.Z)(g,2),w=y[0],k=y[1],C=(0,i.useState)(!1),S=(0,r.Z)(C,2),F=S[0],N=S[1],V=l.Z.useForm(),M=(0,r.Z)(V,1)[0];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l.Z.Item,{labelAlign:"left",label:"Family members",children:(0,Z.jsxs)(d.Z.Compact,{style:{width:"100%"},children:[(0,Z.jsx)(c.Z,{onChange:function(e){N(!1),b(e)},allowClear:!0,ref:x,children:R.map((function(e){return(0,Z.jsx)(c.Z.Option,{value:e,children:e},e)}))}),(0,Z.jsx)(h.ZP,{disabled:!v,onClick:function(){if(v)if(u.find((function(e){return e.familyMember===v})))if(W.includes(v)){var e=v,n=w[v]||2,r=e+"_"+n;n+=1,k((0,P.Z)({},v,n)),b(r),t()}else N(!0);else b(v),t()},children:(0,Z.jsx)(T.Z,{})})]})}),F&&(0,Z.jsx)(O.Z,{closable:!0,afterClose:function(){N(!1)},message:"Selected family member already added",type:"info"}),(0,Z.jsx)(B,{isOpen:n,onClose:s,initialRef:p,finalRef:x,title:v,handleAdd:function(e){e.familyMember=v;var n=(new Date).getTime();e.Id=n,m((function(n){return[].concat((0,a.Z)(n),[e])})),s()},form:M})]})}var _=(0,i.memo)(K);function q(){var e=(0,z.b)(),n=e.familyMembersList,t=e.setFamilyMembersList,s=(0,i.useState)(),o=(0,r.Z)(s,2),c=o[0],u=o[1],d=l.Z.useForm(),m=(0,r.Z)(d,1)[0],h=(0,I.q)(),p=h.isOpen,x=h.onOpen,f=h.onClose,j=i.useRef(null),v=i.useRef(null);return(0,Z.jsxs)(l.Z.Item,{noStyle:!0,children:[(0,Z.jsx)(w.ZP,{size:"small",header:(0,Z.jsx)(_,{}),bordered:!0,dataSource:n,renderItem:function(e,r){return(0,Z.jsx)(k.xu,{onClick:function(){return function(e){m.setFieldsValue(e),u(e),x()}(e)},_hover:{bg:"pink.200"},cursor:"pointer",children:(0,Z.jsx)(w.ZP.Item,{children:(0,Z.jsxs)(C.k,{w:"100%",children:[(0,Z.jsxs)(k.xu,{children:[r+1,". ",e.familyMember]}),(0,Z.jsx)(S.L,{}),(0,Z.jsx)(F.h,{isRound:!0,variant:"ghost",fontWeight:"bold",size:"xs",children:(0,Z.jsx)(k.xu,{onClick:function(r){return function(e,r){e.preventDefault(),e.stopPropagation();var i=n.filter((function(e){return e.Id!==r.Id}));t((0,a.Z)(i))}(r,e)},color:"pink.500",children:"X"})})]})})},e.Id)}}),(0,Z.jsx)(B,{isOpen:p,onClose:f,initialRef:j,finalRef:v,title:null===c||void 0===c?void 0:c.familyMember,isEdit:!0,handleEdit:function(e){var r=n.map((function(n){return n.Id===e.Id?e:n}));f(),t((0,a.Z)(r))},form:m})]})}var J=(0,i.memo)(q);function U(){var e=(0,z.b)().diseaseHistoryForm;return(0,Z.jsxs)(s.M,{columns:["1","2"],gap:"1",children:[(0,Z.jsxs)(l.Z,{form:e,labelWrap:!0,labelAlign:"right",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},children:[(0,Z.jsx)(l.Z.Item,{label:"Allergies",name:"allergyAvailability",children:(0,Z.jsx)(o.Z.TextArea,{showCount:!0,maxLength:3e3,rows:3})}),(0,Z.jsx)(l.Z.Item,{label:"Receved treatement",name:"medicationTaken",children:(0,Z.jsx)(o.Z.TextArea,{showCount:!0,maxLength:3e3,rows:3})}),(0,Z.jsx)(l.Z.Item,{label:"Initial diagnosis",name:"preliminaryDiagnosis",children:(0,Z.jsx)(o.Z.TextArea,{showCount:!0,maxLength:3e3,allowClear:!0,rows:3})}),(0,Z.jsx)(l.Z.Item,{label:"Received traumas",name:"receivedTraumas",children:(0,Z.jsxs)(u.ZP.Group,{children:[(0,Z.jsx)(u.ZP,{value:1,children:"Yes"}),(0,Z.jsx)(u.ZP,{value:2,children:"No"})]})}),(0,Z.jsx)(l.Z.Item,{noStyle:!0,shouldUpdate:function(e,n){return e.receivedTraumas!==n.receivedTraumas},children:function(e){return 1===(0,e.getFieldValue)("receivedTraumas")?(0,Z.jsx)(l.Z.Item,{label:"Description",name:"ownInjuryReason",children:(0,Z.jsx)(o.Z.TextArea,{showCount:!0,maxLength:3e3})}):""}}),(0,Z.jsx)(l.Z.Item,{label:"Malignant",name:"maliqan",children:(0,Z.jsxs)(c.Z,{allowClear:!0,children:[(0,Z.jsx)(c.Z.Option,{value:"Right",children:"Right"}),(0,Z.jsx)(c.Z.Option,{value:"Left",children:"Left"})]})}),(0,Z.jsx)(l.Z.Item,{label:"Benign",name:"beniqen",children:(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(c.Z.Option,{value:"Right",children:"Right"}),(0,Z.jsx)(c.Z.Option,{value:"Left",children:"Left"})]})}),(0,Z.jsx)(l.Z.Item,{label:"Malignant?",name:"maliqanQuestion",children:(0,Z.jsxs)(c.Z,{allowClear:!0,children:[(0,Z.jsx)(c.Z.Option,{value:"Right",children:"Right"}),(0,Z.jsx)(c.Z.Option,{value:"Left",children:"Left"})]})})]}),(0,Z.jsx)(l.Z,{form:e,labelWrap:!0,labelAlign:"right",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},children:(0,Z.jsx)(J,{})})]})}var Y=(0,i.memo)(U),G=t(8594),Q=t(568),X=t(4386);function $(e){var n=e.image,t=e.imageName,a=(0,p.o)((function(e){return e.descriptionsCanvas})),s=(0,p.o)((function(e){return e.setDescriptionsCanvas})),u=(0,p.o)((function(e){return e.savedDrawingCanvas})),m=(0,p.o)((function(e){return e.setSavedDrawingCanvas})),x=(0,i.useRef)(null),f=l.Z.useForm(),j=(0,r.Z)(f,1)[0],v=(0,i.useState)("green"),b=(0,r.Z)(v,2),g=b[0],y=b[1],w=(0,i.useState)(!0),I=(0,r.Z)(w,2),C=I[0],S=I[1],F=(0,i.useState)(20),P=(0,r.Z)(F,2),R=P[0],O=P[1],T=(0,i.useState)(!0),N=(0,r.Z)(T,2),V=N[0],M=N[1],D=(0,i.useState)(),L=(0,r.Z)(D,2),E=L[0],A=L[1],H=(0,i.useState)(),B=(0,r.Z)(H,2),z=B[0],W=B[1];(0,i.useEffect)((function(){var e=K(),n=t+g+e;Object.hasOwn(a,n)?j.setFieldsValue({description:a[n]}):j.setFieldsValue({description:""})}),[g]);var K=function(){var e,n=0,t=x.current.getSaveData();return null!==(e=t=t?JSON.parse(t):"")&&void 0!==e&&e.lines[0]&&t.lines.forEach((function(e){e.brushColor===g&&(n+=1)})),n||1};return console.log("savedDrawingCanvas",u),(0,Z.jsxs)(k.xu,{bg:"pink.100",p:"1",borderRadius:"10px",children:[(0,Z.jsxs)(l.Z,{form:j,onFieldsChange:function(e){var n=(0,r.Z)(e,1)[0];n.name,n.value},labelAlign:"left",style:{width:"100%"},children:[(0,Z.jsxs)(d.Z.Compact,{width:"100%",style:{width:"100%",alignItems:"center"},children:[(0,Z.jsx)(l.Z.Item,{style:{width:"100%"},children:(0,Z.jsx)(l.Z.Item,{noStyle:!0,name:"colorCanvas",children:(0,Z.jsxs)(c.Z,{onSelect:function(e){return y(e)},defaultValue:"green",suffixIcon:(0,Z.jsx)(k.Cd,{mr:"4",size:"20px",bg:g}),style:{width:"100%"},children:[(0,Z.jsx)(c.Z.Option,{value:"green",children:"Benign tumor"}),(0,Z.jsx)(c.Z.Option,{value:"red",children:"Maligan tumor"}),(0,Z.jsx)(c.Z.Option,{value:"black",children:"Maligan ?"}),(0,Z.jsx)(c.Z.Option,{value:"blue",children:"My operation"}),(0,Z.jsx)(c.Z.Option,{value:"#AA00FF",children:"Operated not by me"})]})})}),(0,Z.jsx)(l.Z.Item,{children:(0,Z.jsx)(h.ZP,{onClick:function(){O(20),S(!1)},children:"Edit"})}),(0,Z.jsx)(l.Z.Item,{children:(0,Z.jsx)(h.ZP,{disabled:V,type:"primary",onClick:function(){O(0),M(!0),S(!0);var e=x.current.getSaveData();u[t]=e,m(u)},children:"Save"})}),(0,Z.jsx)(l.Z.Item,{children:(0,Z.jsx)(h.ZP,{onClick:function(){x.current.undo()},children:"Clear"})})]}),(0,Z.jsx)(l.Z.Item,{label:"Description",name:"description",children:(0,Z.jsx)(o.Z.TextArea,{showCount:!0,maxLength:3e3,onChange:function(e){var n=K();a[t+g+n]=e.target.value,s(a)}})})]}),(0,Z.jsx)(k.xu,{w:"100%",h:"100%",position:"relative",paddingBottom:"100%",onMouseMove:function(e){A(e.nativeEvent.offsetX),W(e.nativeEvent.offsetY)},onClick:function(){if(C){var e=x.current.getSaveData(),n=JSON.parse(e);r=n.lines,i=E,s=z,r.forEach((function(e,n){var l=!1;e.points.forEach((function(o){var c=Math.abs(i-Math.round(o.x))<15;if(!0===Math.abs(s-Math.round(o.y))<15&&!0===c&&!l){l=!0;var u=0,d=[];r.forEach((function(n,t){n.brushColor===e.brushColor&&(u+=1,d.push({num:u,index:t}))}));var m=d.find((function(e){return e.index===n})),h=a[t+e.brushColor+m.num];j.setFieldsValue({description:h}),y(e.brushColor)}}))}))}var r,i,s},children:(0,Z.jsx)(X.Z,{style:{position:"absolute",width:"100%",height:"100%"},imgSrc:n,className:"canvas-draw",brushColor:g,ref:x,onChange:function(){j.setFieldsValue({description:""}),M(!1)},disabled:C,brushRadius:R,saveData:u[t]||""})})]})}var ee=(0,i.memo)($),ne=t.p+"static/media/man.c013c9ece0d53d52029a.png";function te(){return(0,Z.jsxs)(G.r,{templateRows:"repeat(2, 1fr)",templateColumns:"repeat(5, 1fr)",gap:4,borderRadius:"10px",children:[(0,Z.jsx)(Q.P,{borderRadius:"10px",rowSpan:2,colSpan:[5,5,5,3],children:(0,Z.jsx)(ee,{imageName:"image1",image:ne})}),(0,Z.jsx)(Q.P,{borderRadius:"10px",colSpan:[5,5,5,2],children:(0,Z.jsx)(ee,{imageName:"image2",image:ne})}),(0,Z.jsx)(Q.P,{borderRadius:"10px",colSpan:[5,5,5,2],children:(0,Z.jsx)(ee,{imageName:"image3",image:ne})})]})}var re=(0,i.memo)(te),ie=t(2491),ae=t(131),se=t(1326),le=t(6877);function oe(e){var n=e.handleDelete;return(0,Z.jsx)(le.Z,{onClick:n})}var ce=(0,i.memo)(oe),ue=t(2014),de=t(378);function me(e){var n=e.columns,t=(0,i.useState)(!1),s=(0,r.Z)(t,2),l=s[0],o=s[1],c=(0,p.m)((function(e){return e.diseaseHistoryTableSetting})),u=(0,p.m)((function(e){return e.setDiseaseHistoryTableSetting})),d=function(e){var n=e.target.id,t=e.target.checked,r=(0,H.p)(c);r.forEach((function(e){e.dataIndex===n&&(e.isVisible=t)})),u((0,a.Z)(r))};(0,i.useEffect)((function(){var e=n.map((function(e){return{key:e.key,dataIndex:e.dataIndex,isVisible:e.isVisible,title:e.title}}));u(e)}),[]);var m=(0,i.useMemo)((function(){return c?null===c||void 0===c?void 0:c.map((function(e){return{label:(0,Z.jsx)(ue.Z,{id:null===e||void 0===e?void 0:e.dataIndex,onChange:d,defaultChecked:null===e||void 0===e?void 0:e.isVisible,children:e.title})}})):[]}),[c]);return(0,Z.jsx)(de.Z,{items:m,isOpen:l,onOpenChange:function(e){o(e)}})}var he=(0,i.memo)(me);function pe(e){var n=e.selectedRowKey,t=e.setSelectedRowKey,a=e.form,s=(0,ie.a)("(min-width: 400px)"),l=(0,r.Z)(s,1)[0],o=(0,p.m)((function(e){return e.diseaseHistoryTableSetting})),c=(0,p.o)((function(e){return e.dataSourceDiseaseHistoryTable})),u=(0,p.o)((function(e){return e.setDataSourceDiseaseHistoryTable})),d=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return null!==o&&void 0!==o&&o.find((function(n){return n.dataIndex===e}))?o.find((function(n){return n.dataIndex===e})).isVisible:n},m=(0,i.useMemo)((function(){return[{title:"Breast",dataIndex:"complaintBreastType",key:"complaintBreastType",isVisible:d("complaintBreastType"),ellipsis:!0,width:!l&&150,render:function(e){return(0,Z.jsx)(ae.Z,{placement:"topLeft",title:e,children:e})}},{title:"Duration of illness",dataIndex:"durationOfIllness",key:"durationOfIllness",isVisible:d("durationOfIllness"),ellipsis:!0,width:!l&&150,render:function(e){return(0,Z.jsx)(ae.Z,{placement:"topLeft",title:e,children:e})}},{title:"Complaints",dataIndex:"complaintDescription",key:"complaintDescription",isVisible:d("complaintDescription"),ellipsis:!0,width:!l&&150,render:function(e){return(0,Z.jsx)(ae.Z,{placement:"topLeft",title:e,children:e})}},{title:"ER",dataIndex:"ihkEr",key:"ihkEr",isVisible:d("ihkEr"),ellipsis:!0,render:function(e){return 1===e?"Pozitiv":2===e?"Negativ":void 0}},{title:"ER N",dataIndex:"erN",key:"erN",isVisible:d("erN"),ellipsis:!0,width:!l&&150},{title:"PR",dataIndex:"ihkPr",key:"ihkPr",isVisible:d("ihkPr"),ellipsis:!0,width:!l&&150,render:function(e){return 1===e?"Pozitiv":2===e?"Negativ":void 0}},{title:"PR N",dataIndex:"prN",key:"prN",isVisible:d("prN"),ellipsis:!0,width:!l&&150},{title:"HER2",dataIndex:"her2",key:"her2",isVisible:d("her2"),ellipsis:!0,width:!l&&150,render:function(e){return(0,Z.jsx)(ae.Z,{placement:"topLeft",title:e,children:e})}},{title:"HER2 FT",dataIndex:"her2FT",key:"her2FT",isVisible:d("her2FT"),ellipsis:!0,width:!l&&150,render:function(e){return(0,Z.jsx)(ae.Z,{placement:"topLeft",title:e,children:e})}},{title:"K67",dataIndex:"k67",key:"k67",isVisible:d("k67"),ellipsis:!0,width:!l&&150,render:function(e){return(0,Z.jsx)(ae.Z,{placement:"topLeft",title:e,children:e})}},{title:"Delete",dataIndex:"delete",width:50,key:"delete",isVisible:d("delete"),ellipsis:!0,align:"center",render:function(e,n,t){return(0,Z.jsx)(ce,{handleDelete:function(){var e=c.filter((function(e){return e.id!==n.id}));u(e)}})}}]}),[l,o,c]);return(0,Z.jsxs)(k.xu,{display:"flex",flexDirection:"column",children:[(0,Z.jsx)(k.xu,{alignSelf:"flex-end",children:(0,Z.jsx)(he,{columns:m})}),(0,Z.jsx)(se.Z,{size:"small",bordered:!0,scroll:{x:window.innerHeight},pagination:!1,columns:m.filter((function(e){return!0===e.isVisible})),dataSource:c,rowClassName:function(e,t){return n===t+1?"ant-table-row-selected":""},onRow:function(e,n){return{onClick:function(r){!function(e,n){a.setFieldsValue(e)}(e),t(n+1)}}}})]})}var xe=(0,i.memo)(pe);function fe(){var e=(0,i.useState)(),n=(0,r.Z)(e,2),t=n[0],a=n[1],s=l.Z.useForm(),o=(0,r.Z)(s,1)[0];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(y.Z,{}),(0,Z.jsxs)(k.xu,{p:"2",my:"2",boxShadow:"xl",bg:"pink.50",borderRadius:"15px",children:[(0,Z.jsx)(k.xu,{p:"2",my:"2",border:"1px solid pink",borderRadius:"15px",bg:t?"blue.50":"",children:(0,Z.jsx)(g,{form:o,selectedRowKey:t,setSelectedRowKey:a})}),(0,Z.jsx)(k.xu,{p:"2",my:"2",border:"1px solid pink",borderRadius:"15px",children:(0,Z.jsx)(xe,{form:o,selectedRowKey:t,setSelectedRowKey:a})})]}),(0,Z.jsx)(k.xu,{p:"2",my:"2",boxShadow:"xl",bg:"pink.50",borderRadius:"15px",children:(0,Z.jsx)(Y,{})}),(0,Z.jsx)(k.xu,{p:"2",my:"2",boxShadow:"xl",bg:"pink.50",borderRadius:"15px",children:(0,Z.jsx)(re,{})})]})}var Ze=(0,i.memo)(fe)}}]);
//# sourceMappingURL=794.f8a58371.chunk.js.map