import React from "react";
import Counter from "./State/counter";
import DataFetcher from "./State/effecter";

const App = () => {
  return (
    <>
      <Counter />
      <DataFetcher />
    </>
  );
};

export default App;
