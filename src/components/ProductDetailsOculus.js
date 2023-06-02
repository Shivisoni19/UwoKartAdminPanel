import React from "react";

function ProductDetailsOculus() {
  return (
    <div>
      <div className="product-details-content mt-45">
        <h2 className="fw-bold fs-4">Oculus VR</h2>
        <div className="my-3">
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <i className="fa fa-star text-warning"></i>
          <span className="text-muted ms-3">(449 customer review)</span>
        </div>
        <div className="product-items flex-wrap">
          <h6 className="item-title fw-bold">Select Your Oculus</h6>
          <div className="items-wrapper" id="select-item-1">
            <div className="single-item active">
              <div className="items-image">
                <img
                  src="assets/images/product/product-items-1.jpg"
                  alt="product"
                />
              </div>
              <p className="text">Oculus Go</p>
            </div>
            <div className="single-item">
              <div className="items-image">
                <img
                  src="assets/images/product/product-items-2.jpg"
                  alt="product"
                />
              </div>
              <p className="text">Oculus Quest</p>
            </div>
            <div className="single-item">
              <div className="items-image">
                <img
                  src="assets/images/product/product-items-3.jpg"
                  alt="product"
                />
              </div>
              <p className="text">Oculus Rift S</p>
            </div>
          </div>
        </div>
        <div className="product-select-wrapper flex-wrap">
          <div className="select-item">
            <h6 className="select-title fw-bold">Select Color</h6>
            <ul className="color-select" id="select-color-1">
              <li
                style={{ backgroundColor: "#EFEFEF" }}
                className="active"
              ></li>
              <li style={{ backgroundColor: "#FAE5EC" }}></li>
              <li style={{ backgroundColor: "#4C4C4C" }}></li>
            </ul>
          </div>
        </div>
        <div className="product-price">
          <h6 className="price-title fw-bold">Price</h6>
          <p className="sale-price">$ 149 USD</p>
          <p className="regular-price text-danger">$ 179 USD</p>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="product-btn mb-5">
          <div className="d-flex flex-wrap">
            <div className="mt-2 mt-sm-0  me-1">
              <div className="input-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="1"
                  min="1"
                  max="5"
                />
                <span className="input-group-text">
                  <i className="fa fa-sort"></i>
                </span>
              </div>
            </div>
            <button className="btn btn-primary mx-1 mt-2  mt-sm-0">
              <i className="fa fa-heart me-1"></i> Addto Wishlist
            </button>
            <button className="btn btn-primary mx-1 mt-2 mt-sm-0 w-sm-100">
              <i className="fa fa-shopping-cart me-1"></i> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsOculus;
