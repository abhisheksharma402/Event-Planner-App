import React from 'react'
import Register from './Register'
import { Outlet, Link } from "react-router-dom";

const Header = () => {


    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand w-25 me-5" href="#">
                    <img className="w-100" src="./assets/logo.png" alt="logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-primary" aria-current="page" href="#">
                                Pricing
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-primary" href="#">Community</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link text-primary" href="#">Support</a>
                        </li>
                    </ul> */}

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>   

                </div>
            </div>
        </nav>
        <Outlet/>
        </>
    )
}

export default Header