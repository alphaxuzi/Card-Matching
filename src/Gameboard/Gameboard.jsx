import "./Gameboard.css";
import Cards from "../Cards/Cards";
import Results from "../Results/Results";

function Gameboard() {
  return (
    <div className="gameboard">
      <p>Find the pairs to win the game</p>
      <Cards />
      <Results />
    </div>
  );
}

export default Gameboard;
