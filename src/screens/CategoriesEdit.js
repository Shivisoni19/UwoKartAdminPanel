import React from "react";
import CategoryBasicInfo from "../components/CategoryBasicInfo";
import VisiblityStatus from "../components/VisiblityStatus";

export default function CategoriesEdit() {
  return (
    <div>
      <div class="main px-lg-4 px-md-4">
        {/* <!-- Body: Body --> */}
        <div class="body d-flex py-3">
          <div class="container-xxl">
            <div class="row align-items-center">
              <div class="border-0 mb-4">
                <div class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                  <h3 class="fw-bold mb-0">Categories Edit</h3>
                  <button
                    type="submit"
                    class="btn btn-primary py-2 px-5 text-uppercase btn-set-task w-sm-100"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Row end  -->   */}

            <div class="row g-3 mb-3">
              <div class="col-lg-4">
                <VisiblityStatus />
              </div>
              <div class="col-lg-8">
                <CategoryBasicInfo />
              </div>
            </div>
            {/* <!-- Row end  -->  */}
          </div>
        </div>

        {/* <!-- Modal Cropper--> */}
        <div
          class="modal docs-cropped"
          id="getCroppedCanvasModal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Cropped</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body"></div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-white border lift"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <a
                  class="btn btn-primary"
                  id="download"
                  href="javascript:void(0);"
                  download="cropped.html"
                >
                  Download
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
