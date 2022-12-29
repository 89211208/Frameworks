const mysql = require("mysql2")

const  conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS, 
    database: 'Qcodeigniter',
  })

//{} is an empty object
let dataPool={}

 // the promise can be resolved or rejected

dataPool.allNovice=()=>{
  return new Promise ((resolve, reject)=>{
    conn.query(`SELECT * FROM news`, (err,res)=>{
      if(err){return reject(err)}
      return resolve(res)
    })
  })
}

dataPool.oneNovica=(id)=>{
  return new Promise ((resolve, reject)=>{
    conn.query(`SELECT * FROM news WHERE id = ?`, id, (err,res)=>{ // ? is replaced by the parameter id
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

dataPool.AuthUser=(username)=>
{
  return new Promise ((resolve, reject)=>{
    conn.query('SELECT * FROM user_login WHERE user_name = ?', username, (err,res, fields)=>{
      if(err){return reject(err)}
      return resolve(res)
    })
  })  
	
}

dataPool.AddUser=(username,email,password)=>{
  return new Promise ((resolve, reject)=>{
    conn.query(`INSERT INTO user_login (user_name,user_email,user_password) VALUES (?,?,?)`, [username, email, password], (err,res)=>{
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

module.exports = dataPool