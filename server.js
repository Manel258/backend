import express from "express"
import dotenv from "dotenv"
dotenv.config()
import jobRouter from "./routes/jobRouter.js"
const app = express()
app.use(express.json())
app.use("/api/jobs", jobRouter)

//* designe tous les chemins
//app.use("*",(req,res)=>{
//  res.status(404).json({msg:"not found"})
//})
// route cest ce qui nous dit comment repondre a une requete

app.get("/",(req,res)=>{
  res.send("Hello World 1 2 3 4 5 6")
})
app.use((err,req,res,next)=>{
  console.log(err)
  res.status(500).json({msg:"something went wrong"})
})

const port=process.env.PORT || 3000
app.listen(port,()=>{
  console.log("le serveur écoute sur le port 3000");
})