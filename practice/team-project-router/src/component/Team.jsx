import React from 'react'
import "../App.css"

function Team() {
    return (
        <>
            <div className='container row gap-4 m-auto justify-content-center mt-5'>
                <h1 className='text-center m-0'>PROFILE</h1>
                <div class="col-5 card mb-3 p-0" style={{ maxwidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="src/assets/photo_2024-08-21_09-53-35.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">Shreaydeepsinh Vaghela</h3>
                                <h5 class="card-text">Full-Stack Devloper</h5>
                                <h6 class="card-text text-body-secondary">Skills : Html, CSS, Bootstrap, JavaScript, ReactJS</h6>
                                <p class="card-text">Education : Post-graduate, M.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-5 card mb-3 p-0" style={{ maxwidth: "540px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="src/assets/photo_2024-08-21_09-53-43.jpg" class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">Dhruval Thakor</h3>
                                <h5 class="card-text">Full-Stack Devloper & designer</h5>
                                <h6 class="card-text text-body-secondary">Skills : Html, CSS, Bootstrap, JavaScript, ReactJS, Figma</h6>
                                <p class="card-text">Education : Graduate, BCA</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='py-5'>
                <h1 className='text-center py-3'>TESTIMONIALS</h1>
                <div class="parent">
                    <div class="image"><img src="https://s3-media0.fl.yelpcdn.com/bphoto/Px7t4e-3yTM_WiPLOCGrtw/258s.jpg"
                        alt="" /></div>
                    <div class="child">
                        <h2>Pujarini Jena</h2>
                        <h3>Software Engineer-cars24</h3>
                        <p>"Working with Team-S&D was a game-changer for our business. They took our outdated website and transformed it into a sleek, modern platform that our customers love. Highly recommended!"
                        </p>
                    </div>
                    <div class="image"><img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTACfLaNW-EBVDykuYsoeaBE-PSoHHCriU5klZJJINqVqw3tl_A9P3VXcghPcGy2ZTVadA&usqp=CAU"
                        alt="" /></div>
                    <div class="child">
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