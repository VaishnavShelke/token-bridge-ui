import React from "react";

export default function VerificationFailedPage() {
  return (
    <div>
      {" "}
      <div className="container d-flex justify-content-center align-items-center my-4">
        <div
          className="container d-flex flex-column justify-content-center neonTextMy neonBoxMy neon-red rounded-4 "
          style={{ maxWidth: "60%" }}
        >
          <div className="fs-2 fw-bold text-center  ">ACCOUNT VERIFICATION</div>
          <div className="mt-3 display-1 fw-bold text-center ">FAILED</div>
          <div className="mt-2 text-center">
            <span className="text-light">
              Could not authenticate player/ Incorrect OTP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
