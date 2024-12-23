// import React from 'react'
// import "src/components/Navbar.jsx"

const Navbar = () => {
    return (
        <>
        <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"><button type="button"
                                    className="btn btn-light custom-btn-padding">HOME</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><button type="button"
                                    className="btn btn-light custom-btn-padding"><img
                                        src="src/components/image/profile-icon-design-free-vector-removebg-preview.png"
                                        alt=""></img>ABOUT</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><button type="button"
                                    className="btn btn-light custom-btn-padding"><img
                                        src="src/components/image/232105-removebg-preview.png" alt=""></img>PORTOFOLIO</button></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><button type="button"
                                    className="btn btn-light custom-btn-padding"><img
                                        src="src/components/image/images-removebg-preview.png" alt=""></img>CONTACT</button></a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <button className="btn btn-light btn-hover-danger" type="submit"><img src="src/components/image/search icon.png"
                                alt=""></img></button>
                    </form>
                </div>
            </div>
        </nav>
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-item active">
                <img src="https://www.w3schools.com/w3images/parallax1.jpg" className="d-block custom"></img>
                <div className="carousel-caption d-none d-md-block">
                    <h2>MY WEBSITE LOGO</h2>
                </div>
            </div>
        </div>
        </header>
        </>
    )
}

export default Navbar
