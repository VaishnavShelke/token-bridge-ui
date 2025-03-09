import { React, useEffect } from "react";
import "../styles/styles.css";
import ConnectToWalletComponent from "../components/ConnectToWalletComponent";
import TransactionInfoComponent from "../components/TransactionInfoComponent";
import LoadUserInfoComponent from "../components/LoadUserInfoComponent";
import AlertComponent from "../components/AlertComponent";
import VerificationResultComponent from "../components/VerificationResultComponent";
import { Route, Routes } from "react-router-dom";

export default function TMTxnHomePage(props) {
  return (
    <div>
      <AlertComponent />
      <div className="checkout-background d-flex align-items-center justify-content-center">
        <Routes>
          <Route path="/tokenmint" Component={LoadUserInfoComponent} />
          <Route
            path="/tokenmint/connectWallet"
            Component={ConnectToWalletComponent}
          />
          <Route
            path="/tokenmint/transactionInfo"
            Component={TransactionInfoComponent}
          />
          <Route
            path="/tokenmint/verify-otp-result"
            Component={VerificationResultComponent}
          />
        </Routes>
      </div>
    </div>
  );
}

{
  /* <Routes>
      <Route>
        
      </Route>
      <Route
        path="/tokenmint/ui-server/load-ui/:txnId"
        Component={TMTxnHomeComponent}
      />
    </Routes> */
}
