"use strict";export const disableLogging=()=>{try{if(window)return window.xUtilsConfig?window.xUtilsConfig.logging="off":window.xUtilsConfig={logging:"off"},!0}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig.logging="off":global.xUtilsConfig={logging:"off"},!0}catch(err){}return!1};export const resetLogging=()=>{try{if(window)return window.xUtilsConfig?window.xUtilsConfig.logging="on":window.xUtilsConfig={logging:"on"},!0}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig.logging="on":global.xUtilsConfig={logging:"on"},!0}catch(err){}return!1};export const loggerSetting=(logType="log",logMode="off")=>{if(!["log","warn","onerror","error","alert","attention","debug"].includes(logType)||!logType)return!1;if(!["on","off"].includes(logMode)||!logMode)return!1;"onerror"===logType&&(logType="error");try{if(window)return window.xUtilsConfig?window.xUtilsConfig[logType]=logMode:window.xUtilsConfig={[logType]:logMode},!0}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig[logType]=logMode:global.xUtilsConfig={[logType]:logMode},!0}catch(err){}return!1};const checkLoggerSetting=logType=>{try{if(window)return window.xUtilsConfig?window.xUtilsConfig[logType]?window.xUtilsConfig[logType]:"on":"on"}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig[logType]?global.xUtilsConfig[logType]:"on":"on"}catch(err){}return"on"},loggingON=()=>{try{if(window)return"on"===(window.xUtilsConfig||{}).logging||(window.xUtilsConfig||{}).logging===void 0}catch(err){}try{return"on"===(global.xUtilsConfig||{}).logging||(global.xUtilsConfig||{}).logging===void 0}catch(err){}return!0},logConstract=function(type="",args){args.length||(args[0]="");let allData=0===args.filter(n=>"string"===typeof n||n===void 0).length,format=allData?"%o":"";"log"===type&&(args=[].concat(`\x1b[90m[log]\x1b[0m\x1b[2m${format} `,args,"\x1B[0m")),"debug"===type&&(args=[].concat(`\x1b[90m[debug]\x1b[0m\x1b[32m${format} `,args,"\x1B[0m")),"warn"===type&&(args=[].concat(`\x1b[90m[warning]\x1b[0m\x1b[1m${format} `,args,"\x1B[0m")),"alert"===type&&(args=[].concat(`\x1b[90m[alert]\x1b[0m\x1b[33m${format} `,args,"\x1B[0m")),"attention"===type&&(args=[].concat(`\x1b[90m[attention]\x1b[0m\x1b[36m${format} `,args,"\x1B[0m"));try{return void(window&&console.log.apply(null,args))}catch(err){}console.log.apply(null,args)},log=function(...args){return loggingON()?"off"===checkLoggerSetting("log")?void 0:logConstract("log",args):void 0},debug=function(...args){return loggingON()?"off"===checkLoggerSetting("debug")?void 0:logConstract("debug",args):void 0},warn=function(...args){return loggingON()?"off"===checkLoggerSetting("warn")?void 0:logConstract("warn",args):void 0},alert=function(...args){return loggingON()?"off"===checkLoggerSetting("alert")?void 0:logConstract("alert",args):void 0},attention=function(...args){return loggingON()?"off"===checkLoggerSetting("attention")?void 0:logConstract("attention",args):void 0},error=function(...args){if(!loggingON())return;if("off"===checkLoggerSetting("error")||"off"===checkLoggerSetting("onerror"))return;args.length||(args[0]="");let allData=0===args.filter(n=>"string"===typeof n||n===void 0).length,format=allData?"%o":"";try{if(window)return args=[].concat(`\x1b[31m[error]\x1b[0m\x1b[31m${format} `,args,"\x1B[0m"),void console.error.apply(null,args)}catch(err){}args=[].concat(`\x1b[41m[error]\x1b[0m\x1b[31m${format} `,args,"\x1B[0m"),console.log.apply(null,args)};export const stack=(data,asArray=!1)=>{if(loggingON()){let stackList=new Error(JSON.stringify(data)).stack.split("(");stackList.splice(1,1);let stackHead=stackList[0].split(/\n/)[0].replace("Error","[STACK TRACE]");return stackList.splice(0,1),stackList.unshift(stackHead),void(asArray?console.log(stackList):console.log.apply(null,stackList))}};export const errorTrace=(data,asArray=!1)=>{if(loggingON()){let stackList=new Error(JSON.stringify(data)).stack.split("(");stackList.splice(1,1);let errHead=stackList[0].split(/\n/)[0].replace("Error","[ERROR]");return stackList.splice(0,1),stackList.unshift(errHead),void(asArray?console.error(stackList):console.error.apply(null,stackList))}};const onerror=error;export const loop=function(size=0,cb){if(!("function"===typeof cb)||!("number"===typeof size))return[];if(!size)return[];let d=[];for(let r,inx=0;inx<Array(size).length;inx++){r=cb.apply(this,[inx]);try{if(r&&Object.entries(r).length&&r.break)break}catch(err){}d.push(r)}return d};const validDate=dt=>{try{return!(dt.__proto__!==Date.prototype||"Invalid Date"===dt.toString())}catch(err){return!1}},isArray=arr=>!!arr&&Array.prototype===arr.__proto__,typeCheck=(el,standard=!0)=>{var _Numberprototype=Number.prototype,_Stringprototype=String.prototype;const ofType=type=>standard?typeof el:type||typeof el,asPrototype=Type=>Type.prototype===el.prototype;try{return"symbol"===typeof el?{type:ofType(),value:0,primitiveValue:Symbol("")}:void 0===el?{type:ofType(),value:0,primitiveValue:void 0}:"boolean"===typeof el?{type:ofType(),value:+el,primitiveValue:Boolean()}:"bigint"===typeof el&&"object"===typeof Object(el)?{type:ofType(),value:1,primitiveValue:BigInt("")}:null===el?{type:ofType("null"),value:0,primitiveValue:{}}:el.__proto__===Date.prototype||asPrototype(Date)?{type:ofType("date"),value:1,primitiveValue:new Date}:_Stringprototype===el.__proto__?{type:ofType(),value:el.length,primitiveValue:String()}:Array.prototype===el.__proto__||asPrototype(Array)?{type:ofType("array"),value:(el||[]).length,primitiveValue:[]}:Promise.prototype===(el||"").__proto__||asPrototype(Promise)?{type:ofType("promise"),value:1,primitiveValue:Function()}:Function.prototype===el.__proto__||asPrototype(Function)?{type:ofType(),value:1,primitiveValue:Function()}:Object.prototype===el.__proto__||asPrototype(Object)?{type:ofType(),value:Object.keys(el).length,primitiveValue:{}}:Error.prototype===el.__proto__||asPrototype(Error)?{type:ofType("error"),value:Object.keys(el).length,primitiveValue:Error()}:el.__proto__===_Numberprototype||asPrototype(Number)?isNaN(el)?{type:ofType("NaN"),value:0,primitiveValue:Number()}:{type:ofType(),value:el,primitiveValue:Number()}:!1===0<=+el?{type:typeof el,value:+el,primitiveValue:void 0}:{type:typeof el,value:0,primitiveValue:void 0}}catch(err){return error(err),{}}},isError=el=>Error.prototype===(el||"").__proto__,isFalsy=(el=null)=>void 0===el||!1===el&&"boolean"===typeof el||null===el||(String.prototype===el.__proto__?1>el.length:Array.prototype===el.__proto__?0===(el||[]).length:Promise.prototype!==(el||{}).__proto__&&"function"!==typeof el&&(Object.prototype===el.__proto__?0===Object.keys(el).length:Error.prototype!==el.__proto__&&(void 0!==el&&el.__proto__===Number.prototype?!!isNaN(el)||0>=el:!1===0<+el||!el&&!1)));export const isFalse=el=>null===el||"undefined"===typeof el||!!("number"===typeof el&&1>el)||"boolean"===typeof el&&!1===el;export const isTrue=el=>null!==el&&"undefined"!==typeof el&&(!!("number"===typeof el&&0<el)||"boolean"===typeof el&&!0===el);export const isBoolean=el=>void 0!==el&&null!==el&&("boolean"===typeof el||Boolean.prototype===el.__proto__);export const isNull=el=>null===el;export const isUndefined=el=>"undefined"===typeof el;export const isEmpty=value=>!isError(value)&&!typeCheck(value).value;export const head=(arr=[])=>Array.prototype===(arr||null).__proto__?arr.flat().shift():[];export const last=(arr=[])=>arr&&Array.prototype===arr.__proto__?arr[arr.length-1]:null;export const timer=(cb,time=0)=>{if(!("function"===typeof cb))return null;time="number"===typeof time&&0<=time?time:0;const s=setTimeout(()=>{cb(),clearTimeout(s)},time)};export const interval=(cb,every=0,endTime=0)=>{if(!("function"===typeof cb))return null;every="number"===typeof every&&0<=every?every:0,endTime="number"===typeof endTime&&0<=endTime?endTime:0;let counter=0;const c=setInterval(()=>{endTime<=counter?clearInterval(c):cb(),counter+=every},every)};export const validID=(id="")=>id||""?(id||"").toString().toLowerCase().replace(/\s/g,""):"";export const isNumber=n=>!(n===void 0||null===n||""===n)&&n.__proto__===Number.prototype;export const objectSize=(obj={})=>obj&&isNaN(+obj)?Object.prototype===obj.__proto__||Error.prototype===obj.__proto__?Object.keys(obj).length:0:0;export const stringSize=(str="")=>str!==void 0&&null!==str?str.__proto__===String.prototype?str.length:0:0;const isPromise=defer=>Promise.prototype===(defer||{}).__proto__,isObject=obj=>{if("function"===typeof obj)return!1;if(!isNaN(+obj)||void 0===obj)return!1;if(obj.__proto__===[].__proto__)return!1;const a=Object.prototype===obj.__proto__||Error.prototype===obj.__proto__,ab=a&&obj instanceof Object;return!!ab||!!(void 0!==obj.__proto__&&void 0!==obj.__proto__.__proto__&&obj.__proto__.__proto__===Object.prototype&&obj instanceof Object)||!!obj.prototype},uniq=(arr=[])=>arr.filter((el,i,all)=>all.indexOf(el)===i);export const selectiveArray=(selectBy=[],data=[{}])=>{if(!isArray(data))return[];if(!data.length)return[];if(!isArray(selectBy))return data;if(!selectBy.length)return data;selectBy=uniq(selectBy);let nData=[],findNest=(s,item,inx=0)=>{let found,lastItem=null;if(s&&isArray(s)&&s.length){try{if(void 0!==item[s[inx]])return lastItem=item[s[inx]],found=lastItem,++inx,s[inx]?findNest(s,found,inx):found}catch(err){console.log(err.toString())}return found}};for(let item,i=0;i<data.length;i++){if(item=data[i],!isObject(item)){nData.push([item]);continue}let found,collective=[];for(let sArr,o=0;o<selectBy.length;o++){sArr=(selectBy[o]||"").split(".");try{found=findNest(sArr,item,0),collective.push(found)}catch(err){}}if(selectBy.length===collective.length){let allUndef=collective.filter(n=>void 0===n);allUndef.length===selectBy.length&&(collective=collective.filter(n=>!!n))}collective.length?nData.push([].concat(collective)):void 0!==found&&nData.push(found)}return nData};const isClass=obj=>!!obj&&void 0!==obj.prototype;export const hasPrototype=isClass;export const hasProto=el=>{try{return el.__proto__!==void 0}catch(err){return!1}};const isInstance=obj=>!!obj&&!isArray(obj)&&!!(obj.__proto__&&!isClass(obj)&&obj.__proto__.__proto__&&obj.__proto__.__proto__===Object.prototype&&obj instanceof Object);export const isString=str=>void 0!==str&&null!==str&&"boolean"!==typeof str&&(""===str||String.prototype===str.__proto__);export const isFunction=el=>"function"===typeof el;export const copyBy=(obj={},refs=[])=>{if(!isObject(obj))return{};const d=[].concat(refs).reduce((n,el)=>(void 0!==obj[el]&&(n[el]=obj[el]),n),{});try{return JSON.parse(JSON.stringify(d))}catch(err){return{}}};const copy=data=>{try{return JSON.parse(JSON.stringify(data))}catch(err){return typeCheck(data).primitiveValue}};export const copyDeep=data=>{if(isArray(data))return data.map(n=>copy(n));if(isObject(data))return Object.entries(data).reduce((n,[k,val])=>(n[k]=isObject(val)?{...copy(val)}:val,n),{});try{return JSON.parse(JSON.stringify(data))}catch(err){return typeCheck(data).primitiveValue}};export const delay=(time=100)=>{return"number"===typeof time&&0<=time?new Promise(resolve=>{const t=setTimeout(()=>{clearTimeout(t),resolve(!0)},time)}):Promise.resolve(!0)};export const someKeyMatch=(object={},source={})=>{if(!object||Object.prototype!==object.__proto__)return!1;if(!source||Object.prototype!==source.__proto__)return!1;const a=Object.keys(object),b=Object.keys(source);return a.length>=b.length?0<a.filter(z=>b.filter(zz=>zz===z).length).length:0<b.filter(z=>a.filter(zz=>zz===z).length).length};export const exactKeyMatch=(object={},source={})=>{if(!object||Object.prototype!==object.__proto__)return!1;if(!source||Object.prototype!==source.__proto__)return!1;const a=Object.keys(object),b=Object.keys(source);return a.length>=b.length?a.filter(z=>b.filter(zz=>zz===z).length).length===a.length:b.filter(z=>a.filter(zz=>zz===z).length).length===b.length};export const trueVal=(arr=[])=>arr&&Array.prototype===arr.__proto__?[].concat(arr).filter(itm=>!0!==isFalsy(itm)):[];export const trueValDeep=(arr=[])=>arr&&Array.prototype===arr.__proto__?[].concat(arr).map(itm=>{const typeIs=typeCheck(itm,!1);return"array"===typeIs.type&&0<typeIs.value?itm.map(child=>0<typeCheck(child,!1).value?child:null).filter(n=>!!n):"object"===typeIs.type&&typeIs.value?Object.entries(itm).reduce((n,[k,v])=>(0<typeCheck(k,!1).value&&(n[k]=v),n),{}):0<typeIs.value?itm:null}).filter(n=>!!n):[];export const trueProp=(obj={})=>obj&&Object.prototype===obj.__proto__?Object.assign({},Object.entries(obj).reduce((n,[key,val])=>(isFalsy(val)||(n[key]=val),n),{})):0;export const resolver=(fn,timeout=5e3,testEvery=50)=>{return"function"===typeof fn?new Promise(resolve=>{let every=testEvery||50,inx=0,called=null,test=()=>{try{return called||(called=fn()),isPromise(called)?called:fn()}catch(error){return isError(error)?{error}:isObject(error)?error.error?error:{error:error}:{error:error.toString()}}},t=setInterval(async()=>{if(inx>=timeout)return resolve(void 0),clearInterval(t);let anon=test();if(isPromise(anon))try{let d=await anon;return resolve(d),clearInterval(t)}catch(error){return isError(error)&&resolve({error}),isObject(error)?error.error?resolve(error):resolve({error}):resolve({error:error.toString()}),clearInterval(t)}return void 0===anon?void(inx+=every):(resolve(anon),clearInterval(t))},every)}):Promise.reject("fn() must be callable")};export const flatten=(arr=[])=>isArray(arr)?[].concat(...arr):[];export const flattenDeep=(arr=[])=>{function test(arr,d=1){return 0<d?arr.reduce((acc,val)=>acc.concat(Array.isArray(val)?test(val,d-1):val),[]):arr.slice()}return isArray(arr)?test(arr,1/0):[]};export const chunks=(arr,size)=>Array.from({length:Math.ceil(arr.length/size)},(v,i)=>arr.slice(i*size,i*size+size));const dupes=(item,index)=>{const dups=[];for(let n=parseInt(index);0<n;)n--,dups.push(item);return dups};export{copy};export{uniq};export{isPromise};export{debug};export{log};export{warn};export{onerror};export{error};export{alert};export{attention};export{isObject};export{isFalsy};export{isError};export{typeCheck};export{validDate};export{isInstance};export{isClass};export{isArray};export{dupes};export const notify=function(logData=null,err=null){throw"no notify support for x-utils-es, use: x-utils"};
