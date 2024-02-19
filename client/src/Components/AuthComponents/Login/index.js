import React, { useState } from 'react';
import loginImage from '../../../Assets/login-image2.png'
import { NavLink } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import domain from '../../domain/domain';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { AuthButton, AuthCard, AuthContainer, AuthDescription, AuthForm, AuthFormContainer, Error, ForgotPasswordRemeberContainer, Heading, Input, InputFieldsContainer, Label, RememberMeContainer } from '../../Styles/StyledComponents';
import { setToken, setUserData } from '../../../Utils/CookiesUtils';
import { LoginValidation } from '../../../Utils/validation';

const Login = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [credentials, setCredentials] = useState({
        email_address: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    const initialFormFields = [
        { label: 'Email', name: 'email_address', type: 'email', placeholder: 'Email' },
        { label: 'Password', name: 'password', type: 'password', placeholder: 'Password' },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const validationErrors = LoginValidation(credentials);

            if (Object.keys(validationErrors).length === 0) {
                const userData = await axios.post(`${domain.domain}/user/login`, credentials);
                navigate('/user/dashboard')
                setToken(userData.data.token)
                setUserData(userData.data.user)
                enqueueSnackbar('Logged in successfully', { variant: 'success' });
            } else {
                setErrors(validationErrors);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    setErrorMsg('Invalid credentials. Please check your email and password.');
                    enqueueSnackbar('Invalid credentials. Please check your email and password.', { variant: 'error' });
                } else if (error.response.status === 403) {
                    setErrorMsg('Access forbidden. You do not have permission to log in.');
                    enqueueSnackbar('Access forbidden. You do not have permission to log in.', { variant: 'error' });
                } else {
                    setErrorMsg('An unexpected error occurred. Please try again later.');
                    enqueueSnackbar('An unexpected error occurred. Please try again later.', { variant: 'error' });
                }
            } else if (error.request) {
                setErrorMsg('No internet connection.');
                enqueueSnackbar('No internet connection.', { variant: 'error' });
            } else {
                setErrorMsg('Error in setting up the request. Please try again later.');
                enqueueSnackbar('Error in setting up the request. Please try again later.', { variant: 'error' });
            }
        } finally {
            setLoading(false);
        }
    };



    return (
        <AuthContainer>
            <AuthFormContainer>
                <AuthCard>
                    <Heading>Welcome Back</Heading>
                    <Heading>Login</Heading>
                    <AuthDescription>Don't have an account yet? <NavLink className='link' to='/accounts/signup'> Sign Up</NavLink></AuthDescription>
                    <AuthForm onSubmit={handleSubmit}>
                        {initialFormFields.map((field) => (
                            <InputFieldsContainer key={field.name}>
                                <Label>{field.label}</Label>
                                <Input
                                    type={field.type}
                                    name={field.name}
                                    value={credentials[field.name] || ''}
                                    onChange={handleChange}
                                    placeholder={field.placeholder}
                                />
                                {errors[field.name] && <Error>{errors[field.name]}</Error>}
                            </InputFieldsContainer>
                        ))}
                        <ForgotPasswordRemeberContainer className="d-flex justify-content-between">
                            <RememberMeContainer>
                                <Input id="remeberme" style={{ height: '20px', width: '20px' }} type="checkbox" />
                                <Label htmlFor="remeberme">Remember me</Label>
                            </RememberMeContainer>
                            <Link to="/accounts/reset-password" className="link">
                                Forgot password?
                            </Link>
                        </ForgotPasswordRemeberContainer>
                        <AuthButton type="submit" disabled={loading}>
                            {loading ? 'Loading...' : 'Login'}
                        </AuthButton>
                        {errorMsg && <Error>{errorMsg}</Error>}
                    </AuthForm>
                </AuthCard>
                <img src={loginImage} alt='login-img' className='img-fluid d-none d-md-block' />
            </AuthFormContainer>
        </AuthContainer>
    );
};

export default Login;
