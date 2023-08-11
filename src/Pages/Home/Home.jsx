import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Carosel/Banner';
import OurSchoolDetails from '../OurSchoolDetails/OurSchoolDetails';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructor/PopularInstructor';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Art & Craft School || Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructor></PopularInstructor>
      <OurSchoolDetails></OurSchoolDetails>
      
    </div>
  );
};

export default Home;