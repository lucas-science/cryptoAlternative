"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const callEndpoints_1 = require("./lib/callEndpoints");
/*
Ticker({limit:5,start:2,convert:'EUR',sort:'id'}).then(res => {
    console.log("lol",res)
})
*/
/*
TokenNameIsOnListings("bitcoin").then(res=>{
    console.log(res)
})*/
/*
Global().then(res=> console.log(res))
*/
(0, callEndpoints_1.FearIndexPhoto)({
    name: 'lol',
    RelativePath: '/la/lo/li'
});
(0, callEndpoints_1.FearIndexPhotoDate)({
    name: 'tatitau',
    date: {
        day: 5,
        month: 2,
        year: 2020
    }
}).catch(err => console.log(err));
