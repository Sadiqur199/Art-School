import React, { useContext, useState } from 'react';
import SocialLogin from '../../Component/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import img1 from '../../assets/login.jpg'
import { useForm } from 'react-hook-form';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';


const SingUp = () => {
  const [show, setShow] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = { name: data.name, email: data.email, photo: data.photoURL }
            fetch('https://summer-school-server-sandy.vercel.app/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              })

          })
          .catch(error => console.log(error))
      })
  };

  return (
    <>
      <Helmet>
        <title>Art & Craft School ||  Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left mr-10">
            <h1 className="text-5xl ml-20 font-bold">Sign up now!</h1>
            <img className="mt-5" src={img1} alt="" />
          </div>
          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show ? 'text' : "password"}  {...register("password", {
                  required: true,
                  minLength: 6
                })} placeholder="password" className="input input-bordered" />
                <p onClick={() => setShow(!show)} className='mt-[-30px] ml-[290px]'>
                  <small>
                    {
                      show ? <span><BsEyeSlashFill></BsEyeSlashFill></span> : <span><BsEyeFill></BsEyeFill></span>
                    }
                  </small>
                </p>
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
              </div>

              <div className="form-control mt-3">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type={show ? 'text' : "password"}  {...register("confirm", { required: true })} name="confirm" placeholder="Confirm" className="input input-bordered" />
                <p onClick={() => setShow(!show)} className='mt-[-30px] ml-[290px]'>
                  <small>
                    {
                      show ? <span><BsEyeSlashFill></BsEyeSlashFill></span> : <span><BsEyeFill></BsEyeFill></span>
                    }
                  </small>
                </p>
                {errors.password && <span className="text-red-600">confirm password is required</span>}
              </div>

              <div className="form-control mt-5">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='text-center pb-1 text-sky-500'><small className='text-red-500'>Already Have an account?</small> <Link to="/login">Login</Link> </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingUp;