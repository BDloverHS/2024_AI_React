import FreeContents, { freeContentsProps } from "./FreeContetn";

export type carddownProps = freeContentsProps;

const CardDown = (props: carddownProps) => {
  return (
    <div>
      <FreeContents servies={props.servies} />
    </div>
  );
};

export default CardDown;
