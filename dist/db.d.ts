import { Pool } from 'pg';
export declare const isDev: boolean;
export declare type QueryResult = {
    site: string;
    visitors: number;
};
export declare type Error = string;
export declare const db: Pool;
export declare const queryAndUpdateSite: (url: string) => Promise<QueryResult | Error>;
