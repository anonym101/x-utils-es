/* tslint:disable */
/* eslint-disable */
/* eslint-disable no-proto */

/**
 * @xtils
 * * Simple javascript, lodash alternative library
 * * Developed by Anon
 * * license: CC-BY-SA-4.0
 */

(function(global,factory){if("function"===typeof define&&define.amd)define("xutils",["exports"],factory);else if("undefined"!==typeof exports)factory(exports);else{var mod={exports:{}};factory(mod.exports),global.xutils=mod.exports}})(this,function(exports){"use strict";var _Numberprototype=Number.prototype,_Stringprototype=String.prototype;function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}var gen=fn.apply(self,args);_next(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0});var disableLogging=exports.disableLogging=()=>{try{if(window)return window.xUtilsConfig?window.xUtilsConfig.logging="off":window.xUtilsConfig={logging:"off"},!0}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig.logging="off":global.xUtilsConfig={logging:"off"},!0}catch(err){}return!1},resetLogging=exports.resetLogging=()=>{try{if(window)return window.xUtilsConfig?window.xUtilsConfig.logging="on":window.xUtilsConfig={logging:"on"},!0}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig.logging="on":global.xUtilsConfig={logging:"on"},!0}catch(err){}return!1},loggerSetting=exports.loggerSetting=function loggerSetting(logType,logMode){void 0===logType&&(logType="log"),void 0===logMode&&(logMode="off");if(!["log","warn","onerror","error","alert","attention","debug"].includes(logType)||!logType)return!1;if(!["on","off"].includes(logMode)||!logMode)return!1;"onerror"===logType&&(logType="error");try{if(window)return window.xUtilsConfig?window.xUtilsConfig[logType]=logMode:window.xUtilsConfig={[logType]:logMode},!0}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig[logType]=logMode:global.xUtilsConfig={[logType]:logMode},!0}catch(err){}return!1},checkLoggerSetting=logType=>{try{if(window)return window.xUtilsConfig?window.xUtilsConfig[logType]?window.xUtilsConfig[logType]:"on":"on"}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig[logType]?global.xUtilsConfig[logType]:"on":"on"}catch(err){}return"on"},loggingON=()=>{try{if(window)return"on"===(window.xUtilsConfig||{}).logging||(window.xUtilsConfig||{}).logging===void 0}catch(err){}try{return"on"===(global.xUtilsConfig||{}).logging||(global.xUtilsConfig||{}).logging===void 0}catch(err){}return!0},logConstract=function logConstract(type,args){void 0===type&&(type=""),args.length||(args[0]="");var allData=0===args.filter(n=>"string"===typeof n||n===void 0).length,format=allData?"%o":"";"log"===type&&(args=[].concat("\x1B[90m[log]\x1B[0m\x1B[2m"+format+" ",args,"\x1B[0m")),"debug"===type&&(args=[].concat("\x1B[90m[debug]\x1B[0m\x1B[32m"+format+" ",args,"\x1B[0m")),"warn"===type&&(args=[].concat("\x1B[90m[warning]\x1B[0m\x1B[1m"+format+" ",args,"\x1B[0m")),"alert"===type&&(args=[].concat("\x1B[90m[alert]\x1B[0m\x1B[33m"+format+" ",args,"\x1B[0m")),"attention"===type&&(args=[].concat("\x1B[90m[attention]\x1B[0m\x1B[36m"+format+" ",args,"\x1B[0m"));try{return void(window&&console.log.apply(null,args))}catch(err){}console.log.apply(null,args)},error=function error(){for(var _len6=arguments.length,args=Array(_len6),_key6=0;_key6<_len6;_key6++)args[_key6]=arguments[_key6];if(loggingON()&&"off"!==checkLoggerSetting("error")&&"off"!==checkLoggerSetting("onerror")){args.length||(args[0]="");var allData=0===args.filter(n=>"string"===typeof n||void 0===n).length,format=allData?"%o":"";try{if(window)return args=[].concat("\x1B[31m[error]\x1B[0m\x1B[31m"+format+" ",args,"\x1B[0m"),void console.error.apply(null,args)}catch(err){}args=[].concat("\x1B[41m[error]\x1B[0m\x1B[31m"+format+" ",args,"\x1B[0m"),console.log.apply(null,args)}},stack=exports.stack=function stack(data,asArray){if(void 0===asArray&&(asArray=!1),!!loggingON()){var stackList=new Error(JSON.stringify(data)).stack.split("(");stackList.splice(1,1);var stackHead=stackList[0].split(/\n/)[0].replace("Error","[STACK TRACE]");return stackList.splice(0,1),stackList.unshift(stackHead),void(asArray?console.log(stackList):console.log.apply(null,stackList))}},errorTrace=exports.errorTrace=function errorTrace(data,asArray){if(void 0===asArray&&(asArray=!1),!!loggingON()){var stackList=new Error(JSON.stringify(data)).stack.split("(");stackList.splice(1,1);var errHead=stackList[0].split(/\n/)[0].replace("Error","[ERROR]");return stackList.splice(0,1),stackList.unshift(errHead),void(asArray?console.error(stackList):console.error.apply(null,stackList))}},loop=exports.loop=function loop(size,cb){void 0===size&&(size=0);var isNum="number"===typeof size;if(!("function"===typeof cb)||!isNum)return[];if(!size)return[];for(var r,d=[],inx=0;inx<Array(size).length;inx++){r=cb.apply(this,[inx]);try{if(r&&Object.entries(r).length&&r.break)break}catch(err){}d.push(r)}return d},isArray=arr=>!!arr&&Array.prototype===arr.__proto__,typeCheck=function typeCheck(el,standard){void 0===standard&&(standard=!0);var ofType=type=>standard?typeof el:type||typeof el,asPrototype=Type=>Type.prototype===el.prototype;try{return"symbol"===typeof el?{type:ofType(),value:0,primitiveValue:Symbol("")}:void 0===el?{type:ofType(),value:0,primitiveValue:void 0}:"boolean"===typeof el?{type:ofType(),value:+el,primitiveValue:Boolean()}:"bigint"===typeof el&&"object"===typeof Object(el)?{type:ofType(),value:1,primitiveValue:BigInt("")}:null===el?{type:ofType("null"),value:0,primitiveValue:{}}:el.__proto__===Date.prototype||asPrototype(Date)?{type:ofType("date"),value:1,primitiveValue:new Date}:_Stringprototype===el.__proto__?{type:ofType(),value:el.length,primitiveValue:String()}:Array.prototype===el.__proto__||asPrototype(Array)?{type:ofType("array"),value:(el||[]).length,primitiveValue:[]}:Promise.prototype===(el||"").__proto__||asPrototype(Promise)?{type:ofType("promise"),value:1,primitiveValue:Function()}:Function.prototype===el.__proto__||asPrototype(Function)?{type:ofType(),value:1,primitiveValue:Function()}:Object.prototype===el.__proto__||asPrototype(Object)?{type:ofType(),value:Object.keys(el).length,primitiveValue:{}}:Error.prototype===el.__proto__||asPrototype(Error)?{type:ofType("error"),value:Object.keys(el).length,primitiveValue:Error()}:el.__proto__===_Numberprototype||asPrototype(Number)?isNaN(el)?{type:ofType("NaN"),value:0,primitiveValue:Number()}:{type:ofType(),value:el,primitiveValue:Number()}:!1===0<=+el?{type:typeof el,value:+el,primitiveValue:void 0}:{type:typeof el,value:0,primitiveValue:void 0}}catch(err){return error(err),{}}},isError=el=>Error.prototype===(el||"").__proto__,isFalsy=function isFalsy(el){return void 0===el&&(el=null),void 0===el||!1===el&&"boolean"===typeof el||null===el||(_Stringprototype===el.__proto__?1>el.length:Array.prototype===el.__proto__?0===(el||[]).length:Promise.prototype!==(el||{}).__proto__&&"function"!==typeof el&&(Object.prototype===el.__proto__?0===Object.keys(el).length:Error.prototype!==el.__proto__&&(void 0!==el&&el.__proto__===_Numberprototype?!!isNaN(el)||0>=el:!1===0<+el||!el&&!1)))},isFalse=exports.isFalse=el=>null===el||"undefined"===typeof el||!!("number"===typeof el&&1>el)||"boolean"===typeof el&&!1===el,isTrue=exports.isTrue=el=>null!==el&&"undefined"!==typeof el&&(!!("number"===typeof el&&0<el)||"boolean"===typeof el&&!0===el),isBoolean=exports.isBoolean=el=>void 0!==el&&null!==el&&("boolean"===typeof el||Boolean.prototype===el.__proto__),isNull=exports.isNull=el=>null===el,isUndefined=exports.isUndefined=el=>"undefined"===typeof el,isEmpty=exports.isEmpty=value=>!isError(value)&&!typeCheck(value).value,head=exports.head=function head(arr){return void 0===arr&&(arr=[]),Array.prototype===(arr||null).__proto__?arr.flat().shift():[]},last=exports.last=function last(arr){return void 0===arr&&(arr=[]),arr&&Array.prototype===arr.__proto__?arr[arr.length-1]:null},timer=exports.timer=function timer(cb,time){void 0===time&&(time=0);if(!("function"===typeof cb))return null;time="number"===typeof time&&0<=time?time:0;var s=setTimeout(()=>{cb(),clearTimeout(s)},time)},interval=exports.interval=function interval(cb,every,endTime){void 0===every&&(every=0),void 0===endTime&&(endTime=0);if(!("function"===typeof cb))return null;every="number"===typeof every&&0<=every?every:0,endTime="number"===typeof endTime&&0<=endTime?endTime:0;var counter=0,c=setInterval(()=>{endTime<=counter?clearInterval(c):cb(),counter+=every},every)},validID=exports.validID=function validID(id){return void 0===id&&(id=""),id||""?(id||"").toString().toLowerCase().replace(/\s/g,""):""},isNumber=exports.isNumber=n=>!(n===void 0||null===n||""===n)&&n.__proto__===_Numberprototype,objectSize=exports.objectSize=function objectSize(obj){return void 0===obj&&(obj={}),obj&&isNaN(+obj)?Object.prototype===obj.__proto__||Error.prototype===obj.__proto__?Object.keys(obj).length:0:0},stringSize=exports.stringSize=function stringSize(str){return void 0===str&&(str=""),void 0!==str&&null!==str?str.__proto__===_Stringprototype?str.length:0:0},isPromise=defer=>Promise.prototype===(defer||{}).__proto__,isObject=obj=>{if("function"===typeof obj)return!1;if(!isNaN(+obj)||void 0===obj)return!1;if(obj.__proto__===[].__proto__)return!1;var a=Object.prototype===obj.__proto__||Error.prototype===obj.__proto__,ab=a&&obj instanceof Object;return!!ab||!!(void 0!==obj.__proto__&&void 0!==obj.__proto__.__proto__&&obj.__proto__.__proto__===Object.prototype&&obj instanceof Object)||!!obj.prototype},uniq=function uniq(arr){return void 0===arr&&(arr=[]),arr.filter((el,i,all)=>all.indexOf(el)===i)},selectiveArray=exports.selectiveArray=function selectiveArray(selectBy,data){if(void 0===selectBy&&(selectBy=[]),void 0===data&&(data=[{}]),!isArray(data))return[];if(!data.length)return[];if(!isArray(selectBy))return data;if(!selectBy.length)return data;selectBy=uniq(selectBy);for(var item,nData=[],findNest=function findNest(s,item,inx){void 0===inx&&(inx=0);var found,lastItem=null;if(s&&isArray(s)&&s.length){try{if(void 0!==item[s[inx]])return lastItem=item[s[inx]],found=lastItem,++inx,s[inx]?findNest(s,found,inx):found}catch(err){console.log(err.toString())}return found}},i=0;i<data.length;i++){if(item=data[i],!isObject(item)){nData.push([item]);continue}for(var sArr,found=void 0,collective=[],o=0;o<selectBy.length;o++){sArr=(selectBy[o]||"").split(".");try{found=findNest(sArr,item,0),collective.push(found)}catch(err){}}if(selectBy.length===collective.length){var allUndef=collective.filter(n=>void 0===n);allUndef.length===selectBy.length&&(collective=collective.filter(n=>!!n))}collective.length?nData.push([].concat(collective)):void 0!==found&&nData.push(found)}return nData},isClass=obj=>!!obj&&void 0!==obj.prototype,hasPrototype=exports.hasPrototype=isClass,hasProto=exports.hasProto=el=>{try{return el.__proto__!==void 0}catch(err){return!1}},isString=exports.isString=str=>void 0!==str&&null!==str&&"boolean"!==typeof str&&(""===str||_Stringprototype===str.__proto__),isFunction=exports.isFunction=el=>"function"===typeof el,copyBy=exports.copyBy=function copyBy(obj,refs){if(void 0===obj&&(obj={}),void 0===refs&&(refs=[]),!isObject(obj))return{};var d=[].concat(refs).reduce((n,el)=>(void 0!==obj[el]&&(n[el]=obj[el]),n),{});try{return JSON.parse(JSON.stringify(d))}catch(err){return{}}},copy=exports.copy=data=>{try{return JSON.parse(JSON.stringify(data))}catch(err){return typeCheck(data).primitiveValue}},delay=exports.delay=function delay(time){void 0===time&&(time=100);var isNum="number"===typeof time&&0<=time;return isNum?new Promise(resolve=>{var t=setTimeout(()=>{clearTimeout(t),resolve(!0)},time)}):Promise.resolve(!0)},someKeyMatch=exports.someKeyMatch=function someKeyMatch(object,source){if(void 0===object&&(object={}),void 0===source&&(source={}),!object||Object.prototype!==object.__proto__)return!1;if(!source||Object.prototype!==source.__proto__)return!1;var a=Object.keys(object),b=Object.keys(source);return a.length>=b.length?0<a.filter(z=>b.filter(zz=>zz===z).length).length:0<b.filter(z=>a.filter(zz=>zz===z).length).length},exactKeyMatch=exports.exactKeyMatch=function exactKeyMatch(object,source){if(void 0===object&&(object={}),void 0===source&&(source={}),!object||Object.prototype!==object.__proto__)return!1;if(!source||Object.prototype!==source.__proto__)return!1;var a=Object.keys(object),b=Object.keys(source);return a.length>=b.length?a.filter(z=>b.filter(zz=>zz===z).length).length===a.length:b.filter(z=>a.filter(zz=>zz===z).length).length===b.length},trueVal=exports.trueVal=function trueVal(arr){return void 0===arr&&(arr=[]),arr&&Array.prototype===arr.__proto__?[].concat(arr).filter(itm=>!0!==isFalsy(itm)):[]},trueValDeep=exports.trueValDeep=function trueValDeep(arr){return void 0===arr&&(arr=[]),arr&&Array.prototype===arr.__proto__?[].concat(arr).map(itm=>{var typeIs=typeCheck(itm,!1);return"array"===typeIs.type&&0<typeIs.value?itm.map(child=>0<typeCheck(child,!1).value?child:null).filter(n=>!!n):"object"===typeIs.type&&typeIs.value?Object.entries(itm).reduce((n,_ref)=>{var[k,v]=_ref;return 0<typeCheck(k,!1).value&&(n[k]=v),n},{}):0<typeIs.value?itm:null}).filter(n=>!!n):[]},trueProp=exports.trueProp=function trueProp(obj){return void 0===obj&&(obj={}),obj&&Object.prototype===obj.__proto__?Object.assign({},Object.entries(obj).reduce((n,_ref2)=>{var[key,val]=_ref2;return isFalsy(val)||(n[key]=val),n},{})):0},resolver=exports.resolver=function resolver(fn,timeout,testEvery){void 0===timeout&&(timeout=5e3),void 0===testEvery&&(testEvery=50);return"function"===typeof fn?new Promise(resolve=>{var every=testEvery||50,max=timeout,inx=0,called=null,test=()=>{try{return called||(called=fn()),isPromise(called)?called:fn()}catch(error){return isError(error)?{error}:isObject(error)?error.error?error:{error:error}:{error:error.toString()}}},t=setInterval(_asyncToGenerator(function*(){if(inx>=max)return resolve(void 0),clearInterval(t);var anon=test();if(isPromise(anon))try{var d=yield anon;return resolve(d),clearInterval(t)}catch(error){return isError(error)&&resolve({error}),isObject(error)?error.error?resolve(error):resolve({error}):resolve({error:error.toString()}),clearInterval(t)}return void 0===anon?void(inx+=every):(resolve(anon),clearInterval(t))}),every)}):Promise.reject("fn() must be callable")},flatten=exports.flatten=function flatten(arr){return void 0===arr&&(arr=[]),isArray(arr)?[].concat(...arr):[]},flattenDeep=exports.flattenDeep=function flattenDeep(arr){function test(arr,d){return void 0===d&&(d=1),0<d?arr.reduce((acc,val)=>acc.concat(Array.isArray(val)?test(val,d-1):val),[]):arr.slice()}return void 0===arr&&(arr=[]),isArray(arr)?test(arr,1/0):[]},chunks=exports.chunks=(arr,size)=>Array.from({length:Math.ceil(arr.length/size)},(v,i)=>arr.slice(i*size,i*size+size));exports.uniq=uniq,exports.isPromise=isPromise,exports.debug=function debug(){if(loggingON()&&"off"!==checkLoggerSetting("debug")){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return logConstract("debug",args)}},exports.log=function log(){if(loggingON()&&"off"!==checkLoggerSetting("log")){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return logConstract("log",args)}},exports.warn=function warn(){if(loggingON()&&"off"!==checkLoggerSetting("warn")){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++)args[_key3]=arguments[_key3];return logConstract("warn",args)}},exports.onerror=error,exports.error=error,exports.alert=function alert(){if(loggingON()&&"off"!==checkLoggerSetting("alert")){for(var _len4=arguments.length,args=Array(_len4),_key4=0;_key4<_len4;_key4++)args[_key4]=arguments[_key4];return logConstract("alert",args)}},exports.attention=function attention(){if(loggingON()&&"off"!==checkLoggerSetting("attention")){for(var _len5=arguments.length,args=Array(_len5),_key5=0;_key5<_len5;_key5++)args[_key5]=arguments[_key5];return logConstract("attention",args)}},exports.isObject=isObject,exports.isFalsy=isFalsy,exports.isError=isError,exports.typeCheck=typeCheck,exports.validDate=dt=>{try{return!(dt.__proto__!==Date.prototype||"Invalid Date"===dt.toString())}catch(err){return!1}},exports.isInstance=obj=>!!obj&&!isArray(obj)&&!!(obj.__proto__&&!isClass(obj)&&obj.__proto__.__proto__&&obj.__proto__.__proto__===Object.prototype&&obj instanceof Object),exports.isClass=isClass,exports.isArray=isArray,exports.dupes=(item,index)=>{for(var dups=[],n=parseInt(index);0<n;)n--,dups.push(item);return dups};exports.notify=function notify(logData,err){throw void 0===logData&&(logData=null),void 0===err&&(err=null),"no notify support for x-utils-es, use: x-utils"}});
