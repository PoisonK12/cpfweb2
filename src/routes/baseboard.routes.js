import { Router } from "express"
import { createNewBaseboard, deleteBaseboard, editBaseboard, getAllBaseboards, getBaseboard } from "../controllers/baseboard.controller.js"

const router = Router()

router.get("/", getAllBaseboards)
router.get("/:id", getBaseboard)
router.post("/new", createNewBaseboard)
router.put("/:id", editBaseboard)
router.delete("/:id", deleteBaseboard)

export default router;