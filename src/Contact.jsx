import React from "react";
import { Link } from "react-router-dom";
function Contact() {
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
                <div className="skills-heading contact-section">
                    <h1>Contact Me</h1>
                    <div className="section-line"></div>
                    <p>I'm always open to discussing new opportunites,projects,or ideas.</p>
                    <p>if you like to connect or have any questions ,fell free to reach out using details below.</p>

                </div>
                <div className="contact-container">
                    <div className="contact-box">
                        <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/envelope-fill.svg" alt="email" className="logos-1" />
                        <div className="contact-lines">
                            <div><p><b>Email</b></p></div>
                            <div><p>kadiyaladhanush@gmail.com</p></div>
                        </div>
                    </div>
                    <a href="https://www.google.com/maps/dir/17.5042406,78.395598/F9RQ%2BPGX+Gowthami+boys+hostel,+JNTU+Hyderabad,+Kukatpally+Housing+Board+Colony,+Kukatpally,+Hyderabad,+Telangana+500085/@17.4977911,78.3835169,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bcb91007857c44b:0xda188d0e56b8c4e5!2m2!1d78.3890139!2d17.491718?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D">
                        <div className="contact-box">
                            <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/geo-alt-fill.svg" alt="email" className="logos-1" />
                            <div className="contact-lines">
                                <div><p><b>Location</b></p></div>
                                <div><p>India</p></div>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/kadiyala-dhanush-993389325/">
                        <div className="contact-box">
                            <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/linkedin.svg" alt="email" className="logos-1" />
                            <div className="contact-lines">
                                <div><p><b>Linkedin</b></p></div>
                                <div><p>Kadiyala Dhanush</p></div>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/Kadiyala-Dhanush-Sai">
                        <div className="contact-box">
                            <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/icons/github.svg" alt="email" className="logos-1" />
                            <div className="contact-lines">
                                <div><p><b>GitHub</b></p></div>
                                <div><p>Kadiyala Dhanush Sai</p></div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Contact