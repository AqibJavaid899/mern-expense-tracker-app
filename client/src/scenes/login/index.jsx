import { Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { Formik } from "formik";
import * as yup from "yup";

import LoginForm from "./useCases/LoginForm";

const Login = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const navigate = useNavigate();

  const handleLogin = async (values, actions) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}authentication/login`,
        values,
      );
      navigate("/");
      Cookies.set("token", response.data.token);
    } catch (error) {
      console.error(error.message);
    }
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
            <CardContent>
              <LoginForm
                values={values}
                touched={touched}
                errors={errors}
                handleBlur={handleBlur}
                handleChange={handleChange}
              />
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