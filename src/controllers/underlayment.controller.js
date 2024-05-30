import Underlayment from "../models/underlayment.model.js";

export const getAllUnderlayments = async (req, res) => {
  try {
    const underlayment = await Underlayment.find({});
    return res.status(200).json({ message: "Success", underlayment });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const getUnderlayment = async (req, res) => {
  try {
    const { id } = req.params;
    const underlayment = await Underlayment.findOne({ _id: id });
    if (!underlayment) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.status(200).json({ message: "Success", underlayment });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const editUnderlayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, material, uses, brand, sqftPerRoll, measurements, features } =
      req.body;

    const updatedUnderlayment = {
      ...(name && { name: name }),
      ...(material && { material: material }),
      ...(uses && { uses: uses }),
      ...(brand && { brand: brand }),
      ...(sqftPerRoll && { sqftPerRoll: sqftPerRoll }),
      ...(measurements && { measurements: measurements }),
      ...(features && { features: features }),
    };

    const underlayment = await Underlayment.findByIdAndUpdate(
      id,
      updatedUnderlayment,
      { new: true }
    );
    if (!underlayment) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res
      .status(200)
      .json({ message: "Resource updated successfully: ", underlayment });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const deleteUnderlayment = async (req, res) => {
  try {
    const { id } = req.params;
    const underlayment = await Underlayment.findByIdAndDelete({ _id: id });
    if (!underlayment) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res
      .status(204)
      .json({ message: "Resource deleted successfully: ", underlayment });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const createNewUnderlayment = async (req, res) => {
  try {
    const { name, material, uses, brand, sqftPerRoll, measurements, features } =
      req.body;
    const underlayment = new Underlayment({
      name,
      material,
      uses,
      brand,
      sqftPerRoll,
      measurements,
      features,
    });
    await underlayment.save();
    return res
      .status(201)
      .json({ message: "Resource created successfully: ", underlayment });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
