import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SelectCourse from '../../Hooks/SelectCourse';

const ClassesCard = ({clas}) => {
  const {name,image,instructor,availableSeats,price,_id} = clas
  const {user} = useContext(AuthContext)
  const [ ,refetch] = SelectCourse()
  const handelSelect=(clas)=>{
    console.log(clas)
    if (user && user.email && clas.availableSeats!==0) {
      const selectItem = {courseId:_id,name,image,price,instructor,availableSeats,email:user.email}
      fetch('https://summer-school-server-sandy.vercel.app/select',{
        method:'POST',
        headers : {
          'content-type':'application/json'
        },
        body:JSON.stringify(selectItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Course Added',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please login to select course',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state:{from:location}})
        }
      })
    }
  }

  return (
    <div>
      <div className="card card-compact w-96 h-50 bg-base-100 mb-5 shadow-xl" style={clas.availableSeats == 0 ? {backgroundColor: 'red'} : {}}>
        <figure><img className='h-36 w-full' src={clas.image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title"><span className='font-bold'>Name:</span> {clas.name}</h2>
          <p> <span className='font-bold'>Instructor:</span> {clas.instructor}</p>
          <p> <span className='font-bold'>AvailableSeats:</span> {clas.availableSeats}</p>
          <p> <span className='font-bold'>Price:</span> ${clas.price}</p>
            <div className='justify-end card-actions p-5'>
             {
              user ?
              <button onClick={()=>handelSelect(clas)} className="btn btn-outline">Select</button>
              :
              <button disabled className="btn btn-outline">Select</button>
             }
            </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;