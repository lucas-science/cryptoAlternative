"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadIMG = exports.CallAPI = void 0;
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const CallAPI = (url) => {
    return new Promise(async (resolve, reject) => {
        const result = await axios_1.default.get(url);
        resolve(result.data);
    });
};
exports.CallAPI = CallAPI;
const DownloadIMG = async (path, url) => {
    return new Promise(async (resolve, reject) => {
        let writer = fs_1.default.createWriteStream(path);
        const response = await (0, axios_1.default)({
            url: url,
            method: 'GET',
            responseType: 'stream'
        });
        response.data.pipe(writer);
        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    });
};
exports.DownloadIMG = DownloadIMG;
