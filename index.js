var CryptoAlternative = /** @class */ (function () {
    function CryptoAlternative() {
        this.age = 0;
        this.name = "";
    }
    CryptoAlternative.prototype.phraseage = function () {
        return "tu as " + this.age + " ans.";
    };
    return CryptoAlternative;
}());
var c = new CryptoAlternative();
c.age = 17;
console.log(c.phraseage());
