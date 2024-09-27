import { CSSProperties } from "react";

export type TierProps = {
  tiers: 1 | 2 | 3 | 4 | 5;
};

const Tier = (props: TierProps) => {
  const TierMap = {
    1: "https://s-lol-web.op.gg/images/icon/icon-tier-1.svg?v=1724034092925",
    2: "https://s-lol-web.op.gg/images/icon/icon-tier-2.svg?v=1724034092925",
    3: "https://s-lol-web.op.gg/images/icon/icon-tier-3.svg?v=1724034092925",
    4: "https://s-lol-web.op.gg/images/icon/icon-tier-4.svg?v=1724034092925",
    5: "https://s-lol-web.op.gg/images/icon/icon-tier-5.svg?v=1724034092925",
  };

  const TierAlign: CSSProperties = {
    alignContent: "center",
  };

  const TierStyle: CSSProperties = {
    width: "24px",
    height: "24px",
    alignContent: "center",
  };
  return (
    <div style={TierAlign}>
      <img src={TierMap[props.tiers]} style={TierStyle}></img>
    </div>
  );
};

export default Tier;
