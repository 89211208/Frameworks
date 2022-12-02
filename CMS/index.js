const express=require("express")
const app=express()

const port=5002

app.get("/",(req,res)=>{
    res.send("Henlo")
}
)

//app should listen 
app.listen(process.env.PORT||port,()=>{
    console.log('server is running on port: ${process.env.PORT || port}')
})