import Set from "../models/set.model.js";

export const getAllsets = async (req, res) => {
    try {
        const sets = await Set.find({})
        return res.status(200).json({ message: "Success: ", sets })
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

export const getset = async (req, res) => {
    try {
        const { id } = req.params
        const set = await Set.findOne(id)
        if (!set) {
            return res.status(404).json({ message: "Producto no encontrado" })
        }
        return res.status(200).json({ message: "Success: ", set })
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

export const editset = async (req, res) => {
    try {
        const { id } = req.params;
        const { materialType, setName, brand, floors, mils, plankSize, thickness, padding, planksPerBox, sqftPerBox, installationMethod, warranty, setClass, features } = req.body;

        const updatedset = {
            ...(materialType && { materialType }),
            ...(setName && { setName }),
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

        const set = await Set.findByIdAndUpdate(id, updatedset, { new: true });

        if (!set) {
            return res.status(404).json({ message: "set not found" });
        }

        return res.status(200).json({ message: "set updated successfully", set });
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).json({ message: "An error occurred", error: error.message });
    }
};


export const deleteset = async (req, res) => {
    try {
        const { id } = req.params
        const set = await Set.findByIdAndDelete(id)
        if (!set) {
            return res.status(404).json({ message: "set not found" });
        }
        return res.status(204).json({ message: "set deleted successfully", set });
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

export const createNewset = async (req, res) => {
    try {
        const { materialType, setName, brand, floors, mils, plankSize, thickness, padding, planksPerBox, sqftPerBox, installationMethod, warranty, setClass, features } = req.body;
        const set = new Set({
            materialType,
            setName,
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
        await set.save()
        return res.status(201).json({ message: "set created successfully", set });
    } catch (error) {
        console.error({ message: "Error: ", error });
        return res.status(500).json({ message: "An error ocurred", error: error.message })
    }
}

