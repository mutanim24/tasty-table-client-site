import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const { loginWithGoogle, loginWithGit, setUser, createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photo, email, password)

        // password validation
        setError("");
        setSuccess("");
        if (password.length < 6) {
            setError("The password is less than 6 characters");
            return;
        }

        createUser(email, password, displayName, photoUrl)
            .then((result) => {
                // User created successfully, update profile
                const loggedUser = result.user;
                return updateProfile(loggedUser, {
                    displayName: displayName,
                    photoURL: photoUrl,
                }).then(() => {
                    form.reset();
                });
            })
    }

    const loginGoogleHandle = () => {
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    const loginGitHandle = () => {
        loginWithGit()
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:w-6/12">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-8/12 shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phot URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn bg-sky-600' type="submit" value="Register" />
                        </div>
                        <label className="label">
                            <p className='text-red-600'><small>{error}</small></p>
                            <p className='text-green-600'><small>{success}</small></p>
                        </label>
                        <label className="label">
                            <Link to='/login' className="label-text-alt link link-hover">Already have an account</Link>
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

export default Register;