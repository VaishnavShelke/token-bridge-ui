import React from "react";
import ContractInfoPage from "../pages/ContractInfoPage";
import { connect } from "react-redux";
import { doNothingAction } from "../actions/index";

function ContractInfoComponent({ contractInfo, doNothingAction }) {
  const handleLinkClick = () => {
    console.log(
      `Handle Link Click Pressed :: to ${contractInfo.etherscanContractUrl.toString()}`
    );
    window.open(contractInfo.etherscanContractUrl.toString(), "_blank");
  };
  return (
    <div>
      <ContractInfoPage
        contractInfo={contractInfo}
        handleLinkClick={handleLinkClick}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  contractInfo: state.tokenmintinfo.contractInfo,
});

export default connect(mapStateToProps, doNothingAction)(ContractInfoComponent);
