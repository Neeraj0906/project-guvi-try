import { useState } from 'react';
import { RegisterApi } from '../services/api';
import { isAuthenticated } from '../services/auth';
import { storeUserData } from '../services/storage';
import '../styles/Register.css';
import { Link, Navigate } from 'react-router-dom';
import NavBar from './Navbar';

export default function RegisterPage() {
    const initialStateErrors = {
        email: { required: false },
        password: { required: false },
        name: { required: false },
        custom_error: null,
    };

    const [errors, setErrors] = useState(initialStateErrors);
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        name: '',
    });

    const handleInput = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let newErrors = { ...initialStateErrors }; 
        let hasError = false;

        // Validate fields
        if (inputs.name === '') {
            newErrors.name.required = true;
            hasError = true;
        }
        if (inputs.email === '') {
            newErrors.email.required = true;
            hasError = true;
        }
        if (inputs.password === '') {
            newErrors.password.required = true;
            hasError = true;
        }

        // If no errors, proceed with registration
        if (!hasError) {
            setLoading(true);
            RegisterApi(inputs)
                .then((response) => {
                    storeUserData(response.data.idToken);
                })
                .catch((err) => {
                    if (err.response.data.error.message === 'EMAIL_EXISTS') {
                        setErrors({ ...newErrors, custom_error: 'This email is already registered!' });
                    } else if (String(err.response.data.error.message).includes('WEAK_PASSWORD')) {
                        setErrors({ ...newErrors, custom_error: 'Password should be at least 6 characters!' });
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }

        setErrors(newErrors);
    };

    if (isAuthenticated()) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <NavBar />
            <section className="flex flex-col justify-center items-center">
                <div className="col register-sec">
                    <h2 className="text-center">Register Now</h2>
                    <form onSubmit={handleSubmit} className="register-form">
                        {/* Name Field */}
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Name
                            </label>
                            <input
                                type="text"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                onChange={handleInput}
                                name="name"
                                id="name"
                            />
                            {errors.name.required && <span className="text-danger">Name is required.</span>}
                        </div>

                        {/* Email Field */}
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Email
                            </label>
                            <input
                                type="text"
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                onChange={handleInput}
                                name="email"
                                id="email"
                            />
                            {errors.email.required && <span className="text-danger">Email is required.</span>}
                        </div>

                        {/* Password Field */}
                        <div className="relative z-0 w-full mb-6 group">
                            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Password
                            </label>
                            <input
                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                type="password"
                                onChange={handleInput}
                                name="password"
                                id="password"
                            />
                            {errors.password.required && <span className="text-danger">Password is required.</span>}
                        </div>

                        {/* Error and Loading Indicators */}
                        <div className="form-group">
                            {errors.custom_error && <span className="text-danger">{errors.custom_error}</span>}
                            {loading && (
                                <div className="text-center">
                                    <div className="spinner-border text-primary" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )}
                            <input type="submit" className="btn btn-login float-right" disabled={loading} value="Register" />
                        </div>

                        {/* Redirect to Login */}
                        <div className="form-group">
                            Already have an account? Please <Link to="/login">Login</Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
