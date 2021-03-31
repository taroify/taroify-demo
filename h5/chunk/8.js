/*! For license information please see 8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"104":function(e,t,r){"use strict";e.exports=r(136)},"105":function(e,t,r){"use strict";r.r(t),r.d(t,"View",(function(){return S})),r.d(t,"Icon",(function(){return N})),r.d(t,"Progress",(function(){return k})),r.d(t,"RichText",(function(){return I})),r.d(t,"Text",(function(){return M})),r.d(t,"Button",(function(){return C})),r.d(t,"Checkbox",(function(){return R})),r.d(t,"CheckboxGroup",(function(){return E})),r.d(t,"Editor",(function(){return T})),r.d(t,"Form",(function(){return A})),r.d(t,"Input",(function(){return H})),r.d(t,"Label",(function(){return D})),r.d(t,"Picker",(function(){return B})),r.d(t,"PickerView",(function(){return W})),r.d(t,"PickerViewColumn",(function(){return L})),r.d(t,"Radio",(function(){return V})),r.d(t,"RadioGroup",(function(){return z})),r.d(t,"Slider",(function(){return F})),r.d(t,"Switch",(function(){return U})),r.d(t,"CoverImage",(function(){return K})),r.d(t,"Textarea",(function(){return G})),r.d(t,"CoverView",(function(){return J})),r.d(t,"MovableArea",(function(){return $})),r.d(t,"MovableView",(function(){return Q})),r.d(t,"ScrollView",(function(){return Y})),r.d(t,"Swiper",(function(){return Z})),r.d(t,"SwiperItem",(function(){return X})),r.d(t,"FunctionalPageNavigator",(function(){return ee})),r.d(t,"Navigator",(function(){return te})),r.d(t,"Audio",(function(){return re})),r.d(t,"Camera",(function(){return oe})),r.d(t,"Image",(function(){return ne})),r.d(t,"LivePlayer",(function(){return ce})),r.d(t,"Video",(function(){return ie})),r.d(t,"Map",(function(){return ae})),r.d(t,"Canvas",(function(){return ue})),r.d(t,"Ad",(function(){return se})),r.d(t,"OfficialAccount",(function(){return fe})),r.d(t,"OpenData",(function(){return le})),r.d(t,"WebView",(function(){return pe})),r.d(t,"NavigationBar",(function(){return de})),r.d(t,"Block",(function(){return ye})),r.d(t,"CustomWrapper",(function(){return _e}));var o=r(115),n=r.n(o),c=r(17),i=r.n(c),a=r(121),u=r.n(a),s=r(125),f=r.n(s),l=r(126),p=r.n(l),d=r(127),y=r.n(d),_=r(129),v=r.n(_),b=r(131),m=r.n(b),x=r(132),h=r.n(x),O=r(19),j=r.n(O);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return v()(this,r)}}j.a.createElement;var g=function reactifyWebComponent(e){var t=function(t){y()(Index,t);var r=_createSuper(Index);function Index(e){var t;return f()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(O.createRef)(),t}return p()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),Object.entries(this.props).forEach((function(o){var n=u()(o,2),c=n[0],a=n[1];if(r.ref.current&&"children"!==c)if("classname"!==c.toLowerCase())if("style"!==c){if("taro-scroll-view-core"===e){if("scrollTop"===c)return void(r.ref.current.mpScrollTop=a);if("scrollLeft"===c)return void(r.ref.current.mpScrollLeft=a);if("scrollIntoView"===c)return void(r.ref.current.mpScrollIntoView=a)}if("function"==typeof a&&c.match(/^on[A-Z]/)){var s=c.substr(2).toLowerCase(),f=a;return"taro-scroll-view-core"===e&&"scroll"===s&&(f=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),r.eventHandlers.push([s,f]),r.ref.current.addEventListener(s,f)}if("string"!=typeof a&&"number"!=typeof a)return"boolean"==typeof a?a?(r.ref.current[c]=!0,r.ref.current.setAttribute(c,a)):(r.ref.current[c]=!1,r.ref.current.removeAttribute(c)):void(r.ref.current[c]=a);r.ref.current[c]=a}else{if("string"==typeof a)return r.ref.current.setAttribute(c,a);if(a&&"object"===i()(a)){for(var l in a)/^--/.test(l)?r.ref.current.style.setProperty(l,a[l]):r.ref.current.style[l]=a[l];return}}else r.ref.current.className=t?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),i=[];return o.forEach((function(e){c.indexOf(e)>-1?(i.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&i.push(e)})),(i=[].concat(h()(i),h()(c))).join(" ")}(r.ref.current,t,r.props):a}))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===i()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=u()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(O.createElement)(e,n,r)}}]),Index}(j.a.Component);return j.a.forwardRef((function(e,r){return j.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=g("taro-input-core"),P=(j.a.createElement,j.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),j.a.createElement(w,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),S=g("taro-view-core"),N=g("taro-icon-core"),k=g("taro-progress-core"),I=g("taro-rich-text-core"),M=g("taro-text-core"),C=g("taro-button-core"),R=g("taro-checkbox-core"),E=g("taro-checkbox-group-core"),T=g("taro-editor-core"),A=g("taro-form-core"),H=P,D=g("taro-label-core"),B=g("taro-picker-core"),W=g("taro-picker-view-core"),L=g("taro-picker-view-column-core"),V=g("taro-radio-core"),z=g("taro-radio-group-core"),F=g("taro-slider-core"),U=g("taro-switch-core"),K=g("taro-cover-image-core"),G=g("taro-textarea-core"),J=g("taro-cover-view-core"),$=g("taro-movable-area-core"),Q=g("taro-movable-view-core"),Y=g("taro-scroll-view-core"),Z=g("taro-swiper-core"),X=g("taro-swiper-item-core"),ee=g("taro-functional-page-navigator-core"),te=g("taro-navigator-core"),re=g("taro-audio-core"),oe=g("taro-camera-core"),ne=g("taro-image-core"),ce=g("taro-live-player-core"),ie=g("taro-video-core"),ae=g("taro-map-core"),ue=g("taro-canvas-core"),se=g("taro-ad-core"),fe=g("taro-official-account-core"),le=g("taro-open-data-core"),pe=g("taro-web-view-core"),de=g("taro-navigation-bar-core"),ye=g("taro-block-core"),_e=g("taro-custom-wrapper-core")},"106":function(e,t,r){var o,n=r(17);!function(){"use strict";var c={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=classNames.apply(null,r);i&&e.push(i)}else if("object"===o)for(var a in r)c.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):"object"===n(r(111))&&r(111)?void 0===(o=function(){return classNames}.apply(t,[]))||(e.exports=o):window.classNames=classNames}()},"109":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),Object.defineProperty(t,"VantIcon",{"enumerable":!0,"get":function get(){return o.default}});var o=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(114))},"110":function(e,t,r){"use strict";var o,n;Object.defineProperty(t,"__esModule",{"value":!0}),t.IconColor=t.IconSize=void 0,t.IconSize=o,function(e){e.Inherit="inherit",e.Mini="mini",e.Small="small",e.Medium="medium",e.Large="large"}(o||(t.IconSize=o={})),t.IconColor=n,function(e){e.Inherit="inherit",e.Default="default",e.Primary="primary",e.Info="info",e.Success="success",e.Warning="warning",e.Danger="danger"}(n||(t.IconColor=n={}))},"111":function(e,t){(function(t){e.exports=t}).call(this,{})},"114":function(e,t,r){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function VantIcon(e){var t,r=e.className,a=e.style,u=e.size,s=void 0===u?i.IconSize.Medium:u,f=e.color,l=void 0===f?i.IconColor.Inherit:f,p=e.children,d=e.onClick;return o.createElement(c.View,{"className":(0,n.default)("van-icon","van-icon-".concat(p),"taroify-icon",(t={},_defineProperty(t,"taroify-icon-".concat(l),l),_defineProperty(t,"taroify-icon-".concat(s),s),t),r),"style":a,"onClick":d})};var o=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{"default":e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var c=o?Object.getOwnPropertyDescriptor(e,n):null;c&&(c.get||c.set)?Object.defineProperty(r,n,c):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(r(19)),n=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(r(106)),c=r(105),i=r(110);function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function _getRequireWildcardCache(){return e},e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e}},"115":function(e,t){e.exports=function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},"116":function(e,t,r){var o=r(117);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},"117":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.default=e.exports,e.exports.__esModule=!0},"121":function(e,t,r){var o=r(122),n=r(123),c=r(116),i=r(124);e.exports=function _slicedToArray(e,t){return o(e)||n(e,t)||c(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},"122":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},"123":function(e,t){e.exports=function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],o=!0,n=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(o=(i=a.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,c=e}finally{try{o||null==a.return||a.return()}finally{if(n)throw c}}return r}},e.exports.default=e.exports,e.exports.__esModule=!0},"124":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},"125":function(e,t){e.exports=function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},"126":function(e,t){function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},"127":function(e,t,r){var o=r(128);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),t&&o(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},"128":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.default=e.exports,e.exports.__esModule=!0},"129":function(e,t,r){var o=r(17).default,n=r(130);e.exports=function _possibleConstructorReturn(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?n(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},"130":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},"131":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.default=e.exports,e.exports.__esModule=!0},"132":function(e,t,r){var o=r(133),n=r(134),c=r(116),i=r(135);e.exports=function _toConsumableArray(e){return o(e)||n(e)||c(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},"133":function(e,t,r){var o=r(117);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"134":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},"135":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},"136":function(e,t,r){"use strict";r(33);var o=r(19),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},s=null,f=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(f=t.ref),t)a.call(t,o)&&!u.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":s,"ref":f,"props":c,"_owner":i.current}}t.jsx=q,t.jsxs=q},"138":function(e,t,r){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(e){return typeof e}:function _typeof(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{"value":!0}),t.default=function ArrowRight(e){var t=_extends({},e);return o.createElement(n.VantIcon,_extends({"children":"arrow"},t))};var o=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{"default":e};var t=_getRequireWildcardCache();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var c=o?Object.getOwnPropertyDescriptor(e,n):null;c&&(c.get||c.set)?Object.defineProperty(r,n,c):r[n]=e[n]}r.default=e,t&&t.set(e,r);return r}(r(19)),n=r(109);function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function _getRequireWildcardCache(){return e},e}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}},"160":function(e,t,r){e.exports={"Nav":"nav-module__Nav___C76la","NavTitle":"nav-module__NavTitle___1pJBq","NavBlock":"nav-module__NavBlock___3PGRQ"}},"161":function(e,t,r){e.exports={"Home":"index-module__Home___jrD41","HomeTitle":"index-module__HomeTitle___1-l8v","HomeLogo":"index-module__HomeLogo___3p7-H","HomeName":"index-module__HomeName___6BGzc","HomeDescription":"index-module__HomeDescription___2APFf"}},"204":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Home}));var o=r(105),n=(r(19),r(138)),c=r.n(n),i=r(160),a=r.n(i),u=r(104);function NavBlock(e){var t=e.title,r=e.href;return Object(u.jsxs)(o.Navigator,{"className":a.a.NavBlock,"url":r,"children":[t,Object(u.jsx)(c.a,{"size":"small"})]})}function Nav(e){var t=e.title,r=e.children;return Object(u.jsxs)(o.View,{"className":a.a.Nav,"children":[Object(u.jsx)(o.View,{"className":a.a.NavTitle,"children":t}),Object(u.jsx)(o.View,{"className":a.a.NavBlocks,"children":r})]})}var s=r(161),f=r.n(s);function Home(){return Object(u.jsxs)(o.View,{"className":f.a.Home,"children":[Object(u.jsxs)(o.View,{"className":f.a.HomeTitle,"children":[Object(u.jsx)(o.Image,{"className":f.a.HomeLogo,"mode":"aspectFit","src":"https://img01.yzcdn.cn/vant/logo.png"}),Object(u.jsx)(o.Text,{"className":f.a.HomeName,"children":"Taroify"})]}),Object(u.jsx)(o.View,{"className":f.a.HomeDescription,"children":"轻量、可靠的小程序端 Taro 组件库"}),Object(u.jsxs)(Nav,{"title":"基础组件","children":[Object(u.jsx)(NavBlock,{"href":"/pages/button/index","title":"Button 按钮"}),Object(u.jsx)(NavBlock,{"href":"/pages/cell/index","title":"Cell 单元格"}),Object(u.jsx)(NavBlock,{"href":"/pages/icon/index","title":"Icon 图标"}),Object(u.jsx)(NavBlock,{"href":"/pages/image/index","title":"Image 图片"}),Object(u.jsx)(NavBlock,{"href":"/pages/layout/index","title":"Layout 布局"}),Object(u.jsx)(NavBlock,{"href":"/pages/backdrop/index","title":"Backdrop 背景暗化"}),Object(u.jsx)(NavBlock,{"href":"/pages/popup/index","title":"Popup 弹出层"}),Object(u.jsx)(NavBlock,{"href":"/pages/transition/index","title":"Transition 动画"}),Object(u.jsx)(NavBlock,{"href":"/pages/toast/index","title":"Toast 轻提示"}),Object(u.jsx)(NavBlock,{"href":"/pages/loading/index","title":"Loading 加载"})]})]})}}}]);