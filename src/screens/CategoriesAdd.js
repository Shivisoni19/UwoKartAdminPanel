import React from "react";

function CategoriesAdd() {
  return (
    <div>
      {/* <!-- Body: Body --> */}
      <div className="body d-flex py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="border-0 mb-4">
              <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                <h3 className="fw-bold mb-0">Categories Add</h3>
                <button
                  type="submit"
                  className="btn btn-primary py-2 px-5 text-uppercase btn-set-task w-sm-100"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Row end  -->   */}

          <div className="row g-3 mb-3">
            <div className="col-lg-4">
              <div className="sticky-lg-top">
                <div className="card mb-3">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Visibility Status</h6>
                  </div>
                  <div className="card-body">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="couponsstatus"
                        checked
                      />
                      <label className="form-check-label">Published</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="couponsstatus"
                      />
                      <label className="form-check-label">Scheduled</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="couponsstatus"
                      />
                      <label className="form-check-label">Hidden</label>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Publish Schedule</h6>
                  </div>
                  <div className="card-body">
                    <div className="row g-3 align-items-center">
                      <div className="col-md-12">
                        <label className="form-label">Publish Date</label>
                        <input type="date" className="form-control w-100" />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">Publish Time</label>
                        <input type="time" className="form-control w-100" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Categories</h6>
                  </div>
                  <div className="card-body">
                    <label className="form-label">Parent category Select</label>
                    <select
                      className="form-select"
                      size="3"
                      aria-label="size 3 select example"
                    >
                      <option value="2">Clothes</option>
                      <option value="3">Toy</option>
                      <option value="4">Cosmetic</option>
                      <option value="5">Laptop</option>
                      <option value="6">Mobile</option>
                      <option value="7">Watch</option>
                    </select>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header py-3 bg-transparent border-bottom-0">
                    <h6 className="m-0 fw-bold">Categories Image Upload</h6>
                    <small>
                      With event and default file try to remove the image
                    </small>
                  </div>
                  <div className="card-body">
                    <input
                      type="file"
                      id="dropify-event"
                      data-default-file="assets/images/product/cropimg-upload.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-3">
                <div className="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                  <h6 className="mb-0 fw-bold ">Basic information</h6>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row g-3 align-items-center">
                      <div className="col-md-6">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Page Title</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">
                          Product Identifier URL
                        </label>
                        <div className="input-group mb-3">
                          <span className="input-group-text">
                            https://eBazar.com
                          </span>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">
                          Product Description
                        </label>
                        <div id="editor">
                          <h4>Please add Product Description here</h4>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card">
                <div className="card-header py-3 bg-transparent border-bottom-0">
                  <h6 className="m-0 fw-bold">Cropped Images</h6>
                  <small>
                    If You Cropped Images Please Upload and croppd easily.
                  </small>
                </div>
                <div className="card-body">
                  <div className="row g-3 mb-3">
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <div className="img-container">
                        <img
                          id="image"
                          src="assets/images/product/upload.png"
                          className="img-responsive"
                          alt="Picture"
                        />
                      </div>
                    </div>
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <div className="docs-preview clearfix">
                        <div className="img-preview preview-lg"></div>
                        <div className="img-preview preview-md"></div>
                        <div className="img-preview preview-sm"></div>
                        <div className="img-preview preview-xs"></div>
                      </div>
                      <div className="docs-data">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">X</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataX"
                            placeholder="x"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">PX</span>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Y</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataY"
                            placeholder="y"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">PX</span>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Width</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataWidth"
                            placeholder="width"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">PX</span>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Height</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataHeight"
                            placeholder="height"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">PX</span>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">Rotate</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataRotate"
                            placeholder="rotate"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">Deg</span>
                          </div>
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">ScaleX</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataScaleX"
                            placeholder="scaleX"
                          />
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">ScaleY</span>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            id="dataScaleY"
                            placeholder="scaleY"
                          />
                        </div>
                        {/* <!-- /.pixels of image --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Row end  -->  */}
                  <div className="row g-3">
                    <div className="col-lg-8 col-md-12 docs-buttons">
                      {/* <!-- .btn groups --> */}
                      <button
                        type="button"
                        className="btn btn-sm btn-info"
                        data-method="setDragMode"
                        data-option="move"
                        title="Move"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("setDragMode", "move")'
                        >
                          {" "}
                          <i className="icofont-drag1"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-info"
                        data-method="setDragMode"
                        data-option="crop"
                        title="Crop"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("setDragMode", "crop")'
                        >
                          {" "}
                          <i className="icofont-crop"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-success"
                        data-method="zoom"
                        data-option="0.1"
                        title="Zoom In"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("zoom", 0.1)'
                        >
                          {" "}
                          <i className="icofont-ui-zoom-in"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-success"
                        data-method="zoom"
                        data-option="-0.1"
                        title="Zoom Out"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("zoom", -0.1)'
                        >
                          {" "}
                          <i className="icofont-ui-zoom-out"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="move"
                        data-option="-10"
                        data-second-option="0"
                        title="Move Left"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("move", -10, 0)'
                        >
                          {" "}
                          <i className="icofont-circled-left"></i>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="move"
                        data-option="10"
                        data-second-option="0"
                        title="Move Right"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("move", 10, 0)'
                        >
                          {" "}
                          <i className="icofont-circled-right"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="move"
                        data-option="0"
                        data-second-option="-10"
                        title="Move Up"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("move", 0, -10)'
                        >
                          {" "}
                          <i className="icofont-circled-up"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="move"
                        data-option="0"
                        data-second-option="10"
                        title="Move Down"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("move", 0, 10)'
                        >
                          {" "}
                          <i className="icofont-circled-down"></i>
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="rotate"
                        data-option="-45"
                        title="Rotate Left"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("rotate", -45)'
                        >
                          {" "}
                          <i className="icofont-rotation"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="rotate"
                        data-option="45"
                        title="Rotate Right"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("rotate", 45)'
                        >
                          {" "}
                          <i className="icofont-rotation"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="scaleX"
                        data-option="-1"
                        title="Flip Horizontal"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("scaleX", -1)'
                        >
                          {" "}
                          <i className="icofont-exchange"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="scaleY"
                        data-option="-1"
                        title="Flip Vertical"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("scaleY", -1)'
                        >
                          {" "}
                          <i className="icofont-expand-alt"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="crop"
                        title="Crop"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("crop")'
                        >
                          {" "}
                          <i className="icofont-checked"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="clear"
                        title="Clear"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("clear")'
                        >
                          {" "}
                          <i className="icofont-ui-delete"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="disable"
                        title="Disable"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("disable")'
                        >
                          {" "}
                          <i className="icofont-lock"></i>{" "}
                        </span>
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="enable"
                        title="Enable"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("enable")'
                        >
                          {" "}
                          <i className="icofont-unlock"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-secondary"
                        data-method="reset"
                        title="Reset"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("reset")'
                        >
                          {" "}
                          <i className="icofont-refresh"></i>{" "}
                        </span>
                      </button>
                      <label
                        className="btn btn-sm btn-secondary btn-upload"
                        for="inputImage"
                        title="Upload image file"
                      >
                        <input
                          type="file"
                          className="sr-only"
                          id="inputImage"
                          name="file"
                          accept="image/*"
                        />
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title="Import image with Blob URLs"
                        >
                          {" "}
                          <i className="icofont-upload"></i>{" "}
                        </span>
                      </label>
                      <button
                        type="button"
                        className="btn btn-sm  btn-secondary"
                        data-method="destroy"
                        title="Destroy"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("destroy")'
                        >
                          {" "}
                          <i className="icofont-power"></i>{" "}
                        </span>
                      </button>

                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        data-method="getCroppedCanvas"
                        data-bs-toggle="modal"
                        data-bs-target="#getCroppedCanvasModal"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getCroppedCanvas")'
                        >
                          {" "}
                          Get Cropped Canvas{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        data-method="getCroppedCanvas"
                        data-bs-toggle="modal"
                        data-bs-target="#getCroppedCanvasModal"
                        data-option='{ "width": 160, "height": 90 }'
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getCroppedCanvas", { width: 160, height: 90 })'
                        >
                          {" "}
                          160&times;90{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        data-method="getCroppedCanvas"
                        data-bs-toggle="modal"
                        data-bs-target="#getCroppedCanvasModal"
                        data-option='{ "width": 320, "height": 180 }'
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getCroppedCanvas", { width: 320, height: 180 })'
                        >
                          {" "}
                          320&times;180{" "}
                        </span>{" "}
                      </button>

                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="getData"
                        data-option
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getData")'
                        >
                          {" "}
                          Get Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="setData"
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("setData", data)'
                        >
                          {" "}
                          Set Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="getContainerData"
                        data-option
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getContainerData")'
                        >
                          {" "}
                          Get Container Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="getImageData"
                        data-option
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getImageData")'
                        >
                          {" "}
                          Get Image Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="getCanvasData"
                        data-option
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getCanvasData")'
                        >
                          {" "}
                          Get Canvas Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="setCanvasData"
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("setCanvasData", data)'
                        >
                          {" "}
                          Set Canvas Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="getCropBoxData"
                        data-option
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("getCropBoxData")'
                        >
                          {" "}
                          Get Crop Box Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="setCropBoxData"
                        data-target="#putData"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title='$().cropper("setCropBoxData", data)'
                        >
                          {" "}
                          Set Crop Box Data{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="moveTo"
                        data-option="0"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title="cropper.moveTo(0)"
                        >
                          {" "}
                          0,0{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="zoomTo"
                        data-option="1"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title="cropper.zoomTo(1)"
                        >
                          {" "}
                          100%{" "}
                        </span>{" "}
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-method="rotateTo"
                        data-option="180"
                      >
                        {" "}
                        <span
                          className="docs-tooltip"
                          data-toggle="tooltip"
                          title="cropper.rotateTo(180)"
                        >
                          {" "}
                          180°{" "}
                        </span>{" "}
                      </button>
                      <input
                        type="text"
                        className="form-control"
                        id="putData"
                        placeholder="Get data to here or set data with this value"
                      />
                    </div>
                    <div className="col-lg-4 col-md-12 docs-toggles">
                      {/* <!-- .btn groups --> */}
                      <div
                        className="btn-group btn-group-justified"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-secondary active">
                          <input
                            type="radio"
                            className="sr-only"
                            id="aspectRatio0"
                            name="aspectRatio"
                            value="1.7777777777777777"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="aspectRatio: 16 / 9"
                          >
                            {" "}
                            16:9{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="aspectRatio1"
                            name="aspectRatio"
                            value="1.3333333333333333"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="aspectRatio: 4 / 3"
                          >
                            {" "}
                            4:3{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="aspectRatio2"
                            name="aspectRatio"
                            value="1"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="aspectRatio: 1 / 1"
                          >
                            {" "}
                            1:1{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="aspectRatio3"
                            name="aspectRatio"
                            value="0.6666666666666666"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="aspectRatio: 2 / 3"
                          >
                            {" "}
                            2:3{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="aspectRatio4"
                            name="aspectRatio"
                            value="NaN"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="aspectRatio: NaN"
                          >
                            {" "}
                            Free{" "}
                          </span>{" "}
                        </label>
                      </div>
                      <div
                        className="btn-group btn-group-justified"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-secondary active">
                          <input
                            type="radio"
                            className="sr-only"
                            id="viewMode0"
                            name="viewMode"
                            value="0"
                            checked
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="View Mode 0"
                          >
                            {" "}
                            VM0{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="viewMode1"
                            name="viewMode"
                            value="1"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="View Mode 1"
                          >
                            {" "}
                            VM1{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="viewMode2"
                            name="viewMode"
                            value="2"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="View Mode 2"
                          >
                            {" "}
                            VM2{" "}
                          </span>{" "}
                        </label>
                        <label className="btn btn-secondary">
                          <input
                            type="radio"
                            className="sr-only"
                            id="viewMode3"
                            name="viewMode"
                            value="3"
                          />
                          <span
                            className="docs-tooltip"
                            data-toggle="tooltip"
                            title="View Mode 3"
                          >
                            {" "}
                            VM3{" "}
                          </span>{" "}
                        </label>
                      </div>
                      <div className="dropdown dropup docs-options">
                        <button
                          type="button"
                          className="btn btn-success btn-block dropdown-toggle"
                          id="toggleOptions"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                        >
                          {" "}
                          Toggle Options <span className="caret"></span>{" "}
                        </button>

                        <ul
                          className="dropdown-menu"
                          aria-labelledby="toggleOptions"
                          role="menu"
                        >
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="responsive"
                                checked
                              />{" "}
                              responsive{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="restore" checked />{" "}
                              restore{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="checkCrossOrigin"
                                checked
                              />{" "}
                              checkCrossOrigin{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="checkOrientation"
                                checked
                              />{" "}
                              checkOrientation{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="modal" checked />{" "}
                              modal{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="guides" checked />{" "}
                              guides{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="center" checked />{" "}
                              center{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="highlight" checked />{" "}
                              highlight{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="background"
                                checked
                              />{" "}
                              background{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="autoCrop" checked />{" "}
                              autoCrop{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="movable" checked />{" "}
                              movable{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="rotatable" checked />{" "}
                              rotatable{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="scalable" checked />{" "}
                              scalable{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input type="checkbox" name="zoomable" checked />{" "}
                              zoomable{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="zoomOnTouch"
                                checked
                              />{" "}
                              zoomOnTouch{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="zoomOnWheel"
                                checked
                              />{" "}
                              zoomOnWheel{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="cropBoxMovable"
                                checked
                              />{" "}
                              cropBoxMovable{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="cropBoxResizable"
                                checked
                              />{" "}
                              cropBoxResizable{" "}
                            </label>
                          </li>
                          <li role="presentation">
                            <label className="checkbox-inline">
                              <input
                                type="checkbox"
                                name="toggleDragModeOnDblclick"
                                checked
                              />{" "}
                              toggleDragModeOnDblclick{" "}
                            </label>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Row end  -->  */}
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Row end  -->  */}
        </div>
      </div>
    </div>
  );
}

export default CategoriesAdd;
