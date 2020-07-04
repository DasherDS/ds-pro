import request from "@utils/request"
export function test(params){
    return request({
        url:'/test/get',
        method:'get',
        params
    })
}

export function test(data){
    return request({
        url:'/test/post',
        method:'post',
        data
    })
}