import { React, useEffect, useState } from "react";

import { getSignatureFromMessage } from "../utility/MetamaskHandlers";

import { verifySignatureRequestPost } from "../utility/LoadUIInfoTokenMint";

function TokenMintSignPage(props) {
  const [tokenMintTransactionInfo, setTokenMintTransactionInfo] = useState({});
  const [formData, setFormData] = useState({
    gameOTP: "",
  });

  useEffect(() => {
    async function loadOnRefresh() {
      setTokenMintTransactionInfo({
        ...props.tokenMintTransactionInfo,
        gameOTP: "OTP",
      });
    }
    loadOnRefresh();
  }, [props.tokenMintTransactionInfo]);

  const handleOTPChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      [name]: value,
    });
  };

  const prepareAndSendSignaturePayload = async (signature, signerAddress) => {
    const verifySignaturePayload = {
      tokenMintTransactionId: tokenMintTransactionInfo.tokenMintTransactionId,
      gameId: tokenMintTransactionInfo.gameId,
      signedMessage: signature,
      address: signerAddress,
    };
    console.log(verifySignaturePayload);
    sendSignedPayloadTOTokenUIHandler(verifySignaturePayload);
  };

  const sendSignedPayloadTOTokenUIHandler = async (verifySignaturePayload) => {
    const response = await verifySignatureRequestPost(verifySignaturePayload);
    if (response && response.statusCode === "000") {
      props.setPageSatusHandler({
        tokenizationSuccess: true,
      });
    } else {
      props.setPageSatusHandler({
        tokenizationFailed: true,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = formData.gameOTP;
    const signature = await getSignatureFromMessage(
      message,
      props.web3Provider
    );
    const signerAddress = await props.web3Provider.getSigner().getAddress();
    prepareAndSendSignaturePayload(signature, signerAddress);
  };

  return (
    <div style={{ backgroundColor: "#FFBAC7" }}>
      <h2>TokenMintSignPage</h2>
      <p>
        tokenMintTransactionId ::
        {tokenMintTransactionInfo.tokenMintTransactionId}
      </p>
      <form onSubmit={handleSubmit}>
        <label>Game OTP</label>
        <input
          type="text"
          name="gameOTP"
          value={formData.gameOTP}
          onChange={handleOTPChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TokenMintSignPage;
