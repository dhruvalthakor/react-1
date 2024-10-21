import React from 'react';
import './cart.css';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deletehender, incrementQuantity, decrementQuantity } from '../features/cart/cartSlice';

function Cart() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.addcart.items);

    // Calculate total cart amount
    const totalAmount = products.reduce((acc, product) => acc + product.price.amount * product.quantity, 0);

    return (
        <>
            <div className="container-fluid p-2 px-5 d-flex justify-content-between" style={{ backgroundColor: "rgb(255,240,229)" }}>
                <div><h4>Cart</h4></div>
                <div className="d-flex gap-2 align-items-center">
                    <NavLink to={"/"} className="navitem text-decoration-none text-black"><i className="fa-solid fa-house" style={{color:"black"}}></i> Home</NavLink>
                    <i className="fa-solid fa-angle-right"></i>
                    <Link to={"/cart"} className="text-decoration-none text-danger">Cart</Link>
                </div>
            </div>
            <div className="container-fluid mt-5 mb-5">
                <div className="row">
                    {/* Cart Items Section */}
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr className="text-center">
                                    <th>Delete</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id}>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => dispatch(deletehender(product.id))}>Remove</button>
                                        </td>
                                        <td>
                                            <div className="media mb-4">
                                                <img src={product.image} alt="product" className="img-thumbnail mr-3" style={{ width: "60px" }} />
                                                <div className="media-body">
                                                    <h5>{product.name}</h5>
                                                    <div className="ratings">
                                                        <span className="text-warning">
                                                            {"★".repeat(Math.round(product.rating)) + "☆".repeat(5 - Math.round(product.rating))}
                                                        </span>
                                                        <span className="review-count">({product.reviews} reviews)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>₹{product.price.amount}</td>
                                        <td>
                                            <div className="input-group">
                                                <button className="btn btn-outline-secondary" onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
                                                <input type="text" value={product.quantity} className="form-control text-center" readOnly />
                                                <button className="btn btn-outline-secondary" onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
                                            </div>
                                        </td>
                                        <td>₹{(product.price.amount * product.quantity)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Cart Totals Section */}
                    <div className="col-md-4">
                        <div className="cart-totals-card">
                            <h5 className="cart-title">Cart Totals</h5>
                            <div className="cart-totals-summary">
                                <div className="row">
                                    <div className="col">Subtotal</div>
                                    <div className="col text-right">₹{totalAmount}</div>
                                </div>
                                <div className="row">
                                    <div className="col">Estimated Delivery</div>
                                    <div className="col text-right">Free</div>
                                </div>
                                <div className="row">
                                    <div className="col">Estimated Taxes</div>
                                    <div className="col text-right">₹{(totalAmount * 0.05)}</div>
                                </div>
                            </div>
                            <div className="cart-total">
                                <div className="row">
                                    <div className="col">Total</div>
                                    <div className="col text-right">₹{(totalAmount + totalAmount * 0.05)}</div>
                                </div>
                            </div>
                            <button className="checkout-btn">Proceed to checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
