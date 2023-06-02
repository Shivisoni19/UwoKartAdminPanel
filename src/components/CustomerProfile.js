import React from "react";

function CustomerProfile() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-1 row-deck g-3">
        <div className="col">
          <div className="card profile-card">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
              <h6 className="mb-0 fw-bold ">Profile</h6>
            </div>
            <div className="card-body d-flex profile-fulldeatil flex-column">
              <div className="profile-block text-center w220 mx-auto">
                <a href="#">
                  <img
                    src="assets/images/lg/avatar4.svg"
                    alt=""
                    className="avatar xl rounded img-thumbnail shadow-sm"
                  />
                </a>
                <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                  <span className="text-muted small">ID : #CS-00002</span>
                </div>
              </div>
              <div className="profile-info w-100">
                <h6 className="mb-0 mt-2  fw-bold d-block fs-6 text-center">
                  {" "}
                  Joan Dyer
                </h6>
                <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted text-center mx-auto d-block">
                  24 years, California
                </span>
                <p className="mt-2">
                  Duis felis ligula, pharetra at nisl sit amet, ullamcorper
                  fringilla mi. Cras luctus metus non enim porttitor sagittis.
                  Sed tristique scelerisque arcu id dignissim.
                </p>
                <div className="row g-2 pt-2">
                  <div className="col-xl-12">
                    <div className="d-flex align-items-center">
                      <i className="icofont-ui-touch-phone"></i>
                      <span className="ms-2">202-555-0174 </span>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="d-flex align-items-center">
                      <i className="icofont-email"></i>
                      <span className="ms-2">adrianallan@gmail.com</span>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="d-flex align-items-center">
                      <i className="icofont-birthday-cake"></i>
                      <span className="ms-2">19/03/1980</span>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="d-flex align-items-center">
                      <i className="icofont-address-book"></i>
                      <span className="ms-2">
                        2734 West Fork Street,EASTON 02334.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
              <h6 className="mb-0 fw-bold ">Expence Count</h6>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-end text-center">
                <div className="p-2">
                  <h6 className="mb-0 fw-bold">$1790</h6>
                  <span className="text-muted">Total</span>
                </div>
                <div className="p-2 ms-4">
                  <h6 className="mb-0 fw-bold">$149.16</h6>
                  <span className="text-muted">Avg Month</span>
                </div>
              </div>
              <div id="apex-circle-gradient"></div>
              <div className="row">
                <div className="col">
                  <span className="mb-3 d-block">Food</span>
                  <div
                    className="progress-bar  bg-secondary"
                    role="progressbar"
                    style={{ Width: "55%", Height: "5px" }}
                  ></div>
                  <span className="mt-2 d-block text-secondary">
                    $597 spend
                  </span>
                </div>
                <div className="col">
                  <span className="mb-3 d-block">Cloth</span>
                  <div
                    className="progress-bar  bg-primary"
                    role="progressbar"
                    style={{ Width: "60%", Height: "5px" }}
                  ></div>
                  <span className="mt-2 d-block text-primary">$845 spend</span>
                </div>
                <div className="col">
                  <span className="mb-3 d-block">Other</span>
                  <div
                    className="progress-bar  bg-lavender-purple"
                    role="progressbar"
                    style={{ Width: "70%", Height: "5px" }}
                  ></div>
                  <span className="mt-2 d-block color-lavender-purple">
                    $348 spend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-3">
        <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
          <h6 className="mb-0 fw-bold ">Status report</h6>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mb-0">
            <li className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0">54</h6>
                <span className="small text-muted">Product Visit</span>
              </div>
              <div className="progress" style={{ Height: "2px" }}>
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="87"
                  data-transitiongoal="87"
                  style={{ Width: "87%" }}
                ></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0">27</h6>
                <span className="small text-muted">Product Buy</span>
              </div>
              <div className="progress" style={{ Height: "2px" }}>
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="34"
                  data-transitiongoal="34"
                  style={{ Width: "34%" }}
                ></div>
              </div>
            </li>
            <li className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0">102</h6>
                <span className="small text-muted">Comment on Product</span>
              </div>
              <div className="progress" style={{ Height: "2px" }}>
                <div
                  className="progress-bar bg-primary"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="14"
                  data-transitiongoal="14"
                  style={{ Width: "14%" }}
                ></div>
              </div>
            </li>
            <li className="mb-0">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="mb-0">1024 Hours</h6>
                <span className="small text-muted">Total spent time</span>
              </div>
              <div className="progress" style={{ Height: "2px" }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="67"
                  data-transitiongoal="67"
                  style={{ Width: "67%" }}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CustomerProfile;
