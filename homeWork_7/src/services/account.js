const db = require('../utils/db')

const getAll = async ({ limit, offset }) => {
    const sql = `
    SELECT username,password,role,display,email,phone,address,birthday,avatar,status,created_at,updated_at 
    FROM account WHERE isDelete = 0
    LIMIT ?
    OFFSET ?`
    const data = await db.queryMulti(sql, [limit, offset])
    const countSql = `SELECT count(username) as total FROM account;`

    const total = await db.queryOne(countSql)
    return {
        data,
        metadata: {
            length: data.length,
            total,
        }
    }
}
const getById = async (id) => {
    const sql = `
    SELECT username,password,role,display,email,phone,address,birthday,avatar,status,created_at,updated_at  
    FROM account WHERE isDelete = 0 AND username = ? 
    LIMIT 1;`
    const data = await db.queryOne(sql, id)
    return data

}
const create = async ({ password, role, display, email, phone, address, birthday, avatar, status }) => {
    const sql = `
    INSERT INTO account(username,password,role,display,email,phone,address,birthday,avatar,status)
    VALUES(uuid(),?,?,?,?,?,?,?,?,?);`;
    await db.query(sql, [password, role, display, email, phone, address, birthday, avatar, status])

}
const updateById = async (username, { password, role, display, email, phone, address, birthday, avatar, status }) => {
    const sql = `UPDATE account
        SET password = ?,
            role = ? , 
            display = ?, 
            email = ?,
             phone = ?, 
            address = ?, 
             birthday= ?, 
             avatar = ? , 
             status = ? 
             WHERE username = ? AND isDelete = 0 ;`
        ;
    await db.query(sql, [password, role, display, email, phone, address, birthday, avatar, status, username])

}
const deleteById = async (id) => {
    const sql = `
    UPDATE account 
    SET isDELETE = 1 
    WHERE username = ?;`
    await db.query(sql, id)

}
const getAllId = async (req, res) => {
    const sql = `
    SELECT username , display 
    FROM account
    WHERE isDelete = 0;`
    const data = await db.queryMulti(sql);
    return {
        metadata: {
            length: data.length
        }, data
    }
}
module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    getAllId
}