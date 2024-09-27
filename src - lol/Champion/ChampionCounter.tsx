import { CSSProperties } from "react";

export type ChampionCounterProps = {
  championCount: string;
};

const ChampionCounter = (props: ChampionCounterProps) => {
  const ChampionCounterStyle: CSSProperties = {
    width: "24px",
    height: "24px",
    borderRadius: "999px",
  };

  return (
    <div>
      <img src={props.championCount} style={ChampionCounterStyle}></img>
    </div>
  );
};

export default ChampionCounter;
