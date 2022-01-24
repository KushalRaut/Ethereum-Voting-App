import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import './login.css'
import Image from './123.jpg'
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
    <div>
      <section className="login-block">
        <div className="container">
          <div className="row h-100">
            <div className="col-md-4 login-sec">
              <h2 className="text-center">Login Now</h2>
              <form className="login-form" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <label className="text-uppercase">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="form-group">
                  <label className="text-uppercase">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                  ) : null}
                </div>

                <div>
                  <button
                    type="submit"
                    id="submit-btn"
                    className="btn btn-success rounded"
                  >
                    Log In
                  </button>
                  <div className="to_registration">
                    <Link to="/register">
                      <a href="#" className="m-2">
                        Register Now
                      </a>
                    </Link>
                  </div>
                  {message ? <div className="error">{message}</div> : null}
                </div>
              </form>
            </div>

            
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
