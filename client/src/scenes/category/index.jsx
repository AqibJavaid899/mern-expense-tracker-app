import { Box } from "@mui/material";

import AddCategory from "./useCases/AddCategory";
import CategoryList from "./useCases/CategoryList";

const Category = () => {
  return (
    <Box>
      <Box>
        <AddCategory />
      </Box>
      <Box>
        <CategoryList />
      </Box>
    </Box>
  );
};

export default Category;
