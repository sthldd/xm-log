'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _dayjs = require('dayjs');

var _dayjs2 = _interopRequireDefault(_dayjs);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _md = require('md5');

var _md2 = _interopRequireDefault(_md);

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!window.apis) {
    window.apis = {};
}
var hasArrayBuffer = typeof ArrayBuffer === 'function';
function isArrayBuffer(value) {
    return hasArrayBuffer && (value instanceof ArrayBuffer || Object.prototype.toString.call(value) === '[object ArrayBuffer]');
}
var curUrlParams = {};
(function (open, send) {
    XMLHttpRequest.prototype.open = function (method, url) {
        var paramsIndex = url.lastIndexOf('?');
        var apiName = paramsIndex > 0 ? url.substr(0, paramsIndex) : url;
        var resultApi = void 0,
            resultName = void 0;
        for (var k in window.apis) {
            if (k === apiName) {
                resultApi = k;
                resultName = window.apis[k];
            }
        }
        this.addEventListener("readystatechange", function () {
            if (this.readyState == 4 && method === 'GET') {
                dealLog(resultApi, resultName, 'GET', this.response, null);
            } else if (method === 'POST') {
                var findResultNameForGetUrlParams = void 0;
                for (var _k in apis) {
                    if (_k.includes(apiName)) {
                        findResultNameForGetUrlParams = apis[_k];
                    }
                }
                curUrlParams[findResultNameForGetUrlParams] = _qs2.default.parse(url.split('?')[1]);
            }
        }, false);
        open.call(this, method, url);
    };
    function dealLog(resultApi, resultName, methodType, response, params) {
        if (!resultApi) return;
        var currentAppName = void 0,
            currentRouterName = void 0;
        var hash = location.hash.split('/');
        if (hash.length) {
            currentAppName = hash[1] || '';
            currentRouterName = hash.length > 2 ? hash[2] : '';
        }
        var store = void 0,
            data = void 0,
            postParams = void 0;
        try {
            store = JSON.parse(_jsCookie2.default.get('admin_login'));
            data = JSON.parse(response);
            if (params) {
                postParams = JSON.parse(params);
                postParams = Object.assign(postParams, curUrlParams[resultName]);
                delete curUrlParams[resultName];
            }
        } catch (error) {}
        if (isArrayBuffer(response) || data && data.code == 200 && data.success) {
            var time = String((0, _dayjs2.default)().valueOf());
            if (typeof resultName === 'function') {
                resultName = resultName(postParams);
            }
            var logText = '\u3010' + store.orgName + '\u3011' + '进行了' + ('\u3010' + resultName + '\u3011') + '操作';
            var resultLog = {
                orgId: String(store.orgId),
                uid: store.uid,
                platform: 8,
                eventId: 'OPLOG#' + ('' + currentAppName) + '#' + ('' + currentRouterName) + '#0#0#' + ('' + logText),
                triggerTime: time,
                timestamp: time,
                sign: (0, _md2.default)((0, _md2.default)(String(store.uid) + store.uid + 8 + '0' + time) + time)
            };
            _axios2.default.post('/baas-analysis/web/dotLogExt', resultLog).then(function (res) {
                if (res.data.success) {
                    console.log('日志上报成功');
                } else {
                    console.error('日志上报失败');
                }
            }).catch(function (error) {
                console.error('日志上报失败');
            });
        }
    }
    XMLHttpRequest.prototype.send = function (data) {
        this.addEventListener('readystatechange', function (event) {
            var paramsIndex = location.origin.length;
            var apiName = this.responseURL.substr(paramsIndex);
            var resultApi = void 0,
                resultName = void 0;
            for (var k in window.apis) {
                if (k === apiName) {
                    resultApi = k;
                    resultName = window.apis[k];
                }
            }
            if (this.readyState === 4 && data) {
                dealLog(resultApi, resultName, 'POST', this.response, data);
            }
        }, false);
        send.apply(this, arguments);
    };
})(XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.send);
