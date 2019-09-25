import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const SignUp = ({ errors, touched, status }) => {
    const [login, setLogin] = useState([])

    const SForm = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 20rem;
    `

    useEffect(() => {
        if (status) {
            setLogin([ ...login, status])
        }
    }, status)

    return (
            <Form>
                <h1>Sign Up</h1>

                {touched.firstName && errors.firstName && <p>{errors.firstName}</p>}
                <Field type='text' name='firstName' placeholder=' First Name'/>

                {touched.lastName && errors.lastName && <p>{errors.lastName}</p>}
                <Field type='text' name='lastName' placeholder=' Last Name'/>

                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type='text' name='username' placeholder=' Username'/>

                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type='text' name='email' placeholder=' Email'/>
                
                {touched.phoneNumber && errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                <Field type='integer' name='phoneNumber' placeholder=' Phone Number'/>

                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type='password' name='password' placeholder=' Password'/>
                <br/>
                <button type='submit'>Create Account</button>
            </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            firstName: values.firstName || '',
            lastName: values.lastName || '',
            username: values.username || '',
            email: values.email || '',
            phoneNumber: values.phoneNumber || '',
            password: values.password || ''
        }
    },

    validationSchema: yup.object().shape({
        firstName: yup.string().required('First Name is required!'),
        lastName: yup.string().required('Last Name is required!'),
        username: yup.string().required('Username is required!'),
        email: yup.string().required('Email is required!'),
        phoneNumber: yup.string().required('Phone number is required!'),
        password: yup.string().required('Password is required!')
    }),

    handleSubmit: (values, { setStatus }) => {
        axios.post('https://split-thebill.herokuapp.com/auth/register', values)
            .then((res) => {
                setStatus(res.data)
            })
            .catch((err) => {
                console.log('Error: ', err)
            })
    }
})(SignUp)