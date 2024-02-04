import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const images = [
    {id:"farming-1", imagePath: require('../imgs/tierra-green-resources-ltd/farming/1.JPG'), tag: 'farming'},
    {id:"farming-2", imagePath: require('../imgs/tierra-green-resources-ltd/farming/2.JPG'), tag: 'farming'},
    {id:"farming-3", imagePath: require('../imgs/tierra-green-resources-ltd/farming/3.JPG'), tag: 'farming'},
    {id:"farming-4", imagePath: require('../imgs/tierra-green-resources-ltd/farming/4.JPG'), tag: 'farming'},
    {id:"farming-5", imagePath: require('../imgs/tierra-green-resources-ltd/farming/5.JPG'), tag: 'farming'},
    {id:"farming-6", imagePath: require('../imgs/tierra-green-resources-ltd/farming/6.JPG'), tag: 'farming'},
    {id:"farming-7", imagePath: require('../imgs/tierra-green-resources-ltd/farming/7.JPG'), tag: 'farming'},
    {id:"farming-8", imagePath: require('../imgs/tierra-green-resources-ltd/farming/8.JPG'), tag: 'farming'},
    {id:"farming-9", imagePath: require('../imgs/tierra-green-resources-ltd/farming/9.JPG'), tag: 'farming'},
    {id:"farming-10", imagePath: require('../imgs/tierra-green-resources-ltd/farming/10.JPG'), tag: 'farming'},
    {id:"real-estate-1", imagePath: require('../imgs/tierra-green-resources-ltd/real-estate/1.jpg'), tag: 'real-estate'},
    {id:"real-estate-2", imagePath: require('../imgs/tierra-green-resources-ltd/real-estate/2.jpg'), tag: 'real-estate'},
    {id:"real-estate-3", imagePath: require('../imgs/tierra-green-resources-ltd/real-estate/3.jpg'), tag: 'real-estate'},
    {id:"real-estate-4", imagePath: require('../imgs/tierra-green-resources-ltd/real-estate/4.jpg'), tag: 'real-estate'},
    {id:"real-estate-5", imagePath: require('../imgs/tierra-green-resources-ltd/real-estate/5.jpg'), tag: 'real-estate'},
    {id:"real-estate-6", imagePath: require('../imgs/tierra-green-resources-ltd/real-estate/6.jpg'), tag: 'real-estate'},
    {id:"real-estate-8", imagePath: require('../imgs/tierra-green-resources-ltd/real-estate/7.jpg'), tag: 'real-estate'},
    {id:"real-estate-9", imagePath: require('../imgs/tierra-green-resources-ltd/real-estate/8.jpg'), tag: 'real-estate'},

    // {id:"commercial-3", imagePath: require('../imgs/commercial/3.jpg'), tag: 'commercial-construction'},
    // {id:"commercial-4", imagePath: require('../imgs/commercial/4.jpg'), tag: 'commercial-construction'},
    // {id:"road-1", imagePath: require('../imgs/road/1.jpg'), tag: 'road-construction'},
    // {id:"road-2", imagePath: require('../imgs/road/2.jpg'), tag: 'road-construction'},
    // {id:"road-3", imagePath: require('../imgs/road/3.jpg'), tag: 'road-construction'},
    // {id:"road-4", imagePath: require('../imgs/road/4.jpg'), tag: 'road'},
    // {id:"c-9", imagePath: require('../imgs/commercial/9.jpg'), tag: 'commercial'},
    // {id:"c-10", imagePath: require('../imgs/commercial/10.jpg'), tag: 'commercial'},
    // {id:"c-11", imagePath: require('../imgs/commercial/11.jpeg'), tag: 'commercial'},
    // {id:"c-12", imagePath: require('../imgs/commercial/12.jpeg'), tag: 'commercial'},
    // {id:"c-13", imagePath: require('../imgs/commercial/13.png'), tag: 'commercial'},
]


const Projects = () => {
    const [tag, setTag] = useState('all');
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(()=> {
        tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
    }, [tag])

    return (
        <div className='projects page'>
            <div className='banner'>
                <div className="banner-heading">
                    <h1>PROJECTS</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item"><Link to="#">Project Gallery</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{tag}</li>
                        </ol>
                    </nav>
                </div>
            </div>

            

            <section className="container-fluid">
                <div className="row">
                    <div className='filter col-lg-2'>
                        <h3>Projects</h3>
                        <div className="tags ">
                            {/* <div className="tags ">
                                {images.map(image => (<TagButton key={image.id} name={image.id} handleSetTag={setTag} tagActive={tag === image.slug ? true : false}/>))}
                            </div> */}
                            <TagButton name="all" tag="all" handleSetTag={setTag} tagActive={tag === "all" ? true : false}/>
                            <TagButton name="farming" tag="farming" handleSetTag={setTag} tagActive={tag === "farming" ? true : false}/>
                            <TagButton name="real estate" tag="real-estate" handleSetTag={setTag} tagActive={tag === "real-estate" ? true : false}/>
                            <TagButton name="consultancy" tag="consultancy" handleSetTag={setTag} tagActive={tag === "consultancy" ? true : false}/>
                        </div>
                    </div>
                    <div className="images col-lg-10">
                        {filteredImages.map(image => (
                            <div className="image-container" key={image.id}>
                                <div className="image-card">
                                    <img src={image.imagePath} alt={image.id}/>
                                    <div className="overlay">
                                        <Link to={`/services/${image.tag}`}><span>Learn More</span></Link>
                                    </div>
                            </div>
                        </div>))}
                    </div>
                </div>
                
            </section>
        </div>
    )
}

const TagButton = ({name, tag, handleSetTag, tagActive}) => {
    return <button className={`tag ${tagActive && 'active'}`} onClick={()=> handleSetTag(tag)}>{name}</button>
}

export default Projects