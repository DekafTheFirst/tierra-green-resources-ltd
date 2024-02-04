import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='page about-us'>
        <div className='banner'>
            <div className="banner-heading">
                <h1>About Us</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
            </div>
        </div>


        <section className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className='heading'>Our Story</h2>
                    <p className='body-text'>
                        From our humble beginnings, Tierra Green has grown into a prominent player in the agricultural and real estate sectors. Our story is woven with the threads of dedication, hard work, and a deep-rooted belief that the right blend of nature and progress can cultivate a thriving future.
                    </p>
                </div>

                <div className="col-12 col-md-6">
                    <img src={require('../imgs/tierra-green-resources-ltd/4.JPG')}/>
                </div>
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md-6">
                    <h2 className='heading'>Our Mission</h2>
                    <p className='body-text'>
                        To promote sustainable growth, empower clients, and contribute to the development of the agricultural and real estate industries in Nigeria.
                    </p>
                </div>
                <div className="col-12 col-md-6 justify-content-start">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                OUR VISION
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p>To be a leading force in sustainable farming, real estate development, and consultancy services, setting industry benchmarks and fostering a positive impact on the environment and communities.</p>
                            </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                OUR VALUES
                            </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ul>
                                        <li><span>Excellence:</span> We are committed to delivering services of the highest standards, always striving for excellence in every aspect of our operations.</li>
                                        <li><span>Innovation:</span> Embracing innovation is at the core of what we do, ensuring that our solutions meet the evolving needs of our clients and industries.</li>
                                        <li><span>Sustainability:</span> Environmental responsibility is woven into the fabric of our company. We aim to create a lasting impact through sustainable practices in farming and real estate development.</li>
                                        <li><span>Integrity:</span> We conduct our business with integrity, honesty, and transparency, fostering trust with our clients, partners, and stakeholders.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                OUR OBJECTIVES
                            </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <ol>
                                        <li><span>Sustainable Agriculture Practices:</span> Implement and promote environmentally friendly and sustainable farming practices, minimizing ecological impact and fostering long-term soil health.</li>                                        
                                        <li><span>Real Estate Excellence:</span> Develop and deliver high-quality real estate projects that meet the needs and aspirations of our clients, contributing to the growth and aesthetic improvement of communities.</li>                                        
                                        <li><span>Client Empowerment:</span> Empower clients with knowledge and expertise in farming and real estate through personalized consultancy services, ensuring informed decision-making and successful outcomes.</li>                                        
                                        <li><span>Innovation and Research:</span> Foster a culture of innovation and continuous improvement, staying at the forefront of industry trends and adopting cutting-edge technologies in agriculture, real estate, and consultancy.</li>                                        
                                    </ol>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </div>                
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className='heading'>Cultivating Growth in Agriculture</h2>
                    <p className='body-text'>
                        Tierra Green is your trusted partner in cultivating success. Our comprehensive approach to farming not only boosts agricultural outputs but also contributes to the overall well-being of the communities we serve.                    
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={require('../imgs/tierra-green-resources-ltd/9.JPG')}/>
                </div>                
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <h2 className='heading'>Crafting Spaces, Building Dreams in Real Estate</h2>
                    <p className='body-text'>
                        Our real estate ventures are a testament to quality, design, and enduring value. We specialize in developing thoughtfully crafted projects that redefine living and working spaces.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <img src={require('../imgs/tierra-green-resources-ltd/2.JPG')}/>
                </div>                
            </div>

            

            <div className="row">
                <div className="col-12">
                    <h2 className='heading'>Join Us in Cultivating Success</h2>
                    <p className='body-text'>
                        As we continue to grow and evolve, we invite you to join us on this journey of sustainable growth and prosperity. Whether you are a farmer seeking innovative solutions, a homeowner envisioning your dream space, or a business owner navigating complex landscapes, Tierra Green Resources Ltd. is your trusted partner.
                    </p>
                    <p className='body-text mt-3'>
                        <Link className="text-warning" to="/contact">Contact us</Link> to begin a journey where growth meets sustainability, and dreams find a home. Welcome to Tierra Green Resources Ltd.
                    </p>
                </div>
                              
            </div>

            
            <div className="row our-team">
                <div className="col-12">
                    <h6 className='section-heading'>Meet the Visionaries</h6>
                    <h2>Our Team at Tierra Green Resources Ltd.</h2>
                    <div className="wrapper">
                        <div className="cards">
                            <div className="card">
                                <div className="img-wrapper">
                                    <img className="card-img" src={require('../imgs/people/kefas-jibir.png')} alt="board of directors image"/>
                                </div>
                                <div className="card-body">
                                    <div className="content">
                                        <p className='name'>Dr Kefas Jibir, MBBS, FWACP</p>
                                        <span className='role'>Chairman</span>
                                    </div>
                                    
                                    <p></p>
                                </div>
                            </div> 
                            <div className="card">
                                <div className="img-wrapper">
                                    <img className="card-img" src={require('../imgs/people/4.jpg')} alt="board of directors image"/>
                                </div>
                                <div className="card-body">
                                    <div className="content">
                                        <p className='name'>Dr Kefas Jibir, MBBS, FWACP</p>
                                        <span className='role'>Chairman</span>
                                    </div>
                                    
                                    <p></p>
                                </div>
                            </div> 
                            <div className="card">
                                <div className="img-wrapper">
                                    <img className="card-img" src={require('../imgs/people/kefas-jibir.png')} alt="board of directors image"/>
                                </div>
                                <div className="card-body">
                                    <div className="content">
                                        <p className='name'>Dr Kefas Jibir, MBBS, FWACP</p>
                                        <span className='role'>Chairman</span>
                                    </div>
                                    
                                    <p></p>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                
                
            </div>

        </section>
    </div>
  )
}

export default AboutUs