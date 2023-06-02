import React from "react";
import { OrderInvoicesApi } from "../ContentAPI/OrderInvoiceApi";
import { Link } from "react-router-dom";

function OrderInvoices() {
  return (
    <div>
      {/* <!-- Body: Body --> */}
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Order Invoices</h3>
              </div>
            </div>
          </div>
          {/* <!-- Row end  --> */}
          <div className="row mb-3">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <table
                    id="patient-table"
                    className="table table-hover align-middle mb-0"
                    style={{ Width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Item</th>
                        <th>Billing Date</th>
                        <th>Total Amount</th>
                        <th>User Name</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {OrderInvoicesApi.map((curElem) => {
                        const { id, item, itemName, date, Amount, UName } =
                          curElem;
                        return (
                          <tr>
                            <td>
                              <strong>{id}</strong>
                            </td>
                            <td>
                              <img
                                src={item}
                                className="avatar lg rounded me-2"
                                alt="profile-image"
                              />
                              <span> {itemName}</span>
                            </td>
                            <td>{date}</td>
                            <td>{Amount}</td>
                            <td>{UName}</td>
                            <td>
                              <Link
                                className="btn btn-sm btn-white"
                                to="/InvoicesList"
                              >
                                <i className="icofont-print fs-5"></i>
                              </Link>
                              <Link
                                className="btn btn-sm btn-white"
                                to="/SimpleInvoices"
                              >
                                <i className="icofont-download fs-5"></i>
                              </Link>
                              <Link
                                className="btn btn-sm btn-white"
                                to="/EmailInvoices"
                              >
                                <i className="icofont-send-mail fs-4"></i>
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Row end  --> */}
        </div>
      </div>
    </div>
  );
}

export default OrderInvoices;
