import React from "react";

function ProductsFilter() {
  return (
    <div>
      <div className="sticky-lg-top">
        <div className="card mb-3">
          <div className="reset-block">
            <div className="filter-title">
              <h4 className="title">Filter</h4>
            </div>
            <div className="filter-btn">
              <a className="btn btn-primary" href="#">
                Reset
              </a>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="categories">
            <div className="filter-title">
              <a
                className="title"
                data-bs-toggle="collapse"
                href="#category"
                role="button"
                aria-expanded="true"
              >
                Categories
              </a>
            </div>
            <div className="collapse show" id="category">
              <div className="filter-search">
                <form action="#">
                  <input
                    type="text"
                    placeholder="Search"
                    className="form-control"
                  />
                  <button>
                    <i className="lni lni-search-alt"></i>
                  </button>
                </form>
              </div>
              <div className="filter-category">
                <ul className="category-list">
                  <li>
                    <a
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      className="collapsed"
                    >
                      Game accessories
                    </a>
                    <ul
                      id="collapseOne"
                      className="sub-category collapse"
                      data-parent="#category"
                    >
                      <li>
                        <a href="#">PlayStation 4</a>
                      </li>
                      <li>
                        <a href="#">Oculus VR</a>
                      </li>
                      <li>
                        <a href="#">Remote</a>
                      </li>
                      <li>
                        <a href="#">Lighting Keyborad</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="collapsed"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                    >
                      Bags
                    </a>
                    <ul
                      id="collapseTwo"
                      className="sub-category collapse"
                      data-parent="#category"
                    >
                      <li>
                        <a href="#">School Bags</a>
                      </li>
                      <li>
                        <a href="#">Traveling Bags</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="collapsed"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                    >
                      Flower Port
                    </a>
                    <ul
                      id="collapseThree"
                      className="sub-category collapse"
                      data-parent="#category"
                    >
                      <li>
                        <a href="#">Woodan Port</a>
                      </li>
                      <li>
                        <a href="#">Pattern Port</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="collapsed"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                    >
                      Watch
                    </a>
                    <ul
                      id="collapseFour"
                      className="sub-category collapse"
                      data-parent="#category"
                    >
                      <li>
                        <a href="#">Wall Clock</a>
                      </li>
                      <li>
                        <a href="#">Smart Watch</a>
                      </li>
                      <li>
                        <a href="#">Rado Watch</a>
                      </li>
                      <li>
                        <a href="#">Fasttrack Watch</a>
                      </li>
                      <li>
                        <a href="#">Noise Watch</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a
                      className="collapsed"
                      href="#"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                    >
                      Accessories
                    </a>
                    <ul
                      id="collapseFive"
                      className="sub-category collapse"
                      data-parent="#category"
                    >
                      <li>
                        <a href="#">Note Diaries</a>
                      </li>
                      <li>
                        <a href="#">Fold Diaries</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="size-block">
            <div className="filter-title">
              <a
                className="title"
                data-bs-toggle="collapse"
                href="#size"
                role="button"
                aria-expanded="true"
              >
                Select Size
              </a>
            </div>
            <div className="collapse show" id="size">
              <div className="filter-size" id="filter-size-1">
                <ul>
                  <li>XS</li>
                  <li>S</li>
                  <li className="">M</li>
                  <li>L</li>
                  <li>XL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="color-block">
            <div className="filter-title">
              <a
                className="title"
                data-bs-toggle="collapse"
                href="#color"
                role="button"
                aria-expanded="false"
              >
                Select Color
              </a>
            </div>
            <div className="collapse show" id="color">
              <div className="filter-color">
                <ul>
                  <li>
                    <div className="color-check">
                      <p>
                        <span style={{ backgroundColor: "#4114e4" }}></span>{" "}
                        <strong>Blue</strong>
                      </p>

                      <input type="checkbox" id="color-1" />
                      <label for="color-1">
                        <span></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="color-check">
                      <p>
                        <span style={{ backgroundColor: "#E14C7B" }}></span>{" "}
                        <strong>Red</strong>
                      </p>

                      <input type="checkbox" id="color-2" />
                      <label for="color-2">
                        <span></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="color-check">
                      <p>
                        <span style={{ backgroundColor: "#7CB637" }}></span>{" "}
                        <strong>Green</strong>
                      </p>

                      <input type="checkbox" id="color-3" />
                      <label for="color-3">
                        <span></span>
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="color-check">
                      <p>
                        <span style={{ backgroundColor: "#161359" }}></span>{" "}
                        <strong>Dark</strong>
                      </p>

                      <input type="checkbox" id="color-4" />
                      <label for="color-4">
                        <span></span>
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="price-range-block">
            <div className="filter-title">
              <a
                className="title"
                data-bs-toggle="collapse"
                href="#pricingTwo"
                role="button"
                aria-expanded="false"
              >
                Pricing Range
              </a>
            </div>
            <div className="collapse show" id="pricingTwo">
              <div className="price-range">
                <div className="price-amount flex-wrap">
                  <div className="amount-input mt-1">
                    <label className="fw-bold">Minimum Price</label>
                    <input
                      type="text"
                      id="minAmount2"
                      className="form-control"
                    />
                  </div>
                  <div className="amount-input mt-1">
                    <label className="fw-bold">Maximum Price</label>
                    <input
                      type="text"
                      id="maxAmount2"
                      className="form-control"
                    />
                  </div>
                </div>
                <div
                  id="slider-range2"
                  className="slider-range noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="rating-block">
            <div className="filter-title">
              <a
                className="title"
                data-bs-toggle="collapse"
                href="#rating"
                role="button"
                aria-expanded="false"
              >
                Select Rating
              </a>
            </div>
            <div className="collapse show" id="rating">
              <div className="filter-rating">
                <ul>
                  <li>
                    <div className="rating-check">
                      <input type="checkbox" id="rating-5" />
                      <label for="rating-5">
                        <span></span>
                      </label>
                      <p>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="rating-check">
                      <input type="checkbox" id="rating-4" />
                      <label for="rating-4">
                        <span></span>
                      </label>
                      <p>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="rating-check">
                      <input type="checkbox" id="rating-3" />
                      <label for="rating-3">
                        <span></span>
                      </label>
                      <p>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="rating-check">
                      <input type="checkbox" id="rating-2" />
                      <label for="rating-2">
                        <span></span>
                      </label>
                      <p>
                        <i className="icofont-star"></i>
                        <i className="icofont-star"></i>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="rating-check">
                      <input type="checkbox" id="rating-1" />
                      <label for="rating-1">
                        <span></span>
                      </label>
                      <p>
                        <i className="icofont-star"></i>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsFilter;
