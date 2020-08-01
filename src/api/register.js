import request from "../utils/request"
export function weather(data){
    return request({
        url:'/login',
        method:'post',
        data
    })
}