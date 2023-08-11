import React from 'react';
import TitlePage from '../../Component/TitlePage/TitlePage';
import img1 from '../../assets/h1-img-1.jpg'
import { MotionAnimate } from 'react-motion-animate'


const OurSchoolDetails = () => {
  return (
    <div className='mt-10 mb-10'>
      <div>
        <TitlePage  heading={'Art & Craft School History'}></TitlePage>
      </div>
      <div className='grid md:grid-cols-3 gap-4 mt-4'>
        <MotionAnimate
          animation='fadeInUp'
          reset={true}
          distance={200}
          delay={1}
          speed={1}
        >
          <div>
            <p className='text-justify ml-3 mr-3'>a set of written descriptions of the specific abilities that students should possess as a result of high quality arts learning. They provide discrete learning outcomes, arranged by discipline and age, that define excellence in the field. In other words, they are the complete set of what students should be able to do after engaging in arts education programs. They were introduced in 2015 by a national coalition of educators, artists, academics, policymakers, and practitioners, and are managed by the State Education Agency Directors of Arts Education. According to the Collaborative for Academic, Social, and Emotional Learning (CASEL), “SEL is the process through which all young people and adults acquire and apply the knowledge, skills, and attitudes to develop healthy identities, manage emotions and achieve personal and collective goals,  establish and maintain supportive relationships, and make responsible and caring decisions.” It is important to note that many scholars and educators have developed the ideas behind social and emotional learning in a number of ways over time; we are choosing to share the CASEL framework for its clarity and ubiquity, though it is by no means the only pathway to SEL—or even the “best” one. UDL is a framework that guides the design and practice of inclusive teaching and learning based on scientific insights into how humans learn. Within the framework is a set of specific guidelines that can be applied to any discipline or domain to ensure that all learners can access and participate in meaningful learning opportunities. UDL was developed by a nonprofit education research and development organization called CAST, and traces its origins to the Universal Design movement in the wake of the Americans with Disabilities Act.</p>
          </div>
        </MotionAnimate>

        <div>
          <img src={img1} alt="" />
        </div>
        <MotionAnimate
          animation='fadeInUp'
          reset={true}
          distance={200}
          delay={1}
          speed={1}>
            
          <div>
            <p className='text-justify ml-3 mr-3'>Art schools began being perceived as legitimate universities in the 2023s.[need quotation to verify] Before this, any art programs were used purely as extracurricular activities,[citation needed][4] and there were no methods of grading works. After the 1980s, however, art programs were integrated into many different kinds of schools and universities as legitimate courses that could be evaluated. While some argue that this has weakened creativity among modern art-students, others see this as a way to treat fine arts equally in comparison with other subjects.Apprentice paths teach art as a mixture of aesthetic and function. Typically, students would apprentice themselves to someone who was already skilled in some sort of trade in exchange for food and housing. Many of the Old Masters received training in this manner, copying or painting in the style of their teacher in order to learn the trade. Once the apprenticeship ended, the student would have to prove what they learned by creating what we know today as a "masterpiece". In modern schooling, this can be seen in practical art classes, including photography or printmaking.The conceptual curriculum began in the late-twentieth century, and focused not only on creating artwork, but also on presenting and describing the thought process behind the work. This is when the idea of critiquing others' works for educational purposes became popularized in North America . This serves as a model for modern-day art school programs.Professional curricula began appearing in art schools at the very end of the twentieth century. They teach students artistry from a perspective of business, and typically focus on modern pop-culture within the works themselves. These programs are designed to teach students how to promote both themselves and their artwork.</p>
          </div>


        </MotionAnimate>
      </div>
    </div>
  );
};

export default OurSchoolDetails;