import axios from 'axios'
import {Message, MessageBox} from 'element-ui'
import store from '../store'
import {getToken} from '@/utils/auth'

//创建axios实例
const service = axios.create({
    // baseURL:process.env.BASE_API,
    baseURL:'http://rap2.taobao.org:38080/app/mock/262015',
    timeout:15000
})

// request拦截器
service.interceptors.request.use(config=>{
    if(store.getters.token){
        config.headers['Authorization'] = getToken()
    }
    return config
},error=>{
    console.log(error);
    Promise.reject(error)
})

// response拦截器
service.interceptors.response.use(
    response=>{
        const res = response.data
        if(res.code !== 200){
            Message({
                message:res.data.msg,
                type:'error',
                duration:3 * 1000
            })

            if(res.code === 401||res.code === 403){
                MessageBox.confirm('你已经登出，可以取消继续留在该页面，或者重新登录','确定登出',{
                    confirmButtonText:'重新登录',
                    cancelButtonText:'取消',
                    type:'warning'
                }).then(()=>{
                    store.dispatch('FedLogOut').then(()=>{
                        location.reload()
                    })
                })
            }
            return Promise.reject('error')
        }else{
            return response.data.data
        }
    },
    error=>{
        console.log('err'+error)
        Message({
            message:error.message,
            type:'error',
            duration:3 * 1000
        })
        return Promise.reject(error)
    }
)

export default service