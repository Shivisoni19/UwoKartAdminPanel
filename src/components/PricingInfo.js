import React from "react";

function PricingInfo() {
  return (
    <div>
      <div className="sticky-lg-top">
        <div className="card mb-3">
          <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 className="m-0 fw-bold">Pricing Info</h6>
          </div>
          <div className="card-body">
            <div className="row g-3 align-items-center">
              <div className="col-md-12">
                <label className="form-label">Product Price Old</label>
                <input type="text" className="form-control" value="$350" />
              </div>
              <div className="col-md-12">
                <label className="form-label">Product Price New</label>
                <input type="text" className="form-control" value="$355" />
              </div>
              <div className="col-md-12">
                <label className="form-label">Product Coupon</label>
                <input
                  type="text"
                  className="form-control"
                  value="BATTT-XA47"
                />
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
                checked
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
                <input
                  type="date"
                  className="form-control w-100"
                  value="2021-03-28"
                />
              </div>
              <div className="col-md-12">
                <label className="form-label">Publish Time</label>
                <input
                  type="time"
                  className="form-control w-100"
                  value="10:30"
                />
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
                  value="Amsterdam,Washington,Sydney,Beijing,Cairo"
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
              <option selected>Gaming accessories</option>
              <option value="1">Watch</option>
              <option value="2">Clothes</option>
              <option value="3">Toy</option>
              <option value="4">Cosmetic</option>
              <option value="5">Laptop</option>
              <option value="6">Mobile</option>
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
                <input type="text" className="form-control" value="SKUN111" />
              </div>
              <div className="col-md-12">
                <label className="form-label">Total Stock Quantity</label>
                <input type="text" className="form-control" value="1455" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingInfo;
