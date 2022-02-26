import axios from "axios"

const GetCryptoFear = (limit = 1) => {
    return new Promise(async (resolve,reject) => {
        const result = await axios.get(`https://api.alternative.me/fng/?limit=${limit}`)
        resolve(result.data)
    })
}

export default GetCryptoFear