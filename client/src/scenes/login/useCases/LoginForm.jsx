import { Box, TextField } from "@mui/material";

const LoginForm = ({ values, touched, errors, handleBlur, handleChange }) => {
  return (
    <Box>
      <TextField
        fullWidth
        type="email"
        label="Email*"
        name="email"
        value={values.email}
        error={!!touched.email && !!errors.email}
        helperText={touched.email && errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
        sx={{ gridColumn: "span 4", mb: "25px" }}
      />

      <TextField
        fullWidth
        type="password"
        label="Password*"
        name="password"
        value={values.password}
        error={!!touched.password && !!errors.password}
        helperText={touched.password && errors.password}
        onChange={handleChange}
        onBlur={handleBlur}
        sx={{ gridColumn: "span 4", mb: "25px" }}
      />
    </Box>
  );
};

export default LoginForm;
