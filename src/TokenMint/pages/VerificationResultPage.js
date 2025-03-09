import React from "react";
import ContractInfo from "../components/ContractInfo";
import "../styles/styles.css";
import CheckoutSummaryComp from "../components/CheckoutSummaryComp";
import VerificationSuccessfullPage from "./VerificationSuccessfullPage";
import VerificationFailedPage from "./VerificationFailedPage";
import ContractInfoComponent from "../components/ContractInfoComponent";

export default function VerificationResultPage() {
  return (
    <div className="container glass rounded">
      <VerificationSuccessfullPage />
      {/* <VerificationFailedPage /> */}
      <ContractInfoComponent />
      <div>
        <h4 className="d-flex justify-content-center align-items-center my-3">
          {/* <span className="text-light">Your Wallet</span>
            <span className="badge badge-secondary badge-pill">3</span> */}
          <button
            type="button"
            className="btn text-light glass fs-3 fw-bold rounded-4"
          >
            <i class="fa-solid fa-arrow-right fa-rotate-180 mx-3"></i>
            <span className="mx-3">Return Back To Game</span>
          </button>
        </h4>
      </div>
    </div>
  );
}
