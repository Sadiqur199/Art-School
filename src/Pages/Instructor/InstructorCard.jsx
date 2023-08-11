import React from 'react';
const InstructorCard = ({ instructor }) => {
  const { name, email, image,numClassesTaken } = instructor
  return (
    <div >
      <div className="card card-compact w-96 h-50 bg-base-100 mb-5 shadow-xl">
        <figure><img className='h-36 w-full' src={instructor.image} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title"><span className='font-bold'>Name:</span> {instructor.name}</h2>
          <p> <span className='font-bold'>Email:</span> {instructor.email}</p>
          <p> <span className='font-bold'>NumberClassTaken:</span> {instructor.numClassesTaken}</p>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;