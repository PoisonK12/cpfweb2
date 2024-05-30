import Baseboard from "../models/baseboard.model.js";

export const getAllBaseboards = async (req, res) => {
  try {
    const baseboards = await Baseboard.find({});
    return res.status(200).json({ message: "Success: ", baseboards });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error ocurred", error: error.message });
  }
};

export const getBaseboard = async (req, res) => {
  try {
    const { id } = req.params;
    const baseboard = await Baseboard.findById(id);
    if (!baseboard) {
      return res.status(404).json({ message: "Producto no Encontrado" });
    }
    return res.status(200).json({ message: "Success: ", baseboard });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error ocurred", error: error.message });
  }
};

export const editBaseboard = async (req, res) => {
  try {
    const { id } = req.params;
    const { brand, style, material, measurements, pcsPerPallet, features } =
      req.body;

    const updatedBaseboard = {
      ...(brand && { brand }),
      ...(style && { style }),
      ...(material && { material }),
      ...(measurements && { measurements }),
      ...(pcsPerPallet && { pcsPerPallet }),
      ...(features && { features }),
    };

    const baseboard = await Baseboard.findByIdAndUpdate(id, updatedBaseboard, {
      new: true,
    });
    if (!baseboard) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.status(200).json({ message: "Success: ", baseboard });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error ocurred", error: error.message });
  }
};

export const deleteBaseboard = async (req, res) => {
  try {
    const { id } = req.params;
    const baseboard = await Baseboard.findByIdAndDelete(id);
    if (!baseboard) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.status(204).json({ message: "Success: ", baseboard });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};


export const createNewBaseboard = async (req, res) => {
  try {
    const { brand, style, material, measurements, pcsPerPallet, features } = req.body
    const baseboard = new Baseboard({
      brand,
      style,
      material,
      measurements,
      pcsPerPallet,
      features
    })

    await baseboard.save()
    return res.status(201).json({ message: "Success: ", baseboard })
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error ocurred", error: error.message });
  }
};
