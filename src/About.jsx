import React from "react";
import { Link } from "react-router-dom";
function About() {
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
                <div className="skills-heading">
                    <h1>About Me</h1>
                    <div className="section-line"></div>
                    <p>Passionate Software and Machine Learning Developer.</p>
                </div>
                <div className="about-container body-section">
                    <div className="row align-items-center">
                        <div className="left-box-about col-12 col-md-5 ">
                            <img src="profile photo.jpg" alt="Profile" className="right-box-image-1" />
                        </div>
                        <div className="right-box-about col-12 col-md-7 ">
                            <h1 style={{ color: "white", fontFamily: "Inter" }}>I'm <span
                                className="highlight">Dhanush </span></h1>
                            <div style={{ color: "white", fontFamily: "Inter" }}>
                                <p>I'm a software developer and machine learning enthusiast in my early twenties, pursuing a degree in
                                    Computer Science. I enjoy turning complex problems into simple, elegant solutions and I'm always eager to
                                    learn new things and take on new challenges.
                                </p>
                                <p>My expertise lies in Python and I'm experienced with libraries like NumPy, Pandas, Matplotlib, Seaborn, and
                                    Scikit-learn for building data-driven applications.
                                </p>
                                <p>I'm passionate about problem-solving, data analysis, and building machine learning models.
                                </p>
                                <p>
                                    
                                I'm Very curious to build new thing that actually work
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="about-info-card" style={{ width: "263px" }}>
                        <div className="logo-about"><img src="https://www.svgrepo.com/show/532539/location-pin.svg" alt="Location"
                            className="logos invert" style={{ marginTop: "10px" }} />
                        </div>
                        <div className="name-panels" style={{ marginLeft: "3px" }}>
                            <div className="about-info-title">Location</div>
                            <div className="section-line-1"></div>
                            <div className="about-info-value">India</div>
                        </div>
                    </div>

                    <div className="about-info-card">
                        <div className="logo-about"><img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/mortarboard-fill.svg"
                            alt="Degree" className="logos" />
                        </div>
                        <div className="name-panels">
                            <div className="about-info-title">Degree</div>
                            <div className="section-line-1"></div>
                            <div className="about-info-value">B.Tech in Computer Science</div>
                        </div>
                    </div>

                    <div className="about-info-card">
                        <div className="logo-about">
                            <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/bullseye.svg" alt="Focus" className="logos" />

                        </div>
                        <div className="name-panels">
                            <div className="about-info-title">Focus</div>
                            <div className="section-line-1"></div>
                            <div className="about-info-value">Software & Machine Learning</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default About