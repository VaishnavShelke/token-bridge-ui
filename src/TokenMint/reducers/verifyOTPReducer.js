const initialState = {
  statusCode: "000",
  statusDescription: "",
  tokenMintTransactionId: "",
  address: "",
  addressVerified: "",
};

const verifyOTPReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDRESS_VERIFIED_SUCCESS": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "ADDRESS_VERIFIED_FAILED": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

module.exports = { verifyOTPReducer };
