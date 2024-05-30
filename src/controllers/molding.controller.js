import Molding from "../models/molding.model.js";

export const getAllMoldings = async (req, res) => {
  try {
    const moldings = await Molding.find({});
    return res.status(200).json({ message: "Success", moldings });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const getMolding = async (req, res) => {
  try {
    const { id } = req.params;
    const molding = await Molding.findById(id);
    if (!molding) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.status(200).json({ message: "Success", molding });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const editMolding = async (req, res) => {
  try {
    const { id } = req.params;
    const { profile, brand, color, measurements, features } = req.body;

    const updatedMolding = {
      ...(profile && { profile }),
      ...(brand && { brand }),
      ...(color && { color }),
      ...(measurements && { measurements }),
      ...(features && { features }),
    };

    const molding = await Molding.findByIdAndUpdate(id, updatedMolding, {
      new: true,
    });
    if (!molding) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.status(200).json({ message: "Success", molding });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const deleteMolding = async (req, res) => {
  try {
    const { id } = req.params;
    const molding = await Molding.findByIdAndDelete(id);
    if (!molding) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.status(204).json({ message: "Success" });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const createNewMolding = async (req, res) => {
  try {
    const { profile, brand, color, measurements, features } = req.body;
    const molding = new Molding({
      profile,
      brand,
      color,
      measurements,
      features,
    });
    await molding.save();
    return res.status(201).json({ message: "Success", molding });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
