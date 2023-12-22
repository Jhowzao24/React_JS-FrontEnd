import React, { useState } from 'react';

const GameAcerts = () => {
  // Estado para armazenar o número aleatório
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  // Estado para armazenar o número digitado pelo usuário
  const [guess, setGuess] = useState('');
  // Estado para armazenar os acertos e erros
  const [results, setResults] = useState([]);

  // Função chamada quando o usuário clica no botão de adivinhar
  const handleGuess = () => {
    const num = parseInt(guess);

    if (isNaN(num)) {
      alert('Digite um número válido!');
      return;
    }

    if (num === randomNumber) {
      setResults([...results, { guess: num, result: 'Acertou!' }]);
      setGuess('');
      setRandomNumber(Math.floor(Math.random() * 100) + 1);
    } else {
      setResults([...results, { guess: num, result: 'Errou!' }]);
      setGuess('');
    }
  };

  return (
    <div style={{color: 'lightblue'}}>
      <h1>Jogo de Acertos e Erros</h1>
      <p>Adivinhe o número entre 1 e 100:</p>
      <input type="text" value={guess} onChange={e => setGuess(e.target.value)} />
      <button onClick={handleGuess}>Adivinhar</button>
      <h2>Resultados:</h2>
      {results.map((result, index) => (
        <p key={index}>{result.guess} - {result.result}</p>
      ))}
    </div>
  );
};

export default GameAcerts;