import { Router } from "express"
import { createNewCollection, deleteCollection, editCollection, getAllCollections, getCollection } from "../controllers/set.controller.js"

const router = Router()

router.get("/", getAllCollections)
router.get("/:id", getCollection)
router.post("/new", createNewCollection)
router.put("/:id", editCollection)
router.delete("/:id", deleteCollection)

export default router;