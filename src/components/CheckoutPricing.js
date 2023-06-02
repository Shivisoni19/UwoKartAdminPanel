import React from "react";

function CheckoutPricing() {
  return (
    <div>
      <div className="card  mb-3">
        <div className="card-body">
          <div className="checkout-sidebar">
            <div className="checkout-sidebar-price-table mt-30">
              <h5 className="title fw-bold">Pricing</h5>
              <div className="sub-total-price">
                <div className="total-price">
                  <p className="value">Subotal Price:</p>
                  <p className="price">$1096.00</p>
                </div>
                <div className="total-price shipping">
                  <p className="value">Shipping Cost:</p>
                  <p className="price">$12.00</p>
                </div>
                <div className="total-price discount">
                  <p className="value">Discount Price:</p>
                  <p className="price">$10.00</p>
                </div>
                <div className="total-price">
                  <p className="value">Tax(18%):</p>
                  <p className="price">$198.00</p>
                </div>
              </div>
              <div className="total-payable">
                <div className="payable-price">
                  <p className="value fw-bold">Total Payable:</p>
                  <p className="price fw-bold">$1296.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
          <div className="form-check d-flex align-items-center">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label
              className="form-check-label fw-bold d-flex align-items-center"
              for="flexRadioDefault1"
            >
              <i className="icofont-mastercard-alt fs-3 mx-2"></i> Debit/Credit
              Card
            </label>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3 align-items-center">
              <div className="col-md-12">
                <label className="form-label">Enter Card Number</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Valid Date</label>
                <input type="date" className="form-control w-100" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">CVV</label>
                <input type="text" className="form-control" required />
              </div>
            </div>
          </form>
        </div>
        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0 align-items-center">
          <div className="form-check d-flex align-items-center">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label
              className="form-check-label fw-bold d-flex align-items-center"
              for="flexRadioDefault2"
            >
              <i className="icofont-world fs-3 mx-2"></i> Net Banking
            </label>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="row g-3 align-items-center">
              <div className="col-md-12">
                <label className="form-label">Enter Your Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-12">
                <label className="form-label">Account Number</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Bank Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="col-md-6">
                <label for="admittime1" className="form-label">
                  IFC Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="admittime1"
                  required
                />
              </div>
            </div>
            <a
              href="invoices.html"
              className="btn btn-primary mt-4 text-uppercase"
            >
              Pay Now
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPricing;
