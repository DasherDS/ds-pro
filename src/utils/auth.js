import Cookies from 'js-cookie'

const TokenKey = 'loginToken'

export function getToken(){
    return Cookies.get(TokenKey)
}
export function setToken(token){
    return Cookies.set(TokenKey,token)
}
export function removeToken(){
    return Cookies.remove(TokenKey)
} 
const adminName = 'username'

export function getName(){
    return Cookies.get(adminName)
}
export function setName(name){
    return Cookies.set(adminName,name)
}
export function removeName(){
    return Cookies.remove(adminName)
}