export type ChampionImgProps = {
  ChampImg: string;
};

const ChampionImg = (props: ChampionImgProps) => {
  return (
    <img
      src={props.ChampImg}
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "5px",
        alignContent: "center",
      }}
    ></img>
  );
};

export default ChampionImg;
