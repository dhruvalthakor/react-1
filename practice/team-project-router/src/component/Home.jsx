import React from 'react'

function Home() {
    return (
        <>
            <section>
                <div id="carouselExample" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.emavens.com/wp-content/uploads/2012/01/web-design-development-1.jpg" className="d-block w-100 object-fit-cover" height={650} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://media.licdn.com/dms/image/D5612AQGMoXcDQC9cDQ/article-cover_image-shrink_720_1280/0/1668510249345?e=2147483647&v=beta&t=bZ2_m3p_qq3lQOGPhAi6UPB2hbjwkPBdtqmi91oyqIM" className="d-block w-100 object-fit-cover" height={650} alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cube-interactive.com/libe-storage/2022/08/WebsiteMock-Up01copy.jpg" className="d-block w-100 object-fit-cover" height={650} alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>


            {/* project section  */}
            <section className='bg-success-subtle'>
                <div className='container'>
                    <h2 className='text-center py-4 fs-1'>Projects</h2>
                    <div class="row row-cols-1 row-cols-md-3 g-4 pb-5">
                        <div class="col">
                            <div class="card h-100">
                                <img height={230} src="src/assets/photo_2024-08-21_09-51-41.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Red & White Multimedia Education</h5>
                                    <p class="card-text">Techstacks :-HTML, CSS</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img height={230} src="src/assets/photo_2024-08-21_09-53-12.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">YouTube</h5>
                                    <p class="card-text">Techstacks :-HTML, CSS, Bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img height={230} src="src/assets/photo_2024-08-21_09-53-17.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Add To Cart</h5>
                                    <p class="card-text">Techstacks :-HTML, CSS, JavaScript</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img height={230} src="src/assets/photo_2024-08-21_09-53-21.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Number Game</h5>
                                    <p class="card-text">Techstacks :-HTML, CSS ,JavaScript</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img height={230} src="src/assets/photo_2024-08-21_09-52-18.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">To do list</h5>
                                    <p class="card-text">Techstacks :-HTML, CSS, React</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                                <img height={230} src="src/assets/photo_2024-08-21_09-53-30.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">React Web</h5>
                                    <p class="card-text">Techstacks :-HTML, CSS, React</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home