const mysql = require("mysql2")
const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
})

let dataPool={}

dataPool.allNovice=()=>{
    return new Promise ((resolve, reject)=>{
      conn.query(`SELECT * FROM Stavba`, (err,res)=>{
        if(err){return reject(err)}
        return resolve(res)
      })
    })
}

dataPool.oneNovica=(id)=>{
    return new Promise ((resolve, reject)=>{
      conn.query(`SELECT * FROM Stavba WHERE id_stavbe = ?`, id, (err,res)=>{
        if(err){return reject(err)}
        return resolve(res)
      })
    })
}

dataPool.noOfNovice=()=>{
  return new Promise ((resolve, reject)=>{
    conn.query(`SELECT COUNT(id_stavbe) AS stavbe_count FROM Stavba;`, (err,res)=>{
      if(err){return reject(err)}
      return resolve(res)
    })
  })
}

dataPool.createNovica=(id_organizacije, id_stavbe, vrsta_stavbe, st_nadstropij, st_vhodov, katastrska_st, leto_izgradnje)=>{
    return new Promise ((resolve, reject)=>{
      conn.query(`INSERT INTO Stavba (id_organizacije, id_stavbe, vrsta_stavbe, st_nadstropij, st_vhodov, katastrska_st, leto_izgradnje) VALUES (?,?,?,?,?,?,?)`, [id_organizacije, id_stavbe, vrsta_stavbe, st_nadstropij, st_vhodov, katastrska_st, leto_izgradnje], (err,res)=>{
        if(err){return reject(err)}
        return resolve(res)
      })
    })
}

dataPool.authUser = (username) => {
    return new Promise((resolve, reject)=>{
        conn.query(`SELECT * FROM user_login WHERE user_name = ?`, username, (err, res)=>{
            if(err){return reject(err)}
            return resolve(res)
        })
    })
}

dataPool.addUser = (username, email, password) => {
    return new Promise((resolve, reject)=>{
        conn.query(`INSERT INTO user_login (user_name, user_email, user_password) VALUES (?,?,?)`, [username, email, password], (err, res)=>{
            if(err){return reject(err)}
            return resolve(res)
        })
    })
}

conn.connect(err=>{
    if (err) {
        console.log("ERROR: " + err.message)
        return
    }
    console.log("Connection established")
})

module.exports = dataPool