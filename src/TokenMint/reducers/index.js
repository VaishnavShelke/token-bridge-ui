import walletOperations from "./walletOperations";
import alertOperations from "./alertOperations";
import tokenmintReducer from "./tokenmintReducer";
import { verifyOTPReducer } from "./verifyOTPReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  alert: alertOperations,
  wallet: walletOperations,
  tokenmintinfo: tokenmintReducer,
  verifyotp: verifyOTPReducer,
});

export default rootReducer;
