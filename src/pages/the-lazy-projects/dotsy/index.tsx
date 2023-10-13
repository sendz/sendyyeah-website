import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import { randomRgbaString } from "@site/src/pages/the-lazy-projects/dotsy/_tools/generateColor";
import { DotsContainer } from "@site/src/pages/the-lazy-projects/dotsy/_components/DotsContainer";
import "./styles.css";
export default function Dotsy() {
  const [level, setLevel] = useState(1);
  const [gridFactor, setGridFactor] = useState(level + level);
  const [grid, setGrid] = useState(2);
  const [amount, setAmount] = useState(Math.pow(grid, 2));
  const [newColors, setNewColors] = useState(randomRgbaString(amount));
  const [retries, setRetries] = useState(amount - 1);
  const [warning, setWarning] = useState(false);
  const [score, setScore] = useState(0);

  const getSelectedColor = (index: number) => {
    return newColors[index];
  };

  const reset = () => {
    setLevel(1);
    setGridFactor(2);
    setGrid(2);
    setAmount(4);
    setNewColors(randomRgbaString(4));
    setRetries(3);
    setWarning(false);
    setScore(0);
  }

  const _updateGrid = () => {
    let newAmount = amount;
    if (level === gridFactor) {
      setGridFactor((_factor) => _factor + _factor);
      const newGrid = grid + 1;
      newAmount = Math.pow(newGrid, 2);
      setAmount(newAmount);
      setGrid(() => newGrid);
      setRetries(newAmount - 1);
    }

    setNewColors(() => [...randomRgbaString(newAmount)]);
  };

  const validateIfDifferent = (index: number) => {
    const selectedColor = getSelectedColor(index);
    const selected = newColors.filter((color) => color === selectedColor);

    setWarning(false);

    if (selected.length === 1) {
      _updateGrid();
      setScore((_score) => _score + (grid - 1) * 10);
      setLevel(level + 1);
    } else {
      setWarning(true);
      setRetries((_retries) => _retries - 1);
      // setScore((_score) => _score - 10);
    }
  };

  useEffect(() => {
    if (retries === 0) {
      alert("You are out of turn! Play again later.");
      setWarning(false);
    }
  }, [retries]);


  return (
    <Layout title="Dotsy" description="Find a dot with different color than others.">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <div className="App">
          <h1>Dotsy</h1>
          <div className="flex flex-row gap-8">
          <h2>
            Level: {level}
          </h2>
            <h2>
              Score: {score}
            </h2>
          </div>
          <h3>Retries {retries}</h3>
          <DotsContainer
            disabled={retries === 0}
            amount={amount}
            colors={newColors}
            grid={grid}
            validateIfDifferent={validateIfDifferent}
            warning={warning}
          />
          {retries === 0 && (
          <div className="my-16 flex flex-row gap-8">
            <a className="daisy-btn daisy-btn-accent twitter-share-button"
               href={`https://twitter.com/intent/tweet?text=I%20scored%20${score}%20at%20Dotsy%20by%20%40SENDYYeah%2C%20try%20here%20https%3A%2F%2Fwww.sendyyeah.com%2Fthe-lazy-projects%2Fdotsy%20%21`} target="_blank">
              Tweet</a>
            <button className="daisy-btn daisy-btn-primary" onClick={reset}>Play Again</button>
          </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
