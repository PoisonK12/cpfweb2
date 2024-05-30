import { Router } from "express"
import { createNewUnderlayment, deleteUnderlayment, editUnderlayment, getAllUnderlayments, getUnderlayment } from "../controllers/underlayment.controller.js"

const router = Router()

router.get("/", getAllUnderlayments)
router.get("/:id", getUnderlayment)
router.post("/new", createNewUnderlayment)
router.put("/:id", editUnderlayment)
router.delete("/:id", deleteUnderlayment)

export default router;