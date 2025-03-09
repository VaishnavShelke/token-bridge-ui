import { React, useState, useEffect } from "react";
import WalletCard from "./WalletCard";
import PlayerInfo from "./PlayerInfo";
import TokenMintTransactionInfo from "./TokenMintTransactionInfo";

import { getInitializationState } from "../utility/LoadUIInfoTokenMint";
import TokenMintSignPage from "./TokenMintSignPage";
import { useParams } from "react-router-dom";

function TokenMintUI(props) {
  const [globalState, setGlobalState] = useState({
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
      itemId: "",
      gameTransactionId: "",
      itemQuantity: "",
      itemName: "",
      itemLogo: "",
    },
  });

  const { txnId } = useParams();

  const [pageStatus, setPageStatus] = useState({
    tokenizationSuccess: false,
    tokenizationFailed: false,
  });

  const [web3Provider, setWeb3Provider] = useState(null);

  const setWeb3ProviderHandler = async (provider) => {
    setWeb3Provider(provider);
  };
  const setPageSatusHandler = async (pagestat) => {
    setPageStatus({ ...pageStatus, ...pagestat });
  };

  useEffect(() => {
    async function loadOnRefresh() {
      const fetchedInitializationState = await getInitializationState(txnId);
      if (fetchedInitializationState.statusCode === "000") {
        setGlobalState({
          ...globalState,
          ...fetchedInitializationState,
        });
      } else {
        alert(
          "Looks Like, something went wrong at our side 🥺🥺🥺 !!!. Please try again later."
        );
      }
    }
    loadOnRefresh();
  }, []);

  return (
    <div>
      <p>Transaction Id Passed in URL {txnId}</p>
      {pageStatus.tokenizationSuccess && (
        <img src="https://cdn.dribbble.com/users/6659664/screenshots/15750262/group_13064.png"></img>
      )}
      {pageStatus.tokenizationFailed && (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsqnLnSTDNuxmbehlN0Hm_-1f5DxD6Fw8WOg&usqp=CAU"></img>
      )}
      <h1>TokenMintUI</h1>
      <WalletCard
        playerEthAccounts={globalState.playerInfo.playerEthAccounts}
        setWeb3ProviderHandler={setWeb3ProviderHandler}
      />
      {!pageStatus.tokenizationFailed && !pageStatus.tokenizationSuccess && (
        <TokenMintSignPage
          tokenMintTransactionInfo={globalState.tokenMintTransactionInfo}
          web3Provider={web3Provider}
          setPageSatusHandler={setPageSatusHandler}
        />
      )}
      <TokenMintTransactionInfo
        tokenMintTransactionInfo={globalState.tokenMintTransactionInfo}
      />
      <PlayerInfo playerInfo={globalState.playerInfo} />
    </div>
  );
}

export default TokenMintUI;
