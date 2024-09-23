import React from 'react'
import "../App.css"

function Team() {
    return (
        <>
            <div className='container row gap-4 m-auto justify-content-center mt-5'>
                <h1 className='text-center m-0'>PROFILE</h1>
                <div className="col-5 card mb-3 p-0" style={{ maxwidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="src/assets/photo_2024-08-21_09-53-35.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">Shreaydeepsinh Vaghela</h3>
                                <h5 className="card-text">Full-Stack Devloper</h5>
                                <h6 className="card-text text-body-secondary">Skills : Html, CSS, Bootstrap, JavaScript, ReactJS</h6>
                                <p className="card-text">Education : Post-graduate, M.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-5 card mb-3 p-0" style={{ maxwidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="src/assets/photo_2024-08-21_09-53-43.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">Dhruval Thakor</h3>
                                <h5 className="card-text">Full-Stack Devloper & designer</h5>
                                <h6 className="card-text text-body-secondary">Skills : Html, CSS, Bootstrap, JavaScript, ReactJS, Figma</h6>
                                <p className="card-text">Education : Graduate, BCA</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='py-5'>
                <h1 className='text-center py-3'>TESTIMONIALS</h1>
                <div className="parent">
                    <div className="image"><img src="https://s3-media0.fl.yelpcdn.com/bphoto/Px7t4e-3yTM_WiPLOCGrtw/258s.jpg"
                        alt="" /></div>
                    <div className="child">
                        <h2>Pujarini Jena</h2>
                        <h3>Software Engineer-cars24</h3>
                        <p>"Working with Team-S&D was a game-changer for our business. They took our outdated website and transformed it into a sleek, modern platform that our customers love. Highly recommended!"
                        </p>
                    </div>
                    <div className="image"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTACfLaNW-EBVDykuYsoeaBE-PSoHHCriU5klZJJINqVqw3tl_A9P3VXcghPcGy2ZTVadA&usqp=CAU"
                        alt="" /></div>
                    <div className="child">
                        <h2>Ajey Pathak</h2>
                        <h3>Software Engineer-Naehas Inc</h3>
                        <p>"Our website had been struggling with performance issues, and we knew it needed a complete overhaul. Team-S&D came in and fixed everything. We've seen a significant increase in traffic and engagement since the launch."</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team