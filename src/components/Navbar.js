import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
export default function Navbar() {
    const state = useSelector((state) => state.handleCart);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="#">My Ecommerce App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto ml-5">
                            <li className="nav-item ">
                                <Link className='nav-link' to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/products'>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to='/contact'>Contact</Link>
                            </li>


                        </ul>
                        <Link to='/login' className='btn btn-outline-dark me-2'>
                            <i class="bi bi-box-arrow-in-right"></i>  Login
                        </Link>
                        <Link to='/register' className='btn btn-outline-dark me-2'>
                            <i class="bi bi-person-plus-fill"></i>  Register
                        </Link>
                        <Link to='/cart' className='btn btn-outline-dark me-2'>
                            <i class="bi bi-cart"></i> Cart({state.length})
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}