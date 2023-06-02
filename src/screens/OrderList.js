import React from "react";
import { OrderListApi } from "../ContentAPI/OrderListApi";

function OrderList() {
  return (
    <div>
      {/* <!-- Body: Body --> */}
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Orders List</h3>
              </div>
            </div>
          </div>
          {/* <!-- Row end  --> */}
          <div className="row g-3 mb-3">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <table
                    id="myDataTable"
                    className="table table-hover align-middle mb-0"
                    style={{ Width: "100%;" }}
                  >
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Item</th>
                        <th>Customer Name</th>
                        <th>Payment Info</th>
                        <th>Price</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {OrderListApi.map((curElem) => {
                        const {
                          id,
                          item,
                          itemName,
                          CName,
                          payment,
                          price,
                          status,
                        } = curElem;
                        return (
                          <tr>
                            <td>
                              <a href="order-details.html">
                                <strong>{id}</strong>
                              </a>
                            </td>
                            <td>
                              <img
                                src={item}
                                className="avatar lg rounded me-2"
                                alt="profile-image"
                              />
                              <span>{itemName} </span>
                            </td>
                            <td>{CName}</td>
                            <td>{payment}</td>
                            <td>{price}</td>
                            <td>
                              <span className="badge bg-warning">{status}</span>
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

export default OrderList;
