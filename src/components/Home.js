import React, { useRef } from 'react'
import Contact from './Contact'
import { Link } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide,  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Home = () => {
  const swiperRef = useRef(null);

  return (
    <div className='home'>
      <section className="hero">
        <div className="hero-wrapper">
          <div className="overlay-dark"></div>
          <div className="overlay-light"></div>
          <div className="hero-content">
            <div className="content-wrapper">
            <h4>Tierra Green Resources</h4>
            <span>Harvesting Growth, Nurturing Spaces for a Sustainable Future</span>
          </div>
        </div>
          
        </div>
          
      </section>
      
      <section className="home-about-us">
        <div className="container-fluid">
          <div className="row ">
            
            

            <div className="col-xl-6 d-flex justify-content-center">
              <div className="header-image">
                  <img src={require('../imgs/tierra-green-resources-ltd/farming/1.JPG')} alt="" />
              </div>
            </div>

            <div className="col-xl-6">
              <div className="row">
                <div className="col-lg-12 content">
                  <h6 className='section-heading' >About Us</h6>
                  <h2> Welcome to Tierra Green Resources Ltd.</h2>
                  <p>
                   Established in 2013, we are a beacon of excellence in farming, real estate, and expert consultancy services, harmonizing nature and progress for a brighter future.
                  </p>
                  <div className="row align-items-center mt-3 mb-4">
                    <div className="col-6 col-sm-4">
                      <img src={require("../imgs/tierra-green-resources-ltd/farming/1.JPG")} alt="" />
                    </div>
                    <div className="col-6 col-sm-7">
                      <p className="ps-3">We cultivate more than just crops; we nurture sustainable growth and build enduring spaces.
                      </p>
                    </div>
                  </div>
                  <Link to="/about-us" className='page-btn-2'>Learn More</Link>
                </div>
              
              </div>
            </div>
          </div>
          
          
        </div>
      </section>

      {/* <section className='reputation bg-gray'>
        <div className="container-fluid">
          <div className="row images-row ">
            <div className="col-md-5 col-lg-4 right-column">
                <img className="mb-3" src={require('../imgs/tierra-green-resources-ltd/farming/4.JPG')} alt="" />
                <p>Join us in cultivating a world where the bounty of the land meets the foundation of dreams. Welcome to Tierra Green Resources Ltd.</p>
            </div>
            <div className="col-md-7 col-lg-8 left-column">
                <img src={require('../imgs/tierra-green-resources-ltd/farming/3.JPG')} alt="" />
            </div>
          </div>
        </div>
      </section> */}
      
      <section className='services-home bg-gray'>
        <div className="container-fluid">
          <h2>Services</h2>
          <div className="row cards">
              <Link to="./services/farming" className="card reputation-card">
                <div className="card-top">
                  <img src={require("../imgs/tierra-green-resources-ltd/grow.png")} alt="" />
                  <div className='link-img-wrapper'><img className="link-img" src={require("../icons/right-arrow.png")} alt="" /></div>
                </div>
                <h5>Farming</h5>
                <p>
                Experience sustainable farming practices that yield success. Explore our expertise in precision cultivation and livestock management.                </p>
              </Link>

              <Link to="./services/real-estate" className="card reputation-card">
                <div className="card-top">
                  <img src={require("../imgs/tierra-green-resources-ltd/real-estate.png")} alt="" />
                  <div className='link-img-wrapper'><img className="link-img" src={require("../icons/right-arrow.png")} alt="" /></div>
                </div>
                <h5>Real Estate</h5>
                <p>
                Discover enduring value in our thoughtfully crafted real estate projects. Your dream space awaits.</p>              </Link>

              <Link to="./services/consultancy" className="card reputation-card">
                <div className="card-top">
                  <img src={require("../imgs/tierra-green-resources-ltd/consultation.png")} alt="" />
                  <div className='link-img-wrapper'><img className="link-img" src={require("../icons/right-arrow.png")} alt="" /></div>
                </div>
                <h5>Consultancy</h5>
                <p>
                Navigate with confidence. Our experts offer strategic insights for success in agriculture and real estate.
                </p>
              </Link>
            
          </div>
        </div>
      </section>


      


      <section className='image-slider'>
        <div className="container-fluid">
          <h2>Gallery</h2>

          <div className="" onMouseEnter={()=>swiperRef.current.swiper.autoplay.stop()} onMouseLeave={()=>swiperRef.current.swiper.autoplay.start()}>
            <Swiper
              ref={swiperRef}
              cssMode={true}
              navigation={true}
              pagination ={{el: ".swiper-custom-pagination", clickable: true}}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: true,
                
              }}
              breakpoints={{
                // when window width is >= 640px
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}

              modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
              className="mySwiper"
            >
              {/* <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/farming/slider/2.jpg')} /></SwiperSlide> */}
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/farming/5.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/farming/15.jpg')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/farming/14.jpg')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/real-estate/7.jpg')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/real-estate/6.jpg')} /></SwiperSlide>

              <SwiperSlide className='ps-5'><p><Link to='/projects'>Click here</Link>  to view more</p></SwiperSlide>

            </Swiper>
            <div className="swiper-custom-pagination"></div>
            </div>
        </div>
        

      </section>
    </div>
  )
}

export default Home