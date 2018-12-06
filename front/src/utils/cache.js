import { CACHE_NAME, DEFAULT_STATE } from '../config'

export function setCache(state = {}){
    return localStorage.setItem(CACHE_NAME,JSON.stringify(state))
}

export function getCache(){
    const cache = localStorage.getItem(CACHE_NAME)
    return cache ? JSON.parse(cache) : clearCache()
}

export function clearCache(){
    localStorage.setItem(CACHE_NAME,JSON.stringify(DEFAULT_STATE))
    return getCache()
}

//!CHANGE THIS
clearCache()