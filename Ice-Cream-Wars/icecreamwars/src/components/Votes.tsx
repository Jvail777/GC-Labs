import { useState } from "react";
import "../css/Votes.css";

function Votes() {
  const [chocolateVotes, setChocolateVotes] = useState(0);
  const [vanillaVotes, setVanillaVotes] = useState(0);
  const [strawberryVotes, setStrawberryVotes] = useState(0);

  function getTotal() {
    return chocolateVotes + strawberryVotes + vanillaVotes;
  }

  function calculatePercentage(n: number, total: number) {
    if (total === 0) {
      return "0.0%";
    } else {
      return ((n / total) * 100).toFixed(1) + "%";
    }
  }

  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <div className="button-bar">
        <button onClick={() => setChocolateVotes(chocolateVotes + 1)}>
          Chocolate
        </button>
        <button onClick={() => setVanillaVotes(vanillaVotes + 1)}>
          Vanilla
        </button>
        <button onClick={() => setStrawberryVotes(strawberryVotes + 1)}>
          Strawberry
        </button>
      </div>

      {getTotal() === 0 ? (
        <>
          <p>No votes yet</p>
        </>
      ) : (
        <>
          {chocolateVotes > 0 ? (
            <div>
              <p>
                <label>Chocolate</label> {chocolateVotes} (
                {calculatePercentage(chocolateVotes, getTotal())})
              </p>
              <progress
                className="progressChocolate"
                value={chocolateVotes / getTotal()}
              ></progress>
            </div>
          ) : (
            <div></div>
          )}
          {vanillaVotes > 0 ? (
            <div>
              <p>
                <label>Vanilla</label> {vanillaVotes} (
                {calculatePercentage(vanillaVotes, getTotal())})
              </p>
              <progress
                className="progressVanilla"
                value={vanillaVotes / getTotal()}
              ></progress>
            </div>
          ) : (
            <div></div>
          )}
          {strawberryVotes > 0 ? (
            <div>
              <p>
                <label>Strawberry</label> {strawberryVotes} (
                {calculatePercentage(strawberryVotes, getTotal())})
              </p>
              <progress
                className="progressStrawberry"
                value={strawberryVotes / getTotal()}
              ></progress>
            </div>
          ) : (
            <div></div>
          )}
        </>
      )}
    </div>
  );
}

export default Votes;
