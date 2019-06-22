const db_host = process.env.DB_HOST || 'localhost';
const db_port: number = parseInt( process.env.DB_PORT ) || 27017;
const db_username = process.env.DB_USER || 'admin';
const db_password = process.env.DB_PASSWORD || 'admin123';
const db_schema = process.env.DB_SCHEMA || 'iot-sd';
const db_options = process.env.DB_OPTIONS || '?authSource=admin';
const orm_sync = ( process.env.DB_ORM_SYNC === 'true' ||
    process.env.NODE_ENV != 'production' ) || false;
    
export class BancoConfig {
    constructor(
        readonly type: 'mongodb' = 'mongodb',
        readonly host: string = db_host,
        readonly port: number = db_port,
        readonly user: string = db_username,
        readonly password: string = db_password,
        readonly schema: string = db_schema,
        readonly options: string = db_options,
        readonly sync: boolean = orm_sync,
        readonly uri: string =  `mongodb://${user}:${password}@${host}:${port}/${schema}${options}`
    ) { }
}
