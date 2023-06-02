import React from "react";
import CheckoutDetails from "../components/CheckoutDetails";
import CheckoutPricing from "../components/CheckoutPricing";

function CheckOut() {
  return (
    <div>
      {/* <!-- Body: Body --> */}
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Checkout Details</h3>
              </div>
            </div>
          </div>
          {/* <!-- Row end  --> */}
          <div className="row g-3 mb-3">
            <div className="col-lg-12 col-xl-8">
              <CheckoutDetails />
            </div>
            <div className="col-lg-12 col-xl-4">
              <CheckoutPricing />
            </div>
          </div>
          {/* <!-- Row end  --> */}
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
