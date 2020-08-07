"use strict";

/* tslint:disable */
/* eslint-disable */
/* eslint-disable no-proto */

/**
 * @xtils
 * * Simple javascript, lodash alternative library
 * * Developed by Anon
 * * license: CC-BY-SA-4.0
 */

const log=function(...args){args=[].concat("[log]",args);try{return void(window&&console.log.apply(null,args))}catch(err){}const util1=require("util");args=args.map(z=>util1.inspect(z,!0,3,!0)),console.log.apply(null,args)},warn=function(...args){args=[].concat("[warning]",args);try{return void(window&&console.warn.apply(null,args))}catch(err){}const util2=require("util");args=args.map(z=>util2.inspect(z,!0,3,!0)),console.log.apply(null,args)};export const stack=(data,asArray=!1)=>{let stackList=new Error(JSON.stringify(data)).stack.split("(");stackList.splice(1,1);let stackHead=stackList[0].split(/\n/)[0].replace("Error","[STACK TRACE]");return stackList.splice(0,1),stackList.unshift(stackHead),void(asArray?console.log(stackList):console.log.apply(null,stackList))};export const errorTrace=(data,asArray=!1)=>{let stackList=new Error(JSON.stringify(data)).stack.split("(");stackList.splice(1,1);let errHead=stackList[0].split(/\n/)[0].replace("Error","[ERROR]");return stackList.splice(0,1),stackList.unshift(errHead),void(asArray?console.error(stackList):console.error.apply(null,stackList))};const error=function(...args){args=[].concat("[error]",args);try{if(window)return console.error.apply(null,args),void console.log("  ")}catch(err){}const util3=require("util");args=args.map(z=>util3.inspect(z,!0,3,!0)),console.log.apply(null,args),console.log("  ")},onerror=error,validDate=dt=>{try{return!(dt.__proto__!==Date.prototype||"Invalid Date"===dt.toString())}catch(err){return!1}},isArray=arr=>!!arr&&Array.prototype===arr.__proto__,typeCheck=(el,standard=!0)=>{var _Numberprototype=Number.prototype,_Stringprototype=String.prototype;const ofType=type=>standard?typeof el:type||typeof el,asPrototype=Type=>Type.prototype===el.prototype;try{return"symbol"===typeof el?{type:ofType(),value:0,primitiveValue:Symbol("")}:void 0===el?{type:ofType(),value:0,primitiveValue:void 0}:"boolean"===typeof el?{type:ofType(),value:+el,primitiveValue:Boolean()}:"bigint"===typeof el&&"object"===typeof Object(el)?{type:ofType(),value:1,primitiveValue:BigInt("")}:null===el?{type:ofType("null"),value:0,primitiveValue:{}}:el.__proto__===Date.prototype||asPrototype(Date)?{type:ofType("date"),value:1,primitiveValue:new Date}:_Stringprototype===el.__proto__?{type:ofType(),value:el.length,primitiveValue:String()}:Array.prototype===el.__proto__||asPrototype(Array)?{type:ofType("array"),value:(el||[]).length,primitiveValue:[]}:Promise.prototype===(el||"").__proto__||asPrototype(Promise)?{type:ofType("promise"),value:1,primitiveValue:Function()}:Function.prototype===el.__proto__||asPrototype(Function)?{type:ofType(),value:1,primitiveValue:Function()}:Object.prototype===el.__proto__||asPrototype(Object)?{type:ofType(),value:Object.keys(el).length,primitiveValue:{}}:Error.prototype===el.__proto__||asPrototype(Error)?{type:ofType("error"),value:Object.keys(el).length,primitiveValue:Error()}:el.__proto__===_Numberprototype||asPrototype(Number)?isNaN(el)?{type:ofType("NaN"),value:0,primitiveValue:Number()}:{type:ofType(),value:el,primitiveValue:Number()}:!1===0<=+el?{type:typeof el,value:+el,primitiveValue:void 0}:{type:typeof el,value:0,primitiveValue:void 0}}catch(err){return error(err),{}}},isError=el=>Error.prototype===(el||"").__proto__,isFalsy=(el=null)=>void 0===el||!1===el&&"boolean"===typeof el||null===el||(String.prototype===el.__proto__?1>el.length:Array.prototype===el.__proto__?0===(el||[]).length:Promise.prototype!==(el||{}).__proto__&&"function"!==typeof el&&(Object.prototype===el.__proto__?0===Object.keys(el).length:Error.prototype!==el.__proto__&&(void 0!==el&&el.__proto__===Number.prototype?!!isNaN(el)||0>=el:!1===0<+el||!el&&!1)));export const isEmpty=value=>!isError(value)&&!typeCheck(value).value;export const head=(arr=[])=>Array.prototype===(arr||null).__proto__?arr.flat().shift():[];export const last=(arr=[])=>arr&&Array.prototype===arr.__proto__?arr[arr.length-1]:null;export const timer=(cb,time=0)=>{if(!("function"===typeof cb))return null;time="number"===typeof time&&0<=time?time:0;const s=setTimeout(()=>{cb(),clearTimeout(s)},time)};export const interval=(cb,every=0,endTime=0)=>{if(!("function"===typeof cb))return null;every="number"===typeof every&&0<=every?every:0,endTime="number"===typeof endTime&&0<=endTime?endTime:0;let counter=0;const c=setInterval(()=>{endTime<=counter?clearInterval(c):cb(),counter+=every},every)};export const validID=(id="")=>id||""?(id||"").toString().toLowerCase().replace(/\s/g,""):"";export const isNumber=n=>n!==void 0&&n.__proto__===Number.prototype;export const isPromise=defer=>Promise.prototype===(defer||{}).__proto__;export const uniq=(arr=[])=>arr.filter((el,i,all)=>all.indexOf(el)===i);export const objectSize=(obj={})=>obj&&isNaN(+obj)?Object.prototype===obj.__proto__||Error.prototype===obj.__proto__?Object.keys(obj).length:0:0;const isObject=obj=>{if("function"===typeof obj)return!1;if(!isNaN(+obj)||void 0===obj)return!1;if(obj.__proto__===[].__proto__)return!1;const a=Object.prototype===obj.__proto__||Error.prototype===obj.__proto__,ab=a&&obj instanceof Object;return!!ab||!!(void 0!==obj.__proto__&&void 0!==obj.__proto__.__proto__&&obj.__proto__.__proto__===Object.prototype&&obj instanceof Object)||!!obj.prototype},isClass=obj=>!!obj&&void 0!==obj.prototype;export const hasPrototype=isClass;export const hasProto=el=>{try{return el.__proto__!==void 0}catch(err){return!1}};const isInstance=obj=>!!obj&&!isArray(obj)&&!!(obj.__proto__&&!isClass(obj)&&obj.__proto__.__proto__&&obj.__proto__.__proto__===Object.prototype&&obj instanceof Object);export const isString=str=>!(""!==str)||String.prototype===str.__proto__;export const isFunction=el=>"function"===typeof el;export const copyBy=(obj={},refs=[])=>{if(!isObject(obj))return{};const d=[].concat(refs).reduce((n,el)=>(void 0!==obj[el]&&(n[el]=obj[el]),n),{});try{return JSON.parse(JSON.stringify(d))}catch(err){return{}}};export const copy=data=>{try{return JSON.parse(JSON.stringify(data))}catch(err){return typeCheck(data).primitiveValue}};export const delay=(time=100)=>{return"number"===typeof time&&0<=time?new Promise(resolve=>{const t=setTimeout(()=>{clearTimeout(t),resolve(!0)},time)}):Promise.resolve(!0)};export const someKeyMatch=(object={},source={})=>{if(!object||Object.prototype!==object.__proto__)return!1;if(!source||Object.prototype!==source.__proto__)return!1;const a=Object.keys(object),b=Object.keys(source);return a.length>=b.length?0<a.filter(z=>b.filter(zz=>zz===z).length).length:0<b.filter(z=>a.filter(zz=>zz===z).length).length};export const exactKeyMatch=(object={},source={})=>{if(!object||Object.prototype!==object.__proto__)return!1;if(!source||Object.prototype!==source.__proto__)return!1;const a=Object.keys(object),b=Object.keys(source);return a.length>=b.length?a.filter(z=>b.filter(zz=>zz===z).length).length===a.length:b.filter(z=>a.filter(zz=>zz===z).length).length===b.length};export const trueVal=(arr=[])=>arr&&Array.prototype===arr.__proto__?[].concat(arr).filter(itm=>!0!==isFalsy(itm)):[];export const trueValDeep=(arr=[])=>arr&&Array.prototype===arr.__proto__?[].concat(arr).map(itm=>{const typeIs=typeCheck(itm,!1);return"array"===typeIs.type&&0<typeIs.value?itm.map(child=>0<typeCheck(child,!1).value?child:null).filter(n=>!!n):"object"===typeIs.type&&typeIs.value?Object.entries(itm).reduce((n,[k,v])=>(0<typeCheck(k,!1).value&&(n[k]=v),n),{}):0<typeIs.value?itm:null}).filter(n=>!!n):[];export const trueProp=(obj={})=>obj&&Object.prototype===obj.__proto__?Object.assign({},Object.entries(obj).reduce((n,[key,val])=>(isFalsy(val)||(n[key]=val),n),{})):0;export const chunks=(arr,size)=>Array.from({length:Math.ceil(arr.length/size)},(v,i)=>arr.slice(i*size,i*size+size));export{log};export{warn};export{onerror};export{error};export{isObject};export{isFalsy};export{isError};export{typeCheck};export{validDate};export{isInstance};export{isClass};export{isArray};export const notify=function(logData=null,err=null){throw"no notify support for x-utils-es, use: x-utils"};
