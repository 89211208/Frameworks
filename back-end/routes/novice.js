const express = require("express")
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

novice.get("/:id", async (req, res, next)=>{
    try {
        console.log(req)
        let queryResult = await db.oneNovica(req.params.id)
        res.json(queryResult)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

novice.post("/", async (req, res, next)=>{
    console.log(req.body)
    let id_organizacije = req.body.id_organizacije
    let id_stavbe = req.body.id_stavbe
    let vrsta_stavbe = req.body.vrsta_stavbe
    let leto_izgradnje = req.body.leto_izgradnje
    let st_nadstropij = req.body.st_nadstropij
    let st_vhodov = req.body.st_vhodov
    let katastrska_st = req.body.katastrska_st

    if (true) {
        try {
            let queryResult = await db.createNovica(id_organizacije, id_stavbe, vrsta_stavbe, st_nadstropij, st_vhodov, katastrska_st, leto_izgradnje)
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

module.exports = novice