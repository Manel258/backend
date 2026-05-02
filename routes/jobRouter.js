import {Router} from "express"
import { validateJobInput,validateIdParam } from "../middleware/validationMiddleware.js"
const router= Router()

import { getAllJobs,getJob,createJob,updateJob,deleteJob} from "../controllers/jobController.js"

router.get("/", getAllJobs)
router.post("/",validateJobInput,createJob)
router.patch("/:id",validateIdParam,validateJobInput,updateJob)
router.get("/:id",validateIdParam,getJob)
router.delete("/:id",validateIdParam,deleteJob)

//2eme methode, en une ligne
//router.route("/").get(getAllJobs).post(createJob)
//router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob)
export default router