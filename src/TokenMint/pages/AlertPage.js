import React from "react";
import "../styles/styles.css";

export default function AlertPage(props) {
  return (
    <div
      className="container mt-4 bg-light border rounded-3"
      style={{ width: "40vw" }}
    >
      <div className="container">
        <div className="d-flex justify-content-end mt-1">
          <button
            className="rounded bg-light"
            onClick={(event) => {
              event.preventDefault();
              props.closeAlertBox();
            }}
          >
            &times;
          </button>
        </div>
        <div className="d-flex justify-content-center text-danger">
          <h1 className="text-center">Alert !!!</h1>
        </div>
        <hr></hr>
        <div className="d-flex justify-content-center mt-3">
          <h3 className="text-center">{props.alert.alertHeading}</h3>
        </div>

        <div className="d-flex justify-content-center my-3">
          <h4 className="text-center">{props.alert.alertMessage}</h4>
        </div>
      </div>
    </div>
  );
}
