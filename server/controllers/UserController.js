export const getSignedInUser = async (req, res) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
