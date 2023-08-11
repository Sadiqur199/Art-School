import React, { useContext, useState } from 'react';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img1 from '../../assets/login.jpg'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
  const [show , setShow] = useState(false)
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handelLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, { replace: true });
        })
  }

  return (
    <>
      <Helmet>
        <title>Art & Craft School || Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 mr-10 lg:text-left">
            <h1 className="text-5xl ml-20 font-bold">Login now!</h1>
            <img className='mt-5' src={img1} alt="" />
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show?'text':"password" }name='password' placeholder="password" className="input input-bordered" required />
                <p onClick={()=>setShow(!show)} className='mt-[-30px] ml-[290px]'>
                  <small>
                    {
                      show ? <span><BsEyeSlashFill></BsEyeSlashFill></span> : <span><BsEyeFill></BsEyeFill></span>
                    }
                  </small>
                </p>
              </div>

              <div className="form-control mt-10">
                <input className="btn btn-primary" type="submit" value="login" />
              </div>
            </form>
            <p className='text-center pb-5 text-sky-500'><small className='text-red-500'>New Here?</small> <Link to="/singup">Create A Account</Link> </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;