import React from 'react';

const TitlePage = ({heading,subheading}) => {
  return (
    <div>
      <div className='md:w-4/12 mx-auto text-center my-5'>
        <p className='text-[#C1B295] mb-3'>{subheading}</p>
        <h3 className='text-3xl text-black uppercase border-y-3 py-3'>{heading}</h3>
      </div>
    </div>
  );
};

export default TitlePage;