interface TickerConfig{
    limit?:Number;
    start?:Number;
    convert?:'USD'|'EUR'|'GBP'|'RUB'|'JPY'|'CAD'|'KRW'|'PLN';
    structure?:'string'|'dictionnary'|'array';
    sort?:'id'|'rank'|'volume_24h'|'percent_change_24h'|'price'|'percent_change_1h'|'percent_change_1h'|'percent_change_7d'|'circulating_supply'|'name';
}

interface GlobalConfig {
    convert? :'USD'|'EUR'|'GBP'|'RUB'|'JPY'|'CAD'|'KRW'|'PLN';
}

interface FearIndexConfig {
    limit?:number;
    format?: 'csv'|'json';
    date_format?: 'us'|'cn'|'kr'|'world'
}

interface FearIndexPhotoConfig {
    name:string;
    RelativePath?:string;
}

interface FearIndexPhotoDateConfig {
    name:string;
    date:{
        day:number;
        month:number;
        year:number;
    }
    RelativePath?:string;
}

export  {
    TickerConfig,
    GlobalConfig,
    FearIndexConfig,
    FearIndexPhotoConfig,
    FearIndexPhotoDateConfig
}

