import User from "../models/User.js";

export const deleteCategory = async (req, res) => {
  try {
    const updatedCategories = req.user.categories.filter(
      (category) => category._id != req.params.id,
    );
    await User.updateOne(
      { _id: req.user._id },
      { $set: { categories: updatedCategories } },
    );

    res
      .status(200)
      .json({ message: "Selected Category has been deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { label, icon } = req.body;

    await User.updateOne(
      { _id: req.user._id },
      { $set: { categories: [...req.user.categories, { label, icon }] } },
    );

    res
      .status(200)
      .json({ message: "New Category has been created successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
