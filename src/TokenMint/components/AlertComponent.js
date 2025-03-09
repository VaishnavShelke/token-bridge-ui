import React from "react";
import AlertPage from "../pages/AlertPage";
import { connect } from "react-redux";

import { displayAlertAction } from "../actions/index";

function AlertComponent({ alert, displayAlertAction }) {
  const closeAlertBox = () => {
    console.log(`Closing the Alert Bax`);
    displayAlertAction({ alertOn: false });
  };

  if (alert && alert.alertOn) {
    return (
      <div className="overlay">
        <AlertPage closeAlertBox={closeAlertBox} alert={alert} />
      </div>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, { displayAlertAction })(AlertComponent);
