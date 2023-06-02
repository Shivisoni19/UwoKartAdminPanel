import React from "react";

function CategoryBasicInfo() {
  return (
    <div>
      <div class="card mb-3">
        <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
          <h6 class="mb-0 fw-bold ">Basic information</h6>
        </div>
        <div class="card-body">
          <form>
            <div class="row g-3 align-items-center">
              <div class="col-md-6">
                <label class="form-label">Name</label>
                <input type="text" class="form-control" value="Watch" />
              </div>
              <div class="col-md-6">
                <label class="form-label">Page Title</label>
                <input type="text" class="form-control" value="Fossil Watch" />
              </div>
              <div class="col-md-12">
                <label class="form-label">Product Identifier URL</label>
                <div class="input-group mb-3">
                  <span class="input-group-text">https://eBazar.com</span>
                  <input
                    type="text"
                    class="form-control"
                    value="/product/Fossilsmart"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <label class="form-label">Product Description</label>
                <div id="editor">
                  <h1>Where can I get some?</h1>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>Integer vitae leo quis urna pulvinar tristique..</li>
                    <li>
                      In porttitor sem at ligula vehicula, at scelerisque lectus
                      placerat.
                    </li>
                    <li>Nullam ornare risus ac tellus ullamcorper rhoncus.</li>
                    <li>Nam dictum neque et velit fermentum blandit.</li>
                    <li>
                      Vivamus congue metus sit amet sapien pulvinar tincidunt.
                    </li>
                    <li>Nullam ornare risus ac tellus ullamcorper rhoncus.</li>
                  </ul>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries{" "}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CategoryBasicInfo;
