import { CSSProperties } from "react";

export type RankElevationProps = {
  rankelevation: number;
};

const RankElevation = (props: RankElevationProps) => {
  const RankElevationStyle: CSSProperties = {
    color: "#139020",
    fontSize: "12px",
    alignContent: "center",
  };
  return <span style={RankElevationStyle}>{props.rankelevation}</span>;
};

export default RankElevation;
