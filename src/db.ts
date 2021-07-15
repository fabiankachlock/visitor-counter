import { Pool } from 'pg';

export const isDev = process.env.DEV

export type QueryResult = {
    site: string;
    visitors: number;
}

export type Error = string;

export const db = isDev
    ? new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: true
    })
    : new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: parseInt(process.env.DB_PORT || '0'),
        host: process.env.DB_HOST,
        database: 'test-visitor-counter',
    })


export const queryAndUpdateSite = async (url: string): Promise<QueryResult | Error> => {
    try {
        const client = await db.connect()
        const result = await client.query('SELECT * FROM "test-visitors" WHERE site=\'' + url + '\';')

        if (result.rowCount == 0) {
            await client.query('INSERT INTO "test-visitors" (site) VALUES (\'' + url + '\');')
            client.release()

            return {
                site: url,
                visitors: 0
            }
        } else {
            const row = result.rows[0]
            console.info('[INFO] Queryed site: ' + url)

            await client.query('UPDATE "test-visitors" SET visitors = visitors + 1 WHERE site=\'' + url + '\';')
            client.release()

            return row
        }
    } catch (err) {
        console.error('[ERROR] When querying site ' + url + ':' + err)
        return "Error: " + err
    }
}