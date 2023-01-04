const express= require("express")
const novice = express.Router();
const db = require("../db/conn")

novice.get('/', async (req, res, next)=>{
    try {
        let queryResult = await db.allNovice()
        res.json(queryResult)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

novice.get("/:id", async (req, res)=>{
    try {
        console.log(req)
        let queryResult = await db.oneNovica(req.params.id)
        res.json(queryResult)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

novice.post("/", async (req, res)=>{
    let [title, slug, text] = req.body
    let isAcompleteNovica = title && slug && text

    if (isAcompleteNovica ) {
        try {
            let queryResult = await db.createNovica(title, slug, text)
            if (queryResult.affectedRows) {
                console.log("New article added!")
            }
        } catch (error) {
            console.log(error)
            res.sendStatus(500)
        }
    }else {
        console.log("A field is empty...")
    }
    res.end()
    
})

module.exports=novice