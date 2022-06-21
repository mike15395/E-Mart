import React from "react";
import Products from "./Products";

export default function Home() {
    return (
        <div>
            <div class="card bg-dark text-white">
                <img src="/assets/bgShop.jpg" class="card-img" alt="Shopping_Background" height='550px' />
                <div class="card-img-overlay d-flex flex-column ">
                    <h5 class="card-title display-3 fw-bolder text-dark">NEW SEASON ARRIVALS</h5>
                    <p class="card-text lead fs-2 text-dark mb-2">CHECK OUT ALL THE TRENDS</p>

                </div>
            </div>
            <Products />
        </div>
    );
}