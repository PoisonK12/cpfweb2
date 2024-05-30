import { Router } from "express"
import { createNewset, deleteset, editset, getAllsets, getset } from "../controllers/set.controller.js"

const router = Router()

router.get("/", getAllsets)
router.get("/:id", getset)
router.post("/new", createNewset)
router.put("/:id", editset)
router.delete("/:id", deleteset)

export default router;