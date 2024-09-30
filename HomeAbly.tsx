import { CSSProperties, useState } from "react";
import HomeCloset from "./HomeCloset";

const HomeAbly = () => {
  const [closet, setCloset] = useState({
    hat: { amount: 1, price: 10000 },
    coat: { amount: 1, price: 45000 },
    jean: { amount: 1, price: 20000 },
  });

  const UpHat = () => {
    setCloset((prev) => {
      return {
        ...prev,
        hat: { amount: prev.hat.amount + 1, price: 10000 },
      };
    });
  };

  const DownHat = () => {
    setCloset((prev) => {
      if (prev.hat.amount > 1) {
        return {
          ...prev,
          hat: { amount: prev.hat.amount - 1, price: 10000 },
        };
      } else {
        return {
          ...prev,
          hat: { amount: 1, price: 10000 },
        };
      }
    });
  };

  const UpCoat = () => {
    setCloset((prev) => {
      return {
        ...prev,
        coat: { amount: prev.coat.amount + 1, price: 45000 },
      };
    });
  };

  const DownCoat = () => {
    setCloset((prev) => {
      if (prev.coat.amount > 1) {
        return {
          ...prev,
          coat: { amount: prev.coat.amount - 1, price: 45000 },
        };
      } else {
        return {
          ...prev,
          coat: { amount: 1, price: 45000 },
        };
      }
    });
  };

  const UpJean = () => {
    setCloset((prev) => {
      return {
        ...prev,
        jean: { amount: prev.jean.amount + 1, price: 20000 },
      };
    });
  };

  const DownJean = () => {
    setCloset((prev) => {
      if (prev.jean.amount > 1) {
        return {
          ...prev,
          jean: { amount: prev.jean.amount - 1, price: 20000 },
        };
      } else {
        return {
          ...prev,
          jean: { amount: 1, price: 20000 },
        };
      }
      // setNum((prev) => (prev > 1 ? prev - 1 : 1));
    });
  };

  const ContainerStyle: CSSProperties = {
    width: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: "0 auto",
  };

  const UnderStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0px 20px",
  };

  return (
    <div style={ContainerStyle}>
      <HomeCloset
        objectName={"야구모자"}
        objectAmount={closet.hat.amount}
        click1={DownHat}
        click2={UpHat}
        objectprice={closet.hat.price * closet.hat.amount}
      />

      <HomeCloset
        objectName={"가을 코드"}
        objectAmount={closet.coat.amount}
        click1={DownCoat}
        click2={UpCoat}
        objectprice={closet.coat.price * closet.coat.amount}
      />

      <HomeCloset
        objectName={"청바지"}
        objectAmount={closet.jean.amount}
        click1={DownJean}
        click2={UpJean}
        objectprice={closet.jean.price * closet.jean.amount}
      />

      <div style={UnderStyle}>
        <div>
          <span>총 </span>
          <span>
            {closet.hat.amount + closet.coat.amount + closet.jean.amount}
          </span>
          <span>개 선택</span>
        </div>

        <div>
          <span>총 </span>
          <span style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
            {closet.hat.price * closet.hat.amount +
              closet.coat.price * closet.coat.amount +
              closet.jean.price * closet.jean.amount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeAbly;
