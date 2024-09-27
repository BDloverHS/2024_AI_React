export type PickpercProps = {
  pickper: number;
};

const Pickperc = (props: PickpercProps) => {
  return (
    <div style={{ fontSize: "12px", alignContent: "center" }}>
      <span>{props.pickper}</span>
      <span>%</span>
    </div>
  );
};

export default Pickperc;
