import React from 'react';
import img1 from '../../../public/images.jpg'
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';


const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 mt-5 bg-[#272727] text-neutral-content">
        <div>
        <img className='h-16 w-16 rounded' src={img1} alt="" />
          <p>Art & Carft School.<br />Providing reliable School since 2023</p>
          <p>Mirpur-2 , Dhaka Bangladesh</p>
          <p>781-562-9355, 781-727-6090</p>
        </div>
        <div>
        <span className="footer-title">Opening hours</span>
        <p>Tue ‒ Thu: 09am ‒ 07pm</p>
        <p>Fri ‒ Sat: 09am ‒ 05pm</p>
        <p>Sun: 08am ‒ 06pm</p>
        <p>Mon: closed</p>
        </div>
        <div>
          <span className="footer-title">Follow Us</span>
          <div className="grid grid-flow-col gap-4">
           <Link><BsFacebook></BsFacebook></Link>
           <Link><BsLinkedin></BsLinkedin></Link>
           <Link><BsGithub></BsGithub></Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;