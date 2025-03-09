import React from "react";
import "../styles/styles.css";

export default function ContractInfo() {
  return (
    <div>
      <div className="my-3 container">
        <ul className="list-group mb-3">
          <li className="list-group-item d-flex justify-content-between lh-condensed neon-background">
            <div>
              <h6 className="my-0 font-weight-bold">PUBG Inventory Zero One</h6>
              <small className="font-weight-bold">
                ETHEREUM SEPOLIA TESTNET
              </small>
            </div>
            <button
              type="button"
              className="btn neon-background fw-bold rounded-4"
            >
              <i class="fa-solid fa-diamond-turn-right"></i>
              <span className="mx-1">EtherScan</span>
            </button>
          </li>
          <li class="list-group-item rounded neon-background">
            <h6>MarketPlace Currency :: ETH-SEP</h6>
          </li>
        </ul>
      </div>
    </div>
  );
}
