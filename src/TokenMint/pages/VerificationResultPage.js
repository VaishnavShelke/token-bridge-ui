import React from "react";
import ContractInfo from "../components/ContractInfo";
import "../styles/styles.css";
import CheckoutSummaryComp from "../components/CheckoutSummaryComp";
import VerificationSuccessfullPage from "./VerificationSuccessfullPage";
import VerificationFailedPage from "./VerificationFailedPage";
import ContractInfoComponent from "../components/ContractInfoComponent";

export default function VerificationResultPage({ verifyotp, gameLandingPage }) {
  return (
      <div className="container glass rounded">
          {verifyotp?.addressVerified === 'Y' ? (
              <VerificationSuccessfullPage />
          ) : (
              <VerificationFailedPage />
          )}
          {/* <VerificationFailedPage /> */}
          <ContractInfoComponent/>
          <div>
              <h4 className="d-flex justify-content-center align-items-center my-3">
                  <button
                      type="button"
                      className="btn text-light glass fs-3 fw-bold rounded-4"
                      onClick={() => {
                          // Navigate based on gameLandingPage or default
                          if (gameLandingPage) {
                              window.location.href = gameLandingPage.toString();
                          } else {
                              alert("Game landing page not defined.");
                          }
                      }}
                  >
                      <i className="fa-solid fa-arrow-right fa-rotate-180 mx-3"></i>
                      <span className="mx-3">Return Back To Game</span>
                  </button>
              </h4>
          </div>
      </div>
  );
}
