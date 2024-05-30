import { Router } from "express"
import { createNewStep, deleteStep, editStep, getAllSteps, getStep } from "../controllers/steps.controller.js"

const router = Router()

router.get("/", getAllSteps)
router.get("/:id", getStep)
router.post("/new", createNewStep)
router.put("/:id", editStep)
router.delete("/:id", deleteStep)

export default router;