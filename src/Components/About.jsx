import React from "react"
import AboutImg from "../Assets/images/about.jpg"
import { FaCheck, FaPhone } from "react-icons/fa"

const About = () => {
    return (
        <div>
            <div className="container-fluid py-5 ">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h5 className="fw-bold text-primary text-uppercase">
                                    About Us
                                </h5>
                                <h1 className="mb-0">
                                    The Best IT Solution With 10 Years of
                                    Experience
                                </h1>
                            </div>
                            <p className="mb-4">
                                Tempor erat elitr rebum at clita. Diam dolor
                                diam ipsum et tempor sit. Aliqu diam amet diam
                                et eos labore. Clita erat ipsum et lorem et sit,
                                sed stet no labore lorem sit. Sanctus clita duo
                                justo et tempor eirmod magna dolore erat amet
                            </p>
                            <div className="row g-0 mb-3">
                                <div className="col-sm-6">
                                    <h5 className="mb-3">
                                        <FaCheck className="text-primary me-3" />
                                        Award Winning
                                    </h5>
                                    <h5 className="mb-3">
                                        <FaCheck className="text-primary me-3" />
                                        Professional Staff
                                    </h5>
                                </div>
                                <div className="col-sm-6">
                                    <h5 className="mb-3">
                                        <FaCheck className="text-primary me-3" />
                                        24/7 Support
                                    </h5>
                                    <h5 className="mb-3">
                                        <FaCheck className="text-primary me-3" />
                                        Fair Prices
                                    </h5>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <div
                                    className="bg-primary d-flex align-items-center justify-content-center rounded"
                                    style={{ width: "60px", height: "60px" }}>
                                    <FaPhone className="text-white" />
                                </div>
                                <div className="ps-4">
                                    <h5 className="mb-2">
                                        Call to ask any question
                                    </h5>
                                    <h4 className="text-primary mb-0">
                                        +012 345 6789
                                    </h4>
                                </div>
                            </div>
                            <a
                                href="/"
                                className="btn btn-primary py-3 px-5 mt-3">
                                Request A Quote
                            </a>
                        </div>
                        <div className="col-lg-5" style={{ minHeight: "500px" }}>
                            <div className="position-relative h-100">
                                <img
                                    className="position-absolute w-100 h-100 rounded"
                                    src={AboutImg}
                                    alt="About us"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
