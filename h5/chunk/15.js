(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"141":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(142)).default;t.default=r},"142":function(e,t,n){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function Backdrop(e){var t=e.open,n=void 0!==t&&t,a=e.closeable,u=void 0!==a&&a,l=e.duration,f=void 0===l?300:l,d=e.children,s=e.onClose;return c.createElement(r.View,{"className":(0,o.default)((0,i.prefixClassname)("backdrop"),_defineProperty({},(0,i.prefixClassname)("backdrop-open"),n)),"style":{"transitionDuration":"".concat(f,"ms")},"onClick":function handleClose(e){u&&s&&s(e)}},d)};var r=n(105),o=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(106)),c=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{"default":e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(19)),i=n(107);function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function _getRequireWildcardCache(){return e},e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}},"180":function(e,t,n){e.exports={"ContentWrapper":"index-module__ContentWrapper___1GhFv","ContentBlock":"index-module__ContentBlock___3JFyM"}},"198":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return BackdropDemo}));var r=n(7),o=n(19),c=n(105),i=n(141),a=n.n(i),u=n(158),l=n.n(u),f=n(113),d=n(112),s=n(180),p=n.n(s),b=n(104);function BackdropDemo(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],i=t[1],u=Object(o.useState)(!1),s=Object(r.a)(u,2),y=s[0],_=s[1];return Object(b.jsxs)(f.a,{"title":"Backdrop","children":[Object(b.jsxs)(d.a,{"title":"基础用法","children":[Object(b.jsx)(l.a,{"variant":"contained","color":"primary","onClick":function onClick(){return i(!0)},"children":"显示遮盖层"}),Object(b.jsx)(a.a,{"open":n,"closeable":!0,"onClose":function onClose(){return i(!1)}})]}),Object(b.jsxs)(d.a,{"title":"嵌入内容","children":[Object(b.jsx)(l.a,{"variant":"contained","color":"primary","onClick":function onClick(){return _(!0)},"children":"嵌入内容"}),Object(b.jsx)(a.a,{"open":y,"closeable":!0,"onClose":function onClose(){return _(!1)},"children":Object(b.jsx)(c.View,{"className":p.a.ContentWrapper,"children":Object(b.jsx)(c.View,{"className":p.a.ContentBlock})})})]})]})}}}]);