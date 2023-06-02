import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductsFilter from "../components/ProductsFilter";
import { ProductListApi } from "../ContentAPI/ProductListApi";

function ProductList() {
  const [state, setstate] = useState(ProductListApi);
  return (
    <div>
      {/* <!-- Body: Body --> */}
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Products</h3>
                <div className="btn-group group-link btn-set-task w-sm-100">
                  <Link
                    to="/ProductGrid"
                    className="btn d-inline-flex align-items-center"
                    aria-current="page"
                  >
                    <i className="icofont-wall px-2 fs-5"></i>Grid View
                  </Link>
                  <Link
                    to="/ProductList"
                    className="btn active d-inline-flex align-items-center"
                  >
                    <i className="icofont-listing-box px-2 fs-5"></i> List View
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Row end  --> */}
          <div className="row g-3 mb-3">
            <div className="col-md-12 col-lg-4 col-xl-4 col-xxl-3">
              <ProductsFilter />
            </div>
            <div className="col-md-12 col-lg-8 col-xl-8 col-xxl-9">
              {ProductListApi.map((curElem) => {
                const {
                  id,
                  Img,
                  TopHeading,
                  Heading,
                  BottomHeading,
                  Time,
                  Text,
                  Text1,
                  Price,
                  Doller,
                  Rating,
                  Font,
                  RatingCount,
                  Count,
                } = curElem;
                return (
                  <div className="card mb-3 bg-transparent p-2">
                    <div className="card border-0 mb-1">
                      <div className="form-check form-switch position-absolute top-0 end-0 py-3 px-3 d-none d-md-block">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="Eaten-switch2"
                        />
                        <label className="form-check-label" for="Eaten-switch2">
                          Add to Cart
                        </label>
                      </div>
                      <div className="card-body d-flex align-items-center flex-column flex-md-row">
                        <a href="product-detail.html">
                          <img
                            className="w120 rounded img-fluid"
                            src={Img}
                            alt=""
                          />
                        </a>
                        <div className="ms-md-4 m-0 mt-4 mt-md-0 text-md-start text-center w-100">
                          <a href="product-detail.html">
                            <h6 className="mb-3 fw-bold">
                              {TopHeading}
                              <span className="text-muted small fw-light d-block">
                                {Heading}
                              </span>
                            </h6>
                          </a>
                          <div className="d-flex flex-row flex-wrap align-items-center justify-content-center justify-content-md-start">
                            <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                              <div className="text-muted small">
                                {BottomHeading}
                              </div>
                              <strong>{Time}</strong>
                            </div>
                            <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                              <div className="text-muted small">{Text}</div>
                              <strong>{Text1}</strong>
                            </div>
                            <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                              <div className="text-muted small">{Price}</div>
                              <strong>{Doller}</strong>
                            </div>
                            <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2">
                              <div className="text-muted small">{Rating}</div>
                              <strong>
                                <i
                                  className={"text-warning fas fa-" + Font}
                                ></i>
                                {RatingCount}
                                <span className="text-muted">{Count}</span>
                              </strong>
                            </div>
                          </div>
                          <div className="pe-xl-5 pe-md-4 ps-md-0 px-3 mb-2 d-inline-flex d-md-none">
                            <button type="button" className="btn btn-primary">
                              Add Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="row g-3 mb-3">
                <div className="col-md-12">
                  <nav className="justify-content-end d-flex">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1">
                          Previous
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Row end  --> */}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
