/* tslint:disable */
/* eslint-disable */
/* eslint-disable no-proto */

/**
 * @xtils
 * * Simple javascript, lodash alternative library
 * * Developed by Anon
 * * License: CC-BY-SA-4.0
 * * For projects contact me at: eaglex.net
 */

(function(global,factory){if("function"===typeof define&&define.amd)define("xutils",["exports"],factory);else if("undefined"!==typeof exports)factory(exports);else{var mod={exports:{}};factory(mod.exports),global.xutils=mod.exports}})(this,function(exports){"use strict";var _Numberprototype=Number.prototype,_Stringprototype=String.prototype;function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}var gen=fn.apply(self,args);_next(void 0)})}}Object.defineProperty(exports,"__esModule",{value:!0});var checkLoggerSetting=logType=>{try{if(window)return window.xUtilsConfig?window.xUtilsConfig[logType]?window.xUtilsConfig[logType]:"on":"on"}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig[logType]?global.xUtilsConfig[logType]:"on":"on"}catch(err){}return"on"},loggingON=()=>{try{if(window)return"on"===(window.xUtilsConfig||{}).logging||(window.xUtilsConfig||{}).logging===void 0}catch(err){}try{return"on"===(global.xUtilsConfig||{}).logging||(global.xUtilsConfig||{}).logging===void 0}catch(err){}return!0},logConstract=function logConstract(type,args){void 0===type&&(type=""),args.length||(args[0]="");var allData=0===args.filter(n=>"string"===typeof n||n===void 0).length,format=allData?"%o":"";"log"===type&&(args=[].concat("\x1B[90m[log]\x1B[0m\x1B[2m"+format+" ",args,"\x1B[0m")),"debug"===type&&(args=[].concat("\x1B[90m[debug]\x1B[0m\x1B[32m"+format+" ",args,"\x1B[0m")),"warn"===type&&(args=[].concat("\x1B[90m[warning]\x1B[0m\x1B[1m"+format+" ",args,"\x1B[0m")),"alert"===type&&(args=[].concat("\x1B[90m[alert]\x1B[0m\x1B[33m"+format+" ",args,"\x1B[0m")),"attention"===type&&(args=[].concat("\x1B[90m[attention]\x1B[0m\x1B[36m"+format+" ",args,"\x1B[0m"));try{return void(window&&console.log.apply(null,args))}catch(err){}console.log.apply(null,args)},log=function log(){if(loggingON()&&"off"!==checkLoggerSetting("log")){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return logConstract("log",args)}},alert=function alert(){if(loggingON()&&"off"!==checkLoggerSetting("alert")){for(var _len4=arguments.length,args=Array(_len4),_key4=0;_key4<_len4;_key4++)args[_key4]=arguments[_key4];return logConstract("alert",args)}},error=function error(){for(var _len6=arguments.length,args=Array(_len6),_key6=0;_key6<_len6;_key6++)args[_key6]=arguments[_key6];if(loggingON()&&"off"!==checkLoggerSetting("error")&&"off"!==checkLoggerSetting("onerror")){args.length||(args[0]="");var allData=0===args.filter(n=>"string"===typeof n||void 0===n).length,format=allData?"%o":"";try{if(window)return args=[].concat("\x1B[31m[error]\x1B[0m\x1B[31m"+format+" ",args,"\x1B[0m"),void console.error.apply(null,args)}catch(err){}args=[].concat("\x1B[41m[error]\x1B[0m\x1B[31m"+format+" ",args,"\x1B[0m"),console.log.apply(null,args)}},onerror=error,isBigInt=n=>{try{return"bigint"===typeof n}catch(err){return!1}},validDate=dt=>{try{return!(dt.__proto__!==Date.prototype||"Invalid Date"===dt.toString())}catch(err){return!1}},isArray=arr=>!isBigInt(arr)&&!!arr&&Array.prototype===arr.__proto__,typeCheck=function typeCheck(el,standard){void 0===standard&&(standard=!0);var ofType=type=>standard?typeof el:type||typeof el,asPrototype=Type=>Type.prototype===el.prototype;try{return"symbol"===typeof el?{type:ofType(),value:0,primitiveValue:Symbol("")}:void 0===el?{type:ofType(),value:0,primitiveValue:void 0}:"boolean"===typeof el?{type:ofType(),value:+el,primitiveValue:Boolean()}:"bigint"===typeof el&&"object"===typeof Object(el)?{type:ofType(),value:1,primitiveValue:BigInt("")}:null===el?{type:ofType("null"),value:0,primitiveValue:{}}:el.__proto__===Date.prototype||asPrototype(Date)?{type:ofType("date"),value:1,primitiveValue:new Date}:_Stringprototype===el.__proto__?{type:ofType(),value:el.length,primitiveValue:String()}:Array.prototype===el.__proto__||asPrototype(Array)?{type:ofType("array"),value:(el||[]).length,primitiveValue:[]}:Promise.prototype===(el||"").__proto__||asPrototype(Promise)?{type:ofType("promise"),value:1,primitiveValue:Function()}:Function.prototype===el.__proto__||asPrototype(Function)?{type:ofType(),value:1,primitiveValue:Function()}:Object.prototype===el.__proto__||asPrototype(Object)?{type:ofType(),value:Object.keys(el).length,primitiveValue:{}}:Error.prototype===el.__proto__||asPrototype(Error)?{type:ofType("error"),value:Object.keys(el).length,primitiveValue:Error()}:el.__proto__===_Numberprototype||asPrototype(Number)?isNaN(el)?{type:ofType("NaN"),value:0,primitiveValue:Number()}:{type:ofType(),value:el,primitiveValue:Number()}:!1===0<=+el?{type:typeof el,value:+el,primitiveValue:void 0}:{type:typeof el,value:0,primitiveValue:void 0}}catch(err){return error(err),{}}},isError=el=>Error.prototype===(el||"").__proto__,isFalse=el=>null===el||"undefined"===typeof el||!!("number"===typeof el&&1>el)||"boolean"===typeof el&&!1===el,isTrue=el=>null!==el&&"undefined"!==typeof el&&(!!("number"===typeof el&&0<el)||"boolean"===typeof el&&!0===el),isBoolean=el=>void 0!==el&&null!==el&&("boolean"===typeof el||Boolean.prototype===el.__proto__),head=function head(arr){return void 0===arr&&(arr=[]),Array.prototype===(arr||null).__proto__?arr.flat().shift():[]},last=function last(arr){return void 0===arr&&(arr=[]),arr&&Array.prototype===arr.__proto__?arr[arr.length-1]:null},validID=function validID(id){return void 0===id&&(id=""),id||""?(id||"").toString().toLowerCase().replace(/\s/g,""):""},isNumber=n=>!isBigInt(n)&&void 0!==n&&null!==n&&""!==n&&n.__proto__===_Numberprototype,stringSize=function stringSize(str){return void 0===str&&(str=""),void 0!==str&&null!==str?str.__proto__===_Stringprototype?str.length:0:0},isQPromise=defer=>{try{if(!0===(defer.promise!==void 0&&"function"===typeof defer.resolve&&"function"===typeof defer.reject))return!0}catch(err){}return!1},isPromise=defer=>!!isQPromise(defer)||Promise.prototype===(defer||{}).__proto__,isObject=obj=>{if("function"===typeof obj)return!1;if(isBigInt(obj))return!1;if(!isNaN(+obj)||void 0===obj)return!1;if(obj.__proto__===[].__proto__)return!1;var a=Object.prototype===obj.__proto__||Error.prototype===obj.__proto__,ab=a&&obj instanceof Object;return!!ab||!!(void 0!==obj.__proto__&&void 0!==obj.__proto__.__proto__&&obj.__proto__.__proto__===Object.prototype&&obj instanceof Object)||!!obj.prototype},uniq=function uniq(arr){return void 0===arr&&(arr=[]),arr.filter((el,i,all)=>all.indexOf(el)===i)},shuffle=function shuffle(arr){var _Mathfloor=Math.floor;if(void 0===arr&&(arr=[]),!isArray(arr))return[];for(var i=arr.length-1;0<i;i--){var j=_Mathfloor(Math.random()*i),k=arr[i];arr[i]=arr[j],arr[j]=k}return arr},selectiveArray=function selectiveArray(selectBy,data){if(void 0===selectBy&&(selectBy=[]),void 0===data&&(data=[{}]),!isArray(data))return[];if(!data.length)return[];if(!isArray(selectBy))return data;if(!selectBy.length)return data;selectBy=uniq(selectBy);for(var item,nData=[],findNest=function findNest(s,item,inx){void 0===inx&&(inx=0);var found,lastItem=null;if(s&&isArray(s)&&s.length){try{if(void 0!==item[s[inx]])return lastItem=item[s[inx]],found=lastItem,++inx,s[inx]?findNest(s,found,inx):found}catch(err){console.log(err.toString())}return found}},i=0;i<data.length;i++){if(item=data[i],!isObject(item)){nData.push([item]);continue}for(var sArr,found=void 0,collective=[],o=0;o<selectBy.length;o++){sArr=(selectBy[o]||"").split(".");try{found=findNest(sArr,item,0),collective.push(found)}catch(err){}}if(selectBy.length===collective.length){var allUndef=collective.filter(n=>void 0===n);allUndef.length===selectBy.length&&(collective=collective.filter(n=>!!n))}collective.length?nData.push([].concat(collective)):void 0!==found&&nData.push(found)}return nData},isClass=obj=>!!obj&&void 0!==obj.prototype,hasPrototype=isClass,hasProto=el=>{try{return el.__proto__!==void 0}catch(err){return!1}},isInstance=obj=>!!obj&&!isArray(obj)&&!!(obj.__proto__&&!isClass(obj)&&obj.__proto__.__proto__&&obj.__proto__.__proto__===Object.prototype&&obj instanceof Object),objectSize=function objectSize(obj){return void 0===obj&&(obj={}),obj&&isNaN(+obj)?isInstance(obj)?Object.keys(obj).length:Object.prototype===obj.__proto__||Error.prototype===obj.__proto__?Object.keys(obj).length:0:0},isFalsy=function isFalsy(el){return void 0===el&&(el=null),void 0===el||!1===el&&"boolean"===typeof el||null===el||(_Stringprototype===el.__proto__?1>el.length:Array.prototype===el.__proto__?0===(el||[]).length:Promise.prototype!==(el||{}).__proto__&&"function"!==typeof el&&(Object.prototype===el.__proto__||isInstance(el)?0===Object.keys(el).length:Error.prototype!==el.__proto__&&(void 0!==el&&el.__proto__===_Numberprototype?!!isNaN(el)||0>=el:!1===0<+el||!el&&!1)))},isString=str=>void 0!==str&&null!==str&&"boolean"!==typeof str&&(""===str||_Stringprototype===str.__proto__),isFunction=el=>"function"===typeof el,copy=data=>{try{return JSON.parse(JSON.stringify(data))}catch(err){return typeCheck(data).primitiveValue}},someKeyMatch=function someKeyMatch(object,source){if(void 0===object&&(object={}),void 0===source&&(source={}),!object||Object.prototype!==object.__proto__)return!1;if(!source||Object.prototype!==source.__proto__)return!1;var a=Object.keys(object),b=Object.keys(source);return a.length>=b.length?0<a.filter(z=>b.filter(zz=>zz===z).length).length:0<b.filter(z=>a.filter(zz=>zz===z).length).length},exactKeyMatch=function exactKeyMatch(object,source){if(void 0===object&&(object={}),void 0===source&&(source={}),!object||Object.prototype!==object.__proto__)return!1;if(!source||Object.prototype!==source.__proto__)return!1;var a=Object.keys(object),b=Object.keys(source);return a.length>=b.length?a.filter(z=>b.filter(zz=>zz===z).length).length===a.length:b.filter(z=>a.filter(zz=>zz===z).length).length===b.length},trueVal=function trueVal(arr){return void 0===arr&&(arr=[]),arr&&Array.prototype===arr.__proto__?[].concat(arr).filter(itm=>!0!==isFalsy(itm)):[]},trueValDeep=function trueValDeep(arr){return void 0===arr&&(arr=[]),arr&&Array.prototype===arr.__proto__?[].concat(arr).map(itm=>{var typeIs=typeCheck(itm,!1);return"array"===typeIs.type&&0<typeIs.value?itm.map(child=>0<typeCheck(child,!1).value?child:null).filter(n=>!!n):"object"===typeIs.type&&typeIs.value?Object.entries(itm).reduce((n,_ref3)=>{var[k,v]=_ref3;return 0<typeCheck(k,!1).value&&(n[k]=v),n},{}):0<typeIs.value?itm:null}).filter(n=>!!n):[]},trueProp=function trueProp(obj){return void 0===obj&&(obj={}),obj&&Object.prototype===obj.__proto__?Object.assign({},Object.entries(obj).reduce((n,_ref4)=>{var[key,val]=_ref4;return isFalsy(val)||(n[key]=val),n},{})):0},flatten=function flatten(arr){return void 0===arr&&(arr=[]),isArray(arr)?[].concat(...arr):[]},flattenDeep=function flattenDeep(arr){function test(arr,d){return void 0===d&&(d=1),0<d?arr.reduce((acc,val)=>acc.concat(Array.isArray(val)?test(val,d-1):val),[]):arr.slice()}return void 0===arr&&(arr=[]),isArray(arr)?test(arr,1/0):[]},chunks=(arr,size)=>Array.from({length:Math.ceil(arr.length/size)},(v,i)=>arr.slice(i*size,i*size+size)),dupes=(item,index)=>{for(var dups=[],n=parseInt(index);0<n;)n--,dups.push(item);return dups},uniqBy=function uniqBy(arr,propName){void 0===arr&&(arr=[]),void 0===propName&&(propName="");var stored={},n=[];if(!propName)return arr;if(!(arr||[]).length)return[];for(var _ret,_loop=function _loop(inx){var item=arr[inx];if(!isObject(item))return n.push(item),"continue";if(!item[propName])return n.push(item),"continue";var exists=Object.entries(stored).filter(_ref6=>{var[k]=_ref6;return item[propName]===stored[k]}).length;return exists?"continue":void(item[propName]!==stored[propName+(":"+inx)]&&(stored[propName+(":"+inx)]=item[propName],n.push(item)))},inx=0;inx<arr.length;inx++)_ret=_loop(inx),"continue"===_ret;return n},arrayWith=function arrayWith(arr,withProp){void 0===arr&&(arr=[]),void 0===withProp&&(withProp="");var objWith=o=>isObject(o)?-1===Object.keys(o).indexOf(withProp)?void 0:o:void 0;return arr.map(n=>objWith(n)).filter(n=>!!n)},exFromArray=function exFromArray(arr,excludes){if(void 0===arr&&(arr=[]),void 0===excludes&&(excludes=[]),excludes=[].concat(excludes),!excludes.length)return arr;var excludeFrom=function excludeFrom(obj,excludes){if(void 0===obj&&(obj={}),void 0===excludes&&(excludes=[]),!isObject(obj))return obj;var d=Object.entries(obj).reduce((n,_ref7)=>{var[k,val]=_ref7;return-1===excludes.indexOf(k)&&(n[k]=val),n},{});return isFalsy(d)?void 0:d};return arr.map(n=>excludeFrom(n,excludes))},pickFromArray=function pickFromArray(arr,picks){if(void 0===arr&&(arr=[]),void 0===picks&&(picks=[]),!isArray(arr))return[];if(isArray(picks)||(picks=[].concat(picks)),!picks.length)return arr;picks=picks.filter(n=>!isFalsy(n));var isInstanceByName=(item,pick)=>{if(isArray(item)&&isFunction(pick)){if("object"===pick.name.toLowerCase())return!1;if("array"===pick.name.toLowerCase())return!0}if(isObject(item)&&isFunction(pick)){if("array"===pick.name.toLowerCase())return!1;if("object"===pick.name.toLowerCase())return!0}try{return(pick.name||"").toLowerCase()===typeof item}catch(err){}},evalItem=item=>{for(var selected,pick,inx=0;inx<picks.length;inx++){if(pick=picks[inx],isObject(pick)&&isObject(item)){var pEntries=Object.entries(pick),pass=pEntries.filter(_ref8=>{var[k,val]=_ref8,ok=item[k]===val;return!!ok||(void 0===item[k]?void 0:isInstanceByName(item[k],val))}).length===Object.entries(item).length&&0<pEntries.length;if(pass&&objectSize(item)===objectSize(pick)){selected=!0;break}}if(isArray(pick)&&isArray(item)){var _pass=pick.filter(n=>item.filter(nn=>nn===n||isInstanceByName(nn,n)).length).length===item.length&&0<pick.length;if(_pass){selected=!0;break}}else if(pick===item){selected=!0;break}else if(isNumber(item)||isBoolean(item)||isString(item)||isArray(item)||isObject(item)||isFunction(item)){if(isInstanceByName(item,pick)){selected=!0;break}}else if(isInstanceByName(item,pick)){selected=!0;break}}return selected};return arr.reduce((n,el)=>(evalItem(el)&&n.push(el),n),[])};(function annotateAll(){isFalse.defaults=[{input:!0}],arrayWith.defaults=[{input:!0},{args:!0}],exFromArray.defaults=[{input:!0},{args:!0}],shuffle.defaults=[{input:!0}],head.defaults=[{input:!0}],flatten.defaults=[{input:!0}],uniqBy.defaults=[{input:!0},{args:!0}],chunks.defaults=[{input:!0},{args:!0}],isTrue.defaults=[{input:!0}],last.defaults=[{input:!0}],validID.defaults=[{input:!0}],isBigInt.defaults=[{input:!0}],isNumber.defaults=[{input:!0}],stringSize.defaults=[{input:!0}],selectiveArray.defaults=[{args:!0},{input:!0}],hasPrototype.defaults=[{input:!0}],hasProto.defaults=[{input:!0}],objectSize.defaults=[{input:!0}],isString.defaults=[{input:!0}],isFunction.defaults=[{input:!0}],someKeyMatch.defaults=[{input:!0},{input:!0}],exactKeyMatch.defaults=[{input:!0},{input:!0}],trueVal.defaults=[{input:!0}],trueValDeep.defaults=[{input:!0}],trueProp.defaults=[{input:!0}],flattenDeep.defaults=[{input:!0}],dupes.defaults=[{input:!0},{args:!0}],uniq.defaults=[{input:!0}],isPromise.defaults=[{input:!0}],isQPromise.defaults=[{input:!0}],isObject.defaults=[{input:!0}],isFalsy.defaults=[{input:!0}],isError.defaults=[{input:!0}],typeCheck.defaults=[{input:!0},{args:!0}],validDate.defaults=[{input:!0}],isInstance.defaults=[{input:!0}],isClass.defaults=[{input:!0}],isArray.defaults=[{input:!0}],pickFromArray.defaults=[{input:!0},{args:!0}]})(),exports.disableLogging=()=>{try{if(window)return window.xUtilsConfig?window.xUtilsConfig.logging="off":window.xUtilsConfig={logging:"off"},!0}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig.logging="off":global.xUtilsConfig={logging:"off"},!0}catch(err){}return!1},exports.resetLogging=()=>{try{if(window)return window.xUtilsConfig?window.xUtilsConfig.logging="on":window.xUtilsConfig={logging:"on"},!0}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig.logging="on":global.xUtilsConfig={logging:"on"},!0}catch(err){}return!1},exports.loggerSetting=function loggerSetting(logType,logMode){void 0===logType&&(logType="log"),void 0===logMode&&(logMode="off");if(!["log","warn","onerror","error","alert","attention","debug"].includes(logType)||!logType)return!1;if(!["on","off"].includes(logMode)||!logMode)return!1;"onerror"===logType&&(logType="error");try{if(window)return window.xUtilsConfig?window.xUtilsConfig[logType]=logMode:window.xUtilsConfig={[logType]:logMode},!0}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig[logType]=logMode:global.xUtilsConfig={[logType]:logMode},!0}catch(err){}return!1},exports.stack=function stack(data,asArray){if(void 0===asArray&&(asArray=!1),!!loggingON()){var stackList=new Error(JSON.stringify(data)).stack.split("(");stackList.splice(1,1);var stackHead=stackList[0].split(/\n/)[0].replace("Error","[STACK TRACE]");return stackList.splice(0,1),stackList.unshift(stackHead),void(asArray?console.log(stackList):console.log.apply(null,stackList))}},exports.errorTrace=function errorTrace(data,asArray){if(void 0===asArray&&(asArray=!1),!!loggingON()){var stackList=new Error(JSON.stringify(data)).stack.split("(");stackList.splice(1,1);var errHead=stackList[0].split(/\n/)[0].replace("Error","[ERROR]");return stackList.splice(0,1),stackList.unshift(errHead),void(asArray?console.error(stackList):console.error.apply(null,stackList))}},exports.loop=function loop(size,cb){void 0===size&&(size=0);var isNum="number"===typeof size;if(!("function"===typeof cb)||!isNum)return[];if(!size)return[];for(var r,d=[],inx=0;inx<Array(size).length;inx++){r=cb.apply(this,[inx]);try{if(r&&Object.entries(r).length&&r.break)break}catch(err){}d.push(r)}return d},exports.isFalse=isFalse,exports.isTrue=isTrue,exports.isBoolean=isBoolean,exports.isNull=el=>null===el,exports.isUndefined=el=>"undefined"===typeof el,exports.isEmpty=value=>!isError(value)&&!typeCheck(value).value,exports.head=head,exports.last=last,exports.timer=function timer(cb,time){void 0===time&&(time=0);if(!("function"===typeof cb))return null;time="number"===typeof time&&0<=time?time:0;var s=setTimeout(()=>{cb(),clearTimeout(s)},time)},exports.interval=function interval(cb,every,endTime){void 0===every&&(every=0),void 0===endTime&&(endTime=0);if(!("function"===typeof cb))return null;every="number"===typeof every&&0<=every?every:0,endTime="number"===typeof endTime&&0<=endTime?endTime:0;var counter=0,c=setInterval(()=>{endTime<=counter?clearInterval(c):cb(),counter+=every},every)},exports.sq=()=>{var res,rej,promise=new Promise((resolve,reject)=>{res=resolve,rej=reject});return{resolve:res,reject:rej,promise}},exports.validID=validID,exports.isBigInt=isBigInt,exports.isNumber=isNumber,exports.stringSize=stringSize,exports.cancelPromise=function cancelPromise(_ref){var{defer,checkEvery=500,maxWait=9500,cbErr,message="taken too long to respond",logging=!1,id}=_ref,validPromise=isPromise(defer)||isQPromise(defer);if(!validPromise||!(el=>"function"===typeof el)(cbErr)||!maxWait)return void onerror("[cancelPromise]","{defer,maxWait,cbErr} must be provided");var exit_interval,every=checkEvery||500;maxWait=maxWait||1;var inx=0,t=setInterval(()=>{if(exit_interval)return clearInterval(t);if(inx>maxWait){var args={error:message+", time: "+inx,defer,id};try{cbErr.apply(args,[args])}catch(err){onerror("[cancelPromise]",err)}return clearInterval(t)}logging&&(id?log("-- processing: ",id):alert("-- processing "));inx=every+inx},every);return defer.promise?defer.promise.then(n=>(exit_interval=!0,n)).catch(err=>err):defer.then?defer.then(n=>(exit_interval=!0,n)).catch(err=>err):void 0},exports.shuffle=shuffle,exports.selectiveArray=selectiveArray,exports.hasPrototype=hasPrototype,exports.hasProto=hasProto,exports.objectSize=objectSize,exports.isString=isString,exports.isFunction=isFunction,exports.copyBy=function copyBy(obj,refs){if(void 0===obj&&(obj={}),void 0===refs&&(refs=[]),!isObject(obj))return{};var d=[].concat(refs).reduce((n,el)=>(void 0!==obj[el]&&(n[el]=obj[el]),n),{});try{return JSON.parse(JSON.stringify(d))}catch(err){return{}}},exports.copyDeep=data=>{if(isArray(data))return data.map(n=>copy(n));if(isObject(data))return Object.entries(data).reduce((n,_ref2)=>{var[k,val]=_ref2;return n[k]=isObject(val)?Object.assign({},copy(val)):val,n},{});try{return JSON.parse(JSON.stringify(data))}catch(err){return typeCheck(data).primitiveValue}},exports.delay=function delay(time){void 0===time&&(time=100);var isNum="number"===typeof time&&0<=time;return isNum?new Promise(resolve=>{var t=setTimeout(()=>{clearTimeout(t),resolve(!0)},time)}):Promise.resolve(!0)},exports.someKeyMatch=someKeyMatch,exports.exactKeyMatch=exactKeyMatch,exports.trueVal=trueVal,exports.trueValDeep=trueValDeep,exports.trueProp=trueProp,exports.resolver=function resolver(fn,timeout,testEvery){void 0===timeout&&(timeout=5e3),void 0===testEvery&&(testEvery=50);return"function"===typeof fn?new Promise(resolve=>{var every=testEvery||50,max=timeout,inx=0,called=null,test=()=>{try{return called||(called=fn()),isPromise(called)?called:fn()}catch(error){return isError(error)?{error}:isObject(error)?error.error?error:{error:error}:{error:error.toString()}}},t=setInterval(_asyncToGenerator(function*(){if(inx>=max)return resolve(void 0),clearInterval(t);var anon=test();if(isPromise(anon))try{var d=yield anon;return resolve(d),clearInterval(t)}catch(error){return isError(error)&&resolve({error}),isObject(error)?error.error?resolve(error):resolve({error}):resolve({error:error.toString()}),clearInterval(t)}return void 0===anon?void(inx+=every):(resolve(anon),clearInterval(t))}),every)}):Promise.reject("fn() must be callable")},exports.flatten=flatten,exports.flattenDeep=flattenDeep,exports.chunks=chunks,exports.dupes=dupes,exports.uniqBy=uniqBy,exports.arrayWith=arrayWith,exports.exFromArray=exFromArray,exports.copy=copy,exports.uniq=uniq,exports.isPromise=isPromise,exports.isQPromise=isQPromise,exports.debug=function debug(){if(loggingON()&&"off"!==checkLoggerSetting("debug")){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];return logConstract("debug",args)}},exports.log=log,exports.warn=function warn(){if(loggingON()&&"off"!==checkLoggerSetting("warn")){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++)args[_key3]=arguments[_key3];return logConstract("warn",args)}},exports.onerror=onerror,exports.error=error,exports.alert=alert,exports.attention=function attention(){if(loggingON()&&"off"!==checkLoggerSetting("attention")){for(var _len5=arguments.length,args=Array(_len5),_key5=0;_key5<_len5;_key5++)args[_key5]=arguments[_key5];return logConstract("attention",args)}},exports.isObject=isObject,exports.isFalsy=isFalsy,exports.isError=isError,exports.typeCheck=typeCheck,exports.validDate=validDate,exports.isInstance=isInstance,exports.isClass=isClass,exports.isArray=isArray,exports.pickFromArray=pickFromArray;exports.notify=function notify(logData,err){throw void 0===logData&&(logData=null),void 0===err&&(err=null),"no notify support for x-utils-es, use: x-utils"}});
