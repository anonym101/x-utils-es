"use strict"

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
const disableLogging=()=>{try{if(window)return window.xUtilsConfig?window.xUtilsConfig.logging="off":window.xUtilsConfig={logging:"off"},!0}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig.logging="off":global.xUtilsConfig={logging:"off"},!0}catch(err){}return!1},resetLogging=()=>{try{if(window)return window.xUtilsConfig?window.xUtilsConfig.logging="on":window.xUtilsConfig={logging:"on"},!0}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig.logging="on":global.xUtilsConfig={logging:"on"},!0}catch(err){}return!1},loggerSetting=(logType="log",logMode="off")=>{if(!["log","warn","onerror","error","alert","attention","debug"].includes(logType)||!logType)return!1;if(!["on","off"].includes(logMode)||!logMode)return!1;"onerror"===logType&&(logType="error");try{if(window)return window.xUtilsConfig?window.xUtilsConfig[logType]=logMode:window.xUtilsConfig={[logType]:logMode},!0}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig[logType]=logMode:global.xUtilsConfig={[logType]:logMode},!0}catch(err){}return!1},checkLoggerSetting=logType=>{try{if(window)return window.xUtilsConfig?window.xUtilsConfig[logType]?window.xUtilsConfig[logType]:"on":"on"}catch(err){}try{return global.xUtilsConfig?global.xUtilsConfig[logType]?global.xUtilsConfig[logType]:"on":"on"}catch(err){}return"on"},loggingON=()=>{try{if(window)return"on"===(window.xUtilsConfig||{}).logging||(window.xUtilsConfig||{}).logging===void 0}catch(err){}try{return"on"===(global.xUtilsConfig||{}).logging||(global.xUtilsConfig||{}).logging===void 0}catch(err){}return!0},callFN=(cb=void 0)=>{if("function"!==typeof cb)return!1;try{let d=cb();return!0===d||0<d}catch(err){return!1}},logConstract=function(type="",args){args.length||(args[0]="");let allData=0===args.filter(n=>"string"===typeof n||n===void 0).length,format=allData?"%o":"";"log"===type&&(args=[].concat(`\x1b[90m[log]\x1b[0m\x1b[2m${format} `,args,"\x1B[0m")),"debug"===type&&(args=[].concat(`\x1b[90m[debug]\x1b[0m\x1b[32m${format} `,args,"\x1B[0m")),"warn"===type&&(args=[].concat(`\x1b[90m[warning]\x1b[0m\x1b[1m${format} `,args,"\x1B[0m")),"alert"===type&&(args=[].concat(`\x1b[90m[alert]\x1b[0m\x1b[33m${format} `,args,"\x1B[0m")),"attention"===type&&(args=[].concat(`\x1b[90m[attention]\x1b[0m\x1b[36m${format} `,args,"\x1B[0m"));try{return void(window&&console.log.apply(null,args))}catch(err){}console.log.apply(null,args)},log=function(...args){return loggingON()?"off"===checkLoggerSetting("log")?void 0:logConstract("log",args):void 0},debug=function(...args){return loggingON()?"off"===checkLoggerSetting("debug")?void 0:logConstract("debug",args):void 0},warn=function(...args){return loggingON()?"off"===checkLoggerSetting("warn")?void 0:logConstract("warn",args):void 0},alert=function(...args){return loggingON()?"off"===checkLoggerSetting("alert")?void 0:logConstract("alert",args):void 0},attention=function(...args){return loggingON()?"off"===checkLoggerSetting("attention")?void 0:logConstract("attention",args):void 0},error=function(...args){if(!loggingON())return;if("off"===checkLoggerSetting("error")||"off"===checkLoggerSetting("onerror"))return;args.length||(args[0]="");let allData=0===args.filter(n=>"string"===typeof n||n===void 0).length,format=allData?"%o":"";try{if(window)return args=[].concat(`\x1b[31m[error]\x1b[0m\x1b[31m${format} `,args,"\x1B[0m"),void console.error.apply(null,args)}catch(err){}args=[].concat(`\x1b[41m[error]\x1b[0m\x1b[31m${format} `,args,"\x1B[0m"),console.log.apply(null,args)},stack=(data,asArray=!1)=>{if(loggingON()){let stackList=new Error(JSON.stringify(data)).stack.split("(");stackList.splice(1,1);let stackHead=stackList[0].split(/\n/)[0].replace("Error","[STACK TRACE]");return stackList.splice(0,1),stackList.unshift(stackHead),void(asArray?console.log(stackList):console.log.apply(null,stackList))}},errorTrace=(data,asArray=!1)=>{if(loggingON()){let stackList=new Error(JSON.stringify(data)).stack.split("(");stackList.splice(1,1);let errHead=stackList[0].split(/\n/)[0].replace("Error","[ERROR]");return stackList.splice(0,1),stackList.unshift(errHead),void(asArray?console.error(stackList):console.error.apply(null,stackList))}},onerror=error,isFunction=el=>"function"===typeof el,isBigInt=n=>{try{return"bigint"===typeof n}catch(err){return!1}},loop=function(size=0,cb){if(!("function"===typeof cb)||!("number"===typeof size))return[];if(!size)return[];let d=[];for(let r,inx=0;inx<Array(size).length;inx++){r=cb.apply(this,[inx]);try{if(r&&Object.entries(r).length&&r.break)break}catch(err){}d.push(r)}return d},validDate=(dt,cbEval=void 0)=>{if(isFunction(cbEval)&&!callFN(cbEval))return!1;try{return!(dt.__proto__!==Date.prototype||"Invalid Date"===dt.toString())}catch(err){return!1}},isArray=(arr,cbEval=void 0)=>(!isFunction(cbEval)||callFN(cbEval))&&!isBigInt(arr)&&!!arr&&Array.prototype===arr.__proto__,typeCheck=(el,standard=!0)=>{var _Numberprototype=Number.prototype,_Stringprototype=String.prototype;const ofType=type=>standard?typeof el:type||typeof el,asPrototype=Type=>Type.prototype===el.prototype;try{return"symbol"===typeof el?{type:ofType(),value:0,primitiveValue:Symbol("")}:void 0===el?{type:ofType(),value:0,primitiveValue:void 0}:"boolean"===typeof el?{type:ofType(),value:+el,primitiveValue:Boolean()}:"bigint"===typeof el&&"object"===typeof Object(el)?{type:ofType(),value:1,primitiveValue:BigInt("")}:null===el?{type:ofType("null"),value:0,primitiveValue:{}}:el.__proto__===Date.prototype||asPrototype(Date)?{type:ofType("date"),value:1,primitiveValue:new Date}:_Stringprototype===el.__proto__?{type:ofType(),value:el.length,primitiveValue:String()}:Array.prototype===el.__proto__||asPrototype(Array)?{type:ofType("array"),value:(el||[]).length,primitiveValue:[]}:Promise.prototype===(el||"").__proto__||asPrototype(Promise)?{type:ofType("promise"),value:1,primitiveValue:Function()}:Function.prototype===el.__proto__||asPrototype(Function)?{type:ofType(),value:1,primitiveValue:Function()}:Object.prototype===el.__proto__||asPrototype(Object)?{type:ofType(),value:Object.keys(el).length,primitiveValue:{}}:Error.prototype===el.__proto__||asPrototype(Error)?{type:ofType("error"),value:Object.keys(el).length,primitiveValue:Error()}:el.__proto__===_Numberprototype||asPrototype(Number)?isNaN(el)?{type:ofType("NaN"),value:0,primitiveValue:Number()}:{type:ofType(),value:el,primitiveValue:Number()}:!1===0<=+el?{type:typeof el,value:+el,primitiveValue:void 0}:{type:typeof el,value:0,primitiveValue:void 0}}catch(err){return error(err),{}}},isError=el=>Error.prototype===(el||"").__proto__,isFalse=el=>null===el||"undefined"===typeof el||!!("number"===typeof el&&1>el)||"boolean"===typeof el&&!1===el,isTrue=el=>null!==el&&"undefined"!==typeof el&&(!!("number"===typeof el&&0<el)||"boolean"===typeof el&&!0===el),isBoolean=el=>void 0!==el&&null!==el&&("boolean"===typeof el||Boolean.prototype===el.__proto__),isNull=el=>null===el,isUndefined=el=>"undefined"===typeof el,isEmpty=value=>!isError(value)&&!typeCheck(value).value,head=(arr=[])=>Array.prototype===(arr||null).__proto__?arr.flat().shift():[],last=(arr=[])=>arr&&Array.prototype===arr.__proto__?arr[arr.length-1]:null,timer=(cb,time=0)=>{if(!("function"===typeof cb))return null;time="number"===typeof time&&0<=time?time:0;const s=setTimeout(()=>{cb(),clearTimeout(s)},time)},interval=(cb,every=0,endTime=0)=>{if(!("function"===typeof cb))return null;every="number"===typeof every&&0<=every?every:0,endTime="number"===typeof endTime&&0<=endTime?endTime:0;let counter=0;const c=setInterval(()=>{endTime<=counter?clearInterval(c):cb(),counter+=every},every)},sq=()=>new function SimpleQ(){let res,rej;this.promise=new Promise((resolve,reject)=>{res=resolve,rej=reject}),this.resolve=res,this.reject=rej},validID=(id="")=>id||""?(id||"").toString().toLowerCase().replace(/\s/g,""):"",isNumber=n=>!isBigInt(n)&&void 0!==n&&null!==n&&""!==n&&n.__proto__===Number.prototype,isDate=d=>{try{return d instanceof Date}catch(err){return!1}},stringSize=(str="")=>str!==void 0&&null!==str?str.__proto__===String.prototype?str.length:0:0,isQPromise=defer=>{try{if(!0===(defer.promise!==void 0&&"function"===typeof defer.resolve&&"function"===typeof defer.reject&&"function"===typeof defer.fulfill&&"function"===typeof defer.notify))return!0}catch(err){}return!1},isSQ=defer=>{try{return"SimpleQ"===defer.__proto__.constructor.name}catch(err){return!1}},isPromise=defer=>{if(isQPromise(defer))return!0;try{if(defer instanceof Promise)return!0;if(isSQ(defer))return!0}catch(err){console.log("err",err)}return!1},cancelPromise=function({defer,checkEvery=500,maxWait=9500,cbErr,message="taken too long to respond",logging=!1,id}){let validPromise=isPromise(defer)||isQPromise(defer);if(!validPromise||!(el=>"function"===typeof el)(cbErr)||!maxWait)return void onerror("[cancelPromise]","{defer,maxWait,cbErr} must be provided");let exit_interval,every=checkEvery||500;maxWait=maxWait||1;let inx=0;const t=setInterval(()=>{if(exit_interval)return clearInterval(t);if(inx>maxWait){let args={error:`${message}, time: ${inx}`,defer,id};try{cbErr.apply(args,[args])}catch(err){onerror("[cancelPromise]",err)}return clearInterval(t)}logging&&(id?log("-- processing: ",id):alert("-- processing "));inx=every+inx},every);return defer.promise?defer.promise.then(n=>(exit_interval=!0,n)).catch(err=>err):defer.then?defer.then(n=>(exit_interval=!0,n)).catch(err=>err):void 0},isObject=(obj,cbEval=void 0)=>{if(isFunction(cbEval)&&!callFN(cbEval))return!1;if("function"===typeof obj)return!1;if(isBigInt(obj))return!1;if(!isNaN(+obj)||void 0===obj)return!1;if(obj.__proto__===[].__proto__)return!1;const a=Object.prototype===obj.__proto__||Error.prototype===obj.__proto__,ab=a&&obj instanceof Object;return!!ab||!!(void 0!==obj.__proto__&&void 0!==obj.__proto__.__proto__&&obj.__proto__.__proto__===Object.prototype&&obj instanceof Object)||!!obj.prototype},uniq=(arr=[])=>arr.filter((el,i,all)=>all.indexOf(el)===i),shuffle=(arr=[])=>{if(!isArray(arr))return[];for(let i=arr.length-1;0<i;i--){const j=Math.floor(Math.random()*i),k=arr[i];arr[i]=arr[j],arr[j]=k}return arr},selectiveArray=(selectBy=[],data=[{}])=>{if(!isArray(data))return[];if(!data.length)return[];if(!isArray(selectBy))return data;if(!selectBy.length)return data;selectBy=uniq(selectBy);let nData=[],findNest=(s,item,inx=0)=>{let found,lastItem=null;if(s&&isArray(s)&&s.length){try{if(void 0!==item[s[inx]])return lastItem=item[s[inx]],found=lastItem,++inx,s[inx]?findNest(s,found,inx):found}catch(err){console.log(err.toString())}return found}};for(let item,i=0;i<data.length;i++){if(item=data[i],!isObject(item)){nData.push([item]);continue}let found,collective=[];for(let sArr,o=0;o<selectBy.length;o++){sArr=(selectBy[o]||"").split(".");try{found=findNest(sArr,item,0),collective.push(found)}catch(err){}}if(selectBy.length===collective.length){let allUndef=collective.filter(n=>void 0===n);allUndef.length===selectBy.length&&(collective=collective.filter(n=>!!n))}collective.length?nData.push([].concat(collective)):void 0!==found&&nData.push(found)}return nData},isClass=(obj,cbEval=void 0)=>(!isFunction(cbEval)||callFN(cbEval))&&!!obj&&void 0!==obj.prototype,hasPrototype=isClass,hasProto=(el,cbEval=void 0)=>{if(isFunction(cbEval)&&!callFN(cbEval))return!1;try{return el.__proto__!==void 0}catch(err){return!1}},isInstance=(obj,cbEval=void 0)=>(!isFunction(cbEval)||callFN(cbEval))&&!!obj&&!isArray(obj)&&!!(obj.__proto__&&!isClass(obj)&&obj.__proto__.__proto__&&obj.__proto__.__proto__===Object.prototype&&obj instanceof Object),objectSize=(obj={})=>obj&&isNaN(+obj)?isInstance(obj)?Object.keys(obj).length:Object.prototype===obj.__proto__||Error.prototype===obj.__proto__?Object.keys(obj).length:0:0,isFalsy=(el=null)=>void 0===el||!1===el&&"boolean"===typeof el||null===el||(String.prototype===el.__proto__?1>el.length:Array.prototype===el.__proto__?0===(el||[]).length:Promise.prototype!==(el||{}).__proto__&&"function"!==typeof el&&(Object.prototype===el.__proto__||isInstance(el)?0===Object.keys(el).length:Error.prototype!==el.__proto__&&(void 0!==el&&el.__proto__===Number.prototype?!!isNaN(el)||0>=el:!1===0<+el||!el&&!1))),isString=(str,cbEval=void 0)=>(!isFunction(cbEval)||callFN(cbEval))&&void 0!==str&&null!==str&&"boolean"!==typeof str&&(""===str||String.prototype===str.__proto__),copyBy=(obj={},refs=[])=>{if(!isObject(obj))return{};const d=[].concat(refs).reduce((n,el)=>(void 0!==obj[el]&&(n[el]=obj[el]),n),{});try{return JSON.parse(JSON.stringify(d))}catch(err){return{}}},copy=data=>{try{return JSON.parse(JSON.stringify(data))}catch(err){return typeCheck(data).primitiveValue}},copyDeep=data=>{if(isArray(data))return data.map(n=>copy(n));if(isObject(data))return Object.entries(data).reduce((n,[k,val])=>(n[k]=isObject(val)?{...copy(val)}:val,n),{});try{return JSON.parse(JSON.stringify(data))}catch(err){return typeCheck(data).primitiveValue}},delay=(time=100)=>{return"number"===typeof time&&0<=time?new Promise(resolve=>{const t=setTimeout(()=>{clearTimeout(t),resolve(!0)},time)}):Promise.resolve(!0)},someKeyMatch=(object={},source={},cbEval=void 0)=>{if(isFunction(cbEval)&&!callFN(cbEval))return!1;if(!object||Object.prototype!==object.__proto__)return!1;if(!source||Object.prototype!==source.__proto__)return!1;const a=Object.keys(object),b=Object.keys(source);return a.length>=b.length?0<a.filter(z=>b.filter(zz=>zz===z).length).length:0<b.filter(z=>a.filter(zz=>zz===z).length).length},exactKeyMatch=(object={},source={},cbEval=void 0)=>{if(isFunction(cbEval)&&!callFN(cbEval))return!1;if(!object||Object.prototype!==object.__proto__)return!1;if(!source||Object.prototype!==source.__proto__)return!1;const a=Object.keys(object),b=Object.keys(source);return a.length>=b.length?a.filter(z=>b.filter(zz=>zz===z).length).length===a.length:b.filter(z=>a.filter(zz=>zz===z).length).length===b.length},trueVal=(arr=[])=>arr&&Array.prototype===arr.__proto__?[].concat(arr).filter(itm=>!0!==isFalsy(itm)):[],trueValDeep=(arr=[])=>arr&&Array.prototype===arr.__proto__?[].concat(arr).map(itm=>{const typeIs=typeCheck(itm,!1);return"array"===typeIs.type&&0<typeIs.value?itm.map(child=>0<typeCheck(child,!1).value?child:null).filter(n=>!!n):"object"===typeIs.type&&typeIs.value?Object.entries(itm).reduce((n,[k,v])=>(0<typeCheck(k,!1).value&&(n[k]=v),n),{}):0<typeIs.value?itm:null}).filter(n=>!!n):[],trueProp=(obj={})=>obj&&Object.prototype===obj.__proto__?Object.assign({},Object.entries(obj).reduce((n,[key,val])=>(isFalsy(val)||(n[key]=val),n),{})):0,resolver=(fn,timeout=5e3,testEvery=50)=>{return"function"===typeof fn?new Promise(resolve=>{let every=testEvery||50,inx=0,called=null,test=()=>{try{return called||(called=fn()),isPromise(called)?called:fn()}catch(error){return isError(error)?{error}:isObject(error)?error.error?error:{error:error}:{error:error.toString()}}},t=setInterval(async()=>{if(inx>=timeout)return resolve(void 0),clearInterval(t);let anon=test();if(isPromise(anon))try{let d=await anon;return resolve(d),clearInterval(t)}catch(error){return isError(error)&&resolve({error}),isObject(error)?error.error?resolve(error):resolve({error}):resolve({error:error.toString()}),clearInterval(t)}return void 0===anon?void(inx+=every):(resolve(anon),clearInterval(t))},every)}):Promise.reject("fn() must be callable")},flatten=(arr=[])=>isArray(arr)?[].concat(...arr):[],flattenDeep=(arr=[])=>{function test(arr,d=1){return 0<d?arr.reduce((acc,val)=>acc.concat(Array.isArray(val)?test(val,d-1):val),[]):arr.slice()}return isArray(arr)?test(arr,1/0):[]},chunks=(arr,size)=>Array.from({length:Math.ceil(arr.length/size)},(v,i)=>arr.slice(i*size,i*size+size)),dupes=(item,index)=>{const dups=[];for(let n=parseInt(index);0<n;)n--,dups.push(item);return dups},uniqBy=(arr=[],propName="")=>{const stored={},n=[];if(!propName)return arr;if(!(arr||[]).length)return[];for(let item,inx=0;inx<arr.length;inx++){if(item=arr[inx],!isObject(item)){n.push(item);continue}if(!item[propName]){n.push(item);continue}let exists=Object.entries(stored).filter(([k])=>item[propName]===stored[k]).length;exists||item[propName]!==stored[propName+`:${inx}`]&&(stored[propName+`:${inx}`]=item[propName],n.push(item))}return n},arrayWith=(arr=[],withProp="")=>{let objWith=o=>isObject(o)?-1===Object.keys(o).indexOf(withProp)?void 0:o:void 0;return arr.map(n=>objWith(n)).filter(n=>!!n)},exFromArray=(arr=[],excludes=[])=>{if(excludes=[].concat(excludes),!excludes.length)return arr;const excludeFrom=(obj={},excludes=[])=>{if(!isObject(obj))return obj;const d=Object.entries(obj).reduce((n,[k,val])=>(-1===excludes.indexOf(k)&&(n[k]=val),n),{});return isFalsy(d)?void 0:d};return arr.map(n=>excludeFrom(n,excludes))},pickFromArray=(arr=[],picks=[])=>{if(!isArray(arr))return[];if(isArray(picks)||(picks=[].concat(picks)),!picks.length)return arr;let allowedPicks=[void 0,null,!1];if(picks=picks.filter(n=>!isFalsy(n)||allowedPicks.filter(nn=>nn===n||(isNumber(n)&&!isNaN(n)).length)),!picks.length)return arr;let isInstanceByName=(item,pick)=>{if(isArray(item)&&isFunction(pick)){if("object"===pick.name.toLowerCase())return!1;if("array"===pick.name.toLowerCase())return!0}if(isObject(item)&&isFunction(pick)){if("array"===pick.name.toLowerCase())return!1;if("object"===pick.name.toLowerCase())return!0}try{return(pick.name||"").toLowerCase()===typeof item}catch(err){}},evalItem=item=>{let selected;for(let pick,inx=0;inx<picks.length;inx++){if(pick=picks[inx],isObject(pick)&&isObject(item)){let pEntries=Object.entries(pick),pass=pEntries.filter(([k,val])=>{let ok=item[k]===val;return!!ok||(void 0===item[k]?void 0:isInstanceByName(item[k],val))});if(pass=pass.length===pEntries.length&&Object.entries(item).length>=pass.length,pass&&objectSize(item)>=objectSize(pick)){selected=!0;break}}if(isArray(pick)&&isArray(item)){let pass=pick.filter(n=>item.filter(nn=>nn===n||isInstanceByName(nn,n)).length);if(pass=pass.length===pick.length&&item.length>=pass.length,pass){selected=!0;break}}else if(pick===item){selected=!0;break}else if(isNumber(item)||isBoolean(item)||isString(item)||isArray(item)||isObject(item)||isFunction(item)){if(isInstanceByName(item,pick)){selected=!0;break}}else if(isInstanceByName(item,pick)){selected=!0;break}}return selected};return arr.reduce((n,el)=>(evalItem(el)&&n.push(el),n),[])},dispatcher=(uid,debug)=>new function dispatcher(uid,debug){const plugin=`[dispatcher]`;this.uid=((uid||"").toString()||new Date().getTime()).toString(),this.debug=debug,this.cbQueue={},this.dispatchInstance={},this._isActive=null,this._onComplete_cb=null,this.index=0,this.data=null,this.onComplete=cb=>(this._onComplete_cb=cb,this),this.initListener=()=>(this.Dispatch(),this._isActive=!0,this),this.next=(data=null)=>(!1!==this._isActive&&this.initListener(),this.dispatchInstance[this.uid]?this.dispatchInstance[this.uid].next(data):this.debug&&log({message:`${plugin} for uid not available`,uid:this.uid}),this),this.Dispatch=()=>{if(this.dispatchInstance[this.uid])return this;const self=this;return this.dispatchInstance[this.uid]||(this.dispatchInstance[this.uid]=new function(){this.uid=self.uid,this.data=null,this.next=data=>("cb"!==(data||{}).type&&(this.data=data),"cb"===(data||{}).type?void("function"===typeof data.cb&&(!self.cbQueue[self.uid]&&(self.cbQueue[self.uid]=data.cb),this.data&&(self.index++,self.data=this.data,data.cb.call(self,this.data,self.uid,self.index)))):void(this.data?"function"===typeof self.cbQueue[self.uid]&&(self.index++,self.data=this.data,self.cbQueue[self.uid].call(self,this.data,self.uid,self.index)):self.debug&&warn(`${plugin} no callback data`)))}),this},this.isActive=()=>this._isActive,this.del=()=>(delete this.cbQueue[this.uid],delete this.dispatchInstance[this.uid],this._isActive=!1,"function"===typeof this._onComplete_cb&&this._onComplete_cb(this.uid),this),this.subscribe=cb=>{return"function"===typeof cb?(this.dispatchInstance[this.uid]||this.Dispatch(),this.dispatchInstance[this.uid]&&this.dispatchInstance[this.uid].next({type:"cb",cb}),this):(this.debug&&warn(`${plugin}[subscribe] cb must be set`),this)},this.init=this.initListener,this.sub=this.subscribe,this.emit=this.next,this.delete=this.del,this.unsubscribe=this.del}(uid,debug),withHoc=(item=()=>{},...args)=>{let extraArgs=args;return(...args)=>{let argsFN=()=>{let _args;return _args=extraArgs?[].concat(args,extraArgs):args,_args};if(item instanceof Function)try{return item(...argsFN())}catch(err){onerror("[HOC]",err)}else{if(isPromise(item)){return(()=>{return(()=>item.promise?item.promise:item)().then(defItem=>isFunction(defItem)?defItem(...argsFN()):Promise.reject("DEFERRED_NOT_CALLABLE"),err=>isFunction(err)?Promise.reject(err(...argsFN())):Promise.reject("DEFERRED_NOT_CALLABLE"))})()}onerror("[HOC]","item() must be callable function")}}};(function annotateSupported(){isFalse.defaults=[{input:!0}],arrayWith.defaults=[{input:!0},{args:!0}],exFromArray.defaults=[{input:!0},{args:!0}],shuffle.defaults=[{input:!0}],head.defaults=[{input:!0}],flatten.defaults=[{input:!0}],uniqBy.defaults=[{input:!0},{args:!0}],chunks.defaults=[{input:!0},{args:!0}],isTrue.defaults=[{input:!0}],last.defaults=[{input:!0}],validID.defaults=[{input:!0}],isBigInt.defaults=[{input:!0}],isNumber.defaults=[{input:!0}],stringSize.defaults=[{input:!0}],selectiveArray.defaults=[{args:!0},{input:!0}],hasPrototype.defaults=[{input:!0}],hasProto.defaults=[{input:!0}],objectSize.defaults=[{input:!0}],isString.defaults=[{input:!0}],isFunction.defaults=[{input:!0}],someKeyMatch.defaults=[{input:!0},{input:!0}],exactKeyMatch.defaults=[{input:!0},{input:!0}],trueVal.defaults=[{input:!0}],trueValDeep.defaults=[{input:!0}],trueProp.defaults=[{input:!0}],flattenDeep.defaults=[{input:!0}],dupes.defaults=[{input:!0},{args:!0}],uniq.defaults=[{input:!0}],isPromise.defaults=[{input:!0}],isQPromise.defaults=[{input:!0}],isObject.defaults=[{input:!0}],isFalsy.defaults=[{input:!0}],isError.defaults=[{input:!0}],typeCheck.defaults=[{input:!0},{args:!0}],validDate.defaults=[{input:!0}],isInstance.defaults=[{input:!0}],isClass.defaults=[{input:!0}],isArray.defaults=[{input:!0}],pickFromArray.defaults=[{input:!0},{args:!0}],isSQ.defaults=[{input:!0}],withHoc.defaults=[{input:!0},{args:!0}],isDate.defaults=[{input:!0}]})();export{disableLogging};export{resetLogging};export{loggerSetting};export{stack};export{errorTrace};export{loop};export{isFalse};export{isTrue};export{isBoolean};export{isNull};export{isUndefined};export{isEmpty};export{head};export{last};export{timer};export{interval};export{sq};export{validID};export{isBigInt};export{isNumber};export{stringSize};export{cancelPromise};export{shuffle};export{selectiveArray};export{hasPrototype};export{hasProto};export{objectSize};export{isString};export{isFunction};export{copyBy};export{copyDeep};export{delay};export{someKeyMatch};export{exactKeyMatch};export{trueVal};export{trueValDeep};export{trueProp};export{resolver};export{flatten};export{flattenDeep};export{chunks};export{dupes};export{uniqBy};export{arrayWith};export{exFromArray};export{copy};export{uniq};export{isPromise};export{isQPromise};export{debug};export{log};export{warn};export{onerror};export{error};export{alert};export{attention};export{isObject};export{isFalsy};export{isError};export{typeCheck};export{validDate};export{isInstance};export{isClass};export{isArray};export{pickFromArray};export{dispatcher};export{isSQ};export{withHoc};export{isDate};export const notify=function(logData=null,err=null){throw"no notify support for x-utils-es, use: x-utils"};
