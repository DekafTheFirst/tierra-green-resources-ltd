import React from 'react'
import { Link } from 'react-router-dom'

const Donate = () => {
  return (
    <div className='donate'>
        <div className='banner'>
            <div className="banner-heading">
                <h1>Donate</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Donate</li>
                    </ol>
                </nav>
            </div>
        </div>
        <section className="container-fluid">
            <div>Sorry, donation page is still being developed.</div>
        </section>

    </div>
  )
}

export default Donate