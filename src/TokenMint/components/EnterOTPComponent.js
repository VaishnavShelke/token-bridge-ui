import React, { useState } from "react";
import "../styles/styles.css";
import EnterOTPPage from "../pages/EnterOTPPage";
import { connect } from "react-redux";
import { verifyOTPAction } from "../actions/index";
import { useNavigate } from "react-router-dom";

function EnterOTPComponent({ wallet, tokenmintinfo, verifyOTPAction }) {
  const [formData, setFormData] = useState({
    otp: "",
  });

  const navigate = useNavigate();
  const onSignButtonPressed = () => {
    console.log(`TokenMint Sign Button Pressed Address Signed`);
    navigate("/tokenmint/verify-otp-result");
  };
  const onVerifyOTPSubmit = (event) => {
    event.preventDefault();
    console.log(`verifyOTPSubmit pressed ${JSON.stringify(formData)}`);

    verifyOTPAction({
      ...formData,
      provider: wallet.provider,
      connectedAddress: wallet.connectedAddress,
      verifyAddressUrl: tokenmintinfo.tokenMintTransactionInfo.verifyAddressUrl,
      gameId: tokenmintinfo.tokenMintTransactionInfo.gameId,
      tokenMintTransactionId:
        tokenmintinfo.tokenMintTransactionInfo.tokenMintTransactionId,
      onSignButtonPressed: onSignButtonPressed,
    });
  };

  const handleOTPChange = (e) => {
    e.preventDefault();
    const { otp, value } = e.target;
    setFormData({
      ...formData,
      otp: value,
    });
  };

  return (
    <div>
      <EnterOTPPage
        wallet={wallet}
        onVerifyOTPSubmit={onVerifyOTPSubmit}
        handleOTPChange={handleOTPChange}
        formData={formData}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  wallet: state.wallet,
  tokenmintinfo: state.tokenmintinfo,
});

export default connect(mapStateToProps, { verifyOTPAction })(EnterOTPComponent);
