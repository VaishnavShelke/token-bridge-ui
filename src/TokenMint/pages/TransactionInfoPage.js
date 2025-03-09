import React from "react";
import GameItemInfoComponent from "../components/GameItemInfoComponent";
import ContractInfo from "../components/ContractInfo";
import "../styles/styles.css";
import EnterOTPComponent from "../components/EnterOTPComponent";
import CheckoutSummaryComponent from "../components/CheckoutSummaryComponent";
export default function TransactionInfoPage() {
  return (
    <div className="container glass rounded">
      <div className="row my-4 mx-4">
        <div className="col-md-6 col-sm-12  order-md-2 mb-4">
          <h4 className="d-flex justify-content-center align-items-center mb-3">
            {/* <span className="text-light">Your Wallet</span>
            <span className="badge badge-secondary badge-pill">3</span> */}
            <button
              type="button"
              className="btn text-light glass fs-3 fw-bold rounded-4"
            >
              <i className="fas mx-3">&#xf555;</i>
              <span className="mx-3">Change Account</span>
            </button>
          </h4>

          <CheckoutSummaryComponent />

          <EnterOTPComponent />
        </div>

        <div className="col-md-6 col-sm-12 order-md-1">
          <div className="container text-center text-white fw-bold my-2 fs-3">
            <i class="fa-brands fa-ethereum mx-1"></i>
            <span className="mx-3">TOKENIZE ITEM</span>
          </div>

          <form className="needs-validation" novalidate="">
            <div className="container">
              <GameItemInfoComponent />
            </div>

            <div className="my-2" />

            <h4 className="mb-3">{/* <ContractInfo /> */}</h4>

            <div className="my-2" />
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn bg-light fs-3 fw-bold rounded-4"
                style={{ opacity: "0.7" }}
              >
                <i class="fa-solid  fa-xmark mx-3"></i>
                <span className="mx-3 text-dark">Cancel Tokenization</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
