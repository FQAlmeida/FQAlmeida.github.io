(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{73:function(e,n,t){e.exports=t(91)},87:function(e,n,t){},88:function(e,n,t){},89:function(e,n,t){},91:function(e,n,t){"use strict";t.r(n);var a=t(2),i=t.n(a),r=t(66),o=t.n(r),l=t(9),c=t(32);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=t(19),s=t(20),d=t(22),m=t(23),v=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("p",null,"This is Home, & it is under construction ",i.a.createElement("span",{role:"img","aria-label":"work wrench"},"\ud83d\udd27"))}}]),t}(a.Component),k=t(72),p=t(67),h={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"viewer"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"repositories"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"100"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"totalCount"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"owner"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"login"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"languages"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"100"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"nodes"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:345,source:{body:"query {\n  viewer {\n    repositories(first: 100) {\n      totalCount\n      nodes {\n        name\n        owner {\n          login\n        }\n        description\n        createdAt\n        languages (first: 100){\n          nodes {\n            name\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}}}},f=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(p.Query,{query:h},(function(e){var n=e.loading,t=e.error,r=e.data;return n?i.a.createElement("p",null,"loading"):r?i.a.createElement(a.Fragment,null,null===r||void 0===r?void 0:r.viewer.repositories.nodes.map((function(e,n){return e=Object(k.a)({},e,{createdAt:new Date(e.createdAt)}),i.a.createElement("div",{key:n},i.a.createElement("p",null,e.name),i.a.createElement("span",null,"Created At: ",e.createdAt.toLocaleString()))}))):i.a.createElement("p",null,t)}))}}]),t}(a.Component),g=function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(a.Fragment,null,i.a.createElement(l.a,{path:"/",exact:!0,component:v}),i.a.createElement(l.a,{path:"/repositories",exact:!0,component:f}))}}]),t}(a.Component),b=t(14),O=Object(b.a)(),E=t(45),S=(t(87),function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("header",null,i.a.createElement(E.a,{to:"/"},"Home"),i.a.createElement(E.a,{to:"repositories"},"Repos"))}}]),t}(a.Component)),j=(t(88),function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("footer",null,"this is the footer")}}]),t}(a.Component)),y=(t(89),function(e){Object(m.a)(t,e);var n=Object(d.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(a.Fragment,null,i.a.createElement(S,null),this.props.children,i.a.createElement(j,null))}}]),t}(a.Component)),N=new c.ApolloClient({uri:"https://api.github.com/graphql",cache:new c.InMemoryCache,headers:{Authorization:"Token ".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_GITHUB_ACCOUNT:"FQAlmeida"}).REACT_APP_GITHUB_KEY)}}),C=function(){return i.a.createElement(c.ApolloProvider,{client:N},i.a.createElement(l.b,{history:O},i.a.createElement(y,null,i.a.createElement(g,null))))};o.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[73,1,2]]]);
//# sourceMappingURL=main.67ceba38.chunk.js.map