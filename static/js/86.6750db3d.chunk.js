"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[86],{6877:function(e,n,t){var i=t(3655),r=t(5820),a=t(2791),l=t(2622),s=t(4087),o=t(184);function u(e){var n=e.onClick;return(0,o.jsx)(i.Z.Link,{children:(0,o.jsx)(s.xu,{color:"red",onClick:function(e){return e.stopPropagation()},children:(0,o.jsx)(r.Z,{title:"Are you sure you want to delete this item?",okText:"Yes",cancelText:"No",onConfirm:n,children:(0,o.jsx)(l.Z,{})})})})}n.Z=(0,a.memo)(u)},378:function(e,n,t){var i=t(4087),r=t(7885),a=t(6070),l=t(2791),s=t(2414),o=t(184);function u(e){var n=e.items,t=e.isOpen,l=e.onOpenChange;return(0,o.jsx)(i.xu,{cursor:"pointer",children:(0,o.jsx)(a.Z,{trigger:["click"],menu:{items:n},open:t,onOpenChange:l,children:(0,o.jsx)(r.h,{variant:"ghost",color:"pink.500",size:"sm",isRound:!0,"aria-label":"Search database",icon:(0,o.jsx)(s.Z,{})})})})}n.Z=(0,l.memo)(u)},3416:function(e,n,t){function i(e){return JSON.parse(JSON.stringify(e))}t.d(n,{p:function(){return i}})},1086:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var i=t(4165),r=t(5861),a=t(2791),l=t(4087),s=t(9439),o=t(131),u=t(7027),c=t(9555),d=t(1326),p=t(2426),m=t.n(p),f=t(2491),x=t(1244),h=t(6877),v=t(184);function b(e){var n=e.handleDelete;return(0,v.jsx)(h.Z,{onClick:n})}var Z=(0,a.memo)(b),j=t(3433),w=t(2014),g=t(3416),k=t(378);function y(e){var n=e.columns,t=(0,a.useState)(!1),i=(0,s.Z)(t,2),r=i[0],l=i[1],o=(0,x.m)((function(e){return e.calendarTableSetting})),u=(0,x.m)((function(e){return e.setCalendarTableSetting})),c=function(e){var n=e.target.id,t=e.target.checked,i=(0,g.p)(o);i.forEach((function(e){e.dataIndex===n&&(e.isVisible=t)})),u((0,j.Z)(i))};(0,a.useEffect)((function(){var e=n.map((function(e){return{key:e.key,dataIndex:e.dataIndex,isVisible:e.isVisible,title:e.title}}));u(e)}),[]);var d=(0,a.useMemo)((function(){return o?null===o||void 0===o?void 0:o.map((function(e){return{label:(0,v.jsx)(w.Z,{id:null===e||void 0===e?void 0:e.dataIndex,onChange:c,defaultChecked:null===e||void 0===e?void 0:e.isVisible,children:e.title})}})):[]}),[o]);return(0,v.jsx)(k.Z,{items:d,isOpen:r,onOpenChange:function(e){l(e)}})}var C=(0,a.memo)(y),S=t(4488),I=t(9162);function D(e){var n=e.dataSource,t=e.refetch,p=(0,a.useState)(),h=(0,s.Z)(p,2),b=h[0],j=h[1],w=(0,f.a)("(min-width: 400px)"),g=(0,s.Z)(w,1)[0],k=(0,x.m)((function(e){return e.calendarTableSetting})),y=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return null!==k&&void 0!==k&&k.find((function(n){return n.dataIndex===e}))?k.find((function(n){return n.dataIndex===e})).isVisible:n},D=(0,a.useMemo)((function(){return[{title:"Patient Number",dataIndex:"patientId",key:"patientId",ellipsis:!0,width:!g&&100,isVisible:y("patientId")},{title:"Time",dataIndex:"visitDate",key:"visitDate",ellipsis:!0,width:!g&&150,isVisible:y("visitDate"),render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Name",dataIndex:"patientName",key:"patientName",ellipsis:!0,width:!g&&150,isVisible:y("patientName"),render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Surname",dataIndex:"patientSurName",key:"patientSurName",ellipsis:!0,width:!g&&150,isVisible:y("patientSurName"),render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Patronymic",dataIndex:"patientPatronymic",key:"patientPatronymic",ellipsis:!0,width:!g&&150,isVisible:y("patientPatronymic"),render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Age",dataIndex:"birthDate",key:"birthDate",ellipsis:!0,width:!g&&150,isVisible:y("birthDate"),render:function(e){return e?m()().diff(e,"years"):""}},{title:"Mobile number",ellipsis:!0,width:!g&&150,dataIndex:"phoneNumber",key:"phoneNumber",isVisible:y("phoneNumber"),render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Reason",dataIndex:"visitReason",key:"visitReason",ellipsis:!0,width:!g&&150,isVisible:y("visitReason"),render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Address",dataIndex:"placeName",key:"placeName",isVisible:y("placeName"),ellipsis:!0,width:!g&&150,render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Recomendation",dataIndex:"recommendationPerson",key:"recommendationPerson",isVisible:y("recommendationPerson"),ellipsis:!0,width:!g&&150,render:function(e){return(0,v.jsx)(o.Z,{placement:"topLeft",title:e,children:e})}},{title:"Status",dataIndex:"status",key:"status",isVisible:y("status"),ellipsis:!0,width:!g&&150,render:function(e,n,t){var a=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(t){var r,a,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=n.id,a={id:r,status:t},e.next=5,(0,S.Z)("visittable",a,"post");case 5:null!==(l=e.sent)&&void 0!==l&&l.data?u.ZP.success("Status changed"):u.ZP.warning("Something went wrong"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("%c error","background: red; color: dark",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsx)(l.xu,{m:"0.5",onClick:function(e){e.stopPropagation(),e.preventDefault()},children:(0,v.jsxs)(c.Z,{onSelect:a,defaultValue:e,allowClear:!0,style:{width:"100%"},children:[(0,v.jsx)(c.Z.Option,{value:"unsolved",children:"Unsolved"}),(0,v.jsx)(c.Z.Option,{value:"approved",children:"Approved"})]})})}},{title:"Delete",dataIndex:"delete",width:50,key:"delete",isVisible:y("delete"),ellipsis:!0,align:"center",render:function(e,n,a){var l=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u.ZP.loading(),console.log("row",n),r=n.id,e.next=5,(0,S.Z)("visits/"+r,{},"delete");case 5:return null!==(a=e.sent)&&void 0!==a&&a.data?(u.ZP.success(),t()):u.ZP.warning("Something went wrong"),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,v.jsx)(Z,{handleDelete:l})}}]}),[g,k]),N=(0,I.Z)(),V=N.onRowTable,Y=N.isLoading;return(0,v.jsxs)(l.xu,{display:"flex",flexDirection:"column",children:[(0,v.jsx)(l.xu,{alignSelf:"flex-end",children:(0,v.jsx)(C,{columns:D})}),(0,v.jsx)(d.Z,{loading:Y,size:"small",bordered:!0,scroll:{x:window.innerHeight},pagination:!1,columns:D.filter((function(e){return!0===e.isVisible})),dataSource:n||[],rowClassName:function(e,n){return b===n+1?"ant-table-row-selected":""},onRow:function(e,n){return{onClick:function(t){null===V||void 0===V||V(e,n),j(n)}}}})]})}var N=(0,a.memo)(D),V=t(9223),Y=t(4224),P=t(9006),M=t(8348),R=t(1041),O=t(9998),L=t(7309),T=t(9389),A=t(5953),z=t(8431);function F(){var e=(0,M.q)(),n=e.isOpen,t=e.onOpen,i=e.onClose,r=R.Z.useForm(),a=(0,s.Z)(r,1)[0];return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Y.z,{size:"sm",colorScheme:"blue",onClick:t,children:"Add visit"}),(0,v.jsx)(O.Z,{footer:[(0,v.jsx)(L.ZP,{onClick:i,children:"Cancel"},"1"),(0,v.jsx)(L.ZP,{type:"primary",htmlType:"submit",form:"visitModalForm",children:"Add"},"2")],closable:!1,open:n,onCancel:i,children:(0,v.jsxs)(R.Z,{form:a,onFinish:function(e){console.log("values",e)},initialValues:{visitDate:m()()},id:"visitModalForm",labelAlign:"left",labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},children:[(0,v.jsx)(R.Z.Item,{label:"Id",name:"patientId",children:(0,v.jsx)(T.Z,{type:"number",allowClear:!0})}),(0,v.jsx)(R.Z.Item,{label:"Name",name:"patientName",children:(0,v.jsx)(T.Z,{allowClear:!0})}),(0,v.jsx)(R.Z.Item,{label:"Surname",name:"patientSurName",children:(0,v.jsx)(T.Z,{allowClear:!0})}),(0,v.jsx)(R.Z.Item,{label:"Reason",name:"visitReason",children:(0,v.jsx)(T.Z,{allowClear:!0})}),(0,v.jsx)(R.Z.Item,{label:"Date",name:"visitDate",children:(0,v.jsx)(A.Z,{showTime:!0,allowClear:!0,format:"YYYY-MM-DD HH:mm"})}),(0,v.jsx)(R.Z.Item,{label:"Mobile Number",name:"phoneNumber",children:(0,v.jsx)(z.CX,{allowClear:!0,style:{width:"130px"},mask:"000 000 00 00"})}),(0,v.jsx)(R.Z.Item,{label:"Status",name:"status",children:(0,v.jsxs)(c.Z,{allowClear:!0,children:[(0,v.jsx)(c.Z.Option,{value:"unsolved",children:"Unsolved"}),(0,v.jsx)(c.Z.Option,{value:"approved",children:"Approved"})]})})]})})]})}var H=(0,a.memo)(F),_=t(7689);function E(e){var n=e.cellRender,t=e.onSelect,i=e.defaultValue,r=(0,_.s0)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(V.K,{direction:"row",spacing:4,align:"center",children:[(0,v.jsx)(Y.z,{size:"sm",colorScheme:"blue",onClick:function(){r("/person_info")},children:"New Patient"}),(0,v.jsx)(H,{})]}),(0,v.jsx)(l.xu,{py:"2",w:"300px",children:(0,v.jsx)(P.Z,{fullscreen:!1,cellRender:n,onSelect:t,defaultValue:i})})]})}var J=a.memo(E),U=t(1933);var q=function(){var e=(0,x.o)((function(e){return e.selectedDate})),n=(0,x.o)((function(e){return e.setSelectedDate})),t=function(){var n=(0,r.Z)((0,i.Z)().mark((function n(){var t,r;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e?e.format("YYYY-MM-DD 00:00:00"):m()().format("YYYY-MM-DD 00:00:00"),n.next=3,(0,S.Z)("visits/"+t);case 3:if(null===(r=n.sent)||void 0===r||!r.data){n.next=6;break}return n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),a=(0,U.useQuery)(["calendarPage",e],(function(){return t()})),s=a.data,o=a.refetch;return(0,v.jsxs)(l.xu,{boxShadow:"xl",p:"2",bg:"pink.100",borderRadius:"15px",children:[(0,v.jsx)(l.xu,{children:(0,v.jsx)(J,{refetch:o,cellRender:function(e){return(null===s||void 0===s?void 0:s.some((function(n){var t=n.visitDate;return m()(t).format("YYYY-MM-DD")===e.format("YYYY-MM-DD")})))?(0,v.jsx)(l.xu,{borderTop:"3px solid black",shadow:"dark-lg"}):null},onSelect:function(e){n(e)},defaultValue:e})}),(0,v.jsx)(l.xu,{children:(0,v.jsx)(N,{dataSource:s})})]})}}}]);
//# sourceMappingURL=86.6750db3d.chunk.js.map