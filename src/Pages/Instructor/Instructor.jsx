import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TitlePage from '../../Component/TitlePage/TitlePage';
import InstructorCard from './InstructorCard';

const Instructor = () => {
  const [instructors, setInstructors] = useState([])
  useEffect(() => {
    fetch('https://summer-school-server-sandy.vercel.app/instructor')
      .then(res => res.json())
      .then(data => setInstructors(data))
  }, [])
  return (
    <div className='mt-10 mb-10 ml-10  sm:justify-items-center w-full'>
      <Helmet>
        <title>Art School || Instructor</title>
      </Helmet>

      <TitlePage subheading={'Art & Craft School'} heading={"Our Instructor"}></TitlePage>

      <div className='grid md:grid-cols-3 gap-4 mb-5'>
        {
          instructors.map(instructor=><InstructorCard key={instructor._id} instructor={instructor}></InstructorCard>)
        }
      </div>

    </div>
  );
};

export default Instructor;