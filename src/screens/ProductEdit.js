import React from "react";
import BasicInfo from "../components/BasicInfo";
import PricingInfo from "../components/PricingInfo";

function ProductEdit() {
  return (
    <div>
      {/* <!-- Body: Body --> */}
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Products Edit</h3>
                <button
                  type="submit"
                  className="btn btn-primary btn-set-task w-sm-100 py-2 px-5 text-uppercase"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Row end  -->   */}

          <div className="row g-3 mb-3">
            <div className="col-xl-4 col-lg-4">
              <PricingInfo />
            </div>
            <div className="col-xl-8 col-lg-8">
              <BasicInfo />
              <div className="card mb-3">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 className="mb-0 fw-bold ">Shipping Country</h6>
                </div>
                <div className="card-body">
                  <select
                    id="optgroup"
                    className="ms w-100"
                    multiple="multiple"
                  >
                    <optgroup label="Alaskan/Hawaiian Time Zone">
                      <option value="AK">Alaska</option>
                      <option value="HI">Hawaii</option>
                    </optgroup>
                    <optgroup label="Pacific Time Zone">
                      <option value="CA">California</option>
                      <option value="NV">Nevada</option>
                      <option value="OR">Oregon</option>
                      <option value="WA">Washington</option>
                    </optgroup>
                    <optgroup label="Mountain Time Zone">
                      <option value="AZ">Arizona</option>
                      <option value="CO">Colorado</option>
                      <option value="ID">Idaho</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NM">New Mexico</option>
                      <option value="ND">North Dakota</option>
                      <option value="UT">Utah</option>
                      <option value="WY">Wyoming</option>
                    </optgroup>
                    <optgroup label="Central Time Zone">
                      <option value="AL">Alabama</option>
                      <option value="AR">Arkansas</option>
                      <option value="IL">Illinois</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="OK">Oklahoma</option>
                      <option value="SD">South Dakota</option>
                      <option value="TX">Texas</option>
                      <option value="TN">Tennessee</option>
                      <option value="WI">Wisconsin</option>
                    </optgroup>
                    <optgroup label="Eastern Time Zone">
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="IN">Indiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="OH">Ohio</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WV">West Virginia</option>
                    </optgroup>
                  </select>
                </div>
              </div>
              <div className="card mb-3">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 className="mb-0 fw-bold ">Images</h6>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row g-3 align-items-center">
                      <div className="col-md-12">
                        <label className="form-label">
                          Product Images Upload
                        </label>
                        <small className="d-block text-muted mb-2">
                          Only portrait or square images, 2M max and 2000px
                          max-height.
                        </small>
                        <input
                          type="file"
                          id="input-file-to-destroy"
                          className="dropify"
                          data-allowed-formats="portrait square"
                          data-max-file-size="2M"
                          data-max-height="2000"
                          data-default-file="assets/images/product/product-1.jpg"
                        />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label w-100">
                          Select Product Color
                        </label>
                        <input type="color" id="color" />
                      </div>
                      <div className="col-md-12">
                        <div className="product-cart">
                          <div className="checkout-table table-responsive">
                            <table
                              id="myCartTable"
                              className="table display dataTable table-hover align-middle"
                              style={{ Width: "100%" }}
                            >
                              <thead>
                                <tr>
                                  <th className="product">Product</th>
                                  <th className="product">Product Tag Name</th>
                                  <th className="quantity">Color</th>
                                  <th className="quantity">Quantity</th>
                                  <th className="quantity">Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="product-cart d-flex align-items-center">
                                      <div className="product-thumb">
                                        <img
                                          src="assets/images/product/thunb-2.jpg"
                                          className="img-fluid avatar xl"
                                          alt="Product"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="Oculus VR back"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="color"
                                      className="form-control"
                                      value="#cccccc"
                                    />
                                  </td>
                                  <td>
                                    <div className="product-quantity d-inline-flex">
                                      <input type="number" value="1" />
                                    </div>
                                  </td>
                                  <td>
                                    <div
                                      className="btn-group"
                                      role="group"
                                      aria-label="Basic outlined example"
                                    >
                                      <button
                                        type="button"
                                        className="btn btn-outline-secondary deleterow"
                                      >
                                        <i className="icofont-ui-delete text-danger"></i>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="product-cart d-flex align-items-center">
                                      <div className="product-thumb">
                                        <img
                                          src="assets/images/product/thunb-3.jpg"
                                          className="img-fluid avatar xl"
                                          alt="Product"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="Oculus VR right"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="color"
                                      className="form-control"
                                      value="#426531"
                                    />
                                  </td>
                                  <td>
                                    <div className="product-quantity d-inline-flex">
                                      <input type="number" value="1" />
                                    </div>
                                  </td>
                                  <td>
                                    <div
                                      className="btn-group"
                                      role="group"
                                      aria-label="Basic outlined example"
                                    >
                                      <button
                                        type="button"
                                        className="btn btn-outline-secondary deleterow"
                                      >
                                        <i className="icofont-ui-delete text-danger"></i>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="product-cart d-flex align-items-center">
                                      <div className="product-thumb">
                                        <img
                                          src="assets/images/product/thunb-4.jpg"
                                          className="img-fluid avatar xl"
                                          alt="Product"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="Oculus VR left"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="color"
                                      className="form-control"
                                      value="#547681"
                                    />
                                  </td>
                                  <td>
                                    <div className="product-quantity d-inline-flex">
                                      <input type="number" value="1" />
                                    </div>
                                  </td>
                                  <td>
                                    <div
                                      className="btn-group"
                                      role="group"
                                      aria-label="Basic outlined example"
                                    >
                                      <button
                                        type="button"
                                        className="btn btn-outline-secondary deleterow"
                                      >
                                        <i className="icofont-ui-delete text-danger"></i>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="product-cart d-flex align-items-center">
                                      <div className="product-thumb">
                                        <img
                                          src="assets/images/product/thunb-5.jpg"
                                          className="img-fluid avatar xl"
                                          alt="Product"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value="Oculus VR Front"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="color"
                                      className="form-control"
                                      value="#45df81"
                                    />
                                  </td>
                                  <td>
                                    <div className="product-quantity d-inline-flex">
                                      <input type="number" value="1" />
                                    </div>
                                  </td>
                                  <td>
                                    <div
                                      className="btn-group"
                                      role="group"
                                      aria-label="Basic outlined example"
                                    >
                                      <button
                                        type="button"
                                        className="btn btn-outline-secondary deleterow"
                                      >
                                        <i className="icofont-ui-delete text-danger"></i>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Row end  -->  */}
        </div>
      </div>
    </div>
  );
}

export default ProductEdit;
