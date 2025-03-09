const initialState = {
  tokenMintDataFetchSuccess: null,
  tokenMintTransactionId: "",
  playerInfo: {
    playerId: "",
    playerName: "",
    playerProfilePic: "",
    tokenMintUserId: "",
    gameLogo: "",
    playerEthAccounts: [],
  },
  tokenMintUserInfo: {
    tokenMintUserId: "",
    tokenMintUserName: "",
    tokenMintUserLogo: "",
    tokenMintUserProfileRedirectionURL: "",
    firstTimeUser: "",
    tokenMintSignUpURL: "",
  },
  tokenMintTransactionInfo: {
    tokenMintTransactionId: "",
    gameId: "",
    gameTransactionId: "",
    verifyAddressUrl: "",
    gameLandingPage: "",
  },
};

const tokenmintReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_TOKENMINTINFO_SUCCESS": {
      return {
        ...state,
        ...action.payload,
        tokenMintDataFetchSuccess: true,
      };
    }
    case "LOAD_TOKENMINTINFO_FAILED": {
      return {
        ...state,
        tokenMintDataFetchSuccess: false,
      };
    }
    default:
      return state;
  }
};

export default tokenmintReducer;
