(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(128)),i={sidebar_position:1},l={unversionedId:"admin/how-to-contribute",id:"admin/how-to-contribute",isDocsHomePage:!1,title:"[Coast Train Team] How to contribute",description:"Contributions are welcome, and they are greatly appreciated! Credit will always be given.",source:"@site/docs/admin/how-to-contribute.md",sourceDirName:"admin",slug:"/admin/how-to-contribute",permalink:"/CoastTrain/docs/admin/how-to-contribute",editUrl:"https://github.com/dbuscombe-usgs/CoastTrain/edit/master/website/docs/admin/how-to-contribute.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:'Coastal Image Labeler "Scribbler"',permalink:"/CoastTrain/docs/labeling/scribbler"}},c=[{value:"Write a blog post",id:"write-a-blog-post",children:[]},{value:"Edit docs",id:"edit-docs",children:[]},{value:"Ready to contribute?",id:"ready-to-contribute",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Contributions are welcome, and they are greatly appreciated! Credit will always be given."),Object(o.b)("p",null,"Here's how to set up for local development."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Fork the dash_doodler repo on Github  ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dbuscombe-usgs/CoastTrain"},"https://github.com/dbuscombe-usgs/CoastTrain"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Clone your fork locally:"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:your_name_here/CoastTrain.git\n")),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Create a branch for local development:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"git checkout -b name-of-your-bugfix-or-feature\n")),Object(o.b)("p",null,"Now you can make your changes locally."),Object(o.b)("h2",{id:"write-a-blog-post"},"Write a blog post"),Object(o.b)("p",null,"Docusaurus creates a ",Object(o.b)("strong",{parentName:"p"},"page for each blog post"),", but also a ",Object(o.b)("strong",{parentName:"p"},"blog index page"),", a ",Object(o.b)("strong",{parentName:"p"},"tag system"),", an ",Object(o.b)("strong",{parentName:"p"},"RSS")," feed..."),Object(o.b)("p",null,"Create a file at ",Object(o.b)("inlineCode",{parentName:"p"},"blog/2021-02-28-greetings.md"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-md",metastring:'title="blog/2021-02-28-greetings.md"',title:'"blog/2021-02-28-greetings.md"'},"---\nslug: greetings\ntitle: Greetings!\nauthor: Dan Buscombe\nauthor_title: Coast Train Contributor\nauthor_url: https://github.com/dbuscombe-usgs\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n")),Object(o.b)("p",null,"A new blog post is now available at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/blog/greetings"),"."),Object(o.b)("h2",{id:"edit-docs"},"Edit docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"To edit the content of the frontpage: ",Object(o.b)("inlineCode",{parentName:"li"},"src/components/HomepageFeatures.js")),Object(o.b)("li",{parentName:"ul"},"To edit Project Information pages, go to the subfolders of ",Object(o.b)("inlineCode",{parentName:"li"},"docs/")),Object(o.b)("li",{parentName:"ul"},"To rename sidebar names, edit the ",Object(o.b)("inlineCode",{parentName:"li"},"_category_.json")," file in each subfolder in ",Object(o.b)("inlineCode",{parentName:"li"},"docs/")),Object(o.b)("li",{parentName:"ul"},"To edit blog pages, go to the subfolders of ",Object(o.b)("inlineCode",{parentName:"li"},"blogs/")),Object(o.b)("li",{parentName:"ul"},"Start here for instructions on how to use docusaurus: ",Object(o.b)("a",{parentName:"li",href:"https://docusaurus.io/docs/installation"},"https://docusaurus.io/docs/installation"))),Object(o.b)("p",null,"To check the webpage locally, change directory to the ",Object(o.b)("inlineCode",{parentName:"p"},"website")," folder, then"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"yarn add docusaurus\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"yarn start\n")),Object(o.b)("p",null,"The webpage will load at http://localhost:3000/CoastTrain."),Object(o.b)("h2",{id:"ready-to-contribute"},"Ready to contribute?"),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"Commit your changes and push your branch to GitHub:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'git add .\ngit commit -m "Your detailed description of your changes."\ngit push origin name-of-your-forked-repo\n')),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Submit a pull request through the GitHub website: ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dbuscombe-usgs/CoastTrain"},"https://github.com/dbuscombe-usgs/CoastTrain"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Ask for help if any of the above is confusing or does not work."))))}s.isMDXComponent=!0}}]);