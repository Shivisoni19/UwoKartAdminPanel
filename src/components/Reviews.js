import React from "react";

function Reviews() {
  return (
    <div>
      <div className="card-body">
        <div className="row clearfix g-3">
          <div className="col-lg-4 col-md-12">
            <div className="feedback-info sticky-top">
              <div className="card">
                <div className="card-body">
                  <h2 className=" display-6 fw-bold mb-0">4.5</h2>
                  <small className="text-muted">based on 1,032 ratings</small>
                  <div className="d-flex align-items-center">
                    <span className="mb-2 me-3">
                      <a href="#" className="rating-link active">
                        <i className="bi bi-star-fill text-warning"></i>
                      </a>
                      <a href="#" className="rating-link active">
                        <i className="bi bi-star-fill text-warning"></i>
                      </a>
                      <a href="#" className="rating-link active">
                        <i className="bi bi-star-fill text-warning"></i>
                      </a>
                      <a href="#" className="rating-link active">
                        <i className="bi bi-star-fill text-warning"></i>
                      </a>
                      <a href="#" className="rating-link active">
                        <i className="bi bi-star-half text-warning"></i>
                      </a>
                    </span>
                  </div>
                  <div className="progress-count mt-2">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h6 className="mb-0 fw-bold d-flex align-items-center">
                        5
                        <i className="bi bi-star-fill text-warning ms-1 small-11 pb-1"></i>
                      </h6>
                      <span className="small text-muted">661</span>
                    </div>
                    <div className="progress" style={{ Height: "10px" }}>
                      <div
                        className="progress-bar light-success-bg"
                        role="progressbar"
                        style={{ Width: "92%" }}
                        aria-valuenow="92"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-count mt-2">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h6 className="mb-0 fw-bold d-flex align-items-center">
                        4
                        <i className="bi bi-star-fill text-warning ms-1 small-11 pb-1"></i>
                      </h6>
                      <span className="small text-muted">237</span>
                    </div>
                    <div className="progress" style={{ Height: "10px" }}>
                      <div
                        className="progress-bar bg-info-light"
                        role="progressbar"
                        style={{ Width: "60%" }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-count mt-2">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h6 className="mb-0 fw-bold d-flex align-items-center">
                        3
                        <i className="bi bi-star-fill text-warning ms-1 small-11 pb-1"></i>
                      </h6>
                      <span className="small text-muted">76</span>
                    </div>
                    <div className="progress" style={{ Height: "10px" }}>
                      <div
                        className="progress-bar bg-lightyellow"
                        role="progressbar"
                        style={{ Width: "40%" }}
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-count mt-2">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h6 className="mb-0 fw-bold d-flex align-items-center">
                        2
                        <i className="bi bi-star-fill text-warning ms-1 small-11 pb-1"></i>
                      </h6>
                      <span className="small text-muted">19</span>
                    </div>
                    <div className="progress" style={{ Height: "10px" }}>
                      <div
                        className="progress-bar light-danger-bg "
                        role="progressbar"
                        style={{ Width: "15%" }}
                        aria-valuenow="15"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="progress-count mt-2">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <h6 className="mb-0 fw-bold d-flex align-items-center">
                        1
                        <i className="bi bi-star-fill text-warning ms-1 small-11 pb-1"></i>
                      </h6>
                      <span className="small text-muted">39</span>
                    </div>
                    <div className="progress" style={{ Height: "10px" }}>
                      <div
                        className="progress-bar bg-careys-pink"
                        role="progressbar"
                        style={{ Width: "10%" }}
                        aria-valuenow="10"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="customer-like mt-5">
                    <h6 className="mb-0 fw-bold ">What Customers Like</h6>
                    <ul className="list-group mt-3">
                      <li className="list-group-item d-flex">
                        <div className="number border-end pe-2 fw-bold">
                          <strong className="color-light-success">1</strong>
                        </div>
                        <div className="cs-text flex-fill ps-2">
                          <span>Fun Factor</span>
                        </div>
                        <div className="vote-text">
                          <span className="text-muted">72 votes</span>
                        </div>
                      </li>
                      <li className="list-group-item d-flex">
                        <div className="number border-end pe-2 fw-bold">
                          <strong className="color-light-success">2</strong>
                        </div>
                        <div className="cs-text flex-fill ps-2">
                          <span>Great Value</span>
                        </div>
                        <div className="vote-text">
                          <span className="text-muted">52 votes</span>
                        </div>
                      </li>
                      <li className="list-group-item d-flex">
                        <div className="number border-end pe-2 fw-bold">
                          <strong className="color-light-success">3</strong>
                        </div>
                        <div className="cs-text flex-fill ps-2">
                          <span>eBazar</span>
                        </div>
                        <div className="vote-text">
                          <span className="text-muted">35 votes</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="customer-like mt-5">
                    <h6 className="mb-0 fw-bold ">What Need Improvement</h6>
                    <ul className="list-group mt-3">
                      <li className="list-group-item d-flex">
                        <div className="number border-end pe-2 fw-bold">
                          <strong className="color-careys-pink">1</strong>
                        </div>
                        <div className="cs-text flex-fill ps-2">
                          <span>Value for Money</span>
                        </div>
                        <div className="vote-text">
                          <span className="text-muted">12 votes</span>
                        </div>
                      </li>
                      <li className="list-group-item d-flex">
                        <div className="number border-end pe-2 fw-bold">
                          <strong className="color-careys-pink">2</strong>
                        </div>
                        <div className="cs-text flex-fill ps-2">
                          <span>Customer service</span>
                        </div>
                        <div className="vote-text">
                          <span className="text-muted">8 votes</span>
                        </div>
                      </li>
                      <li className="list-group-item d-flex">
                        <div className="number border-end pe-2 fw-bold">
                          <strong className="color-careys-pink">3</strong>
                        </div>
                        <div className="cs-text flex-fill ps-2">
                          <span>Product Item</span>
                        </div>
                        <div className="vote-text">
                          <span className="text-muted">2 votes</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <ul className="list-unstyled mb-4">
              <li className="card mb-2">
                <div className="card-body p-lg-4 p-3">
                  <div className="d-flex mb-3 pb-3 border-bottom flex-wrap">
                    <img
                      className="avatar rounded"
                      src="assets/images/xs/avatar9.svg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="mb-0">
                        <span>Joan Dyer</span>
                      </h6>
                      <span className="text-muted">3 hours ago</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="mb-2 me-3">
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-fill text-warning"></i>
                        </a>
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-fill text-warning"></i>
                        </a>
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-fill text-warning"></i>
                        </a>
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-fill text-warning"></i>
                        </a>
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-half text-warning"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="timeline-item-post">
                    <h6 className="">Top-Oculus VR</h6>
                    <p>
                      {" "}
                      A good fit for many households, this Oculus VR has a
                      movable deli drawer and door shelves that can accommodate
                      gallon containers.Though its low price means fewer
                      features, this pick is quiet and an energy-saving option,
                      resulting in a lower energy bill.
                    </p>
                  </div>
                </div>
              </li>
              {/* <!-- .Card End --> */}
              <li className="card mb-2">
                <div className="card-body p-lg-4 p-3">
                  <div className="d-flex mb-3 pb-3 border-bottom flex-wrap">
                    <img
                      className="avatar rounded"
                      src="assets/images/xs/avatar2.svg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="mb-0">
                        <span>Phil Glover</span>
                      </h6>
                      <span className="text-muted">1 Day ago</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="mb-2 me-3">
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-fill text-warning"></i>
                        </a>
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-fill text-warning"></i>
                        </a>
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-fill text-warning"></i>
                        </a>
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-fill text-warning"></i>
                        </a>
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-half text-warning"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="timeline-item-post">
                    <h6 className="">Oculus VR Full 3D</h6>
                    <p>
                      I purchased this Oculus from elsewhere, on last Dipawali.
                      As this Oculus contains in-built DDB( means you need not
                      to install a separate set-top box), there is less number
                      of wire hanging around the set and single remote required.
                      Great full HD picture quality. Sound quality of the set is
                      far better than most of the sets of the so called big
                      brands.
                    </p>
                  </div>
                </div>
              </li>
              {/* <!-- .Card End --> */}
              <li className="card mb-2">
                <div className="card-body p-lg-4 p-3">
                  <div className="d-flex mb-3 pb-3 border-bottom flex-wrap">
                    <img
                      className="avatar rounded"
                      src="assets/images/xs/avatar3.svg"
                      alt=""
                    />
                    <div className="flex-fill ms-3 text-truncate">
                      <h6 className="mb-0">
                        <span>Victor Rampling</span>
                      </h6>
                      <span className="text-muted">5 Day ago</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="mb-2 me-3">
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-fill text-warning"></i>
                        </a>
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-fill text-warning"></i>
                        </a>
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-fill text-warning"></i>
                        </a>
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-fill text-warning"></i>
                        </a>
                        <a href="#" className="rating-link active">
                          <i className="bi bi-star-half text-warning"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="timeline-item-post">
                    <h6 className="">Oculus VR Wireless Bluetooth</h6>
                    <p>
                      The build quality feels really premium.Sound quality is
                      quite great compared to its price point.Sound quality is
                      quite great compared to its price point.
                    </p>
                    <div>
                      <div className="d-flex mt-3 pt-3 border-top">
                        <img
                          className="avatar rounded"
                          src="assets/images/xs/avatar12.svg"
                          alt=""
                        />
                        <div className="flex-fill ms-3 text-truncate">
                          <p className="mb-0">
                            <span>Karen Clark</span>{" "}
                            <small className="msg-time text-muted">
                              5 Day ago
                            </small>
                          </p>
                          <span className="text-muted">
                            Hd quality is quite great compared to its price
                            point.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <textarea
                        className="form-control"
                        placeholder="Replay"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- .Card End --> */}
            </ul>
            <nav aria-label="...">
              <ul className="pagination justify-content-end">
                <li className="page-item disabled">
                  <span className="page-link">Previous</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <span className="page-link">2</span>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <!-- Row End --> */}
      </div>
    </div>
  );
}

export default Reviews;
