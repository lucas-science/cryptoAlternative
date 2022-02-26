"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const GetCryptoFear = (limit = 1) => {
    return new Promise(async (resolve, reject) => {
        const result = await axios_1.default.get(`https://api.alternative.me/fng/?limit=${limit}`);
        resolve(result.data);
    });
};
exports.default = GetCryptoFear;
