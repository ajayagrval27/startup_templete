import React from "react"
import { FaCheck, FaTimes } from "react-icons/fa"

let pricesData = [
    {
        title: "Basic Plan",
        description: "For Small Size Business",
        price: 49,
        features: [
            "HTML5 & CSS3",
            "Bootstrap v5",
            "Responsive Layout",
            "Cross-browser Support",
        ],
        icon: [
            <FaCheck className="fs-5 text-primary pt-1" />,
            <FaCheck className="fs-5 text-primary pt-1" />,
            <FaTimes className="fs-5 text-daner pt-1" />,
            <FaTimes className="fs-5 text-danger pt-1" />,
        ],
    },
    {
        title: "Standard Plan",
        description: "For Medium Size Business",
        price: 99,
        features: [
            "HTML5 & CSS3",
            "Bootstrap v5",
            "Responsive Layout",
            "Cross-browser Support",
        ],
        icon: [
            <FaCheck className="fs-5 text-primary pt-1" />,
            <FaCheck className="fs-5 text-primary pt-1" />,
            <FaCheck className="fs-5 text-primary pt-1" />,
            <FaTimes className="fs-5 text-danger pt-1" />,
        ],
    },
    {
        title: "Advanced Plan",
        description: "For Large Size Business",
        price: 149,
        features: [
            "HTML5 & CSS3",
            "Bootstrap v5",
            "Responsive Layout",
            "Cross-browser Support",
        ],
        icon: [
            <FaCheck className="fs-5 text-primary pt-1" />,
            <FaCheck className="fs-5 text-primary pt-1" />,
            <FaCheck className="fs-5 text-primary pt-1" />,
            <FaCheck className="fs-5 text-primary pt-1" />,
        ],
    },
]

const Prices = () => {
    return (
        <div>
            {" "}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div
                        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
                        style={{ maxWidth: "600px" }}>
                        <h5 className="fw-bold text-primary text-uppercase">
                            Pricing Plans
                        </h5>
                        <h1 className="mb-0">
                            We are Offering Competitive Prices for Our Clients
                        </h1>
                    </div>
                    <div className="row g-0">
                        {pricesData.map((price, index) => {
                            return (
                                <div
                                    key={index}
                                    className="col-lg-4 border border-1 border-white ">
                                    <div className="bg-light rounded shadow mx-1">
                                        <div className="border-bottom py-4 px-5 mb-4">
                                            <h4 className="text-primary mb-1">
                                                {price.title}
                                            </h4>
                                            <small className="text-uppercase">
                                                {price.description}
                                            </small>
                                        </div>
                                        <div className="p-5 pt-0">
                                            <h1 className="display-5 mb-3">
                                                <small
                                                    className="align-top"
                                                    style={{
                                                        fontSize: "22px",
                                                        lineHeight: "45px",
                                                    }}>
                                                    $
                                                </small>
                                                {price.price}
                                                <small
                                                    className="align-bottom"
                                                    style={{
                                                        fontSize: "16px",
                                                        lineHeight: "40px",
                                                    }}>
                                                    / Month
                                                </small>
                                            </h1>
                                            <div className="d-flex justify-content-between mb-3">
                                                <span>{price.features[0]}</span>
                                                {price.icon[0]}
                                            </div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <span>{price.features[1]}</span>
                                                {price.icon[1]}
                                            </div>
                                            <div className="d-flex justify-content-between mb-3">
                                                <span>{price.features[2]}</span>
                                                {price.icon[2]}
                                            </div>
                                            <div className="d-flex justify-content-between mb-2">
                                                <span>{price.features[3]}</span>
                                                {price.icon[3]}
                                            </div>
                                            <a
                                                href=""
                                                className="btn btn-primary py-2 px-4 mt-4">
                                                Order Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {/* <div className="col-lg-4">
                            <div
                                className="bg-white rounded shadow position-relative"
                                style={{ zIndex: "1" }}>
                                <div className="border-bottom py-4 px-5 mb-4">
                                    <h4 className="text-primary mb-1">
                                        Standard Plan
                                    </h4>
                                    <small className="text-uppercase">
                                        For Medium Size Business
                                    </small>
                                </div>
                                <div className="p-5 pt-0">
                                    <h1 className="display-5 mb-3">
                                        <small
                                            className="align-top"
                                            style={{
                                                fontSize: "22px",
                                                lineHeight: "45px",
                                            }}>
                                            $
                                        </small>
                                        99.00
                                        <small
                                            className="align-bottom"
                                            style={{
                                                fontSize: "16px",
                                                lineHeight: "40px",
                                            }}>
                                            / Month
                                        </small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>HTML5 & CSS3</span>
                                        <FaCheck className="fs-5 text-primary pt-1" />
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Bootstrap v5</span>
                                        <FaCheck className="fs-5 text-primary pt-1" />
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Responsive Layout</span>
                                        <FaCheck className="fs-5 text-primary pt-1" />
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Cross-browser Support</span>
                                        <FaTimes className="fs-5 text-danger pt-1" />
                                    </div>
                                    <a
                                        href=""
                                        className="btn btn-primary py-2 px-4 mt-4">
                                        Order Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="bg-light rounded">
                                <div className="border-bottom py-4 px-5 mb-4">
                                    <h4 className="text-primary mb-1">
                                        Advanced Plan
                                    </h4>
                                    <small className="text-uppercase">
                                        For Large Size Business
                                    </small>
                                </div>
                                <div className="p-5 pt-0">
                                    <h1 className="display-5 mb-3">
                                        <small
                                            className="align-top"
                                            style={{
                                                fontSize: "22px",
                                                lineHeight: "45px",
                                            }}>
                                            $
                                        </small>
                                        149.00
                                        <small
                                            className="align-bottom"
                                            style={{
                                                fontSize: "16px",
                                                lineHeight: "40px",
                                            }}>
                                            / Month
                                        </small>
                                    </h1>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>HTML5 & CSS3</span>
                                        <FaCheck className="fs-5 text-primary pt-1" />
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Bootstrap v5</span>
                                        <FaCheck className="fs-5 text-primary pt-1" />
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Responsive Layout</span>
                                        <FaCheck className="fs-5 text-primary pt-1" />
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Cross-browser Support</span>
                                        <FaCheck className="fs-5 text-primary pt-1" />
                                    </div>
                                    <a
                                        href=""
                                        className="btn btn-primary py-2 px-4 mt-4">
                                        Order Now
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices
