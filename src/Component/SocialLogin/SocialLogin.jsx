import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {

  const { googleSignIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handelGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const loggedInUser = result.user
        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
        fetch('https://summer-school-server-sandy.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
        })
            .then(res => res.json())
            .then(() => {
                navigate(from, { replace: true });
            })
      })
      .catch(error => console.log(error.message))
  }

  return (
    <div>
      <div className="divider">OR</div>
      <div className='text-center pb-2'>
        <button onClick={handelGoogleSignIn} className="btn btn-circle bg-zinc-500">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;