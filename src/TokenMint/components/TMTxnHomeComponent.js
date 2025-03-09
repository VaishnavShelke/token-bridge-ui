import { useState, React, useEffect } from "react";
import TMTxnHomePage from "../pages/TMTxnHomePage";
import { Navigate } from "react-router-dom";

export default function TMTxnHomeComponent() {
  window.ethereum &&
    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

  window.ethereum &&
    window.ethereum.on("accountsChanged", (accounts) => {
      window.location.reload();
    });

  return (
    <div>
      <TMTxnHomePage />
    </div>
  );
}
