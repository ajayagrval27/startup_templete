import React from "react"
import "../Assets/css/NavCarousel.css"
import Carouseal1 from "../Assets/images/carousel-1.jpg"
import Carouseal2 from "../Assets/images/carousel-2.jpg"
import { Carousel } from "react-bootstrap"
import CountNum from "./CountNum"

const NavCarousel = () => {
    return (
        <>
            <Carousel fade className="carousel slide carousel-fade">
                <Carousel.Item className="carousel-item active">
                    <img className="w-100" src={Carouseal1} alt="" />
                    <Carousel.Caption className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{ maxWidth: "900px" }}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                                Creative & Innovative
                            </h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                                Creative & Innovative Digital Solution
                            </h1>
                            <a
                                href=""
                                className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                                Free Quote
                            </a>
                            <a
                                href=""
                                className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">
                                Contact Us
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="w-100" src={Carouseal2} alt="" />
                    <Carousel.Caption className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{ maxWidth: "900px" }}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                                Creative & Innovative
                            </h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                                Creative & Innovative Digital Solution
                            </h1>
                            <a
                                href=""
                                className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">
                                Free Quote
                            </a>
                            <a
                                href=""
                                className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">
                                Contact Us
                            </a>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <CountNum />
        </>
    )
}

export default NavCarousel
