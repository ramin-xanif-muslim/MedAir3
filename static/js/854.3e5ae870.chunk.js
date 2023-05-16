"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[854],{6877:function(e,t,n){var a=n(3655),r=n(5820),i=n(2791),u=n(2622),s=n(4087),c=n(184);function o(e){var t=e.onClick;return(0,c.jsx)(a.Z.Link,{children:(0,c.jsx)(s.xu,{color:"red",onClick:function(e){return e.stopPropagation()},children:(0,c.jsx)(r.Z,{title:"Are you sure you want to delete this item?",okText:"Yes",cancelText:"No",onConfirm:t,children:(0,c.jsx)(u.Z,{})})})})}t.Z=(0,i.memo)(o)},7537:function(e,t,n){n.d(t,{Z:function(){return E}});var a=n(3433),r=n(1413),i=n(9439),u=n(5987),s=n(1041),c=n(1326),o=n(2791),l=n(4165),d=n(5861),f=n(4942),p=n(9555),x=n(1933),v=n(4488),h=n(184),m=p.Z.Option,Z=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(){var t;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,v.Z)("managers/tabs");case 2:if(null===(t=e.sent)||void 0===t||!t.data){e.next=5;break}return e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){var t=e.dataIndex,n=(e.title,e.inputRef),a=e.save,r=(0,x.useQuery)(["managers/tabs"],Z,{enabled:!1}),i=r.data,u=r.isLoading,c=r.refetch;return(0,h.jsx)(s.Z.Item,{style:{margin:0},name:t,children:(0,h.jsx)(p.Z,{allowClear:!0,ref:n,lazyLoad:!0,onBlur:function(){a("select")},loading:u,onFocus:c,children:null===i||void 0===i?void 0:i.map((function(e,t){return(0,h.jsx)(m,{value:JSON.stringify(e),children:e.cureTabName},e.cureTabId)}))})})},y=(0,o.memo)(b),g=p.Z.Option,j=function(e){var t=e.dataIndex,n=(e.title,e.inputRef),a=e.save;return(0,h.jsx)(s.Z.Item,{style:{margin:0},name:t,children:(0,h.jsxs)(p.Z,{allowClear:!0,ref:n,lazyLoad:!0,onBlur:function(){a("select")},children:[(0,h.jsx)(g,{value:"Tablet",children:"Tablet"}),(0,h.jsx)(g,{value:"Ampoule",children:"Ampoule"}),(0,h.jsx)(g,{value:"Drops",children:"Drops"})]})})},k=(0,o.memo)(j),T=n(9389),w=function(e){var t=e.dataIndex,n=(e.title,e.inputRef),a=e.save;return(0,h.jsx)(s.Z.Item,{name:t,children:(0,h.jsx)(T.Z,{ref:n,onPressEnter:a,onBlur:a})})},I=(0,o.memo)(w),S=function(e){var t=e.dataIndex,n=e.title,a=e.inputRef,r=e.save,i=e.inputType;return"useTabs"===t||"cureTabName"===t&&"select"===i?(0,h.jsx)(y,{dataIndex:t,title:n,inputRef:a,save:r}):"cureTabType"===t&&"select"===i?(0,h.jsx)(k,{dataIndex:t,title:n,inputRef:a,save:r}):(0,h.jsx)(I,{dataIndex:t,title:n,inputRef:a,save:r})},N=(0,o.memo)(S),C=function(e){var t=e.title,n=e.editable,a=e.children,u=e.dataIndex,s=e.record,c=e.handleSave,p=e.setShowSaveButton,x=e.form,v=e.inputType,m=(0,o.useState)(!1),Z=(0,i.Z)(m,2),b=Z[0],y=Z[1],g=(0,o.useRef)(null);(0,o.useEffect)((function(){b&&g.current.focus()}),[b]);var j=function(){p&&p(!0),y(!b),x.setFieldsValue((0,f.Z)({},u,s[u]))},k=function(){var e=(0,d.Z)((0,l.Z)().mark((function e(t){var n,a,i;return(0,l.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.validateFields();case 3:n=e.sent,Object.keys(n).includes("useTabs")&&"select"===t&&(a=JSON.parse(n.useTabs),n.useTabs=a.cureTabName,n.cureTabType=a.cureTabType),Object.keys(n).includes("cureTabName")&&"select"===t&&(i=JSON.parse(n.cureTabName),n.cureTabName=i.cureTabName,n.cureTabType=i.cureTabType),j(),c((0,r.Z)((0,r.Z)({},s),n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),T=a;return n&&(T=b?(0,h.jsx)(N,{dataIndex:u,title:t,inputRef:g,save:k,inputType:v}):(0,h.jsx)("div",{className:"editable-cell-value-wrap",style:{paddingRight:24,height:"35px"},onClick:j,children:a})),{childNode:T}},P=["index"],R=["title","editable","children","dataIndex","record","handleSave","setShowSaveButton","inputType"],D=o.createContext(null),q=function(e){e.index;var t=(0,u.Z)(e,P),n=s.Z.useForm(),a=(0,i.Z)(n,1)[0];return(0,h.jsx)(s.Z,{form:a,component:!1,children:(0,h.jsx)(D.Provider,{value:a,children:(0,h.jsx)("tr",(0,r.Z)({},t))})})},B=function(e){var t=e.title,n=e.editable,a=e.children,i=e.dataIndex,s=e.record,c=e.handleSave,l=e.setShowSaveButton,d=e.inputType,f=(0,u.Z)(e,R),p=(0,o.useContext)(D),x=C({title:t,editable:n,children:a,dataIndex:i,record:s,handleSave:c,setShowSaveButton:l,inputType:d,form:p}).childNode;return(0,h.jsx)("td",(0,r.Z)((0,r.Z)({},f),{},{children:x}))},O=function(e){var t=e.dataSource,n=e.setDataSource,i=e.defaultColumns,u=e.onChange,s=function(e){var i=(0,a.Z)(t),s=i.findIndex((function(t){return e.key===t.key})),c=i[s];i.splice(s,1,(0,r.Z)((0,r.Z)({},c),e)),n(i),null===u||void 0===u||u()},o={body:{row:q,cell:B}},l=null===i||void 0===i?void 0:i.map((function(e){return e.editable?(0,r.Z)((0,r.Z)({},e),{},{onCell:function(t){return{record:t,editable:e.editable,dataIndex:e.dataIndex,title:e.title,inputType:e.inputType,handleSave:s}}}):e}));return(0,h.jsx)("div",{children:(0,h.jsx)(c.Z,{size:"small",bordered:!0,scroll:{x:window.innerHeight},rowClassName:function(){return"editable-row"},components:o,dataSource:t,columns:l,pagination:!1})})},E=(0,o.memo)(O)},441:function(e,t,n){n.r(t);var a=n(3433),r=n(1413),i=n(9439),u=n(4165),s=n(5861),c=n(2791),o=n(4087),l=n(9286),d=n(7537),f=n(131),p=n(7027),x=n(7309),v=n(1933),h=n(4488),m=n(6877),Z=n(184),b=function(){var e=(0,s.Z)((0,u.Z)().mark((function e(){var t;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.Z)("managers/pathologists");case 2:if(null===(t=e.sent)||void 0===t||!t.data){e.next=6;break}return t.data.forEach((function(e){return e.Id=e.pathologistId})),e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.default=function(){var e=(0,c.useState)(!0),t=(0,i.Z)(e,2),n=t[0],y=t[1],g=(0,c.useState)(!1),j=(0,i.Z)(g,2),k=j[0],T=j[1],w=(0,v.useQuery)("managers/pathologists",b),I=w.data,S=w.isFetching,N=w.refetch,C=(0,c.useState)(I||[]),P=(0,i.Z)(C,2),R=P[0],D=P[1];(0,c.useEffect)((function(){!S&&I&&D(I)}),[S]);var q=(0,c.useMemo)((function(){return[{title:"Name",dataIndex:"pathologistName",key:"pathologistName",ellipsis:!0,editable:!0,render:function(e){return(0,Z.jsx)(f.Z,{placement:"topLeft",title:e,children:e})}},{title:"Place",dataIndex:"pathologistPlace",key:"pathologistPlace",ellipsis:!0,editable:!0,render:function(e){return(0,Z.jsx)(f.Z,{placement:"topLeft",title:e,children:e})}},{title:"Delete",dataIndex:"delete",width:50,key:"delete",ellipsis:!0,align:"center",render:function(e,t,n){return(0,Z.jsx)(m.Z,{onClick:function(){O(t)}})}}]}),[R]),B=function(e){var t=R.filter((function(t){return t.Id!==e.Id}));D(t),p.ZP.success("Deleted")},O=function(){var e=(0,s.Z)((0,u.Z)().mark((function e(t){var n,a,r;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.visitPlaceId){e.next=3;break}return e.abrupt("return",B(t));case 3:return e.next=5,(0,h.Z)("managers/places/"+n,{},"delete");case 5:"success"===(null===(a=e.sent)||void 0===a?void 0:a.data)?(p.ZP.success("Deleted!"),r=R.filter((function(e){return e.Id!==t.Id})),D(r),N()):p.ZP.warning("Something get wrong");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=(0,s.Z)((0,u.Z)().mark((function e(){var t,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T(!0),t=0;case 2:if(!(t<R.length)){e.next=11;break}return n=(0,r.Z)({},R[t]),e.next=6,(0,h.Z)("managers/places",n,"post");case 6:e.sent?(p.ZP.success({content:"Saved",key:"save_manager"}),N()):p.ZP.error("Error");case 8:t++,e.next=2;break;case 11:T(!1),y(!0);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,Z.jsx)(o.xu,{boxShadow:"xl",p:"2",bg:"pink.100",borderRadius:"15px",children:(0,Z.jsxs)(o.xu,{display:"flex",flexDirection:"column",children:[(0,Z.jsx)(x.ZP,{disabled:n,loading:k,block:!0,onClick:E,type:"primary",children:"Save"}),(0,Z.jsx)(d.Z,{dataSource:R,setDataSource:D,defaultColumns:q,onChange:function(){y(!1)}}),(0,Z.jsx)(x.ZP,{block:!0,icon:(0,Z.jsx)(l.Z,{}),onClick:function(){var e=(new Date).getTime(),t={key:e,Id:e};D((function(e){return[].concat((0,a.Z)(e),[t])})),y(!1)},children:"New"})]})})}},9286:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(1413),r=n(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},u=n(4291),s=function(e,t){return r.createElement(u.Z,(0,a.Z)((0,a.Z)({},e),{},{ref:t,icon:i}))};s.displayName="PlusOutlined";var c=r.forwardRef(s)}}]);
//# sourceMappingURL=854.3e5ae870.chunk.js.map