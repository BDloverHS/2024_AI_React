import { CSSProperties } from "react";
import Album, { AlbumProps } from "./Album";
import CategoryList, { CategoryListProps } from "./CategoryList";
import GymName, { GymNameProps } from "./GymName";
import StarRate, { StarRateProps } from "./StarRate";
import Reviews, { ReviewsProps } from "./Reviews";
import Tag, { TagProps } from "./Tag";
import Address, { AddressProps } from "./Address";
import Price, { PriceProps } from "./Price";

export type cardupperProps = AlbumProps &
  CategoryListProps &
  GymNameProps &
  StarRateProps &
  AddressProps &
  TagProps &
  PriceProps &
  ReviewsProps;

const CardUpper = (props: cardupperProps) => {
  const cardUpperStyle: CSSProperties = {
    display: "flex",
    gap: "10px",
  };

  const rightStyle: CSSProperties = {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const infoStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  const eventStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <div style={cardUpperStyle}>
      <Album image={props.image} />
      <div style={rightStyle}>
        <div style={infoStyle}>
          <CategoryList categories={props.categories} />
          <GymName gymName={props.gymName}></GymName>
          <div>
            <StarRate starRate={props.starRate} />
            <Reviews reviews={props.reviews} />
            <Address address={props.address} />
          </div>
        </div>

        <div style={eventStyle}>
          <Tag text={props.text} />
          <Price price={props.price} />
        </div>
      </div>
    </div>
  );
};

export default CardUpper;
