import React from 'react';
import {BsCartPlus,} from "react-icons/bs";
import {MdDeleteForever} from "react-icons/md";

const Product = ({product, products, cart, addToCart}) => {

    const {id, name, description, img, price} = product;
    const selectProduct = (id) => {
        const product = products.filter((product) => product.id === id)[0];
        addToCart([...cart, product]);
        //console.log(cart);
    };
    const removeProduct = (id) => {
        const products = cart.filter((product) => product.id !== id);
        addToCart(products);
    };

    const isInCart = cart.some((product) => product.id === id);

    return (
        <div className="product text-capitalize">
            <div className="container py-1">
                <div className="row justify-content-center mb-3">
                    <div className="col-md-12 col-xl-10">
                        <div className="card shadow-0 border rounded-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                        <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                            <img src={img}
                                                 className="w-100"/>
                                            <a href="">
                                                <div className="hover-overlay">
                                                    <div className="mask bg-primary"></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                        <h5>{name}</h5>
                                        <div className="d-flex flex-row">
                                            <div className="text-danger mb-1 me-2">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                            <span>ID: {id}</span>
                                        </div>
                                        <div className="mb-2 text-muted small">
                                            <span>{description}</span>
                                            <span className="text-primary"> • </span>
                                            <span>The best Choice!<br/></span>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                        <div className="d-flex flex-row align-items-center mb-1">
                                            <h4 className="mb-1 me-1">$ {price}</h4>
                                        </div>
                                        <h6 className="text-success">Free shipping</h6>
                                        <div className="d-flex flex-column mt-4">
                                            {isInCart ? (
                                                <button className="btn btn-outline-danger btn-sm mt-2" type="button"
                                                        onClick={() => removeProduct(id)}>
                                                    Remove from cart <MdDeleteForever/>
                                                </button>
                                            ) : (
                                                <button className="btn btn-outline-primary btn-sm mt-2" type="button"
                                                        onClick={() => selectProduct(id)}>
                                                    Add to cart <BsCartPlus/>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Product;