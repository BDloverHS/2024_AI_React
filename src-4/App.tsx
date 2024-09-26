import Box from "./Box";
import Circle from "./Circle";
import GridLayOut from "./GridLayOut";

function App() {
  return (
    <div>
      <GridLayOut
        columnNumber={3}
        component={
          <>
            <Box background="Primary" borderRadius="Hard"></Box>
            <Box background="Primary" borderRadius="Smooth"></Box>
            <Box background="Primary" borderRadius="Circle"></Box>

            <Box background="Hover" borderRadius="Hard"></Box>
            <Box background="Hover" borderRadius="Smooth"></Box>
            <Box background="Hover" borderRadius="Circle"></Box>

            <Box background="Deactive" borderRadius="Hard"></Box>
            <Box background="Deactive" borderRadius="Smooth"></Box>
            <Box background="Deactive" borderRadius="Circle"></Box>

            <Circle backgroundColor="red"></Circle>
            <Circle backgroundColor="orange"></Circle>
            <Circle backgroundColor="yellow"></Circle>
            <Circle backgroundColor="green"></Circle>
            <Circle backgroundColor="blue"></Circle>
            <Circle backgroundColor="navy"></Circle>
            <Circle backgroundColor="purple"></Circle>
            <Circle backgroundColor="pink"></Circle>
          </>
        }
      />
    </div>
  );
}

export default App;
