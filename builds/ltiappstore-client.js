/* ltiappstore-client 1.0.0 MIT */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ltiappstoreClient = factory());
}(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var bind = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);

      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }

      return fn.apply(thisArg, args);
    };
  };

  var toString = Object.prototype.toString;
  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */

  function isArray(val) {
    return toString.call(val) === '[object Array]';
  }
  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */


  function isUndefined(val) {
    return typeof val === 'undefined';
  }
  /**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */


  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
  }
  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */


  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }
  /**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */


  function isFormData(val) {
    return typeof FormData !== 'undefined' && val instanceof FormData;
  }
  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */


  function isArrayBufferView(val) {
    var result;

    if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
      result = ArrayBuffer.isView(val);
    } else {
      result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    }

    return result;
  }
  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */


  function isString(val) {
    return typeof val === 'string';
  }
  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */


  function isNumber(val) {
    return typeof val === 'number';
  }
  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */


  function isObject(val) {
    return val !== null && _typeof(val) === 'object';
  }
  /**
   * Determine if a value is a plain Object
   *
   * @param {Object} val The value to test
   * @return {boolean} True if value is a plain Object, otherwise false
   */


  function isPlainObject(val) {
    if (toString.call(val) !== '[object Object]') {
      return false;
    }

    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }
  /**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */


  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }
  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */


  function isFile(val) {
    return toString.call(val) === '[object File]';
  }
  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */


  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }
  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */


  function isFunction(val) {
    return toString.call(val) === '[object Function]';
  }
  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */


  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }
  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */


  function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }
  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */


  function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
  }
  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */


  function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' || navigator.product === 'NativeScript' || navigator.product === 'NS')) {
      return false;
    }

    return typeof window !== 'undefined' && typeof document !== 'undefined';
  }
  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */


  function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    } // Force an array if not already something iterable


    if (_typeof(obj) !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }

    if (isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */


  function
    /* obj1, obj2, obj3, ... */
  merge() {
    var result = {};

    function assignValue(val, key) {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }

    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }

    return result;
  }
  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */


  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  /**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   * @return {string} content value without BOM
   */


  function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }

    return content;
  }

  var utils$1 = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
  };

  function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
  }
  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */


  var buildURL = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }

    var serializedParams;

    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils$1.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
      utils$1.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }

        if (utils$1.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }

        utils$1.forEach(val, function parseValue(v) {
          if (utils$1.isDate(v)) {
            v = v.toISOString();
          } else if (utils$1.isObject(v)) {
            v = JSON.stringify(v);
          }

          parts.push(encode(key) + '=' + encode(v));
        });
      });
      serializedParams = parts.join('&');
    }

    if (serializedParams) {
      var hashmarkIndex = url.indexOf('#');

      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }

      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }

    return url;
  };

  function InterceptorManager() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */


  InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  };
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */


  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */


  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils$1.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };

  var InterceptorManager_1 = InterceptorManager;

  var global$1 = typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {};

  // based off https://github.com/defunctzombie/node-process/blob/master/browser.js

  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }

  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }

  var cachedSetTimeout = defaultSetTimout;
  var cachedClearTimeout = defaultClearTimeout;

  if (typeof global$1.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
  }

  if (typeof global$1.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
  }

  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      //normal enviroments in sane situations
      return setTimeout(fun, 0);
    } // if setTimeout wasn't available but was latter defined


    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }

    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }

  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      //normal enviroments in sane situations
      return clearTimeout(marker);
    } // if clearTimeout wasn't available but was latter defined


    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }

    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
        return cachedClearTimeout.call(this, marker);
      }
    }
  }

  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;

  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }

    draining = false;

    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }

    if (queue.length) {
      drainQueue();
    }
  }

  function drainQueue() {
    if (draining) {
      return;
    }

    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;

    while (len) {
      currentQueue = queue;
      queue = [];

      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }

      queueIndex = -1;
      len = queue.length;
    }

    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }

  function nextTick(fun) {
    var args = new Array(arguments.length - 1);

    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }

    queue.push(new Item(fun, args));

    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  } // v8 likes predictible objects


  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }

  Item.prototype.run = function () {
    this.fun.apply(null, this.array);
  };

  var title = 'browser';
  var platform = 'browser';
  var browser = true;
  var env = {};
  var argv = [];
  var version = ''; // empty string to avoid regexp issues

  var versions = {};
  var release = {};
  var config = {};

  function noop() {}

  var on = noop;
  var addListener = noop;
  var once = noop;
  var off = noop;
  var removeListener = noop;
  var removeAllListeners = noop;
  var emit = noop;

  function binding(name) {
    throw new Error('process.binding is not supported');
  }

  function cwd() {
    return '/';
  }

  function chdir(dir) {
    throw new Error('process.chdir is not supported');
  }

  function umask() {
    return 0;
  } // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js


  var performance = global$1.performance || {};

  var performanceNow = performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow || function () {
    return new Date().getTime();
  }; // generate timestamp or delta
  // see http://nodejs.org/api/process.html#process_process_hrtime


  function hrtime(previousTimestamp) {
    var clocktime = performanceNow.call(performance) * 1e-3;
    var seconds = Math.floor(clocktime);
    var nanoseconds = Math.floor(clocktime % 1 * 1e9);

    if (previousTimestamp) {
      seconds = seconds - previousTimestamp[0];
      nanoseconds = nanoseconds - previousTimestamp[1];

      if (nanoseconds < 0) {
        seconds--;
        nanoseconds += 1e9;
      }
    }

    return [seconds, nanoseconds];
  }

  var startTime = new Date();

  function uptime() {
    var currentTime = new Date();
    var dif = currentTime - startTime;
    return dif / 1000;
  }

  var browser$1 = {
    nextTick: nextTick,
    title: title,
    browser: browser,
    env: env,
    argv: argv,
    version: version,
    versions: versions,
    on: on,
    addListener: addListener,
    once: once,
    off: off,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    emit: emit,
    binding: binding,
    cwd: cwd,
    chdir: chdir,
    umask: umask,
    hrtime: hrtime,
    platform: platform,
    release: release,
    config: config,
    uptime: uptime
  };

  var utils = require('./utils');

  var normalizeHeaderName = require('./helpers/normalizeHeaderName');

  var enhanceError = require('./core/enhanceError');

  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }

  function getDefaultAdapter() {
    var adapter;

    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = require('./adapters/xhr');
    } else if (typeof browser$1 !== 'undefined' && Object.prototype.toString.call(browser$1) === '[object process]') {
      // For node use HTTP adapter
      adapter = require('./adapters/http');
    }

    return adapter;
  }

  function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) {
      try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
      } catch (e) {
        if (e.name !== 'SyntaxError') {
          throw e;
        }
      }
    }

    return (encoder || JSON.stringify)(rawValue);
  }

  var defaults$1 = {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    },
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Accept');
      normalizeHeaderName(headers, 'Content-Type');

      if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
        return data;
      }

      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }

      if (utils.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }

      if (utils.isObject(data) || headers && headers['Content-Type'] === 'application/json') {
        setContentTypeIfUnset(headers, 'application/json');
        return stringifySafely(data);
      }

      return data;
    }],
    transformResponse: [function transformResponse(data) {
      var transitional = this.transitional || defaults$1.transitional;
      var silentJSONParsing = transitional && transitional.silentJSONParsing;
      var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
      var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

      if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
        try {
          return JSON.parse(data);
        } catch (e) {
          if (strictJSONParsing) {
            if (e.name === 'SyntaxError') {
              throw enhanceError(e, this, 'E_JSON_PARSE');
            }

            throw e;
          }
        }
      }

      return data;
    }],

    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    },
    headers: {
      common: {
        'Accept': 'application/json, text/plain, */*'
      }
    }
  };
  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults$1.headers[method] = {};
  });
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults$1.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });
  module.exports = defaults$1;

  var defaults$2 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  function getAugmentedNamespace(n) {
  	if (n.__esModule) return n;
  	var a = Object.defineProperty({}, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var defaults = /*@__PURE__*/getAugmentedNamespace(defaults$2);

  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */


  var transformData = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/

    utils$1.forEach(fns, function transform(fn) {
      data = fn.call(context, data, headers);
    });
    return data;
  };

  var isCancel = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };

  /**
   * A `Cancel` is an object that is thrown when an operation is canceled.
   *
   * @class
   * @param {string=} message The message.
   */

  function Cancel(message) {
    this.message = message;
  }

  Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };

  Cancel.prototype.__CANCEL__ = true;
  var Cancel_1 = Cancel;

  /**
   * Throws a `Cancel` if cancellation has been requested.
   */


  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }

    if (config.signal && config.signal.aborted) {
      throw new Cancel_1('canceled');
    }
  }
  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */


  var dispatchRequest = function dispatchRequest(config) {
    throwIfCancellationRequested(config); // Ensure headers exist

    config.headers = config.headers || {}; // Transform request data

    config.data = transformData.call(config, config.data, config.headers, config.transformRequest); // Flatten headers

    config.headers = utils$1.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils$1.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
      delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config); // Transform response data

      response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config); // Transform response data

        if (reason && reason.response) {
          reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
      }

      return Promise.reject(reason);
    });
  };

  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   * @returns {Object} New object resulting from merging config2 to config1
   */


  var mergeConfig = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};

    function getMergedValue(target, source) {
      if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) {
        return utils$1.merge(target, source);
      } else if (utils$1.isPlainObject(source)) {
        return utils$1.merge({}, source);
      } else if (utils$1.isArray(source)) {
        return source.slice();
      }

      return source;
    } // eslint-disable-next-line consistent-return


    function mergeDeepProperties(prop) {
      if (!utils$1.isUndefined(config2[prop])) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (!utils$1.isUndefined(config1[prop])) {
        return getMergedValue(undefined, config1[prop]);
      }
    } // eslint-disable-next-line consistent-return


    function valueFromConfig2(prop) {
      if (!utils$1.isUndefined(config2[prop])) {
        return getMergedValue(undefined, config2[prop]);
      }
    } // eslint-disable-next-line consistent-return


    function defaultToConfig2(prop) {
      if (!utils$1.isUndefined(config2[prop])) {
        return getMergedValue(undefined, config2[prop]);
      } else if (!utils$1.isUndefined(config1[prop])) {
        return getMergedValue(undefined, config1[prop]);
      }
    } // eslint-disable-next-line consistent-return


    function mergeDirectKeys(prop) {
      if (prop in config2) {
        return getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        return getMergedValue(undefined, config1[prop]);
      }
    }

    var mergeMap = {
      'url': valueFromConfig2,
      'method': valueFromConfig2,
      'data': valueFromConfig2,
      'baseURL': defaultToConfig2,
      'transformRequest': defaultToConfig2,
      'transformResponse': defaultToConfig2,
      'paramsSerializer': defaultToConfig2,
      'timeout': defaultToConfig2,
      'timeoutMessage': defaultToConfig2,
      'withCredentials': defaultToConfig2,
      'adapter': defaultToConfig2,
      'responseType': defaultToConfig2,
      'xsrfCookieName': defaultToConfig2,
      'xsrfHeaderName': defaultToConfig2,
      'onUploadProgress': defaultToConfig2,
      'onDownloadProgress': defaultToConfig2,
      'decompress': defaultToConfig2,
      'maxContentLength': defaultToConfig2,
      'maxBodyLength': defaultToConfig2,
      'transport': defaultToConfig2,
      'httpAgent': defaultToConfig2,
      'httpsAgent': defaultToConfig2,
      'cancelToken': defaultToConfig2,
      'socketPath': defaultToConfig2,
      'responseEncoding': defaultToConfig2,
      'validateStatus': mergeDirectKeys
    };
    utils$1.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
      var merge = mergeMap[prop] || mergeDeepProperties;
      var configValue = merge(prop);
      utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
  };

  var data = {
    "version": "0.24.0"
  };

  var VERSION = data.version;
  var validators$1 = {}; // eslint-disable-next-line func-names

  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (type, i) {
    validators$1[type] = function validator(thing) {
      return _typeof(thing) === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
    };
  });
  var deprecatedWarnings = {};
  /**
   * Transitional option validator
   * @param {function|boolean?} validator - set to false if the transitional option has been removed
   * @param {string?} version - deprecated version / removed since version
   * @param {string?} message - some message with additional info
   * @returns {function}
   */

  validators$1.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
      return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
    } // eslint-disable-next-line func-names


    return function (value, opt, opts) {
      if (validator === false) {
        throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
      }

      if (version && !deprecatedWarnings[opt]) {
        deprecatedWarnings[opt] = true; // eslint-disable-next-line no-console

        console.warn(formatMessage(opt, ' has been deprecated since v' + version + ' and will be removed in the near future'));
      }

      return validator ? validator(value, opt, opts) : true;
    };
  };
  /**
   * Assert object's properties type
   * @param {object} options
   * @param {object} schema
   * @param {boolean?} allowUnknown
   */


  function assertOptions(options, schema, allowUnknown) {
    if (_typeof(options) !== 'object') {
      throw new TypeError('options must be an object');
    }

    var keys = Object.keys(options);
    var i = keys.length;

    while (i-- > 0) {
      var opt = keys[i];
      var validator = schema[opt];

      if (validator) {
        var value = options[opt];
        var result = value === undefined || validator(value, opt, options);

        if (result !== true) {
          throw new TypeError('option ' + opt + ' must be ' + result);
        }

        continue;
      }

      if (allowUnknown !== true) {
        throw Error('Unknown option ' + opt);
      }
    }
  }

  var validator = {
    assertOptions: assertOptions,
    validators: validators$1
  };

  var validators = validator.validators;
  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */

  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_1(),
      response: new InterceptorManager_1()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */


  Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
      config = arguments[1] || {};
      config.url = arguments[0];
    } else {
      config = config || {};
    }

    config = mergeConfig(this.defaults, config); // Set config.method

    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = 'get';
    }

    var transitional = config.transitional;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators["boolean"]),
        forcedJSONParsing: validators.transitional(validators["boolean"]),
        clarifyTimeoutError: validators.transitional(validators["boolean"])
      }, false);
    } // filter out skipped interceptors


    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;

    if (!synchronousRequestInterceptors) {
      var chain = [dispatchRequest, undefined];
      Array.prototype.unshift.apply(chain, requestInterceptorChain);
      chain = chain.concat(responseInterceptorChain);
      promise = Promise.resolve(config);

      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    }

    var newConfig = config;

    while (requestInterceptorChain.length) {
      var onFulfilled = requestInterceptorChain.shift();
      var onRejected = requestInterceptorChain.shift();

      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected(error);
        break;
      }
    }

    try {
      promise = dispatchRequest(newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    while (responseInterceptorChain.length) {
      promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    }

    return promise;
  };

  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
  }; // Provide aliases for supported request methods


  utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        url: url,
        data: (config || {}).data
      }));
    };
  });
  utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
  });
  var Axios_1 = Axios;

  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @class
   * @param {Function} executor The executor function.
   */


  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this; // eslint-disable-next-line func-names

    this.promise.then(function (cancel) {
      if (!token._listeners) return;
      var i;
      var l = token._listeners.length;

      for (i = 0; i < l; i++) {
        token._listeners[i](cancel);
      }

      token._listeners = null;
    }); // eslint-disable-next-line func-names

    this.promise.then = function (onfulfilled) {
      var _resolve; // eslint-disable-next-line func-names


      var promise = new Promise(function (resolve) {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new Cancel_1(message);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */


  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  /**
   * Subscribe to the cancel signal
   */


  CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  };
  /**
   * Unsubscribe from the cancel signal
   */


  CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }

    var index = this._listeners.indexOf(listener);

    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  };
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */


  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };

  var CancelToken_1 = CancelToken;

  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   * @returns {Function}
   */

  var spread = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };

  var isAxiosError = function isAxiosError(payload) {
    return _typeof(payload) === 'object' && payload.isAxiosError === true;
  };

  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */


  function createInstance(defaultConfig) {
    var context = new Axios_1(defaultConfig);
    var instance = bind(Axios_1.prototype.request, context); // Copy axios.prototype to instance

    utils$1.extend(instance, Axios_1.prototype, context); // Copy context to instance

    utils$1.extend(instance, context); // Factory for creating new instances

    instance.create = function create(instanceConfig) {
      return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };

    return instance;
  } // Create the default instance to be exported


  var axios$1 = createInstance(defaults); // Expose Axios class to allow class inheritance

  axios$1.Axios = Axios_1; // Expose Cancel & CancelToken

  axios$1.Cancel = Cancel_1;
  axios$1.CancelToken = CancelToken_1;
  axios$1.isCancel = isCancel;
  axios$1.VERSION = data.version; // Expose all/spread

  axios$1.all = function all(promises) {
    return Promise.all(promises);
  };

  axios$1.spread = spread; // Expose isAxiosError

  axios$1.isAxiosError = isAxiosError;
  var axios_1 = axios$1; // Allow use of default import syntax in TypeScript

  var _default = axios$1;
  axios_1["default"] = _default;

  var axios = axios_1;

  var axiosCreate = axios.create;
  var API_BASE_URL = 'https://ltiappstore.com';

  var LtiAppClient = /*#__PURE__*/function () {
    function LtiAppClient() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          token = _ref.token,
          baseUrl = _ref.baseUrl,
          _ref$timeout = _ref.timeout,
          timeout = _ref$timeout === void 0 ? 10000 : _ref$timeout;

      _classCallCheck(this, LtiAppClient);

      if (!token) throw new TypeError("A token is required.");
      if (!baseUrl) baseUrl = API_BASE_URL;
      this.baseUrl = new URL("api", baseUrl);
      this.axios = axiosCreate({
        baseURL: this.baseUrl.href,
        headers: {
          'Authorization': "Bearer ".concat(token)
        },
        timeout: timeout
      }); //this.axios = {}
    }

    _createClass(LtiAppClient, [{
      key: "decodeToken",
      value: function decodeToken(token) {
        var parts = token.split('.');
        if (parts.length < 3) throw new Error("The token is not a valid JWT token");
        var payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
        delete payload.iat;
        delete payload.exp;
        delete payload.iss;
        return payload;
      }
    }, {
      key: "getInstitution",
      value: function () {
        var _getInstitution = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(institutionId) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.axios.get("institutions/".concat(institutionId)).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context.abrupt("return", _context.sent);

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInstitution(_x) {
          return _getInstitution.apply(this, arguments);
        }

        return getInstitution;
      }()
    }, {
      key: "getUser",
      value: function () {
        var _getUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(userId) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.axios.get("users/".concat(userId)).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context2.abrupt("return", _context2.sent);

                case 3:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function getUser(_x2) {
          return _getUser.apply(this, arguments);
        }

        return getUser;
      }()
    }, {
      key: "getContext",
      value: function () {
        var _getContext = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(contextId) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.axios.get("contexts/".concat(contextId)).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context3.abrupt("return", _context3.sent);

                case 3:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function getContext(_x3) {
          return _getContext.apply(this, arguments);
        }

        return getContext;
      }()
    }, {
      key: "getSections",
      value: function () {
        var _getSections = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(contextId) {
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.axios.get("contexts/".concat(contextId, "/sections")).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context4.abrupt("return", _context4.sent);

                case 3:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function getSections(_x4) {
          return _getSections.apply(this, arguments);
        }

        return getSections;
      }()
    }, {
      key: "getSection",
      value: function () {
        var _getSection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(contextId, sectionId) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.axios.get("contexts/".concat(contextId, "/sections/").concat(sectionId)).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context5.abrupt("return", _context5.sent);

                case 3:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        function getSection(_x5, _x6) {
          return _getSection.apply(this, arguments);
        }

        return getSection;
      }()
    }, {
      key: "getRoster",
      value: function () {
        var _getRoster = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(contextId, sectionId) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  if (!sectionId) {
                    _context6.next = 6;
                    break;
                  }

                  _context6.next = 3;
                  return this.axios.get("contexts/".concat(contextId, "/sections/").concat(sectionId, "/roster")).then(function (res) {
                    return res.data;
                  });

                case 3:
                  return _context6.abrupt("return", _context6.sent);

                case 6:
                  _context6.next = 8;
                  return this.axios.get("contexts/".concat(contextId, "/roster")).then(function (res) {
                    return res.data;
                  });

                case 8:
                  return _context6.abrupt("return", _context6.sent);

                case 9:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function getRoster(_x7, _x8) {
          return _getRoster.apply(this, arguments);
        }

        return getRoster;
      }()
    }, {
      key: "getResources",
      value: function () {
        var _getResources = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(contextId) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return this.axios.get("contexts/".concat(contextId, "/resources")).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context7.abrupt("return", _context7.sent);

                case 3:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        function getResources(_x9) {
          return _getResources.apply(this, arguments);
        }

        return getResources;
      }()
    }, {
      key: "getResource",
      value: function () {
        var _getResource = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(resourceId) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return this.axios.get("resources/".concat(resourceId)).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context8.abrupt("return", _context8.sent);

                case 3:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        function getResource(_x10) {
          return _getResource.apply(this, arguments);
        }

        return getResource;
      }()
    }, {
      key: "getGrades",
      value: function () {
        var _getGrades = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resourceId, userId) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  if (!userId) {
                    _context9.next = 6;
                    break;
                  }

                  _context9.next = 3;
                  return this.axios.get("resources/".concat(resourceId, "/grades/").concat(userId)).then(function (res) {
                    return res.data;
                  });

                case 3:
                  return _context9.abrupt("return", _context9.sent);

                case 6:
                  _context9.next = 8;
                  return this.axios.get("resources/".concat(resourceId, "/grades")).then(function (res) {
                    return res.data;
                  });

                case 8:
                  return _context9.abrupt("return", _context9.sent);

                case 9:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        function getGrades(_x11, _x12) {
          return _getGrades.apply(this, arguments);
        }

        return getGrades;
      }()
    }, {
      key: "setGrade",
      value: function () {
        var _setGrade = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(resourceId, userId, score, publish) {
          var params;
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  params = {
                    userId: userId,
                    score: score,
                    publish: !!publish
                  };
                  _context10.next = 3;
                  return this.axios.put("resources/".concat(resourceId, "/grades"), params).then(function (res) {
                    return res.data;
                  });

                case 3:
                  return _context10.abrupt("return", _context10.sent);

                case 4:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10, this);
        }));

        function setGrade(_x13, _x14, _x15, _x16) {
          return _setGrade.apply(this, arguments);
        }

        return setGrade;
      }()
    }, {
      key: "getVendor",
      value: function () {
        var _getVendor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(vendorId) {
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return this.axios.get("vendors/".concat(vendorId)).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context11.abrupt("return", _context11.sent);

                case 3:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, this);
        }));

        function getVendor(_x17) {
          return _getVendor.apply(this, arguments);
        }

        return getVendor;
      }()
    }, {
      key: "getApps",
      value: function () {
        var _getApps = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(vendorId) {
          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return this.axios.get("vendors/".concat(vendorId, "/apps")).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context12.abrupt("return", _context12.sent);

                case 3:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, this);
        }));

        function getApps(_x18) {
          return _getApps.apply(this, arguments);
        }

        return getApps;
      }()
    }, {
      key: "getApp",
      value: function () {
        var _getApp = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(appId) {
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  _context13.next = 2;
                  return this.axios.get("apps/".concat(appId)).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context13.abrupt("return", _context13.sent);

                case 3:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, this);
        }));

        function getApp(_x19) {
          return _getApp.apply(this, arguments);
        }

        return getApp;
      }()
    }, {
      key: "getInstalls",
      value: function () {
        var _getInstalls = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(appId) {
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return this.axios.get("apps/".concat(appId, "/installs")).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context14.abrupt("return", _context14.sent);

                case 3:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14, this);
        }));

        function getInstalls(_x20) {
          return _getInstalls.apply(this, arguments);
        }

        return getInstalls;
      }()
    }, {
      key: "getLaunchStats",
      value: function () {
        var _getLaunchStats = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(appId) {
          return regeneratorRuntime.wrap(function _callee15$(_context15) {
            while (1) {
              switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return this.axios.get("apps/".concat(appId, "/launches")).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context15.abrupt("return", _context15.sent);

                case 3:
                case "end":
                  return _context15.stop();
              }
            }
          }, _callee15, this);
        }));

        function getLaunchStats(_x21) {
          return _getLaunchStats.apply(this, arguments);
        }

        return getLaunchStats;
      }()
    }, {
      key: "getApiStats",
      value: function () {
        var _getApiStats = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(vendorId) {
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return this.axios.get("vendors/".concat(vendorId, "/apiusage")).then(function (res) {
                    return res.data;
                  });

                case 2:
                  return _context16.abrupt("return", _context16.sent);

                case 3:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16, this);
        }));

        function getApiStats(_x22) {
          return _getApiStats.apply(this, arguments);
        }

        return getApiStats;
      }()
    }]);

    return LtiAppClient;
  }();

  var src = LtiAppClient;

  return src;

})));
//# sourceMappingURL=ltiappstore-client.js.map
