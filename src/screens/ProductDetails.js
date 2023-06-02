import React from "react";
import { Link } from "react-router-dom";
import About from "../components/About";
import Description from "../components/Description";
import ProductDetailsOculus from "../components/ProductDetailsOculus";
import Reviews from "../components/Reviews";

function ProductDetails() {
  return (
    <div>
      {/* <!-- Body: Body --> */}
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Products Details</h3>
              </div>
            </div>
          </div>
          {/* <!-- Row end  -->   */}

          <div className="row g-3 mb-3">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <div className="product-details">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="product-details-image mt-50">
                          <div className="product-thumb-image">
                            <div
                              className="product-thumb-image-active nav flex-column nav-pills me-3"
                              id="v-pills-tab"
                              role="tablist"
                              aria-orientation="vertical"
                            >
                              <a
                                className="single-thumb"
                                id="v-pills-one-tab"
                                data-bs-toggle="pill"
                                href="#v-pills-one"
                                role="button"
                                aria-controls="v-pills-one"
                              >
                                <img
                                  src="assets/images/product/thunb-1.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="single-thumb"
                                id="v-pills-two-tab"
                                data-bs-toggle="pill"
                                href="#v-pills-two"
                                role="button"
                                aria-controls="v-pills-two"
                              >
                                <img
                                  src="assets/images/product/thunb-2.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="single-thumb active"
                                aria-current="page"
                                id="v-pills-three-tab"
                                data-bs-toggle="pill"
                                role="button"
                                href="#v-pills-three"
                                aria-controls="v-pills-three"
                              >
                                <img
                                  src="assets/images/product/thunb-3.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="single-thumb"
                                id="v-pills-four-tab"
                                data-bs-toggle="pill"
                                href="#v-pills-four"
                                role="button"
                                aria-controls="v-pills-four"
                              >
                                <img
                                  src="assets/images/product/thunb-4.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="single-thumb"
                                id="v-pills-five-tab"
                                data-bs-toggle="pill"
                                href="#v-pills-five"
                                role="button"
                                aria-controls="v-pills-five"
                              >
                                <img
                                  src="assets/images/product/thunb-5.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                          <div className="product-image">
                            <div
                              className="product-image-active tab-content"
                              id="v-pills-tabContent"
                            >
                              <a
                                className="single-image tab-pane fade"
                                id="v-pills-one"
                                role="tabpanel"
                                aria-labelledby="v-pills-one-tab"
                              >
                                <img
                                  src="assets/images/product/productslide-1.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="single-image tab-pane fade"
                                id="v-pills-two"
                                role="tabpanel"
                                aria-labelledby="v-pills-two-tab"
                              >
                                <img
                                  src="assets/images/product/productslide-2.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="single-image tab-pane fade active show"
                                id="v-pills-three"
                                role="tabpanel"
                                aria-labelledby="v-pills-three-tab"
                              >
                                <img
                                  src="assets/images/product/productslide-3.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="single-image tab-pane fade"
                                id="v-pills-four"
                                role="tabpanel"
                                aria-labelledby="v-pills-four-tab"
                              >
                                <img
                                  src="assets/images/product/productslide-5.jpg"
                                  alt=""
                                />
                              </a>
                              <a
                                className="single-image tab-pane fade "
                                id="v-pills-five"
                                role="tabpanel"
                                aria-labelledby="v-pills-five-tab"
                              >
                                <img
                                  src="assets/images/product/productslide-5.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <ProductDetailsOculus />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Row end  -->   */}

          <div className="row g-3 mb-3">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <ul
                    className="nav nav-tabs tab-body-header rounded  d-inline-flex"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-bs-toggle="tab"
                        href="#review"
                        role="tab"
                      >
                        Reviews
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#descriptions"
                        role="tab"
                      >
                        Descriptions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#about"
                        role="tab"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="review">
                    <Reviews />
                  </div>
                  <div className="tab-pane fade" id="descriptions">
                    <Description />
                  </div>
                  <div className="tab-pane fade" id="about">
                    <About />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Row end  -->   */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
