require('dotenv/config');



const  config = {
    user:  process.env.DB_User, // sql user
    password:  process.env.DB_Password, //sql user password
    server:  process.env.DB_Host, // if it does not work try- localhost
    database:  process.env.DB_Name, // sql database name
    options: {
      encrypt: false,
      trustedconnection:  true,
      enableArithAbort:  true,
      instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port:  1432
  }
  
  module.exports = config;