import React from 'react';
import { Helmet } from 'react-helmet-async';
import SelectCourse from '../../Hooks/SelectCourse';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';

const Myselesct = () => {
  const [select,refetch] = SelectCourse()

  const handelDelete = (course) => {
    Swal.fire({

      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
      if (result.isConfirmed) {
          fetch(`https://summer-school-server-sandy.vercel.app/select/${course._id}`, {
              method: 'DELETE'
          })
              .then(res => res.json())
              .then(data => {
                  if (data.deletedCount > 0) {
                      refetch();
                      Swal.fire(
                          'Deleted!',
                          'Course  has been deleted.',
                          'success'
                      )
                  }
              })
      }
  })
  }



  return (
    <>
    <div>
      <Helmet>
        <title>Art School || My Select Course</title>
      </Helmet>
      <h1>Select Course:{select.length}</h1>
    </div>
         <div className="overflow-x-auto w-full">
         <table className="table w-full">
           <thead>
             <tr>
               <th>#</th>
               <th>course</th>
               <th>course Name</th>
               <th>Price</th>
               <th>Action</th>
               <th>Pay</th>
             </tr>
           </thead>
           <tbody>
             {
               select.map((course, index) => <tr
                 key={course._id}
               >
                 <td>
                   {index + 1}
                 </td>
                 <td>
                   <div className="avatar">
                     <div className="mask mask-squircle w-12 h-12">
                       <img src={course.image} alt="Avatar Tailwind CSS Component" />
                     </div>
                   </div>
                 </td>
                 <td>
                   {course.name}
                 </td>
                 <td className='text-start'>${course.price}</td>
                 <td>
                   <button onClick={() => handelDelete(course)} className="btn btn-ghost bg-red-500 text-white"><FaTrashAlt></FaTrashAlt></button>
                 </td>
                 <td>
                   <h1>pay</h1>
                 </td>
               </tr>)
             }
           </tbody>
         </table>
       </div>
       </>
  );
};

export default Myselesct;