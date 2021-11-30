(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{C5Uu:function(e){e.exports=JSON.parse('{"name":"@visx/demo-voronoi","description":"Standalone visx voronoi demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^17","@types/react-dom":"^17","@visx/clip-path":"latest","@visx/event":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/responsive":"latest","@visx/voronoi":"latest","react":"^17","react-dom":"^17","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","voronoi"]}')},IacN:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("aWzz"),i=n.n(r),a=n("ERkP"),o=n.n(a),l=n("hNR5"),c=["id","x","y","width","height"];function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e){var t=e.id,n=e.x,r=void 0===n?0:n,i=e.y,a=void 0===i?0:i,d=e.width,u=void 0===d?1:d,f=e.height,p=void 0===f?1:f,m=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,c);return o.a.createElement(l.a,{id:t},o.a.createElement("rect",s({x:r,y:a,width:u,height:p},m)))}d.propTypes={id:i.a.string.isRequired,x:i.a.oneOfType([i.a.string,i.a.number]),y:i.a.oneOfType([i.a.string,i.a.number]),width:i.a.oneOfType([i.a.string,i.a.number]),height:i.a.oneOfType([i.a.string,i.a.number])}},IxWj:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("jg1C"),i=(n("ERkP"),n("yPcb")),a=n("i9k6"),o=n("C5Uu");n.d(t,"packageJson",(function(){return o}));var l={background:"#eb6d88",borderRadius:14,boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 6px"},c={background:"white",color:"#eb6d88",borderRadius:"0 0 14px 14px"};function s(){return Object(r.jsx)(a.a,{title:"Voronoi overlay",description:"<Voronoi.VoronoiPolygon />",exampleRenderer:i.a,exampleUrl:"/voronoi",tileStyles:l,detailsStyles:c})}},hNR5:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("aWzz"),i=n.n(r),a=n("ERkP"),o=n.n(a),l=["id","children"];function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e){var t=e.id,n=e.children,r=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,l);return o.a.createElement("defs",null,o.a.createElement("clipPath",c({id:t},r),n))}s.propTypes={id:i.a.string.isRequired,children:i.a.node}},i6Tx:function(e,t,n){"use strict";t.__esModule=!0,t.default=f;var r=s(n("aWzz")),i=s(n("FGHv")),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(r,a,o):r[a]=e[a]}r.default=e,n&&n.set(e,r);return r}(n("ERkP")),o=s(n("LaGA")),l=["className","children","debounceTime","ignoreDimensions","parentSizeStyles","enableDebounceLeadingCall"];function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function s(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=[];function f(e){var t=e.className,n=e.children,r=e.debounceTime,c=void 0===r?300:r,s=e.ignoreDimensions,f=void 0===s?u:s,p=e.parentSizeStyles,m=void 0===p?{width:"100%",height:"100%"}:p,h=e.enableDebounceLeadingCall,x=void 0===h||h,y=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,l),b=(0,a.useRef)(null),g=(0,a.useRef)(0),v=(0,a.useState)({width:0,height:0,top:0,left:0}),j=v[0],O=v[1],w=(0,a.useMemo)((function(){var e=Array.isArray(f)?f:[f];return(0,i.default)((function(t){O((function(n){return Object.keys(n).filter((function(e){return n[e]!==t[e]})).every((function(t){return e.includes(t)}))?n:t}))}),c,{leading:x})}),[c,x,f]);return(0,a.useEffect)((function(){var e=new o.default((function(e){void 0===e&&(e=[]),e.forEach((function(e){var t=e.contentRect,n=t.left,r=t.top,i=t.width,a=t.height;g.current=window.requestAnimationFrame((function(){w({width:i,height:a,top:r,left:n})}))}))}));return b.current&&e.observe(b.current),function(){window.cancelAnimationFrame(g.current),e.disconnect(),null!=w&&w.cancel&&w.cancel()}}),[w]),a.default.createElement("div",d({style:m,ref:b,className:t},y),n(d({},j,{ref:b.current,resize:w})))}f.propTypes={className:r.default.string,debounceTime:r.default.number,enableDebounceLeadingCall:r.default.bool,ignoreDimensions:r.default.oneOfType([r.default.any,r.default.arrayOf(r.default.any)]),children:r.default.func.isRequired}},i9k6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n("zjfJ"),i=n("jg1C"),a=n("yFcC"),o=n.n(a),l=n("ERkP"),c=n.n(l),s=n("jvFD"),d=n.n(s),u=n("i6Tx"),f=n.n(u);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){var t,n,a=e.description,l=e.detailsHeight,s=void 0===l?76:l,u=e.detailsStyles,m=e.exampleProps,h=e.exampleRenderer,x=e.exampleUrl,y=e.tileStyles,b=e.title;return Object(i.jsxs)(i.Fragment,{children:[(t=x,n=Object(i.jsxs)("div",{style:y,className:"jsx-713312509 gallery-tile",children:[Object(i.jsx)("div",{className:"jsx-713312509 image",children:Object(i.jsx)(f.a,{children:function(e){var t=e.width,n=e.height;return c.a.createElement(h,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:t,height:n+(b||a?s:0)},m))}})}),(b||a)&&Object(i.jsxs)("div",{style:u,className:"jsx-713312509 details",children:[b&&Object(i.jsx)("div",{className:"jsx-713312509 title",children:b}),a&&Object(i.jsx)("div",{className:"jsx-713312509 description",children:Object(i.jsx)("pre",{className:"jsx-713312509",children:a})})]})]}),t?Object(i.jsx)(d.a,{href:t,children:n}):n),Object(i.jsx)(o.a,{id:"713312509",children:["h3.jsx-713312509{margin-top:0;margin-left:40px;margin-bottom:0;}",".gallery-tile.jsx-713312509{background-color:white;margin:5px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:390px;-webkit-flex:1;-ms-flex:1;flex:1;min-width:300px;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:14px;cursor:pointer;}",".image.jsx-713312509{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;}",".details.jsx-713312509{text-align:center;padding:15px 20px;color:#ffffff;}",".title.jsx-713312509{font-weight:900;line-height:0.9rem;}",".description.jsx-713312509{font-weight:300;font-size:14px;}","pre.jsx-713312509{margin:0;background-color:transparent;min-width:unset;}","@media (max-width:960px){.gallery-tile.jsx-713312509{min-width:45%;}}","@media (max-width:600px){.gallery-tile.jsx-713312509{min-width:100%;}}"]})]})}try{m.displayName="GalleryTile",m.__docgenInfo={description:"",displayName:"GalleryTile",props:{description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | undefined"}},detailsHeight:{defaultValue:{value:76},description:"",name:"detailsHeight",required:!1,type:{name:"number | undefined"}},detailsStyles:{defaultValue:null,description:"",name:"detailsStyles",required:!1,type:{name:"CSSProperties | undefined"}},exampleRenderer:{defaultValue:null,description:"",name:"exampleRenderer",required:!0,type:{name:"ComponentClass<ExampleProps, any> | FunctionComponent<ExampleProps>"}},exampleProps:{defaultValue:null,description:"",name:"exampleProps",required:!1,type:{name:'(Pick<ExampleProps, Exclude<keyof ExampleProps, "width" | "height">> & Partial<Pick<ExampleProps, "width" | "height">>) | undefined'}},exampleUrl:{defaultValue:null,description:"",name:"exampleUrl",required:!1,type:{name:"string | undefined"}},tileStyles:{defaultValue:null,description:"",name:"tileStyles",required:!1,type:{name:"CSSProperties | undefined"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GalleryTile.tsx#GalleryTile"]={docgenInfo:m.__docgenInfo,name:"GalleryTile",path:"src/components/GalleryTile.tsx#GalleryTile"})}catch(h){}},wPPg:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),i=n.n(r),a=n("Cf/J"),o=["from","to"];function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){var t=e.from,n=void 0===t?"#FCE38A":t,r=e.to,c=void 0===r?"#F38181":r,s=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,o);return i.a.createElement(a.a,l({from:n,to:c},s))}},yPcb:function(e,t,n){"use strict";var r=n("jg1C"),i=n("ERkP"),a=n("JmwF"),o=n("wPPg"),l=n("oqwl"),c=n("IacN"),s=n("krkd"),d=n("Tkov"),u=n("jpI8"),f=n("201w"),p=Object(f.a)(.88),m=new Array(150).fill(null).map((function(){return{x:p(),y:p(),id:Math.random().toString(36).slice(2)}})),h={top:0,left:0,right:0,bottom:76},x=function(e){var t=e.width,n=e.height,f=e.margin,p=void 0===f?h:f,x=t-p.left-p.right,y=n-p.top-p.bottom,b=Object(i.useMemo)((function(){return Object(s.a)({x:function(e){return e.x*x},y:function(e){return e.y*y},width:x,height:y})(m)}),[x,y]),g=b.polygons(),v=Object(i.useRef)(null),j=Object(i.useState)(null),O=j[0],w=j[1],P=Object(i.useState)(new Set),k=P[0],S=P[1];return t<10?null:Object(r.jsxs)("svg",{width:t,height:n,ref:v,children:[Object(r.jsx)(o.a,{id:"voronoi_orange_red"}),Object(r.jsx)(l.a,{id:"voronoi_pink_red"}),Object(r.jsx)(c.a,{id:"voronoi_clip",width:x,height:y,rx:14}),Object(r.jsxs)(a.a,{top:p.top,left:p.left,clipPath:"url(#voronoi_clip)",onMouseMove:function(e){if(v.current){var t=Object(u.a)(v.current,e);if(t){var n=b.find(t.x,t.y,75);if(n&&n.data.id!==O){var r=new Set,i=b.cells[n.index];if(!i)return;i.halfedges.forEach((function(e){var t=b.edges[e],i=t.left,a=t.right;i&&i!==n?r.add(i.data.id):a&&a!==n&&r.add(a.data.id)})),S(r),w(n.data.id)}}}},onMouseLeave:function(){w(null),S(new Set)},children:[g.map((function(e){return Object(r.jsx)(d.a,{polygon:e,fill:O&&(e.data.id===O||k.has(e.data.id))?"url(#voronoi_orange_red)":"url(#voronoi_pink_red)",stroke:"#fff",strokeWidth:1,fillOpacity:O&&k.has(e.data.id)?.5:1},"polygon-".concat(e.data.id))})),m.map((function(e){var t=e.x,n=e.y,i=e.id;return Object(r.jsx)("circle",{r:2,cx:t*x,cy:n*y,fill:i===O?"fuchsia":"#fff",fillOpacity:.8},"circle-".concat(i))}))]})]})};t.a=x;try{x.displayName="Example",x.__docgenInfo={description:"",displayName:"Example",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-voronoi/Example.tsx#Example"]={docgenInfo:x.__docgenInfo,name:"Example",path:"src/sandboxes/visx-voronoi/Example.tsx#Example"})}catch(y){}}}]);