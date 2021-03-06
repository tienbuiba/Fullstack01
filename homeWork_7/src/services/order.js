const db = require('../utils/db')

const getAll = async ({ limit, offset }) => {
    const sql = `
    SELECT orderId,username,productId,price,amount,note ,  status,created_at,updated_at 
    FROM order  
    WHERE isDelete = 0 
    LIMIT ? 
    OFFSET ?`
    const data = await db.queryMulti(sql, [limit, offset])

    const countSql = `
    SELECT count(orderId) as total FROM order;`

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
    SELECT orderId,username,productId,price,amount,note ,status,created_at,updated_at 
     FROM order 
     WHERE isDelete = 0 AND orderId = ? LIMIT 1;`
    const data = await db.queryOne(sql, [id])
    return { data };

}
const create = async ({ username, productId, price, amount, note, status }) => {
    const sql = `
    INSERT INTO order(orderId,username,productId,price,amount,note ,status)
    VALUES(uuid(),?,?,?,?,?,?)`;
    await db.query(sql, [username, productId, price, amount, note, status])

}
const updateById = async (orderId, { username, productId, price, amount, note, status }) => {
    const sql = `UPDATE \`order\`
        SET username =?,
        productId =?,
        price =?,
        amount=?,
        note = ? ,
        status = ?,
        WHERE orderId = ? AND isDelete = 0 ;`
        ;
    await db.query(sql, [username, productId, price, amount, note, status, orderId])

}
const deleteById = async (id) => {
    const sql = `
    UPDATE order
    SET isDELETE = 1 
    WHERE orderId= ?;`
    await db.query(sql, [id])

}
const getAllId = async () => {
    const sql = `
    SELECT orderId , username 
    FROM order     
    WHERE isDelete = 0`
    const data = await db.queryMulti(sql);
    return {
        data,
        metadata: {
            length: data.length
        }
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