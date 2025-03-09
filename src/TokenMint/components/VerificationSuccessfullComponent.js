import React from "react";
import VerificationResultPage from "../pages/VerificationResultPage";
import { connect } from "react-redux";
import { doNothingAction } from "../actions/index";

function VerificationSuccessfullComponent({ verifyotp }) {
  // addressEtherScanUrl
  return (
    <div>
      <VerificationResultPage />
    </div>
  );
}

const mapStateToProps = (state) => ({
  verifyotp: state.verifyotp,
});

export default connect(mapStateToProps, { doNothingAction })(
  VerificationSuccessfullComponent
);
