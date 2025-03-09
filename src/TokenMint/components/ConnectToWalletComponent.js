import React, { useEffect } from "react";
import ConnectToWalletPage from "../pages/ConnectToWalletPage";
import { connect } from "react-redux";
import { connectWalletAction, injectTransactionInfo } from "../actions/index";
import { useDispatch } from "react-redux";

function ConnectToWalletComponent({
  wallet,
  connectWalletAction,
  tokenmintinfo,
}) {
  const dispatch = useDispatch();
  let parsedStorage = null;
  useEffect(() => {
    // Function to retrieve data from session storage
    const retrieveData = () => {
      const storedData = sessionStorage.getItem("tokenmintinfo");
      if (storedData) {
        parsedStorage = JSON.parse(storedData);
        console.log(`Stored Data ${storedData}`);
        dispatch({
          type: "LOAD_TOKENMINTINFO_SUCCESS",
          payload: parsedStorage,
        });
      }
    };
    retrieveData();
  }, [dispatch]);

  const onConnectWalletClick = (contractInfo) => {
    console.log("Connect To Wallet Button Pressed!!!");
    connectWalletAction(contractInfo);
  };

  return (
    <div>
      <ConnectToWalletPage
        onConnectWalletClick={onConnectWalletClick}
        wallet={wallet}
        tokenmintinfo={tokenmintinfo}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
  tokenmintinfo: state.tokenmintinfo,
});

export default connect(mapStateToProps, {
  connectWalletAction,
  injectTransactionInfo,
})(ConnectToWalletComponent);
