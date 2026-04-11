import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()
app.get("/",(req,res)=>{
  res.send("Hello World 1 2 3 4 5 6")
})
const port=process.env.PORT || 3000
app.listen(port,()=>{
  console.log("le serveur écoute sur le port 3000");
})