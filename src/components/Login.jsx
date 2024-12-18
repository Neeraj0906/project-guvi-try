import '../styles/Login.css';
import '../App.css';
import { useState } from 'react';
import { LoginApi } from '../services/api';
import { storeUserData } from '../services/storage';
import { isAuthenticated } from '../services/auth';
import { Link, Navigate } from 'react-router-dom';
import NavBar from './Navbar';

export default function LoginPage() {
  const initialStateErrors = {
    email: { required: false, invalid: false },
    password: { required: false },
    custom_error: null,
  };
  
  const [errors, setErrors] = useState(initialStateErrors);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = { ...initialStateErrors };
    let hasError = false;

    if (!inputs.email) {
      newErrors.email.required = true;
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      newErrors.email.invalid = true;
      hasError = true;
    }

    if (!inputs.password) {
      newErrors.password.required = true;
      hasError = true;
    }

    if (!hasError) {
      setLoading(true);
      LoginApi(inputs)
        .then((response) => {
          storeUserData(response.data.idToken);
        })
        .catch((err) => {
          if (err.code === 'ERR_BAD_REQUEST') {
            newErrors.custom_error = 'Invalid Credentials.';
          }
        })
        .finally(() => {
          setLoading(false);
          setErrors({ ...newErrors });
        });
    } else {
      setErrors({ ...newErrors });
    }
  };

  if (isAuthenticated()) {
    // Redirect user to dashboard if already authenticated
    return <Navigate to="/" />;
  }

  return (
    <>
      <NavBar />
      <section className="flex flex-col justify-center items-center">
        <div className="">
          <div className="">
            <div className="col login-sec">
              <h2 className="text-center">Login Now</h2>
              <form onSubmit={handleSubmit} className="login-form">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    onChange={handleInput}
                    name="email"
                    placeholder=" "
                    id="floating_email"
                  />
                  {errors.email.required && (
                    <span className="text-red-500">Email is required.</span>
                  )}
                  {errors.email.invalid && (
                    <span className="text-red-500">Please enter a valid email.</span>
                  )}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                  <input
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="password"
                    onChange={handleInput}
                    name="password"
                    placeholder=" "
                  />
                  {errors.password.required && (
                    <span className="text-red-500">Password is required.</span>
                  )}
                </div>
                <div className="form-group">
                  {loading && (
                    <div className="text-center">
                      <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}
                  <span className="text-red-500">
                    {errors.custom_error && <p>{errors.custom_error}</p>}
                  </span>
                  <input
                    type="submit"
                    className="btn btn-login float-right"
                    disabled={loading}
                    value="Login"
                  />
                </div>
                <div className="clearfix"></div>
                <div className="form-group">
                  Create a new account? Please{' '}
                  <Link to="/register">Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
