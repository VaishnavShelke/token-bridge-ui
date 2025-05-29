import React from "react";
import { tokenMintIconUrl } from "../styles/styles";

function NavBar() {
  return (
    <div className="h-100 border d-flex align-items-center justify-content-center">
      <div className="border h-75 row container-fluid">
        <div className="col-lg-3 col-sm-6 border">
          <div className="img-container">
            <img
              src="https://raw.githubusercontent.com/VaishnavShelke/WibmoPersonalContent/refs/heads/main/Images/tokenmint-green-logo.png"
              className="img-fluid shadow rounded"
              alt="Your Image Description"
            ></img>
          </div>
        </div>
        <div className="col border"></div>
        <div className="col-2 border"></div>
      </div>
    </div>
  );
}

export default NavBar;
