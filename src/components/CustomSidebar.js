import React from "react";
import { Link } from "react-router-dom";

export default function CustomSidebar() {
  return (
    <div>
      {/* <!--custom sidebar --> */}
      <div className="sidebar px-4 py-4 py-md-4 me-0">
        <div className="d-flex flex-column h-100">
          <Link to="/DashboardScreen" className="mb-0 brand-icon">
            <span className="logo-icon">
              <i className="bi bi-bag-check-fill fs-4"></i>
            </span>
            <span className="logo-text">UWO KART ADMIN</span>
          </Link>
          {/* <!-- Menu: main ul --> */}
          <ul className="menu-list flex-grow-1 mt-3">
            <li>
              <Link className="m-link active" to="/DashboardScreen">
                <i className="icofont-home fs-5"></i> <span>Dashboard</span>
              </Link>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#menu-product"
                href="#"
              >
                <i className="icofont-truck-loaded fs-5"></i>
                <span>Products</span>
                <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              {/* <!-- Menu: Sub menu ul --> */}
              <ul className="sub-menu collapse" id="menu-product">
                <li>
                  <Link className="ms-link" to="/ProductGrid">
                    Product Grid
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/ProductList">
                    Product List
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/ProductEdit">
                    Product Edit
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/ProductDetails">
                    Product Details
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/ProductAdd">
                    Product Add
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/ShoppingCart">
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/CheckOut">
                    Checkout
                  </Link>
                </li>
              </ul>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#categories"
                href="#"
              >
                <i className="icofont-chart-flow fs-5"></i>
                <span>Categories</span>
                <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              {/* <!-- Menu: Sub menu ul --> */}
              <ul className="sub-menu collapse" id="categories">
                <li>
                  <Link className="ms-link" to="/CategoriesList">
                    Categories List
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/CategoriesEdit">
                    Categories Edit
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/CategoriesAdd">
                    Categories Add
                  </Link>
                </li>
              </ul>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#menu-order"
                href="#"
              >
                <i className="icofont-notepad fs-5"></i> <span>Orders</span>
                <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              {/* <!-- Menu: Sub menu ul --> */}
              <ul className="sub-menu collapse" id="menu-order">
                <li>
                  <Link className="ms-link" to="/OrderList">
                    Orders List
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/OrderDetails">
                    Order Details
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/OrderInvoices">
                    Order Invoices
                  </Link>
                </li>
              </ul>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#customers-info"
                href="#"
              >
                <i className="icofont-funky-man fs-5"></i>
                <span>Customers</span>
                <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              {/* <!-- Menu: Sub menu ul --> */}
              <ul className="sub-menu collapse" id="customers-info">
                <li>
                  <Link className="ms-link" to="/CustomerList">
                    Customers List
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/CustomerDetails">
                    Customers Details
                  </Link>
                </li>
              </ul>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#menu-sale"
                href="#"
              >
                <i className="icofont-sale-discount fs-5"></i>
                <span>Sales Promotion</span>
                <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              {/* <!-- Menu: Sub menu ul --> */}
              <ul className="sub-menu collapse" id="menu-sale">
                <li>
                  <Link className="ms-link" to="/CouponList">
                    Coupons List
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/CouponAdd">
                    Coupons Add
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/CouponEdit">
                    Coupons Edit
                  </Link>
                </li>
              </ul>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#menu-inventory"
                href="#"
              >
                <i className="icofont-chart-histogram fs-5"></i>
                <span>Inventory</span>
                <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              {/* <!-- Menu: Sub menu ul --> */}
              <ul className="sub-menu collapse" id="menu-inventory">
                <li>
                  <a className="ms-link" href="inventory-info.html">
                    Stock List
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="purchase.html">
                    Purchase
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="supplier.html">
                    Supplier
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="returns.html">
                    Returns
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="department.html">
                    Department
                  </a>
                </li>
              </ul>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#menu-Componentsone"
                href="#"
              >
                <i className="icofont-ui-calculator"></i> <span>Accounts</span>
                <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              {/* <!-- Menu: Sub menu ul --> */}
              <ul className="sub-menu collapse" id="menu-Componentsone">
                <li>
                  <Link className="ms-link" to="/AccountInvoices">
                    Invoices
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/AccountExpenses">
                    Expenses
                  </Link>
                </li>
                <li>
                  <Link className="ms-link" to="/AccountSalarySlip">
                    Salary Slip
                  </Link>
                </li>
              </ul>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#app"
                href="#"
              >
                <i className="icofont-code-alt fs-5"></i> <span>App</span>
                <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              {/* <!-- Menu: Sub menu ul --> */}
              <ul className="sub-menu collapse" id="app">
                <li>
                  <a className="ms-link" href="calendar.html">
                    Calandar
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="chat.html">
                    Chat App
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="m-link" href="store-locator.html">
                <i className="icofont-focus fs-5"></i>
                <span>Store Locator</span>
              </a>
            </li>
            <li>
              <a className="m-link" href="ui-elements/ui-alerts.html">
                <i className="icofont-paint fs-5"></i>
                <span>UI Components</span>
              </a>
            </li>
            <li className="collapsed">
              <a
                className="m-link"
                data-bs-toggle="collapse"
                data-bs-target="#page"
                href="#"
              >
                <i className="icofont-page fs-5"></i> <span>Other Pages</span>
                <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>
              </a>
              {/* <!-- Menu: Sub menu ul --> */}
              <ul className="sub-menu collapse" id="page">
                <li>
                  <a className="ms-link" href="admin-profile.html">
                    Profile Page
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="purchase-plan.html">
                    Price Plan Example
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="charts.html">
                    Charts Example
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="table.html">
                    Table Example
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="forms.html">
                    Forms Example
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="icon.html">
                    Icons
                  </a>
                </li>
                <li>
                  <a className="ms-link" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <!-- Menu: menu collepce btn --> */}
          <button
            type="button"
            className="btn btn-link sidebar-mini-btn text-light"
          >
            <span className="ms-2">
              <i className="icofont-bubble-right"></i>
            </span>
          </button>
        </div>
      </div>
      {/* <!-- Modal Custom Settings--> */}
      <div
        className="modal fade right"
        id="Settingmodal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Custom Settings</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body custom_setting">
              {/* <!-- Settings: Color --> */}
              <div className="setting-theme pb-3">
                <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                  <i className="icofont-color-bucket fs-4 me-2 text-primary"></i>
                  Template Color Settings
                </h6>
                <ul className="list-unstyled row row-cols-3 g-2 choose-skin mb-2 mt-2">
                  <li data-theme="indigo">
                    <div className="indigo"></div>
                  </li>
                  <li data-theme="tradewind">
                    <div className="tradewind"></div>
                  </li>
                  <li data-theme="monalisa">
                    <div className="monalisa"></div>
                  </li>
                  <li data-theme="blue" className="active">
                    <div className="blue"></div>
                  </li>
                  <li data-theme="cyan">
                    <div className="cyan"></div>
                  </li>
                  <li data-theme="green">
                    <div className="green"></div>
                  </li>
                  <li data-theme="orange">
                    <div className="orange"></div>
                  </li>
                  <li data-theme="blush">
                    <div className="blush"></div>
                  </li>
                  <li data-theme="red">
                    <div className="red"></div>
                  </li>
                </ul>
              </div>
              <div className="sidebar-gradient py-3">
                <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                  <i className="icofont-paint fs-4 me-2 text-primary"></i>
                  Sidebar Gradient
                </h6>
                <div className="form-check form-switch gradient-switch pt-2 mb-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="CheckGradient"
                  />
                  <label className="form-check-label" for="CheckGradient">
                    Enable Gradient! ( Sidebar )
                  </label>
                </div>
              </div>
              {/* <!-- Settings: Template dynamics --> */}
              <div className="dynamic-block py-3">
                <ul className="list-unstyled choose-skin mb-2 mt-1">
                  <li data-theme="dynamic">
                    <div className="dynamic">
                      <i className="icofont-paint me-2"></i> Click to Dyanmic
                      Setting
                    </div>
                  </li>
                </ul>
                <div className="dt-setting">
                  <ul className="list-group list-unstyled mt-1">
                    <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                      <label>Primary Color</label>
                      <button
                        id="primaryColorPicker"
                        className="btn bg-primary avatar xs border-0 rounded-0"
                      ></button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                      <label>Secondary Color</label>
                      <button
                        id="secondaryColorPicker"
                        className="btn bg-secondary avatar xs border-0 rounded-0"
                      ></button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                      <label className="text-muted">Chart Color 1</label>
                      <button
                        id="chartColorPicker1"
                        className="btn chart-color1 avatar xs border-0 rounded-0"
                      ></button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                      <label className="text-muted">Chart Color 2</label>
                      <button
                        id="chartColorPicker2"
                        className="btn chart-color2 avatar xs border-0 rounded-0"
                      ></button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                      <label className="text-muted">Chart Color 3</label>
                      <button
                        id="chartColorPicker3"
                        className="btn chart-color3 avatar xs border-0 rounded-0"
                      ></button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                      <label className="text-muted">Chart Color 4</label>
                      <button
                        id="chartColorPicker4"
                        className="btn chart-color4 avatar xs border-0 rounded-0"
                      ></button>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                      <label className="text-muted">Chart Color 5</label>
                      <button
                        id="chartColorPicker5"
                        className="btn chart-color5 avatar xs border-0 rounded-0"
                      ></button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Settings: Font --> */}
              <div className="setting-font py-3">
                <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                  <i className="icofont-font fs-4 me-2 text-primary"></i> Font
                  Settings
                </h6>
                <ul className="list-group font_setting mt-1">
                  <li className="list-group-item py-1 px-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="font"
                        id="font-poppins"
                        value="font-poppins"
                      />
                      <label className="form-check-label" for="font-poppins">
                        Poppins Google Font
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item py-1 px-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="font"
                        id="font-opensans"
                        value="font-opensans"
                        checked=""
                      />
                      <label className="form-check-label" for="font-opensans">
                        Open Sans Google Font
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item py-1 px-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="font"
                        id="font-montserrat"
                        value="font-montserrat"
                      />
                      <label className="form-check-label" for="font-montserrat">
                        Montserrat Google Font
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item py-1 px-2">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="font"
                        id="font-mukta"
                        value="font-mukta"
                      />
                      <label className="form-check-label" for="font-mukta">
                        Mukta Google Font
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- Settings: Light/dark --> */}
              <div className="setting-mode py-3">
                <h6 className="card-title mb-2 fs-6 d-flex align-items-center">
                  <i className="icofont-layout fs-4 me-2 text-primary"></i>
                  Contrast Layout
                </h6>
                <ul className="list-group list-unstyled mb-0 mt-1">
                  <li className="list-group-item d-flex align-items-center py-1 px-2">
                    <div className="form-check form-switch theme-switch mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="theme-switch"
                      />
                      <label className="form-check-label" for="theme-switch">
                        Enable Dark Mode!
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center py-1 px-2">
                    <div className="form-check form-switch theme-high-contrast mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="theme-high-contrast"
                      />
                      <label
                        className="form-check-label"
                        for="theme-high-contrast"
                      >
                        Enable High Contrast
                      </label>
                    </div>
                  </li>
                  <li className="list-group-item d-flex align-items-center py-1 px-2">
                    <div className="form-check form-switch theme-rtl mb-0">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="theme-rtl"
                      />
                      <label className="form-check-label" for="theme-rtl">
                        Enable RTL Mode!
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="modal-footer justify-content-start">
              <button
                type="button"
                className="btn btn-white border lift"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary lift">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
