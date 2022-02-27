"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FearIndexPhoto = exports.FearIndex = exports.Global = exports.Ticker = exports.TickerSpecificCurrency = void 0;
const endpoints_1 = __importDefault(require("./endpoints"));
const callAPI_1 = require("./callAPI");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/*
const Listings =async () => {
    const url = `${endpoints.baseURL}/v2/listings/`
    return await CallAPI(url)
}

const TokenNameIsOnListings =async (token:string) => {
    const url = `${endpoints.baseURL}/v2/listings/`
    console.log(url)
    const resultat = await CallAPI(url)
    console.log(resultat)
}
*/
const Ticker = async (parametres) => {
    if (parametres) {
        const url = `${endpoints_1.default.baseURL}/v2/ticker/?${parametres.limit != undefined ? `limit=${parametres.limit}` : ``}${parametres.start != undefined ? `&start=${parametres.start}` : ``}${parametres.convert != undefined ? `&convert=${parametres.convert}` : ``}${parametres.structure != undefined ? `&structure=${parametres.structure}` : ``}${parametres.sort != undefined ? `&sort=${parametres.sort}` : ``}`;
        console.log(url);
        return await (0, callAPI_1.CallAPI)(url);
    }
    else {
        const url = `${endpoints_1.default.baseURL}/v2/ticker/`;
        return await (0, callAPI_1.CallAPI)(url);
    }
};
exports.Ticker = Ticker;
const TickerSpecificCurrency = async (id) => {
    const url = `${endpoints_1.default.baseURL}/v2/ticker/${id}`;
    return await (0, callAPI_1.CallAPI)(url);
};
exports.TickerSpecificCurrency = TickerSpecificCurrency;
const Global = async (parametres) => {
    if (parametres) {
        const url = `${endpoints_1.default.baseURL}/v2/global/?${parametres.convert != undefined ? `convert=${parametres.convert}` : ``}`;
        console.log(url);
        return await (0, callAPI_1.CallAPI)(url);
    }
    else {
        const url = `${endpoints_1.default.baseURL}/v2/global/`;
        return await (0, callAPI_1.CallAPI)(url);
    }
};
exports.Global = Global;
const FearIndex = async (parametres) => {
    if (parametres) {
        const url = `${endpoints_1.default.baseURL}/fng/?${parametres.limit != undefined ? `limit=${parametres.limit}` : ``}${parametres.format != undefined ? `&format=${parametres.format}` : ``}${parametres.date_format != undefined ? `&date_format=${parametres.date_format}` : ``}`;
        console.log(url);
        return await (0, callAPI_1.CallAPI)(url);
    }
    else {
        const url = `${endpoints_1.default.baseURL}/fng/`;
        return await (0, callAPI_1.CallAPI)(url);
    }
};
exports.FearIndex = FearIndex;
const FearIndexPhoto = async (parametres) => {
    const url = 'https://alternative.me/crypto/fear-and-greed-index.png';
    if (parametres.RelativePath) {
        if (!fs_1.default.existsSync(__dirname + `${parametres.RelativePath}`)) { // if folder doesnt exist
            await fs_1.default.promises.mkdir(__dirname + parametres.RelativePath);
            const PATH = path_1.default.resolve(__dirname, `${parametres.RelativePath.replace('/', '')}`, `${parametres.name}.png`);
            return await (0, callAPI_1.DownloadIMG)(PATH, url);
        }
        else { // if folder exist
            const PATH = path_1.default.resolve(__dirname, `${parametres.RelativePath.replace('/', '')}`, `${parametres.name}.png`);
            return await (0, callAPI_1.DownloadIMG)(PATH, url);
        }
    }
    else {
        const PATH = path_1.default.resolve(__dirname, `${parametres.name}.png`);
        return await (0, callAPI_1.DownloadIMG)(PATH, url);
    }
};
exports.FearIndexPhoto = FearIndexPhoto;
