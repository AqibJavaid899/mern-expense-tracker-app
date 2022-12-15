import {
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";

import RegisterForm from "./useCases/RegisterForm";

const Register = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleRegister = (values, actions) => {
    console.log("\n\nRegister Form values are : ", values);
  };

  return (
    <Card
      sx={{
        width: !isNonMobile ? "70%" : "45%",
        height: "100%",
        margin: !isNonMobile ? "60px auto" : "100px auto",
        padding: "30px 10px",
      }}
    >
      <Typography
        sx={{
          fontSize: "26px",
          fontFamily: "Roboto Mono",
          textAlign: "center",
          mb: "20px",
        }}
      >
        REGISTRATION FORM
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleRegister}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <CardContent>
              <RegisterForm
                values={values}
                touched={touched}
                errors={errors}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
              <Button
                type="submit"
                sx={{
                  mt: "20px",
                  backgroundColor: "#333333",
                  color: "white",
                  padding: "10px 0px",
                  width: "100%",
                  "&:hover": {
                    opacity: 0.9,
                    backgroundColor: "#333333",
                  },
                }}
              >
                REGISTER
              </Button>

              <Box display="flex" justifyContent="flex-end" mt="16px">
                <Link
                  href="/login"
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Already have an account? Sign in
                </Link>
              </Box>
            </CardContent>
          </form>
        )}
      </Formik>
    </Card>
  );
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const registerSchema = yup.object().shape({
  firstName: yup.string().required("First Name field is required"),
  lastName: yup.string().required("Last Name field is required"),
  email: yup.string().required("email field is required"),
  password: yup
    .string()
    .required("password field is required")
    .min(6, "password length must be more than 6 digits"),
});

export default Register;
