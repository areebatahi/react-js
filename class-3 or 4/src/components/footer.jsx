// import React from 'react'

const Footer = () => {
    return (
        <div className="bg-gray">
            <div className="container p-3 footer">
                <h1 className="center">Contact</h1>
                <div className="row d-flex">
                    <div className="col-5">
                        <h5>Send Me Message</h5>
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">Email :</label>
                                <input type="email" className="form-control" id="inputEmail4"></input>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">Password :</label>
                                <input type="password" className="form-control" id="inputPassword4"></input>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">Message :</label>
                                <input type="textarea" className="form-control" id="inputAddress" placeholder="Message"></input>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-light btn-outline-dark">Sign in</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-3">
                        <h5>Social Media</h5>
                        <div className="row pt-2">
                            <img src="./src/components/image/akar-icons_whatsapp-fill.png" className="footerImg"></img>
                            089522231231
                        </div>
                        <div className="row pt-2">
                            <img src="./src/components/image/akar-icons_instagram-fill.png" className="footerImg"></img>
                            satriawan.ridho
                        </div>
                        <div className="row pt-2">
                            <img src="./src/components/image/akar-icons_facebook-fill.png" className="footerImg"></img>
                            Ridho Satriawan
                        </div>
                        <div className="row pt-2">
                            <img src="./src/components/image/akar-icons_linkedin-box-fill.png" className="footerImg"></img>
                            Ridho Satriawan
                        </div>
                        <div className="row pt-2">
                            <img src="./src/components/image/akar-icons_github-fill.png" className="footerImg"></img>
                            ridhosatriawan
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
// ./src/components/image/akar-icons_whatsapp-fill.png
export default Footer
