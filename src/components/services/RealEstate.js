import React from 'react'
import { Link } from 'react-router-dom';

const RealEstate = () => {
  return (
    <div className='service-details'>
      <h2 className='title'>Tierra Green Real Estate: Crafting Spaces, Building Dreams</h2>
      <img src={require('../../imgs/tierra-green-resources-ltd/farming/1.JPG')}/>
      <p className='body-text'>Welcome to Tierra Green Resources Ltd.'s Real Estate division, where we redefine living and working spaces, creating environments that stand as a testament to quality, design, and enduring value. With a focus on innovation and a commitment to excellence, our real estate projects are meticulously crafted to meet the diverse needs and aspirations of our clients.</p>
      
      <div className="details">
        <span className='subheading'>Residential Developments:</span>
        <p className='body-text'>
          Discover your dream home within our thoughtfully designed residential developments. Each project is an embodiment of comfort, style, and functionality. From cozy apartments to spacious family homes, Tierra Green ensures a range of living spaces that cater to various preferences and lifestyles.
        </p>

        <img src={require('../../imgs/tierra-green-resources-ltd/farming/1.JPG')}/>


        <span className='subheading'>Commercial Spaces:</span>
        <p className='body-text'>
          Tierra Green's commercial real estate ventures are crafted for success. Whether you are establishing a new business, expanding, or relocating, our commercial spaces are designed to inspire productivity and growth. From modern office complexes to retail spaces, we offer versatile solutions to meet the evolving needs of the business landscape.
        </p>

        <span className='subheading'>Investment Opportunities:</span>
        <p className='body-text'>
          Explore lucrative investment opportunities with Tierra Green Resources Ltd. Our real estate projects are not just about spaces; they are about enduring value. Join us in building a portfolio that not only provides financial returns but also contributes to the growth of communities and cities.
        </p>

        <span className='subheading'>Our Approach:</span>
        <p className='body-text'>
          At Tierra Green, we believe in creating more than structures; we build legacies. Our real estate projects integrate sustainable design practices, incorporating energy-efficient technologies and eco-conscious features. We strive to enhance the aesthetic appeal of communities while minimizing environmental impact.        
        </p>

        <span className='subheading'>Quality Assurance:</span>
        <p className='body-text'>
          Tierra Green Resources Ltd. is synonymous with quality. Our real estate developments undergo rigorous quality assurance processes to ensure that every space we create meets the highest standards. From the selection of materials to the finishing touches, we pay meticulous attention to detail.
        </p>
      </div>
      
      <img src={require('../../imgs/tierra-green-resources-ltd/farming/1.JPG')}/>

      <div className="contact">
        <h3 className='heading'>Explore Tierra Green Real Estate:</h3>
        <p className='body-text'>
          Whether you are in search of a new home, considering an investment, or envisioning a thriving business space, Tierra Green Real Estate has something for everyone. Explore our <Link to="/projects" className='in-text-link'>Projects</Link> visualize your dreams taking shape, and join us in crafting spaces that stand the test of time.
        </p>
      </div>
    </div>
  )
}

export default RealEstate