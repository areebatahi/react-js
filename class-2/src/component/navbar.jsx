import React from 'react'
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand bg-dark fixed-top">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#carouselExampleSlidesOnly">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#band">Brand</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#tour">Tour</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    More
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Merchandise</a></li>
                                    <li><a className="dropdown-item" href="#">Extras</a></li>
                                    <li><a className="dropdown-item" href="#">Media</a></li>
                                </ul>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-dark hover"><img src="download-removebg-preview.png" alt="image"
                            width="25px"></img></button>
                    </div>
                </div>
            </nav >

        </>
    )
}

export default Navbar