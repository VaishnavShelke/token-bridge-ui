import {
  PLEASE_INSTALL_METAMASK,
  SUCCESSFULLY_CONNECTED_TO_WALLET,
  COULDNT_CONNECT_TO_METAMASK,
  NOT_CONNECTED_TO_GOERLI,
  GOERLI_TEST_NET_CHAIN_ID,
} from "../utility/Constants";
import { MyJSONStringify } from "../utility/utility";

const ethers = require("ethers");

export const connectWalletSync = async (contractInfo) => {
  console.log(
    `Connect To Wallet :: Contract Info ${MyJSONStringify(contractInfo)}`
  );
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const network = await provider.getNetwork();
      console.log(`Network Info  ${JSON.stringify(network)}`);
      if (network.chainId == contractInfo.chainId) {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        return {
          provider: provider,
          connectedAddress: addressArray[0],
          statusCode: SUCCESSFULLY_CONNECTED_TO_WALLET,
          statusDescription: "Successfully Connected To Wallet",
          network: network.name,
        };
      } else {
        return {
          statusCode: NOT_CONNECTED_TO_GOERLI,
          statusDescription: `Please Switch to ${contractInfo.chain} network`,
          network: network.name,
        };
      }
    } catch (err) {
      return {
        statusCode: COULDNT_CONNECT_TO_METAMASK,
        statusDescription: err.message,
      };
    }
  } else {
    return {
      statusCode: PLEASE_INSTALL_METAMASK,
      statusDescription: "Please Install Metamask",
    };
  }
};
