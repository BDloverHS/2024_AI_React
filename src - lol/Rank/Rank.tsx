import { CSSProperties } from "react";

export type RankProps = {
  rank: number;
};

const Rank = (props: RankProps) => {
  const Rankstyle: CSSProperties = {
    color: "#C8B5B6",
    fontSize: "12px",
    fontWeight: "bold",
    alignContent: "center",
  };
  return <span style={Rankstyle}>{props.rank}</span>;
};

export default Rank;
