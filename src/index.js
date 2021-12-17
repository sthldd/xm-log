import axios from "axios";
import dayjs from 'dayjs'
import Cookies from 'js-cookie'
import md5 from 'md5'



(function(open) {
    XMLHttpRequest.prototype.open = function(method, url, async, user, pass) {
    let paramsIndex = url.lastIndexOf('?')
    let apiName = paramsIndex > 0 ? url.substr(0,paramsIndex) : url
    let resultApi,resultName 
    for( let k in window.apis ){
        if(k === apiName){
            resultApi = k
            resultName = window.apis[k]
        }
    }
    this.addEventListener("readystatechange", function() {
        if(this.readyState == 4){
            if(!resultApi)return 
            let currentAppName,currentRouterName
            let hash = location.hash.split('/')
            if(hash.length){
                currentAppName = 'user-center' || hash[0]
                currentRouterName = hash[1] || ''
            }
            let store = JSON.parse(Cookies.get('WEBG_STORAGE'))
            let data
            try {
                data = JSON.parse(this.response)
            } catch (error) {}
            if(data && data.code == 200 && data.success){
                let time = String(dayjs().valueOf())
                let logText = `【${store.currentOrgName}】` + '进行了' + `【${resultName}】` +  '操作'
                let resultLog = {
                    orgId:String(store.orgId),
                    uid:store.uid,
                    platform:8,
                    eventId:'0',
                    triggerTime:time,
                    oplog:'#' + `${currentAppName}` + '#' +`${currentRouterName}`+ '#0#0#' + `${logText}`,
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
    }, false);
    open.call(this, method, url, async, user, pass);
};
})(XMLHttpRequest.prototype.open);