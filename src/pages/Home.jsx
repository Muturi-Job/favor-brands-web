import React, { useState, useEffect } from 'react';
import Favor1 from '../images/FAVOR XL - FRONT.png';
import Favor2 from '../images/FAVOR XL - RIGHT.jpg';
import Favor3 from '../images/FAVOR XL - LEFT.png';
import cloud from '../images/cloud.png'
import dropper from '../images/dropper.png'
import shield from '../images/shield.png'
import leaf from '../images/leaf.png'
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  const images = [Favor1, Favor2, Favor3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  

  return (
    <>
    <div className="home">
      <div className="image-slider-container">
        <div className="image-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index}         className={`image-slide ${index === currentSlide ? 'current-slide' : ''}`}            >
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="prev-button" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="next-button" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className='welcome-section'>
      <div className=" container justify-content-center mb-5 ">
        <h2 className='text-center mb-4'>Welcome to Favor Brands</h2>
        <p>At Favor Brands, we understand the importance of personal care and hygiene in maintaining a healthy and confident lifestyle. Our range of premium personal care products is designed to provide comfort, protection, and dignity to individuals of all ages. Explore our collection of Favor Adult Diapers and Favor Sanitary Pads that combine cutting-edge technology with a commitment to quality.</p>
      </div>
      </div>


      <div className="why-us-section container">
        <h2 className="text-center mb-4">Why Choose Favor Brands?</h2>

        <div className="row justify-content-center p-1 m-5">
          <div className="why-us-item col-lg-3 text-center">
            <img src={cloud} alt="" />
            <h3>COMFORT BEYOND REPAIR</h3>
            <p>Our products are meticulously crafted to prioritize your comfort, allowing you to go about your day with confidence.</p>

          </div>

          <div className="why-us-item col-lg-4 text-center">            
            <img src={dropper} alt="" />
            <h3>PREMIUM ABSORBENCY</h3>
            <p>Whether it's our adult diapers or sanitary pads, our products offer exceptional absorbency, keeping you feeling fresh and dry.</p>
          </div>

          <div className="why-us-item col-lg-4 text-center">
            <img src={shield} alt="" />
            <h3>DIGNITY IN EVERY DETAIL</h3>
            <p>We believe that personal care should never compromise dignity. Our products are discreet, reliable, and designed for your peace of mind.</p>
          </div>

     
        </div>
      </div>
      <div className="featured-products-section container ">
        <h2 className="featured-products-header text-center">Featured Products</h2>
        <div className="row justify-content-center">
          <div className="product-details col-lg-12 ">
            <div className="row">
              <div className="col-md-12 col-lg-4 justify-content-center d-flex ">
                <div className="product-image">
                  <img src={Favor1} alt="" />
                </div>
              </div>
              <div className="col-md-12 col-lg-8  d-flex  ">
                <div className="product-description mt-lg-5">
                  <span className='product-title text-center'>Favor Adult Diapers</span>
                  <p >
                    Discover a new level of comfort with our range of adult diapers.
                    Designed for both daytime and overnight use, these diapers combine
                    advanced technology with thoughtful design. Stay comfortable and
                    secure, embracing freedom in every moment.
                  </p>
                  
                  <button className='more-button' ><Link to='/products'>More</Link></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
    </>
  );
}