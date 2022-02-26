"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const callEndpoints_1 = __importDefault(require("./lib/callEndpoints"));
class CryptoAlternative {
    constructor() {
        this.age = 0;
        this.name = "";
    }
    phraseage() {
        return "tu as " + this.age + " ans.";
    }
}
let c = new CryptoAlternative();
c.age = 17;
const test = async () => {
    console.log(await (0, callEndpoints_1.default)());
};
test();
