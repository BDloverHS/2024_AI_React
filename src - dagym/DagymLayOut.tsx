import Card from "./Card";
import { centerList } from "./data";

const DagymLayOut = () => {
  return (
    <main style={{ width: "100vw" }}>
      <section style={{ width: "100%", maxWidth: "768px", margin: "0 auto" }}>
        {centerList.map((v) => (
          <Card
            image={v.gymPhotoSmall}
            gymName={v.gymName}
            address={v.address}
            price={v.price.lowestPrice / (v.price.period || 12)}
            starRate={v.review.rate}
            reviews={v.review.count}
            text={"일일권"}
            categories={v.tags.join(" ").replaceAll(" ", " / ")}
            servies={v.service.free}
          />
        ))}
      </section>
    </main>
  );
};

export default DagymLayOut;
