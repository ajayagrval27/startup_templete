import React, { useRef } from "react"
import $ from "jquery"
import "../Assets/css/NavBar.css"
import { FaBars, FaSearch, FaUserTie } from "react-icons/fa"
import NavCarousel from "./NavCarousel"
import { Link } from "react-router-dom"

const NavBar = () => {
    const headerRef = useRef(null)

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $(".navbar").addClass("sticky-top shadow-sm")
        } else {
            $(".navbar").removeClass("sticky-top shadow-sm")
        }
    })

    return (
        <>
            <header className="header-section d-none d-xl-block">
                <div className="container-fluid position-relative p-0">
                    <nav
                        ref={headerRef}
                        className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                        <a href="" className="navbar-brand p-0">
                            <h1 className="m-0">
                                <FaUserTie className="mb-2 me-2" />
                                Startup
                            </h1>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <FaBars />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarCollapse">
                            <div className="navbar-nav ms-auto py-0">
                                <Link to="/" className="nav-item nav-link active">
                                    Home
                                </Link>
                                <Link to="/about" className="nav-item nav-link">
                                    About
                                </Link>
                                <Link
                                    to="/Featutres"
                                    className="nav-item nav-link">
                                    Features
                                </Link>
                                <Link
                                    to="/Services"
                                    className="nav-item nav-link">
                                    Services
                                </Link>
                                <Link
                                    to="/Prices"
                                    className="nav-item nav-link">
                                    Prices
                                </Link>
                                <Link
                                    to="/Quotes"
                                    className="nav-item nav-link">
                                    Quotes
                                </Link>
                                {/* <div className="nav-item dropdown">
                                    <a
                                        href="/"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown">
                                        Blog
                                    </a>
                                    <div className="dropdown-menu m-0">
                                        <a href="/" className="dropdown-item">
                                            Blog Grid
                                        </a>
                                        <a href="/" className="dropdown-item">
                                            Blog Detail
                                        </a>
                                    </div>
                                </div> */}
                                <div className="nav-item dropdown">
                                    <a
                                        href="/"
                                        className="nav-link dropdown-toggle"
                                        data-bs-toggle="dropdown">
                                        Pages
                                    </a>
                                    <div className="dropdown-menu m-0">
                                        <Link to="/Prices">
                                            <a
                                                href="/"
                                                className="dropdown-item">
                                                Pricing Plan
                                            </a>
                                        </Link>
                                        <a href="/" className="dropdown-item">
                                            Our features
                                        </a>
                                        <a href="/" className="dropdown-item">
                                            Team Members
                                        </a>
                                        <a href="/" className="dropdown-item">
                                            Testimonial
                                        </a>
                                        <a href="/" className="dropdown-item">
                                            Free Quote
                                        </a>
                                    </div>
                                </div>
                                {/* <a href="/" className="nav-item nav-link">
                                    Contact
                                </a> */}
                            </div>
                            <button
                                type="button"
                                className="btn text-primary ms-3">
                                <FaSearch />
                            </button>
                            <a
                                href="/"
                                className="btn btn-primary py-2 px-4 ms-3">
                                Download Pro Version
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="mb-5"></div>
        </>
    )
}

export default NavBar
