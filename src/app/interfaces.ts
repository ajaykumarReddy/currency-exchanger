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
  success: boolean
  query: Query
  info: Info
  date: string
  result: number,
  name?: string
}

export interface Query {
  from: string
  to: string
  amount: number
}

export interface Info {
  timestamp: number
  rate: number
}

