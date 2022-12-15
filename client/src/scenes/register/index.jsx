import { Card, CardContent, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import * as yup from "yup";

import RegisterForm from "./useCases/RegisterForm";

const Register = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const navigate = useNavigate();

  const handleRegister = async (values, actions) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}authentication/register`,
        values,
      );
      navigate("/login");
    } catch (error) {
      console.error(error.message);
    }
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
