import React from 'react';
import './Details.css'
const Details = (props) => {
    const { name, img, Price, brand, engin, speed } = props.car || {};
    return (
        <div className="col-md-4 g-4">
            <div className="col">
                <div className="card card-container">
                    <img src={img} style={{ 'height': '250px', 'border-radius': '10px' }} alt="" />
                    <div className="card-body">
                        <h5 className="card-title text-white"><small>Name: {name.slice(0, 20)}</small></h5>
                        <p className="card-text text-white"><small>Brand: {brand}</small></p>
                        <p className="card-text text-white"><small>Engine: {engin}</small></p>
                        <p className="card-text text-white"><small>Speed: {speed}</small></p>
                        <p className="card-text text-white"><small>Price: {Price}</small></p>
                        <button onClick={() => props.handleAddCart(props.car)}
                            className='cart-btn'><i className="fas fa-shopping-cart"></i>Add to cart</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;