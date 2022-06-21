import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import axios from 'axios';

export default function Product() {
    const { id } = useParams();
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    async function getProducts() {
        const { data } = await axios.get(`http://fakestoreapi.com/products/${id}`)
        console.log(data);
        setProductList(data);

    }
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }


    const ShowProduct = () => {
        return (
            <div className="d-flex ">
                <div className="col-md-6">
                    <img src={productList.image} alt={productList.title} width='400px' height='400px' />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase text-black-50">
                        {productList.category}
                    </h4>
                    <h1 className="display-5">{productList.title}</h1>
                    <p className="lead fw-bold">Rating{productList.rating && productList.rating.rate}<i class="bi bi-star-fill"></i></p>
                    <h3 className="display-6 fw-bold m-4">₹{productList.price}</h3>
                    <p className="lead">{productList.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={addProduct(productList)}>Add to Cart</button>
                    <Link to='/cart' className="btn btn-dark ms-2 px-4 my-2">Go to Cart</Link>
                </div>
            </div>
        );
    }
    return (
        <div className="py-5 ">
            <ShowProduct />
        </div>)
}