import Blog from "../models/blog.model.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    return res.status(200).json({ message: "Success:", blogs });
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ message: "Error:", error });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json("Blog not found");
    }
    return res.status(200).json();
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ message: "Error:", error });
  }
};

export const editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, pictures, subtitle, paragraphs } = req.body;

    const updatedBlog = {
      ...(title && { title }),
      ...(pictures && { pictures }),
      ...(subtitle && { subtitle }),
      ...(paragraphs && { paragraphs }),
    };
    const blog = await Blog.findByIdAndUpdate(id, updatedBlog, { new: true });
    return res.status(200).json({ message: "Updated:", blog });
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ message: "Error:", error });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
    }
    res.status(204).json({ message: "Deleted:", blog });
  } catch (error) {
    console.error({ error: error.message });
    return res.status(500).json({ message: "Error:", error });
  }
};
