import axios from "axios"
import Fs from 'fs'  

const CallAPI = (url:string):Promise<object> => {
    return new Promise(async (resolve,reject) => {
        try{
            const result = await axios.get(url)
            resolve(result.data)
        }catch{
            reject(new Error("Error during the request to the API"))
        }
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
                writer.on('finish', ()=>{
                    resolve({succes:true, data: "The image was succesfully downloaded at the path : "+path})
                })
                writer.on('error', ()=>{
                    resolve({succes:false})
                })  
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