import React from 'react';
import mountain from './mountain.jpeg';

function Card(props){
    return(
        <div className='col-lg-4 col-md-6 col-sm-12 mt-3'>
            <div className="card">
                <img className="card-img-top" src={mountain} alt="Mountain"/>
                <div className="card-body">
                    <h5 className="card-title text-primary">{props.data.id}</h5>
                    <strong>{props.data.price}</strong>
                    <p className="card-text">{props.data.description}</p>
                    <buttton className="btn btn-primary" onClick={() => props.click(props.data)}>Add to Cart</buttton>
                </div>
            </div>
        </div>
    )
}

export default Card;