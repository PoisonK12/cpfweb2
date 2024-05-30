import { Router } from "express"
import { createNewMolding, deleteMolding, editMolding, getMolding, getAllMoldings } from "../controllers/molding.controller.js"

const router = Router()

router.get("/", getAllMoldings)
router.get("/:id", getMolding)
router.post("/new", createNewMolding)
router.put("/:id", editMolding)
router.delete("/:id", deleteMolding)

export default router;