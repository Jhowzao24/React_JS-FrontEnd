import { Button } from "antd";
import React, { useState, useEffect } from "react";

const formulas = [
  { id: 1, formula: "2/4" },
  { id: 2, formula: "3/4" },
  { id: 3, formula: "4/4" },
  { id: 4, formula: "6/8" }
];

const GameCompass = () => {
  const [currentFormula, setCurrentFormula] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateRandomFormula();
  }, []);

  const generateRandomFormula = () => {
    const randomIndex = Math.floor(Math.random() * formulas.length);
    setCurrentFormula(formulas[randomIndex]);
  };

  const handleSelection = (formula) => {
    if (formula === currentFormula.formula) {
      setScore(score + 1);
    }
    generateRandomFormula();
  };

  return (
    <div style={{color: 'lightblue'}}>
      <h4>Formulas de Compassos Musicais</h4>
      <h4>Escolha a fórmula correta:</h4>
      <p>Score: {score}</p>
      <p>Fórmula atual: {currentFormula.formula}</p>
      <ul>
        {formulas.map((formula) => (
          <li key={formula.id}>
            <Button onClick={() => handleSelection(formula.formula)}>
              {formula.formula}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameCompass;