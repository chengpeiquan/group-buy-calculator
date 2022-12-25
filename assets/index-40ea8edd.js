/*
 * name: group-buy-calculator
 * description: A takeaway billing calculator, no need to worry about red envelopes, redemption coupons and other messy reductions, it will automatically calculate the discount ratio to get the final bill.
 * author: chengpeiquan <chengpeiquan@chengpeiquan.com>
 * homepage: https://chengpeiquan.github.io/group-buy-calculator/
 * license: MIT
 */
import{r as u,a as K,_ as J,D as p,T as X,I as f,C as j,B as ee,b as z,c as te,t as R,L as O,R as ae}from"./antd-365142ee.js";import{a as re,g as le,m as E,U as ne}from"./@bassist/utils-08b28be8.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();var v={},oe={get exports(){return v},set exports(t){v=t}},_={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=u,ce=Symbol.for("react.element"),se=Symbol.for("react.fragment"),de=Object.prototype.hasOwnProperty,ue=ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,he={key:!0,ref:!0,__self:!0,__source:!0};function A(t,a,l){var r,n={},i=null,o=null;l!==void 0&&(i=""+l),a.key!==void 0&&(i=""+a.key),a.ref!==void 0&&(o=a.ref);for(r in a)de.call(a,r)&&!he.hasOwnProperty(r)&&(n[r]=a[r]);if(t&&t.defaultProps)for(r in a=t.defaultProps,a)n[r]===void 0&&(n[r]=a[r]);return{$$typeof:ce,type:t,key:i,ref:o,props:n,_owner:ue.current}}_.Fragment=se;_.jsx=A;_.jsxs=A;(function(t){t.exports=_})(oe);const L=v.Fragment,e=v.jsx,c=v.jsxs;var $={},Z=K;$.createRoot=Z.createRoot,$.hydrateRoot=Z.hydrateRoot;var k={},me={get exports(){return k},set exports(t){k=t}},Y={},g={},pe={get exports(){return g},set exports(t){g=t}};(function(t){function a(l){return l&&l.__esModule?l:{default:l}}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports})(pe);var b={};Object.defineProperty(b,"__esModule",{value:!0});b.default=void 0;var fe={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"};b.default=fe;var V={},M={};const ve=re(J);var x={};Object.defineProperty(x,"__esModule",{value:!0});x.default=void 0;var ge={locale:"zh_CN",today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",yearFormat:"YYYY年",dayFormat:"D日",dateFormat:"YYYY年M月D日",dateTimeFormat:"YYYY年M月D日 HH时mm分ss秒",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪"},qe=ge;x.default=qe;var w={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={placeholder:"请选择时间",rangePlaceholder:["开始时间","结束时间"]},l=a;t.default=l})(w);(function(t){var a=g.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(ve),r=a(x),n=a(w),i={lang:(0,l.default)({placeholder:"请选择日期",yearPlaceholder:"请选择年份",quarterPlaceholder:"请选择季度",monthPlaceholder:"请选择月份",weekPlaceholder:"请选择周",rangePlaceholder:["开始日期","结束日期"],rangeYearPlaceholder:["开始年份","结束年份"],rangeMonthPlaceholder:["开始月份","结束月份"],rangeQuarterPlaceholder:["开始季度","结束季度"],rangeWeekPlaceholder:["开始周","结束周"]},r.default),timePickerLocale:(0,l.default)({},n.default)};i.lang.ok="确定";var o=i;t.default=o})(M);(function(t){var a=g.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(M),r=l.default;t.default=r})(V);(function(t){var a=g.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(b),r=a(V),n=a(M),i=a(w),o="${label}不是一个有效的${type}",s={locale:"zh-cn",Pagination:l.default,DatePicker:n.default,TimePicker:i.default,Calendar:r.default,global:{placeholder:"请选择"},Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",filterEmptyText:"无筛选项",filterCheckall:"全选",filterSearchPlaceholder:"在筛选项中搜索",selectAll:"全选当页",selectInvert:"反选当页",selectNone:"清空所有",selectionAll:"全选所有",sortTitle:"排序",expand:"展开行",collapse:"关闭行",triggerDesc:"点击降序",triggerAsc:"点击升序",cancelSort:"取消排序"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Tour:{Next:"下一步",Previous:"上一步",Finish:"结束导览"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{titles:["",""],searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项",remove:"删除",selectCurrent:"全选当页",removeCurrent:"删除当页",selectAll:"全选所有",removeAll:"删除全部",selectInvert:"反选当页"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件",downloadFile:"下载文件"},Empty:{description:"暂无数据"},Icon:{icon:"图标"},Text:{edit:"编辑",copy:"复制",copied:"复制成功",expand:"展开"},PageHeader:{back:"返回"},Form:{optional:"（可选）",defaultValidateMessages:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:o,method:o,array:o,object:o,number:o,date:o,boolean:o,integer:o,float:o,regexp:o,email:o,url:o,hex:o},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},Image:{preview:"预览"},QRCode:{expired:"二维码过期",refresh:"点击刷新"}},d=s;t.default=d})(Y);(function(t){t.exports=Y})(me);const _e=le(k);function be(){const t="gbc-theme",a=window.localStorage.getItem(t),l=a?a==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;function r(s){const d=s?"dark":"light";window.localStorage.setItem(t,d);const h=document.querySelector("html");h.className=d}r(l);const[n,i]=u.useState(l);function o(){i(s=>!s),r(!n)}return{isDark:n,toggleTheme:o}}function P(){const[t,a]=u.useState(E());function l(){const r=E();a(()=>r);const n=`platform-${r?"mobile":"desktop"}`,i=document.querySelector("body");i.className=n}return ne(l),{isMobile:t,updatePlatform:l}}const xe="_header_2e8f5_1",Ne="_title_2e8f5_14",ye="_nav-list_2e8f5_19",Ce="_icon_2e8f5_40",m={header:xe,title:Ne,navList:ye,icon:Ce};function $e(){return c("div",{className:m.navList,children:[c("a",{href:"https://chengpeiquan.com",target:"_blank",children:[e("svg",{className:m.icon,width:"18",height:"18",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"})}),e("span",{children:"首页"})]}),e(p,{type:"vertical"}),c("a",{href:"https://github.com/chengpeiquan/cooking-cookbook",target:"_blank",children:[c("svg",{className:m.icon,width:"18",height:"18",viewBox:"0 0 48 48",children:[e("mask",{id:"svgIDa",children:c("g",{fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:"4",children:[e("path",{strokeLinecap:"round",d:"M10 44h28V20.947C38 14.901 31.732 10 24 10s-14 4.901-14 10.947V44Z",clipRule:"evenodd"}),e("path",{fill:"#555",d:"M38 22.044v-1.097C38 14.901 31.732 10 24 10s-14 4.901-14 10.947v1.093l28 .004Z"}),e("path",{strokeLinecap:"round",d:"M4 22h40M21 4h6"})]})}),e("path",{fill:"currentColor",d:"M0 0h48v48H0z",mask:"url(#svgIDa)"})]}),e("span",{children:"菜谱"})]}),e(p,{type:"vertical"}),c("a",{href:"https://github.com/chengpeiquan/group-buy-calculator",target:"_blank",children:[e("svg",{className:m.icon,width:"18",height:"18",viewBox:"0 0 24 24",children:e("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"})}),e("span",{children:"源码"})]}),e(p,{type:"vertical"}),c("a",{href:"https://github.com/chengpeiquan",target:"_blank",children:[e("svg",{className:m.icon,width:"18",height:"18",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"})}),e("span",{children:"GitHub"})]})]})}function ke({children:t}){const{isMobile:a}=P();return c("div",{className:m.header,children:[e("h1",{className:m.title,children:"外卖拼单计算器"}),!a&&e($e,{}),t]})}const Te="_footer_38rnv_1",Me="_line_38rnv_11",C={footer:Te,line:Me};function we(){return c("div",{className:C.footer,children:[e("p",{className:C.line,children:"Released under the MIT License."}),c("p",{className:C.line,children:["Copyright © 2020-PRESENT"," ",e("a",{href:"https://github.com/chengpeiquan",target:"_blank",children:"chengpeiquan"})]})]})}const Pe="_btn_j6s4b_1",D={btn:Pe};function Fe({isDark:t,toggleTheme:a}){return e("div",{title:t?"切换为明亮主题":"切换到暗黑主题",onClick:a,children:t?e("svg",{className:D.btn,width:"24",height:"24",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287ZM12 12Z"})}):e("svg",{className:D.btn,width:"24",height:"24",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025q.337.025.662.075q-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613q1.15-.612 1.875-1.637q.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Zm0-2q2.2 0 3.95-1.212q1.75-1.213 2.55-3.163q-.5.125-1 .2q-.5.075-1 .075q-3.075 0-5.238-2.162Q9.1 10.575 9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.162 2.55Q5 9.8 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm-.25-6.75Z"})})})}const T={name:"",price:"",result:""};function Qe(t,a){let l=0;t.forEach(i=>{l+=Number(i.price)});let r=0;r=Number(a.packagingFee)+Number(a.deliveryFee);let n=l+r;return n=Number(n.toFixed(2)),n}function Se(t,a){let l=1;l=t/a;const r=1-l;return isNaN(r)?0:r}const F=u.createContext({});function Re({children:t}){const[a,l]=u.useState([{...T},{...T}]),[r,n]=u.useState({packagingFee:"",deliveryFee:""}),[i,o]=u.useState(""),[s,d]=u.useState(0),[h,q]=u.useState(0);function N(){const Q=Qe(a,r);d(()=>Q);const S=Se(Number(i),Q);q(()=>S);const H=Number(r.deliveryFee)/a.length,U=Number(r.packagingFee)/a.length;l(W=>W.map(y=>{const G=(Number(y.price)+H+U)*(1-S);return y.result=G.toFixed(2),y}))}return e(F.Provider,{value:{shoppingList:a,setShoppingList:l,sharedExpenses:r,setSharedExpenses:n,actualExpenses:i,setActualExpenses:o,originalTotalExpenses:s,discountRate:h,getResult:N},children:t})}const Ee="_icon-faq_vojra_1",Le={iconFaq:Ee};function B({title:t}){return e(X,{title:t,children:e("svg",{className:Le.iconFaq,width:"22",height:"22",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M11.95 18q.525 0 .888-.363q.362-.362.362-.887t-.362-.887q-.363-.363-.888-.363t-.888.363q-.362.362-.362.887t.362.887q.363.363.888.363Zm-.9-3.85h1.85q0-.825.188-1.3q.187-.475 1.062-1.3q.65-.65 1.025-1.238q.375-.587.375-1.412q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75q-.888.75-1.238 1.8l1.65.65q.125-.45.563-.975Q11.2 7.7 12.1 7.7q.8 0 1.2.437q.4.438.4.963q0 .5-.3.937q-.3.438-.75.813q-1.1.975-1.35 1.475q-.25.5-.25 1.825ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4Q8.65 4 6.325 6.325Q4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z"})})})}function Ze({shoppingList:t,setShoppingList:a}){const{isMobile:l}=P();function r(o,s,d){a(h=>h.map((q,N)=>(N===o&&(q[s]=String(d)),q)))}function n(){a(o=>[...o,{...T}])}function i(o){a(s=>s.filter((d,h)=>h!==o))}return c("section",{className:"form-table",children:[e("ul",{className:"list",children:t.map((o,s)=>c("div",{className:"item",children:[c("label",{className:"label",children:[e("span",{className:"text",children:"物品名："}),e(f,{value:o.name,defaultValue:o.name,placeholder:"请填写物品名称",allowClear:!0,onChange:d=>r(s,"name",d.target.value)})]}),c("label",{className:"label",children:[e("span",{className:"text",children:"原价格："}),e(f,{type:"number",value:o.price,defaultValue:o.price,placeholder:"请填写物品原价",prefix:"￥",suffix:"元",onChange:d=>r(s,"price",d.target.value)})]}),e("div",{className:"btn-remove",children:c("div",{onClick:()=>i(s),children:[e("svg",{width:"16",height:"16",viewBox:"0 0 20 20",children:e("path",{fill:"currentColor",d:"m9.129 0l1.974.005c.778.094 1.46.46 2.022 1.078c.459.504.7 1.09.714 1.728h5.475a.69.69 0 0 1 .686.693a.689.689 0 0 1-.686.692l-1.836-.001v11.627c0 2.543-.949 4.178-3.041 4.178H5.419c-2.092 0-3.026-1.626-3.026-4.178V4.195H.686A.689.689 0 0 1 0 3.505c0-.383.307-.692.686-.692h5.47c.014-.514.205-1.035.554-1.55C7.23.495 8.042.074 9.129 0Zm6.977 4.195H3.764v11.627c0 1.888.52 2.794 1.655 2.794h9.018c1.139 0 1.67-.914 1.67-2.794l-.001-11.627ZM6.716 6.34c.378 0 .685.31.685.692v8.05a.689.689 0 0 1-.686.692a.689.689 0 0 1-.685-.692v-8.05c0-.382.307-.692.685-.692Zm2.726 0c.38 0 .686.31.686.692v8.05a.689.689 0 0 1-.686.692a.689.689 0 0 1-.685-.692v-8.05c0-.382.307-.692.685-.692Zm2.728 0c.378 0 .685.31.685.692v8.05a.689.689 0 0 1-.685.692a.689.689 0 0 1-.686-.692v-8.05a.69.69 0 0 1 .686-.692ZM9.176 1.382c-.642.045-1.065.264-1.334.662c-.198.291-.297.543-.313.768l4.938-.001c-.014-.291-.129-.547-.352-.792c-.346-.38-.73-.586-1.093-.635l-1.846-.002Z"})}),l&&e("span",{children:"删除"})]})})]},`shopping-item-${s}`))}),c("div",{className:"btn-add",onClick:n,children:[e("svg",{width:"22",height:"22",viewBox:"0 0 24 24",children:e("path",{fill:"currentColor",d:"M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"})}),e("span",{children:"添加一项"})]})]})}function De({sharedExpenses:t,setSharedExpenses:a}){function l(r,n){a(i=>(i[r]=n,{...i}))}return e("section",{className:"form-table",children:c("ul",{className:"list shared-list",children:[e("li",{className:"item",children:c("label",{className:"label",children:[e("span",{className:"text",children:"包装费："}),e(f,{type:"number",value:t.packagingFee,defaultValue:t.packagingFee,placeholder:"请填写包装费",prefix:"￥",suffix:"元",onChange:r=>l("packagingFee",r.target.value)})]})}),e("li",{className:"item",children:c("label",{className:"label",children:[e("span",{className:"text",children:"配送费："}),e(f,{type:"number",value:t.deliveryFee,defaultValue:t.deliveryFee,placeholder:"请填写配送费",prefix:"￥",suffix:"元",onChange:r=>l("deliveryFee",r.target.value)})]})})]})})}function Ie({actualExpenses:t,setActualExpenses:a}){return e("section",{className:"form-table",children:e("ul",{className:"list shared-list",children:e("li",{className:"item",children:c("label",{className:"label",children:[e("span",{className:"text",children:"总支出："}),e(f,{type:"number",value:t,defaultValue:t,placeholder:"请填写总支出",prefix:"￥",suffix:"元",onChange:l=>a(l.target.value)})]})})})})}function je(){const{shoppingList:t,setShoppingList:a,sharedExpenses:l,setSharedExpenses:r,actualExpenses:n,setActualExpenses:i,getResult:o}=u.useContext(F);return e("div",{className:"main-wrap",children:c(j,{title:"填写原价信息",extra:e(B,{title:"无需纠结红包、抵扣券等乱七八糟的减免，会自动计算折扣比例来得到最终账单"}),children:[e(Ze,{shoppingList:t,setShoppingList:a}),e(p,{orientation:"left",children:"公摊费用"}),e(De,{sharedExpenses:l,setSharedExpenses:r}),e(p,{orientation:"left",children:"实际支付"}),e(Ie,{actualExpenses:n,setActualExpenses:i}),e("section",{className:"btn-result",children:e(ee,{type:"primary",onClick:o,children:"点击计算结果"})})]})})}const{Column:I}=z;function ze(){const{shoppingList:t,actualExpenses:a,originalTotalExpenses:l,discountRate:r}=u.useContext(F);return e("div",{className:"main-wrap",children:c(j,{title:"计算后的结果",extra:e(B,{title:"取 2 位小数并四舍五入"}),children:[c(z,{rowKey:()=>String(Math.random()*100),dataSource:t,pagination:!1,children:[e(I,{title:"物品名称",dataIndex:"name",align:"center",render:(n,i,o)=>e(L,{children:e("span",{children:n||`物品 ${o+1}`})})},"name"),e(I,{title:"需要支付",dataIndex:"result",align:"center",render:n=>e(L,{children:c("span",{children:["￥ ",n||"0.00"]})})},"result")]}),c("section",{className:"result-overview",children:[c("p",{className:"line",children:["原价总计（含运费及打包费）：",c("strong",{children:["￥",l.toFixed(2)]})]}),c("p",{className:"line",children:["实际支付：",c("strong",{children:["￥",Number(a).toFixed(2)||"0.00"]})]}),c("p",{className:"line",children:["优惠幅度：",c("strong",{children:[(r*100).toFixed(2),"%"]})]})]})]})})}const{Content:Oe}=O;function Ae(){const{isDark:t,toggleTheme:a}=be(),{isMobile:l,updatePlatform:r}=P();return u.useEffect(()=>{r()},[l]),e(te,{locale:_e,theme:{algorithm:t?R.darkAlgorithm:R.defaultAlgorithm},children:c(O,{children:[e(ke,{children:e(Fe,{isDark:t,toggleTheme:a})}),e(Oe,{children:e(Re,{children:c("div",{className:"container",children:[e(je,{}),e(ze,{})]})})}),e(we,{})]})})}$.createRoot(document.getElementById("root")).render(e(ae.StrictMode,{children:e(Ae,{})}));