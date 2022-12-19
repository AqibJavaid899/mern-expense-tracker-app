import { Box, Link, TextField, useMediaQuery } from "@mui/material";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { LoadingButton } from "@mui/lab";

const RegisterForm = ({
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
  isLoading,
}) => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  return (
    <Box
      display="grid"
      gridtemplatecolumns="repeat(4, 1fr)"
      position="relative"
    >
      <TextField
        type="text"
        label="First Name*"
        name="firstName"
        value={values.firstName}
        error={!!touched.firstName && !!errors.firstName}
        helperText={touched.firstName && errors.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        sx={{
          gridColumn: isNonMobile ? "span 2" : "span 4",
          mb: "25px",
          mr: isNonMobile && "20px",
        }}
      />

      <TextField
        type="text"
        label="Last Name*"
        name="lastName"
        value={values.lastName}
        error={!!touched.lastName && !!errors.lastName}
        helperText={touched.lastName && errors.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        sx={{ gridColumn: isNonMobile ? "span 2" : "span 4", mb: "25px" }}
      />

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
        endIcon={<HowToRegIcon />}
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
        REGISTER
      </LoadingButton>

      <Box mt="16px">
        <Link
          href="/login"
          style={{
            cursor: "pointer",
            fontSize: "14px",
            position: "absolute",
            right: 0,
          }}
        >
          Already have an account? Sign in
        </Link>
      </Box>
    </Box>
  );
};

export default RegisterForm;
