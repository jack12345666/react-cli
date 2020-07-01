import Cookies from 'js-cookie'
/**
 * 获取url参数
 * @param name 查询名称
 * @param notDecode 不进行url解码，传true表示不解码，false或不传表示进行解码
 * @returns {*}
 * @constructor
 */
export function GetQueryString(name, notDecode = false)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null){
        if(notDecode){
            return r[2];
        }
        return decodeURIComponent(r[2]);
    }
    return '';
}



// 获取cookie里的token
export function getCookieToken() {
   return Cookies.get('token');
}

// 自定义table高度
export function getTableHeight(height = 0) {
    return window.innerHeight - height
}