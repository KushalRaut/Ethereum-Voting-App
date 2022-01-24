import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import './login.css'
import {
  Container,
  FormButton,
  FormContent,
  FormH1,
  FormLabel,
  FormWrap,
  Icon,
  FormInput,
  Form,
  Text,
} from './LoginElements'
import { SiHiveBlockchain } from 'react-icons/si'

const Login = () => {
  const BASE_API_URL = 'http://localhost:4000/api/user/login'
  const navigate = useNavigate()
  const [message, setMessage] = useState()

  const initialValues = {
    email: '',
    password: '',
  }

  const onSubmit = (values) => {
    axios
      .post(BASE_API_URL, values, {
        'Content-Type': 'application/json',
      })
      .then((response) => {
        if (response.data.status) {
          sessionStorage.setItem('phoneNo', response.data.result.to)
          navigate('/verify')
        } else {
          setMessage(response.data.message)
        }
      })
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('This field is required'),
    password: Yup.string().required('This field is required'),
  })

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  })

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <SiHiveBlockchain /> E-Vote Nepal
          </Icon>
          <FormContent>
            <Form onSubmit={formik.handleSubmit}>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
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
              <Text>Forgot Password</Text>
              {message ? <div className="error">{message}</div> : null}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Login
