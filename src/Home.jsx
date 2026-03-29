import React from "react";
import './styles.css';
import './utility.css';
import profilePhoto from './assets/profile-photo.jpg';
<img src={profilePhoto} alt="profile" />
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
function HomePage() {

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link to='/home' ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLfOHEx9zkYuxn207V9-NiRvuUaRifMytrQ&s"
                                                        className="nav-image" /></Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav ms-auto">
                                <Link className="nav-link nav-home-text" to="/home">Home</Link>
                                <Link className="nav-link nav-home-text" to="/about">About</Link>
                                <Link className="nav-link nav-home-text" to="/skills">Skills</Link>
                                <Link className="nav-link nav-home-text" to="/contact">Contact</Link>
                                
                            </div>
                        </div>
                    </div>
                </nav>


                <div className="container body-section">
                    <div className="row align-items-center">


                        <div className="left-box col-12 col-md-6 text-center">
                            <h1>Kadiyala <span className="highlight">Dhanush Sai</span></h1>

                            <p>
                                I am a passionate and motivated coding enthusiast with strong interest in
                                software development and problem-solving. I have a solid foundation in
                                JAVA programming and Python and I am actively improving my skills in
                                Data Structures and Algorithms and Machine Learning and Web Devlopment.
                            </p>

                            <div className="social-icons">
                                <strong className="lng">You can check My profile Here --</strong>
                                <a href="https://www.linkedin.com/in/kadiyala-dhanush-993389325/" target="_blank">
                                    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="media-logos" />
                                </a>
                               <div>
                                 <strong className="lng">You can find my projects Here --</strong>
                                <a href="https://github.com/Kadiyala-Dhanush-Sai" target="_blank">
                                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="media-logos invert" />
                                </a>
                               </div>
                            </div>
                        </div>


                        <div className="right-box col-12 col-md-6 text-center">
                            <img src={profilePhoto} alt="profile" className="right-box-image" />
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}
export default HomePage;
