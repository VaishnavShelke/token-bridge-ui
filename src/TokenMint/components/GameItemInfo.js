import React from "react";

export default function GameItemCrousel() {
  return (
    <div>
      <div
        className="d-flex flex-column align-item-center justify-content-center bg-dark border border-dark shadow-lg rounded"
        style={{ height: "40vh" }}
      >
        <div
          id="carouselExampleControls"
          className="carousel slide  flex-grow-1 d-flex flex-column "
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active flex-grow-1 d-flex justify-content-center align-items-center">
              <img
                className="d-block shadow-lg rounded"
                src="https://token-mint-trade.s3.ap-south-1.amazonaws.com/game-item-png/1001/1001_10001.png"
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
        </div>
      </div>
      <div className="my-3">
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-condensed bg-dark border border-dark shadow-lg rounded text-light">
            <div>
              <h6 className="my-0">The Olive Branch - Pan</h6>
              <small className="">OUTFIT</small>
            </div>
            <span className="">1006</span>
          </li>
          <li class="list-group-item bg-dark border border-dark shadow-lg rounded text-light">
            Contract Item Id 1006
          </li>
        </ul>
      </div>
    </div>
  );
}
