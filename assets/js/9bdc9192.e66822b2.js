"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8102],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=m(n),d=o,u=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},15789:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return h}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],s={title:"Color Theme",sidebar_label:"Color Theme"},l=void 0,m={unversionedId:"guides/extend-color-theme",id:"guides/extend-color-theme",title:"Color Theme",description:"ColorTheme is a very important function of Molecule. We have achieved basic compatibility with the color theme of the VSCode community. This part mainly introduces how to extend the relevant color theme extension packages in the VSCode extension market, and how to implement custom color themes.",source:"@site/docs/guides/extend-color-theme.md",sourceDirName:"guides",slug:"/guides/extend-color-theme",permalink:"/molecule/docs/next/guides/extend-color-theme",editUrl:"https://github.com/DTStack/molecule/edit/main/website/docs/guides/extend-color-theme.md",tags:[],version:"current",frontMatter:{title:"Color Theme",sidebar_label:"Color Theme"},sidebar:"docs",previous:{title:"Built-in Parts",permalink:"/molecule/docs/next/guides/extend-builtin-ui"},next:{title:"Keybinding",permalink:"/molecule/docs/next/guides/extend-keybinding"}},c=[{value:"Use the theme of the VSCode community",id:"use-the-theme-of-the-vscode-community",children:[{value:"Transformation theme pack",id:"transformation-theme-pack",children:[],level:3},{value:"Apply color theme",id:"apply-color-theme",children:[],level:3}],level:2},{value:"Custom color theme",id:"custom-color-theme",children:[{value:"Create a color theme extension",id:"create-a-color-theme-extension",children:[],level:3},{value:"Apply color theme extension",id:"apply-color-theme-extension",children:[],level:3}],level:2},{value:"ColorTheme service object",id:"colortheme-service-object",children:[],level:2}],p={toc:c};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IColorThemeService"},"ColorTheme")," is a very important function of Molecule. We have achieved ",(0,r.kt)("strong",{parentName:"p"},"basic compatibility")," with the ",(0,r.kt)("a",{parentName:"p",href:"https://vscodethemes.com/"},"color theme")," of the VSCode community. This part mainly introduces how to extend the relevant color theme extension packages in the ",(0,r.kt)("strong",{parentName:"p"},"VSCode extension market"),", and how to implement ",(0,r.kt)("strong",{parentName:"p"},"custom")," color themes."),(0,r.kt)("h2",{id:"use-the-theme-of-the-vscode-community"},"Use the theme of the VSCode community"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"All code demos in this part are based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DTStack/molecule-examples/tree/main/packages/molecule-demo"},"molecule-demo")," project in ",(0,r.kt)("a",{parentName:"p",href:"../quick-start"},"Quick Start"),"."))),(0,r.kt)("p",null,"First, we can open the ",(0,r.kt)("a",{parentName:"p",href:"https://vscodethemes.com/"},"VSCode Theme market")," and try to find a color theme you like."),(0,r.kt)("p",null,"Take the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Binaryify/OneDark-Pro.git"},"One Dark Pro")," theme as an example. We need to find the theme on ",(0,r.kt)("strong",{parentName:"p"},"GitHub")," and make sure that we can get the code for the color theme. After finding the theme code, switch to the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/extensions")," directory in the terminal and execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/Binaryify/OneDark-Pro.git")," command to download the ",(0,r.kt)("inlineCode",{parentName:"p"},"One Dark Pro")," theme code, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ pwd\n~/molecule-demo/src/extensions\n\n$ git clone https://github.com/Binaryify/OneDark-Pro.git\nCloning into 'OneDark-Pro'...\nremote: Enumerating objects: 4493, done.\nremote: Counting objects: 100% (800/800), done.\nremote: Compressing objects: 100% (421/421), done.\nremote: Total 4493 (delta 532), reused 577 (delta 364), pack-reused 3693\nReceiving objects: 100% (4493/4493), 19.68 MiB | 358.00 KiB/s, done.\nResolving deltas: 100% (2830/2830), done.\n")),(0,r.kt)("p",null,"After the download is completed, we can see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree -L 2  ./src\n./src\n\u251c\u2500\u2500 App.css\n\u251c\u2500\u2500 App.js\n\u251c\u2500\u2500 App.test.js\n\u251c\u2500\u2500 extensions\n\u2502   \u2514\u2500\u2500 OneDark-Pro\n\u251c\u2500\u2500 index.css\n\u251c\u2500\u2500 index.js\n\u251c\u2500\u2500 logo.svg\n\u251c\u2500\u2500 reportWebVitals.js\n\u2514\u2500\u2500 setupTests.js\n")),(0,r.kt)("p",null,"We can see that there are 3 folders under ",(0,r.kt)("inlineCode",{parentName:"p"},"OneDark-Pro/themes"),", which means that the ",(0,r.kt)("inlineCode",{parentName:"p"},"One Dark Pro")," theme contains 3 color themes."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Due to technical reasons, Molecule does not seamlessly connect to the VSCode Color Theme extension. We need to make some simple ",(0,r.kt)("strong",{parentName:"p"},"modifications")," to the code of the ",(0,r.kt)("inlineCode",{parentName:"p"},"One Dark Pro")," theme."))),(0,r.kt)("h3",{id:"transformation-theme-pack"},"Transformation theme pack"),(0,r.kt)("p",null,"First, we create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OneDark-Pro")," directory, the specific content is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Get the content in package.json\nconst OneDarkPro = require('./package.json');\n\n// Get the detailed theme color content\nconst themes = [\n    require('./themes/OneDark-Pro.json'),\n    require('./themes/OneDark-Pro-flat.json'),\n    require('./themes/OneDark-Pro-darker.json'),\n];\n\nconst packageThemes = OneDarkPro.contributes?.themes || [];\n\nOneDarkPro.contributes.themes = packageThemes.map((theme, index) => {\n    theme.id = theme.label;\n    theme = Object.assign({}, theme, themes[index]);\n    return theme;\n});\n\n// Declare the unique id of the current theme\nOneDarkPro.id = 'OneDarkPro';\n\n// Export the contents of package.json for use by Molecule\nexport { OneDarkPro };\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Except for ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"themes")," files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OneDark-Pro")," directory, which are necessary, the rest of the files can be deleted."))),(0,r.kt)("h3",{id:"apply-color-theme"},"Apply color theme"),(0,r.kt)("p",null,"Finally, we add the extension package in ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/App.js"',title:'"src/App.js"'},"import { OneDarkPro } from './extensions/OneDark-Pro';\n\nconst moInstance = create({\n    extensions: [OneDarkPro],\n});\n")),(0,r.kt)("p",null,"We can use the shortcut key ",(0,r.kt)("inlineCode",{parentName:"p"},"Command/Ctrl + K")," to quickly access the ",(0,r.kt)("strong",{parentName:"p"},"Color Theme Panel"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"colorTheme",src:n(47176).Z})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In addition to the several built-in color themes, we can already see the three color themes in the newly added color theme extension in the color theme panel, namely ",(0,r.kt)("inlineCode",{parentName:"p"},"One Dark Pro"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"One Dark Pro Darker")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"One Dark Pro Flat"),"."))),(0,r.kt)("h2",{id:"custom-color-theme"},"Custom color theme"),(0,r.kt)("p",null,"If the current VSCode extension market does not have a color theme that can satisfy you, then you can choose a ",(0,r.kt)("strong",{parentName:"p"},"custom color theme")," extension, which will take more time than using an existing color theme extension."),(0,r.kt)("h3",{id:"create-a-color-theme-extension"},"Create a color theme extension"),(0,r.kt)("p",null,"First, we create a folder named ",(0,r.kt)("inlineCode",{parentName:"p"},"MyTheme")," under the ",(0,r.kt)("inlineCode",{parentName:"p"},"extensions")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir MyTheme\n$ cd MyTheme\n")),(0,r.kt)("p",null,"Then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"npm init -y")," command to create a new package.json file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"MyTheme")," folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree -L 2\n.\n\u251c\u2500\u2500 MyTheme\n\u2502   \u2514\u2500\u2500 package.json\n\u2514\u2500\u2500 OneDark-Pro\n    \u251c\u2500\u2500 index.js\n    \u251c\u2500\u2500 package.json\n    \u2514\u2500\u2500 themes\n")),(0,r.kt)("p",null,"Next we add the ",(0,r.kt)("strong",{parentName:"p"},"necessary attributes")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'{\n    "name": "my-theme",\n    "version": "1.0.0",\n    "description": "",\n    "main": "index.js",\n    "scripts": {\n        "test": "echo \\"Error: no test specified\\" && exit 1"\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC",\n+   "contributes": {\n+     "themes": [\n+       {\n+         "label": "My Theme",\n+         "uiTheme": "vs-dark",\n+         "path": "./themes/MyTheme.json"\n+       }\n+     ]\n+   }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"label")," attribute means the name ",(0,r.kt)("inlineCode",{parentName:"li"},"My Theme")," displayed in the color theme panel after the theme is loaded by Molecule."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"uiTheme")," attribute means whether the theme is a dark theme, a light theme, or a high-contrast theme."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"path")," attribute means the path where the detailed theme configuration of the theme is located.")),(0,r.kt)("p",null,"Then, we create a file with the path of ",(0,r.kt)("inlineCode",{parentName:"p"},"themes/MyTheme.json"),", the specific content is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "My Theme",\n    "type": "dark",\n    "colors": {\n        "statusBar.background": "#ff0000"\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," represents the current color theme, it is recommended to be consistent with the above ",(0,r.kt)("inlineCode",{parentName:"li"},"label")," attribute"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," represents the type of the current color theme"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"colors")," represents the specific colors of the current color theme")),(0,r.kt)("p",null,"Here we can see that ",(0,r.kt)("inlineCode",{parentName:"p"},"My Theme")," changed the background color of ",(0,r.kt)("a",{parentName:"p",href:"extend-workbench#statusbar"},"StatusBar")," to red."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Molecule's ColorTheme is ",(0,r.kt)("strong",{parentName:"p"},"compatible")," with ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/api/references/theme-color"},"VSCode ColorTheme"),". For more ",(0,r.kt)("strong",{parentName:"p"},"color modification items"),", please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/api/references/theme-color"},"VSCode ColorTheme"),"."))),(0,r.kt)("p",null,"Then we create the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," file under the ",(0,r.kt)("inlineCode",{parentName:"p"},"MyTheme")," directory, the specific content of the file is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Get the content in package.json\nconst MyTheme = require('./package.json');\n\n// Get detailed theme color content\nconst themes = [require('./themes/MyTheme.json')];\n\nconst packageThemes = MyTheme.contributes?.themes || [];\n\nMyTheme.contributes.themes = packageThemes.map((theme, index) => {\n    // Add id to each theme\n    theme.id = theme.label;\n    theme = Object.assign({}, theme, themes[index]);\n    return theme;\n});\n\n// Declare the unique id of the current theme\nMyTheme.id = 'MyTheme';\n\n// Export the contents of package.json for use by Molecule\nexport { MyTheme };\n")),(0,r.kt)("h3",{id:"apply-color-theme-extension"},"Apply color theme extension"),(0,r.kt)("p",null,"Similarly, custom theme extensions are also need to be introduced in the params of ",(0,r.kt)("a",{parentName:"p",href:"../api#create"},"create")," component in ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/App.js"',title:'"src/App.js"'},"import { OneDarkPro } from './extensions/OneDark-Pro';\nimport { MyTheme } from './extensions/MyTheme';\n\nconst moInstance = create({\n    extensions: [OneDarkPro, MyTheme],\n});\n")),(0,r.kt)("p",null,"Open ",(0,r.kt)("strong",{parentName:"p"},"the color theme quick access panel"),", we should be able to see the theme of ",(0,r.kt)("inlineCode",{parentName:"p"},"My Theme"),". After selecting this theme, the ",(0,r.kt)("strong",{parentName:"p"},"background color")," of the ",(0,r.kt)("a",{parentName:"p",href:"extend-workbench#statusbar"},"StatusBar")," at the bottom changes to red."),(0,r.kt)("h2",{id:"colortheme-service-object"},"ColorTheme service object"),(0,r.kt)("p",null,"Molecule provides the ",(0,r.kt)("a",{parentName:"p",href:"../api/classes/molecule.ColorThemeService"},"ColorTheme")," service object, which supports developers to do some active operations when necessary, such as ",(0,r.kt)("a",{parentName:"p",href:"../api/classes/molecule.ColorThemeService#settheme"},"setting theme"),", ",(0,r.kt)("a",{parentName:"p",href:"../api/classes/molecule.ColorThemeService#getthemebyid"},"getting theme"),", and so on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Set the current Color Theme\nmolecule.colorTheme.setTheme(themeId);\n// Get Themes\nmolecule.colorTheme.getThemes();\n")),(0,r.kt)("p",null,"For more information about ",(0,r.kt)("a",{parentName:"p",href:"../api/classes/molecule.ColorThemeService"},"ColorTheme")," operations, please refer to ",(0,r.kt)("a",{parentName:"p",href:"../api/classes/molecule.ColorThemeService"},"API"),"."))}h.isMDXComponent=!0},47176:function(e,t,n){t.Z=n.p+"assets/images/colorThemePalette-a850bbde1077e9c39634b7b3b53e2b13.jpg"}}]);