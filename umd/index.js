/* tslint:disable */
/* eslint-disable */
/* eslint-disable no-proto */

/**
 * @xtils
 * * Simple javascript, lodash alternative library
 * * Developed by Anon
 * * license: CC-BY-SA-4.0
 */
(function(global,factory){if("function"===typeof define&&define.amd)define("xutils",["exports"],factory);else if("undefined"!==typeof exports)factory(exports,require("util"),require("util"),require("util"));else{var mod={exports:{}};factory(mod.exports,global.util,global.util,global.util),global.xutils=mod.exports}})(this,function(exports,util1,util2,util3){"use strict";var _Numberprototype=Number.prototype,_Stringprototype=String.prototype;Object.defineProperty(exports,"__esModule",{value:!0});var error=function error(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++)args[_key3]=arguments[_key3];args=[].concat("[error]",args);try{if(window)return console.error.apply(null,args),void console.log("  ")}catch(err){}args=args.map(z=>util3.inspect(z,!1,3,!0)),console.error.apply(null,args),console.log("  ")},isArray=arr=>!!arr&&Array.prototype===arr.__proto__,typeCheck=function typeCheck(el,standard){void 0===standard&&(standard=!0);var ofType=type=>standard?typeof el:type||typeof el,asPrototype=Type=>Type.prototype===el.prototype;try{return"symbol"===typeof el?{type:ofType(),value:0,primitiveValue:Symbol("")}:void 0===el?{type:ofType(),value:0,primitiveValue:void 0}:"boolean"===typeof el?{type:ofType(),value:+el,primitiveValue:Boolean()}:"bigint"===typeof el&&"object"===typeof Object(el)?{type:ofType(),value:1,primitiveValue:BigInt("")}:null===el?{type:ofType("null"),value:0,primitiveValue:{}}:el.__proto__===Date.prototype||asPrototype(Date)?{type:ofType("date"),value:1,primitiveValue:new Date}:_Stringprototype===el.__proto__?{type:ofType(),value:el.length,primitiveValue:String()}:Array.prototype===el.__proto__||asPrototype(Array)?{type:ofType("array"),value:(el||[]).length,primitiveValue:[]}:Promise.prototype===(el||"").__proto__||asPrototype(Promise)?{type:ofType("promise"),value:1,primitiveValue:Function()}:Function.prototype===el.__proto__||asPrototype(Function)?{type:ofType(),value:1,primitiveValue:Function()}:Object.prototype===el.__proto__||asPrototype(Object)?{type:ofType(),value:Object.keys(el).length,primitiveValue:{}}:Error.prototype===el.__proto__||asPrototype(Error)?{type:ofType("error"),value:Object.keys(el).length,primitiveValue:Error()}:el.__proto__===_Numberprototype||asPrototype(Number)?isNaN(el)?{type:ofType("NaN"),value:0,primitiveValue:Number()}:{type:ofType(),value:el,primitiveValue:Number()}:!1===0<=+el?{type:typeof el,value:+el,primitiveValue:void 0}:{type:typeof el,value:0,primitiveValue:void 0}}catch(err){return error(err),{}}},isError=el=>Error.prototype===(el||"").__proto__,isFalsy=function isFalsy(el){return void 0===el&&(el=null),void 0===el||!1===el&&"boolean"===typeof el||null===el||(_Stringprototype===el.__proto__?1>el.length:Array.prototype===el.__proto__?0===(el||[]).length:Promise.prototype!==(el||{}).__proto__&&"function"!==typeof el&&(Object.prototype===el.__proto__?0===Object.keys(el).length:Error.prototype!==el.__proto__&&(void 0!==el&&el.__proto__===_Numberprototype?!!isNaN(el)||0>=el:!1===0<+el||!el&&!1)))},isEmpty=exports.isEmpty=value=>!isError(value)&&!typeCheck(value).value,head=exports.head=function head(arr){return void 0===arr&&(arr=[]),Array.prototype===(arr||null).__proto__?arr.flat().shift():[]},last=exports.last=function last(arr){return void 0===arr&&(arr=[]),arr&&Array.prototype===arr.__proto__?arr[arr.length-1]:null},timer=exports.timer=function timer(cb,time){void 0===time&&(time=0);if(!("function"===typeof cb))return null;time="number"===typeof time&&0<=time?time:0;var s=setTimeout(()=>{cb(),clearTimeout(s)},time)},interval=exports.interval=function interval(cb,every,endTime){void 0===every&&(every=0),void 0===endTime&&(endTime=0);if(!("function"===typeof cb))return null;every="number"===typeof every&&0<=every?every:0,endTime="number"===typeof endTime&&0<=endTime?endTime:0;var counter=0,c=setInterval(()=>{endTime<=counter?clearInterval(c):cb(),counter+=every},every)},validID=exports.validID=function validID(id){return void 0===id&&(id=""),id||""?(id||"").toString().toLowerCase().replace(/\s/g,""):""},isNumber=exports.isNumber=n=>n!==void 0&&n.__proto__===_Numberprototype,isPromise=exports.isPromise=defer=>Promise.prototype===(defer||{}).__proto__,uniq=exports.uniq=function uniq(arr){return void 0===arr&&(arr=[]),arr.filter((el,i,all)=>all.indexOf(el)===i)},objectSize=exports.objectSize=function objectSize(obj){return void 0===obj&&(obj={}),obj&&isNaN(+obj)?Object.prototype===obj.__proto__||Error.prototype===obj.__proto__?Object.keys(obj).length:0:0},isObject=obj=>{if("function"===typeof obj)return!1;if(!isNaN(+obj)||void 0===obj)return!1;if(obj.__proto__===[].__proto__)return!1;var a=Object.prototype===obj.__proto__||Error.prototype===obj.__proto__,ab=a&&obj instanceof Object;return!!ab||!!(void 0!==obj.__proto__&&void 0!==obj.__proto__.__proto__&&obj.__proto__.__proto__===Object.prototype&&obj instanceof Object)||!!obj.prototype},isClass=obj=>!!obj&&void 0!==obj.prototype,hasPrototype=exports.hasPrototype=isClass,hasProto=exports.hasProto=el=>{try{return el.__proto__!==void 0}catch(err){return!1}},isString=exports.isString=str=>!(""!==str)||_Stringprototype===str.__proto__,isFunction=exports.isFunction=el=>"function"===typeof el,copyBy=exports.copyBy=function copyBy(obj,refs){if(void 0===obj&&(obj={}),void 0===refs&&(refs=[]),!isObject(obj))return{};var d=[].concat(refs).reduce((n,el)=>(void 0!==obj[el]&&(n[el]=obj[el]),n),{});try{return JSON.parse(JSON.stringify(d))}catch(err){return{}}},copy=exports.copy=data=>{try{return JSON.parse(JSON.stringify(data))}catch(err){return typeCheck(data).primitiveValue}},delay=exports.delay=function delay(time){void 0===time&&(time=100);var isNum="number"===typeof time&&0<=time;return isNum?new Promise(resolve=>{var t=setTimeout(()=>{clearTimeout(t),resolve(!0)},time)}):Promise.resolve(!0)},someKeyMatch=exports.someKeyMatch=function someKeyMatch(object,source){if(void 0===object&&(object={}),void 0===source&&(source={}),!object||Object.prototype!==object.__proto__)return!1;if(!source||Object.prototype!==source.__proto__)return!1;var a=Object.keys(object),b=Object.keys(source);return a.length>=b.length?0<a.filter(z=>b.filter(zz=>zz===z).length).length:0<b.filter(z=>a.filter(zz=>zz===z).length).length},exactKeyMatch=exports.exactKeyMatch=function exactKeyMatch(object,source){if(void 0===object&&(object={}),void 0===source&&(source={}),!object||Object.prototype!==object.__proto__)return!1;if(!source||Object.prototype!==source.__proto__)return!1;var a=Object.keys(object),b=Object.keys(source);return a.length>=b.length?a.filter(z=>b.filter(zz=>zz===z).length).length===a.length:b.filter(z=>a.filter(zz=>zz===z).length).length===b.length},trueVal=exports.trueVal=function trueVal(arr){return void 0===arr&&(arr=[]),arr&&Array.prototype===arr.__proto__?[].concat(arr).filter(itm=>!0!==isFalsy(itm)):[]},trueValDeep=exports.trueValDeep=function trueValDeep(arr){return void 0===arr&&(arr=[]),arr&&Array.prototype===arr.__proto__?[].concat(arr).map(itm=>{var typeIs=typeCheck(itm,!1);return"array"===typeIs.type&&0<typeIs.value?itm.map(child=>0<typeCheck(child,!1).value?child:null).filter(n=>!!n):"object"===typeIs.type&&typeIs.value?Object.entries(itm).reduce((n,_ref)=>{var[k,v]=_ref;return 0<typeCheck(k,!1).value&&(n[k]=v),n},{}):0<typeIs.value?itm:null}).filter(n=>!!n):[]},trueProp=exports.trueProp=function trueProp(obj){return void 0===obj&&(obj={}),obj&&Object.prototype===obj.__proto__?Object.assign({},Object.entries(obj).reduce((n,_ref2)=>{var[key,val]=_ref2;return isFalsy(val)||(n[key]=val),n},{})):0};exports.log=function log(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];args=[].concat("[log]",args);try{return void(window&&console.log.apply(null,args))}catch(err){}args=args.map(z=>util1.inspect(z,!1,3,!0)),console.log.apply(null,args)},exports.warn=function warn(){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];args=[].concat("[warning]",args);try{return void(window&&console.warn.apply(null,args))}catch(err){}args=args.map(z=>util2.inspect(z,!1,3,!0)),console.warn.apply(null,args)},exports.onerror=error,exports.error=error,exports.isObject=isObject,exports.isFalsy=isFalsy,exports.isError=isError,exports.typeCheck=typeCheck,exports.validDate=dt=>{try{return!(dt.__proto__!==Date.prototype||"Invalid Date"===dt.toString())}catch(err){return!1}},exports.isInstance=obj=>!!obj&&!isArray(obj)&&!!(obj.__proto__&&!isClass(obj)&&obj.__proto__.__proto__&&obj.__proto__.__proto__===Object.prototype&&obj instanceof Object),exports.isClass=isClass,exports.isArray=isArray;exports.notify=function notify(logData,err){throw void 0===logData&&(logData=null),void 0===err&&(err=null),"no notify support for x-utils-es, use: x-utils"}});
