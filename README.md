# cryptoAlternative
CryptoAlternative package enable us to use cyrpto [Alternative API](https://alternative.me/) with functionnal programmation.
You can use these functions to acces to the API :
- [GetTicker](#getticker)
- [GetTickerSpecificCurrency](#gettickerspecificcurrency)
- [GetGlobal](#getglobal)
- [GetFearIndex](#getfearindex)
- [GetFearIndexPhoto](#getfearindexphoto)
- [GetFearIndexPhotoDate](#getfearindexphotodate)

# How use CryptoAlternative ?

## GetTicker

Get coin prices updated every 5 minutes

Example : 
```js
 const crypto = require('@luxlhm/crypto_alternative')
 
 crypto.GetTicker().then(data => console.log(data))
 // or
 crypto.GetTicker({limit: 2,convert: 'EUR'}).then(data => console.log(data))
```
Optional parameters :
```ts
{
    limit?:Number;
    start?:Number;
    convert?:'USD'|'EUR'|'GBP'|'RUB'|'JPY'|'CAD'|'KRW'|'PLN';
    structure?:'string'|'dictionnary'|'array';
    sort?:'id'|'rank'|'volume_24h'|'percent_change_24h'|'price'|'percent_change_1h'|'percent_change_1h'|'percent_change_7d'|'circulating_supply'|'name';
}
```

## GetTickerSpecificCurrency

Get ticker data of a specified coin by providing the 'id' or the 'website_slug' of the coin, for example id of bitcoin is 1 and its 'website_slug' is  'bitcoin'.

Example : 
```js
 const crypto = require('@luxlhm/crypto_alternative')
  
 crypto.GetTickerSpecificCurrency('bitcoin').then(data => console.log(data))
 // or 
 crypto.GetTickerSpecificCurrency(1).then(data => console.log(data)) 
```
Optional parameters :
```ts
{
  id:Numer|String;
}
```
## GetGlobal

Get global market information at a glance.

Example : 
```js
 const crypto = require('@luxlhm/crypto_alternative')
  
 crypto.GetBlobal().then(data => console.log(data))
 // or 
 crypto.GetBlobal({convert:'EUR'}).then(data => console.log(data)) 
```
Optional parameters :
```ts
{
    convert? :'USD'|'EUR'|'GBP'|'RUB'|'JPY'|'CAD'|'KRW'|'PLN';
}
```

## GetFearIndex

Get the latest data of the Fear and Greed Index. Fear index represent the atmosphere of the day in the crypto sphere. This data is between 0 and 100. 

Example : 
```js
 const crypto = require('@luxlhm/crypto_alternative')
 
 crypto.GetFearIndex().then(data => console.log(data))
 // or
 crypto.GetFearIndex({limit:2, date_format:'world', format:'json'}).then(data => console.log(data)) 
```
Optional parameters :
```ts
{
    limit?:number;
    format?: 'csv'|'json';
    date_format?: 'us'|'cn'|'kr'|'world'
}
```
## GetFearIndexPhoto

Get the latest png graph of fear index.
Graph example : 

<img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" width="20%" />

Example : 
```js
 const crypto = require('@luxlhm/crypto_alternative')
  
 crypto.GetFearIndexPhoto({name:'monday_fearindex'}).then(data => console.log(data))
 // or
 crypto.GetFearIndexPhoto({name:'monday_fearindex', RelativePath:'/PhotoDist'}).then(data => console.log(data))
```
Optional parameters :
```ts
{
    name:string;
    RelativePath?:string;
}
```
## GetFearIndexPhotoDate

As before, with this function we can get the latest png graph of fear index, but the graph of an accurate day.

Example : 
```js
 const crypto = require('@luxlhm/crypto_alternative')
  
 crypto.GetFearIndexPhotoDate({name:'monday_fearindex',date:{day:20,month:3, year:2021}}).then(data => console.log(data))
 // or
 crypto.GetFearIndexPhotoDate({name:'monday_fearindex', RelativePath:'/PhotoDist', date:{day:20,month:3, year:2021}}).then(data => console.log(data)) 
```
Optional parameters :
```ts
{
    name:string;
    date:{
        day:number;
        month:number;
        year:number;
    }
    RelativePath?:string;
}
```
