const mysql = require("mysql2")

const  conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS, 
    database: 'Qcodeigniter',
  })

  let dataPool={}       //javascript object
  
  dataPool.allNovice=()=>{
    return new Promise ((resolve, reject)=>{
      conn.query(`SELECT * FROM news`, (err,res)=>{
        if(err){return reject(err)}     //if an error
        return resolve(res)
      })
    })
  }
  
  dataPool.oneNovica=(id)=>{
    return new Promise ((resolve, reject)=>{
      conn.query(`SELECT * FROM news WHERE id = ?`, id, (err,res)=>{
        if(err){return reject(err)}
        return resolve(res)
      })
    })
  }
  
  dataPool.creteNovica=(title,slug,text)=>{
    return new Promise ((resolve, reject)=>{
      conn.query(`INSERT INTO news (title,slug,text) VALUES (?,?,?)`, [title, slug, text], (err,res)=>{
        if(err){return reject(err)}
        return resolve(res)
      })
    })
  }
  

 conn.connect((err) => {
      if(err){
          console.log("ERROR: " + err.message);
          return;    
      }
      console.log('Connection established');
    })
  

module.exports = conn
module.exports = dataPool