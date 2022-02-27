import axios from "axios"
import Fs from 'fs'  



const CallAPI = (url:string):Promise<object> => {
    return new Promise(async (resolve,reject) => {
        const result = await axios.get(url)
        resolve(result.data)
    })
}


const DownloadIMG = async (path: Fs.PathLike,url:string):Promise<any> => {
    return new Promise(async (resolve,reject)=>{
        let writer = Fs.createWriteStream(path)
        try{
            const response = await axios({
                url:url,
                method: 'GET',
                responseType: 'stream'
            })

            response.data.pipe(writer)
            
            resolve(new Promise((resolve, reject) => {
                writer.on('finish', resolve)
                writer.on('error', reject)
            }))
        }catch{
            reject(new Error('Image introuvable')) 
        }
    })
}

export {
    CallAPI,
    DownloadIMG
} 