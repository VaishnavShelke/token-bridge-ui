export const LoadUIMockResponse = {
  playerName: "BestHuman_012",
  gameLogo:
    "https://token-mint-trade.s3.ap-south-1.amazonaws.com/game-png/1001.png",
};

export const LoadUITransactionDetailsMock = {
  tokenMintTransactionId: "c331df6b-9299-439e-9466-1f5c8bc2c2df",
  gameTransactionId: "2bd5f684-3bf7-49a0-b781-b2d3d933ad60",
  gameId: "1001",
  gameItemInfo_itemId: "1001_10003",
  gameItemInfo_itemName: "BLUE SCHOOL UNIFORM SET (FEMALE)",
  gameItemInfo_itemLogo:
    "https://token-mint-trade.s3.ap-south-1.amazonaws.com/game-item-png/1001/1001_10003.png",
};

export const fetchInitializationStateMockResponse = {
  statusCode: "000",
  statusDescription: "Successfully Loaded the Screen",
  tokenMintTransactionId: "20231009113222343",
  playerInfo: {
    playerId: "20230801115743465",
    tokenMintUserId: null,
    playerName: "BestHuman_012",
    playerProfilePic: null,
    playerEthAccounts: [],
    gameLogo:
      "https://token-mint-trade.s3.ap-south-1.amazonaws.com/game-png/1001.png",
  },
  tokenMintTransactionInfo: {
    tokenMintTransactionId: "20231009113222343",
    gameId: "1001",
    gameTransactionId: "2bd5f684-3bf7-49a0-b781-b2d3d933ad60",
    verifyAddressUrl:
      "http://localhost:1001/tokenmint/server/verify-address/20231011172350392",
    gameLandingPage: "https://google.com",
  },
  tokenMintUserInfo: null,
  itemInfo: {
    itemId: "1001_10001",
    itemCategory: "OUTFIT",
    itemTitle: "PGC 2019 Sneakers",
    itemDescription: null,
    itemImgUrl:
      "https://token-mint-trade.s3.ap-south-1.amazonaws.com/game-item-png/1001/1001_10001.png",
    itemQuantity: "2",
    itemPrice: null,
  },
  contractInfo: {
    ethContractId: null,
    chain: "Goerli",
    chainId: "5",
    contractName: "Pubg Inventory Zero One",
    operatorId: null,
    contractAddress: "0xA5a8a2d59A7605a430baee0E82aE18037030739d",
    contractEtherScanUrl:
      "https://sepolia.etherscan.io/address/0x184a20fad1487b68e951f3094ee44fda9bf929b3",
    contractAbi: null,
    updatedBy: null,
    updatedOn: null,
  },
};

export const verifySignatureServerResponse = {
  statusCode: "000",
  statusDescription: "SUCCESS",
  statusDetails:
    "OTP verified successfully the game will proceed with issuing you your token",
  tokenStatusCheckURL: "Ether Scan URL",
};
