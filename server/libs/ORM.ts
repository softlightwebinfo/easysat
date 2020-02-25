const initOptions = {
    promiseLib: Promise // overriding the default (ES6 Promise);
};

const pgp = require('pg-promise')(initOptions);

export class ORM {
    private static _db;

    public static connect(host: string, username: string, password: string, database: string) {
        const cn = {
            host,
            user: username,
            password,
            database,
            port: 5433
        };
        const db = pgp(cn); // database instance;
        ORM._db = db;
    }

    static db() {
        return ORM._db;
    }
}