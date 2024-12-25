// import React from 'react'

const Card = (props) => {
    console.log(props);
    
    return (
        <>
            <div className="card card-dark col-3 m-2 p-2 center">
                <div className="card-body">
                <img src={props.src} className="custom-img pb-3"></img>
                    <h3 className="card-title">{props.heading}</h3>
                    <p className="card-text">{props.bodytet}</p>
                </div>
            </div>
        </>
    )
}

export default Card
