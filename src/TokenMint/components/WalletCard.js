import React, { useState, useEffect } from "react";

import { connectWallet } from "../utility/MetamaskHandlers";
import {
  SUCCESSFULLY_CONNECTED_TO_WALLET,
  containerStyle,
} from "../utility/Constants";

function WalletCard(props) {
  const [metaMaskWalletState, setMetaMaskWalletState] = useState({
    primaryWalletAddress: "",
    chainId: "",
  });
  const [allKnownAccounts, setAllKnownAccounts] = useState([]);

  const accountsChangedHandler = (newAccount) => {
    updateAllKnownAccountsHandler(newAccount);
    setMetaMaskWalletState({
      ...metaMaskWalletState,
      primaryWalletAddress: newAccount,
    });
  };

  const setWeb3ProviderHandler = async (provider) => {
    props.setWeb3ProviderHandler(provider);
  };

  useEffect(() => {
    async function loadOnRefresh() {
      setAllKnownAccounts(props.playerEthAccounts);
    }
    console.log("Use Effect WalletCard.js Working...");
    loadOnRefresh();
  }, [props.playerEthAccounts]);

  const updateAllKnownAccountsHandler = (newAccounts) => {
    const allKnownAccountsLocal = [...props.playerEthAccounts, newAccounts];
    setAllKnownAccounts(allKnownAccountsLocal);
  };

  const connectWalletHandler = async () => {
    const response = await connectWallet(setWeb3ProviderHandler);
    const { address, statusCode, statusDescription, chainId } = response;
    if (statusCode !== SUCCESSFULLY_CONNECTED_TO_WALLET) {
      alert(statusDescription);
    } else {
      updateAllKnownAccountsHandler(address);
      setMetaMaskWalletState({
        ...metaMaskWalletState,
        primaryWalletAddress: address,
        chainId: chainId,
      });
      alert(statusDescription);
    }
  };

  window.ethereum &&
    window.ethereum.on("chainChanged", (chainId) => {
      window.location.reload();
    });

  window.ethereum &&
    window.ethereum.on("accountsChanged", (accounts) => {
      accountsChangedHandler(accounts[0]);
    });

  return (
    <div style={{ ...containerStyle, height: "400px" }}>
      <h2>WalletCard</h2>
      <h4>Please Connect to your Ethereum Wallet</h4>
      <button onClick={connectWalletHandler}>Connect To Wallet</button>
      {allKnownAccounts.map((account, index) => {
        return (
          <p
            key={index}
            style={
              metaMaskWalletState.primaryWalletAddress !== null &&
              account.toLowerCase() ===
                metaMaskWalletState.primaryWalletAddress.toLowerCase()
                ? { color: "green" }
                : { color: "red" }
            }
          >
            Account : {String(account)}
          </p>
        );
      })}
      {metaMaskWalletState.primaryWalletAddress !== null &&
      metaMaskWalletState.primaryWalletAddress !== "" ? (
        <p>
          Wallet Addresses Connected :{" "}
          {String(metaMaskWalletState.primaryWalletAddress)}
        </p>
      ) : (
        <p>No Wallet Connected</p>
      )}
      {metaMaskWalletState.chainId !== null &&
      metaMaskWalletState.chainId !== "" ? (
        <p>
          Successfully Connected To GOERLI : chain Id :{" "}
          {String(metaMaskWalletState.chainId)}
        </p>
      ) : (
        <p>No Chain Id</p>
      )}
    </div>
  );
}

export default WalletCard;
