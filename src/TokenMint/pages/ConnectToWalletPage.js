import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import { MyJSONStringify } from "../utility/utility";

export default function ConnectToWalletPage(props) {
  console.log(`Connect TO Wallet Props :: ${MyJSONStringify(props)}`);
  return (
    <div
      className="container glass text-center rounded"
      style={{ width: "50vw" }}
    >
      <div className="container my-4">
        <div>
          <div className=" d-flex justify-content-center align-items-center rounded glass">
            <div className="">
              <img
                className="mx-auto "
                style={{ maxWidth: "80%", maxHeight: "20vh" }}
                src="https://token-mint-trade.s3.ap-south-1.amazonaws.com/game-png/1001.png"
                alt=""
              />
            </div>
          </div>

          <div className=" glass rounded my-3" style={{}}>
            <div
              className="container mt-3 rounded-4 d-flex align-items-center justify-content-center"
              style={{ backgroundColor: "#E2E2E2", width: "70%" }}
            >
              <div className="fs-3 fw-bold ">
                <p style={{ color: "#022B3A" }}>Welcome</p>
                <div
                  className="border border-3 rounded-4 "
                  style={{ backgroundColor: "#EAEAEA" }}
                >
                  <h1
                    className=" display-6 fw-bold"
                    style={{ color: "#FF5E5B" }}
                  >
                    {props.tokenmintinfo.playerInfo.playerName}
                  </h1>
                </div>
                <div className="">
                  <p className="" style={{ color: "#022B3A" }}>
                    Please Connect Your Wallet To Proceed
                  </p>
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-center  border-3 "
              style={{}}
            >
              <div className="">
                {props.wallet.connectedAddress ? (
                  <div>
                    <div
                      className="my-3 btn btn-lg btn-block"
                      type="submit"
                      style={{
                        backgroundColor: "#09E85E",
                        boxShadow: "0px 6px 12px rgba(255, 255, 255,1)",
                      }}
                    >
                      <Link
                        to="/tokenmint/transactionInfo"
                        style={{ textDecoration: "none" }}
                      >
                        <h1 className="text-light">
                          Checkout
                          <i className="fa-solid fa-arrow-right mr-4"></i>
                        </h1>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div>
                    <button
                      className="my-3 btn btn-lg btn-block"
                      type="submit"
                      style={{
                        backgroundColor: "#DE541E",
                        boxShadow: "0px 6px 12px rgba(255, 255, 255,1)",
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        props.onConnectWalletClick(
                          props.tokenmintinfo.contractInfo
                        );
                      }}
                    >
                      <h1 className="text-light">Connect Wallet</h1>
                    </button>
                  </div>
                )}

                {props.wallet.connectedAddress && (
                  <div className="container my-3 fs-3 fw-bold">
                    <p style={{ color: "white" }}>Connected Address</p>
                    <div className="d-flex justify-content-around">
                      <div className="row fs-4">
                        <div className="col-6  fs-6">
                          <div>
                            <div>
                              <span
                                className="badge badge-pill text-light mx-2 fs-4"
                                style={{ backgroundColor: "#09E85E" }}
                              >
                                {props.wallet.connectedAddress}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
