import { SUCCESSFULLY_CONNECTED_TO_WALLET } from "../utility/Constants";
import { connectWalletSync } from "../service/connectWalletService";
import { MyJSONStringify } from "../utility/utility";
import { verifySignatureRequestPost } from "../utility/LoadUIInfoTokenMint";
import {
  getInitializationState,
  getInitializationStateMock,
} from "../utility/LoadUIInfoTokenMint";

import { getSignatureFromMessage } from "../utility/MetamaskHandlers";

export const loadUIAction = (payload) => {
  return async (dispatch) => {
    try {
      const result = await getInitializationState(payload.txnId);
      console.log(`Fetc Init Data :: ${result}`);
      if (result && result.statusCode === "000") {
        dispatch({
          type: "LOAD_TOKENMINTINFO_SUCCESS",
          payload: result,
        });
        sessionStorage.setItem("tokenmintinfo", JSON.stringify(result));
      } else {
        dispatch({
          type: "LOAD_TOKENMINTINFO_FAILED",
        });
      }
    } catch (error) {
      console.log(`Error in loading UI ${error.message}`);
    }
  };
};

export const injectTransactionInfo = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "LOAD_TOKENMINTINFO_SUCCESS",
        payload: payload,
      });
    } catch (error) {
      console.log(`Error in loading UI ${error.message}`);
    }
  };
};

export const connectWalletAction = (contractInfo) => {
  return async (dispatch) => {
    try {
      console.log("Inside Connect Wallet Action");
      const result = await connectWalletSync(contractInfo);
      if (result && result.statusCode === SUCCESSFULLY_CONNECTED_TO_WALLET) {
        dispatch({ type: "WALLET_CONNECTED", payload: result });
      } else {
        dispatch({ type: "COULD_NOT_CONNECT_WALLET", payload: result });
        dispatch({
          type: "DISPLAY_ALERT",
          payload: {
            alertHeading: "Could Not Connect To Wallet",
            alertMessage: `${result.statusDescription}`,
          },
        });
      }
    } catch (error) {
      console.log(`Error In ConnectWalletAction :: ${error.message}`);
      dispatch({ type: "COULD_NOT_CONNECT_WALLET", payload: error.message });
      dispatch({
        type: "DISPLAY_ALERT",
        payload: {
          alertOn: true,
          alertHeading: "Could Not Connect To Wallet",
          alertMessage: `Internal Error ${error.message}`,
        },
      });
    }
  };
};

export const displayAlertAction = (payload) => {
  return async (dispatch) => {
    if (payload && payload.alertOn) {
      dispatch({ type: "DISPLAY_ALERT", payload: payload });
    } else {
      dispatch({ type: "HIDE_ALERT", payload: payload });
    }
  };
};

export const verifyOTPAction = (payload) => {
  console.log(`Payload in verifyOTPAction :: ${MyJSONStringify(payload)}`);
  return async (dispatch) => {
    try {
      console.log(`Veryfying the OTP :: ${MyJSONStringify(payload)}`);
      const signedMessage = await getSignatureFromMessage(
        payload.otp,
        payload.provider
      );
      console.log(`Signed Message ${signedMessage}`);
      if (signedMessage) {
        const verifySignaturePayload = {
          tokenMintTransactionId: payload.tokenMintTransactionId,
          signedMessage: signedMessage,
          address: payload.connectedAddress,
          gameId: payload.gameId,
        };
        const verifyAddressUrl = payload.verifyAddressUrl;
        const result = await verifySignatureRequestPost({
          verifySignaturePayload,
          verifyAddressUrl,
        });
        console.log(
          `Results from submit signed payload ${MyJSONStringify(result)}`
        );
        if ("Y" === result.addressVerified) {
          dispatch({ type: "ADDRESS_VERIFIED_SUCCESS", payload: result });
        } else {
          dispatch({ type: "ADDRESS_VERIFIED_FAILED", payload: result });
        }
        payload.onSignButtonPressed();
      } else {
        dispatch({
          type: "DISPLAY_ALERT",
          payload: {
            alertHeading: "Could Not Validate User",
            alertMessage: "Please Signe The OTP from metamask to Proceed",
          },
        });
      }
    } catch (error) {
      console.log(`Error in verify OTP Action ${error.message}`);
    }
  };
};

export const doNothingAction = (payload) => {
  return async (dispatch) => {};
};
