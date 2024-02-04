import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import {  useParams, useNavigate } from 'react-router-dom';
import Farming from './Farming';

const pages = [
  {slug:'farming', pageTitle: 'Farming', element: <Farming/>},
//   {slug: 'commercial-construction', pageTitle: 'Commercial Constr.', element: <CommercialConstruction/>},
//   {slug: 'road-construction', pageTitle: 'Road Constr.', element: <RoadConstruction/>},
//   {slug: 'borehole-drilling', pageTitle: 'Borehole Drilling', element: <BoreholeDrilling/>},
//   {slug: 'erosion-control', pageTitle: 'Erosion Control', element: <ErosionControl/>},
//   {slug: 'consultancy', pageTitle: 'Consultancy', element: <Consultancy/>},
]

const images = [];
const Services = () => {
    const {slug} = useParams();
    const currentPage = pages.find((page)=>page.slug === slug).element
    const navigate = useNavigate();

    return (
      <div className='services page'>
          <div className='banner'>
              <div className="banner-heading">
                  <h1>Services</h1>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb justify-content-center">
                          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                          <li className="breadcrumb-item"><Link to="#">Services</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">{pages.find((page => page.slug === slug)).pageTitle}</li>
                      </ol>
                  </nav>
              </div>
          </div>

          

          <div className="container-fluid">
              <div className="row">
                  <div className='filter col-lg-3'>
                      <h3>Services</h3>
                      <div className="tags">
                        {pages.map(page => (<button key={page.slug} className={`tag ${slug === page.slug ? 'active' : ''}`} onClick={()=> navigate(`/services/${page.slug}`)}>{page.pageTitle}</button> ))}
                      </div>
                  </div>
                  <div className="article col-lg-9">
                    {currentPage}
                  </div>
              </div>
              
          </div>
    </div>
)}




export default Services