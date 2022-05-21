import axios from "axios";
import dayjs from 'dayjs'
import Cookies from 'js-cookie'
import md5 from 'md5'
import qs from 'qs'

if (!window.apis) {
    window.apis = {}
}
const hasArrayBuffer = typeof ArrayBuffer === 'function';
function isArrayBuffer(value) {
    return hasArrayBuffer && (value instanceof ArrayBuffer || Object.prototype.toString.call(value) === '[object ArrayBuffer]');
}
var curUrlParams = {};
(function(open,send) {
    XMLHttpRequest.prototype.open = function(method, url) {
        let paramsIndex = url.lastIndexOf('?')
        let apiName = paramsIndex > 0 ? url.substr(0,paramsIndex) : url
        let resultApi,resultName 
        for( let k in window.apis){
            if(k === apiName){
                resultApi = k
                resultName = window.apis[k]
            }
        }
        this.addEventListener("readystatechange", function() {
            if(this.readyState == 4 && method === 'GET'){
               dealLog(resultApi,resultName,'GET',this.response,null)
            }
        }, false);
        open.call(this, method, url);
    };
    function dealLog(resultApi,resultName,methodType,response,params){
        if(!resultApi)return 
        let currentAppName,currentRouterName
        let hash = location.hash.split('/')
        if(hash.length){
            currentAppName = hash[1] || ''
            currentRouterName = hash.length > 2 ? hash[2] : ''
        }
        let store ,data,postParams
        try {
            store = JSON.parse(Cookies.get('admin_login'))
            data = JSON.parse(response)
            if(params){
                postParams = JSON.parse(params)
                postParams =  Object.assign(postParams,curUrlParams[resultName])
                delete curUrlParams[resultName]
            }
        } catch (error) {}
        if(isArrayBuffer(response) || data && data.code == 200 && data.success){
            let time = String(dayjs().valueOf())
            if (typeof resultName === 'function') {
                resultName = resultName(postParams)
            }
            let logText = `【${store.orgName}】` + '进行了' + `【${resultName}】` +  '操作'
            let resultLog = {
                orgId:String(store.orgId),
                uid:store.uid,
                platform:8,
                eventId:'OPLOG#'+ `${currentAppName}` + '#' +`${currentRouterName}`+ '#0#0#' + `${logText}`,
                triggerTime:time,
                timestamp:time,
                sign:md5(md5(String(store.uid) + store.uid + 8 + '0' + time) + time),
            }
            axios.post('/baas-analysis/web/dotLogExt',resultLog)
            .then((res) =>{
                if(res.data.success){
                    console.log('日志上报成功');
                }else{
                    console.error('日志上报失败');
                }
            })
            .catch((error)=> {
                console.error('日志上报失败');
            });
        }
    }
    XMLHttpRequest.prototype.send = function(data) {
        this.addEventListener('readystatechange', function(event) {
                let paramsIndex = location.origin.length
                let apiName = this.responseURL.substr(paramsIndex)
                let resultApi,resultName 
                for( let k in window.apis ){
                    if(this.responseURL.indexOf(k) > -1){
                        resultApi = k
                        resultName = window.apis[k]
                    }
                }
                if(this.readyState === 4 && data) {
                    curUrlParams[resultName] = qs.parse(url.split('?')[1])
                    dealLog(resultApi,resultName,'POST',this.response,data)
                }
        }, false);
        send.apply(this, arguments); 
    }

})(XMLHttpRequest.prototype.open, XMLHttpRequest.prototype.send);
