import React from "react"
import {
    FaEnvelopeOpen,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa"
import CountNum from "./CountNum"
import NavCarousel from "./NavCarousel"

const Topbar = () => {
    return (
        <>
            <div>
                <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                    <div className="row gx-0">
                        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                            <div
                                className="d-inline-flex align-items-center"
                                style={{ height: "45px" }}>
                                <small className="me-3 text-light">
                                    <FaMapMarkerAlt className="mb-1 me-1" /> 123
                                    Street, New York, USA
                                </small>
                                <small className="me-3 text-light">
                                    <FaPhoneAlt className="mb-1 me-1" /> +012
                                    345 6789
                                </small>
                                <small className="text-light">
                                    <FaEnvelopeOpen className="mb-1 me-1" />{" "}
                                    info@example.com
                                </small>
                            </div>
                        </div>
                        <div className="col-lg-4 text-center text-lg-end">
                            <div
                                className="d-inline-flex align-items-center"
                                style={{ height: "45px" }}>
                                <a
                                    className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                                    href="/">
                                    <FaTwitter className="fs-6 fw-normal" />
                                </a>
                                <a
                                    className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                                    href="/">
                                    <FaFacebookF className="fs-6 fw-normal" />
                                </a>
                                <a
                                    className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                                    href="/">
                                    <FaLinkedinIn className="fs-6 fw-normal" />
                                </a>
                                <a
                                    className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                                    href="/">
                                    <FaInstagram className="fs-6 fw-normal" />
                                </a>
                                <a
                                    className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                                    href="/">
                                    <FaYoutube className="fs-6 fw-normal" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Topbar
