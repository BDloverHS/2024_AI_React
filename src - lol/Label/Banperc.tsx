export type BanpercProps = {
  banper: number;
};

const Banperc = (props: BanpercProps) => {
  return (
    <div style={{ fontSize: "12px", alignContent: "center" }}>
      <span>{props.banper}</span>
      <span>%</span>
    </div>
  );
};

export default Banperc;
