import { useEffect, useState } from "react";
import { containerStyle } from "../utility/Constants";
import { imageStyles } from "../utility/Constants";

function PlayerInfo(props) {
  const [playerInfo, setPlayerInfo] = useState({});

  useEffect(() => {
    async function loadOnRefresh() {
      setPlayerInfo(props.playerInfo);
    }

    loadOnRefresh();
  }, [props.playerInfo]);

  return (
    <div style={containerStyle}>
      <h2>PlayerInfo</h2>
      <p>Player Name: {playerInfo.playerName}</p>
      <img src={playerInfo.gameLogo} style={imageStyles}></img>
    </div>
  );
}

export default PlayerInfo;
