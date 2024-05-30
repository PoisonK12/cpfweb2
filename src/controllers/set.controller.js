import Set from "../models/set.model.js";

export const getAllCollections = async (req, res) => {
    try {
        const collections = await Set.find({})
        return res.status(200).json({ message: "Success: ", collections })
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

export const getCollection = async (req, res) => {
    try {
        const { id } = req.params
        const collection = await Set.findOne(id)
        if (!collection) {
            return res.status(404).json({ message: "Producto no encontrado" })
        }
        return res.status(200).json({ message: "Success: ", collection })
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

export const editCollection = async (req, res) => {
    try {
        const { id } = req.params;
        const { materialType, collectionName, brand, floors, mils, plankSize, thickness, padding, planksPerBox, sqftPerBox, installationMethod, warranty, setClass, features } = req.body;

        const updatedCollection = {
            ...(materialType && { materialType }),
            ...(collectionName && { collectionName }),
            ...(brand && { brand }),
            ...(floors && { floors }),
            ...(mils && { mils }),
            ...(plankSize && { plankSize }),
            ...(thickness && { thickness }),
            ...(padding && { padding }),
            ...(planksPerBox && { planksPerBox }),
            ...(sqftPerBox && { sqftPerBox }),
            ...(installationMethod && { installationMethod }),
            ...(warranty && { warranty }),
            ...(setClass && { setClass }),
            ...(features && { features }),
        };

        const collection = await Set.findByIdAndUpdate(id, updatedCollection, { new: true });

        if (!collection) {
            return res.status(404).json({ message: "Collection not found" });
        }

        return res.status(200).json({ message: "Collection updated successfully", collection });
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ message: "An error occurred", error: error.message });
    }
};


export const deleteCollection = async (req, res) => {
    try {
        const { id } = req.params
        const collection = await Set.findByIdAndDelete(id)
        if (!collection) {
            return res.status(404).json({ message: "Collection not found" });
        }
        return res.status(204).json({ message: "Collection deleted successfully", collection });
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

export const createNewCollection = async (req, res) => {
    try {
        const { materialType, collectionName, brand, floors, mils, plankSize, thickness, padding, planksPerBox, sqftPerBox, installationMethod, warranty, setClass, features } = req.body;
        const collection = new Set({
            materialType,
            collectionName,
            brand,
            floors,
            mils,
            plankSize,
            thickness,
            padding,
            planksPerBox,
            sqftPerBox,
            installationMethod,
            warranty,
            setClass,
            features
        })
        await collection.save()
        return res.status(201).json({ message: "Collection created successfully", collection });
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

