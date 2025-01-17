import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, yupToFormErrors } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import TabNav from './TabNav';

const Login = ({ errors, touched, status }) => {
    const [login, setLogin] = useState([])

    useEffect(() => {
        if (status) {
            setLogin([ ...login, status])
        }
    }, [status])

    return (
            <Form>        
                <h1>Sign In</h1>

                {touched.username && errors.username && <p>{errors.username}</p>}
                <Field type='text' name='username' placeholder=' Username'/>

                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type='password' name='password' placeholder=' Password'/>
                <br/>
                <button type='submit' onClick={TabNav}>Login</button>
            </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            username: values.username || '',
            password: values.password || ''
        }
    },

    validationSchema: yup.object().shape({       
        username: yup.string().required('Username is required!'),
        password: yup.string().required('Password is required!')
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