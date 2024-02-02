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
      
      <section className="welcome">
        <div className="container-fluid">
          <div className="row images-row">
            <div className="col-lg-5">
              <h2>We cater to the evolving needs of our clients.</h2>
            </div>
            <div className="col-lg-7">
              <p>
                Embark on a journey with us where the richness of the earth intertwines seamlessly with the promise of a flourishing future. we stand as a beacon of innovation and commitment in the realms of farming, real estate, and expert consultancy.             
              </p>    
            </div>

          </div>
        </div>
      </section>


      <section className='reputation bg-gray'>
        <div className="container-fluid">
          <div className="row images-row ">
            <div className="col-md-5 col-lg-4 right-column">
                <img className="mb-3" src={require('../imgs/tierra-green-resources-ltd/4.JPG')} alt="" />
                <p>Join us in cultivating a world where the bounty of the land meets the foundation of dreams. Welcome to Terria Green Resources Ltd.</p>
            </div>
            <div className="col-md-7 col-lg-8 left-column">
                <img src={require('../imgs/tierra-green-resources-ltd/13.jpg')} alt="" />
            </div>
          </div>

          <div className="row cards">
              <Link to="./services/farming" className="card reputation-card">
                <div className="card-top">
                  <img src={require("../imgs/tierra-green-resources-ltd/grow.png")} alt="" />
                  <div className='link-img-wrapper'><img className="link-img" src={require("../icons/right-arrow.png")} alt="" /></div>
                </div>
                <h4>Grow with Us</h4>
                <p>
                Experience sustainable farming practices that yield success. Explore our expertise in precision cultivation and livestock management.                </p>
              </Link>

              <Link to="./services/farming" className="card reputation-card">
                <div className="card-top">
                  <img src={require("../imgs/tierra-green-resources-ltd/grow.png")} alt="" />
                  <div className='link-img-wrapper'><img className="link-img" src={require("../icons/right-arrow.png")} alt="" /></div>
                </div>
                <h4>Grow with Us</h4>
                <p>
                Experience sustainable farming practices that yield success. Explore our expertise in precision cultivation and livestock management.                </p>
              </Link>

              <Link to="./services/farming" className="card reputation-card">
                <div className="card-top">
                  <img src={require("../imgs/tierra-green-resources-ltd/grow.png")} alt="" />
                  <div className='link-img-wrapper'><img className="link-img" src={require("../icons/right-arrow.png")} alt="" /></div>
                </div>
                <h4>Grow with Us</h4>
                <p>
                Experience sustainable farming practices that yield success. Explore our expertise in precision cultivation and livestock management.                </p>
              </Link>
            
          </div>
        </div>
      </section>


      <section className="home-about-us">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-xl-6 d-flex justify-content-center">
              <div className="header-image">
                <div className="img-wrapper">
                  <img src={require('../imgs/tierra-green-resources-ltd/21.JPG')} alt="" />

                </div>
                
                <div className="img-wrapper">
                  <img src={require('../imgs/tierra-green-resources-ltd/1.JPG')} alt="" />
                </div>
              </div>
              
            </div>
            <div className="col-xl-6">
              <div className="row mt-4">
                <div className="col-lg-12  content">
                  <h6 className='section-heading' >About Us</h6>
                  <h2 >Our Story Is One Faith</h2>
                  <p>
                    With compassion, and a commitment
                    to serving others. Founded on
                    Christian principles, we strive to be a
                    beacon of hope in the field of
                    healthcare.
                  </p>
                  <div className="row align-items-center mt-3 mb-4">
                    <div className="col-6 col-sm-4">
                      <img src={require("../imgs/tierra-green-resources-ltd/1.JPG")} alt="" />
                    </div>
                    <div className="col-6 col-sm-7">
                      <p className="ps-3">We recognize the
                          profound impact
                          that a gentle touch
                          can have on the
                          healing journey.
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

      <section className="services bg-green">
        <div className="container-fluid">
          <div className="row">
            <h6 className='section-heading'>What we do</h6>
            <h2 >The details of our good cause</h2>
            <div className="cards">
              <div className="card">
                <img className="card-img-top" src={require("../imgs/tierra-green-resources-ltd/10.jpg")} alt="" />
                <div className="card-body">
                  <h3 className='card-title'>Holistic Medical Care</h3>
                  <p className='card-text'>Our medical services go beyond treating physical ailments. We approach healthcare holistically, recognizing the interconnectedness of body, mind, and spirit.</p>
                  <Link className="page-btn-2 card-btn"  to="/join-us">Join us</Link>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={require("../imgs/tierra-green-resources-ltd/41.JPG")} alt="" />
                <div className="card-body">
                  <h3 className='card-title'>Community Outreach Programs</h3>
                  <p className='card-text'>Through various outreach programs, we aim to improve the overall health of our communities, addressing both medical and social determinants of well-being.</p>
                  <Link className="page-btn-2 card-btn"  to="/join-us">Join us</Link>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={require("../imgs/tierra-green-resources-ltd/2.JPG")} alt="" />
                <div className="card-body">
                  <h3 className='card-title'>Spiritual Support and Counseling</h3>
                  <p className='card-text'>We understand the importance of the spiritual aspects of health. Our compassionate chaplains and counselors are ready to provide spiritual support to those in need.</p>
                  <Link className="page-btn-2 card-btn"  to="/join-us">Join us</Link>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>


      <section className='image-slider'>
        <div className="container-fluid">
          <div className="" onMouseEnter={()=>swiperRef.current.swiper.autoplay.stop()} onMouseLeave={()=>swiperRef.current.swiper.autoplay.start()}>
            <Swiper
              ref={swiperRef}
              cssMode={true}
              navigation={true}
              pagination ={{el: ".swiper-custom-pagination", clickable: true}}
              mousewheel={true}
              keyboard={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                
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
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/slider/1.JPG')} /></SwiperSlide>
              {/* <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/slider/2.jpg')} /></SwiperSlide> */}
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/slider/3.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/slider/4.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/slider/5.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/slider/6.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/slider/7.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/slider/8.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/slider/9.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/slider/10.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/slider/11.JPG')} /></SwiperSlide>
              <SwiperSlide><img src={require('../imgs/tierra-green-resources-ltd/slider/12.JPG')} /></SwiperSlide>

            </Swiper>
            <div className="swiper-custom-pagination"></div>
            </div>
        </div>
        

      </section>
    </div>
  )
}

export default Home