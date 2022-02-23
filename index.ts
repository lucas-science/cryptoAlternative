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

console.log(c.phraseage())