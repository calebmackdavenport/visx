_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[88],{"/WrK":function(e,t,n){"use strict";n.r(t);var i=n("jg1C"),r=n("ERkP"),a=n("zjfJ"),o=n("HbGN"),l=n("XDdH"),s=n.n(l),u=n("0yf5"),c=n("O94r"),d=n.n(c),p=n("uJnh"),f=n.n(p),m=n("O3m4"),y=n("zygG"),h=n("HlJr");function g(e,t,n,i,r){var a;switch(e){case"center":return r;case"min":return null!==n&&void 0!==n?n:0;case"max":return null!==i&&void 0!==i?i:0;case"outside":default:return null!==(a=(null!==t&&void 0!==t?t:0)<r?n:i)&&void 0!==a?a:0}}function b(e){var t=e.from,n=e.to;return{fromX:t.x,toX:n.x,fromY:t.y,toY:n.y,opacity:1}}function O(e){var t=e.scale,n=e.animateXOrY,i=e.animationTrajectory,a=void 0===i?"outside":i,o="x"===n;return Object(r.useMemo)((function(){var e=t.range().map(h.a),n=Object(y.a)(e,2),i=n[0],r=n[1],l=null!=r&&null!=i&&r<i?[r,i]:[i,r],s=Object(y.a)(l,2),u=s[0],c=s[1],d=null!=r&&null!=i?Math.abs(r-i):0,p=(null!==u&&void 0!==u?u:0)+d/2,f=a;o||"min"!==a||(f="max"),o||"max"!==a||(f="min");var m=function(e){var t=e.from,n=e.to;return{fromX:o?g(f,t.x,u,c,p):t.x,toX:o?g(f,t.x,u,c,p):n.x,fromY:o?t.y:g(f,t.y,u,c,p),toY:o?n.y:g(f,t.y,u,c,p),opacity:0}};return{from:m,leave:m,enter:b,update:b}}),[t,o,a])}try{O.displayName="useLineTransitionConfig",O.__docgenInfo={description:"A hook that returns `react-spring` transition config for animating a Line\nhorizontally, vertically, and from a specific starting point.",displayName:"useLineTransitionConfig",props:{scale:{defaultValue:null,description:"Scale along which animation occurs.",name:"scale",required:!0,type:{name:"Scale"}},animateXOrY:{defaultValue:null,description:"Whether to animate the `x` or `y` values of a Line.",name:"animateXOrY",required:!0,type:{name:'"x" | "y"'}},animationTrajectory:{defaultValue:null,description:"The scale position entering lines come from, and exiting lines leave to.",name:"animationTrajectory",required:!1,type:{name:'"max" | "min" | "center" | "outside" | undefined'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-react-spring/src/spring-configs/useLineTransitionConfig.ts#useLineTransitionConfig"]={docgenInfo:O.__docgenInfo,name:"useLineTransitionConfig",path:"../visx-react-spring/src/spring-configs/useLineTransitionConfig.ts#useLineTransitionConfig"})}catch(z){}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t=e.hideTicks,n=e.horizontal,r=e.orientation,a=e.scale,o=e.tickClassName,l=e.tickComponent,s=e.tickLabelProps,c=e.tickStroke,p=void 0===c?"#222":c,y=e.tickTransform,h=e.ticks,g=e.animationTrajectory,b=Object(u.useTransition)(h,k(k({},O({scale:a,animateXOrY:n?"x":"y",animationTrajectory:g})),{},{keys:function(e){return"".concat(e.value)}}));return Object(i.jsx)(i.Fragment,{children:b((function(e,n,a,c){var h,g,b=e.fromX,O=e.toX,x=e.fromY,j=e.toY,v=e.opacity,T=a.key,S=null!==(h=null!==(g=s[c])&&void 0!==g?g:s[0])&&void 0!==h?h:{};return null==n||null==T?null:Object(i.jsxs)(u.animated.g,{className:d()("visx-axis-tick",o),transform:y,children:[!t&&Object(i.jsx)(u.animated.line,{x1:b,x2:O,y1:x,y2:j,stroke:p,strokeLinecap:"square",strokeOpacity:v}),Object(i.jsx)(u.animated.g,{transform:Object(u.to)([O,j],(function(e,t){var n;return"translate(".concat(e,",").concat(t+(r===f.a.bottom&&"number"===typeof S.fontSize?null!==(n=S.fontSize)&&void 0!==n?n:10:0),")")})),opacity:v,children:l?l(k(k({},S),{},{x:O,y:j,formattedValue:null===n||void 0===n?void 0:n.formattedValue})):Object(i.jsx)(m.a,k(k({},S),{},{children:null===n||void 0===n?void 0:n.formattedValue}))},c)]},T)}))})}try{j.displayName="AnimatedTicks",j.__docgenInfo={description:"",displayName:"AnimatedTicks",props:{tickLabelProps:{defaultValue:null,description:"",name:"tickLabelProps",required:!0,type:{name:"Partial<TextProps>[]"}},scale:{defaultValue:null,description:"A [d3](https://github.com/d3/d3-scale) or [visx](https://github.com/airbnb/visx/tree/master/packages/visx-scale) scale function.",name:"scale",required:!0,type:{name:"Scale"}},orientation:{defaultValue:null,description:"Placement of the axis",name:"orientation",required:!1,type:{name:'"left" | "top" | "bottom" | "right" | undefined'}},strokeWidth:{defaultValue:null,description:"The pixel value for the width of the lines.",name:"strokeWidth",required:!1,type:{name:"string | number | undefined"}},horizontal:{defaultValue:null,description:"Whether this axis is horizontal",name:"horizontal",required:!0,type:{name:"boolean"}},hideTicks:{defaultValue:null,description:"If true, will hide the ticks (but not the tick labels).",name:"hideTicks",required:!1,type:{name:"boolean | undefined"}},tickLineProps:{defaultValue:null,description:"Props to be applied to individual tick lines.",name:"tickLineProps",required:!1,type:{name:'Pick<SVGProps<SVGLineElement>, "string" | "children" | "className" | "width" | "height" | "scale" | "color" | "id" | "lang" | "max" | "media" | "method" | ... 455 more ... | "key"> | undefined'}},tickClassName:{defaultValue:null,description:"The class name applied to each tick group.",name:"tickClassName",required:!1,type:{name:"string | undefined"}},tickComponent:{defaultValue:null,description:"Override the component used to render tick labels (instead of <Text /> from @visx/text).",name:"tickComponent",required:!1,type:{name:"((tickRendererProps: TickRendererProps) => ReactNode) | undefined"}},tickStroke:{defaultValue:{value:"#222"},description:"The color for the tick's stroke value.",name:"tickStroke",required:!1,type:{name:"string | undefined"}},tickTransform:{defaultValue:null,description:"A custom SVG transform value to be applied to each tick group.",name:"tickTransform",required:!1,type:{name:"string | undefined"}},ticks:{defaultValue:null,description:"Computed ticks with positions and formatted value",name:"ticks",required:!0,type:{name:"ComputedTick<Scale>[]"}},animationTrajectory:{defaultValue:null,description:"",name:"animationTrajectory",required:!1,type:{name:'"max" | "min" | "center" | "outside" | undefined'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-react-spring/src/axis/AnimatedTicks.tsx#AnimatedTicks"]={docgenInfo:j.__docgenInfo,name:"AnimatedTicks",path:"../visx-react-spring/src/axis/AnimatedTicks.tsx#AnimatedTicks"})}catch(z){}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t=e.animationTrajectory,n=e.tickComponent,a=Object(o.a)(e,["animationTrajectory","tickComponent"]),l=Object(r.useMemo)((function(){return function(e){return Object(i.jsx)(j,T(T({},e),{},{tickComponent:n,animationTrajectory:t}))}}),[t,n]);return Object(i.jsx)(s.a,T(T({},a),{},{ticksComponent:l}))}try{S.displayName="AnimatedAxis",S.__docgenInfo={description:"",displayName:"AnimatedAxis",props:{children:{defaultValue:null,description:"For more control over rendering or to add event handlers to datum, pass a function as children.",name:"children",required:!1,type:{name:"((renderProps: AxisRendererProps<Scale>) => ReactNode) | undefined"}},scale:{defaultValue:null,description:"A [d3](https://github.com/d3/d3-scale) or [visx](https://github.com/airbnb/visx/tree/master/packages/visx-scale) scale function.",name:"scale",required:!0,type:{name:"Scale"}},orientation:{defaultValue:null,description:"Placement of the axis",name:"orientation",required:!1,type:{name:'"left" | "top" | "bottom" | "right" | undefined'}},stroke:{defaultValue:null,description:"The color for the stroke of the lines.",name:"stroke",required:!1,type:{name:"string | undefined"}},strokeDasharray:{defaultValue:null,description:"The pattern of dashes in the stroke.",name:"strokeDasharray",required:!1,type:{name:"string | undefined"}},strokeWidth:{defaultValue:null,description:"The pixel value for the width of the lines.",name:"strokeWidth",required:!1,type:{name:"string | number | undefined"}},left:{defaultValue:null,description:"A left pixel offset applied to the entire axis.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"A top pixel offset applied to the entire axis.",name:"top",required:!1,type:{name:"number | undefined"}},label:{defaultValue:null,description:"The text for the axis label.",name:"label",required:!1,type:{name:"string | undefined"}},numTicks:{defaultValue:null,description:"The number of ticks wanted for the axis (note this is approximate)",name:"numTicks",required:!1,type:{name:"number | undefined"}},tickValues:{defaultValue:null,description:"An array of values that determine the number and values of the ticks. Falls back to `scale.ticks()` or `.domain()`.",name:"tickValues",required:!1,type:{name:"ScaleInput<Scale>[] | undefined"}},axisLineClassName:{defaultValue:null,description:"The class name applied to the axis line element.",name:"axisLineClassName",required:!1,type:{name:"string | undefined"}},hideAxisLine:{defaultValue:null,description:"If true, will hide the axis line.",name:"hideAxisLine",required:!1,type:{name:"boolean | undefined"}},hideTicks:{defaultValue:null,description:"If true, will hide the ticks (but not the tick labels).",name:"hideTicks",required:!1,type:{name:"boolean | undefined"}},hideZero:{defaultValue:null,description:"If true, will hide the '0' value tick and tick label.",name:"hideZero",required:!1,type:{name:"boolean | undefined"}},labelClassName:{defaultValue:null,description:"The class name applied to the axis label text element.",name:"labelClassName",required:!1,type:{name:"string | undefined"}},labelOffset:{defaultValue:null,description:"Pixel offset of the axis label (does not include tick label font size, which is accounted for automatically)",name:"labelOffset",required:!1,type:{name:"number | undefined"}},labelProps:{defaultValue:null,description:"Props applied to the axis label component.",name:"labelProps",required:!1,type:{name:"Partial<TextProps> | undefined"}},rangePadding:{defaultValue:null,description:"Pixel padding to apply to both sides of the axis.",name:"rangePadding",required:!1,type:{name:"number | undefined"}},tickLineProps:{defaultValue:null,description:"Props to be applied to individual tick lines.",name:"tickLineProps",required:!1,type:{name:'Pick<SVGProps<SVGLineElement>, "string" | "children" | "className" | "width" | "height" | "scale" | "color" | "id" | "lang" | "max" | "media" | "method" | ... 455 more ... | "key"> | undefined'}},tickClassName:{defaultValue:null,description:"The class name applied to each tick group.",name:"tickClassName",required:!1,type:{name:"string | undefined"}},tickComponent:{defaultValue:null,description:"Override the component used to render tick labels (instead of <Text /> from @visx/text).",name:"tickComponent",required:!1,type:{name:"((tickRendererProps: TickRendererProps) => ReactNode) | undefined"}},tickFormat:{defaultValue:null,description:"A [d3 formatter](https://github.com/d3/d3-scale/blob/master/README.md#continuous_tickFormat) for the tick text.",name:"tickFormat",required:!1,type:{name:"TickFormatter<ScaleInput<Scale>> | undefined"}},tickLabelProps:{defaultValue:null,description:"A function that returns props for a given tick label.",name:"tickLabelProps",required:!1,type:{name:"TickLabelProps<ScaleInput<Scale>> | undefined"}},tickLength:{defaultValue:null,description:"The length of the tick lines.",name:"tickLength",required:!1,type:{name:"number | undefined"}},tickStroke:{defaultValue:null,description:"The color for the tick's stroke value.",name:"tickStroke",required:!1,type:{name:"string | undefined"}},tickTransform:{defaultValue:null,description:"A custom SVG transform value to be applied to each tick group.",name:"tickTransform",required:!1,type:{name:"string | undefined"}},axisClassName:{defaultValue:null,description:"The class name applied to the outermost axis group element.",name:"axisClassName",required:!1,type:{name:"string | undefined"}},animationTrajectory:{defaultValue:null,description:"",name:"animationTrajectory",required:!1,type:{name:'"max" | "min" | "center" | "outside" | undefined'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-react-spring/src/axis/AnimatedAxis.tsx#AnimatedAxis"]={docgenInfo:S.__docgenInfo,name:"AnimatedAxis",path:"../visx-react-spring/src/axis/AnimatedAxis.tsx#AnimatedAxis"})}catch(z){}var w=n("mv6+"),P=n.n(w);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e){var t=e.scale,n=e.lines,r=e.animationTrajectory,a=e.animateXOrY,l=e.lineKey,s=e.lineStyle,c=Object(o.a)(e,["scale","lines","animationTrajectory","animateXOrY","lineKey","lineStyle"]),d=Object(u.useTransition)(n,A(A({},O({scale:t,animateXOrY:a,animationTrajectory:r})),{},{key:l}));return Object(i.jsx)(i.Fragment,{children:d((function(e,t,n){var r=e.fromX,a=e.toX,o=e.fromY,l=e.toY,d=e.opacity,p=n.key;return Object(i.jsx)(u.animated.line,A({x1:r,x2:a,y1:o,y2:l,strokeOpacity:d,style:s},c),p)}))})}try{q.displayName="AnimatedGridLines",q.__docgenInfo={description:"",displayName:"AnimatedGridLines",props:{lines:{defaultValue:null,description:"",name:"lines",required:!0,type:{name:"GridLines"}},lineKey:{defaultValue:null,description:"",name:"lineKey",required:!0,type:{name:"(line: { from: { x?: number | undefined; y?: number | undefined; }; to: { x?: number | undefined; y?: number | undefined; }; }) => string"}},scale:{defaultValue:null,description:"",name:"scale",required:!0,type:{name:"Scale"}},animationTrajectory:{defaultValue:null,description:"The scale position entering lines come from, and exiting lines leave to.",name:"animationTrajectory",required:!1,type:{name:'"max" | "min" | "center" | "outside" | undefined'}},animateXOrY:{defaultValue:null,description:"Whether to animate the `x` or `y` values of a Line.",name:"animateXOrY",required:!0,type:{name:'"x" | "y"'}},lineStyle:{defaultValue:null,description:"Styles to apply as grid line style.",name:"lineStyle",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-react-spring/src/grid/AnimatedGridLines.tsx#AnimatedGridLines"]={docgenInfo:q.__docgenInfo,name:"AnimatedGridLines",path:"../visx-react-spring/src/grid/AnimatedGridLines.tsx#AnimatedGridLines"})}catch(z){}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function _(e){var t=e.scale,n=e.height,r=e.numTicks,l=e.tickValues,s=(e.offset,e.className),u=e.animationTrajectory,c=e.top,d=e.left,p=Object(o.a)(e,["scale","height","numTicks","tickValues","offset","className","animationTrajectory","top","left"]);return Object(i.jsx)(P.a,{scale:t,height:n,numTicks:r,tickValues:l,className:s,top:c,left:d,children:function(e){var n=e.lines;return Object(i.jsx)(q,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({scale:t,lines:n,animationTrajectory:u,animateXOrY:"x",lineKey:function(e){var t,n;return String(null!==(t=null===e||void 0===e||null===(n=e.from)||void 0===n?void 0:n.x)&&void 0!==t?t:"")}},p))}})}try{_.displayName="AnimatedGridColumns",_.__docgenInfo={description:"",displayName:"AnimatedGridColumns",props:{className:{defaultValue:null,description:"classname to apply to line group element.",name:"className",required:!1,type:{name:"string | undefined"}},height:{defaultValue:null,description:"Total height of each grid column line.",name:"height",required:!0,type:{name:"number"}},scale:{defaultValue:null,description:"`@visx/scale` or `d3-scale` object used to convert value to position.",name:"scale",required:!0,type:{name:"Scale"}},offset:{defaultValue:null,description:"Pixel offset to apply as a translation (y- for Rows, x- for Columns) to each grid lines.",name:"offset",required:!1,type:{name:"number | undefined"}},stroke:{defaultValue:null,description:"Grid line stroke color.",name:"stroke",required:!1,type:{name:"string | undefined"}},strokeDasharray:{defaultValue:null,description:"Grid line stroke-dasharray attribute.",name:"strokeDasharray",required:!1,type:{name:"string | undefined"}},strokeWidth:{defaultValue:null,description:"Grid line stroke thickness.",name:"strokeWidth",required:!1,type:{name:"string | number | undefined"}},left:{defaultValue:null,description:"Left offset to apply to glyph g element container.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"Top offset to apply to glyph g element container.",name:"top",required:!1,type:{name:"number | undefined"}},numTicks:{defaultValue:null,description:"Approximate number of grid lines. Approximate due to d3 alogrithm, specify `tickValues` for precise control.",name:"numTicks",required:!1,type:{name:"number | undefined"}},lineStyle:{defaultValue:null,description:"Styles to apply as grid line style.",name:"lineStyle",required:!1,type:{name:"CSSProperties | undefined"}},tickValues:{defaultValue:null,description:"Exact values used to generate grid lines using `scale`.\nOverrides `numTicks` if specified.",name:"tickValues",required:!1,type:{name:"ScaleInput<Scale>[] | undefined"}},animationTrajectory:{defaultValue:null,description:"",name:"animationTrajectory",required:!1,type:{name:'"max" | "min" | "center" | "outside" | undefined'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-react-spring/src/grid/AnimatedGridColumns.tsx#AnimatedGridColumns"]={docgenInfo:_.__docgenInfo,name:"AnimatedGridColumns",path:"../visx-react-spring/src/grid/AnimatedGridColumns.tsx#AnimatedGridColumns"})}catch(z){}var E=n("0XzA"),R=n.n(E);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function L(e){var t=e.scale,n=e.width,r=e.numTicks,l=e.tickValues,s=(e.offset,e.className),u=e.animationTrajectory,c=e.top,d=e.left,p=Object(o.a)(e,["scale","width","numTicks","tickValues","offset","className","animationTrajectory","top","left"]);return Object(i.jsx)(R.a,{scale:t,width:n,numTicks:r,tickValues:l,className:s,top:c,left:d,children:function(e){var n=e.lines;return Object(i.jsx)(q,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({scale:t,lines:n,animationTrajectory:u,animateXOrY:"y",lineKey:function(e){var t,n;return String(null!==(t=null===e||void 0===e||null===(n=e.from)||void 0===n?void 0:n.y)&&void 0!==t?t:"")}},p))}})}try{L.displayName="AnimatedGridRows",L.__docgenInfo={description:"",displayName:"AnimatedGridRows",props:{className:{defaultValue:null,description:"classname to apply to line group element.",name:"className",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Total width of each grid row line.",name:"width",required:!0,type:{name:"number"}},scale:{defaultValue:null,description:"`@visx/scale` or `d3-scale` object used to convert value to position.",name:"scale",required:!0,type:{name:"Scale"}},offset:{defaultValue:null,description:"Pixel offset to apply as a translation (y- for Rows, x- for Columns) to each grid lines.",name:"offset",required:!1,type:{name:"number | undefined"}},stroke:{defaultValue:null,description:"Grid line stroke color.",name:"stroke",required:!1,type:{name:"string | undefined"}},strokeDasharray:{defaultValue:null,description:"Grid line stroke-dasharray attribute.",name:"strokeDasharray",required:!1,type:{name:"string | undefined"}},strokeWidth:{defaultValue:null,description:"Grid line stroke thickness.",name:"strokeWidth",required:!1,type:{name:"string | number | undefined"}},left:{defaultValue:null,description:"Left offset to apply to glyph g element container.",name:"left",required:!1,type:{name:"number | undefined"}},top:{defaultValue:null,description:"Top offset to apply to glyph g element container.",name:"top",required:!1,type:{name:"number | undefined"}},numTicks:{defaultValue:null,description:"Approximate number of grid lines. Approximate due to d3 alogrithm, specify `tickValues` for precise control.",name:"numTicks",required:!1,type:{name:"number | undefined"}},lineStyle:{defaultValue:null,description:"Styles to apply as grid line style.",name:"lineStyle",required:!1,type:{name:"CSSProperties | undefined"}},tickValues:{defaultValue:null,description:"Exact values used to generate grid lines using `scale`.\nOverrides `numTicks` if specified.",name:"tickValues",required:!1,type:{name:"ScaleInput<Scale>[] | undefined"}},animationTrajectory:{defaultValue:null,description:"",name:"animationTrajectory",required:!1,type:{name:'"max" | "min" | "center" | "outside" | undefined'}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../visx-react-spring/src/grid/AnimatedGridRows.tsx#AnimatedGridRows"]={docgenInfo:L.__docgenInfo,name:"AnimatedGridRows",path:"../visx-react-spring/src/grid/AnimatedGridRows.tsx#AnimatedGridRows"})}catch(z){}var G=n("QnPE"),D=n("smMw"),I=[S,_,L],Y=[D.default];t.default=function(){return Object(i.jsx)(G.a,{components:I,examples:Y,readme:'# @visx/react-spring\n\n<a title="@visx/react-spring npm downloads" href="https://www.npmjs.com/package/@visx/react-spring">\n  <img src="https://img.shields.io/npm/dm/@visx/react-spring.svg?style=flat-square" />\n</a>\n\nAlthough `visx` is largely unopinioned on animation, there is value in abstracting the complexity +\nboilerplate of building **animated** `visx` visualization components. This package requires\n`react-spring` as a `peerDependency` (to be compatible with any usage within your app) and exports\nall `visx` components that depend on `react-spring`.\n\n[`react-spring`](https://www.react-spring.io/) provides performant primitives for animating react\ncomponents and is our recommended library for making animated charts. In order to minimize\n`react-spring` as a dependency across other `visx` packages, we\'ve consolidated components which\ndepend on it here.\n\n## Installation\n\n```\nnpm install --save react-spring @visx/react-spring\n```\n',visxPackage:"react-spring"})}},"201w":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("J4UP");function r(e){return Object(i.a)(e)}},"Cf/J":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("aWzz"),r=n.n(i),a=n("ERkP"),o=n.n(a),l=["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"];function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function u(e){var t=e.children,n=e.id,i=e.from,r=e.to,a=e.x1,u=e.y1,c=e.x2,d=e.y2,p=e.fromOffset,f=void 0===p?"0%":p,m=e.fromOpacity,y=void 0===m?1:m,h=e.toOffset,g=void 0===h?"100%":h,b=e.toOpacity,O=void 0===b?1:b,x=e.rotate,k=e.transform,j=e.vertical,v=void 0===j||j,T=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l),S=a,w=c,P=u,V=d;return!v||S||w||P||V||(S="0",w="0",P="0",V="1"),o.a.createElement("defs",null,o.a.createElement("linearGradient",s({id:n,x1:S,y1:P,x2:w,y2:V,gradientTransform:x?"rotate("+x+")":k},T),!!t&&t,!t&&o.a.createElement("stop",{offset:f,stopColor:i,stopOpacity:y}),!t&&o.a.createElement("stop",{offset:g,stopColor:r,stopOpacity:O})))}u.propTypes={id:r.a.string.isRequired,from:r.a.string,to:r.a.string,x1:r.a.oneOfType([r.a.string,r.a.number]),x2:r.a.oneOfType([r.a.string,r.a.number]),y1:r.a.oneOfType([r.a.string,r.a.number]),y2:r.a.oneOfType([r.a.string,r.a.number]),fromOffset:r.a.oneOfType([r.a.string,r.a.number]),fromOpacity:r.a.oneOfType([r.a.string,r.a.number]),toOffset:r.a.oneOfType([r.a.string,r.a.number]),toOpacity:r.a.oneOfType([r.a.string,r.a.number]),rotate:r.a.oneOfType([r.a.string,r.a.number]),transform:r.a.string,children:r.a.node,vertical:r.a.bool}},HbGN:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return i}))},J4UP:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const i=1/4294967296;function r(e=Math.random()){let t=0|(0<=e&&e<1?e/i:Math.abs(e));return()=>(t=1664525*t+1013904223|0,i*(t>>>0))}},WPYZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/react-spring",function(){return n("/WrK")}])},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=p;var i=u(n("aWzz")),r=u(n("FGHv")),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var i={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(i,a,o):i[a]=e[a]}i.default=e,n&&n.set(e,i);return i}(n("ERkP")),o=u(n("LaGA")),l=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"];function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function u(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var d=[];function p(e){var t=e.className,n=e.children,i=e.debounceTime,s=void 0===i?300:i,u=e.ignoreDimensions,p=void 0===u?d:u,f=e.parentSizeStyles,m=void 0===f?{width:"100%",height:"100%"}:f,y=e.enableDebounceLeadingCall,h=void 0===y||y,g=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,l),b=(0,a.useRef)(null),O=(0,a.useRef)(0),x=(0,a.useState)({width:0,height:0,top:0,left:0}),k=x[0],j=x[1],v=(0,a.useMemo)((function(){var e=Array.isArray(p)?p:[p];return(0,r.default)((function(t){j((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),s,{leading:h})}),[s,h,p]);return(0,a.useEffect)((function(){var e=new o.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,i=t.top,r=t.width,a=t.height;O.current=window.requestAnimationFrame((function(){v({width:r,height:a,top:i,left:n})}))}))}));return b.current&&e.observe(b.current),function(){window.cancelAnimationFrame(O.current),e.disconnect(),null!=v&&v.cancel&&v.cancel()}}),[v]),a.default.createElement("div",c({style:m,ref:b,className:t},g),n(c({},k,{ref:b.current,resize:v})))}p.propTypes={className:i.default.string,debounceTime:i.default.number,enableDebounceLeadingCall:i.default.bool,ignoreDimensions:i.default.oneOfType([i.default.any,i.default.arrayOf(i.default.any)]),children:i.default.func.isRequired}},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var i=n("zjfJ"),r=n("jg1C"),a=n("yFcC"),o=n.n(a),l=n("ERkP"),s=n.n(l),u=n("jvFD"),c=n.n(u),d=n("i6Tx"),p=n.n(d);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){var t,n,a=e.description,l=e.detailsHeight,u=void 0===l?76:l,d=e.detailsStyles,m=e.exampleProps,y=e.exampleRenderer,h=e.exampleUrl,g=e.tileStyles,b=e.title;return Object(r.jsxs)(r.Fragment,{children:[(t=h,n=Object(r.jsxs)("div",{style:g,className:"jsx-713312509 gallery-tile",children:[Object(r.jsx)("div",{className:"jsx-713312509 image",children:Object(r.jsx)(p.a,{children:function(e){var t=e.width,n=e.height;return s.a.createElement(y,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(b||a?u:0)},m))}})}),(b||a)&&Object(r.jsxs)("div",{style:d,className:"jsx-713312509 details",children:[b&&Object(r.jsx)("div",{className:"jsx-713312509 title",children:b}),a&&Object(r.jsx)("div",{className:"jsx-713312509 description",children:Object(r.jsx)("pre",{className:"jsx-713312509",children:a})})]})]}),t?Object(r.jsx)(c.a,{href:t,children:n}):n),Object(r.jsx)(o.a,{id:"713312509",children:["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]})]})}try{m.displayName="GalleryTile",m.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:m.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(y){}},smMw:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var i=n("jg1C"),r=(n("ERkP"),n("gnM9")),a=n("i9k6"),o=n("Soe+");n.d(t,"packageJson",(function(){return o}));var l={backgroundColor:r.a},s={color:r.c},u={showControls:!1};function c(){return Object(i.jsx)(a.a,{title:"Axes & scales",description:"<Axis.AxisBottom />",detailsStyles:s,detailsHeight:20,exampleProps:u,exampleRenderer:r.b,exampleUrl:"/axis",tileStyles:l})}},zjfJ:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))},zygG:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n("HO86");function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var i,r,a=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(i=n.next()).done)&&(a.push(i.value),!t||a.length!==t);o=!0);}catch(s){l=!0,r=s}finally{try{o||null==n.return||n.return()}finally{if(l)throw r}}return a}}(e,t)||Object(i.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},[["WPYZ",0,2,1,3,4,5,7,8,9,10,11,12,13,14,15,17,19,22,27]]]);