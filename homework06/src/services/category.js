
const db = require('../utils/db')

const getAllCategory = async () => {
    const sql =
        `select *
        from category;`
    const data = await db.queryMulti(sql);
    return data;
}
const getCategoryById = async () => {
    const sql = `
   select*
       from category 
          where categoryId=?;`
    const data = await db.queryOne(sql, [id])
    return data;
}
const createCategory = async (newCategory) => {
    const sql = `
     insert  into category 
     set ?;`
    const data = await db.query(sql, newCategory)
    return data;
}
const createCategory = async ({ display, description, imageUrl }) => {
    const sql = `insert into category(categoryId, display, description, imageUrl)
    values (uuid(),?,?,?)  ;`
    await db.query(sql, [display, description, imageUrl]);
}
const updateCategoryById = async (id, { display, description, imageUrl }) => {
    const sql =
        `update category
  set 
        display = ?
        description = ?
        imageUrl = ?
   where categoryId = ? ;`;
    await db.query(sql, [display, description, imageUrl, id]);

}
const deleteCategoryById = async (id, { display, description, imageUrl }) => {
    const sql =
        `update category
   set 
        status = 'HIDDEN'
   where categoryId = ? ;`;
    await db.query(sql, [display, description, imageUrl, id]);
}

module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
}







