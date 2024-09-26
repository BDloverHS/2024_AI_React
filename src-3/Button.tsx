import { CSSProperties } from "react";

type ButtonStyle = { backgroundColor: string; padding: string };
type ButtonText = { text: string };

type ButtonProps = ButtonStyle & ButtonText;

const Button = ({ backgroundColor, padding, text }: ButtonProps) => {
  const ButtonStyleCSS: CSSProperties = {
    backgroundColor,
    padding,
  };

  return <button style={ButtonStyleCSS}>{text}</button>;
};

export default Button;
