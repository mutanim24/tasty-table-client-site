import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const logoutHandle = () => {
        logOut()
            .then(() => {})
            .catch(err => console.log(err.message))
    }
    return (
        <div className="navbar  mx-auto bg-sky-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl">TastyTable</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold space-x-6">
                    <NavLink className={({isActive}) => isActive ? 'font-bold border-b border-black' : ''} to='/'>Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? 'font-bold border-b border-black' : ''} to='/blog'>Blog</NavLink>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-5">
                <div>{user ?
                    <div className='flex gap-5'>
                        <img title={user.displayName} className='rounded-full w-11 h-11' src={user.photoURL} alt="User" />
                        <button onClick={logoutHandle} className='btn'>Logout</button>
                    </div> :
                    <Link to='/login' className="btn">Login</Link>
                }</div>

            </div>
        </div>
    );
};

export default Header;