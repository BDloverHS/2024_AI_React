import Box from "./Box";
import Button from "./Button";
import Gradient from "./Gradient";
import GridLayOut from "./GridLayOut";

function App() {
  return (
    <div style={{ maxWidth: "800px" }}>
      <Button padding="10px" backgroundColor="red" text="버튼1" />
      <Button padding="20px" backgroundColor="orange" text="버튼2" />
      <Button padding="30px" backgroundColor="blue" text="버튼3" />
      <Button padding="40px" backgroundColor="purple" text="버튼4" />
      <Box backgroundColor="red" size="small" />
      <Box backgroundColor="orange" size="medium" />
      <Box backgroundColor="skyblue" size="large" />
      <Box backgroundColor="pink" size="small" />

      <GridLayOut repeatNumber={1} />

      <Gradient backgroundColor={""} />
    </div>
  );
}

export default App;
