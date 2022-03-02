"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFearIndexPhotoDate = exports.GetFearIndexPhoto = exports.GetFearIndex = exports.GetGlobal = exports.GetTicker = exports.GetTickerSpecificCurrency = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const endpoints_1 = __importDefault(require("./lib/endpoints"));
const controllers_1 = require("./lib/controllers");
/**
 *
 * @param {Object} parameters with limit?, start?, convert?, structure?, sort?. If no parameters gived, function return ALL Ticker
 * @returns {Promise} data get with the API request
 * @example ```js
 * const crypto = require('@luxlhm/crypto_alternative')
 *
 * crypto.GetTicker({limit: 2,convert: 'EUR'}).then(data => console.log(data))
 * ```
*/
const GetTicker = async (parametres) => {
    if (parametres) {
        const url = `${endpoints_1.default.baseURL}/v2/ticker/?${parametres.limit != undefined ? `limit=${parametres.limit}` : ``}${parametres.start != undefined ? `&start=${parametres.start}` : ``}${parametres.convert != undefined ? `&convert=${parametres.convert}` : ``}${parametres.structure != undefined ? `&structure=${parametres.structure}` : ``}${parametres.sort != undefined ? `&sort=${parametres.sort}` : ``}`;
        console.log(url);
        return await (0, controllers_1.CallAPI)(url);
    }
    else {
        const url = `${endpoints_1.default.baseURL}/v2/ticker/`;
        return await (0, controllers_1.CallAPI)(url);
    }
};
exports.GetTicker = GetTicker;
/**
 *
 * @param {Number or String} id
 * @returns {Promise}
 * @example ```js
 *
 *
 * ```
 */
const GetTickerSpecificCurrency = async (id) => {
    const url = `${endpoints_1.default.baseURL}/v2/ticker/${id}/`;
    return await (0, controllers_1.CallAPI)(url);
};
exports.GetTickerSpecificCurrency = GetTickerSpecificCurrency;
GetTickerSpecificCurrency('bitcoin').then(e => console.log(e));
const GetGlobal = async (parametres) => {
    if (parametres) {
        const url = `${endpoints_1.default.baseURL}/v2/global/?${parametres.convert != undefined ? `convert=${parametres.convert}` : ``}`;
        console.log(url);
        return await (0, controllers_1.CallAPI)(url);
    }
    else {
        const url = `${endpoints_1.default.baseURL}/v2/global/`;
        return await (0, controllers_1.CallAPI)(url);
    }
};
exports.GetGlobal = GetGlobal;
const GetFearIndex = async (parametres) => {
    if (parametres) {
        const url = `${endpoints_1.default.baseURL}/fng/?${parametres.limit != undefined ? `limit=${parametres.limit}` : ``}${parametres.format != undefined ? `&format=${parametres.format}` : ``}${parametres.date_format != undefined ? `&date_format=${parametres.date_format}` : ``}`;
        console.log(url);
        return await (0, controllers_1.CallAPI)(url);
    }
    else {
        const url = `${endpoints_1.default.baseURL}/fng/`;
        return await (0, controllers_1.CallAPI)(url);
    }
};
exports.GetFearIndex = GetFearIndex;
const GetFearIndexPhoto = async (parametres) => {
    const url = `${endpoints_1.default.imageURL}/crypto/fear-and-greed-index.png`;
    if (parametres.RelativePath) {
        if (!fs_1.default.existsSync(__dirname + `${parametres.RelativePath}`)) { // if folder doesnt exist
            await fs_1.default.promises.mkdir(__dirname + parametres.RelativePath, { recursive: true });
            const PATH = path_1.default.resolve(__dirname, `${parametres.RelativePath.replace('/', '')}`, `${parametres.name}.png`);
            return await (0, controllers_1.DownloadIMG)(PATH, url);
        }
        else { // if folder exist
            const PATH = path_1.default.resolve(__dirname, `${parametres.RelativePath.replace('/', '')}`, `${parametres.name}.png`);
            return await (0, controllers_1.DownloadIMG)(PATH, url);
        }
    }
    else {
        const PATH = path_1.default.resolve(__dirname, `${parametres.name}.png`);
        return await (0, controllers_1.DownloadIMG)(PATH, url);
    }
};
exports.GetFearIndexPhoto = GetFearIndexPhoto;
const GetFearIndexPhotoDate = async (parametres) => {
    const url = `${endpoints_1.default.imageURL}/images/fng/crypto-fear-and-greed-index-${parametres.date.year}-${parametres.date.month}-${parametres.date.day}.png`;
    if (parametres.RelativePath) {
        if (!fs_1.default.existsSync(__dirname + `${parametres.RelativePath}`)) { // if folder doesnt exist
            await fs_1.default.promises.mkdir(__dirname + parametres.RelativePath, { recursive: true });
            const PATH = path_1.default.resolve(__dirname, `${parametres.RelativePath.replace('/', '')}`, `${parametres.name}.png`);
            return await (0, controllers_1.DownloadIMG)(PATH, url);
        }
        else { // if folder exist
            const PATH = path_1.default.resolve(__dirname, `${parametres.RelativePath.replace('/', '')}`, `${parametres.name}.png`);
            return await (0, controllers_1.DownloadIMG)(PATH, url);
        }
    }
    else {
        const PATH = path_1.default.resolve(__dirname, `${parametres.name}.png`);
        return await (0, controllers_1.DownloadIMG)(PATH, url);
    }
};
exports.GetFearIndexPhotoDate = GetFearIndexPhotoDate;
