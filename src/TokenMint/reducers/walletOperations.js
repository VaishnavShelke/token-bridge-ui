import { connectWalletSync } from "../service/connectWalletService";
import { useDispatch } from "react-redux";
import { displayAlertAction } from "../actions/index";
const initialState = {
  walletConnected: false,
  connectedAddress: null,
  statusDescription: null,
  network: null,
  provider: null,
};

const walletOperations = (state = initialState, action) => {
  switch (action.type) {
    case "WALLET_CONNECTED":
      return {
        ...state,
        walletConnected: true,
        connectedAddress: action.payload.connectedAddress,
        statusDescription: "Connected To Wallet",
        network: action.payload.network,
        provider: action.payload.provider,
      };
    case "COULD_NOT_CONNECT_WALLET":
      return {
        ...state,
        walletConnected: false,
        statusDescription: action.payload.statusDescription,
        network: action.payload.network,
      };
    default:
      return {
        ...state,
      };
  }
};

export default walletOperations;
