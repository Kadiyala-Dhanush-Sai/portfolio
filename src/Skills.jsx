import React from "react";
import { Link } from "react-router-dom";
function Skills() {
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
                    <h1>My Skills</h1>
                    <div className="section-line"></div>
                    <p>What I work with and what I am learning.</p>
                </div>
                <div className="card-container-item  rounded">
                    <div className="card-item rounded">
                        <div className="logo">
                            <img src="https://www.clipartmax.com/png/middle/351-3515666_c-language-global-or-external-variables-with-examples-c-programming-logo.png" alt="logo" className="lan-logo rounded" />
                        </div>
                        <div className="center textincard">
                            <p><b>C-Programming</b></p>
                        </div>
                        <div className="section-line-1 "></div>
                        <div className="center textincard"><p style={{ fontSize: "10px" }}>Problem Solving & Logic Building</p></div>
                    </div>
                    <div className="card-item rounded">
                        <div className="logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkBKGzgKHQA42GTo40DCQUnNVkUWd3FMzFJA&s" alt="logo" className="lan-logo rounded" />
                        </div>
                        <div className="center textincard">
                            <p><b>Python</b></p>
                        </div>
                        <div className="section-line-1 "></div>
                        <div className="center textincard"><p style={{ fontSize: "10px" }}>DSA & Scripting</p></div>
                    </div>
                    <div className="card-item rounded">
                        <div className="logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghdWGl00O5hS7sDlc98yJT_gszgNh1wwUlQ&s" alt="logo" className="lan-logo rounded" />
                        </div>
                        <div className="center textincard">
                            <p><b>JAVA</b></p>
                        </div>
                        <div className="section-line-1 "></div>
                        <div className="center textincard"><p style={{ fontSize: "10px" }}>DSA</p></div>
                    </div>
                    <div className="card-item rounded">
                        <div className="logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oAZFd44aPg3nQPG1fb65XMA6urnZFmekLQ&s" alt="logo" className="lan-logo rounded" />
                        </div>
                        <div className="center textincard">
                            <p><b>HTML</b></p>
                        </div>
                        <div className="section-line-1 "></div>
                        <div className="center textincard"><p style={{ fontSize: "10px" }}>Building Web Pages</p></div>
                    </div>

                    <div className="card-item rounded">
                        <div className="logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjJqX224Y6OaeKYo0kKy3qmRYNvXZ_ctDOg&s" alt="logo" className="lan-logo rounded" />
                        </div>
                        <div className="center textincard">
                            <p><b>CSS</b></p>
                        </div>
                        <div className="section-line-1 "></div>
                        <div className="center textincard"><p style={{ fontSize: "10px" }}>Styling And Responsive Pages</p></div>
                    </div>
                    <div className="card-item rounded">
                        <div className="logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_k76rRKm-cFDctnn4kvO6t2pQCfE_uZG7Lw&s" alt="logo" className="lan-logo" />
                        </div>
                        <div className="center textincard">
                            <p><b>Bootstrap</b></p>
                        </div>
                        <div className="section-line-1 "></div>
                        <div className="center textincard"><p style={{ fontSize: "10px" }}>Front-End Frame Work</p></div>
                    </div>
                    <div className="card-item rounded">
                        <div className="logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ioErrXCaT2yZgsMaefs8irg9dRTWVk882Q&s" alt="logo" className="lan-logo" />
                        </div>
                        <div className="center textincard">
                            <p><b>Scikit learn</b></p>
                        </div>
                        <div className="section-line-1 "></div>
                        <div className="center textincard"><p style={{ fontSize: "10px" }}>Building and evaluating machine learning models</p></div>
                    </div>
                    <div className="card-item rounded">
                        <div className="logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDkSIlrHe6JFTQQrcnMcqTU-5GVY0LTB7ibg&s" alt="logo" className="lan-logo" />
                        </div>
                        <div className="center textincard">
                            <p><b>Numpy</b></p>
                        </div>
                        <div className="section-line-1 "></div>
                        <div class="center textincard"><p style={{ fontSize: "10px" }}>Numerical computing and array-based operations</p></div>
                    </div>
                    <div className="card-item rounded">
                        <div className="logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4u3g-xeYEA_PWWRmHpt8SN7FSjspQZmwNqg&s" alt="logo" className="lan-logo" style={{ marginLeft: "80px" }} />
                        </div>
                        <div className="center textincard">
                            <p><b>Pandas</b></p>
                        </div>
                        <div className="section-line-1 "></div>
                        <div className="center textincard"><p style={{ fontSize: "10px" }}>Data cleaning, manipulation, and analysis</p></div>
                    </div>
                    <div className="card-item rounded">
                        <div className="logo">
                            <img src="https://seaborn.pydata.org/_images/logo-tall-lightbg.svg" alt="logo" className="lan-logo" style={{ marginLeft: "80px" }} />
                        </div>
                        <div className="center textincard">
                            <p><b>Seaborn</b></p>
                        </div>
                        <div className="section-line-1 "></div>
                        <div className="center textincard"><p style={{ fontSize: "10px" }}>Statistical data visualization with attractive plots</p></div>
                    </div>
                    <div className="card-item rounded">
                        <div className="logo">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAj5bv_x9z-7KwKmttLD9p65YK7qK7WZtrQ&s" alt="logo" className="lan-logo" style={{ marginLeft: "52px" }} />
                        </div>
                        <div className="center textincard">
                            <p><b>MatplotLib</b></p>
                        </div>
                        <div className="section-line-1 "></div>
                        <div className="center textincard"><p style={{ fontSize: "10px" }}>Creating static and basic data visualizations</p></div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Skills;