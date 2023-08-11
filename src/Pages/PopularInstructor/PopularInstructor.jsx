import React, { useEffect, useState } from 'react';
import TitlePage from '../../Component/TitlePage/TitlePage';

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([])
  useEffect(() => {
    fetch('https://summer-school-server-sandy.vercel.app/instructor')
      .then(res => res.json())
      .then(data => setInstructors(data))
  }, [])
  return (
    <div className='ml-10  sm:justify-items-center w-full'>
      <TitlePage className='mt-5 mb-10'  heading={'Instructor Classes'}></TitlePage>
      <div className='grid  md:grid-cols-3 mt-10'>
        {
          instructors.map(instructor => <div>
            <div className="card card-compact w-96 h-50 bg-base-100 mb-5 shadow-xl">
              <figure><img className='h-36 w-full' src={instructor.image} alt="" /></figure>
              <div className="card-body">
                <h2 className="card-title">{instructor.name}</h2>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default PopularInstructor;