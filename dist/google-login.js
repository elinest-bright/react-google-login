<<<<<<< HEAD
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GoogleLogin=t(require("react")):e.GoogleLogin=t(e.react)}(window,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(t){return e[t]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(t){t.exports=e},function(e,t,n){e.exports=n(3)()},function(e,t,n){e.exports=n(5)},function(e,t,n){"use strict";function o(){}var r=n(4);e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;t.length>n;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;t.length>n;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.r(t);var d=n(0),y=n.n(d),b=(n(1),function(){function e(t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this,(n=!(r=i(e).call(this,t))||"object"!==o(r)&&"function"!=typeof r?c(this):r).signIn=n.signIn.bind(c(c(n))),n.enableButton=n.enableButton.bind(c(c(n))),n.state={disabled:!0},n}var t,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(e,d.Component),t=e,(n=[{key:"componentDidMount",value:function(){var e,t,n,o,r,i=this,a=this.props,c=a.clientId,s=a.cookiePolicy,u=a.loginHint,l=a.hostedDomain,p=a.autoLoad,f=a.isSignedIn,d=a.fetchBasicProfile,y=a.redirectUri,b=a.discoveryDocs,g=a.onFailure,h=a.uxMode,m=a.scope,v=a.accessType,O=a.responseType,S=a.jsSrc;o=n=(e=document).getElementsByTagName(t="script")[0],r=n,(r=e.createElement(t)).id="google-login",r.src=S,o&&o.parentNode?o.parentNode.insertBefore(r,o):e.head.appendChild(r),r.onload=function(){var e={client_id:c,cookie_policy:s,login_hint:u,hosted_domain:l,fetch_basic_profile:d,discoveryDocs:b,ux_mode:h,redirect_uri:y,scope:m,access_type:v};"code"===O&&(e.access_type="offline"),window.gapi.load("auth2",function(){i.enableButton(),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(e).then(function(e){f&&e.isSignedIn.get()&&i.handleSigninSuccess(e.currentUser.get())},function(e){return g(e)}),p&&i.signIn()})}}},{key:"componentWillUnmount",value:function(){this.enableButton=function(){}}},{key:"enableButton",value:function(){this.setState({disabled:!1})}},{key:"signIn",value:function(e){var t=this;if(e&&e.preventDefault(),!this.state.disabled){var n=window.gapi.auth2.getAuthInstance(),o=this.props,r=o.onSuccess,i=o.onFailure,a=o.responseType,c={prompt:o.prompt};(0,o.onRequest)(),"code"===a?n.grantOfflineAccess(c).then(function(e){return r(e)},function(e){return i(e)}):n.signIn(c).then(function(e){return t.handleSigninSuccess(e)},function(e){return i(e)})}}},{key:"handleSigninSuccess",value:function(e){var t=e.getBasicProfile(),n=e.getAuthResponse();e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},this.props.onSuccess(e)}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.type,o=e.style,r=e.className,i=e.disabledStyle,a=e.buttonText,c=e.children,s=e.render,u=this.state.disabled||this.props.disabled;if(s)return s({onClick:this.signIn});var l=o||(r&&!o?{}:{display:"inline-block",background:"#d14836",color:"#fff",width:190,paddingTop:10,paddingBottom:10,borderRadius:2,border:"1px solid transparent",fontSize:16,fontWeight:"bold",fontFamily:"Roboto"}),p=u?Object.assign({},l,i):l;return y.a.createElement(t,{onClick:this.signIn,style:p,type:n,disabled:u,className:r},c||a)}}])&&r(t.prototype,n),e}());b.defaultProps={type:"button",tag:"button",buttonText:"Login with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},onRequest:function(){},jsSrc:"https://apis.google.com/js/client:platform.js"};var g=b,h=function(){function e(t){var n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this,(n=!(o=l(e).call(this,t))||"object"!==s(o)&&"function"!=typeof o?f(this):o).state={disabled:!0},n.signOut=n.signOut.bind(f(f(n))),n}var t,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(e,d.Component),t=e,(n=[{key:"componentDidMount",value:function(){var e,t,n,o,r,i=this,a=this.props.jsSrc;o=n=(e=document).getElementsByTagName(t="script")[0],r=n,(r=e.createElement(t)).id="google-login",r.src=a,o&&o.parentNode?o.parentNode.insertBefore(r,o):e.head.appendChild(r),r.onload=function(){window.gapi.load("auth2",function(){i.setState({disabled:!1})})}}},{key:"signOut",value:function(){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.signOut().then(this.props.onLogoutSuccess)}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.style,o=e.className,r=e.disabledStyle,i=e.buttonText,a=e.children,c=e.render;if(c)return c({onClick:this.signOut});var s=this.state.disabled||this.props.disabled,u=n||(o&&!n?{}:{display:"inline-block",background:"#d14836",color:"#fff",width:190,paddingTop:10,paddingBottom:10,borderRadius:2,border:"1px solid transparent",fontSize:16,fontWeight:"bold",fontFamily:"Roboto"}),l=s?Object.assign({},u,r):u;return y.a.createElement(t,{onClick:this.signOut,style:l,disabled:s,className:o},a||i)}}])&&u(t.prototype,n),e}();h.defaultProps={tag:"button",buttonText:"Logout",disabledStyle:{opacity:.6},jsSrc:"https://apis.google.com/js/client:platform.js"};var m=h;n.d(t,"default",function(){return g}),n.d(t,"GoogleLogin",function(){return g}),n.d(t,"GoogleLogout",function(){return m})}])});
=======
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GoogleLogin=t(require("react")):e.GoogleLogin=t(e.react)}(this,function(e){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),c=n(2),u=(n.n(c),n(9)),l=n(10),f=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.signIn=n.signIn.bind(n),n.enableButton=n.enableButton.bind(n),n.state={disabled:!0,hovered:!1,active:!1},n}return i(t,e),p(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.clientId,o=t.cookiePolicy,r=t.loginHint,i=t.hostedDomain,a=t.autoLoad,s=t.isSignedIn,c=t.fetchBasicProfile,u=t.redirectUri,l=t.discoveryDocs,f=t.onFailure,p=t.uxMode,d=t.scope,g=t.accessType,h=t.responseType,y=t.jsSrc;!function(e,t,n,o){var r=e.getElementsByTagName(t)[0],i=r,a=r;a=e.createElement(t),a.id="google-login",a.src=y,i&&i.parentNode?i.parentNode.insertBefore(a,i):e.head.appendChild(a),a.onload=o}(document,"script",0,function(){var t={client_id:n,cookie_policy:o,login_hint:r,hosted_domain:i,fetch_basic_profile:c,discoveryDocs:l,ux_mode:p,redirect_uri:u,scope:d,access_type:g};"code"===h&&(t.access_type="offline"),window.gapi.load("auth2",function(){e.enableButton(),window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init(t).then(function(t){s&&t.isSignedIn.get()&&e.handleSigninSuccess(t.currentUser.get())},function(e){return f(e)}),a&&e.signIn()})})}},{key:"componentWillUnmount",value:function(){this.enableButton=function(){}}},{key:"enableButton",value:function(){this.setState({disabled:!1})}},{key:"signIn",value:function(e){var t=this;if(e&&e.preventDefault(),!this.state.disabled){var n=window.gapi.auth2.getAuthInstance(),o=this.props,r=o.onSuccess,i=o.onRequest,a=o.onFailure,s=o.prompt,c=o.responseType,u={prompt:s};i(),"code"===c?n.grantOfflineAccess(u).then(function(e){return r(e)},function(e){return a(e)}):n.signIn(u).then(function(e){return t.handleSigninSuccess(e)},function(e){return a(e)})}}},{key:"handleSigninSuccess",value:function(e){var t=e.getBasicProfile(),n=e.getAuthResponse();e.googleId=t.getId(),e.tokenObj=n,e.tokenId=n.id_token,e.accessToken=n.access_token,e.profileObj={googleId:t.getId(),imageUrl:t.getImageUrl(),email:t.getEmail(),name:t.getName(),givenName:t.getGivenName(),familyName:t.getFamilyName()},this.props.onSuccess(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.tag,o=t.type,r=t.style,i=t.className,a=t.disabledStyle,c=t.buttonText,p=t.children,d=t.render,g=t.theme,h=t.icon,y=this.state.disabled||this.props.disabled;if(d)return d({onClick:this.signIn});var b={backgroundColor:"dark"===g?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===g?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},v={cursor:"pointer",opacity:.9},m={cursor:"pointer",backgroundColor:"dark"===g?"#3367D6":"#eee",color:"dark"===g?"#fff":"rgba(0, 0, 0, .54)",opacity:1},S=function(){return r||(i&&!r?{}:b)}(),_=function(){return y?Object.assign({},S,a):e.state.active?Object.assign({},S,m):e.state.hovered?Object.assign({},S,v):S}();return s.a.createElement(n,{onMouseEnter:function(){return e.setState({hovered:!0})},onMouseLeave:function(){return e.setState({hovered:!1,active:!1})},onMouseDown:function(){return e.setState({active:!0})},onMouseUp:function(){return e.setState({active:!1})},onClick:this.signIn,style:_,type:o,disabled:y,className:i},[h&&f(u.a,{active:this.state.active},1),f(l.a,{icon:h},2,p||c)])}}]),t}(a.Component);d.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!1,uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){},jsSrc:"https://apis.google.com/js/client:platform.js"},t.a=d},function(e,t,n){"function"==typeof Symbol&&Symbol.iterator,e.exports=n(5)()},function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);n.d(t,"default",function(){return o.a}),n.d(t,"GoogleLogin",function(){return o.a});var r=n(11);n.d(t,"GoogleLogout",function(){return r.a})},function(e,t,n){"use strict";var o=n(6),r=n(7),i=n(8);e.exports=function(){function e(e,t,n,o,a,s){s!==i&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t,n){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){"use strict";function o(e,t,n,o,i,a,s,c){if(r(t),!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,i,a,s,c],f=0;u=new Error(t.replace(/%s/g,function(){return l[f++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}var r=function(e){};e.exports=o},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var o=n(0),r=(n.n(o),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}()),i=r("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},void 0,r("g",{fill:"#000",fillRule:"evenodd"},void 0,r("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),r("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),r("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),r("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),r("path",{fill:"none",d:"M0 0h18v18H0z"})));t.a=function(e){var t=e.active;return r("div",{style:{marginRight:10,background:t?"#eee":"#fff",padding:10,borderRadius:2}},void 0,i)}},function(e,t,n){"use strict";var o=n(0),r=(n.n(o),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var i=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+3];n.children=c}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}());t.a=function(e){var t=e.children,n=e.icon;return r("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:n?0:10,paddingTop:10,paddingBottom:10}},void 0,t)}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=n(0),s=n.n(a),c=n(2),u=(n.n(c),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),l=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={disabled:!0},n.signOut=n.signOut.bind(n),n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.jsSrc;!function(e,n,o,r){var i=e.getElementsByTagName(n)[0],a=i,s=i;s=e.createElement(n),s.id="google-login",s.src=t,a&&a.parentNode?a.parentNode.insertBefore(s,a):e.head.appendChild(s),s.onload=r}(document,"script",0,function(){window.gapi.load("auth2",function(){e.setState({disabled:!1})})})}},{key:"signOut",value:function(){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.signOut().then(this.props.onLogoutSuccess)}},{key:"render",value:function(){var e=this.props,t=e.tag,n=e.style,o=e.className,r=e.disabledStyle,i=e.buttonText,a=e.children,c=e.render;if(c)return c({onClick:this.signOut});var u=this.state.disabled||this.props.disabled,l={display:"inline-block",background:"#d14836",color:"#fff",width:190,paddingTop:10,paddingBottom:10,borderRadius:2,border:"1px solid transparent",fontSize:16,fontWeight:"bold",fontFamily:"Roboto"},f=function(){return n||(o&&!n?{}:l)}(),p=function(){return u?Object.assign({},f,r):f}();return s.a.createElement(t,{onClick:this.signOut,style:p,disabled:u,className:o},a||i)}}]),t}(a.Component);l.defaultProps={tag:"button",buttonText:"Logout",disabledStyle:{opacity:.6},jsSrc:"https://apis.google.com/js/client:platform.js"},t.a=l}])});
>>>>>>> d1099911e9b5e14ded7a72a2d837375e903e9f15
