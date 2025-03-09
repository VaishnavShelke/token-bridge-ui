import React from "react";

import CheckoutSummaryComponent from "../components/CheckoutSummaryComponent";

export default function VerificationSuccessfullPage() {
  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center my-4">
        <div
          className="container d-flex flex-column justify-content-center neonTextMy neonBoxMy neon-green rounded-4 "
          style={{ maxWidth: "60%" }}
        >
          <div className="fs-2 fw-bold text-center  ">ACCOUNT VERIFICATION</div>
          <div className="mt-3 display-1 fw-bold text-center ">SUCESSFULL</div>
          <div className="mt-2">
            <span className="text-light">
              The game has initiated the token transafer on Sepolia Ethereum
              Test Network
            </span>
          </div>
        </div>
      </div>
      <div>{/* <ContractInfo /> */}</div>
      <div className="container row">
        <div className="col-5">
          <div className="my-2">
            <div className="glass">
              <div>
                <div className="fs-5 fw-bold text-center text-light">
                  Token Transfer Request Initiated For Account{" "}
                </div>
                <div className="fs-5 fw-bold text-center text-light"></div>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn text-dark glass fw-bold rounded-4"
                  >
                    <i class="fa-solid fa-right-to-bracket"></i>
                    <span className="mx-3 text-light">0xe1b86......2D93E6</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="neon-backgroundmy neon-bonewhite container">
              <div className="my-2">
                <div>
                  <div
                    className="fs-5 fw-bold text-center mx-3 container"
                    style={{ color: "#6BD425" }}
                  >
                    TokenFlex Account Not Present Signup to make one
                  </div>
                  <div className="fs-5 fw-bold text-center text-light"></div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn text-light fw-bold rounded-4 my-3 d-flex align-items-center "
                      style={{ backgroundColor: "#DE541E" }}
                    >
                      <i class="fa-solid fa-right-to-bracket"></i>
                      <span className="mx-3 fs-3 text-light">TokenFlex</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <CheckoutSummaryComponent />
        </div>
      </div>
    </div>
  );
}
