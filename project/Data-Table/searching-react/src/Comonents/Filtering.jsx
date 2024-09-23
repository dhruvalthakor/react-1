import React, { useEffect, useState } from 'react';

function Filtering() {
    const [filter, setFilter] = useState('');
    const [Data, setData] = useState("")

    const [user, setUser] = useState([]);

    useEffect(() => {
        async function dataHandling() {
            try {
                let fetchs = await fetch(`https://fakestoreapi.com/products`);
                let data = await fetchs.json();
                setUser(data);
                console.log(data);


            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }
        dataHandling();
    }, []);

    let filteredData = user
        .filter(({ category }) => {
            return filter?category === filter:user;

        })
        .filter(({ title }) => {
            return title.indexOf(Data) >= 0;
        })
        .map((product) => (
            <div
                className="card"
                style={{
                    width: "400px",
                    height: "auto",
                   
                    border: "3px solid #34495e",
                }}
                key={product.id}
            >
                <div className="row g-0 justify-content-center align-items-center px-3 py-3 w-100">
                    <div className="col-md-4 w-25">
                        <img
                            src={product.image}
                            className="card-img-top object-fit-contain w-100 h-50"
                            alt={product.title}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.title.slice(0, 40)}</h5>
                            <p className="card-text">{product.description.slice(0, 75)}</p>
                            <a
                                href="#"
                                className="btn w-100 d-flex justify-content-center align-items-center"
                                style={{
                                    backgroundColor: "#e67e22",
                                    color: "#2c3e50",
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-currency-rupee"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
                                </svg>
                                {product.price}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        ));

    return (
        <>
            <div className="text-center  p-3 d-flex  justify-content-center gap-5 align-items-center">

                {/* Filtering */}
                <div>
                    <select className="form-select" aria-label="Category select" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="">All Categories</option>
                        <option value="men's clothing">Men's Clothing</option>
                        <option value="women's clothing">Women's Clothing</option>
                        <option value="jewelery">Jewelry</option>
                        <option value="electronics">Electronics</option>
                    </select>
                </div>
                <div className="input-group  w-50">
                    <span className="input-group-text" id="basic-addon1">userInput</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={Data} onChange={(e) => setData(e.target.value)} />
                </div>
            </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center mt-3 gap-3">
                    {filteredData}
                </div>
        </>
    );
}

export default Filtering;
