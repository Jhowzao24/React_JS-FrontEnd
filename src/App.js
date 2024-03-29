import './App.css';
import React, {useState, useEffect} from 'react';
import { Grid } from '@mui/material';
import Login from './Middle_Components/LoginEnter';
import giphyViolin from './Middle_Components/Phases_Components/Middles_Images/giphyViolin.gif';
import { Button } from 'antd';
import Popup from 'reactjs-popup';

function App() {
  function Exercise() {
    const [tonality, setTonality] = useState('');
    const [exercise, setExercise] = useState('');

    // Função para gerar um exercício aleatório
    function generateExercise() {
        const tonalities = ['Dó Maior', 'Sol Maior', 'Ré Maior', 'Lá Maior'];
        const exercises = [
            'Arpejo Ascendente e Descendente',
            'Escalas Cromáticas',
            'Acordes de Sétima',
            'Passagens Rápidas',
            'Dobraduras de Corda',
            'Harmonização de Melodia',
        ];

        // Escolher aleatoriamente uma tonalidade e um exercício
        const randomTonality = tonalities[Math.floor(Math.random() * tonalities.length)];
        const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];

        // Atualizar o estado com o exercício gerado
        setTonality(randomTonality);
        setExercise(randomExercise);
    }

    return (
        <div>
            <h1>Exercício Difícil para Violoncelo</h1>
            <button onClick={generateExercise}>Gerar Exercício</button>
            <div>
                <h2>Tonalidade: {tonality}</h2>
                <h3>Exercício: {exercise}</h3>
                {/* Aqui você pode incluir instruções específicas para o exercício gerado */}
            </div>
        </div>
    );
}

  const [showScreen, setShowScreen] = useState(false);

  // Função para exibir a tela interna
  function handleShowScreen() {
      setShowScreen(true);
  }


  const styles = {
    image: {
      width: '250px', 
      height: '250px',
      borderRadius: '55px',
      borderColor: 'cyan',
      borderStyle: 'ridge',
      padding: '5px',
      borderWidth: '1px',
    },
    h1: {
      color: 'white',
      backgroundColor: 'blue',
      opacity: '0.7',
      width: '350px',
      letterSpacing: '10px',
      borderRadius: '25px',
      fontSize: '30px'
    }
  };
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // Define um temporizador para mudar a visibilidade após 5 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <body className="App-header">
        <Grid container spacing={3} style={{float: 'right', paddingLeft: '30px'}}>
          {isVisible && <h1 style={styles.h1} >Your virtual environment on string music</h1>}
        </Grid>
        <Grid style={{float: 'left', paddingLeft: '150px', paddingTop: '150px'}} container spacing={15}>
          <center>
            <header>
              <img style={styles.image}
              src={giphyViolin} 
              alt='positionVioliner'/>
            </header>
          </center>
        </Grid>
        <Grid container spacing={13} style={{paddingLeft: '670px'}}>
          <Login/>
        </Grid>
      </body>
      <br/><br/>
      <br/><br/>
      <br/>
      <button onClick={handleShowScreen}>Mostrar Tela Interna</button>
      {showScreen && <Popup trigger={<Button>Exercise Cello!</Button>}>
        <Exercise/>
        </Popup>}
      <br/>
    </div>
  );
}

export default App;


/*import AvatarCre from './Middle_Components/Pratice_Files/FilesPratices/Avatars/AvatarOne';*/
/*
import { Transition } from 'react-transition-group';
const Card = ({ isVisible }) => {
  return (
    <Transition in={isVisible} timeout={duration}>
      {(state) => (
        <div
          className="card"
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          {
            <Login/>
          }
        </div>
      )}
    </Transition>
  );
};

const duration = 3000; // tempo da animação em milissegundos

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0.5 },
  entered:  { opacity: 0.8 },
};

const toggleCardVisibility = () => {
  setIsVisible(!isVisible);
};
const [isVisible, setIsVisible] = useState(true);*/





/*{showing && <p>, {isVisible? 'Esconder':'Mostrar'}, 
        <ButtonBase onClick={() => setContando(contando + 1)}>Contando ao clicar</ButtonBase>
        <h1>{contando}</h1>
        <Button onClick={VisibilityToggle}>click on me</Button>
        <h1>{isVisible && <p>Strings Institute!</p>}</h1>}; 

          const [contando, setContando] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const VisibilityToggle = () => {
    setIsVisible(! isVisible);
  }
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    const TimerOut = setTimeout(() => {
      setShowing(false);
    },3000);
    return()=>{
      clearTimeout(TimerOut);
    };
  },[]);*/

/*  const inputRef = useRef();
  const [value, setValue] = useState("");
  const handleclicking = () => {
    setValue(inputRef.current.value);
    alert(value)
  }*/