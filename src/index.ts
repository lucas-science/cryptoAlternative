import Fs from 'fs'  
import Path from 'path' 

import endpoints from "./lib/endpoints"
import { TickerConfig,GlobalConfig, FearIndexConfig, FearIndexPhotoConfig, FearIndexPhotoDateConfig } from "./lib/interface"
import {CallAPI, DownloadIMG} from "./lib/controllers"

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

const GetTickerSpecificCurrency = async (id:Number|String):Promise<object> => {
    const url = `${endpoints.baseURL}/v2/ticker/${id}`
    return await CallAPI(url)
}

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

const GetFearIndexPhotoDate = async (parametres:FearIndexPhotoDateConfig) => {
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