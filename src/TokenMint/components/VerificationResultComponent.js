import React from "react";
import { connect } from "react-redux";
import VerificationResultPage from "../pages/VerificationResultPage";

import { doNothingAction } from "../actions/index";
function VerificationResultComponent() {
  return (
    <div>
      <VerificationResultPage />
    </div>
  );
}

const mapStateToProps = (state) => ({
  verifyotp: state.verifyotp,
  gameLandingPage: state.tokenmintinfo.tokenMintTransactionInfo.gameLandingPage,
});

export default connect(mapStateToProps, { doNothingAction })(
  VerificationResultComponent
);
