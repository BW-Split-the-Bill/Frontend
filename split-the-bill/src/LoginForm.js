import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const Login = ({ errors, touched, status }) => {
    const [login, setLogin] = useState([])

    useEffect(() => {
        if (status) {
            setLogin([ ...login, status])
        }
    }, status)
    return (
        <Form>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <Field type='text' name='name' placeholder='Name'/>

            {touched.username && errors.username && <p>{errors.username}</p>}
            <Field type='text' name='username' placeholder='Username'/>

            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type='text' name='email' placeholder='Email'/>
            
            {touched.phone && errors.phone && <p>{errors.phone}</p>}
            <Field type='integer' name='phone' placeholder='Phone'/>

            {touched.pass && errors.pass && <p>{errors.pass}</p>}
            <Field type='password' name='pass' placeholder='Password'/>


            <button type='submit'>submit</button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            name: values.name || '',
            username: values.username || '',
            email: values.email || '',
            phone: values.phone || '',
            pass: values.pass || ''
        }
    },

    validationSchema: yup.object().shape({
        name: yup.string().required('Name is required!'),
        username: yup.string().required('Username is required!'),
        email: yup.string().required('An email is required!'),
        phone: yup.string().required('A phone number is required!'),
        pass: yup.string().required('Password is required!')
    }),

    handleSubmit: (values, { setStatus }) => {
        axios.post('https://reqres.in/api/users', values)
            .then((res) => {
                setStatus(res.data)
            })
            .catch((err) => {
                console.log('Error: ', err)
            })
    }
})(Login)