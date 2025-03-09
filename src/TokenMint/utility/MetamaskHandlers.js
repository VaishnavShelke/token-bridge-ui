import {
  PLEASE_INSTALL_METAMASK,
  SUCCESSFULLY_CONNECTED_TO_WALLET,
  COULDNT_CONNECT_TO_METAMASK,
  NOT_CONNECTED_TO_GOERLI,
  GOERLI_TEST_NET_CHAIN_ID,
} from "./Constants";

import Web3 from "web3";
const ethers = require("ethers");

export const connectWallet = async (setWeb3ProviderHandler) => {
  if (window.ethereum) {
    try {
      const web3 = new Web3(window.ethereum);
      const chainId = await web3.eth.getChainId();
      if (chainId.toString() === GOERLI_TEST_NET_CHAIN_ID) {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setWeb3ProviderHandler(provider);
        const obj = {
          address: addressArray[0],
          statusCode: SUCCESSFULLY_CONNECTED_TO_WALLET,
          statusDescription: "Successfully Connected To Wallet",
          chainId: chainId.toString(),
        };
        return obj;
      } else {
        const obj = {
          statusCode: NOT_CONNECTED_TO_GOERLI,
          statusDescription: "Please Switch to GOerli TestNetwork",
        };
        return obj;
      }
    } catch (err) {
      return {
        address: null,
        statusCode: COULDNT_CONNECT_TO_METAMASK,
        statusDescription: err.message,
      };
    }
  } else {
    return {
      address: null,
      statusCode: PLEASE_INSTALL_METAMASK,
      statusDescription: "Please Install Metamask",
    };
  }
};

export const getSignatureFromMessage = async (message, web3Provider) => {
  if (web3Provider === null) return;
  try {
    const signer = web3Provider.getSigner();
    const signature = await signer.signMessage(message);
    return signature;
  } catch (error) {
    return null;
  }
};
