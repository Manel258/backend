import {Router} from "express"

const router= Router()

import { getAllJobs,getJob,createJob,updateJob,deleteJob} from "../controllers/jobController.js"

router.get("/", getAllJobs)
router.post("/",createJob)
router.patch("/:id",updateJob)
router.get("/:id",getJob)
router.delete("/:id",deleteJob)

//2eme methode, en une ligne
//router.route("/").get(getAllJobs).post(createJob)
//router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob)
export default router