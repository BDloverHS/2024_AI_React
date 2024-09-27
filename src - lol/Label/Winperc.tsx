export type WinpercProps = {
  winper: number;
};

const Winperc = (props: WinpercProps) => {
  return (
    <div style={{ fontSize: "12px", alignContent: "center" }}>
      <span>{props.winper}</span>
      <span>%</span>
    </div>
  );
};

export default Winperc;
