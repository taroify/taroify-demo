/*! For license information please see 20.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"108":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var a=r(6);var s=function createCommonjsModule(e,t,r){return e(r={"path":t,"exports":{},"require":function require(e,t){return function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}((function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],r=0;r<arguments.length;r++){var s=arguments[r];if(s){var i=Object(a.a)(s);if("string"===i||"number"===i)e.push(s);else if(Array.isArray(s)&&s.length){var n=classNames.apply(null,s);n&&e.push(n)}else if("object"===i)for(var c in s)t.call(s,c)&&s[c]&&e.push(c)}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}))},"85":function(e,t,r){"use strict";r.r(t),r.d(t,"taro_navigator_core",(function(){return u}));var a=r(8),s=r(3),i=r(5),n=r(29),c=r(108),o=r(32),u=function(){function Navigator(e){Object(s.a)(this,Navigator),Object(n.g)(this,e),this.onSuccess=Object(n.c)(this,"cuccess",7),this.onFail=Object(n.c)(this,"fail",7),this.onComplete=Object(n.c)(this,"Complete",7),this.openType="navigate",this.isHover=!1,this.delta=0}return Object(i.a)(Navigator,[{"key":"onClick","value":function onClick(){var e=this.openType,t=this.onSuccess,r=this.onFail,a=this.onComplete,s=Promise.resolve();switch(e){case"navigate":s=o.navigateTo({"url":this.url});break;case"redirect":s=o.redirectTo({"url":this.url});break;case"switchTab":s=o.switchTab({"url":this.url});break;case"reLaunch":s=o.reLaunch({"url":this.url});break;case"navigateBack":s=o.navigateBack({"delta":this.delta});break;case"exit":s=Promise.reject(new Error('navigator:fail 暂不支持"openType: exit"'))}s&&s.then((function(e){t.emit(e)})).catch((function(e){r.emit(e)})).finally((function(){a.emit()}))}},{"key":"render","value":function render(){var e=this.isHover,t=this.hoverClass;return Object(n.e)(n.a,{"class":Object(c.a)(Object(a.a)({},t,e))})}}]),Navigator}();u.style=".navigator-hover{background:#efefef}"}}]);