import React from 'react';

function Home() {
    return (
        <>
            {/* Carousel Section */}
            <section className="mb-5">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://www.emavens.com/wp-content/uploads/2012/01/web-design-development-1.jpg" className="d-block w-100 object-fit-cover" height={650} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Web Design & Development</h5>
                                <p>Creating engaging and interactive web experiences.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://media.licdn.com/dms/image/D5612AQGMoXcDQC9cDQ/article-cover_image-shrink_720_1280/0/1668510249345?e=2147483647&v=beta&t=bZ2_m3p_qq3lQOGPhAi6UPB2hbjwkPBdtqmi91oyqIM" className="d-block w-100 object-fit-cover" height={650} alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Innovative Solutions</h5>
                                <p>Delivering technology solutions that make a difference.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://cube-interactive.com/libe-storage/2022/08/WebsiteMock-Up01copy.jpg" className="d-block w-100 object-fit-cover" height={650} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Creative Design</h5>
                                <p>Bringing your ideas to life with modern design techniques.</p>
                            </div>
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

            {/* Projects Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center py-4 fs-1">Projects</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4 pb-5">
                        {[
                            {
                                title: 'Red & White Multimedia Education',
                                tech: 'HTML, CSS',
                                img: 'src/assets/photo_2024-08-21_09-51-41.jpg'
                            },
                            {
                                title: 'YouTube',
                                tech: 'HTML, CSS, Bootstrap',
                                img: 'src/assets/photo_2024-08-21_09-53-12.jpg'
                            },
                            {
                                title: 'Add To Cart',
                                tech: 'HTML, CSS, JavaScript',
                                img: 'src/assets/photo_2024-08-21_09-53-17.jpg'
                            },
                            {
                                title: 'Number Game',
                                tech: 'HTML, CSS, JavaScript',
                                img: 'src/assets/photo_2024-08-21_09-53-21.jpg'
                            },
                            {
                                title: 'To do list',
                                tech: 'HTML, CSS, React',
                                img: 'src/assets/photo_2024-08-21_09-52-18.jpg'
                            },
                            {
                                title: 'React Web',
                                tech: 'HTML, CSS, React',
                                img: 'src/assets/photo_2024-08-21_09-53-30.jpg'
                            }
                        ].map((project, index) => (
                            <div className="col" key={index}>
                                <div className="card h-100 shadow-sm">
                                    <img height={230} src={project.img} className="card-img-top" alt={project.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text">Tech Stacks: {project.tech}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
