import React from 'react'
import './About.css'

export default function About() {
  return (
      <>
      <section>
      <div className="container about-our-company">
        <h2 className='text-center'>About our Company</h2>
        <p>Favor Forever Ltd is a trusted provider of personal care and hygiene products, dedicated to enhancing the well-being and comfort of individuals. We offer a wide range of high-quality products that cater to diverse personal care needs, ensuring our customers have access to reliable and affordable solutions.
          We take pride in our commitment to quality and sustainability. Our products are carefully crafted using premium materials and advanced technologies to ensure superior performance and reliability. </p>
      </div>

      <div className="container mission">
        <h2 className='text-center'>Mission</h2>
        <p>Our mission is to empower individuals with reliable and affordable personal care products, prioritizing their comfort, confidence and well-being.</p>
      </div>

      <div className="container vision">
        <h2 className='text-center'>Vision</h2>
        <p>We envision a world where personal care is accessible, inclusive, and embraced by all, promoting healthier and more fulfilling lives.</p>
      </div>

      <div className="container core-values">
        <h2 className='text-center'>Core Values</h2>
        <ul>
          <li>Quality Excellence: We prioritize delivering products of the highest quality.</li>
          <li>Customer-Centric Approach: Our customer's needs and satisfaction are our top priority.</li>
          <li>Sustainability and Social Responsibility: We are committed to sustainable practices and community engagement.</li>
        </ul>
      </div>
      </section>
      </>
    )
}
