import "./App.css";
import Board from "./components/board/Board";

function App() {
  return (
    <div className="App">
      <div className="w-96 bg-gray-300 m-auto pb-5">
        <Board></Board>
      </div>
    </div>
  );
}

export default App;
