const db = require('../utils/db')
const security = require('../utils/security')

const getAll = async ({ limit, offset }) => {
    const sql = `
    SELECT username,password,role,display,email,phone,address,birthday,avatar,status,created_at,updated_at 
    FROM account WHERE isDelete = 0
    LIMIT ?
    OFFSET ?`
    const data = await db.queryMulti(sql, [limit, offset])
    const countSql = `SELECT count(username) as total FROM account;`

    const {total} = await db.queryOne(countSql)
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
   ;`
    const data = await db.queryOne(sql, [id])
    return {
        data
      }

}

const create = async (newAccount) => {
  const checkExistedSQL = `
    SELECT count(username) as c FROM account WHERE username = ? ;
  `;
  const exist = await db.queryOne(checkExistedSQL, [newAccount.username]);
  if (exist.c > 0) {
    return "Tài khoản đã tồn tại";
  } else {
    const encryptedPassword =
      await security.generatePassword(newAccount.password);
    console.log(encryptedPassword);
    const insertSQL = `
      INSERT INTO account(username, password) VALUES ( ? , ? ) ;
    `;
    await db.query(insertSQL, [
      newAccount.username,
      encryptedPassword
    ]);
    return "Tạo tài khoản thành công!";
  }
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
    await db.query(sql, [id])

}
const getAllId = async (req, res) => {
    const sql = `
    SELECT username ,email
    FROM account
    WHERE isDelete = 0;`
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
