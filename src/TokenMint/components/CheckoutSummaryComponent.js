import React from "react";
import CheckoutSummaryPage from "../pages/CheckoutSummaryPage";
import { connect } from "react-redux";
import { doNothingAction } from "../actions/index";

function CheckoutSummaryComponent({ tokenmintinfo }) {
  console.log(`Checkout Summarry Page Info ${JSON.stringify(tokenmintinfo)}`);
  return (
    <div>
      <CheckoutSummaryPage tokenmintinfo={tokenmintinfo} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  tokenmintinfo: state.tokenmintinfo,
});

export default connect(mapStateToProps, { doNothingAction })(
  CheckoutSummaryComponent
);
