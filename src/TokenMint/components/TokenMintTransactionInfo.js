import React, { useState, useEffect } from "react";

import { containerStyle, imageStyles } from "../utility/Constants";

function TokenMintTransactionInfo(props) {
  const [tokenMintTransactionInfo, setTokenMintTransactionInfo] = useState({});
  useEffect(() => {
    async function loadOnRefresh() {
      setTokenMintTransactionInfo(props.tokenMintTransactionInfo);
    }
    loadOnRefresh();
  }, [props.tokenMintTransactionInfo]);

  return (
    <div style={{ ...containerStyle, height: "525px" }}>
      <h2>TokenMintTransactionInfo</h2>
      <p>
        tokenMintTransactionId ::
        {tokenMintTransactionInfo.tokenMintTransactionId}
      </p>
      <p>gameTransactionId :: {tokenMintTransactionInfo.gameTransactionId}</p>
      <p>gameId :: {tokenMintTransactionInfo.gameId}</p>
      <p>gameItemInfo_itemId :: {tokenMintTransactionInfo.itemId}</p>
      <p>gameId_itemName :: {tokenMintTransactionInfo.itemName}</p>
      <img src={tokenMintTransactionInfo.itemLogo} style={imageStyles}></img>
    </div>
  );
}

export default TokenMintTransactionInfo;
