import { CSSProperties } from "react";
import ChampionCounter, {
  ChampionCounterProps,
} from "../Champion/ChampionCounter";
import ChampionImg, { ChampionImgProps } from "../Champion/ChampionImg";
import ChampionName from "../Champion/ChampionName";
import Banperc, { BanpercProps } from "../Label/Banperc";
import Pickperc, { PickpercProps } from "../Label/Pickperc";
import Winperc, { WinpercProps } from "../Label/Winperc";
import Position from "../Position/Position";
import Rank, { RankProps } from "../Rank/Rank";
import RankElevation, { RankElevationProps } from "../Rank/RankElevation";
import Tier, { TierProps } from "../Tier/TierList";

export type CardProps = RankProps &
  RankElevationProps &
  ChampionImgProps &
  ChampionImgProps &
  TierProps &
  WinpercProps &
  PickpercProps &
  BanpercProps &
  ChampionCounterProps;

const Card = (props: CardProps) => {
  const CardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    padding: "2px 5px",
    gap: "5px",
  };
  return (
    <section style={CardStyle}>
      <Rank {...props} />
      <RankElevation {...props} />
      <ChampionImg {...props} />
      <ChampionName {...props} />
      <Tier {...props} />
      <Position {...props} />
      <Winperc {...props} />
      <Pickperc {...props} />
      <Banperc {...props} />
      <ChampionCounter championCount={""} />
    </section>
  );
};

export default Card;
