import Floor from "../models/floor.model";

export const getAllFloors = async (req, res) => {
    try {
        const floors = await Floor.find({})
        return res.status(200).json({ message: "Success: ", floors })
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

export const getAllFloorsFromCollection = async (req, res) => {
    try {
        const { setId } = req.params
        const floors = await Floor.find({ collection: setId })
        return res.status(200).json({ message: "Success: ", floors })
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

export const getFloorById = async (req, res) => {
    try {
        const { id } = req.params
        const floor = await Floor.findById(id)
        if (!floor) {
            return res.status(404).json({ message: "Collection not found" });
        }
        return res.status(200).json({ message: "Success: ", floor })
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

export const editFloor = async (req, res) => {
    try {
        const {id} = req.params
        const {colorName, collection, material, installationMethod, wearLayer, overallThickness} = req.body
        const updatedFloor = {
            ...(colorName && {colorName}),
            ...(collection && {collection}),
            ...(material && {material}),
            ...(installationMethod && {installationMethod}),
            ...(wearLayer && {wearLayer}),
            ...(overallThickness && {overallThickness}),
        }
        const floor = await Floor.findByIdAndUpdate(id, updatedFloor, {new: true})
        return res.status(200).json({ message: "Success: ", floor })
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

export const deleteFloor = async (req, res) => {
    try {
        const {id} = req.params
        const floor = await Floor.findByIdAndDelete(id)
        if (!floor) {
            return res.status(404).json({ message: "Collection not found" });
        }
        return res.status(200).json({ message: "Success: ", floor })
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

export const createNewFloor = async (req, res) => {
    try {
        const {colorName, collection, material, installationMethod, wearLayer, overallThickness} = req.body
        const floor = new Floor({
            colorName,
            collection,
            material,
            installationMethod,
            wearLayer,
            overallThickness
        })
        await floor.save()
        return res.status(200).json({ message: "Success: ", floor })
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message }) 
    }
}
