import React, { useState, useEffect, useContext } from 'react'
import Navbar from './Navbar'
import { DataContext } from '../Context/DataContext'


const Products = () => {
    const { data, setData } = useContext(DataContext)
    const { selected, setSelected } = useContext(DataContext)

    const BASE_URL = "https://dummyjson.com/products"

    const getData = async () => {

        try {
            const response = await fetch(BASE_URL);
            const incData = await response.json();
            setData(incData.products);
        } catch (error) {
            console.log(error.message);
        }
    };

    const getProductValues=(pPro)=>{
        const newProduct= {
            image: pPro.images[0],
            model: pPro.title,
            description: pPro.description,
            category: pPro.category,
            price: pPro.price,
            id: pPro.id,
            count:1
        }

        //We check die Product if it exists in Basket
        const checkProduct = selected.findIndex(cartItem => cartItem.id === pPro.id)
        

        if(checkProduct !== -1){
            console.log("ayni üründen var")
            //Her bir ürün icersindeki count key ne ulasip arttirma yaptik
            const newData = [...selected]
            newData[checkProduct].count += 1;
            setSelected(newData)

        }else{
            console.log("ilk ürün")
            setSelected([...selected, newProduct])
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row " >
                    {data.map((pro, index) => (
                        <div key={index} className="col-3 m-4 bg-dark py-2">
                            <img src={pro.thumbnail} className="card-img-top" style={{ width: 19 + "rem", height: 15 + "rem" }} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{pro.title}</h5>
                                <p className="card-text">{pro.discribtion}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Category : {pro.category}</li>
                                <li className="list-group-item">Rating : {pro.rating}</li>
                                <li className="list-group-item">Stock : {pro.stock}</li>
                                <li className="list-group-item">Price : {pro.price}</li>
                                <li className="list-group-item"><button onClick={() => getProductValues(pro)} className='btn btn-success w-100'>SEPETE EKLE</button></li>
                            </ul>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
