import { Button } from 'antd';
import React, { useState } from 'react';
import { useSprings, animated } from 'react-spring';

// Define o tabuleiro do quebra-cabeça com as posições originais das peças
const BOARD = [
  { label: 'DÓ', x: 0, y: 0 },
  { label: 'RÉ', x: 1, y: 0 },
  { label: 'MI', x: 2, y: 0 },
  { label: 'FÁ', x: 0, y: 1 },
  { label: 'SOL', x: 1, y: 1 },
  { label: 'LÁ', x: 2, y: 1 },
  { label: 'SI', x: 0, y: 2 },
];

const PuzzleGame = () => {
  const [board, setBoard] = useState(BOARD);

  // Configura as animações para mover as peças do quebra-cabeça
  const [springs, setSprings] = useSprings(board.length, (index) => ({
    x: board[index].x,
    y: board[index].y,
    from: { x: board[index].x, y: board[index].y },
    to: { x: board[index].x, y: board[index].y },
  }));

  // Função para embaralhar as peças do quebra-cabeça
  const shufflePieces = () => {
    const shuffledBoard = [...board].sort(() => Math.random() - 0.5);
    setBoard(shuffledBoard);

    setSprings((index) => ({
      x: shuffledBoard[index].x,
      y: shuffledBoard[index].y,
      from: {
        x: board[index].x,
        y: board[index].y,
      },
      // Executa animação para mover as peças para suas novas posições
      to: {
        x: shuffledBoard[index].x,
        y: shuffledBoard[index].y,
      },
    }));
  };

  return (
    <div>
      <br/>
      <hr/>
      <br/>
      <Button type='primary' onClick={shufflePieces}>Embaralhar</Button>
      <br/>
      <br/>
      <hr/>
      <br/>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gridGap: '10px' }}>
        {springs.map(({ x, y }, index) => (
          <animated.div
            key={board[index].label}
            style={{
              transform: x.interpolate((x) => `translate3d(${x * 110}px,${y * 110}px,0)`),
              background: 'dodgerblue',
              padding: '2em',
              textAlign: 'center',
              cursor: 'pointer',
              color: 'white',
              fontSize: '20px',
              fontFamily: 'serif',
              boxShadow: '0 0 13px 10px',
            }}
          >
            {board[index].label}
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default PuzzleGame;