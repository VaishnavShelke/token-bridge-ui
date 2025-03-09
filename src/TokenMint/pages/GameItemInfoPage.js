import React from "react";
import "../styles/styles.css";
import { MyJSONStringify } from "../utility/utility";

export default function GameItemInfoPage(props) {
  console.log(`GameInfoPage :: ${MyJSONStringify(props)}`);
  return (
    <div>
      <div
        className="d-flex flex-column align-item-center justify-content-center  glass shadow-lg rounded"
        style={{}}
      >
        <div>
          <div className="d-flex justify-content-center glass">
            <img
              src={props.itemInfo.itemImgUrl}
              className="shadow-lg"
              style={{ maxHeight: "80%" }}
            />
          </div>
          <div className="text-light mx-2 mt-2">
            <div className="d-flex justify-content-center glass  text-light">
              <div className="container text-center">
                <h6 className="mx-1 fs-2 neonTextMy neon-pink">
                  {props.itemInfo.itemTitle}
                </h6>
                <small className="fw-bold fs-5 neonTextMy neon-bonewhite">
                  {props.itemInfo.itemCategory}
                </small>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          id="carouselExampleControls"
          className="carousel slide  flex-grow-1 d-flex flex-column "
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active flex-grow-1 d-flex justify-content-center align-items-center">
              <img
                className="d-block shadow-lg rounded"
                src={props.tokenMintTransactionInfo.itemLogo}
                alt="First slide"
                style={{ minWidth: "300px" }}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div> */}
      </div>
      {/* <div className="my-3">
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-condensed bg-dark border border-dark shadow-lg rounded text-light">
            <div>
              <h6 className="my-0">
                {props.tokenMintTransactionInfo.itemName}
              </h6>
              <small className="">OUTFIT</small>
            </div>
            <span className="">1006</span>
          </li>
          <li className="list-group-item bg-dark border border-dark shadow-lg rounded text-light">
            Contract Item Id 1006
          </li>
        </ul>
      </div> */}
    </div>
  );
}
