(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[793],{2622:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(1413),r=t(2791),i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},a=t(4291),l=function(e,n){return r.createElement(a.Z,(0,o.Z)((0,o.Z)({},e),{},{ref:n,icon:i}))};l.displayName="DeleteOutlined";var c=r.forwardRef(l)},1783:function(e,n,t){"use strict";var o=t(9439),r=t(8368),i=t(2791),a=t(7309),l=t(902);function c(e){return!(!e||!e.then)}n.Z=function(e){var n=e.type,t=e.children,s=e.prefixCls,u=e.buttonProps,d=e.close,p=e.autoFocus,f=e.emitEvent,m=e.quitOnNullishReturnValue,v=e.actionFn,g=i.useRef(!1),y=i.useRef(null),b=(0,r.Z)(!1),h=(0,o.Z)(b,2),x=h[0],O=h[1],E=function(){null===d||void 0===d||d.apply(void 0,arguments)};i.useEffect((function(){var e=null;return p&&(e=setTimeout((function(){var e;null===(e=y.current)||void 0===e||e.focus()}))),function(){e&&clearTimeout(e)}}),[]);return i.createElement(a.ZP,Object.assign({},(0,l.n)(n),{onClick:function(e){if(!g.current)if(g.current=!0,v){var n;if(f){if(n=v(e),m&&!c(n))return g.current=!1,void E(e)}else if(v.length)n=v(d),g.current=!1;else if(!(n=v()))return void E();!function(e){c(e)&&(O(!0),e.then((function(){O(!1,!0),E.apply(void 0,arguments),g.current=!1}),(function(e){return O(!1,!0),g.current=!1,Promise.reject(e)})))}(n)}else E()},loading:x,prefixCls:s},u,{ref:y}),t)}},5820:function(e,n,t){"use strict";t.d(n,{Z:function(){return X}});var o=t(9439),r=t(187),i=t(1694),a=t.n(i),l=t(5179),c=t(1354),s=t(2791),u=t(1818),d=t(1929),p=t(131),f=function(e){return e?"function"===typeof e?e():e:null},m=t(9464),v=t(6904),g=t(4942),y=t(7521),b=t(278),h=t(8686),x=t(8876),O=t(5564),E=t(9922),Z=function(e){var n,t=e.componentCls,o=e.popoverBg,r=e.popoverColor,i=e.width,a=e.fontWeightStrong,l=e.popoverPadding,c=e.boxShadowSecondary,s=e.colorTextHeading,u=e.borderRadiusLG,d=e.zIndexPopup,p=e.marginXS,f=e.colorBgElevated;return[(0,g.Z)({},t,Object.assign(Object.assign({},(0,y.Wf)(e)),(n={position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text","--antd-arrow-background-color":f,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"}},(0,g.Z)(n,"".concat(t,"-content"),{position:"relative"}),(0,g.Z)(n,"".concat(t,"-inner"),{backgroundColor:o,backgroundClip:"padding-box",borderRadius:u,boxShadow:c,padding:l}),(0,g.Z)(n,"".concat(t,"-title"),{minWidth:i,marginBottom:p,color:s,fontWeight:a}),(0,g.Z)(n,"".concat(t,"-inner-content"),{color:r}),n))),(0,h.ZP)(e,{colorBg:"var(--antd-arrow-background-color)"}),(0,g.Z)({},"".concat(t,"-pure"),(0,g.Z)({position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block"},"".concat(t,"-content"),{display:"inline-block"}))]},w=function(e){var n=e.componentCls;return(0,g.Z)({},n,x.i.map((function(t){var o,r=e["".concat(t,"6")];return(0,g.Z)({},"&".concat(n,"-").concat(t),(o={"--antd-arrow-background-color":r},(0,g.Z)(o,"".concat(n,"-inner"),{backgroundColor:r}),(0,g.Z)(o,"".concat(n,"-arrow"),{background:"transparent"}),o))})))},C=function(e){var n,t=e.componentCls,o=e.lineWidth,r=e.lineType,i=e.colorSplit,a=e.paddingSM,l=e.controlHeight,c=e.fontSize,s=e.lineHeight,u=e.padding,d=l-Math.round(c*s),p=d/2,f=d/2-o,m=u;return(0,g.Z)({},t,(n={},(0,g.Z)(n,"".concat(t,"-inner"),{padding:0}),(0,g.Z)(n,"".concat(t,"-title"),{margin:0,padding:"".concat(p,"px ").concat(m,"px ").concat(f,"px"),borderBottom:"".concat(o,"px ").concat(r," ").concat(i)}),(0,g.Z)(n,"".concat(t,"-inner-content"),{padding:"".concat(a,"px ").concat(m,"px")}),n))},S=(0,O.Z)("Popover",(function(e){var n=e.colorBgElevated,t=e.colorText,o=e.wireframe,r=(0,E.TS)(e,{popoverBg:n,popoverColor:t,popoverPadding:12});return[Z(r),w(r),o&&C(r),(0,b._y)(r,"zoom-big")]}),(function(e){return{zIndexPopup:e.zIndexPopupBase+30,width:177}})),j=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},k=function(e,n,t){if(n||t)return s.createElement(s.Fragment,null,n&&s.createElement("div",{className:"".concat(e,"-title")},f(n)),s.createElement("div",{className:"".concat(e,"-inner-content")},f(t)))};function P(e){var n=e.hashId,t=e.prefixCls,o=e.className,r=e.style,i=e.placement,l=void 0===i?"top":i,c=e.title,u=e.content,d=e.children;return s.createElement("div",{className:a()(n,t,"".concat(t,"-pure"),"".concat(t,"-placement-").concat(l),o),style:r},s.createElement("div",{className:"".concat(t,"-arrow")}),s.createElement(v.G,Object.assign({},e,{className:n,prefixCls:t}),d||k(t,c,u)))}function N(e){var n=e.prefixCls,t=j(e,["prefixCls"]),r=(0,s.useContext(d.E_).getPrefixCls)("popover",n),i=S(r),a=(0,o.Z)(i,2),l=a[0],c=a[1];return l(s.createElement(P,Object.assign({},t,{prefixCls:r,hashId:c})))}var z=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},T=function(e){var n=e.title,t=e.content,o=e.prefixCls;return n||t?s.createElement(s.Fragment,null,n&&s.createElement("div",{className:"".concat(o,"-title")},f(n)),s.createElement("div",{className:"".concat(o,"-inner-content")},f(t))):null},I=s.forwardRef((function(e,n){var t=e.prefixCls,r=e.title,i=e.content,l=e.overlayClassName,c=e.placement,u=void 0===c?"top":c,f=e.trigger,v=void 0===f?"hover":f,g=e.mouseEnterDelay,y=void 0===g?.1:g,b=e.mouseLeaveDelay,h=void 0===b?.1:b,x=e.overlayStyle,O=void 0===x?{}:x,E=z(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),Z=s.useContext(d.E_).getPrefixCls,w=Z("popover",t),C=S(w),j=(0,o.Z)(C,2),k=j[0],P=j[1],N=Z(),I=a()(l,P);return k(s.createElement(p.Z,Object.assign({placement:u,trigger:v,mouseEnterDelay:y,mouseLeaveDelay:h,overlayStyle:O},E,{prefixCls:w,overlayClassName:I,ref:n,overlay:s.createElement(T,{prefixCls:w,title:r,content:i}),transitionName:(0,m.mL)(N,"zoom-big",E.transitionName),"data-popover-inject":!0})))}));I._InternalPanelDoNotUseOrYouWillBeFired=N;var R=I,D=t(1113),H=t(7309),B=t(902),M=t(4308),W=t(4e3),L=t(1783),A=(0,O.Z)("Popconfirm",(function(e){return function(e){var n,t,o=e.componentCls,r=e.iconCls,i=e.zIndexPopup,a=e.colorText,l=e.colorWarning,c=e.marginXS,s=e.fontSize,u=e.fontWeightStrong,d=e.lineHeight;return(0,g.Z)({},o,(t={zIndex:i},(0,g.Z)(t,"".concat(o,"-inner-content"),{color:a}),(0,g.Z)(t,"".concat(o,"-message"),(n={position:"relative",marginBottom:c,color:a,fontSize:s,display:"flex",flexWrap:"nowrap",alignItems:"start"},(0,g.Z)(n,"> ".concat(o,"-message-icon ").concat(r),{color:l,fontSize:s,flex:"none",lineHeight:1,paddingTop:(Math.round(s*d)-s)/2}),(0,g.Z)(n,"&-title",{flex:"auto",marginInlineStart:c}),(0,g.Z)(n,"&-title-only",{fontWeight:u}),n)),(0,g.Z)(t,"".concat(o,"-description"),{position:"relative",marginInlineStart:s+c,marginBottom:c,color:a,fontSize:s}),(0,g.Z)(t,"".concat(o,"-buttons"),{textAlign:"end",button:{marginInlineStart:c}}),t))}(e)}),(function(e){return{zIndexPopup:e.zIndexPopupBase+60}})),F=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},_=function(e){var n=e.prefixCls,t=e.okButtonProps,i=e.cancelButtonProps,l=e.title,c=e.description,u=e.cancelText,p=e.okText,m=e.okType,v=void 0===m?"primary":m,y=e.icon,b=void 0===y?s.createElement(r.Z,null):y,h=e.showCancel,x=void 0===h||h,O=e.close,E=e.onConfirm,Z=e.onCancel,w=s.useContext(d.E_).getPrefixCls,C=(0,W.Z)("Popconfirm",M.Z.Popconfirm),S=(0,o.Z)(C,1)[0];return s.createElement("div",{className:"".concat(n,"-inner-content")},s.createElement("div",{className:"".concat(n,"-message")},b&&s.createElement("span",{className:"".concat(n,"-message-icon")},b),s.createElement("div",{className:a()("".concat(n,"-message-title"),(0,g.Z)({},"".concat(n,"-message-title-only"),!!c))},f(l))),c&&s.createElement("div",{className:"".concat(n,"-description")},f(c)),s.createElement("div",{className:"".concat(n,"-buttons")},x&&s.createElement(H.ZP,Object.assign({onClick:Z,size:"small"},i),null!==u&&void 0!==u?u:null===S||void 0===S?void 0:S.cancelText),s.createElement(L.Z,{buttonProps:Object.assign(Object.assign({size:"small"},(0,B.n)(v)),t),actionFn:E,close:O,prefixCls:w("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},null!==p&&void 0!==p?p:null===S||void 0===S?void 0:S.okText)))};var V=void 0,K=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},U=s.forwardRef((function(e,n){var t=s.useContext(d.E_).getPrefixCls,i=(0,l.Z)(!1,{value:e.open,defaultValue:e.defaultOpen}),p=(0,o.Z)(i,2),f=p[0],m=p[1],v=function(n,t){var o;m(n,!0),null===(o=e.onOpenChange)||void 0===o||o.call(e,n,t)},g=e.prefixCls,y=e.placement,b=void 0===y?"top":y,h=e.trigger,x=void 0===h?"click":h,O=e.okType,E=void 0===O?"primary":O,Z=e.icon,w=void 0===Z?s.createElement(r.Z,null):Z,C=e.children,S=e.overlayClassName,j=K(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName"]),k=t("popconfirm",g),P=a()(k,S),N=A(k);return(0,(0,o.Z)(N,1)[0])(s.createElement(R,Object.assign({},(0,u.Z)(j,["title"]),{trigger:x,placement:b,onOpenChange:function(n){var t=e.disabled;void 0!==t&&t||v(n)},open:f,ref:n,overlayClassName:P,content:s.createElement(_,Object.assign({okType:E,icon:w},e,{prefixCls:k,close:function(e){v(!1,e)},onConfirm:function(n){var t;return null===(t=e.onConfirm)||void 0===t?void 0:t.call(V,n)},onCancel:function(n){var t;v(!1,n),null===(t=e.onCancel)||void 0===t||t.call(V,n)}})),"data-popover-inject":!0}),(0,D.Tm)(C,{onKeyDown:function(e){var n,t;s.isValidElement(C)&&(null===(t=null===C||void 0===C?void 0:(n=C.props).onKeyDown)||void 0===t||t.call(n,e)),function(e){e.keyCode===c.Z.ESC&&f&&v(!1,e)}(e)}})))}));U._InternalPanelDoNotUseOrYouWillBeFired=function(e){var n=e.prefixCls,t=e.placement,r=e.className,i=e.style,l=F(e,["prefixCls","placement","className","style"]),c=(0,s.useContext(d.E_).getPrefixCls)("popconfirm",n),u=A(c);return(0,(0,o.Z)(u,1)[0])(s.createElement(N,{placement:t,className:a()(c,r),style:i,content:s.createElement(_,Object.assign({prefixCls:c},l))}))};var X=U},3655:function(e,n,t){"use strict";t.d(n,{Z:function(){return ve}});var o=t(2791),r=t(4942),i=t(9439),a=t(7575),l=t(1413),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},s=t(4291),u=function(e,n){return o.createElement(s.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:c}))};u.displayName="CopyOutlined";var d=o.forwardRef(u),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},f=function(e,n){return o.createElement(s.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:p}))};f.displayName="EditOutlined";var m=o.forwardRef(f),v=t(1694),g=t.n(v),y=t(6998),b=t.n(y),h=t(8829),x=t(5501),O=t(1605),E=t(5179),Z=t(1818),w=t(8834),C=t(1929),S=t(4e3),j=t(131),k=t(2748),P=t(1354),N=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},z={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},T=o.forwardRef((function(e,n){var t=e.style,r=e.noStyle,i=e.disabled,a=N(e,["style","noStyle","disabled"]),l={};return r||(l=Object.assign({},z)),i&&(l.pointerEvents="none"),l=Object.assign(Object.assign({},l),t),o.createElement("div",Object.assign({role:"button",tabIndex:0,ref:n},a,{onKeyDown:function(e){e.keyCode===P.Z.ENTER&&e.preventDefault()},onKeyUp:function(n){var t=n.keyCode,o=e.onClick;t===P.Z.ENTER&&o&&o()},style:l}))})),I=T,R={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},D=function(e,n){return o.createElement(s.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:n,icon:R}))};D.displayName="EnterOutlined";var H=o.forwardRef(D),B=t(5583),M=t(1113),W=t(5564),L=t(3742),A=t(6264),F=t(1325),_=function(e){var n,t,o=e.componentCls,i=e.sizeMarginHeadingVerticalStart;return(0,r.Z)({},o,Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign((n={color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight},(0,r.Z)(n,"&".concat(o,"-secondary"),{color:e.colorTextDescription}),(0,r.Z)(n,"&".concat(o,"-success"),{color:e.colorSuccess}),(0,r.Z)(n,"&".concat(o,"-warning"),{color:e.colorWarning}),(0,r.Z)(n,"&".concat(o,"-danger"),{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}}),(0,r.Z)(n,"&".concat(o,"-disabled"),{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"}),(0,r.Z)(n,"\n        div&,\n        p\n      ",{marginBottom:"1em"}),n),function(e){var n={};return[1,2,3,4,5].forEach((function(t){n["\n      h".concat(t,"&,\n      div&-h").concat(t,",\n      div&-h").concat(t," > textarea,\n      h").concat(t,"\n    ")]=function(e,n,t,o){return{marginBottom:o.sizeMarginHeadingVerticalEnd,color:t,fontWeight:o.fontWeightStrong,fontSize:e,lineHeight:n}}(e["fontSizeHeading".concat(t)],e["lineHeightHeading".concat(t)],e.colorTextHeading,e)})),n}(e)),(t={},(0,r.Z)(t,"\n      & + h1".concat(o,",\n      & + h2").concat(o,",\n      & + h3").concat(o,",\n      & + h4").concat(o,",\n      & + h5").concat(o,"\n      "),{marginTop:i}),(0,r.Z)(t,"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5",(0,r.Z)({},"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ",{marginTop:i})),t)),function(e){return{code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:L.gold[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}}(e)),function(e){var n=e.componentCls;return{"a&, a":Object.assign(Object.assign({},(0,F.N)(e)),(0,r.Z)({textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration}},"&[disabled], &".concat(n,"-disabled"),{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}))}}(e)),(0,r.Z)({},"\n        ".concat(o,"-expand,\n        ").concat(o,"-edit,\n        ").concat(o,"-copy\n      "),Object.assign(Object.assign({},(0,F.N)(e)),{marginInlineStart:e.marginXXS}))),function(e){var n,t=e.componentCls,o=(0,A.e5)(e).inputPaddingVertical+1;return{"&-edit-content":(n={position:"relative","div&":{insetInlineStart:-e.paddingSM,marginTop:-o,marginBottom:"calc(1em - ".concat(o,"px)")}},(0,r.Z)(n,"".concat(t,"-edit-content-confirm"),{position:"absolute",insetInlineEnd:e.marginXS+2,insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"}),(0,r.Z)(n,"textarea",{margin:"0!important",MozTransition:"none",height:"1em"}),n)}}(e)),function(e){return{"&-copy-success":(0,r.Z)({},"\n    &,\n    &:hover,\n    &:focus",{color:e.colorSuccess})}}(e)),function(){var e;return e={},(0,r.Z)(e,"\n  a&-ellipsis,\n  span&-ellipsis\n  ",{display:"inline-block",maxWidth:"100%"}),(0,r.Z)(e,"&-single-line",{whiteSpace:"nowrap"}),(0,r.Z)(e,"&-ellipsis-single-line",{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"}}),(0,r.Z)(e,"&-ellipsis-multiple-line",{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}),e}()),{"&-rtl":{direction:"rtl"}}))},V=(0,W.Z)("Typography",(function(e){return[_(e)]}),{sizeMarginHeadingVerticalStart:"1.2em",sizeMarginHeadingVerticalEnd:"0.5em"}),K=function(e){var n=e.prefixCls,t=e["aria-label"],a=e.className,l=e.style,c=e.direction,s=e.maxLength,u=e.autoSize,d=void 0===u||u,p=e.value,f=e.onSave,m=e.onCancel,v=e.onEnd,y=e.component,b=e.enterIcon,h=void 0===b?o.createElement(H,null):b,x=o.useRef(null),O=o.useRef(!1),E=o.useRef(),Z=o.useState(p),w=(0,i.Z)(Z,2),C=w[0],S=w[1];o.useEffect((function(){S(p)}),[p]),o.useEffect((function(){if(x.current&&x.current.resizableTextArea){var e=x.current.resizableTextArea.textArea;e.focus();var n=e.value.length;e.setSelectionRange(n,n)}}),[]);var j=function(){f(C.trim())},k=y?"".concat(n,"-").concat(y):"",N=V(n),z=(0,i.Z)(N,2),T=z[0],I=z[1],R=g()(n,"".concat(n,"-edit-content"),(0,r.Z)({},"".concat(n,"-rtl"),"rtl"===c),a,k,I);return T(o.createElement("div",{className:R,style:l},o.createElement(B.Z,{ref:x,maxLength:s,value:C,onChange:function(e){var n=e.target;S(n.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var n=e.keyCode;O.current||(E.current=n)},onKeyUp:function(e){var n=e.keyCode,t=e.ctrlKey,o=e.altKey,r=e.metaKey,i=e.shiftKey;E.current!==n||O.current||t||o||r||i||(n===P.Z.ENTER?(j(),null===v||void 0===v||v()):n===P.Z.ESC&&m())},onCompositionStart:function(){O.current=!0},onCompositionEnd:function(){O.current=!1},onBlur:function(){j()},"aria-label":t,rows:1,autoSize:d}),null!==h?(0,M.Tm)(h,{className:"".concat(n,"-edit-content-confirm")}):null))};function U(e,n){return o.useMemo((function(){var t=!!e;return[t,Object.assign(Object.assign({},n),t&&"object"===typeof e?e:null)]}),[e])}var X=function(e,n){var t=o.useRef(!1);o.useEffect((function(){t.current?e():t.current=!0}),n)},q=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};var G=o.forwardRef((function(e,n){var t=e.prefixCls,a=e.component,l=void 0===a?"article":a,c=e.className,s=e.rootClassName,u=e.setContentRef,d=e.children,p=e.direction,f=q(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction"]),m=o.useContext(C.E_),v=m.getPrefixCls,y=m.direction,b=null!==p&&void 0!==p?p:y,h=n;u&&(h=(0,w.sQ)(n,u));var x=v("typography",t),O=V(x),E=(0,i.Z)(O,2),Z=E[0],S=E[1],j=g()(x,(0,r.Z)({},"".concat(x,"-rtl"),"rtl"===b),c,s,S);return Z(o.createElement(l,Object.assign({className:j,ref:h},f),d))}));function Q(e){var n=typeof e;return"string"===n||"number"===n}function Y(e,n){for(var t=0,o=[],r=0;r<e.length;r+=1){if(t===n)return o;var i=e[r],a=t+(Q(i)?String(i).length:1);if(a>n){var l=n-t;return o.push(String(i).slice(0,l)),o}o.push(i),t=a}return e}var J=function(e){var n=e.enabledMeasure,t=e.children,r=e.text,a=e.width,l=e.fontSize,c=e.rows,s=e.onEllipsis,u=o.useState([0,0,0]),d=(0,i.Z)(u,2),p=(0,i.Z)(d[0],3),f=p[0],m=p[1],v=p[2],g=d[1],y=o.useState(0),b=(0,i.Z)(y,2),h=b[0],E=b[1],Z=o.useState(0),w=(0,i.Z)(Z,2),C=w[0],S=w[1],j=o.useRef(null),k=o.useRef(null),P=o.useMemo((function(){return(0,x.Z)(r)}),[r]),N=o.useMemo((function(){return function(e){var n=0;return e.forEach((function(e){Q(e)?n+=String(e).length:n+=1})),n}(P)}),[P]),z=o.useMemo((function(){return n&&3===h?t(Y(P,m),m<N):t(P,!1)}),[n,h,t,P,m,N]);(0,O.Z)((function(){n&&a&&l&&N&&(E(1),g([0,Math.ceil(N/2),N]))}),[n,a,l,r,N,c]),(0,O.Z)((function(){var e;1===h&&S((null===(e=j.current)||void 0===e?void 0:e.offsetHeight)||0)}),[h]),(0,O.Z)((function(){var e,n;if(C)if(1===h)((null===(e=k.current)||void 0===e?void 0:e.offsetHeight)||0)<=c*C?(E(4),s(!1)):E(2);else if(2===h)if(f!==v){var t=(null===(n=k.current)||void 0===n?void 0:n.offsetHeight)||0,o=f,r=v;f===v-1?r=f:t<=c*C?o=m:r=m;var i=Math.ceil((o+r)/2);g([o,i,r])}else E(3),s(!0)}),[h,f,v,c,C]);var T={width:a,whiteSpace:"normal",margin:0,padding:0},I=function(e,n,t){return o.createElement("span",{"aria-hidden":!0,ref:n,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:2*Math.floor(l/2)},t)},e)};return o.createElement(o.Fragment,null,z,n&&3!==h&&4!==h&&o.createElement(o.Fragment,null,I("lg",j,{wordBreak:"keep-all",whiteSpace:"nowrap"}),1===h?I(t(P,!1),k,T):function(e,n){var o=Y(P,e);return I(t(o,!0),n,T)}(m,k)))};var $=function(e){var n=e.enabledEllipsis,t=e.isEllipsis,r=e.children,i=e.tooltipProps;return(null===i||void 0===i?void 0:i.title)&&n?o.createElement(j.Z,Object.assign({open:!!t&&void 0},i),r):r},ee=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t};function ne(e,n,t){return!0===e||void 0===e?n:e||t&&n}function te(e){return!1===e?[!1,!1]:Array.isArray(e)?e:[e]}var oe=o.forwardRef((function(e,n){var t,l,c,s=e.prefixCls,u=e.className,p=e.style,f=e.type,v=e.disabled,y=e.children,P=e.ellipsis,N=e.editable,z=e.copyable,T=e.component,R=e.title,D=ee(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),H=o.useContext(C.E_),B=H.getPrefixCls,M=H.direction,W=(0,S.Z)("Text"),L=(0,i.Z)(W,1)[0],A=o.useRef(null),F=o.useRef(null),_=B("typography",s),V=(0,Z.Z)(D,["mark","code","delete","underline","strong","keyboard","italic"]),q=U(N),Q=(0,i.Z)(q,2),Y=Q[0],oe=Q[1],re=(0,E.Z)(!1,{value:oe.editing}),ie=(0,i.Z)(re,2),ae=ie[0],le=ie[1],ce=oe.triggerType,se=void 0===ce?["icon"]:ce,ue=function(e){var n;e&&(null===(n=oe.onStart)||void 0===n||n.call(oe)),le(e)};X((function(){var e;ae||null===(e=F.current)||void 0===e||e.focus()}),[ae]);var de=function(e){null===e||void 0===e||e.preventDefault(),ue(!0)},pe=U(z),fe=(0,i.Z)(pe,2),me=fe[0],ve=fe[1],ge=o.useState(!1),ye=(0,i.Z)(ge,2),be=ye[0],he=ye[1],xe=o.useRef(),Oe={};ve.format&&(Oe.format=ve.format);var Ee=function(){window.clearTimeout(xe.current)},Ze=function(e){var n;null===e||void 0===e||e.preventDefault(),null===e||void 0===e||e.stopPropagation(),b()(ve.text||String(y)||"",Oe),he(!0),Ee(),xe.current=window.setTimeout((function(){he(!1)}),3e3),null===(n=ve.onCopy)||void 0===n||n.call(ve,e)};o.useEffect((function(){return Ee}),[]);var we=o.useState(!1),Ce=(0,i.Z)(we,2),Se=Ce[0],je=Ce[1],ke=o.useState(!1),Pe=(0,i.Z)(ke,2),Ne=Pe[0],ze=Pe[1],Te=o.useState(!1),Ie=(0,i.Z)(Te,2),Re=Ie[0],De=Ie[1],He=o.useState(!1),Be=(0,i.Z)(He,2),Me=Be[0],We=Be[1],Le=o.useState(!1),Ae=(0,i.Z)(Le,2),Fe=Ae[0],_e=Ae[1],Ve=o.useState(!0),Ke=(0,i.Z)(Ve,2),Ue=Ke[0],Xe=Ke[1],qe=U(P,{expandable:!1}),Ge=(0,i.Z)(qe,2),Qe=Ge[0],Ye=Ge[1],Je=Qe&&!Re,$e=Ye.rows,en=void 0===$e?1:$e,nn=o.useMemo((function(){return!Je||void 0!==Ye.suffix||Ye.onEllipsis||Ye.expandable||Y||me}),[Je,Ye,Y,me]);(0,O.Z)((function(){Qe&&!nn&&(je((0,k.G)("webkitLineClamp")),ze((0,k.G)("textOverflow")))}),[nn,Qe]);var tn=o.useMemo((function(){return!nn&&(1===en?Ne:Se)}),[nn,Ne,Se]),on=Je&&(tn?Fe:Me),rn=Je&&1===en&&tn,an=Je&&en>1&&tn,ln=function(e){var n;De(!0),null===(n=Ye.onExpand)||void 0===n||n.call(Ye,e)},cn=o.useState(0),sn=(0,i.Z)(cn,2),un=sn[0],dn=sn[1],pn=o.useState(0),fn=(0,i.Z)(pn,2),mn=fn[0],vn=fn[1],gn=function(e){var n;We(e),Me!==e&&(null===(n=Ye.onEllipsis)||void 0===n||n.call(Ye,e))};o.useEffect((function(){var e=A.current;if(Qe&&tn&&e){var n=an?e.offsetHeight<e.scrollHeight:e.offsetWidth<e.scrollWidth;Fe!==n&&_e(n)}}),[Qe,tn,y,an,Ue]),o.useEffect((function(){var e=A.current;if("undefined"!==typeof IntersectionObserver&&e&&tn&&Je){var n=new IntersectionObserver((function(){Xe(!!e.offsetParent)}));return n.observe(e),function(){n.disconnect()}}}),[tn,Je]);var yn={};yn=!0===Ye.tooltip?{title:null!==(t=oe.text)&&void 0!==t?t:y}:o.isValidElement(Ye.tooltip)?{title:Ye.tooltip}:"object"===typeof Ye.tooltip?Object.assign({title:null!==(l=oe.text)&&void 0!==l?l:y},Ye.tooltip):{title:Ye.tooltip};var bn=o.useMemo((function(){var e=function(e){return["string","number"].includes(typeof e)};if(Qe&&!tn)return e(oe.text)?oe.text:e(y)?y:e(R)?R:e(yn.title)?yn.title:void 0}),[Qe,tn,R,yn.title,on]);if(ae)return o.createElement(K,{value:null!==(c=oe.text)&&void 0!==c?c:"string"===typeof y?y:"",onSave:function(e){var n;null===(n=oe.onChange)||void 0===n||n.call(oe,e),ue(!1)},onCancel:function(){var e;null===(e=oe.onCancel)||void 0===e||e.call(oe),ue(!1)},onEnd:oe.onEnd,prefixCls:_,className:u,style:p,direction:M,component:T,maxLength:oe.maxLength,autoSize:oe.autoSize,enterIcon:oe.enterIcon});var hn=function(){var e,n=Ye.expandable,t=Ye.symbol;return n?(e=t||(null===L||void 0===L?void 0:L.expand),o.createElement("a",{key:"expand",className:"".concat(_,"-expand"),onClick:ln,"aria-label":null===L||void 0===L?void 0:L.expand},e)):null},xn=function(){if(Y){var e=oe.icon,n=oe.tooltip,t=(0,x.Z)(n)[0]||(null===L||void 0===L?void 0:L.edit),r="string"===typeof t?t:"";return se.includes("icon")?o.createElement(j.Z,{key:"edit",title:!1===n?"":t},o.createElement(I,{ref:F,className:"".concat(_,"-edit"),onClick:de,"aria-label":r},e||o.createElement(m,{role:"button"}))):null}},On=function(){if(me){var e=ve.tooltips,n=ve.icon,t=te(e),r=te(n),i=be?ne(t[1],null===L||void 0===L?void 0:L.copied):ne(t[0],null===L||void 0===L?void 0:L.copy),l=be?null===L||void 0===L?void 0:L.copied:null===L||void 0===L?void 0:L.copy,c="string"===typeof i?i:l;return o.createElement(j.Z,{key:"copy",title:i},o.createElement(I,{className:g()("".concat(_,"-copy"),be&&"".concat(_,"-copy-success")),onClick:Ze,"aria-label":c},be?ne(r[1],o.createElement(a.Z,null),!0):ne(r[0],o.createElement(d,null),!0)))}};return o.createElement(h.Z,{onResize:function(e,n){var t,o=e.offsetWidth;dn(o),vn(parseInt(null===(t=window.getComputedStyle)||void 0===t?void 0:t.call(window,n).fontSize,10)||0)},disabled:!Je||tn},(function(t){var i;return o.createElement($,{tooltipProps:yn,enabledEllipsis:Je,isEllipsis:on},o.createElement(G,Object.assign({className:g()((i={},(0,r.Z)(i,"".concat(_,"-").concat(f),f),(0,r.Z)(i,"".concat(_,"-disabled"),v),(0,r.Z)(i,"".concat(_,"-ellipsis"),Qe),(0,r.Z)(i,"".concat(_,"-single-line"),Je&&1===en),(0,r.Z)(i,"".concat(_,"-ellipsis-single-line"),rn),(0,r.Z)(i,"".concat(_,"-ellipsis-multiple-line"),an),i),u),prefixCls:s,style:Object.assign(Object.assign({},p),{WebkitLineClamp:an?en:void 0}),component:T,ref:(0,w.sQ)(t,A,n),direction:M,onClick:se.includes("text")?de:void 0,"aria-label":null===bn||void 0===bn?void 0:bn.toString(),title:R},V),o.createElement(J,{enabledMeasure:Je&&!tn,text:y,rows:en,width:un,fontSize:mn,onEllipsis:gn},(function(n,t){var r=n;n.length&&t&&bn&&(r=o.createElement("span",{key:"show-content","aria-hidden":!0},r));var i=function(e,n){var t=e.mark,r=e.code,i=e.underline,a=e.delete,l=e.strong,c=e.keyboard,s=e.italic,u=n;function d(e,n){n&&(u=o.createElement(e,{},u))}return d("strong",l),d("u",i),d("del",a),d("code",r),d("mark",t),d("kbd",c),d("i",s),u}(e,o.createElement(o.Fragment,null,r,function(e){return[e&&o.createElement("span",{"aria-hidden":!0,key:"ellipsis"},"..."),Ye.suffix,(n=e,[n&&hn(),xn(),On()])];var n}(t)));return i}))))}))})),re=oe,ie=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},ae=o.forwardRef((function(e,n){var t=e.ellipsis,r=e.rel,i=ie(e,["ellipsis","rel"]),a=Object.assign(Object.assign({},i),{rel:void 0===r&&"_blank"===i.target?"noopener noreferrer":r});return delete a.navigate,o.createElement(re,Object.assign({},a,{ref:n,ellipsis:!!t,component:"a"}))})),le=o.forwardRef((function(e,n){return o.createElement(re,Object.assign({ref:n},e,{component:"div"}))})),ce=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},se=function(e,n){var t=e.ellipsis,r=ce(e,["ellipsis"]),i=o.useMemo((function(){return t&&"object"===typeof t?(0,Z.Z)(t,["expandable","rows"]):t}),[t]);return o.createElement(re,Object.assign({ref:n},r,{ellipsis:i,component:"span"}))},ue=o.forwardRef(se),de=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]])}return t},pe=[1,2,3,4,5],fe=o.forwardRef((function(e,n){var t,r=e.level,i=void 0===r?1:r,a=de(e,["level"]);return t=pe.includes(i)?"h".concat(i):"h1",o.createElement(re,Object.assign({ref:n},a,{component:t}))})),me=G;me.Text=ue,me.Link=ae,me.Title=fe,me.Paragraph=le;var ve=me},6998:function(e,n,t){"use strict";var o=t(2458),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,n){var t,i,a,l,c,s,u=!1;n||(n={}),t=n.debug||!1;try{if(a=o(),l=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),n.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[n.format]||r.default;window.clipboardData.setData(i,e)}else o.clipboardData.clearData(),o.clipboardData.setData(n.format,e);n.onCopy&&(o.preventDefault(),n.onCopy(o.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){t&&console.error("unable to copy using execCommand: ",d),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",e),n.onCopy&&n.onCopy(window.clipboardData),u=!0}catch(d){t&&console.error("unable to copy using clipboardData: ",d),t&&console.error("falling back to prompt"),i=function(e){var n=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,n)}("message"in n?n.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),s&&document.body.removeChild(s),a()}return u}},2458:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,t=[],o=0;o<e.rangeCount;o++)t.push(e.getRangeAt(o));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(n){e.addRange(n)})),n&&n.focus()}}}}]);
//# sourceMappingURL=793.0721e3c5.chunk.js.map