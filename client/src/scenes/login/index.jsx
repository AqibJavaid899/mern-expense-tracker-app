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

import LoginForm from "./useCases/LoginForm";

const Login = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleLogin = (values, actions) => {
    console.log("\n\nLogin Form values are : ", values);
  };

  return (
    <Card
      sx={{
        width: !isNonMobile ? "70%" : "45%",
        height: "100%",
        margin: "100px auto",
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
        LOGIN FORM
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
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
            <CardContent display="grid" gridtemplatecolumns="repeat(4, 1fr)">
              <LoginForm
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
                LOGIN
              </Button>

              <Box display="flex" justifyContent="flex-end" mt="16px">
                <Link
                  href="/register"
                  style={{
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Already have an account? Sign up
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
  email: "",
  password: "",
};

const loginSchema = yup.object().shape({
  email: yup.string().required("email field is required"),
  password: yup
    .string()
    .required("password field is required")
    .min(6, "password length must be more than 6 digits"),
});

export default Login;
