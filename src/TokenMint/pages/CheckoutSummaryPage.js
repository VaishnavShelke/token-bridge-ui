import React from "react";

export default function CheckoutSummaryPage({ playerInfo, tokenmintinfo }) {
  return (
    <div>
      <ul className="list-group text-light mb-3">
        <div className="p-1 glass rounded">
          <li className="my-1 mx-1 d-flex justify-content-between">
            <div>
              <img
                className="img-fluid"
                style={{ maxHeight: "3vh" }}
                src="https://token-mint-trade.s3.ap-south-1.amazonaws.com/other-images/TokenMintLogo.png"
              ></img>
            </div>
          </li>
          <li className="my-1 mx-1 border-top d-flex justify-content-around lh-condensed">
            <div className="">
              <img
                className="img-fluid"
                style={{ maxHeight: "12vh" }}
                src={tokenmintinfo.playerInfo.gameLogo}
              ></img>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-center">
                <h6 className="fs-8">Player Id</h6>
                <strong className="text-bold fs-2">
                  {tokenmintinfo.playerInfo.playerName}
                </strong>
              </div>
            </div>
          </li>
          {/* <li className="my-1 mx-1 border-top lh-condensed">
          <div className="row">
            <div className="col-6 d-flex justify-content-center align-items-center my-2">
              <strong className="text-bold fs-6 mx-2">
                Token Flex Account Detected
              </strong>
            </div>

            <div className="col-6 d-flex justify-content-center my-2">
              <button
                type="button"
                className="btn text-dark glass fw-bold rounded-4"
              >
                <i class="fa-solid fa-right-to-bracket"></i>
                <span className="mx-3 text-light">Token Flex Account</span>
              </button>
            </div>
          </div>
        </li> */}
          <li className="my-1 mx-1 border-top  d-flex justify-content-center">
            <strong className="my-1 text-bold fs-6">
              {tokenmintinfo.playerInfo.gameName}
            </strong>
          </li>
          <li className="my-2 mx-1 border-top container ">
            <div className="mt-2 d-flex justify-content-between">
              <div className="text-light ">
                <h6 className="text-bold">
                  {tokenmintinfo.itemInfo.itemTitle}
                </h6>
                <small>OUTFIT</small>
              </div>
              <span className="text-light fs-4">
                QTY {tokenmintinfo.itemInfo.itemQuantity}
              </span>
            </div>
          </li>
          <li className="my-2 mx-1 border-top  d-flex justify-content-between">
            <span>Total Items</span>
            <strong>{tokenmintinfo.itemInfo.itemQuantity}</strong>
          </li>
        </div>
      </ul>
    </div>
  );
}
