const mysql = require('mysql')


const config = {
    host: 'codedidungso.me',
    port: 3306,
    user: 'root',
    password: 'Codese2020',
    database: 'shopese-thien'

}

const pool = mysql.createPool(config);

const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, result) => {
            if (err)
                reject(err);
            resolve(result);
        });
    })

}

const queryOne = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, result) => {
            if (err)
                reject(err);
            resolve(result[0]);
        });
    })

}

const queryMulti = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, result) => {
            if (err)
                reject(err);
            resolve(result);
        });
    })

}


module.exports = {
    query,
    queryOne,
    queryMulti
}

