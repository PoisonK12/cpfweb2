import Step from "../models/steps.model.js";

export const getAllSteps = async (req, res) => {
  try {
    const step = await Step.find({});
    return res.status(200).json({ message: "Success", step });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const getStep = async (req, res) => {
  try {
    const { id } = req.params;
    const step = await Step.findOne({ _id: id });
    if (!step) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.status(200).json({ message: "Success", step });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const editStep = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      profile,
      brand,
      color,
      measurements,
      edgeType,
      stepType,
      features,
    } = req.body;

    const updatedStep = {
      ...(profile && { profile: profile }),
      ...(brand && { brand: brand }),
      ...(color && { color: color }),
      ...(measurements && { measurements: measurements }),
      ...(edgeType && { edgeType: edgeType }),
      ...(stepType && { stepType: stepType }),
      ...(features && { features: features }),
    };

    const step = await Step.findByIdAndUpdate(id, updatedStep, { new: true });

    if (!step) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.status(200).json({ message: "Success", step });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const deleteStep = async (req, res) => {
  try {
    const { id } = req.params;
    const step = await Step.findByIdAndDelete({ _id: id });
    if (!step) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    return res.status(204).json({ message: "Success", step });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};

export const createNewStep = async (req, res) => {
  try {
    const {
      profile,
      brand,
      color,
      measurements,
      edgeType,
      stepType,
      features,
    } = req.body;

    const step = new Step({
      profile,
      brand,
      color,
      measurements,
      edgeType,
      stepType,
      features,
    });
    await step.save();
    return res
      .status(201)
      .json({ message: "Resource created successfully: ", step });
  } catch (error) {
    console.error({ message: "Error: ", error });
    return res
      .status(500)
      .json({ message: "An error occurred", error: error.message });
  }
};
