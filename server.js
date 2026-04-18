import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
import jobRouter from "./routes/jobRouter.js"
import errorHandlerMiddleware from "./middleware/ErrorHandlerMiddleware.js"
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
app.use(errorHandlerMiddleware)

const port=process.env.PORT || 3000
try{
  await mongoose.connect(process.env.MONGO_URL)
  console.log("connecté a la base de données")
  app.listen(port,()=>{
  console.log(`server is running on port ${port}`);
})
}
catch(error){
  console.log(error)
  process.exit(1)
}
// c'est la liaison avec la base de données, 1 veut dire fail, 0 veut dire success.