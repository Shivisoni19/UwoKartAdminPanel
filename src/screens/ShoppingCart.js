import React from "react";

function ShoppingCart() {
  return (
    <div>
      {/* <!-- Body: Body --> */}
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Cart Detail</h3>
              </div>
            </div>
          </div>
          {/* <!-- Row end  --> */}
          <div className="row g-3 mb-3 justify-content-center">
            <div className="col-lg-12 col-xl-12 col-xxl-9">
              <div className="card">
                <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                  <h6 className="m-0 fw-bold">Order Summary</h6>
                </div>
                <div className="card-body">
                  <div className="product-cart">
                    <div className="checkout-table">
                      <div className="table-responsive">
                        <table
                          id="myCartTable"
                          className="table display dataTable table-hover align-middle"
                          style={{ Width: "100%" }}
                        >
                          <thead>
                            <tr>
                              <th className="product">Product Image</th>
                              <th>Product Name</th>
                              <th className="quantity">Quantity</th>
                              <th className="price">Price</th>
                              <th className="action">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="assets/images/product/product-1.jpg"
                                  className="avatar rounded lg"
                                  alt="Product"
                                />
                              </td>
                              <td>
                                <h6 className="title">
                                  Oculus VR{" "}
                                  <span className="d-block fs-6 text-primary">
                                    Pr-1204
                                  </span>
                                </h6>
                              </td>
                              <td>
                                <input
                                  type="number"
                                  value="1"
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <p className="price">$149.00</p>
                              </td>
                              <td>
                                <ul className="action">
                                  <li>
                                    <a
                                      className="favorite"
                                      href="product-detail.html"
                                    >
                                      <i className="icofont-ui-edit"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="delete" href="#0">
                                      <i className="icofont-ui-delete"></i>
                                    </a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/images/product/product-2.jpg"
                                  className="avatar rounded lg"
                                  alt="Product"
                                />
                              </td>
                              <td>
                                <h6 className="title">
                                  Wall Clock{" "}
                                  <span className="d-block fs-6 text-primary">
                                    Pr-1004
                                  </span>
                                </h6>
                              </td>
                              <td>
                                <input
                                  type="number"
                                  value="1"
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <p className="price">$399.00</p>
                              </td>
                              <td>
                                <ul className="action">
                                  <li>
                                    <a
                                      className="favorite"
                                      href="product-detail.html"
                                    >
                                      <i className="icofont-ui-edit"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="delete" href="#0">
                                      <i className="icofont-ui-delete"></i>
                                    </a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/images/product/product-3.jpg"
                                  className="avatar rounded lg"
                                  alt="Product"
                                />
                              </td>
                              <td>
                                <h6 className="title">
                                  Note Diaries{" "}
                                  <span className="d-block fs-6 text-primary">
                                    Pr-1224
                                  </span>
                                </h6>
                              </td>
                              <td>
                                <input
                                  type="number"
                                  value="1"
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <p className="price">$149.00</p>
                              </td>
                              <td>
                                <ul className="action">
                                  <li>
                                    <a
                                      className="favorite"
                                      href="product-detail.html"
                                    >
                                      <i className="icofont-ui-edit"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="delete" href="#0">
                                      <i className="icofont-ui-delete"></i>
                                    </a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="assets/images/product/product-4.jpg"
                                  className="avatar rounded lg"
                                  alt="Product"
                                />
                              </td>
                              <td>
                                <h6 className="title">
                                  Flower Port{" "}
                                  <span className="d-block fs-6 text-primary">
                                    Pr-1414
                                  </span>
                                </h6>
                              </td>
                              <td>
                                <input
                                  type="number"
                                  value="1"
                                  className="form-control"
                                />
                              </td>
                              <td>
                                <p className="price">$399.00</p>
                              </td>
                              <td>
                                <ul className="action">
                                  <li>
                                    <a
                                      className="favorite"
                                      href="product-detail.html"
                                    >
                                      <i className="icofont-ui-edit"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a className="delete" href="#0">
                                      <i className="icofont-ui-delete"></i>
                                    </a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="checkout-coupon-total checkout-coupon-total-2 d-flex flex-wrap mt-2">
                      <div className="checkout-coupon">
                        <span>Apply Coupon to get discount!</span>
                        <form action="#">
                          <div className="single-form form-default d-inline-flex mt-3">
                            <div className="input-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Coupon Code"
                                aria-label="Apply Coupon"
                              />
                              <button className="btn btn-primary" type="button">
                                Apply
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="checkout-total">
                        <div className="single-total">
                          <p className="value">Subotal Price:</p>
                          <p className="price">$1096.00</p>
                        </div>
                        <div className="single-total">
                          <p className="value">Shipping Cost (+):</p>
                          <p className="price">$12.00</p>
                        </div>
                        <div className="single-total">
                          <p className="value">Discount (-):</p>
                          <p className="price">$10.00</p>
                        </div>
                        <div className="single-total">
                          <p className="value">Tax(18%):</p>
                          <p className="price">$198.00</p>
                        </div>
                        <div className="single-total total-payable">
                          <p className="value">Total Payable:</p>
                          <p className="price">$1296.00</p>
                        </div>
                      </div>
                    </div>
                    <div className="checkout-btn d-flex justify-content-between pt-3 flex-wrap mt-2">
                      <div className="single-btn w-sm-100">
                        <a
                          href="product-grid.html"
                          className="btn btn-secondary w-sm-100"
                        >
                          Continue Shopping
                        </a>
                      </div>
                      <div className="single-btn w-sm-100">
                        <a
                          href="checkout.html"
                          className="btn btn-primary w-sm-100"
                        >
                          Proceed to Checkout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
