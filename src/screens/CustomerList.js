import React from "react";

function CustomerList() {
  return (
    <div>
      {/* <!-- Body: Body -->        */}
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Customers Information</h3>
                <div className="col-auto d-flex w-sm-100">
                  <button
                    type="button"
                    className="btn btn-primary btn-set-task w-sm-100"
                    data-bs-toggle="modal"
                    data-bs-target="#expadd"
                  >
                    <i className="icofont-plus-circle me-2 fs-6"></i>Add
                    Customers
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Row end  --> */}
          <div className="row clearfix g-3">
            <div className="col-sm-12">
              <div className="card mb-3">
                <div className="card-body">
                  <table
                    id="myProjectTable"
                    className="table table-hover align-middle mb-0"
                    style={{ Width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Customers</th>
                        <th>Register Date</th>
                        <th>Mail</th>
                        <th>Phone</th>
                        <th>Country</th>
                        <th>Total Order</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>#CS-00002</strong>
                        </td>
                        <td>
                          <a href="customer-detail.html">
                            <img
                              className="avatar rounded"
                              src="assets/images/xs/avatar1.svg"
                              alt=""
                            />
                            <span className="fw-bold ms-1">Joan Dyer</span>
                          </a>
                        </td>
                        <td>12/03/2021</td>
                        <td>JoanDyer@gmail.com</td>
                        <td>202-555-0983</td>
                        <td>South Africa</td>
                        <td>18</td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              data-bs-toggle="modal"
                              data-bs-target="#expedit"
                            >
                              <i className="icofont-edit text-success"></i>
                            </button>
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
                          <strong>#CS-00006</strong>
                        </td>
                        <td>
                          <a href="customer-detail.html">
                            <img
                              className="avatar rounded"
                              src="assets/images/xs/avatar2.svg"
                              alt=""
                            />
                            <span className="fw-bold ms-1">Ryan Randall</span>
                          </a>
                        </td>
                        <td>12/03/2021</td>
                        <td>RyanRandall@gmail.com</td>
                        <td>303-555-0151</td>
                        <td>Australia</td>
                        <td>4568</td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              data-bs-toggle="modal"
                              data-bs-target="#expedit"
                            >
                              <i className="icofont-edit text-success"></i>
                            </button>
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
                          <strong>#CS-00004</strong>
                        </td>
                        <td>
                          <a href="customer-detail.html">
                            <img
                              className="avatar rounded"
                              src="assets/images/xs/avatar3.svg"
                              alt=""
                            />
                            <span className="fw-bold ms-1">Phil Glover</span>
                          </a>
                        </td>
                        <td>16/03/2021</td>
                        <td>PhilGlover@gmail.com</td>
                        <td>843-555-0175</td>
                        <td>Sri Lanka</td>
                        <td>05</td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              data-bs-toggle="modal"
                              data-bs-target="#expedit"
                            >
                              <i className="icofont-edit text-success"></i>
                            </button>
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
                          <strong>#CS-00008</strong>
                        </td>
                        <td>
                          <a href="customer-detail.html">
                            <img
                              className="avatar rounded"
                              src="assets/images/xs/avatar4.svg"
                              alt=""
                            />
                            <span className="fw-bold ms-1">
                              Victor Rampling
                            </span>
                          </a>
                        </td>
                        <td>25/02/2021</td>
                        <td>VictorRampling@gmail.com</td>
                        <td>404-555-0100</td>
                        <td>Israel</td>
                        <td>14</td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              data-bs-toggle="modal"
                              data-bs-target="#expedit"
                            >
                              <i className="icofont-edit text-success"></i>
                            </button>
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
                          <strong>#CS-00018</strong>
                        </td>
                        <td>
                          <a href="customer-detail.html">
                            <img
                              className="avatar rounded"
                              src="assets/images/xs/avatar5.svg"
                              alt=""
                            />
                            <span className="fw-bold ms-1">Sally Graham</span>
                          </a>
                        </td>
                        <td>16/02/2021</td>
                        <td>SallyGraham@gmail.com</td>
                        <td>502-555-0118</td>
                        <td>Indonesia</td>
                        <td>03</td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              data-bs-toggle="modal"
                              data-bs-target="#expedit"
                            >
                              <i className="icofont-edit text-success"></i>
                            </button>
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
                          <strong>#CS-00014</strong>
                        </td>
                        <td>
                          <a href="customer-detail.html">
                            <img
                              className="avatar rounded"
                              src="assets/images/xs/avatar6.svg"
                              alt=""
                            />
                            <span className="fw-bold ms-1">
                              Robert Anderson
                            </span>
                          </a>
                        </td>
                        <td>18/01/2021</td>
                        <td>RobertAnderson@gmail.com</td>
                        <td>502-555-0133</td>
                        <td>Malaysia</td>
                        <td>02</td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic outlined example"
                          >
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              data-bs-toggle="modal"
                              data-bs-target="#expedit"
                            >
                              <i className="icofont-edit text-success"></i>
                            </button>
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
          {/* <!-- Row End --> */}
        </div>
      </div>
    </div>
  );
}

export default CustomerList;
