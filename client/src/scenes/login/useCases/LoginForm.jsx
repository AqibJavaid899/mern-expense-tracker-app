import { Box, Link, TextField } from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { LoadingButton } from "@mui/lab";

const LoginForm = ({
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
  isLoading,
}) => {
  return (
    <Box
      display="grid"
      gridtemplatecolumns="repeat(4, 1fr)"
      position="relative"
    >
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

      <LoadingButton
        type="submit"
        loading={isLoading}
        endIcon={<LockOpenIcon />}
        variant="contained"
        sx={{
          mt: "20px",
          backgroundColor: "#333333",
          color: "white",
          padding: "10px 0px",
          gridColumn: "span 4",
          "&:hover": {
            opacity: 0.9,
            backgroundColor: "#333333",
          },
        }}
      >
        LOGIN
      </LoadingButton>

      <Box mt="16px">
        <Link
          href="/register"
          style={{
            cursor: "pointer",
            fontSize: "14px",
            position: "absolute",
            right: "0",
          }}
        >
          Do not have an account? Sign up
        </Link>
      </Box>
    </Box>
  );
};

export default LoginForm;
