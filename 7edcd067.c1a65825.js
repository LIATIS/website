(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{117:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return p})),n.d(e,"metadata",(function(){return l})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return f}));var r=n(2),o=n(6),i=n(0),s=n(135),a=n(138),u=n(139),p={id:"pagination",title:"Pagination"},l={id:"examples/pagination",title:"Pagination",description:"Pagination can be enabled by setting pagination",source:"@site/docs/examples/pagination.md",permalink:"/docs/examples/pagination",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/pagination.md",lastUpdatedBy:"Afshin Mehrabani",lastUpdatedAt:1590313202,sidebar:"sidebar",previous:{title:"Hello, World!",permalink:"/docs/examples/hello-world"},next:{title:"Search",permalink:"/docs/examples/search"}},c=[],h={rightToc:c};function f(t){var e=t.components,n=Object(o.a)(t,["components"]);return Object(s.b)("wrapper",Object(r.a)({},h,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Pagination can be enabled by setting ",Object(s.b)("inlineCode",{parentName:"p"},"pagination: true"),":"),Object(s.b)(u.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  pagination: true,\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']\n  ]\n});\n",transformCode:function(t){return"\nfunction () {\n  "+t+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:a.a,CodeBlock:u.a,useEffect:i.useEffect,useRef:i.useRef},mdxType:"CodeBlock"}),Object(s.b)("p",null,"You can also change the default settings of the pagination plugin:"),Object(s.b)(u.a,{children:"\nconst grid = new Grid({\n  columns: ['Name', 'Email', 'Phone Number'],\n  pagination: {\n    limit: 1\n  },\n  data: [\n    ['John', 'john@example.com', '(353) 01 222 3333'],\n    ['Mark', 'mark@gmail.com',   '(01) 22 888 4444']\n  ]\n});\n",transformCode:function(t){return"\nfunction () {\n  "+t+"\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    grid.render(wrapperRef.current);\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n"},live:!0,scope:{Grid:a.a,CodeBlock:u.a,useEffect:i.useEffect,useRef:i.useRef},mdxType:"CodeBlock"}))}f.isMDXComponent=!0},138:function(t,e,n){"use strict";n.d(e,"a",(function(){return St}));n(12);var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function o(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return(i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};function s(t,e,n,r){return new(n||(n=Promise))((function(o,i){function s(t){try{u(r.next(t))}catch(t){i(t)}}function a(t){try{u(r.throw(t))}catch(t){i(t)}}function u(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(s,a)}u((r=r.apply(t,e||[])).next())}))}function a(t,e){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function u(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],s=0,a=i.length;s<a;s++,o++)r[o]=i[s];return r}function p(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}var l,c,h,f,d,_,g=function(){function t(t){this._id=t||p()}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!1,configurable:!0}),t}(),y=function(t){function e(){var e=t.call(this)||this;return e._columns=[],e}return o(e,t),Object.defineProperty(e.prototype,"columns",{get:function(){return this._columns},set:function(t){this._columns=t},enumerable:!1,configurable:!0}),e.prototype.adjustWidth=function(t){for(var e=0,n=this.columns;e<n.length;e++){var r=n[e];!r.width&&t&&(r.width=Math.round(100/this.columns.length)+"%")}},e.prototype.setSort=function(t){if(void 0===t&&(t=!1),t)for(var e=0,n=this.columns;e<n.length;e++)n[e].sort=!0},e.fromUserConfig=function(t){if(!t.columns&&!t.from)return null;var n,r=new e;return"toLowerCase",(n=t.columns)&&n.length&&function(t,e){return void 0!==t.toLowerCase}(n[0])?r.columns=e.fromArrayOfString(t.columns).columns:t.from?r.columns=e.fromHTMLTable(t.from).columns:r.columns=t.columns,r.adjustWidth(t.autoWidth),r.setSort(t.sort),r},e.fromArrayOfString=function(t){for(var n=new e,r=0,o=t;r<o.length;r++){var i=o[r];n.columns.push({name:i})}return n},e.fromHTMLTable=function(t){for(var n=new e,r=0,o=t.querySelector("thead").querySelectorAll("th");r<o.length;r++){var i=o[r];n.columns.push({name:i.innerText})}return n},e}(g),m=function(){function t(e){var n=i(i({},t.defaultConfig()),e);Object.assign(this,n)}return t.defaultConfig=function(){return{width:"100%",autoWidth:!0}},t.fromUserConfig=function(e){var n=new t(e);return e?(n.header=y.fromUserConfig(n),n.pagination=i({enabled:!0===e.pagination||e.pagination instanceof Object},e.pagination),n.search=i({enabled:!0===e.search||e.search instanceof Object},e.search),n):n},t}(),b={},v=[],w=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(t,e){for(var n in e)t[n]=e[n];return t}function P(t){var e=t.parentNode;e&&e.removeChild(t)}function x(t,e,n){var r,o=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return C(t,i,e&&e.key,e&&e.ref,null)}function C(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),l.vnode&&l.vnode(i),i}function S(t){return t.children}function O(t,e){this.props=t,this.context=e}function N(t,e){if(null==e)return t.__?N(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?N(t):null}function E(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return E(t)}}function D(t){(!t.__d&&(t.__d=!0)&&c.push(t)&&!h++||d!==l.debounceRendering)&&((d=l.debounceRendering)||f)(T)}function T(){for(var t;h=c.length;)t=c.sort((function(t,e){return t.__v.__b-e.__v.__b})),c=[],t.some((function(t){var e,n,r,o,i,s,a;t.__d&&(s=(i=(e=t).__v).__e,(a=e.__P)&&(n=[],(r=k({},i)).__v=r,o=R(a,i,r,e.__n,void 0!==a.ownerSVGElement,null,n,null==s?N(i):s),A(n,i),o!=s&&E(i)))}))}function U(t,e,n,r,o,i,s,a,u,p){var l,c,h,f,d,_,g,y,m,w=r&&r.__k||v,k=w.length;for(u==b&&(u=null!=s?s[0]:k?N(r,0):null),n.__k=[],l=0;l<e.length;l++)if(null!=(f=n.__k[l]=null==(f=e[l])||"boolean"==typeof f?null:"string"==typeof f||"number"==typeof f?C(null,f,null,null,f):Array.isArray(f)?C(S,{children:f},null,null,null):null!=f.__e||null!=f.__c?C(f.type,f.props,f.key,null,f.__v):f)){if(f.__=n,f.__b=n.__b+1,null===(h=w[l])||h&&f.key==h.key&&f.type===h.type)w[l]=void 0;else for(c=0;c<k;c++){if((h=w[c])&&f.key==h.key&&f.type===h.type){w[c]=void 0;break}h=null}if(d=R(t,f,h=h||b,o,i,s,a,u,p),(c=f.ref)&&h.ref!=c&&(y||(y=[]),h.ref&&y.push(h.ref,null,f),y.push(c,f.__c||d,f)),null!=d){if(null==g&&(g=d),m=void 0,void 0!==f.__d)m=f.__d,f.__d=void 0;else if(s==h||d!=u||null==d.parentNode){t:if(null==u||u.parentNode!==t)t.appendChild(d),m=null;else{for(_=u,c=0;(_=_.nextSibling)&&c<k;c+=2)if(_==d)break t;t.insertBefore(d,u),m=u}"option"==n.type&&(t.value="")}u=void 0!==m?m:d.nextSibling,"function"==typeof n.type&&(n.__d=u)}else u&&h.__e==u&&u.parentNode!=t&&(u=N(h))}if(n.__e=g,null!=s&&"function"!=typeof n.type)for(l=s.length;l--;)null!=s[l]&&P(s[l]);for(l=k;l--;)null!=w[l]&&W(w[l],w[l]);if(y)for(l=0;l<y.length;l++)B(y[l],y[++l],y[++l])}function j(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===w.test(e)?n+"px":null==n?"":n}function M(t,e,n,r,o){var i,s,a,u,p;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||j(i,u,"");if(n)for(p in n)r&&n[p]===r[p]||j(i,p,n[p])}else"o"===e[0]&&"n"===e[1]?(s=e!==(e=e.replace(/Capture$/,"")),a=e.toLowerCase(),e=(a in t?a:e).slice(2),n?(r||t.addEventListener(e,L,s),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,L,s)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function L(t){this.l[t.type](l.event?l.event(t):t)}function R(t,e,n,r,o,i,s,a,u){var p,c,h,f,d,_,g,y,m,b,v,w=e.type;if(void 0!==e.constructor)return null;(p=l.__b)&&p(e);try{t:if("function"==typeof w){if(y=e.props,m=(p=w.contextType)&&r[p.__c],b=p?m?m.props.value:p.__:r,n.__c?g=(c=e.__c=n.__c).__=c.__E:("prototype"in w&&w.prototype.render?e.__c=c=new w(y,b):(e.__c=c=new O(y,b),c.constructor=w,c.render=F),m&&m.sub(c),c.props=y,c.state||(c.state={}),c.context=b,c.__n=r,h=c.__d=!0,c.__h=[]),null==c.__s&&(c.__s=c.state),null!=w.getDerivedStateFromProps&&(c.__s==c.state&&(c.__s=k({},c.__s)),k(c.__s,w.getDerivedStateFromProps(y,c.__s))),f=c.props,d=c.state,h)null==w.getDerivedStateFromProps&&null!=c.componentWillMount&&c.componentWillMount(),null!=c.componentDidMount&&c.__h.push(c.componentDidMount);else{if(null==w.getDerivedStateFromProps&&y!==f&&null!=c.componentWillReceiveProps&&c.componentWillReceiveProps(y,b),!c.__e&&null!=c.shouldComponentUpdate&&!1===c.shouldComponentUpdate(y,c.__s,b)||e.__v===n.__v){for(c.props=y,c.state=c.__s,e.__v!==n.__v&&(c.__d=!1),c.__v=e,e.__e=n.__e,e.__k=n.__k,c.__h.length&&s.push(c),p=0;p<e.__k.length;p++)e.__k[p]&&(e.__k[p].__=e);break t}null!=c.componentWillUpdate&&c.componentWillUpdate(y,c.__s,b),null!=c.componentDidUpdate&&c.__h.push((function(){c.componentDidUpdate(f,d,_)}))}c.context=b,c.props=y,c.state=c.__s,(p=l.__r)&&p(e),c.__d=!1,c.__v=e,c.__P=t,p=c.render(c.props,c.state,c.context),null!=c.getChildContext&&(r=k(k({},r),c.getChildContext())),h||null==c.getSnapshotBeforeUpdate||(_=c.getSnapshotBeforeUpdate(f,d)),v=null!=p&&p.type==S&&null==p.key?p.props.children:p,U(t,Array.isArray(v)?v:[v],e,n,r,o,i,s,a,u),c.base=e.__e,c.__h.length&&s.push(c),g&&(c.__E=c.__=null),c.__e=!1}else null==i&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=I(n.__e,e,n,r,o,i,s,u);(p=l.diffed)&&p(e)}catch(t){e.__v=null,l.__e(t,e,n)}return e.__e}function A(t,e){l.__c&&l.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){l.__e(t,e.__v)}}))}function I(t,e,n,r,o,i,s,a){var u,p,l,c,h,f=n.props,d=e.props;if(o="svg"===e.type||o,null!=i)for(u=0;u<i.length;u++)if(null!=(p=i[u])&&((null===e.type?3===p.nodeType:p.localName===e.type)||t==p)){t=p,i[u]=null;break}if(null==t){if(null===e.type)return document.createTextNode(d);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,d.is&&{is:d.is}),i=null,a=!1}if(null===e.type)f!==d&&t.data!=d&&(t.data=d);else{if(null!=i&&(i=v.slice.call(t.childNodes)),l=(f=n.props||b).dangerouslySetInnerHTML,c=d.dangerouslySetInnerHTML,!a){if(null!=i)for(f={},h=0;h<t.attributes.length;h++)f[t.attributes[h].name]=t.attributes[h].value;(c||l)&&(c&&l&&c.__html==l.__html||(t.innerHTML=c&&c.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||M(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||M(t,i,e[i],n[i],r)})(t,d,f,o,a),c?e.__k=[]:(u=e.props.children,U(t,Array.isArray(u)?u:[u],e,n,r,"foreignObject"!==e.type&&o,i,s,b,a)),a||("value"in d&&void 0!==(u=d.value)&&u!==t.value&&M(t,"value",u,f.value,!1),"checked"in d&&void 0!==(u=d.checked)&&u!==t.checked&&M(t,"checked",u,f.checked,!1))}return t}function B(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){l.__e(t,n)}}function W(t,e,n){var r,o,i;if(l.unmount&&l.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||B(r,null,e)),n||"function"==typeof t.type||(n=null!=(o=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){l.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&W(r[i],e,n);null!=o&&P(o)}function F(t,e,n){return this.constructor(t,n)}l={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return D(n.__E=n)}catch(e){t=e}throw t}},O.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=k({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&k(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),D(this))},O.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),D(this))},O.prototype.render=S,c=[],h=0,f="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_=b;var H,G=function(t){function e(e){var n=t.call(this)||this;return n.rows=[],n.set(e),n}return o(e,t),e.prototype.get=function(){return s(this,void 0,void 0,(function(){return a(this,(function(t){return[2,this.rows]}))}))},e.prototype.set=function(t){return s(this,void 0,void 0,(function(){return a(this,(function(e){return this.rows=t,[2,!0]}))}))},Object.defineProperty(e.prototype,"length",{get:function(){var t=this;return new Promise((function(e){return e(Array.from(t.rows).length)}))},enumerable:!1,configurable:!0}),e}((function(){})),q=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(Error)),J=function(){function t(){}return t.createFromConfig=function(t){var e=null;if(t.data&&(e=new G(t.data)),t.from&&(e=new G(this.tableElementToArray(t.from)),t.from.style.display="none"),!e)throw new q("Could not determine the storage type");return e},t.tableElementToArray=function(t){for(var e=[],n=0,r=t.querySelector("tbody").querySelectorAll("tr");n<r.length;n++){for(var o=[],i=0,s=r[n].querySelectorAll("td");i<s.length;i++){var a=s[i];o.push(a.innerHTML)}e.push(o)}return e},t}(),K=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e}(O);function Y(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n="gridjs";return n+" "+n+t.reduce((function(t,e){return t+"-"+e}),"")}!function(t){t[t.Init=0]="Init",t[t.Loading=1]="Loading",t[t.Loaded=2]="Loaded",t[t.Rendered=3]="Rendered"}(H||(H={}));var z,V=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){return x("td",{className:Y("td")},this.props.cell.data)},e}(K),X=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){return this.props.children?x("tr",{className:Y("tr")},this.props.children):x("tr",{className:Y("tr")},this.props.row.cells.map((function(t){return x(V,{cell:t,key:t.id})})))},e}(K),$=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){return x("tbody",{className:Y("tbody")},this.props.data&&this.props.data.rows.map((function(t){return x(X,{key:t.id,row:t})})))},e}(K);!function(t){t[t.Extractor=0]="Extractor",t[t.Transformer=1]="Transformer",t[t.Filter=2]="Filter",t[t.Sort=3]="Sort",t[t.Limit=4]="Limit"}(z||(z={}));var Q=function(){function t(t){this.propsUpdatedCallback=new Set,this.beforeProcessCallback=new Set,this.afterProcessCallback=new Set,this._props={},this.id=p(),t&&this.setProps(t)}return t.prototype.process=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this.validateProps instanceof Function&&this.validateProps.apply(this,t),this.trigger.apply(this,u([this.beforeProcessCallback],t));var n=this._process.apply(this,t);return this.trigger.apply(this,u([this.afterProcessCallback],t)),n},t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.forEach((function(t){return t.apply(void 0,e)}))},t.prototype.setProps=function(t){return Object.assign(this._props,t),this.trigger(this.propsUpdatedCallback,this),this},Object.defineProperty(t.prototype,"props",{get:function(){return this._props},enumerable:!1,configurable:!0}),t.prototype.propsUpdated=function(t){return this.propsUpdatedCallback.add(t),this},t.prototype.beforeProcess=function(t){return this.beforeProcessCallback.add(t),this},t.prototype.afterProcess=function(t){return this.afterProcessCallback.add(t),this},t}(),Z=function(t){function e(e){var n=t.call(this)||this;return n.data=e,n}return o(e,t),Object.defineProperty(e.prototype,"data",{get:function(){return this._data},set:function(t){this._data=t},enumerable:!1,configurable:!0}),e}(g),tt=function(t){function e(e){var n=t.call(this)||this;return n.cells=e||[],n}return o(e,t),Object.defineProperty(e.prototype,"cells",{get:function(){return this._cells},set:function(t){this._cells=t},enumerable:!1,configurable:!0}),e.fromCells=function(t){return new e(t.map((function(t){return new Z(t.data)})))},Object.defineProperty(e.prototype,"length",{get:function(){return this.cells.length},enumerable:!1,configurable:!0}),e}(g),et=function(t){function e(e){var n=t.call(this)||this;return n.rows=e instanceof Array?e:e instanceof tt?[e]:[],n}return o(e,t),Object.defineProperty(e.prototype,"rows",{get:function(){return this._rows},set:function(t){this._rows=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"length",{get:function(){return this.rows.length},enumerable:!1,configurable:!0}),e.fromRows=function(t){return new e(t.map((function(t){return tt.fromCells(t.cells)})))},e.fromArray=function(t){return new e((t=function(t){return t[0]instanceof Array?t:[t]}(t)).map((function(t){return new tt(t.map((function(t){return new Z(t)})))})))},e}(g),nt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.validateProps=function(){for(var t=0,e=this.props.columns;t<e.length;t++){var n=e[t];if(void 0===n.direction&&(n.direction=1),1!==n.direction&&-1!==n.direction)throw Error("Invalid sort direction "+n.direction)}},Object.defineProperty(e.prototype,"type",{get:function(){return z.Sort},enumerable:!1,configurable:!0}),e.prototype.compare=function(t,e,n,r){var o=t.cells[n],i=e.cells[n];return o.data>i.data?1*r:o.data<i.data?-1*r:0},e.prototype.compareWrapper=function(t,e){for(var n=0,r=0,o=this.props.columns;r<o.length;r++){var i=o[r];if(0!==n)break;n|=this.compare(t,e,i.index,i.direction)}return n},e.prototype._process=function(t){var e=u(t.rows);return e.sort(this.compareWrapper.bind(this)),new et(e)},e}(Q),rt=function(){function t(){}return t.prototype.init=function(t){this.callbacks||(this.callbacks={}),t&&!this.callbacks[t]&&(this.callbacks[t]=[])},t.prototype.on=function(t,e){return this.init(t),this.callbacks[t].push(e),this},t.prototype.off=function(t,e){var n=t;return this.init(),this.callbacks[n]&&0!==this.callbacks[n].length?(this.callbacks[n]=this.callbacks[n].filter((function(t){return t!=e})),this):this},t.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=t;return this.init(r),this.callbacks[r].length>0&&(this.callbacks[r].forEach((function(t){return t.apply(void 0,e)})),!0)},t}(),ot=new(function(){function t(){this._callbacks={},this._isDispatching=!1,this._isHandled={},this._isPending={},this._lastID=1}return t.prototype.register=function(t){var e="ID_"+this._lastID++;return this._callbacks[e]=t,e},t.prototype.unregister=function(t){if(!this._callbacks[t])throw Error("Dispatcher.unregister(...): "+t+" does not map to a registered callback.");delete this._callbacks[t]},t.prototype.waitFor=function(t){if(!this._isDispatching)throw Error("Dispatcher.waitFor(...): Must be invoked while dispatching.");for(var e=0;e<t.length;e++){var n=t[e];if(this._isPending[n]){if(!this._isHandled[n])throw Error("Dispatcher.waitFor(...): Circular dependency detected while ' +\n            'waiting for "+n+".")}else{if(!this._callbacks[n])throw Error("Dispatcher.waitFor(...): "+n+" does not map to a registered callback.");this._invokeCallback(n)}}},t.prototype.dispatch=function(t){if(this._isDispatching)throw Error("Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.");this._startDispatching(t);try{for(var e in this._callbacks)this._isPending[e]||this._invokeCallback(e)}finally{this._stopDispatching()}},t.prototype.isDispatching=function(){return this._isDispatching},t.prototype._invokeCallback=function(t){this._isPending[t]=!0,this._callbacks[t](this._pendingPayload),this._isHandled[t]=!0},t.prototype._startDispatching=function(t){for(var e in this._callbacks)this._isPending[e]=!1,this._isHandled[e]=!1;this._pendingPayload=t,this._isDispatching=!0},t.prototype._stopDispatching=function(){delete this._pendingPayload,this._isDispatching=!1},t}()),it=function(t){function e(){var e=t.call(this)||this;return e._state=e.getInitialState(),ot.register(e._handle.bind(e)),e}return o(e,t),e.prototype._handle=function(t){this.handle(t.type,t.payload)},e.prototype.setState=function(t){var e=this._state;this._state=t,this.emit("updated",t,e)},Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!1,configurable:!0}),e}(rt),st=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.getInitialState=function(){return[]},e.prototype.handle=function(t,e){if("SORT_COLUMN"===t){var n=e.index,r=e.direction,o=e.multi;this.sortColumn(n,r,o)}else"SORT_COLUMN_TOGGLE"===t&&(n=e.index,o=e.multi,this.sortToggle(n,o))},e.prototype.sortToggle=function(t,e){var n=u(this.state).find((function(e){return e.index===t}));n?this.sortColumn(t,1===n.direction?-1:1,e):this.sortColumn(t,1,e)},e.prototype.sortColumn=function(t,e,n){var r=u(this.state),o=r.length,i=r.find((function(e){return e.index===t})),s=!1,a=!1,p=!1,l=!1;if(void 0!==i?n?-1===i.direction?p=!0:l=!0:1===o?l=!0:o>1&&(a=!0,s=!0):0===o?s=!0:o>0&&!n?(s=!0,a=!0):o>0&&n&&(s=!0),a&&(r=[]),s)r.push({index:t,direction:e});else if(l){var c=r.indexOf(i);r[c].direction=e}else if(p){var h=r.indexOf(i);r.splice(h,1)}this.setState(r)},e}(it)),at=function(){function t(){}return t.prototype.dispatch=function(t,e){ot.dispatch({type:t,payload:e})},t}(),ut=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.sortColumn=function(t,e,n){this.dispatch("SORT_COLUMN",{index:t,direction:e,multi:n})},e.prototype.sortToggle=function(t,e){this.dispatch("SORT_COLUMN_TOGGLE",{index:t,multi:e})},e}(at)),pt=new(function(){function t(){}return t.prototype.format=function(t,e){return"[Grid.js] ["+e.toUpperCase()+"]: "+t},t.prototype.error=function(t,e){var n=this.format(t,"error");if(e)throw Error(n);console.error(n)},t.prototype.warn=function(t){console.warn(this.format(t,"warn"))},t.prototype.info=function(t){console.info(this.format(t,"info"))},t}()),lt=function(t){function e(e){var n=t.call(this,e)||this;return n.sortProcessor=n.getOrCreateSortProcessor(),n.state={direction:0},st.on("updated",n.storeUpdated.bind(n)),n}return o(e,t),e.prototype.componentWillUnmount=function(){st.off("updated",this.storeUpdated.bind(this))},e.prototype.storeUpdated=function(t){var e=this;this.sortProcessor.setProps({columns:t});var n=st.state.find((function(t){return t.index===e.props.index}));n?this.setState({direction:n.direction}):this.setState({direction:0})},e.prototype.getOrCreateSortProcessor=function(){var t,e=this.props.pipeline.getStepsByType(z.Sort);return e.length>1&&pt.warn("There are more than sorting pipeline registered, selecting the first one"),e.length>0?t=e[0]:(t=new nt({columns:st.state}),this.props.pipeline.register(t)),t},e.prototype.changeDirection=function(t){t.preventDefault(),t.stopPropagation(),ut.sortToggle(this.props.index,!0===t.shiftKey)},e.prototype.render=function(){var t=this.state.direction,e="neutral";return 1===t?e="asc":-1===t&&(e="desc"),x("button",{title:"Sort column "+(1===t?"descending":"ascending"),className:Y("sort")+" "+Y("sort",e),onClick:this.changeDirection.bind(this)})},e}(K),ct=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.isSortable=function(){return this.props.column.sort},e.prototype.onClick=function(t){t.stopPropagation(),this.isSortable()&&ut.sortToggle(this.props.index,!0===t.shiftKey)},e.prototype.render=function(){return x("th",{className:(Y("th")+" "+(this.isSortable()?Y("th","sort"):"")).trim(),onClick:this.onClick.bind(this),width:this.props.column.width},this.props.column.name,this.isSortable()&&x(lt,{pipeline:this.props.pipeline,index:this.props.index,column:this.props.column}))},e}(K),ht=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){var t=this;return this.props.header?x("thead",{className:Y("thead")},x(X,null,this.props.header.columns.map((function(e,n){return x(ct,{pipeline:t.props.pipeline,column:e,index:n})})))):null},e}(K),ft=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.getStyle=function(){var t={};return this.props.width&&(t.width=this.props.width),t},e.prototype.render=function(){return x("table",{className:Y("table"),style:this.getStyle()},x(ht,{pipeline:this.props.pipeline,header:this.props.header}),x($,{data:this.props.data}))},e}(K),dt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return z.Filter},enumerable:!1,configurable:!0}),e.prototype._process=function(t){return this.props.keyword?(e=String(this.props.keyword).trim(),new et(t.rows.filter((function(t){return t.cells.some((function(t){return new RegExp(String(e),"gi").test(String(t.data))}))})))):t;var e},e}(Q),_t=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.getInitialState=function(){return{keyword:null}},e.prototype.handle=function(t,e){if("SEARCH_KEYWORD"===t){var n=e.keyword;this.search(n)}},e.prototype.search=function(t){this.setState({keyword:t})},e}(it)),gt=new(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.search=function(t){this.dispatch("SEARCH_KEYWORD",{keyword:t})},e}(at)),yt=function(t){function e(e){var n=t.call(this)||this,r=e.enabled,o=e.keyword;if(r){gt.search(o),_t.on("updated",n.storeUpdated.bind(n));var i=new dt({keyword:e.keyword});n.searchProcessor=i,e.pipeline.register(i)}return n}return o(e,t),e.prototype.storeUpdated=function(t){this.searchProcessor.setProps({keyword:t.keyword})},e.prototype.onChange=function(t){var e=t.target.value;gt.search(e)},e.prototype.render=function(){return this.props.enabled?x("div",{className:Y("search")},x("input",{type:"search",placeholder:this.props.placeholder,onInput:this.onChange.bind(this),className:Y("input")+" "+Y("search","input"),value:_t.state.keyword})):null},e.defaultProps={placeholder:"Type a keyword..."},e}(K),mt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){return x("div",{className:Y("head")},x(yt,i({pipeline:this.props.config.pipeline},this.props.config.search)))},e}(K),bt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.validateProps=function(){if(isNaN(Number(this.props.limit))||isNaN(Number(this.props.page)))throw Error("Invalid parameters passed")},Object.defineProperty(e.prototype,"type",{get:function(){return z.Limit},enumerable:!1,configurable:!0}),e.prototype._process=function(t){var e=this.props.page,n=e*this.props.limit,r=(e+1)*this.props.limit;return new et(t.rows.slice(n,r))},e}(Q),vt=function(t){function e(e){var n=t.call(this)||this;return n.state={limit:e.limit,page:e.page||0,total:0,pages:0},n}return o(e,t),e.prototype.componentWillMount=function(){var t=this;if(this.props.enabled){var e=new bt({limit:this.state.limit,page:this.state.page});e.beforeProcess((function(e){var n=e.rows.length;t.setState({total:n,pages:Math.ceil(n/t.state.limit)})})),this.processor=e,this.props.pipeline.register(e)}},e.prototype.componentDidMount=function(){var t=this;this.props.pipeline.updated((function(e){e!==t.processor&&t.setPage(0)}))},e.prototype.setPage=function(t){if(t>=this.state.pages||t<0||t===this.state.page)return null;this.setState({page:t}),this.processor.setProps({page:t})},e.prototype.currentPageClass=function(t){return this.state.page===t?Y("currentPage"):null},e.prototype.render=function(){var t=this;if(!this.props.enabled)return null;var e=Math.min(this.state.pages,this.props.buttonsCount),n=Math.min(this.state.page,Math.floor(e/2));return this.state.page+Math.floor(e/2)>=this.state.pages&&(n=e-(this.state.pages-this.state.page)),x("div",{className:Y("pagination")},this.props.summary&&this.state.total>0&&x("div",{className:Y("summary"),title:"Page "+(this.state.page+1)+" of "+this.state.pages},"Showing ",x("span",null,this.state.page*this.state.limit+1)," to"," ",x("span",null,Math.min((this.state.page+1)*this.state.limit,this.state.total))," ","of ",x("span",null,this.state.total)," results"),x("div",{className:Y("pages")},this.props.prevButton&&x("button",{onClick:this.setPage.bind(this,this.state.page-1)},"Previous"),this.state.pages>e&&this.state.page-n>0&&x(S,null,x("button",{onClick:this.setPage.bind(this,0),title:"Page 1"},"1"),x("button",{className:Y("spread")},"...")),Array.from(Array(e).keys()).map((function(e){return t.state.page+(e-n)})).map((function(e){return x("button",{onClick:t.setPage.bind(t,e),className:t.currentPageClass(e)},e+1)})),this.state.pages>e&&this.state.pages>this.state.page+n+1&&x(S,null,x("button",{className:Y("spread")},"..."),x("button",{onClick:this.setPage.bind(this,this.state.pages-1),title:"Page "+this.state.pages},this.state.pages)),this.props.nextButton&&x("button",{onClick:this.setPage.bind(this,this.state.page+1)},"Next")))},e.defaultProps={summary:!0,nextButton:!0,prevButton:!0,buttonsCount:3,limit:10},e}(K),wt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.render=function(){return x("div",{className:Y("footer")},x(vt,i({pipeline:this.props.config.pipeline},this.props.config.pagination)))},e}(K),kt=function(t){function e(e){var n=t.call(this,e)||this;return n.state={status:H.Loading,data:null},n}return o(e,t),e.prototype.setData=function(t){this.setState({data:t,status:H.Loaded})},e.prototype.componentDidMount=function(){return s(this,void 0,void 0,(function(){var t,e=this;return a(this,(function(n){switch(n.label){case 0:return t=this.setData,[4,this.props.pipeline.process()];case 1:return t.apply(this,[n.sent()]),this.props.pipeline.updated((function(){return s(e,void 0,void 0,(function(){var t;return a(this,(function(e){switch(e.label){case 0:return this.setState({status:H.Loading}),t=this.setData,[4,this.props.pipeline.process()];case 1:return t.apply(this,[e.sent()]),[2]}}))}))})),[2]}}))}))},e.prototype.render=function(){return x("div",{className:Y("container"),style:{width:this.props.width}},x(mt,{config:this.props.config}),x("div",{className:Y("wrapper"),style:{width:this.props.width}},x(ft,{pipeline:this.props.pipeline,data:this.state.data,header:this.props.header,width:this.props.width}),x(wt,{config:this.props.config})))},e}(K),Pt=function(){function t(t){var e=this;this._steps=new Map,this.cache=new Map,this.lastProcessorIndexUpdated=-1,this.propsUpdatedCallback=new Set,this.afterRegisterCallback=new Set,this.updatedCallback=new Set,t&&t.forEach((function(t){return e.register(t)}))}return t.prototype.register=function(t,e){if(void 0===e&&(e=null),null===t.type)throw Error("Processor type is not defined");t.propsUpdated(this.processorPropsUpdated.bind(this)),this.addProcessorByPriority(t,e),this.afterRegistered(t)},t.prototype.addProcessorByPriority=function(t,e){var n=this._steps.get(t.type);if(!n){var r=[];this._steps.set(t.type,r),n=r}if(null===e||e<0)n.push(t);else if(n[e]){var o=n.slice(0,e-1),i=n.slice(e+1);this._steps.set(t.type,o.concat(t).concat(i))}else n[e]=t},Object.defineProperty(t.prototype,"steps",{get:function(){for(var t=[],e=0,n=this.getSortedProcessorTypes();e<n.length;e++){var r=n[e],o=this._steps.get(r);o&&o.length&&(t=t.concat(o))}return t.filter((function(t){return t}))},enumerable:!1,configurable:!0}),t.prototype.getStepsByType=function(t){return this.steps.filter((function(e){return e.type===t}))},t.prototype.getSortedProcessorTypes=function(){return Object.keys(z).filter((function(t){return!isNaN(Number(t))})).map((function(t){return Number(t)}))},t.prototype.process=function(t){return s(this,void 0,void 0,(function(){var e,n,r,o,i,s;return a(this,(function(a){switch(a.label){case 0:e=this.lastProcessorIndexUpdated,n=this.steps,r=t,o=0,i=n,a.label=1;case 1:return o<i.length?(s=i[o],this.findProcessorIndexByID(s.id)>=e?[4,s.process(r)]:[3,3]):[3,5];case 2:return r=a.sent(),this.cache.set(s.id,r),[3,4];case 3:r=this.cache.get(s.id),a.label=4;case 4:return o++,[3,1];case 5:return this.lastProcessorIndexUpdated=n.length,[2,r]}}))}))},t.prototype.findProcessorIndexByID=function(t){return this.steps.findIndex((function(e){return e.id==t}))},t.prototype.setLastProcessorIndex=function(t){var e=this.findProcessorIndexByID(t.id);this.lastProcessorIndexUpdated>e&&(this.lastProcessorIndexUpdated=e)},t.prototype.trigger=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.forEach((function(t){return t.apply(void 0,e)}))},t.prototype.processorPropsUpdated=function(t){this.setLastProcessorIndex(t),this.trigger(this.propsUpdatedCallback),this.trigger(this.updatedCallback,t)},t.prototype.afterRegistered=function(t){this.setLastProcessorIndex(t),this.trigger(this.afterRegisterCallback),this.trigger(this.updatedCallback,t)},t.prototype.propsUpdated=function(t){return this.propsUpdatedCallback.add(t),this},t.prototype.afterRegister=function(t){return this.afterRegisterCallback.add(t),this},t.prototype.updated=function(t){return this.updatedCallback.add(t),this},t}(),xt=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return z.Extractor},enumerable:!1,configurable:!0}),e.prototype._process=function(){return s(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,this.props.storage.get()];case 1:return[2,t.sent()]}}))}))},e}(Q),Ct=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return z.Transformer},enumerable:!1,configurable:!0}),e.prototype._process=function(t){return et.fromArray(t)},e}(Q),St=function(){function t(t){this.bootstrap(t)}return t.prototype.bootstrap=function(t){this.setConfig(t),this.setStorage(),this.setPipeline()},Object.defineProperty(t.prototype,"config",{get:function(){return this._config},set:function(t){this._config=t},enumerable:!1,configurable:!0}),t.prototype.setConfig=function(t){this.config=m.fromUserConfig(t)},t.prototype.setStorage=function(){this.config.storage=J.createFromConfig(this.config)},t.prototype.setPipeline=function(){this.config.pipeline=new Pt([new xt({storage:this.config.storage}),new Ct])},t.prototype.createElement=function(){return x(kt,{config:this.config,pipeline:this.config.pipeline,header:this.config.header,width:this.config.width})},t.prototype.render=function(t){t||pt.error("Container element cannot be null",!0),t.childNodes.length>0?pt.error("The container element "+t+" is not empty. Make sure the container is empty and call render() again"):function(t,e,n){var r,o,i;l.__&&l.__(t,e),o=(r=n===_)?null:e.__k,t=x(S,null,[t]),i=[],R(e,e.__k=t,o||b,b,void 0!==e.ownerSVGElement,o?null:e.childNodes.length?v.slice.call(e.childNodes):null,i,b,r),A(i,t)}(this.createElement(),t)},t}()}}]);