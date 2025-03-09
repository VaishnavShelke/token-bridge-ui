import React from "react";
import "../styles/styles.css";

export default function EnterOTPPage(props) {
  return (
    <div className="rounded glass text-light p-2 justify-content-center">
      <div className="text-center fw-bold fs-4 container mx-10 glass">
        Please Enter One Time Password To Verify Your Account
      </div>
      <div className="container justify-content-center my-2">
        <div className="neon-backgroundmy neon-bonewhite glass border-3">
          <div className="text-center mt-2 d-flex justify-content-center">
            <div
              className="text-light fw-bold fs-5 rounded"
              style={{ backgroundColor: "#09E85E" }}
            >
              <div className="mx-2">
                {props.wallet.connectedAddress
                  ? props.wallet.connectedAddress
                  : "Wallet Not Connected"}
              </div>
            </div>
          </div>
          <form
            onSubmit={props.onVerifyOTPSubmit}
            className="container row justify-content-center"
          >
            <div className="col-8 my-2">
              <input
                type="text"
                className="form-control fs-4 text-danger fw-bold text-center  shadow-lg "
                id="otp"
                name="otp"
                value={props.formData.otp}
                onChange={props.handleOTPChange}
              />
            </div>
            <div>
              <div className="col-12 my-2 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn rounded-5 text-light d-flex align-items-center fw-bold fs-4"
                  style={{ backgroundColor: "#DE541E" }}
                >
                  VERIFY ACCOUNT
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-2">
          <div>
            *** The game item will be transferred to the Address provided above
          </div>
          <div>
            *** It is recommended to use the account which has SEPOLIA-ETH
            balance
          </div>
        </div>
      </div>
    </div>
  );
}
