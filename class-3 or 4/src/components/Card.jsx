// import React from 'react'

const Card = ({src , heading ,bodytet}) => {
    return (
        <>
            <div className="card card-dark col-3 m-2 p-2 center">
                <div className="card-body">
                <img src={src} className="custom-img pb-3"></img>
                    <h3 className="card-title">{heading}</h3>
                    <p className="card-text">{bodytet}</p>
                </div>
            </div>
        </>
    )
}

export default Card
