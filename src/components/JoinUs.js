import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';

const JoinUs = () => {

    const navigate = useNavigate()
    const showToastMessage = () => {
        toast.success("Sent Successfully !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        console.log("toast")
      };

    const form = useRef();
    const sendEmail = async (e) => {
        e.preventDefault();
  
        const send = await emailjs.sendForm('service_52kwkmi', 'template_ehat94j', form.current, 'VONmTEDog8CxIxNc5')
        .then(() => showToastMessage()
        ).catch((error)=>{
            console.log("error" + error)
        })

        navigate(-1);
    };

    


    return (
    <div className="join-us contact-page">
        <div className='banner'>
            <div className="banner-heading">
                <h1>JOIN US</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">JoinUs</li>
                    </ol>
                </nav>
            </div>
        </div>
        <ToastContainer />
        <div className="container">
            <div className="contact-content">
                <h2>Are you interested in joining us?</h2>
                <p>Please fill this form and we will reach out to you with more info on how you can become a part of the Grace Medial Outreach Intl Family. Thank you</p>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form row">
                        <input type="text" name="user_name" id="" placeholder="Your Name" />
                        <input type="email" name="user_email" id="" placeholder="Email" />
                        <select name="service" id="">
                            <option value="An Unknown Reason">Reason For Contacting*</option>
                            <option value="Construction">Construction</option>
                            <option value="Consultation">Consultation</option>
                            <option value="Building Materials">Building Materials</option>
                            <option value="Immigration Services">Immigration Services</option>
                        </select>
                        <input type="tel" name="phone_number" id="" placeholder="Phone" />
                    </div>
                    <div className='row'>
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Write in details...."></textarea>
                        <p>* indicates a required field.</p>
                    </div>
                    <button type="submit" value="Send" className="page-btn">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default JoinUs