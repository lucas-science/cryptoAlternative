import GetCryptoFear from "./lib/callEndpoints"

class CryptoAlternative {
    age:number
    private name:string
    constructor() {
        this.age = 0
        this.name = ""
    }

    phraseage():string{
        return "tu as " + this.age + " ans."
    }
}

let c = new CryptoAlternative()
c.age = 17

const test = async () => {
    console.log(await GetCryptoFear())
}
test()