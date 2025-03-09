import React, { useEffect } from "react";
import { connect } from "react-redux";
import TransactionInfoPage from "../pages/TransactionInfoPage";
import { Navigate } from "react-router-dom";
import { doNothingAction } from "../actions/index";

function TransactionInfoComponent({ wallet }) {
  // useEffect(() => {
  //   async function loadOnRefresh() {
  //     if (!wallet.provider) {
  //       return <Navigate to="/tokenmint/connectWallet" />;
  //     }
  //   }
  //   loadOnRefresh();
  // });

  if (wallet.provider) {
    return (
      <div>
        <TransactionInfoPage />
      </div>
    );
  } else {
    return <Navigate to="/tokenmint/connectWallet" />;
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
});

export default connect(mapStateToProps, { doNothingAction })(
  TransactionInfoComponent
);
