import React from 'react'
import FeatutresImg from "../Assets/images/feature.jpg"
import { FaAward, FaCubes, FaPhoneAlt, FaUserCog } from 'react-icons/fa'

const Featutres = () => {
  return (
      <div>
          <div className="container-fluid py-5">
              <div className="container py-5">
                  <div
                      className="section-title text-center position-relative pb-3 mb-5 mx-auto"
                      style={{ maxWidth: "600px" }}>
                      <h5 className="fw-bold text-primary text-uppercase">
                          Why Choose Us
                      </h5>
                      <h1 className="mb-0">
                          We Are Here to Grow Your Business Exponentially
                      </h1>
                  </div>
                  <div className="row g-5">
                      <div className="col-lg-4">
                          <div className="row g-5">
                              <div className="col-12">
                                  <div
                                      className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                                      style={{ width: "60px", height: "60px" }}>
                                      <FaCubes className="text-white" />
                                  </div>
                                  <h4>Best In Industry</h4>
                                  <p className="mb-0">
                                      Magna sea eos sit dolor, ipsum amet lorem
                                      diam dolor eos et diam dolor
                                  </p>
                              </div>
                              <div className="col-12 ">
                                  <div
                                      className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                                      style={{ width: "60px", height: "60px" }}>
                                      <FaAward className="text-white" />
                                  </div>
                                  <h4>Award Winning</h4>
                                  <p className="mb-0">
                                      Magna sea eos sit dolor, ipsum amet lorem
                                      diam dolor eos et diam dolor
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-4 " style={{ minHeight: "350px" }}>
                          <div className="position-relative h-100">
                              <img
                                  className="position-absolute w-100 h-100 rounded"
                                  src={FeatutresImg}
                                  style={{ objectFit: "cover" }}
                              />
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="row g-5">
                              <div className="col-12">
                                  <div
                                      className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                                      style={{ width: "60px", height: "60px" }}>
                                      <FaUserCog className="text-white" />
                                  </div>
                                  <h4>Professional Staff</h4>
                                  <p className="mb-0">
                                      Magna sea eos sit dolor, ipsum amet lorem
                                      diam dolor eos et diam dolor
                                  </p>
                              </div>
                              <div className="col-12 ">
                                  <div
                                      className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                                      style={{ width: "60px", height: "60px" }}>
                                      <FaPhoneAlt className="text-white" />
                                  </div>
                                  <h4>24/7 Support</h4>
                                  <p className="mb-0">
                                      Magna sea eos sit dolor, ipsum amet lorem
                                      diam dolor eos et diam dolor
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Featutres