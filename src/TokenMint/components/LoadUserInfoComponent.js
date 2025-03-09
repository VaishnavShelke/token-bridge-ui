import React, { useEffect } from "react";
import { loadUIAction } from "../actions/index";
import { Navigate, useSearchParams } from "react-router-dom";
import { connect } from "react-redux";

function LoadUserInfoComponent({ loadUIAction, tokenmintinfo }) {
  const [searchParams] = useSearchParams();
  const txnId = searchParams.get("txnId");
  console.log(`Inside LoadUserInfoComponent with txnId : ${txnId}`);
  useEffect(() => {
    async function loadOnRefresh() {
      loadUIAction({ txnId });
    }
    loadOnRefresh();
  }, []);

  return <Navigate to="/tokenmint/connectWallet" />;
}

const mapStateToProps = (state) => ({
  tokenmintinfo: state.tokenmintinfo,
});

export default connect(mapStateToProps, { loadUIAction })(
  LoadUserInfoComponent
);
