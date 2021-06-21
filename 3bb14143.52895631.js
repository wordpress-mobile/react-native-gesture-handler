(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(92)),i={id:"rotation-gh",title:"RotationGestureHandler",sidebar_label:"Rotation"},c={unversionedId:"api/gesture-handlers/rotation-gh",id:"api/gesture-handlers/rotation-gh",isDocsHomePage:!1,title:"RotationGestureHandler",description:"A continuous gesture handler that can recognize a rotation gesture and track its movement.",source:"@site/docs/api/gesture-handlers/rotation-gh.md",slug:"/api/gesture-handlers/rotation-gh",permalink:"/react-native-gesture-handler/docs/api/gesture-handlers/rotation-gh",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gesture-handlers/rotation-gh.md",version:"current",sidebar_label:"Rotation",sidebar:"docs",previous:{title:"LongPressGestureHandler",permalink:"/react-native-gesture-handler/docs/api/gesture-handlers/longpress-gh"},next:{title:"FlingGestureHandler",permalink:"/react-native-gesture-handler/docs/api/gesture-handlers/fling-gh"}},s=[{value:"Properties",id:"properties",children:[]},{value:"Event data",id:"event-data",children:[{value:"<code>rotation</code>",id:"rotation",children:[]},{value:"<code>velocity</code>",id:"velocity",children:[]},{value:"<code>anchorX</code>",id:"anchorx",children:[]},{value:"<code>anchorY</code>",id:"anchory",children:[]}]},{value:"Example",id:"example",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A continuous gesture handler that can recognize a rotation gesture and track its movement."),Object(o.b)("p",null,"The handler ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/state#active"}),"activates")," when fingers are placed on the screen and change position in a proper way."),Object(o.b)("p",null,"Gesture callback can be used for continuous tracking of the rotation gesture. It provides information about the gesture such as the amount rotated, the focal point of the rotation (anchor), and its instantaneous velocity."),Object(o.b)("p",null,"The handler is implemented using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uirotationgesturerecognizer"}),"UIRotationGestureRecognizer")," on iOS and from scratch on Android."),Object(o.b)("h2",{id:"properties"},"Properties"),Object(o.b)("p",null,"Properties provided to ",Object(o.b)("inlineCode",{parentName:"p"},"RotationGestureHandler")," do not extend ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"common-gh#properties"}),"common set of properties from base handler class"),"."),Object(o.b)("h2",{id:"event-data"},"Event data"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"common-gh#event-data"}),"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",Object(o.b)("inlineCode",{parentName:"p"},"RotationGestureHandler"),":"),Object(o.b)("h3",{id:"rotation"},Object(o.b)("inlineCode",{parentName:"h3"},"rotation")),Object(o.b)("p",null,"Amount rotated, expressed in radians, from the gesture's focal point (anchor)."),Object(o.b)("h3",{id:"velocity"},Object(o.b)("inlineCode",{parentName:"h3"},"velocity")),Object(o.b)("p",null,"Instantaneous velocity, expressed in point units per second, of the gesture."),Object(o.b)("h3",{id:"anchorx"},Object(o.b)("inlineCode",{parentName:"h3"},"anchorX")),Object(o.b)("p",null,"X coordinate, expressed in points, of the gesture's central focal point (anchor)."),Object(o.b)("h3",{id:"anchory"},Object(o.b)("inlineCode",{parentName:"h3"},"anchorY")),Object(o.b)("p",null,"Y coordinate, expressed in points, of the gesture's central focal point (anchor)."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/examples/Example/src/scaleAndRotate/index.tsx"}),"scale and rotation example")," from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../../example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"class RotableBox extends React.Component {\n  _rotate = new Animated.Value(0);\n  _rotateStr = this._rotate.interpolate({\n    inputRange: [-100, 100],\n    outputRange: ['-100rad', '100rad'],\n  });\n  _lastRotate = 0;\n  _onRotateGestureEvent = Animated.event(\n    [{ nativeEvent: { rotation: this._rotate } }],\n    { useNativeDriver: USE_NATIVE_DRIVER }\n  );\n  _onRotateHandlerStateChange = (event) => {\n    if (event.nativeEvent.oldState === State.ACTIVE) {\n      this._lastRotate += event.nativeEvent.rotation;\n      this._rotate.setOffset(this._lastRotate);\n      this._rotate.setValue(0);\n    }\n  };\n  render() {\n    return (\n      <RotationGestureHandler\n        onGestureEvent={this._onRotateGestureEvent}\n        onHandlerStateChange={this._onRotateHandlerStateChange}>\n        <Animated.Image\n          style={[\n            styles.pinchableImage,\n            {\n              transform: [{ perspective: 200 }, { rotate: this._rotateStr }],\n            },\n          ]}\n        />\n      </RotationGestureHandler>\n    );\n  }\n}\n")))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);