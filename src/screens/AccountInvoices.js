import React from "react";

function AccountInvoices() {
  return (
    <div>
      {/* <!-- Body: Body --> */}
      <div className="body d-flex py-lg-3 py-md-2">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0 py-3 pb-2">Invoices</h3>
                <div className="col-auto py-2 w-sm-100">
                  <ul
                    className="nav nav-tabs tab-body-header rounded invoice-set"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Invoice-list"
                        role="tab"
                      >
                        Invoice List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link  active"
                        data-bs-toggle="tab"
                        href="#Invoice-Simple"
                        role="tab"
                      >
                        Simple invoice
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#Invoice-Email"
                        role="tab"
                      >
                        Email invoice
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Row end  --> */}

          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div className="tab-content">
                <div className="tab-pane fade" id="Invoice-list">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12">
                      <div className="card mb-3">
                        <div className="card-body d-sm-flex justify-content-between">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded"
                              src="assets/images/xs/avatar1.svg"
                              alt=""
                            />
                            <div className="flex-fill ms-3 text-truncate">
                              <h6 className="d-flex justify-content-between mb-0">
                                <span>Ryan MacLeod</span>
                              </h6>
                              <span className="text-muted">
                                Ke Arrow Silicon
                              </span>
                            </div>
                          </a>
                          <div className="text-end d-none d-md-block">
                            <p className="mb-1">
                              <i className="icofont-location-pin ps-1"></i> 2211
                              Jones Avenue,Winston Salem FL 27107
                            </p>
                            <span className="text-muted">
                              <i className="icofont-money ps-1"></i> $500
                            </span>
                          </div>
                        </div>
                        <div className="card-footer justify-content-between d-flex align-items-center">
                          <div className="d-none d-md-block">
                            <strong>Date on:</strong>
                            <span>23 Feb, 2021</span>
                          </div>
                          <div className="card-hover-show">
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Download
                            </a>
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Send
                            </a>
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body d-sm-flex justify-content-between">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded"
                              src="assets/images/xs/avatar2.svg"
                              alt=""
                            />
                            <div className="flex-fill ms-3 text-truncate">
                              <h6 className="d-flex justify-content-between mb-0">
                                <span>Penelope Stewart</span>
                              </h6>
                              <span className="text-muted">
                                Kronos Minimalist
                              </span>
                            </div>
                          </a>
                          <div className="text-end d-none d-md-block">
                            <p className="mb-1">
                              <i className="icofont-location-pin ps-1"></i> 3154
                              Sampson Street,Aurora CT 80014
                            </p>
                            <span className="text-muted">
                              <i className="icofont-money ps-1"></i> $433
                            </span>
                          </div>
                        </div>
                        <div className="card-footer justify-content-between d-flex align-items-center">
                          <div className="d-none d-md-block">
                            <strong>Date on:</strong>
                            <span>14 Apr, 2021</span>
                          </div>
                          <div className="card-hover-show">
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Download
                            </a>
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Send
                            </a>
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body d-sm-flex justify-content-between">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded"
                              src="assets/images/xs/avatar3.svg"
                              alt=""
                            />
                            <div className="flex-fill ms-3 text-truncate">
                              <h6 className="d-flex justify-content-between mb-0">
                                <span>Diane Slater</span>
                              </h6>
                              <span className="text-muted">
                                Mechanical Watch
                              </span>
                            </div>
                          </a>
                          <div className="text-end d-none d-md-block">
                            <p className="mb-1">
                              <i className="icofont-location-pin ps-1"></i> 49
                              Stamford Road. West Chicago, IL 60185
                            </p>
                            <span className="text-muted">
                              <i className="icofont-money ps-1"></i> $255
                            </span>
                          </div>
                        </div>
                        <div className="card-footer justify-content-between d-flex align-items-center">
                          <div className="d-none d-md-block">
                            <strong>Date on:</strong>
                            <span>16 Mar, 2021</span>
                          </div>
                          <div className="card-hover-show">
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Download
                            </a>
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Send
                            </a>
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body d-sm-flex justify-content-between">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded"
                              src="assets/images/xs/avatar4.svg"
                              alt=""
                            />
                            <div className="flex-fill ms-3 text-truncate">
                              <h6 className="d-flex justify-content-between mb-0">
                                <span>Amy Mills</span>
                              </h6>
                              <span className="text-muted">
                                Engraved Black Alloy
                              </span>
                            </div>
                          </a>
                          <div className="text-end d-none d-md-block">
                            <p className="mb-1">
                              <i className="icofont-location-pin ps-1"></i> 2698
                              Northumberland. Melbourne, FL 32904
                            </p>
                            <span className="text-muted">
                              <i className="icofont-money ps-1"></i> $555
                            </span>
                          </div>
                        </div>
                        <div className="card-footer justify-content-between d-flex align-items-center">
                          <div className="d-none d-md-block">
                            <strong>Date on:</strong>
                            <span>17 Mar, 2021</span>
                          </div>
                          <div className="card-hover-show">
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Download
                            </a>
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Send
                            </a>
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body d-sm-flex justify-content-between">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded"
                              src="assets/images/xs/avatar5.svg"
                              alt=""
                            />
                            <div className="flex-fill ms-3 text-truncate">
                              <h6 className="d-flex justify-content-between mb-0">
                                <span>Tim Mitchell</span>
                              </h6>
                              <span className="text-muted">Titan Workwear</span>
                            </div>
                          </a>
                          <div className="text-end d-none d-md-block">
                            <p className="mb-1">
                              <i className="icofont-location-pin ps-1"></i> 35
                              Gubener Str. Emmering, FL 32904
                            </p>
                            <span className="text-muted">
                              <i className="icofont-money ps-1"></i> $288
                            </span>
                          </div>
                        </div>
                        <div className="card-footer justify-content-between d-flex align-items-center">
                          <div className="d-none d-md-block">
                            <strong>Date on:</strong>
                            <span>12 Feb, 2021</span>
                          </div>
                          <div className="card-hover-show">
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Download
                            </a>
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Send
                            </a>
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="card-body d-sm-flex justify-content-between">
                          <a href="javascript:void(0);" className="d-flex">
                            <img
                              className="avatar rounded"
                              src="assets/images/xs/avatar2.svg"
                              alt=""
                            />
                            <div className="flex-fill ms-3 text-truncate">
                              <h6 className="d-flex justify-content-between mb-0">
                                <span>Brian Swader</span>
                              </h6>
                              <span className="text-muted">
                                NoiseFit Endure
                              </span>
                            </div>
                          </a>
                          <div className="text-end d-none d-md-block">
                            <p className="mb-1">
                              <i className="icofont-location-pin ps-1"></i> 70
                              Bowman St. South Windsor, CT 06074
                            </p>
                            <span className="text-muted">
                              <i className="icofont-money ps-1"></i> $655
                            </span>
                          </div>
                        </div>
                        <div className="card-footer justify-content-between d-flex align-items-center">
                          <div className="d-none d-md-block">
                            <strong>Date on:</strong>
                            <span>18 Feb, 2020</span>
                          </div>
                          <div className="card-hover-show">
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Download
                            </a>
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Send
                            </a>
                            <a
                              className="btn btn-sm btn-white border lift"
                              href="#"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <nav aria-label="Page navigation">
                        <ul className="pagination mt-4">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Previous
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              2
                            </a>
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
                  {/* <!-- Row end  --> */}
                </div>
                {/* <!-- tab end  --> */}
                <div className="tab-pane fade show active" id="Invoice-Simple">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12">
                      <div className="card p-xl-5 p-lg-4 p-0">
                        <div className="card-body">
                          <div className="mb-3 pb-3 border-bottom">
                            Invoice
                            <strong>May 22, 2021</strong>
                            <span className="float-end">
                              {" "}
                              <strong>transection id:</strong> #18414
                            </span>
                          </div>

                          <div className="row mb-4">
                            <div className="col-sm-6">
                              <h6 className="mb-3">From:</h6>
                              <div>
                                <strong>eBazar Shop</strong>
                              </div>
                              <div>111 Berkeley Rd</div>
                              <div>STREET ON THE FOSSE, Poland</div>
                              <div>Email: info@ebazar.com</div>
                              <div>Phone: +44 888 666 3333</div>
                            </div>

                            <div className="col-sm-6">
                              <h6 className="mb-3">To:</h6>
                              <div>
                                <strong>Dianalove</strong>
                              </div>
                              <div>45 Larissa Court</div>
                              <div>Victoria, BIRDWOODTON</div>
                              <div>Email: Dianalove@gmail.com</div>
                              <div>Phone: +66 243 456 789</div>
                            </div>
                          </div>
                          {/* <!-- Row end  --> */}

                          <div className="table-responsive-sm">
                            <table className="table table-striped">
                              <thead>
                                <tr>
                                  <th className="text-center">#</th>
                                  <th>Item</th>
                                  <th>Description</th>
                                  <th className="text-end">Item Cost</th>
                                  <th className="text-center">Products Item</th>
                                  <th className="text-end">Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="text-center">1</td>
                                  <td>Rado Watch</td>
                                  <td>Men Watch for Gold Color</td>
                                  <td className="text-end">$330.00</td>
                                  <td className="text-center">1</td>
                                  <td className="text-end">$330.00</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="row">
                            <div className="col-lg-4 col-sm-5"></div>

                            <div className="col-lg-4 col-sm-5 ms-auto">
                              <table className="table table-clear">
                                <tbody>
                                  <tr>
                                    <td>
                                      <strong>Subtotal</strong>
                                    </td>
                                    <td className="text-end">$330.00</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Tax(18%)</strong>
                                    </td>
                                    <td className="text-end">$59.4</td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <strong>Total</strong>
                                    </td>
                                    <td className="text-end">
                                      <strong>$389.00</strong>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          {/* <!-- Row end  --> */}

                          <div className="row">
                            <div className="col-lg-12">
                              <h6>Terms &amp; Condition</h6>
                              <p className="text-muted">
                                Contrary to popular belief, Lorem Ipsum is not
                                simply random text. It has roots in a piece of
                                classical Latin literature from 45 BC, making it
                                over
                              </p>
                            </div>
                            <div className="col-lg-12 text-end">
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-lg my-1"
                              >
                                <i className="fa fa-print"></i> Print
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-lg my-1"
                              >
                                <i className="fa fa-paper-plane-o"></i> Send
                                Invoice
                              </button>
                            </div>
                          </div>
                          {/* <!-- Row end  --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Row end  --> */}
                </div>
                {/* <!-- tab end  --> */}
                <div className="tab-pane fade" id="Invoice-Email">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12">
                      <div className="d-flex justify-content-center">
                        <table className="card p-5">
                          <tr>
                            <td></td>
                            <td className="text-center">
                              <table>
                                <tr>
                                  <td className="text-center">
                                    <h2>$389.00 Paid</h2>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-center py-2">
                                    <h4 className="mb-0">
                                      Thanks for usingeBazar.
                                    </h4>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="pt-2 pb-4">
                                    <table>
                                      <tr>
                                        <td>
                                          Attn: <strong>Dianalove</strong>{" "}
                                          Winston Salem FL 27107
                                          <br />
                                          Email: Dianalove@gmail.com
                                          <br />
                                          Phone: +88 123 456 789
                                          <br />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="pt-2">
                                          <table className="table table-bordered">
                                            <tr>
                                              <td className="text-start">
                                                Rado Watch
                                              </td>
                                              <td className="text-end">
                                                $ 330.00
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="text-start">
                                                1 Year Product Warranty
                                              </td>
                                              <td className="text-end">
                                                $ 10.99
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="text-start">
                                                Production Transportation
                                              </td>
                                              <td className="text-end">
                                                $ 49.00
                                              </td>
                                            </tr>
                                            <tr>
                                              <td className="text-start w-80">
                                                <strong>Total</strong>
                                              </td>
                                              <td className="text-end fw-bold">
                                                $389.00
                                              </td>
                                            </tr>
                                          </table>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="pt-2 pb-2 text-center">
                                    <a href="#">View in browser</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="p-0 text-center">
                                    PXL Inc. 47 Aurora St. South West, CT 06074
                                  </td>
                                </tr>
                              </table>
                              <table className="mt-3 text-center w-100">
                                <tr>
                                  <td className="aligncenter content-block">
                                    Questions? Email{" "}
                                    <a href="mailto:">info@pixelwibes.com</a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                            <td></td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Row end  --> */}
                </div>
                {/* <!-- tab end  --> */}
              </div>
            </div>
          </div>
          {/* <!-- Row end  --> */}
        </div>
      </div>
    </div>
  );
}

export default AccountInvoices;
