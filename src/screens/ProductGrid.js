import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductsFilter from "../components/ProductsFilter";
import { ProductGridApi } from "../ContentAPI/ProductGridApi";

function ProductGrid() {
  const [state, setstate] = useState(ProductGridApi);
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
                    className="btn active d-inline-flex align-items-center"
                    aria-current="page"
                  >
                    <i className="icofont-wall px-2 fs-5"></i>Grid View
                  </Link>
                  <Link
                    to="/ProductList"
                    className="btn d-inline-flex align-items-center"
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
              <div className="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-3">
                {ProductGridApi.map((cureElem) => {
                  const { id, Img, Font, Review, TopHeading, Heading, Price } =
                    cureElem;
                  return (
                    <div className="col">
                      <div className="card">
                        <div className="product">
                          <div className="product-image">
                            <div className="product-item active">
                              <img
                                src={Img}
                                alt="product"
                                className="img-fluid w-100"
                              />
                            </div>
                          </div>
                          <div className="product-content p-3">
                            <span className="rating mb-2 d-block">
                              <i
                                className={"text-warning fas fa-" + Font}
                                style={{ marginRight: "5px" }}
                              ></i>
                              {Review}
                            </span>
                            <a href="product-detail.html" className="fw-bold">
                              {TopHeading}
                            </a>
                            <p className="text-muted">{Heading}</p>
                            <span className="d-block fw-bold fs-5 text-secondary">
                              {Price}
                            </span>
                            <a
                              href="product-cart.html"
                              className="btn btn-primary mt-3"
                            >
                              Add to Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row g-3 mb-3">
                <div className="col-md-12">
                  <nav className="justify-content-end d-flex">
                    <ul className="pagination">
                      {ProductGridApi.map((cureElem) => {
                        const { PageNo } = cureElem;
                        return (
                          <li className="page-item">
                            <a className="page-link" href="#" tabindex="-1">
                              {PageNo}
                            </a>
                          </li>
                        );
                      })}
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

export default ProductGrid;
