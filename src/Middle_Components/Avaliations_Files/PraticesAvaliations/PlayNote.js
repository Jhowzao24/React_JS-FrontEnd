import { Button, Input } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const CatchGame = () => {
  // Definindo as notas que serão exibidas no jogo
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const notesToPlay = ['DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LÁ', 'SI'];

  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [currentNote, setCurrentNote] = useState(notesToPlay[currentNoteIndex]);
  const [inputNote, setInputNote] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    // Função para exibir a próxima nota após um certo tempo
    const interval = setInterval(() => {
      setCurrentNoteIndex((prevIndex) => (prevIndex + 1) % notesToPlay.length);
      setCurrentNote(notesToPlay[currentNoteIndex]);
    }, 3000); // Troca de nota a cada 2 segundos

    // Limpando o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [currentNoteIndex, notesToPlay]);

  const handleInputChange = (event) => {
    setInputNote(event.target.value);
  };

  const checkNote = () => {
    if (inputNote.toUpperCase() === currentNote) {
      setScore(score + 1);
      toast.success('Congratulatons you accerted the note!')
    } else {
      toast.error('What a pity, you made a mistake on find the right note!!')
    }
    setInputNote('');
  };

  return (
    <div style={{color: 'gold'}}>
      <h1>Jogo de Notas Musicais</h1>
      <p>Nota atual: {currentNote}</p>
      <p>Pontuação: {score}</p>
      <Input
        type="text"
        value={inputNote}
        onChange={handleInputChange}
        placeholder="Digite a nota que você tocou"
        style={{color: 'cyan', width: '250px'}}
      /><br/>
      <Button style={{backgroundColor: 'Highlight', color: 'gold'}} onClick={checkNote}>Verificar</Button>
    <ToastContainer/>
    </div>
  );
};

export default CatchGame;




/*
import React, {useState} from 'react';
import { Button } from '@material-ui/core';

export default function CatchNote(){
    const [escalas, setEscalas] = useState(['DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LA', 'SI']);
    const [escalaAtual, setEscalaAtual] = useState('DÓ');
  
    const mudarEscala = (novaEscala) => {
      setEscalaAtual(novaEscala);
    };
    const verd = setEscalas;
    return(
        <div style={{color: 'lightblue'}}>
            <h3>When the current scale go to the choiced name, you must to play the right scale at the instrument on the right height!</h3>
            <h5>Current Scale: {escalaAtual}</h5>
            <h6>{verd}</h6>
            <ul>
                {escalas.map((escala) => (
                <Button style={{backgroundColor: 'lightblue', color: 'black'}} key={escala} onClick={() => mudarEscala(escala)}>
                    {escala}
                </Button>
                ))}
            </ul>
        </div>
    )
}
*/