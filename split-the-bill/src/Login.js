import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const Login = ({ errors, touched, status }) => {
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
                <h1>Sign In</h1>
                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type='text' name='username' placeholder='Username'/>

                {touched.pass && errors.pass && <p>{errors.pass}</p>}
                <Field type='password' name='pass' placeholder='Password'/>
                <br/>
                <button type='submit'>Login</button>
            </Form>
    )

}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            email: values.email || '',
            pass: values.pass || ''
        }
    },

    validationSchema: yup.object().shape({       
        email: yup.string().required('An email is required!'),
        pass: yup.string().required('Password is required!')
    }),

    handleSubmit: (values, { setStatus }) => {
        axios.post('https://split-thebill.herokuapp.com/auth/login', values)
            .then((res) => {
                setStatus(res.data)
            })
            .catch((err) => {
                console.log('Error: ', err)
            })
    }
})(Login)