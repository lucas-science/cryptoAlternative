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

interface FearIndexPhoto {
    name:string;
    RelativePath?:string;
}

export  {
    TickerConfig,
    GlobalConfig,
    FearIndexConfig,
    FearIndexPhoto
}