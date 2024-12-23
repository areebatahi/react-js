// import React from 'react'
// import "src/components/Navbar.jsx"

const Navbar = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src="./src/components/image/logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img></a>
                        <div className="d-flex" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="container-fluid">
                <div className="row bg-gray p-5">
                    <div className="col p-5">
                        <h1 className="heading">Hello <br />
                            I’m Ridho</h1>
                        <p className="color-gray" >Freelancer Web Developer</p>
                        <button type="button" className="btn btn-dark">Hire Me</button>
                    </div>
                    <div className="col">
                        <img src="./src/components/image/image-banner-800 1.png" className="h-75" />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 p-5">
                        <h1 className="heading">About <br />
                            Me</h1>
                    </div>
                    <div className="col p-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec malesuada tincidunt. Pellentesque lobortis metus quis ipsum mattis, vitae laoreet est posuere. Mauris bibendum eros massa, sit amet tempor sem lobortis non. </p>
                        <button type="button" className="btn btn-dark">Hire Me</button>
                        <button type="button" className="btn btn-outline-dark ms-3">View CV</button>
                    </div>
                </div>
            </div>
            <div className="container-flui">
                <div className="row bg-gray pt-5 center">
                    <h1 className="heading">Services</h1>
                    <p className="color-gray" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique elit nec malesuada tincidunt. Pellentesque lobortis.</p>
                </div>
            </div>
        </>
    )
}

export default Navbar
