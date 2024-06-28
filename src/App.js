/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-pascal-case */
import './App.css';
import React from 'react';
import { Grid } from '@mui/material';
import Login from './Middle_Components/LoginEnter';
import giphyViolin from './Middle_Components/Phases_Components/Middles_Images/giphyViolin.gif';


function App() {
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
      width: '1000px',
      letterSpacing: '10px',
      borderRadius: '25px',
      fontSize: '30px',
      alignText: 'center'
    }
  };

  return (
    <div className="App">
      <body className="App-header">
        <Grid style={{float: 'left', paddingLeft: '150px', paddingTop: '150px'}} container spacing={15}>
          <center>
            <header>
              <div>
              <img style={styles.image}
              src={giphyViolin} 
              alt='positionVioliner'/>
              </div>
            </header>
          </center>
        </Grid>
        <Grid container spacing={15} style={{paddingLeft: '670px'}}>
          <Login/>
        </Grid>
        <br/>
      </body>
    </div>
  );
}

export default App;

/*
function Sliders({ slides }){
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndiceAtual((indiceAtual + 1) % slides.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [indiceAtual, slides.length]);
  return(
    <div style={{ width: '100%', overflow: 'hidden' }}>
    <div style={{ display: 'flex', transition: 'transform 0.9s', transform: `translateX(-${indiceAtual * 100}%)` }}>
      {slides.map((slide, index) => (
        <div key={index} style={{ width: '100%', flexShrink: 0, paddingTop: '100px', fontSize: '15px' }}>
          <p style={{color: 'violet', backgroundColor: 'blue'}}>{slide.texto}</p>
          <img src={slide.imagem} alt={slide.alt} style={{ width: '150px', heigth: '60px', borderRadius: '70px', boxShadow: '0 0 5px 5px', opacity: '0.8' }} />
        </div>
      ))}
    </div>
  </div>
  )
}*/




  /*
  const slides = [
    {
      imagem: 'https://th.bing.com/th/id/R.debf7ee25ec2870292b28e77f4c9af45?rik=jSMbqxXAqEwoBg&pid=ImgRaw&r=0',
      texto: 'The Cello has a Bass sound that makes the grave on the orchestra, this sound means like a tempestuasty day!!',
      alt: 'Descrição da imagem 1'
    },
    {
      imagem: 'https://th.bing.com/th/id/OIP.eV3J1bybz4cAeh6RZDJCMQHaE_?rs=1&pid=ImgDetMain',
      texto: 'Violin has an soft and a clean sound!!The Violin is the most beautiful instrument that make the conduction of the orchestra around the whole world!!',
      alt: 'Descrição da imagem 2'
    },
    { 
      imagem: 'https://th.bing.com/th/id/OIP.uAbxarKmbRUzFlnRXht4KQHaEq?rs=1&pid=ImgDetMain',
      texto: 'The Viola has a perfect sound making the tenor in orchestra!!',
      alt: 'Descrição da imagem 3'
    },
    {
      imagem: 'https://i.pinimg.com/originals/4b/45/7b/4b457bdfc1da6bc7988eaf0f194f0128.jpg',
      texto: 'You and the Violin conect yourselfs!!',
      alt: 'Descrição da imagem 4',
    },
    {
      imagem: 'https://thumbs.dreamstime.com/b/viol%C3%ADn-y-arco-cl%C3%A1sicos-dibujados-mano-instrumento-musical-ilustraci%C3%B3n-del-vector-74806957.jpg',
      texto: 'Viola connects you with the heart of the harmony!!',
      alt: 'Descrição da imagem 5',
    },
    {
      imagem: 'https://i.pinimg.com/originals/f1/fc/a7/f1fca7f66608b895776153591cb5cf01.jpg',
      texto: 'Viola and you will play the best harmony and make the best of the whole music!!',
      alt: 'Descrição da imagem 6',
    },
    {
      imagem: 'https://th.bing.com/th/id/OIP.83cAGXnTbINSymCgM59J5AHaLH?rs=1&pid=ImgDetMain',
      texto: 'Resting with the Violin is the best resting time that youve never feel before!!But you will feel this when you start to play the violin!!',
      alt: 'Detalhes da imagem 7',
    }
    // Adicione mais slides conforme necessário
  ];
  */

  /*
        <br/><br/><br/>
        <Grid container spacing={20} style={{float: 'right', paddingLeft: '150px', paddingTop: '30px'}}>
          <div>
            <center>
                <Sliders slides={slides} />
            </center>
          </div>
        </Grid>

*/


/*
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    // Define um temporizador para mudar a visibilidade após 5 segundos
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);*/


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