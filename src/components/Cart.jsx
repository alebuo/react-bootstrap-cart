import React from 'react';
import Product from './Product';

const Cart = ({cart, addToCart}) => {
    return (
        <div>
            <div className="product text-capitalize">
                <div className="container py-3">
                    <div className="row justify-content-center mb-3">
                        <div className="col-md-12 col-xl-10">
                            <div className="card shadow-0 border rounded-3">
                                <div className="card-body">
                                    <h1 className="text-center ">Checkout</h1>
                                    {cart.length === 0
                                        ? <p className="text-center">Empty cart</p>
                                        : null
                                    }
                                    {
                                        cart.length > 0
                                            ? <p className="text-center">Products on cart: {cart.length}</p>
                                            : null
                                    }
                                    {
                                        cart.length > 0
                                            ? <p className="text-center">Total :
                                                ${cart.reduce((acc, product) => acc + product.price, 0)}</p>
                                            : null
                                    }
                                    {
                                        cart.length > 0
                                            ? <div className="text-center">
                                                <button className="btn btn-primary px-5">Pay</button>
                                            </div>
                                            : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                cart.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        cart={cart}
                        addToCart={addToCart}
                    />
                ))}
        </div>
    );
};

export default Cart;
