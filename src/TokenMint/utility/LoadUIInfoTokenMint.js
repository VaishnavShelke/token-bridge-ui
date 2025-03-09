import { INTERNAL_ERROR } from "../utility/Constants";
import axios from "axios";

import {
  LoadUIMockResponse,
  LoadUITransactionDetailsMock,
  fetchInitializationStateMockResponse,
  verifySignatureServerResponse,
} from "../data/CreateTokenUIMOCK";

export const tokenMintLoadUI = async () => {
  return LoadUIMockResponse;
};

export const getTokenMintTransactionInfo = async () => {
  return LoadUITransactionDetailsMock;
};

const LoadUIUrl = process.env.REACT_APP_LOADUI_API_URL;
export const getInitializationState = async (txnId) => {
  const requestUrl = `${LoadUIUrl}${txnId}`;
  console.log(`Sending Load UI Request :: ${requestUrl}`);
  const jsonRequest = {
    tokenMintTransactionId: txnId,
  };
  console.log(`Json Request to initializq state :: ${jsonRequest}`);

  try {
    const response = await axios.post(requestUrl, jsonRequest, {
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header to indicate JSON data
      },
    });
    console.log(`Response from LoadUI ${JSON.stringify(response.data)}`);
    if (response && response.data) {
      return response.data;
    } else {
      console.log(`Recieved null response from load UI`);
      return {
        statusCode: INTERNAL_ERROR,
        statusDescription: "Could Not Connect To The Servers Connection Failed",
      };
    }
  } catch (error) {
    console.log(`Error in making post request ot load Ui ${error.message}`);
  }
};

export const getInitializationStateMock = async (payload) => {
  return fetchInitializationStateMockResponse;
};

export const verifySignatureRequestPost = async ({
  verifySignaturePayload,
  verifyAddressUrl,
}) => {
  // return {
  //   statusCode: "000",
  //   statusDescription: "Game Server Acknoweldged the request",
  //   tokenMintTransactionId: "20231011172350392",
  //   address: "0xF51FE9b283FBf0CB27C8664c18bE1eA78363CD04",
  //   addressVerified: "Y",
  //   addressEtherScanUrl:
  //     "https://sepolia.etherscan.io/address/0x184a20faD1487B68E951f3094eE44fda9bf929b3",
  // };

  console.log(
    `Verify OTP Signature Payload ${JSON.stringify(verifySignaturePayload)}`
  );
  const requestUrl = verifyAddressUrl;

  try {
    console.log(`Request URL ${requestUrl}`);
    const response = await axios.post(requestUrl, verifySignaturePayload, {
      headers: {
        "Content-Type": "application/json", // Set the Content-Type header to indicate JSON data
      },
    });
    console.log(
      `Response from Verify Signature ${JSON.stringify(response.data)}`
    );
    if (response && response.data) {
      return response.data;
    } else {
      console.log("Recieved Null Response for verifySignature");
      return null;
    }
  } catch (error) {
    console.log(`Error In Verify Signature post ${error.message}`);
    return null;
  }
};
