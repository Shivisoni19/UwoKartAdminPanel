import React from "react";

function ProductAdd() {
  return (
    <div>
      {/* <!-- Body: Body --> */}
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Products Add</h3>
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
              <div className="sticky-lg-top">
                <div className="card mb-3">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Pricing Info</h6>
                  </div>
                  <div className="card-body">
                    <div className="row g-3 align-items-center">
                      <div className="col-md-12">
                        <label className="form-label">Product Price Old</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">Product Price New</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">Product Coupon</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Visibility Status</h6>
                  </div>
                  <div className="card-body">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="couponsstatus"
                        checked
                      />
                      <label className="form-check-label">Published</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="couponsstatus"
                      />
                      <label className="form-check-label">Scheduled</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="couponsstatus"
                      />
                      <label className="form-check-label">Hidden</label>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Size</h6>
                  </div>
                  <div className="card-body">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="sizechek1"
                      />
                      <label className="form-check-label" for="sizechek1">
                        XS
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="sizechek2"
                      />
                      <label className="form-check-label" for="sizechek2">
                        S
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="sizechek3"
                      />
                      <label className="form-check-label" for="sizechek3">
                        M
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="sizechek4"
                      />
                      <label className="form-check-label" for="sizechek4">
                        L
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="sizechek5"
                      />
                      <label className="form-check-label" for="sizechek5">
                        XL
                      </label>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Publish Schedule</h6>
                  </div>
                  <div className="card-body">
                    <div className="row g-3 align-items-center">
                      <div className="col-md-12">
                        <label className="form-label">Publish Date</label>
                        <input type="date" className="form-control w-100" />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">Publish Time</label>
                        <input type="time" className="form-control w-100" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Tags</h6>
                  </div>
                  <div className="card-body">
                    <div className="form-group demo-tagsinput-area">
                      <div className="form-line">
                        <input
                          type="text"
                          className="form-control"
                          data-role="tagsinput"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Categories</h6>
                  </div>
                  <div className="card-body">
                    <label className="form-label">Categories Select</label>
                    <select
                      className="form-select"
                      size="3"
                      aria-label="size 3 select example"
                    >
                      <option value="1">Watch</option>
                      <option value="2">Clothes</option>
                      <option value="3">Toy</option>
                      <option value="4">Cosmetic</option>
                      <option value="5">Laptop</option>
                      <option value="6">Mobile</option>
                      <option value="7">Gaming accessories</option>
                    </select>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Inventory Info</h6>
                  </div>
                  <div className="card-body">
                    <div className="row g-3 align-items-center">
                      <div className="col-md-12">
                        <label className="form-label">SKU</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">
                          Total Stock Quantity
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-3">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 className="mb-0 fw-bold ">Basic information</h6>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row g-3 align-items-center">
                      <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Page Title</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">
                          Product Identifier URL
                        </label>
                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            https://eBazar.com/
                          </span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">
                          Product Description
                        </label>
                        <div id="editor">
                          <h4>Enter Product Description Here</h4>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
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
                                          src="assets/images/product/upload.png"
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
                                      placeholder="Product tag name"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="color"
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <div className="product-quantity d-inline-flex">
                                      <input type="number" />
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
                                          src="assets/images/product/upload.png"
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
                                      placeholder="Product tag name"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="color"
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <div className="product-quantity d-inline-flex">
                                      <input type="number" />
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
                                          src="assets/images/product/upload.png"
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
                                      placeholder="Product tag name"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="color"
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <div className="product-quantity d-inline-flex">
                                      <input type="number" />
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
                                          src="assets/images/product/upload.png"
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
                                      placeholder="Product tag name"
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="color"
                                      className="form-control"
                                    />
                                  </td>
                                  <td>
                                    <div className="product-quantity d-inline-flex">
                                      <input type="number" />
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
              <div className="card">
                <div className="card-header py-3 bg-transparent border-bottom-0">
                  <h6 className="m-0 fw-bold">Cropped Images</h6>
                  <small>
                    If You Cropped Images Please Upload and croppd easily.
                  </small>
                </div>
                <div className="card-body">
                  <div className="row g-3 mb-3">
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <div className="img-container">
                        <img
                          id="image"
                          src="assets/images/product/cropimg-upload.jpg"
                          className="img-responsive"
                          alt="Picture"
                        />
                      </div>
                    </div>
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <div className="docs-preview clearfix">
                        <div className="img-preview preview-lg"></div>
                        <div className="img-preview preview-md"></div>
                        <div className="img-preview preview-sm"></div>
                        <div className="img-preview preview-xs"></div>
                      </div>
                      <div className="docs-data">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">X</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataX"
                            placeholder="x"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">PX</span>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Y</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataY"
                            placeholder="y"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">PX</span>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Width</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataWidth"
                            placeholder="width"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">PX</span>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Height</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataHeight"
                            placeholder="height"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">PX</span>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Rotate</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataRotate"
                            placeholder="rotate"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">Deg</span>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">ScaleX</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataScaleX"
                            placeholder="scaleX"
                          />
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">ScaleY</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataScaleY"
                            placeholder="scaleY"
                          />
                        </div>
                        {/* <!-- /.pixels of image --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Row end  -->  */}
                  <div className="row g-3">
                    <div className="col-lg-7 col-md-12 docs-buttons">
                      {/* <!-- .btn groups --> */}
                      <button
                        type="button"
                        className="btn btn-sm btn-info"
                        data-method="setDragMode"
                        data-option="move"
                        title="Move"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("setDragMode", "move")'
                        >
                          {" "}
                          <i className="icofont-drag1"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-info"
                        data-method="setDragMode"
                        data-option="crop"
                        title="Crop"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("setDragMode", "crop")'
                        >
                          {" "}
                          <i className="icofont-crop"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-success"
                        data-method="zoom"
                        data-option="0.1"
                        title="Zoom In"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("zoom", 0.1)'
                        >
                          {" "}
                          <i className="icofont-ui-zoom-in"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-success"
                        data-method="zoom"
                        data-option="-0.1"
                        title="Zoom Out"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("zoom", -0.1)'
                        >
                          {" "}
                          <i className="icofont-ui-zoom-out"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="move"
                        data-option="-10"
                        data-second-option="0"
                        title="Move Left"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("move", -10, 0)'
                        >
                          {" "}
                          <i className="icofont-circled-left"></i>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="move"
                        data-option="10"
                        data-second-option="0"
                        title="Move Right"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("move", 10, 0)'
                        >
                          {" "}
                          <i className="icofont-circled-right"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="move"
                        data-option="0"
                        data-second-option="-10"
                        title="Move Up"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("move", 0, -10)'
                        >
                          {" "}
                          <i className="icofont-circled-up"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="move"
                        data-option="0"
                        data-second-option="10"
                        title="Move Down"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("move", 0, 10)'
                        >
                          {" "}
                          <i className="icofont-circled-down"></i>
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="rotate"
                        data-option="-45"
                        title="Rotate Left"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("rotate", -45)'
                        >
                          {" "}
                          <i className="icofont-rotation"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="rotate"
                        data-option="45"
                        title="Rotate Right"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("rotate", 45)'
                        >
                          {" "}
                          <i className="icofont-rotation"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="scaleX"
                        data-option="-1"
                        title="Flip Horizontal"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("scaleX", -1)'
                        >
                          {" "}
                          <i className="icofont-exchange"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="scaleY"
                        data-option="-1"
                        title="Flip Vertical"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("scaleY", -1)'
                        >
                          {" "}
                          <i className="icofont-expand-alt"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="crop"
                        title="Crop"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("crop")'
                        >
                          {" "}
                          <i className="icofont-checked/"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="clear"
                        title="Clear"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("clear")'
                        >
                          {" "}
                          <i className="icofont-ui-delete"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="disable"
                        title="Disable"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("disable")'
                        >
                          {" "}
                          <i className="icofont-lock"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="enable"
                        title="Enable"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("enable")'
                        >
                          {" "}
                          <i className="icofont-unlock"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="reset"
                        title="Reset"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("reset")'
                        >
                          {" "}
                          <i className="icofont-refresh"></i>{" "}
                        </span>
                      </button>
                      <label
                        className="btn btn-sm btn-secondary btn-upload"
                        for="inputImage"
                        title="Upload image file"
                      >
                        <input
                          type="file"
                          className="sr-only"
                          id="inputImage"
                          name="file"
                          accept="image/*"
                        />
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title="Import image with Blob URLs"
                        >
                          {" "}
                          <i className="icofont-upload"></i>{" "}
                        </span>
                      </label>
                      <button
                        type="button"
                        className="btn btn-sm  btn-secondary"
                        data-method="destroy"
                        title="Destroy"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("destroy")'
                        >
                          {" "}
                          <i className="icofont-power"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        data-method="getCroppedCanvas"
                        data-bs-toggle="modal"
                        data-bs-target="#getCroppedCanvasModal"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getCroppedCanvas")'
                        >
                          {" "}
                          Get Cropped Canvas{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        data-method="getCroppedCanvas"
                        data-bs-toggle="modal"
                        data-bs-target="#getCroppedCanvasModal"
                        data-option='{ "width": 160, "height": 90 }'
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getCroppedCanvas", { width: 160, height: 90 })'
                        >
                          {" "}
                          160&times;90{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        data-method="getCroppedCanvas"
                        data-bs-toggle="modal"
                        data-bs-target="#getCroppedCanvasModal"
                        data-option='{ "width": 320, "height": 180 }'
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getCroppedCanvas", { width: 320, height: 180 })'
                        >
                          {" "}
                          320&times;180{" "}
                        </span>{" "}
                      </button>

                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="getData"
                        data-option
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getData")'
                        >
                          {" "}
                          Get Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="setData"
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("setData", data)'
                        >
                          {" "}
                          Set Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="getContainerData"
                        data-option
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getContainerData")'
                        >
                          {" "}
                          Get Container Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="getImageData"
                        data-option
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getImageData")'
                        >
                          {" "}
                          Get Image Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="getCanvasData"
                        data-option
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getCanvasData")'
                        >
                          {" "}
                          Get Canvas Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="setCanvasData"
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("setCanvasData", data)'
                        >
                          {" "}
                          Set Canvas Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="getCropBoxData"
                        data-option
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getCropBoxData")'
                        >
                          {" "}
                          Get Crop Box Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="setCropBoxData"
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("setCropBoxData", data)'
                        >
                          {" "}
                          Set Crop Box Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="moveTo"
                        data-option="0"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title="cropper.moveTo(0)"
                        >
                          {" "}
                          0,0{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="zoomTo"
                        data-option="1"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title="cropper.zoomTo(1)"
                        >
                          {" "}
                          100%{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="rotateTo"
                        data-option="180"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title="cropper.rotateTo(180)"
                        >
                          {" "}
                          180°{" "}
                        </span>{" "}
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        id="putData"
                        placeholder="Get data to here or set data with this value"
                      />
                    </div>
                    <div className="col-lg-5 col-md-12 docs-toggles">
                      {/* <!-- .btn groups --> */}
                      <div
                        className="btn-group btn-group-justified"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-secondary active">
                          <input
                            type="radio"
                            className="sr-only"
                            id="aspectRatio0"
                            name="aspectRatio"
                            value="1.7777777777777777"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="aspectRatio: 16 / 9"
                          >
                            {" "}
                            16:9{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="aspectRatio1"
                            name="aspectRatio"
                            value="1.3333333333333333"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="aspectRatio: 4 / 3"
                          >
                            {" "}
                            4:3{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="aspectRatio2"
                            name="aspectRatio"
                            value="1"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="aspectRatio: 1 / 1"
                          >
                            {" "}
                            1:1{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="aspectRatio3"
                            name="aspectRatio"
                            value="0.6666666666666666"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="aspectRatio: 2 / 3"
                          >
                            {" "}
                            2:3{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="aspectRatio4"
                            name="aspectRatio"
                            value="NaN"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="aspectRatio: NaN"
                          >
                            {" "}
                            Free{" "}
                          </span>{" "}
                        </label>
                      </div>
                      <div
                        className="btn-group btn-group-justified"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-secondary active">
                          <input
                            type="radio"
                            className="sr-only"
                            id="viewMode0"
                            name="viewMode"
                            value="0"
                            checked
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="View Mode 0"
                          >
                            {" "}
                            VM0{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="viewMode1"
                            name="viewMode"
                            value="1"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="View Mode 1"
                          >
                            {" "}
                            VM1{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="viewMode2"
                            name="viewMode"
                            value="2"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="View Mode 2"
                          >
                            {" "}
                            VM2{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="viewMode3"
                            name="viewMode"
                            value="3"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="View Mode 3"
                          >
                            {" "}
                            VM3{" "}
                          </span>{" "}
                        </label>
                      </div>
                      <div className="dropdown dropup docs-options">
                        <button
                          type="button"
                          className="btn btn-success btn-block dropdown-toggle"
                          id="toggleOptions"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          {" "}
                          Toggle Options <span className="caret"></span>{" "}
                        </button>

                        <ul
                          className="dropdown-menu"
                          aria-labelledby="toggleOptions"
                          role="menu"
                        >
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="responsive"
                                checked
                              />{" "}
                              responsive{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="restore" checked />{" "}
                              restore{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="checkCrossOrigin"
                                checked
                              />{" "}
                              checkCrossOrigin{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="checkOrientation"
                                checked
                              />{" "}
                              checkOrientation{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="modal" checked />{" "}
                              modal{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="guides" checked />{" "}
                              guides{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="center" checked />{" "}
                              center{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="highlight" checked />{" "}
                              highlight{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="background"
                                checked
                              />{" "}
                              background{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="autoCrop" checked />{" "}
                              autoCrop{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="movable" checked />{" "}
                              movable{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="rotatable" checked />{" "}
                              rotatable{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="scalable" checked />{" "}
                              scalable{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="zoomable" checked />{" "}
                              zoomable{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="zoomOnTouch"
                                checked
                              />{" "}
                              zoomOnTouch{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="zoomOnWheel"
                                checked
                              />{" "}
                              zoomOnWheel{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="cropBoxMovable"
                                checked
                              />{" "}
                              cropBoxMovable{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="cropBoxResizable"
                                checked
                              />{" "}
                              cropBoxResizable{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="toggleDragModeOnDblclick"
                                checked
                              />{" "}
                              toggleDragModeOnDblclick{" "}
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Row end  -->  */}
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

export default ProductAdd;
