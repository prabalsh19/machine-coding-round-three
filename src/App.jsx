import "./App.css";
import { Search } from "./components/Search/Search";
import { Table } from "./components/Table/Table";

function App() {
  return (
    <>
      <h1>Snack Table</h1>
      <Search />
      <Table />
    </>
  );
}

export default App;
