import React from "react";

function CheckoutDetails() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="checkout-steps">
            <ul id="accordionExample">
              <li>
                <section>
                  <h6
                    className="title collapsed fw-bold"
                    id="headingOne"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Your Personal Details{" "}
                  </h6>
                  <div
                    className="checkout-steps-form-content collapse show"
                    id="collapseOne"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <form className="mt-3">
                      <div className="row g-3 align-items-center">
                        <div className="col-md-6">
                          <label for="firstname1" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname1"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="lastname1" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname1"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="phonenumber1" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phonenumber1"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="emailaddress1" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="emailaddress1"
                            required
                          />
                        </div>
                        <div className="col-md-12">
                          <label className="form-label">Shipping Address</label>
                          <input
                            type="email"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="cityblock1" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cityblock1"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="postcode1" className="form-label">
                            Post Code
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="postcode1"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Country</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Country Option</option>
                            <option value="1">India</option>
                            <option value="2">Australia</option>
                            <option value="3">Italy</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">State</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>State Option</option>
                            <option value="1">Gujrat</option>
                            <option value="2">Kerela</option>
                            <option value="3">Rajesthan</option>
                          </select>
                        </div>
                        <div className="col-md-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecke/d1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              for="flexCheckChecked1"
                            >
                              My delivery and Shipping addresses are the same.
                            </label>
                          </div>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary mt-4 px-5 text-uppercase"
                      >
                        Save
                      </button>
                    </form>
                  </div>
                </section>
              </li>
              <li>
                <section>
                  <h6
                    className="title collapsed fw-bold"
                    id="headingTwo"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Shipping Address
                  </h6>
                  <div
                    className="checkout-steps-form-content collapse"
                    id="collapseTwo"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <form className="mt-3">
                      <div className="row g-3 align-items-center">
                        <div className="col-md-6">
                          <label for="firstname" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstname"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="lastname" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="phonenumber" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phonenumber"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="emailaddress" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="emailaddress"
                            required
                          />
                        </div>
                        <div className="col-md-12">
                          <label className="form-label">Shipping Address</label>
                          <input
                            type="email"
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="cityblock" className="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cityblock"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label for="postcode" className="form-label">
                            Post Code
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="postcode"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Country</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Country Option</option>
                            <option value="1">India</option>
                            <option value="2">Australia</option>
                            <option value="3">Italy</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">State</label>
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>State Option</option>
                            <option value="1">Gujrat</option>
                            <option value="2">Kerela</option>
                            <option value="3">Rajesthan</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="checkout-payment-option mt-4">
                          <h6 className="form-label mb-0">
                            Select Delivery Option
                          </h6>
                          <div className="payment-option-wrapper">
                            <div className="single-payment-option">
                              <input
                                type="radio"
                                name="shipping"
                                checked=""
                                id="shipping-1"
                              />
                              <label for="shipping-1">
                                <img
                                  src="assets/images/product/shipping-4.png"
                                  alt="Sipping"
                                />
                                <span className="s-info">
                                  Standerd Shipping
                                </span>
                                <span className="price">$12.00</span>
                              </label>
                            </div>
                            <div className="single-payment-option">
                              <input
                                type="radio"
                                name="shipping"
                                id="shipping-2"
                              />
                              <label for="shipping-2">
                                <img
                                  src="assets/images/product/shipping-3.png"
                                  alt="Sipping"
                                />
                                <span className="s-info">
                                  Standerd Shipping
                                </span>
                                <span className="price">$10.00</span>
                              </label>
                            </div>
                            <div className="single-payment-option">
                              <input
                                type="radio"
                                name="shipping"
                                id="shipping-3"
                              />
                              <label for="shipping-3">
                                <img
                                  src="assets/images/product/shipping-2.png"
                                  alt="Sipping"
                                />
                                <span className="s-info">
                                  Standerd Shipping
                                </span>
                                <span className="price">$11.00</span>
                              </label>
                            </div>
                            <div className="single-payment-option">
                              <input
                                type="radio"
                                name="shipping"
                                id="shipping-4"
                              />
                              <label for="shipping-4">
                                <img
                                  src="assets/images/product/shipping-1.png"
                                  alt="Sipping"
                                />
                                <span className="s-info">
                                  Standerd Shipping
                                </span>
                                <span className="price">$18.00</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="steps-form-btn">
                          <a
                            href="#"
                            className="btn btn-primary px-5 text-uppercase"
                          >
                            Save
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutDetails;
