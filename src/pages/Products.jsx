import React, { useRef } from 'react'
import Diaper from '../images/diaper.png'
import Pad from '../images/sanitary-napkin.png'
import FavorDiaper from '../images/FAVOR XL - FRONT.png'
import './Products.css'

export default function Products() {
  const diaperRef = useRef(null);
  const padRef = useRef(null);

  const handleDiaperClick = () => {
    diaperRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePadClick = () => {
    padRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <h2 className='text-center'>Product Categories</h2>

      <div className="product-section-buttons">
        <div className="button-container d-flex justify-content-center col-md-12">
          <button className="button col-md-2 " onClick={handleDiaperClick}>
            <img className='product-section-button-image' src={Diaper} alt="" />
            <span>ADULT DIAPERS</span>
          </button>
          <button className="button col-md-2 " onClick={handlePadClick}>
            <img className='product-section-button-image' src={Pad} alt="" />
            <span>SANITARY PADS</span>
          </button>
        </div>
      </div>
      <div className="product-list">
        <div className="product-items">
          <div className="product-item " ref={diaperRef}>
            <h3 className="text-center">Favor Adult Diapers</h3>
            <div className="row justify-content-center">
              <div className="col-md-4 d-flex justify-content-center">
                <img src={FavorDiaper} alt="" className="product-image" />
              </div>
              <div className="col-md-6 mt-4 pt-2 ">
                <p className="product-description container">
                  <h4 > Product description</h4>
                  Experience Unrivaled Comfort and Confidence
                  
                  <h5 className='pt-3'>Key Features:</h5>
                  <ul>
                    <li><strong>Premium Comfort:</strong> Designed with your comfort in mind, our product offers a soft and gentle touch against your skin.</li>
                    <li><strong>Superior Absorption:</strong> Stay dry and worry-free, regardless of the level of incontinence, thanks to its exceptional absorption capabilities.</li>
                    <li><strong>Discreet Protection:</strong> Choose our product for discreet and reliable protection that lets you live life on your terms.</li>

                    </ul>  
                </p>
                <br />
                <p className='size-and-fit container'>
                  <h4 >Size and Fit</h4>
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>Waist (inches)</th>
                        <th>Size (cm)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Medium (M)</td>
                        <td>26 - 36</td>
                        <td>66 - 91</td>
                      </tr>
                      <tr>
                        <td>Large (L)</td>
                        <td>36 - 46</td>
                        <td>91 - 117</td>
                      </tr>
                      <tr>
                        <td>Extra-Large (XL)</td>
                        <td>50 - 65</td>
                        <td>127 - 165</td>
                      </tr>
                    </tbody>
                  </table>

                </p>
              </div>
            </div>
          </div>

          <div className="product-item" ref={padRef}></div>
        </div>
      </div>

    </>
  )
}