import React, { useState } from "react";
import { CategoryListApi } from "../ContentAPI/CategoryListApi";

function CategoriesList() {
  const [state, setstate] = useState(CategoryListApi);
  return (
    <div>
      {/* <!-- Body: Body --> */}
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Categories List</h3>
                <a
                  href="categories-add.html"
                  className="btn btn-primary py-2 px-5 btn-set-task w-sm-100"
                >
                  <i className="icofont-plus-circle me-2 fs-6"></i> Add
                  Categories
                </a>
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
                    style={{ Width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CategoryListApi.map((curElem) => {
                        const { id, category, date, status } = curElem;
                        return (
                          <tr>
                            <td>
                              <strong>{id}</strong>
                            </td>
                            <td>{category}</td>
                            <td>{date}</td>
                            <td>
                              <span className="badge bg-success">{status}</span>
                            </td>
                            <td>
                              <div className="btn-group">
                                <a
                                  href="categories-edit.html"
                                  className="btn btn-outline-secondary"
                                >
                                  <i className="icofont-edit text-success"></i>
                                </a>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary deleterow"
                                >
                                  <i className="icofont-ui-delete text-danger"></i>
                                </button>
                              </div>
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
        </div>
      </div>
    </div>
  );
}

export default CategoriesList;
