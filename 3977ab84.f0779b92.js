(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{146:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(148),r=n(147),i=n(0),c=n.n(i),s=n(149);class l extends i.Component{render(){return c.a.createElement(r.a,{children:this.props.children,transformCode:e=>`\nfunction () {\n  ${e}\n \n  const wrapperRef = useRef(null);\n   \n  useEffect(() => {\n    if (wrapperRef && wrapperRef.current && wrapperRef.current.childNodes.length === 0) {\n      grid.render(wrapperRef.current);\n    }\n  });\n  \n  return (\n    <div ref={wrapperRef} />\n  );\n}\n`,live:!0,scope:{Grid:a.d,html:a.h,h:a.g,gCreateRef:a.f,gComponent:a.c,PluginPosition:a.e,BaseComponent:a.a,BaseProps:a.BaseProps,CodeBlock:r.a,useEffect:i.useEffect,useRef:i.useRef,faker:s,...this.props.scope}})}}},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),i=(n(0),n(145)),c=n(146),s={id:"cell-attributes",title:"Cell Attributes",keywords:["javascript","table","javascript table","gridjs","grid js","cell attributes","cell attrs"]},l={unversionedId:"examples/cell-attributes",id:"examples/cell-attributes",isDocsHomePage:!1,title:"Cell Attributes",description:"Add custom attributes to each cell of your table using the attributes config. This example",source:"@site/docs/examples/cell-attributes.md",permalink:"/docs/examples/cell-attributes",editUrl:"https://github.com/grid-js/website/edit/master/docs/examples/cell-attributes.md",sidebar:"sidebar",previous:{title:"Cell formatting",permalink:"/docs/examples/cell-formatting"},next:{title:"Row buttons",permalink:"/docs/examples/row-buttons"}},o=[],d={rightToc:o};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Add custom attributes to each cell of your table using the ",Object(i.b)("inlineCode",{parentName:"p"},"attributes")," config. This example\nadds ",Object(i.b)("inlineCode",{parentName:"p"},'data-field="name"'),' to all cells of the "Name" column:'),Object(i.b)(c.a,{children:"\nconst grid = new Grid({\n  columns: [\n      { \n        name: 'Name',\n        attributes: {\n          'data-field':  'name'\n        }\n      },\n      'Email',\n   ],\n  data: Array(5).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n  ])\n});\n",mdxType:"LiveExample"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},Object(i.b)("inlineCode",{parentName:"p"},"attributes")," config accepts callback function as well:"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n    'attributes': (cell, row, column) => { ... }\n}\n")))),Object(i.b)(c.a,{children:"\nconst grid = new Grid({\n  columns: [\n      { \n        name: 'Name',\n        attributes: (cell) => {\n          return {\n            'data-cell-content': cell,\n            'onclick': () => alert(cell),\n            'style': 'cursor: pointer'\n          };\n        }\n      },\n      'Email',\n   ],\n  data: Array(5).fill().map(x => [\n    faker.name.findName(),\n    faker.internet.email(),\n  ])\n});\n",mdxType:"LiveExample"}))}m.isMDXComponent=!0}}]);