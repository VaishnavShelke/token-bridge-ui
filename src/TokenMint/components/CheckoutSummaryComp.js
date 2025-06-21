import React from "react";

export default function CheckoutSummaryComp() {
  return (
    <div>
      <ul className="list-group text-light mb-3">
        <div className="p-1 glass rounded">
          <li className="my-1 mx-1 d-flex justify-content-between">
            <div>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  className="img-fluid"
                  style={{ maxHeight: "10vh" }}
                  src="https://raw.githubusercontent.com/VaishnavShelke/WibmoPersonalContent/refs/heads/main/Images/tokenmint-green-logo.png"
                ></img>
              </div>
            </div>
          </li>
          <li className="my-1 mx-1 border-top d-flex justify-content-around lh-condensed">
            <div className="">
              <img
                className="img-fluid"
                style={{ maxHeight: "12vh" }}
                src="https://raw.githubusercontent.com/VaishnavShelke/WibmoPersonalContent/refs/heads/main/Images/1001.png"
              ></img>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h6 className="fs-8">Player Id</h6>
                <strong className="text-bold fs-2">BestHuman012</strong>
              </div>
            </div>
          </li>
          {/* <li className="my-1 mx-1 border-top lh-condensed">
            <div className="row">
              <div className="col-6 d-flex justify-content-center align-items-center my-2">
                <strong className="text-bold fs-6 mx-2">
                  Token Flex Account Detected
                </strong>
              </div>

              <div className="col-6 d-flex justify-content-center my-2">
                <button
                  type="button"
                  className="btn text-dark glass fw-bold rounded-4"
                >
                  <i class="fa-solid fa-right-to-bracket"></i>
                  <span className="mx-3 text-light">Token Flex Account</span>
                </button>
              </div>
            </div>
          </li> */}
          <li className="my-1 mx-1 border-top  d-flex justify-content-center lh-condensed">
            <strong className="text-bold fs-6">
              PLAYER UNKONWN BATTLEGROUND
            </strong>
          </li>
          <li className="my-1 mx-1 border-top bg-light ">
            <div className="mx-3 d-flex justify-content-between">
              <div className="text-success ">
                <h6 className="text-bold">The Olive Branch - Pan</h6>
                <small>OUTFIT</small>
              </div>
              <span className="text-success">QTY 1</span>
            </div>
          </li>
          <li className="my-2 mx-1 border-top  d-flex justify-content-between">
            <span>Total Items</span>
            <strong>1</strong>
          </li>
        </div>
      </ul>
    </div>
  );
}
