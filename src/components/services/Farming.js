import React from 'react'
import { Link } from 'react-router-dom';

const Farming = () => {
  return (
    <div className='service-details'>
      <h2 className='title'>Farming Services</h2>
      <img src={require('../../imgs/tierra-green-resources-ltd/farming/1.JPG')}/>
      <p className='body-text'>At Tierra Green Resources Ltd., our farming services are rooted in a commitment to sustainable practices, innovation, and the pursuit of agricultural excellence. Whether you are a seasoned farmer or a newcomer to the field, our comprehensive suite of services is designed to meet your needs and contribute to the success of your agricultural ventures.</p>
      
      <div className="details">
        <span className='subheading'>Precision Cultivation:</span>
        <p className='body-text'>
        Experience the next level of farming with our precision cultivation techniques. We leverage cutting-edge technologies and data-driven approaches to optimize crop yields, minimize resource usage, and enhance overall efficiency. From soil analysis to crop monitoring, we ensure that every aspect of your cultivation process is finely tuned for success.        </p>
        
        <img src={require('../../imgs/tierra-green-resources-ltd/farming/1.JPG')}/>

        <span className='subheading'>Livestock Management:</span>
        <p className='body-text'>
          Our expertise in livestock management extends to all aspects of animal husbandry. From selecting and breeding to nutrition planning and health monitoring, we prioritize the well-being of your livestock. Whether you're involved in meat or dairy production, our services are tailored to ensure the health, productivity, and sustainability of your livestock operations.        
        </p>

        <span className='subheading'>Agro-Consultancy Services:</span>
        <p className='body-text'>
          Navigate the complexities of modern agriculture with our expert agro-consultancy services. Our seasoned consultants bring years of experience and a deep understanding of the agricultural landscape to the table. Whether you need guidance on crop selection, market trends, or sustainable farming practices, we provide insights that empower you to make informed decisions and drive success in your farming endeavors.        
        </p>

        <span className='subheading'>Sustainable Farming Practices:</span>
        <p className='body-text'>
          Tierra Green Resources Ltd. is committed to environmentally responsible farming. We prioritize sustainable practices that not only enhance productivity but also contribute to the long-term health of the land. From organic farming techniques to eco-friendly pest control, we strive to minimize our ecological footprint while maximizing the benefits for farmers and the environment.        
        </p>

        
      </div>
      

      <img src={require('../../imgs/tierra-green-resources-ltd/farming/1.JPG')}/>

      <div className="contact">
        <p className='body-text'>
          Join us in cultivating a future where agriculture thrives in harmony with nature. <Link to='/contact' className='in-text-link'>Contact Us</Link> and embark on a journey of innovation, sustainability, and agricultural success with Tierra Green Resources Ltd.
        </p>
      </div>
    </div>
  )
}

export default Farming