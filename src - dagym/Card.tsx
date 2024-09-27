import { CSSProperties } from "react";
import CardUpper, { cardupperProps } from "./CardUpper";
import CardDown, { carddownProps } from "./CardDown";

type CardProps = cardupperProps & carddownProps;

const Card = (props: CardProps) => {
  const cardStyle: CSSProperties = {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <article style={cardStyle}>
      <CardUpper {...props} />
      <CardDown {...props} />
    </article>
  );
};

export default Card;
