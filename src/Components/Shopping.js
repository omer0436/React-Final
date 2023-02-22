import React, {useContext, } from 'react'
import Navbar from './Navbar'
import { DataContext } from '../Context/DataContext'


const Shopping = () => {

    const { selected, setSelected } = useContext(DataContext)

    const totalPrice = selected.reduce(( total, currentItem ) => total += (currentItem.count*currentItem.price), 0)

    return (
        <div>

            <Navbar />
            <div className="container mt-5">
                <div className="row " >
                    {selected.length > 0 ? selected.map((product,index) => (
                        <div key={index} className="row bg-light border border-light-subtle my-3">
                            <div className="col-md-2 my-2">
                                <img
                                    src={product.image}
                                    class="img-fluid rounded-start"
                                    alt="pro"
                                    style={{ width: "10rem", height: "8rem" }}
                                />
                            </div>
                            <div className="col-md-10 my-2">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.model}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p className="card-text">
                                                <small class="text-muted">{product.category}</small>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <p className="card-text">
                                            <b>Price:</b>
                                            {product.price}$
                                        </p>
                                        <p className="">
                                            <b>Count:{product.count} </b>
                                        </p>
                                        <h5 className="card-text text-center ms-5">subtotal: {product.count*product.price}$</h5>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    )) : <p className='text-center'>There are no products in your cart...</p>}
                </div>
                <div className='col-12'>
                { selected.length > 0 && <h3  className="text-end">Total: {totalPrice}$</h3> }
                </div>

            </div>
        </div>

    )
}

export default Shopping
