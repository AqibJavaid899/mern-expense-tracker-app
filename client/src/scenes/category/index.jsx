import { Box } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

import AddCategory from "./useCases/AddCategory";
import CategoryList from "./useCases/CategoryList";

const Category = () => {
  const [updateCategoryForm, setUpdateCategoryForm] = useState("");

  const token = Cookies.get("token");

  const createNewCategory = async (form) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/category/create`,
        form,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response;
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <Box>
      <Box>
        <AddCategory
          updateCategoryForm={updateCategoryForm}
          createNewCategory={createNewCategory}
        />
      </Box>
      <Box>
        <CategoryList />
      </Box>
    </Box>
  );
};

export default Category;
