import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, Button } from 'antd';
import { ButtonBase } from '@material-ui/core';

const playNote = (frequency) => {
    const audioContext = new (window.AudioContext || (window).AudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; // Pode experimentar com outros tipos de ondas
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), 500); // Ajuste o tempo de duração do som
  };

const handleClickNote = (frequency) => {
    playNote(frequency);
  };

const notes = [[<Card><ButtonBase onClick={() => handleClickNote(190.63)}>SOL</ButtonBase></Card>],
               [<Card><ButtonBase onClick={() => handleClickNote(293.66)}>RÉ</ButtonBase></Card>],
               [<Card><Button onClick={() => handleClickNote(440.00)}>LÁ</Button></Card>],
               [<Card><Button onClick={() => handleClickNote(645.63)}>MI</Button></Card>],
               [<Card><ButtonBase onClick={() => handleClickNote(190.63)}>SOL</ButtonBase></Card>],
               [<Card><ButtonBase onClick={() => handleClickNote(349.23)}>FÁ</ButtonBase></Card>],
               [<Card><button onClick={() => handleClickNote(261.63)}>DÓ</button></Card>],
               [<Card><button onClick={() => handleClickNote(392.00)}>SOL</button></Card>]]; // Notas musicais

function AppId() {
  const [exerciseNotes, setExerciseNotes] = useState([]); // Estado das notas do exercício
  const [userNotes, setUserNotes] = useState([]); // Estado das notas arrastadas pelo usuário
  const [feedback, setFeedback] = useState('Change the ordering while you click the button, and play the notes on your instrument!'); // Feedback para o usuário

  useEffect(() => {
    generateExercise(); // Gerar um novo exercício quando o componente é montado
  }, []);

  // Função para gerar um novo exercício com notas aleatórias
  const generateExercise = () => {
    const newExercise = [];
    for (let i = 0; i < 4; i++) {
      const randomNote = notes[Math.floor(Math.random() * notes.length)];
      newExercise.push(randomNote);
    }
    setExerciseNotes(newExercise);
    setUserNotes([]); // Limpar as notas do usuário
    setFeedback('Arraste as notas para combinar com o exercício'); // Limpar o feedback
  };

  // Manipulador de evento para arrastar e soltar as notas
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const draggedNote = userNotes[source.index];
    const newNotes = [...userNotes];
    newNotes.splice(source.index, 1);
    newNotes.splice(destination.index, 0, draggedNote);

    setUserNotes(newNotes);

    // Verificar se as notas do usuário correspondem ao exercício
    if (JSON.stringify(newNotes) === JSON.stringify(exerciseNotes)) {
      setFeedback('Parabéns! Você acertou todas as notas!');
    } else {
      setFeedback('Tente novamente. As notas não correspondem ao exercício.');
    }
  };

  return (
    <div style={{width: '600px', backgroundColor: 'Highlight', alignContent: 'center'}}>
      <h1>Exercício Musical Arrojado</h1>
      <h3 style={{color: 'violet'}}>{feedback}</h3>
      <div className="exercise-container">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="exercise"
              >
                {exerciseNotes.map((note, index) => (
                  <div key={index} className="note">
                    {note}
                  </div>
                ))}
              </div>
            )}
          </Droppable>
          <Droppable droppableId="user-notes">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="user-notes"
              >
                {userNotes.map((note, index) => (
                  <Draggable key={index} draggableId={index.toString()} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="note"
                      >
                        {note}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <button onClick={generateExercise}>Gerar Novo Exercício</button>
    </div>
  );
}

export default AppId;


/*
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Lista de notas musicais
const notes = [
  { id: 'note-1', name: 'C', audio: 'c_note.mp3' },
  { id: 'note-2', name: 'D', audio: 'd_note.mp3' },
  { id: 'note-3', name: 'E', audio: 'e_note.mp3' },
  { id: 'note-4', name: 'F', audio: 'f_note.mp3' },
  { id: 'note-5', name: 'G', audio: 'g_note.mp3' },
  { id: 'note-6', name: 'A', audio: 'a_note.mp3' },
  { id: 'note-7', name: 'B', audio: 'b_note.mp3' },
];

function AppId() {
  const [playedNote, setPlayedNote] = useState(null); // Estado para armazenar a última nota tocada

  // Função para tocar a nota musical
  const playNote = (audio) => {
    const sound = new Audio(audio);
    sound.play();
  };

  // Manipulador de evento para arrastar e soltar as notas
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Tocar a nota quando é arrastada
    const note = notes.find((note) => note.id === result.draggableId);
    playNote(`/sounds/${note.audio}`);

    // Atualizar o estado da última nota tocada
    setPlayedNote(note);
  };

  return (
    <div className="App">
      <h1>Exercício de Notas Musicais</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="container">
          <div className="play-area">
            {playedNote && <p>Última nota tocada: {playedNote.name}</p>}
          </div>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="notes-container"
              >
                {notes.map((note, index) => (
                  <Draggable key={note.id} draggableId={note.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="note"
                      >
                        {note.name}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}

export default AppId;
*/

/*
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const notes = [
  { id: 'note-1', name: 'C' },
  { id: 'note-2', name: 'D' },
  { id: 'note-3', name: 'E' },
  { id: 'note-4', name: 'F' },
  { id: 'note-5', name: 'G' },
  { id: 'note-6', name: 'A' },
  { id: 'note-7', name: 'B' },
];

function AppId() {
  const [selectedNotes, setSelectedNotes] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const newNotes = Array.from(selectedNotes);
    const [movedNote] = newNotes.splice(source.index, 1);
    newNotes.splice(destination.index, 0, movedNote);

    setSelectedNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Exercício de Notas Musicais</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="notes-container"
            >
              {notes.map((note, index) => (
                <Draggable key={note.id} draggableId={note.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="note"
                      style={{cursor: 'pointer'}}
                    >
                      {note.name}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="selected-notes">
        <h2>Notas Selecionadas</h2>
        {selectedNotes.map((note, index) => (
          <div key={note.id} className="selected-note" style={{cursor: 'pointer'}}>
            {note.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppId;
*/