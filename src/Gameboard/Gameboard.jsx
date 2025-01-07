import "./Gameboard.css";
import Cards from "../Cards/Cards";
import Results from "../Results/Results";

function Gameboard() {
  return (
    <div className="gameboard">
      <p>This is the GameBoard</p>
      <Cards />
      <Results />
    </div>
  );
}

export default Gameboard;
