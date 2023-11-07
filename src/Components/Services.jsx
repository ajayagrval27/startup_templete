import React from "react"
import "../Assets/css/Services.css"
import {
    FaAndroid,
    FaArrowRight,
    FaChartPie,
    FaCode,
    FaSearch,
    FaShieldAlt,
} from "react-icons/fa"

let servicesData = [
    {
        icon: <FaShieldAlt className="text-white" />,
        title: "Cyber Security",
        description:
            "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
    {
        icon: <FaChartPie className="text-white" />,
        title: "Data Analytics",
        description:
            "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
    {
        icon: <FaCode className="text-white" />,
        title: "Web Development",
        description:
            "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
    {
        icon: <FaAndroid className="text-white" />,
        title: "Apps Development",
        description:
            "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
    {
        icon: <FaSearch className="text-white" />,
        title: "SEO Optimization",
        description:
            "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed",
    },
]

const Services = () => {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div
                        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
                        style={{ maxWidth: "600px" }}>
                        <h5 className="fw-bold text-primary text-uppercase">
                            Our Services
                        </h5>
                        <h1 className="mb-0">
                            Custom IT Solutions for Your Successful Business
                        </h1>
                    </div>
                    <div className="row g-5">
                        {servicesData.map((service, index) => {
                            return (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                        <div className="service-icon">
                                            {service.icon}
                                        </div>
                                        <h4 className="mb-3">
                                            {service.title}
                                        </h4>
                                        <p className="m-0">{service.description}</p>
                                        <a
                                            className="btn btn-lg btn-primary rounded"
                                            href="">
                                            <FaArrowRight className="text-white" />
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="col-lg-4 col-md-6">
                            <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                                <h3 className="text-white mb-3">
                                    Call Us For Quote
                                </h3>
                                <p className="text-white mb-3">
                                    Clita ipsum magna kasd rebum at ipsum amet
                                    dolor justo dolor est magna stet eirmod
                                </p>
                                <h2 className="text-white mb-0">
                                    +012 345 6789
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
