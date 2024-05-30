import { Router } from "express"
import { createNewFloor, deleteFloor, editFloor, getAllFloors, getAllFloorsFromCollection, getFloorById } from "../controllers/floor.controller.js"

const router = Router()

router.get("/", getAllFloors)
router.get("/set/:setId", getAllFloorsFromCollection)
router.get("/:id", getFloorById)
router.post("/new", createNewFloor)
router.put("/:id", editFloor)
router.delete("/:id", deleteFloor)

export default router;