const express = require("express")
const novice = express.Router();
const DB = require("../DB/dbConn")


novice.get('/',(req,res)=>{
    console.log("The route has been reached") 
        //printed in the terminal
    res.send("novice")
     // printed on the browser
})
novice.get('/', async (req,res, next)=>{
    try{
        var queryResult=await DB.allNovice();
        res.json(queryResult)
    }
    catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

novice.get('/:id', async (req,res, next)=>{
    try{
        var queryResult=await DB.oneNovica(req.params.id)
        res.json(queryResult)
    }
    catch(err){
        console.log(err)
        res.sendStatus(500)
    }
}) 
novice.post('/', async (req,res, next)=>{
        
    let title = req.body.title
    let slug = req.body.slug
    let text = req.body.text
  
      var isAcompleteNovica=title && slug && text
      if (isAcompleteNovica)
      {
          try{
              var queryResult=await DB.creteNovica(title,slug,text)
              if (queryResult.affectedRows) {
                  console.log("New article added!!")
                }
          }
          catch(err){
              console.log(err)
              res.sendStatus(500)
          }    
      }  
      else
      {
       console.log("A field is empty!!")
      }
      res.end()
  
    
  }) 
  


module.exports=novice
