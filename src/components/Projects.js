import React from 'react'
import { Link } from 'react-router-dom'


const Projects = () => {
  return (
    <div className='page missions'>
        <div className='banner'>
            <div className="banner-heading">
                <h1>Missions</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav>
            </div>
        </div>


        <section className="missions container-fluid">

            <div className="row">
                <div className="col-md-6">
                    <img src={require('../imgs/tierra-green-resources-ltd/13.jpg')}/>
                </div>   
                <div className="col-md-6 p-4">
                    <h2 className='heading'>Mission to Igumale, Ado LGA, Benue State</h2>
                    <p className='text-muted'>Sept, 2022</p>

                    <p className='body-text'>
                        We carried out a three-day outreach mission to Igumale community and we provided medical care to the inhabitants and also performed both medical and dental surgeries.
                    </p>
                </div>
                             
            </div>

            <div className="row">
                <div className="col-md-6">
                    <img src={require('../imgs/tierra-green-resources-ltd/32.JPG')}/>
                </div>   
                <div className="col-md-6 p-4">
                    <h2 className='heading'>Mission to Tukuba Village, Kuje Area Council, F.C.T, Abuja.</h2>
                    <p className='text-muted'>March 30, 2019</p>
                    <p className='body-text'>
                        From local communities to international outreach programs, Grace Medical Outreach Intl extends its healing touch to diverse corners of 
                    </p>
                </div>
                             
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={require('../imgs/tierra-green-resources-ltd/41.JPG')}/>
                </div>   
                <div className="col-md-6 p-4">
                    <h2 className='heading'>Mission to Iyala Community, Kogi State.</h2>
                    <p className='text-muted'>March 27, 2021</p>

                    <p className='body-text'>
                        From local communities to international outreach programs, Grace Medical Outreach Intl extends its healing touch to diverse corners of 
                    </p>
                </div>
                             
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={require('../imgs/tierra-green-resources-ltd/6.jpg')}/>
                </div>   
                <div className="col-md-6 p-4">
                    <h2 className='heading'>Mission to Apo, F.C.T, Abuja</h2>
                    <p className='text-muted'>October 23, 2021</p>

                    <p className='body-text'>
                        From local communities to international outreach programs, Grace Medical Outreach Intl extends its healing touch to diverse corners of 
                    </p>
                </div>
                             
            </div>
        </section>
    </div>
  )
}

export default Projects