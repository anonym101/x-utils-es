"use strict"
/* tslint:disable */
/* eslint-disable */
/* eslint-disable no-proto */

/**
 * @x-utils
 * * Simple javascript, lodash alternative library
 * * Developed by Anon
 * * License: CC-BY-SA-4.0
 * * For projects contact me at: eaglex.net
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProcessModel = exports.processQue = exports.ProcessQue = exports.dispatcher = exports.Dispatcher = undefined;

var _ProcessQue = require("./ProcessQue");

var _src = require("../src");

function Dispatcher(uid, debug) {
  var _this = this;

  var plugin = "[dispatcher]";
  this.uid = ((uid || '').toString() || new Date().getTime()).toString(); // id generated if not provided

  this.debug = debug;
  this.cbQueue = {};
  this.dispatchInstance = {};
  this._isActive = null;
  this._onComplete_cb = null;
  this.index = 0; // count callbacks

  this.data = null; // dynamic next data becomes available when subscribe event is received
  // shorthand aliases

  /** 
   * @onComplete
   * when subscribe event is deleted complete even callback can be called
  */

  this.onComplete = cb => {
    this._onComplete_cb = cb;
    return this;
  };
  /** 
   * @Dispatch
   * initialize the dispatcher
  */


  this.initListener = () => {
    this.Dispatch();
    this._isActive = true;
    return this;
  };
  /**
   * @next
   * send data to `subscribe` callback
   * @param {*} data any
   */


  this.next = function (data) {
    if (data === void 0) {
      data = null;
    }

    if (_this._isActive !== false) _this.initListener(); // in case next is called above subscribe, we need to make sure it is initiated

    if (_this.dispatchInstance[_this.uid]) _this.dispatchInstance[_this.uid].next(data);else {
      if (_this.debug) (0, _src.log)({
        message: plugin + " for uid not available",
        uid: _this.uid
      });
    }
    return _this;
  };
  /**
   * @Dispatch
   * master listener, sends all event callbacks to `subscribe`
   */


  this.Dispatch = () => {
    if (this.dispatchInstance[this.uid]) return this;
    var self = this;

    var D = function D() {
      this.uid = self.uid;
      this.data = null;

      this.next = data => {
        if ((data || {}).type !== 'cb') this.data = data;
        /**
             * @next
             * acts as a reverse callback, it sends back the `cb` from `subscribe`
             */

        if ((data || {}).type === 'cb') {
          if (typeof data.cb === 'function') {
            // when calling next before subscribe is initiated
            // collect cb from .next
            if (!self.cbQueue[self.uid]) self.cbQueue[self.uid] = data.cb;

            if (this.data) {
              self.index++;
              self.data = this.data;
              data.cb.call(self, this.data, self.uid, self.index);
            }
          }

          return;
        }

        if (this.data) {
          if (typeof self.cbQueue[self.uid] === 'function') {
            self.index++;
            self.data = this.data;
            self.cbQueue[self.uid].call(self, this.data, self.uid, self.index);
          }
        } else {
          if (self.debug) (0, _src.warn)(plugin + " no callback data");
        }
      };
    };

    if (!this.dispatchInstance[this.uid]) this.dispatchInstance[this.uid] = new D();
    return this;
  };
  /** 
   * @isActive
   * check if current Dispatcher is still valid and active
  */


  this.isActive = () => {
    return this._isActive;
  };
  /** 
   * @del
   * delete dispatcher
  */


  this.del = () => {
    delete this.cbQueue[this.uid];
    delete this.dispatchInstance[this.uid];
    this._isActive = false;
    if (typeof this._onComplete_cb === 'function') this._onComplete_cb(this.uid);
    return this;
  };
  /**
   * @subscribe
   * wait for callbacks forwarded from Dispatch and returned in callback of this method
   * - Dispatch must be set initially before you call `subscribe`
   * @param {*} cb required
   */


  this.subscribe = cb => {
    var isFN = typeof cb === 'function';

    if (!isFN) {
      if (this.debug) (0, _src.warn)(plugin + "[subscribe] cb must be set");
      return this;
    }

    if (!this.dispatchInstance[this.uid]) {
      // this means subscribe was executed prior to `Dispatch`, because it has forward with next
      // it will get executed anyway
      this.Dispatch();
    }

    if (this.dispatchInstance[this.uid]) this.dispatchInstance[this.uid].next({
      type: 'cb',
      cb
    });
    return this;
  };
  /** 
  * @alias initListener
  */


  this.init = this.initListener;
  /** 
   * @alias subscribe
  */

  this.sub = this.subscribe;
  /** 
  * @alias next
  */

  this.emit = this.next;
  /** 
  * @alias del
  */

  this.delete = this.del;
  /** 
   * @alias del
  */

  this.unsubscribe = this.del; // end
}
/**
 * @memberof Dispatcher
 * @instanceof Dispatcher
 * @param {*} uid (optional) or will auto assing
 * @param {*} debug to see more available loggin
 */


var dispatcher = function dispatcher(uid, debug) {
  if (debug === void 0) {
    debug = false;
  }

  return new Dispatcher(uid, debug);
};

exports.Dispatcher = Dispatcher; // for Model checking

exports.dispatcher = dispatcher; // already initiated instance

exports.ProcessQue = _ProcessQue.ProcessQue;
exports.processQue = _ProcessQue.processQue;
exports.ProcessModel = _ProcessQue.ProcessModel;
