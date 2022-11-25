export interface SymbolsResponse {
  success: boolean;
  symbols: Symbols;
}

export interface Symbols {
  [key: string]: string;
}

export interface IConvertor {
  from: string;
  to: string;
  amount: number;
}

export interface ConvertorResponse {
  success: boolean;
  query: Query;
  info: Info;
  date: string;
  result: number;
  name?: string;
}

export interface Query {
  from: string;
  to: string;
  amount: number;
}

export interface Info {
  timestamp: number;
  rate: number;
}

export interface TimeSeriesResponse {
  success: boolean;
  timeseries: boolean;
  start_date: string;
  end_date: string;
  base: string;
  rates: Rates;
}

export interface Rates {
  [key: string]: number;
}

export const KEYS = [
  `${new Date().getFullYear()}-01-31`,
  `${new Date().getFullYear()}-02-28`,
  `${new Date().getFullYear()}-03-31`,
  `${new Date().getFullYear()}-04-30`,
  `${new Date().getFullYear()}-05-31`,
  `${new Date().getFullYear()}-06-30`,
  `${new Date().getFullYear()}-07-31`,
  `${new Date().getFullYear()}-08-31`,
  `${new Date().getFullYear()}-09-30`,
  `${new Date().getFullYear()}-10-31`,
  `${new Date().getFullYear()}-11-30`,
  `${new Date().getFullYear()}-12-31`,
];
