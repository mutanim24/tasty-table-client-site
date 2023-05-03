import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import AuthProvider, { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {loginWithGoogle, loginWithGit} = useContext(AuthContext)
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname;

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        setError("");
        setSuccess("");
        signIn(email, password)
            .then(result => {
                const user = result.user;
                setSuccess("Successfully login")
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message)
            })

    }

    const loginGoogleHandle = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                navigate(from)
                console.log(user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const loginGitHandle = () => {
        loginWithGit()
            .then(result => {
                const user = result.user;
                navigate(from)
                console.log(user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:w-6/12">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-8/12 shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn bg-sky-600' type="submit" value="Login" />
                        </div>
                        <label className="label">
                            <p className='text-red-600'><small>{error}</small></p>
                            <p className='text-green-600'><small>{success}</small></p>
                        </label>
                        <label className="label">
                            <Link to='/register' className="label-text-alt link link-hover">Don't have an account</Link>
                        </label>
                        <button onClick={loginGoogleHandle} className='flex items-center justify-center gap-2 btn bg-sky-600'>
                            <FaGoogle size={20} />
                            <span>Login with Google</span>
                        </button>
                        <button onClick={loginGitHandle} className='flex items-center justify-center gap-2 btn bg-sky-600'>
                            <FaGithub size={20} />
                            <span>Login with GitHub</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
