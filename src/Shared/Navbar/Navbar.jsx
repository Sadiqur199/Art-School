import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images.jpg'
import { AuthContext } from '../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import { BsToggleOff } from 'react-icons/bs';
import { useState } from 'react';
import { useEffect } from 'react';



const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState('light');
  const { user, logOut } = useContext(AuthContext)

 useEffect(()=>{
  if(isDarkMode == 'dark'){
    document.body.classList.add('dark')
  }
  else{
    document.body.classList.remove('dark')
  }
},[isDarkMode])

const handelDark = () =>{
  setIsDarkMode(isDarkMode == 'dark' ? 'light' : 'dark')
  // console.log('dark')
}

  const handelLogOut = () => {
    logOut()
      .then()
      .then(error => console.log(error.message))
    console.log('user logout')
  }
  const navOption = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/instructors">Instructors</Link></li>
    <li><Link to="/classes">Classes</Link></li>
    {
      user ? <>
        <li><Link to='/dashboard/myselect'>Dashboard</Link></li>
        <button onClick={handelLogOut} className="btn  btn-ghost ">LogOut</button>
      </>
        :
        <>
          <li><Link to="/login">Login</Link></li>
        </>
    }
  </>
  return (
    <>
      
      <div className="navbar z-10  md:bg-opacity-30 md:bg-black md:text-white ">
        <div className="navbar-start">
          <div className="dropdown relative z-999 ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu  z-10 menu-compact dropdown-content mt-3 p-2 shadow  text-black bg-slate-300 rounded-box w-52 ">
              {navOption}
            </ul>
          </div>
          <img className='h-16 w-16 rounded' src={img1} alt="" />
          <a className="btn btn-ghost normal-case text-xl"> Art & craft School</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOption}
          </ul>
        </div>
        <div className="navbar-end">
          <img className='mt-2 me-2 rounded' style={{ height: "35px", width: '35px' }} title={user?.displayName} src={user?.photoURL ? user.photoURL
            :
            <Link href="" className='mt-1'>
              <FaUserCircle style={{ fontSize: '2rem' }} />
            </Link>} alt="" />
           
           <div>
            <button className='btn btn-outline ' onClick={handelDark}>dark Mode</button>
           </div>

        </div>
        </div>
        </>
  );
};

export default Navbar;