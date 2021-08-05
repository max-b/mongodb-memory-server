(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[741],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=i,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return t?a.createElement(g,r(r({ref:n},c),{},{components:t})):a.createElement(g,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4018:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var a=t(2122),i=t(9756),o=(t(7294),t(3905)),r=["components"],l={id:"migrate7",title:"Migrate to version 7.0.0"},s=void 0,d={unversionedId:"guides/migrate7",id:"guides/migrate7",isDocsHomePage:!1,title:"Migrate to version 7.0.0",description:"Here are the Important changes made for 7.0.0",source:"@site/../docs/guides/migrate7.md",sourceDirName:"guides",slug:"/guides/migrate7",permalink:"/mongodb-memory-server/docs/guides/migrate7",editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/migrate7.md",version:"current",frontMatter:{id:"migrate7",title:"Migrate to version 7.0.0"},sidebar:"guides",previous:{title:"Integration Examples",permalink:"/mongodb-memory-server/docs/guides/integration-examples"}},c=[{value:"Requirement Changes",id:"requirement-changes",children:[]},{value:"Breaking Changes",id:"breaking-changes",children:[{value:"no function other than start, create, ensureInstance will be starting anything",id:"no-function-other-than-start-create-ensureinstance-will-be-starting-anything",children:[]},{value:"getUri is no longer async",id:"geturi-is-no-longer-async",children:[]},{value:"new no longer automatically starts",id:"new-no-longer-automatically-starts",children:[]},{value:"mongod binaries storage path changed",id:"mongod-binaries-storage-path-changed",children:[]},{value:"getConnectionString got removed",id:"getconnectionstring-got-removed",children:[]},{value:"MongoInstance.waitPrimaryReady got removed",id:"mongoinstancewaitprimaryready-got-removed",children:[]},{value:"Functions that returned public values on classes got removed",id:"functions-that-returned-public-values-on-classes-got-removed",children:[]},{value:"Manager Class functions got unified",id:"manager-class-functions-got-unified",children:[]},{value:"getUri by default does not include any dbName anymore",id:"geturi-by-default-does-not-include-any-dbname-anymore",children:[]}]},{value:"Non-Breaking changes / Additions",id:"non-breaking-changes--additions",children:[{value:"Config Values are now collected in an enum",id:"config-values-are-now-collected-in-an-enum",children:[]},{value:"Config helper function &quot;envName&quot;",id:"config-helper-function-envname",children:[]},{value:"All Manager Classes are now extending EventEmitter",id:"all-manager-classes-are-now-extending-eventemitter",children:[]},{value:"Automatic Authentication creation",id:"automatic-authentication-creation",children:[]},{value:"Explicit &amp; Implicit Cleanup",id:"explicit--implicit-cleanup",children:[]},{value:"ReplSet&#39;s can now gracefully exit",id:"replsets-can-now-gracefully-exit",children:[]},{value:"Linux Distribution Detection enhanced",id:"linux-distribution-detection-enhanced",children:[]},{value:"ArchLinux got somewhat supported",id:"archlinux-got-somewhat-supported",children:[]},{value:"Runtime downloads can now be disabled or explicitly enabled",id:"runtime-downloads-can-now-be-disabled-or-explicitly-enabled",children:[]},{value:"Unified Common Errors",id:"unified-common-errors",children:[]}]}],m={toc:c};function p(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here are the Important changes made for 7.0.0"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Important, Read this first")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This Guide is written for migration from version ",(0,o.kt)("inlineCode",{parentName:"p"},"6.9.6")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"7.0.0"),", for versions ",(0,o.kt)("inlineCode",{parentName:"p"},">7.0.0 <8.0.0"),", please consult the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodkz/mongodb-memory-server/blob/master/CHANGELOG.md"},"CHANGELOG")))),(0,o.kt)("h2",{id:"requirement-changes"},"Requirement Changes"),(0,o.kt)("p",null,"If using NodeJS below 12.22, package ",(0,o.kt)("inlineCode",{parentName:"p"},"rimraf")," needs to be installed (when using cleanup with ",(0,o.kt)("inlineCode",{parentName:"p"},"force"),")"),(0,o.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,o.kt)("h3",{id:"no-function-other-than-start-create-ensureinstance-will-be-starting-anything"},"no function other than start, create, ensureInstance will be starting anything"),(0,o.kt)("p",null,"For 7.0.0, the only functions that start / wait for an starting instance will be ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ensureInstance")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// this no longer works\nconst mongo = new MongoMemoryServer();\nconst uri = await getUri(); // ERROR: instance not started\n\n// it is now\nconst mongo = await MongoMemoryServer.create();\nconst uri = getUri();\n")),(0,o.kt)("h3",{id:"geturi-is-no-longer-async"},"getUri is no longer async"),(0,o.kt)("p",null,"For 7.0.0, all ",(0,o.kt)("inlineCode",{parentName:"p"},".getUri")," are now sync, see ",(0,o.kt)("a",{parentName:"p",href:"#no-function-other-than-start-create-ensureinstance-will-be-starting-anything"},"this change")),(0,o.kt)("h3",{id:"new-no-longer-automatically-starts"},"new no longer automatically starts"),(0,o.kt)("p",null,"Until 7.0.0, ",(0,o.kt)("inlineCode",{parentName:"p"},"new")," (",(0,o.kt)("inlineCode",{parentName:"p"},"constructor"),") automatically started the instance, which is no longer the case, for this behaviour use ",(0,o.kt)("inlineCode",{parentName:"p"},".create"),", see ",(0,o.kt)("a",{parentName:"p",href:"#no-function-other-than-start-create-ensureinstance-will-be-starting-anything"},"this change")),(0,o.kt)("h3",{id:"mongod-binaries-storage-path-changed"},"mongod binaries storage path changed"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mongod")," binary path changed from ",(0,o.kt)("inlineCode",{parentName:"p"},"basePath/version/mongod")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"basePath/mongod-arch-dist-version"),(0,o.kt)("br",{parentName:"p"}),"\n","This will make it easier to work with sharing the project folder (like host to docker)"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This package will ",(0,o.kt)("strong",{parentName:"p"},"not")," delete the old binaries, these need to be manually deleted, see ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/config-options#download_dir"},"storage paths")," for where binaries are stored"))),(0,o.kt)("h3",{id:"getconnectionstring-got-removed"},"getConnectionString got removed"),(0,o.kt)("p",null,"Function ",(0,o.kt)("inlineCode",{parentName:"p"},"getConnectionString")," got removed in favor of just ",(0,o.kt)("inlineCode",{parentName:"p"},"getUri")),(0,o.kt)("h3",{id:"mongoinstancewaitprimaryready-got-removed"},"MongoInstance.waitPrimaryReady got removed"),(0,o.kt)("p",null,"Function ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoInstance.waitPrimaryReady")," got removed, in favor of listening to event ",(0,o.kt)("inlineCode",{parentName:"p"},"instancePrimary")),(0,o.kt)("h3",{id:"functions-that-returned-public-values-on-classes-got-removed"},"Functions that returned public values on classes got removed"),(0,o.kt)("p",null,"Functions like ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoMemoryServer.getInstanceInfo")," got removed in favor of ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoMemoryServer.instanceInfo")," (readonly value)"),(0,o.kt)("p",null,"These include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.getInstanceInfo")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.instanceInfo")," (readonly value)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.getPort")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.instanceInfo.port")," (readonly value)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.getDbPath")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.instanceInfo.dbPath")," (readonly value)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.getDbName")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"MongoMemoryServer.instanceInfo.dbName")," (readonly value)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MongoMemoryReplSet.getDbName")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"MongoMemoryReplSet.opts.replSet.db")," (readonly value)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MongoInstance.getPid")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"MongoInstance.mongodProcess.pid")," (readonly value)")),(0,o.kt)("h3",{id:"manager-class-functions-got-unified"},"Manager Class functions got unified"),(0,o.kt)("p",null,"Manager-Classes got unified, these include ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoMemoryServer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoMemoryReplSet"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoInstance"),(0,o.kt)("br",{parentName:"p"}),"\n","This means that all of them have unified typings for ",(0,o.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"stop"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getUri"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cleanup")),(0,o.kt)("p",null,"This also includes function renames:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(static) ",(0,o.kt)("inlineCode",{parentName:"li"},"MongoInstance.run")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"MongoInstance.create")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MongoInstance.run")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"MongoInstance.start")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MongoInstance.kill")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"MongoInstance.stop"))),(0,o.kt)("h3",{id:"geturi-by-default-does-not-include-any-dbname-anymore"},"getUri by default does not include any dbName anymore"),(0,o.kt)("p",null,"This was changed to allow mongodb and mongoose URI's to work at the same time (they slightly differ)."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodkz/mongodb-memory-server/blob/3624253f509a54cff04997943894b9eb7e7e64fe/packages/mongodb-memory-server-core/src/util/utils.ts#L13-L17"},"See the code comment for more information")),(0,o.kt)("h2",{id:"non-breaking-changes--additions"},"Non-Breaking changes / Additions"),(0,o.kt)("h3",{id:"config-values-are-now-collected-in-an-enum"},"Config Values are now collected in an enum"),(0,o.kt)("p",null,"Config values like ",(0,o.kt)("inlineCode",{parentName:"p"},"DOWNLOAD_DIR")," are now collected in an enum called ",(0,o.kt)("inlineCode",{parentName:"p"},"ResolveConfigVariables"),", ",(0,o.kt)("a",{parentName:"p",href:"/mongodb-memory-server/docs/api/config-options"},"see more here")),(0,o.kt)("h3",{id:"config-helper-function-envname"},'Config helper function "envName"'),(0,o.kt)("p",null,"An helper function named ",(0,o.kt)("inlineCode",{parentName:"p"},"envName")," is introduced into 7.0.0, which does:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// previously\nprocess.env[ENV_CONFIG_PREFIX + ResolveConfigVariables.DOWNLOAD_DIR] = 'someValue';\n\n// now\nprocess.env(envName(ResolveConfigVariables.DOWNLOAD_DIR)) = 'someValue';\n")),(0,o.kt)("p",null,"this does not only save space, but also provide direct auto-completion-suggestions for ",(0,o.kt)("inlineCode",{parentName:"p"},"ResolveConfigVariables")),(0,o.kt)("h3",{id:"all-manager-classes-are-now-extending-eventemitter"},"All Manager Classes are now extending EventEmitter"),(0,o.kt)("p",null,"All Manager-Classes are now extending ",(0,o.kt)("inlineCode",{parentName:"p"},"EventEmitter"),", which makes them easier to use and listen for changes"),(0,o.kt)("h3",{id:"automatic-authentication-creation"},"Automatic Authentication creation"),(0,o.kt)("p",null,"For 7.0.0 there is now Automatic Authentication created, which can be enabled by providing config option ",(0,o.kt)("inlineCode",{parentName:"p"},"auth")," in the code"),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// This will create an Auth-enabled instance with default auth-values\nconst mongoServer = await MongoMemoryServer.create({\n  auth: {}, // anything else than "undefined / null" will enable auth, can be explicitly disabled with "auth: { disable: true }"\n  instance: {\n    auth: true,\n    storageEngine: \'wiredTiger\',\n  },\n});\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The Instance will not be restarted if the storage engine is ",(0,o.kt)("inlineCode",{parentName:"p"},"ephemeralForTest")," because data will not persist across restarts",(0,o.kt)("br",null)))),(0,o.kt)("p",null,"For available Values look into either the source code or let intellisense show values"),(0,o.kt)("h3",{id:"explicit--implicit-cleanup"},"Explicit & Implicit Cleanup"),(0,o.kt)("p",null,"Cleanup behaviour can now be controlled, default is an ",(0,o.kt)("inlineCode",{parentName:"p"},"tmpDir")," that will get automatically removed on instance-stop / process exit, if it is not an ",(0,o.kt)("inlineCode",{parentName:"p"},"tmpDir")," then ",(0,o.kt)("inlineCode",{parentName:"p"},".cleanup")," needs to be manually called with ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," (force)  "),(0,o.kt)("p",null,"If persistence between restarts is wanted (even if it is an ",(0,o.kt)("inlineCode",{parentName:"p"},"tmpDir"),"), then call ",(0,o.kt)("inlineCode",{parentName:"p"},".stop")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," (",(0,o.kt)("inlineCode",{parentName:"p"},"cleanup")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"tmpDir")," will still be run on process exit)"),(0,o.kt)("h3",{id:"replsets-can-now-gracefully-exit"},"ReplSet's can now gracefully exit"),(0,o.kt)("p",null,"Since Mongod ~4.2 replset's dont exit anymore on ",(0,o.kt)("inlineCode",{parentName:"p"},"SIGTERM")," if they cannot step-down (no other instance to give primary to)",(0,o.kt)("br",{parentName:"p"}),"\n","In 7.0.0 this is now handled with mongodb command ",(0,o.kt)("inlineCode",{parentName:"p"},"replSetStepDown: 1, force: true")),(0,o.kt)("h3",{id:"linux-distribution-detection-enhanced"},"Linux Distribution Detection enhanced"),(0,o.kt)("p",null,"For 7.0.0, the Linux Distribution Detection got enhanced, now preferring to use ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/upstream-release/lsb-release")," instead of the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/")," ones, which enables based-on distributions to be easier mapped (and fallback correctly)"),(0,o.kt)("p",null,"This mostly impacts Debian based distros and Ubuntu based distros"),(0,o.kt)("h3",{id:"archlinux-got-somewhat-supported"},"ArchLinux got somewhat supported"),(0,o.kt)("p",null,"Some reports said that the ubuntu binaries work on arch, so there is now an automatic fallback to ubuntu binaries (MongoDB still dosnt have binaries for arch)"),(0,o.kt)("h3",{id:"runtime-downloads-can-now-be-disabled-or-explicitly-enabled"},"Runtime downloads can now be disabled or explicitly enabled"),(0,o.kt)("p",null,"Version 7.0.0 brings an new config value named ",(0,o.kt)("inlineCode",{parentName:"p"},"RUNTIME_DOWNLOAD"),", which is an boolean, to disable Runtime Downloads or explicitly enable them"),(0,o.kt)("h3",{id:"unified-common-errors"},"Unified Common Errors"),(0,o.kt)("p",null,"In pre-7.0.0, errors were all over the place, now the most common are unified into custom errors"))}p.isMDXComponent=!0}}]);