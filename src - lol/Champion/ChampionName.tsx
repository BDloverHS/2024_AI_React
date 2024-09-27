import { CSSProperties } from "react";

export type ChampionNameProps = {
  champName: string;
};

const ChampionName = (props: ChampionNameProps) => {
  const ChampionNameStyle: CSSProperties = {
    fontWeight: "Bold",
    fontSize: "12px",
    alignContent: "center",
  };
  return <span style={ChampionNameStyle}>{props.champName}</span>;
};

export default ChampionName;
