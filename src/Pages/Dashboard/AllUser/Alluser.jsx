import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure';

const Alluser = () => {
  const [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get('/users')
    return res.data
  })

  const handelAdmin = user =>{
    fetch(`https://summer-school-server-sandy.vercel.app/users/admin/${user._id}`,{
      method:'PATCH'
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      if(data.modifiedCount){
        refetch()
        Swal.fire({
          title: `${user.name} admin!`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
    })
  }

  const handelInstructor = user =>{
    fetch(`https://summer-school-server-sandy.vercel.app/users/instructor/${user._id}`,{
      method:'PATCH'
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data)
      if(data.modifiedCount){
        refetch()
        Swal.fire({
          title: `${user.name} instructor!`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      }
    })
  }



  return (
    <div>
      <Helmet>
        <title>Art School || all User</title>
      </Helmet>
      <h1>all user: {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user.role === 'admin' ? 'admin' :

                      <button onClick={() => handelAdmin(user)} className="btn btn-ghost mt-4 bg-[#3982E4] text-white"><FaUsers></FaUsers></button>

                  }

                </td>

                <td>
                {
                    user.role === 'instructor' ? 'instructor' :

                      <button onClick={() => handelInstructor(user)} className="btn btn-ghost mt-4 bg-[#3982E4] text-white"><FaUsers></FaUsers></button>

                  }
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Alluser;