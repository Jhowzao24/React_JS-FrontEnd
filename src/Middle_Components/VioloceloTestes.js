import { Card } from '@material-ui/core';
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialExercises = [
  { id: [<Card><h1>Jhonnathan Wesley Lopes!</h1></Card>], content: 'Exercicio 1'},
  { id: 'exercise-2', content: 'Exercício 2' },
  { id: 'exercise-3', content: 'Exercício 3' },
];

function AppCello() {
  const [exercises, setExercises] = useState(initialExercises);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const newExercises = Array.from(exercises);
    const [movedExercise] = newExercises.splice(source.index, 1);
    newExercises.splice(destination.index, 0, movedExercise);

    setExercises(newExercises);
  };

  return (
    <div className="App">
      <h1>Exercícios para Violoncelo</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="exercise-container"
            >
              {exercises.map((exercise, index) => (
                <Draggable key={exercise.id} draggableId={exercise.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="exercise"
                      style={{cursor: 'pointer'}}
                    >
                      {exercise.content}
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
  );
}

export default AppCello;
