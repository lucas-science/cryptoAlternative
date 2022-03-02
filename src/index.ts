import Fs from 'fs'  
import Path from 'path' 

import endpoints from "./lib/endpoints"
import { TickerConfig,GlobalConfig, FearIndexConfig, FearIndexPhotoConfig, FearIndexPhotoDateConfig } from "./lib/interface"
import {CallAPI, DownloadIMG} from "./lib/controllers"

/**
 * 
 * @param {Object} parameters with limit?, start?, convert?, structure?, sort?. If no parameters gived, function return ALL Tickers. 
 * @returns {Promise} return list of Crypto currency ticker
 * @example ```js
 * const crypto = require('@luxlhm/crypto_alternative')
 * crypto.GetTicker().then(data => console.log(data))
 * // or
 * crypto.GetTicker({limit: 2,convert: 'EUR'}).then(data => console.log(data))
 * ``` 
*/
const GetTicker = async (parametres?:TickerConfig):Promise<object> => {
    if(parametres){
        const url = `${endpoints.baseURL}/v2/ticker/?${ parametres.limit != undefined ? `limit=${parametres.limit}`:``}${ parametres.start != undefined ? `&start=${parametres.start}`:`` }${ parametres.convert != undefined ? `&convert=${parametres.convert}`:`` }${ parametres.structure != undefined ? `&structure=${parametres.structure}`:`` }${ parametres.sort != undefined ? `&sort=${parametres.sort}`:`` }`
        console.log(url)
        return await CallAPI(url)
    }else{
        const url = `${endpoints.baseURL}/v2/ticker/`
        return await CallAPI(url)
    }
}

/**
 * 
 * @param {Number or String} id give crypto id or name, bitcoin id is 1 or 'bitcoin'
 * @returns {Promise} return data of a specifiy crypto currency
 * @example ```js
 * const crypto = require('@luxlhm/crypto_alternative')
 * 
 * crypto.GetTickerSpecificCurrency('bitcoin').then(data => console.log(data))
 * // or 
 * crypto.GetTickerSpecificCurrency('bitcoin').then(data => console.log(data))
 * 
 * ```
 */
const GetTickerSpecificCurrency = async (id:Number|String):Promise<object> => {
    const url = `${endpoints.baseURL}/v2/ticker/${id}/`
    return await CallAPI(url)
}

/**
 * 
 * @param {Object} parametres give convet? param to convert values
 * @returns {Promise} return overview of all crytpos currencys
 * @example ```js
 * const crypto = require('@luxlhm/crypto_alternative')
 * 
 * crypto.GetBlobal().then(data => console.log(data))
 * // or 
 * crypto.GetBlobal({convert:'EUR'}).then(data => console.log(data))
 * 
 * ```
 */
const GetGlobal = async (parametres?:GlobalConfig):Promise<object> => {
    if(parametres){
        const url = `${endpoints.baseURL}/v2/global/?${ parametres.convert != undefined ? `convert=${parametres.convert}`:``}`
        console.log(url)
        return await CallAPI(url)
    }else{
        const url = `${endpoints.baseURL}/v2/global/`
        return await CallAPI(url)
    }
}

/**
 * 
 * @param {Object} parametres give limit?, format?, date_format?, to get fear index. If you gived no parameters you will get the last fear index
 * @returns {Promise} return fear index
 * @example ```js
 * const crypto = require('@luxlhm/crypto_alternative')
 * 
 * crypto.GetFearIndex().then(data => console.log(data))
 * // or
 * crypto.GetFearIndex({limit:2, date_format:'world', format:'json'}).then(data => console.log(data)) 
 * ```
 */
const GetFearIndex = async (parametres?:FearIndexConfig):Promise<object> => {
    if(parametres){
        const url = `${endpoints.baseURL}/fng/?${ parametres.limit != undefined ? `limit=${parametres.limit}`:``}${parametres.format != undefined ? `&format=${parametres.format}`:``}${parametres.date_format != undefined ? `&date_format=${parametres.date_format}`:``}`
        console.log(url)
        return await CallAPI(url)
    }else{
        const url = `${endpoints.baseURL}/fng/`
        return await CallAPI(url)
    }
}

/**
 * 
 * @param {Object} parametres give : name(name to give of the downloaded image), RelativePath?(location where downloaded file will be).
 * @returns {Promise} return The last fear index photo
 * @example ```js
 * const crypto = require('@luxlhm/crypto_alternative')
 * 
 * crypto.GetFearIndexPhoto({name:'monday_fearindex'}).then(data => console.log(data))
 * // or
 * crypto.GetFearIndexPhoto({name:'monday_fearindex', RelativePath:'/PhotoDist'}).then(data => console.log(data)) 
 * ```
 */
const GetFearIndexPhoto = async (parametres:FearIndexPhotoConfig):Promise<any> => {
    const url = `${endpoints.imageURL}/crypto/fear-and-greed-index.png`
    if(parametres.RelativePath){
        if(!Fs.existsSync(__dirname+`${parametres.RelativePath}`)){ // if folder doesnt exist
            await Fs.promises.mkdir(__dirname+parametres.RelativePath,{recursive:true})
            const PATH = Path.resolve(__dirname, `${parametres.RelativePath.replace('/','')}`,`${parametres.name}.png`)
            return await DownloadIMG(PATH,url)
        }else{ // if folder exist
            const PATH = Path.resolve(__dirname,`${parametres.RelativePath.replace('/','')}`,`${parametres.name}.png`)
            return await DownloadIMG(PATH,url)
        }
    }else{
        const PATH = Path.resolve(__dirname,`${parametres.name}.png`)
        return await DownloadIMG(PATH,url)
    }
}


/**
 * 
 * @param {Object} parametres give : name(name to give of the downloaded image), RelativePath?(location where downloaded file will be), date{day:number,month:number,year:number}.
 * @returns {Promise} return fear index photo of the day gived, if the photo exist for the date gived.
 * @example ```js
 * const crypto = require('@luxlhm/crypto_alternative')
 * 
 * crypto.GetFearIndexPhotoDate({name:'monday_fearindex').then(data => console.log(data))
 * // or
 * crypto.GetFearIndexPhotoDate({name:'monday_fearindex', RelativePath:'/PhotoDist', date:{day:20,month:3, year:2021}}).then(data => console.log(data)) 
 * ```
 */
const GetFearIndexPhotoDate = async (parametres:FearIndexPhotoDateConfig):Promise<any> => {
    const url = `${endpoints.imageURL}/images/fng/crypto-fear-and-greed-index-${parametres.date.year}-${parametres.date.month}-${parametres.date.day}.png`
    if(parametres.RelativePath){
        if(!Fs.existsSync(__dirname+`${parametres.RelativePath}`)){ // if folder doesnt exist
            await Fs.promises.mkdir(__dirname+parametres.RelativePath,{recursive:true})
            const PATH = Path.resolve(__dirname, `${parametres.RelativePath.replace('/','')}`,`${parametres.name}.png`)
            return await DownloadIMG(PATH,url)
        }else{ // if folder exist
            const PATH = Path.resolve(__dirname,`${parametres.RelativePath.replace('/','')}`,`${parametres.name}.png`)
            return await DownloadIMG(PATH,url)
        }
    }else{
        const PATH = Path.resolve(__dirname,`${parametres.name}.png`)
        return await DownloadIMG(PATH,url)
    }
}

export {
    GetTickerSpecificCurrency,
    GetTicker,
    GetGlobal,
    GetFearIndex,
    GetFearIndexPhoto,
    GetFearIndexPhotoDate
}