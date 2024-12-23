// import React from 'react'

const BlogCard = ({blogHeading}) => {
    return (
        <>
            <div className="card card-gray col-4 m-3">
                <div className="row g-0">
                    <div className="col-4">
                        <img src="./src/components/image/Rectangle 11.png" className="img-fluid rounded w-100"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{blogHeading}</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consecte adipiscing elit. Proin tristique elit nec. lorem ipsum </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard
