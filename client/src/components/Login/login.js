import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "./login.css";
import {
  Container,
  Wrapper,
  FormButton,
  FormContent,
  FormH1,
  FormLabel,
  FormWrap,
  FormInput,
  Form,
  Text,
  ErrorText,
  ImgWrapper,
  Img,
  SiteLogo,
} from "./LoginElements";
import { SiHiveBlockchain } from "react-icons/si";
import AuthImage from "../Homepage/images/otp.svg";
import { css } from "@emotion/react";

import { RingLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Login = () => {
  const BASE_API_URL = "http://localhost:4000/api/user/login";
  const navigate = useNavigate();
  const [message, setMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  const color = "#101C03";

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    setIsLoading(true);
    setIsSubmitted(true);
    axios
      .post(BASE_API_URL, values, {
        "Content-Type": "application/json",
      })
      .then((response) => {
        console.log(response);
        if (response.data.status) {
          sessionStorage.setItem("phoneNo", response.data.result.to);
          sessionStorage.setItem("name", response.data.data.name);
          sessionStorage.setItem("userType", response.data.data.user_type);
          navigate("/verify");
          setIsLoading(false);
          setIsSubmitted(false);
        } else {
          setMessage(response.data.message);
          setIsSubmitted(false);
        }
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <Container>
        <Wrapper>
          <FormWrap>
            <FormContent>
              <Form onSubmit={formik.handleSubmit}>
                <SiteLogo to="/">
                  <SiHiveBlockchain />
                </SiteLogo>
                <FormH1>Sign in to your account</FormH1>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  id="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  required
                />

                <FormLabel htmlFor="password">Password</FormLabel>
                <FormInput
                  id="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  required
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
                <FormButton type="submit">Log In</FormButton>
                {message ? <div className="error">{message}</div> : null}
                <Text to="/register">Register Now ❯</Text>
              </Form>
            </FormContent>
          </FormWrap>
          <ImgWrapper>
            {isSubmitted ? (
              <RingLoader
                color={color}
                loading={isLoading}
                css={override}
                size={100}
              />
            ) : null}
            <Img src={AuthImage}></Img>
          </ImgWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
