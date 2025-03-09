import React from "react";

import GameItemInfoPage from "../pages/GameItemInfoPage";
import { connect } from "react-redux";
import { doNothingAction } from "../actions/index";

function GameItemInfoComponent({ itemInfo, doNothingAction }) {
  return (
    <div>
      <GameItemInfoPage itemInfo={itemInfo} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  itemInfo: state.tokenmintinfo.itemInfo,
});

export default connect(mapStateToProps, { doNothingAction })(
  GameItemInfoComponent
);
