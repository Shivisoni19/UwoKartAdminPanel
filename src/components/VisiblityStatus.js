import React from "react";

function VisiblityStatus() {
  return (
    <div>
      <div class="sticky-lg-top">
        <div class="card mb-3">
          <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 class="m-0 fw-bold">Visibility Status</h6>
          </div>
          <div class="card-body">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="couponsstatus"
                checked
              />
              <label class="form-check-label">Published</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="couponsstatus"
              />
              <label class="form-check-label">Scheduled</label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="couponsstatus"
              />
              <label class="form-check-label">Hidden</label>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 class="m-0 fw-bold">Publish Schedule</h6>
          </div>
          <div class="card-body">
            <div class="row g-3 align-items-center">
              <div class="col-md-12">
                <label class="form-label">Publish Date</label>
                <input
                  type="date"
                  class="form-control w-100"
                  value="2018-03-13"
                />
              </div>
              <div class="col-md-12">
                <label class="form-label">Publish Time</label>
                <input type="time" class="form-control w-100" value="10:30" />
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
            <h6 class="m-0 fw-bold">Categories</h6>
          </div>
          <div class="card-body">
            <label class="form-label">Parent category Select</label>
            <select
              class="form-select"
              size="3"
              aria-label="size 3 select example"
            >
              <option selected>Watch</option>
              <option value="2">Clothes</option>
              <option value="3">Toy</option>
              <option value="4">Cosmetic</option>
              <option value="5">Laptop</option>
              <option value="6">Mobile</option>
            </select>
          </div>
        </div>
        <div class="card">
          <div class="card-header py-3 bg-transparent border-bottom-0">
            <h6 class="m-0 fw-bold">Categories Image Upload</h6>
            <small>With event and default file try to remove the image</small>
          </div>
          <div class="card-body">
            <input
              type="file"
              id="dropify-event"
              data-default-file="assets/images/product/Cropimg.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisiblityStatus;
