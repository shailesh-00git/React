import Container from "./components/Container.jsx";
function App() {
  let buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ];
  return (
    <>
      <Container button={buttons}></Container>
    </>
  );
}

export default App;
