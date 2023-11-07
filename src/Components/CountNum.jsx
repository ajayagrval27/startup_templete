import React, { useState } from "react"
import CountUp from "react-countup"
import "../Assets/css/CountNum.css"
import { FaAward, FaCheck, FaUsers } from "react-icons/fa"

const CountNum = () => {

    return (
        <>
            <div className="container-fluid facts pt-0 py-5 pt-lg-0 ">
                <div className="container py-5 pt-lg-0">
                    <div className="row gx-0">
                        <div className="col-lg-4">
                            <div
                                className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                                style={{ height: "150px" }}>
                                <div
                                    className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                                    style={{ width: "60px", height: "60px" }}>
                                    <FaUsers color="#06a3da" />
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white mb-0">
                                        Happy Clients
                                    </h5>
                                    <h1 className="text-white mb-0">
                                        <CountUp
                                            end={5869}
                                            delay={0.5}
                                            duration={7}
                                        />
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 wow zoomIn"
                            data-wow-delay="0.3s">
                            <div
                                className="bg-light shadow d-flex align-items-center justify-content-center p-4"
                                style={{ height: "150px" }}>
                                <div
                                    className="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
                                    style={{ width: "60px", height: "60px" }}>
                                    <FaCheck color="#ffff" />
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-primary mb-0">
                                        Projects Done
                                    </h5>
                                    <h1 className="mb-0">
                                        <CountUp
                                            end={12545}
                                            delay={0.5}
                                            duration={7}
                                        />
                                    </h1>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 wow zoomIn"
                            data-wow-delay="0.6s">
                            <div
                                className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                                style={{ height: "150px" }}>
                                <div
                                    className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                                    style={{ width: "60px", height: "60px" }}>
                                    <FaAward color="#06a3da" />
                                </div>
                                <div className="ps-4">
                                    <h5 className="text-white mb-0">
                                        Win Awards
                                    </h5>
                                    <h1 className="text-white mb-0">
                                        <CountUp
                                            end={952}
                                            delay={0.5}
                                            duration={7}
                                        />
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CountNum
