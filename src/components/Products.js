import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Products() {
    const [productList, setProductList] = useState([]);
    // const [duplicateProductList, setDuplicateProductList] = useState([]);
    //const [filter, setFilter] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    async function getProducts() {
        const { data } = await axios.get('http://fakestoreapi.com/products')
        console.log(data);
        setProductList(data);

    }
    const filterProducts = (cat) => {
        const filteredProducts = productList.filter((item) => item.category === cat);
        setProductList(filteredProducts);
    }

    const ShowProducts = () => {
        return (

            <div >
                <div className="d-flex justify-content-center">
                    <button className="btn btn-outline-dark me-2"  >All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("electronics")}>Electronics</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProducts("jewelery")}>Jewellery</button>
                </div>
                <div className="container d-flex flex-wrap m-2">
                    {productList.map((product) => {
                        return (
                            <div className="container col-md-3 mt-4">
                                <div className="card h-100 text-center" key={product.id}>
                                    <img src={product.image} className="card-img-top p-4" alt={product.title}
                                        height='250px' />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text lead fw-bold">₹{product.price}</p>
                                        <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5 p-5">
                        <h1 className="display-6 fw-bolder ">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row ">
                    <ShowProducts />
                </div>

            </div>

        </div>);
}