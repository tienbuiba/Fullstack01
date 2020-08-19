const mysql = require('mysql');

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,

}
const pool = mysql.createPool(config)

const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}
const queryOne = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}
const queryMulti = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, result) => {
            if (err) reject(err)
            else resolve(result)
        })
    })
}

module.exports = {
    query,
    queryOne,
    queryMulti
};