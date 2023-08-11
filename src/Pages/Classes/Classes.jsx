import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TitlePage from '../../Component/TitlePage/TitlePage';
import ClassesCard from './ClassesCard';

const Classes = () => {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    fetch('https://summer-school-server-sandy.vercel.app/class')
      .then(res => res.json())
      .then(data => setClasses(data))
  }, [])
  // console.log(classes)
  return (
    <div className='mt-10 mb-10 ml-10  sm:justify-items-center w-full'>
      <Helmet>
        <title>Art School || classes</title>
      </Helmet>
      <TitlePage className='mt-5 mb-10' heading={'Our Classes'}></TitlePage>

      <div className='grid md:grid-cols-3 gap-4 mb-5'>
        {
          classes.map(clas=><ClassesCard key={clas._id} clas={clas}></ClassesCard>)
        }
      </div>

    </div>
  );
};

export default Classes;