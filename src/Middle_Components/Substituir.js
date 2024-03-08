import { Button } from 'antd/es/radio';
import React, { useState } from 'react';
import AppId from './identifierNotes';
import ExercicioVioloncelo from './SequenceCello';
import ArrowBack from '@mui/icons-material/ArrowBack';
import QuizzCelloUm from './CelloQuizzExercise/QuizzExerCello';
import QuizzInovCello from './CelloQuizzExercise/QuizzCelloInov';

function TelaUm(){
    const showAlert = () => {
        alert('This is a shower Alert');
    }
    return(
        <div style={{backgroundColor: 'blue', color: 'white'}}>
            <h1>Jhonnathan Wesley Lopes</h1>
            <Button onClick={showAlert}>Show the importante information!!</Button>
        </div>
    )
};

function InitLayout(){
    return(
        <div style={{backgroundColor: 'brown', color: 'gold'}}>
            <h1>Welcome to the exercises of Cello!</h1>
        </div>
    )
};

const newComponente = <AppId/>
const newLayoutCello = <ExercicioVioloncelo/>
const CelloQuizz = <QuizzCelloUm/>
const InovQuizz = <QuizzInovCello/>

function MeuComponente() {
  const [elementoAtual, setElementoAtual] = useState(InitLayout);
  const [telaPrimary, setTelaPrimary] = useState(newComponente);
  const [newCelloEx, setNewCelloEx] = useState(newLayoutCello);
  const [quizzCello, setQuizzCello] = useState(CelloQuizz);
  const [quizzInov, setQuizzInov] = useState(InovQuizz);
  const reactLayout = TelaUm;
  const layoutCello = InitLayout;
  const primary = setTelaPrimary;
  const ExCello = setNewCelloEx;
  const Quizz = setQuizzCello;
  const Inovar = setQuizzInov;

  alert(`${primary}, ${ExCello}, ${Quizz}, ${Inovar}`);

  const LayoutInovQuizz = () => {
    const newInovQuizz = quizzInov;
    setElementoAtual(newInovQuizz);
  }

  const LayoutQuizzCello = () => {
    const newQuizzCello = quizzCello;
    setElementoAtual(newQuizzCello);
  }

  const LayoutCello = () => {
    const newExcercise = newCelloEx;
    setElementoAtual(newExcercise);
  }

  const subTela = () => {
    const novoDement = telaPrimary;
    setElementoAtual(novoDement);
  };

  const subLayout = () => {
    const newLayout = reactLayout;
    setElementoAtual(newLayout);
  };

  const returnElement = () => {
    const returnCello = layoutCello;
    setElementoAtual(returnCello);
  };

  return (
    <div style={{width: '700px'}}>
      <Button onClick={returnElement}><ArrowBack/></Button>
      <Button onClick={subTela}>Tela Nova</Button>
      <Button onClick={subLayout}>Sub Layout</Button>
      <Button onClick={LayoutCello}>Ex Cello</Button>
      <Button onClick={LayoutQuizzCello}>Cello Quizz</Button>
      <Button onClick={LayoutInovQuizz}>Cello Inov</Button>
      <br/>
      <hr/>
      <br/>
      <fieldset>
        {elementoAtual}
      </fieldset>
      <br/>
    </div>
  );
}

export default MeuComponente;




/* 

import React, { useState, useEffect } from 'react';
import * as Tone from 'tone';

// Definindo as notas musicais
const notas = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];

function JogoMusica() {
  const [notaAtual, setNotaAtual] = useState('');
  const [notaSelecionada, setNotaSelecionada] = useState('');
  const [pontuacao, setPontuacao] = useState(0);

  // Função para reproduzir uma nova nota
  const reproduzirNota = () => {
    const randomIndex = Math.floor(Math.random() * notas.length);
    const novaNota = notas[randomIndex];
    setNotaAtual(novaNota);
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(novaNota, '4n');
  };

  // Função para verificar a nota selecionada
  const verificarNota = (nota) => {
    if (nota === notaAtual) {
      setPontuacao(pontuacao + 1);
      alert('Correto!');
    } else {
      alert('Incorreto! Tente novamente.');
    }
    setNotaSelecionada('');
    reproduzirNota();
  };

  // Efeito para iniciar o jogo quando o componente for montado
  useEffect(() => {
    reproduzirNota();
  }, []);

  return (
    <div>
      <h2>Jogo de Música</h2>
      <p>Qual é a nota musical reproduzida?</p>
      <p>Pontuação: {pontuacao}</p>
      <p>Nota Atual: {notaAtual}</p>
      <div>
        {notas.map((nota, index) => (
          <button key={index} onClick={() => verificarNota(nota)}>
            {nota}
          </button>
        ))}
      </div>
    </div>
  );
}

export default JogoMusica;


*/


















/*
// Importe os módulos React necessários, se ainda não estiverem importados
import React from 'react';

// Defina uma função que faz a substituição do elemento
function substituirElemento(novoElemento) {
  // Substitua o elemento desejado pelo novoElemento
  // Aqui, você pode manipular o estado, as props ou fazer qualquer operação necessária
  // Esta é apenas uma demonstração simples
  const elementoSubstituido = (
    <div style={{color: 'blue'}}>
      {novoElemento}
    </div>
  );

  // Retorne o novo elemento
  return elementoSubstituido;
}

// Exemplo de uso:
// Suponha que você tenha um componente React chamado MeuComponente
// Você pode chamar a função substituirElemento dentro do componente para fazer a substituição

class MeuComponente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elementoAtual: <h1>Elemento Atual</h1>
    };
  }

  render() {
    return (
      <div>
        {substituirElemento(this.state.elementoAtual)}
      </div>
    );
  }
}

// Exporte o componente para que possa ser utilizado em outros lugares
export default MeuComponente;

*/