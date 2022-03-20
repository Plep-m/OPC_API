var config = require('./dbconfig.js');
const sql = require('mssql');



async  function  getCity(name) {
    try {
      let  pool = await  sql.connect(config);
      let  product = await  pool.request()
      .input('input_parameter', sql.VarChar(50), name)
      .query("SELECT * from Communes where Nom like '%' + @input_parameter + '%'");
      return  product.recordsets;
    }
    catch (error) {
      console.log(error);
    }
  }

async function getShop(ville_name) {
    try {
      let  pool = await  sql.connect(config);
      let product = await  pool.request()
      .input('input_parameter', sql.VarChar(50), ville_name)
      .query("Select Enseigneref,Nom From Shop JOIN Villes ON Shop.Villeref = Villes.CodeInsee WHERE Nom like '%' + @input_parameter + '%'");
      return  product.recordsets;
    }
    catch (error) {
        console.log(error);
        }
}
async function getArticle(name){
  try {
    let pool = await sql.connect(config);
    let product = await pool.request()
    .input('input_parameter',sql.VarChar(500),name)
    .query("Select * From Articles where Name like '%' + @input_parameter + '%'");
    return product.recordset;
  }
  catch (error){
    console.log(error)
  }
}

module.exports = {
    getCity : getCity,
    getShop : getShop,
    getArticle : getArticle
}