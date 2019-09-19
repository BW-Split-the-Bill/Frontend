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
        <SForm>
            <Form>        
                <h1>Sign In</h1>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type='text' name='email' placeholder='Email'/>

                {touched.pass && errors.pass && <p>{errors.pass}</p>}
                <Field type='password' name='pass' placeholder='Password'/>
                <br/>
                <button type='submit'>Login</button>
            </Form>
        </SForm>
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
        axios.post('https://reqres.in/api/users', values)
            .then((res) => {
                setStatus(res.data)
            })
            .catch((err) => {
                console.log('Error: ', err)
            })
    }
})(Login)