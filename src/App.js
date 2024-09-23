/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-pascal-case */
import './App.css';
import React from 'react';
import { Fab, Grid } from '@mui/material';
import Login from './Middle_Components/LoginEnter';
import giphyViolin from './Middle_Components/Phases_Components/Middles_Images/giphyViolin.gif';
import { format } from 'date-fns';
import { toast, Toaster } from 'react-hot-toast';

function App() {
  const styles = {
    image: {
      width: '250px', 
      height: '250px',
      borderRadius: '200px',
      borderColor: 'darkviolet',
      borderStyle: 'ridge',
      padding: '5px',
      borderWidth: '1px',
      color: 'blue',
      boxShadow: '0 0 5px 3px'
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
  const today = new Date();
  const formattedDate = format(today, 'dd/MM/yyyy');
  const ShowDate = () => {
    toast.success(formattedDate);
  }

  return (
    <div className="App">
      <body className="App-header">
      <Fab onClick={ShowDate}>Date!</Fab>
        <Grid container spacing={15} style={{float: 'left', paddingLeft: '150px', paddingTop: '150px'}}>
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
        <Grid container spacing={5} style={{paddingLeft: '570px',}}>
          <Login/>
        </Grid>
        <br/>
      </body>
      <Toaster/>
    </div>
  );
}

export default App;

/*
 
      <Button
        onClick={handleClick}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: isSquare ? '10px' : '100%', // Se isSquare for true, formato é quadrado, senão é círculo
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          transition: '0.3s ease'
        }}
      >
        Clique-me
      </Button>
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          backgroundColor: 'transparent', // Muda de cor baseado no estado
          fontSize: elementState ? '3px' : '30px',
          color: elementState ? 'white' : 'gold',
        }}
      >
        {elementState ? 'Estado Ativado' : 'Estado Desativado'}
      </div>


            <Button onClick={handleClick}
              style={{
                width: elementState ? '80px' : '60px',
                height: elementState ? '70px' : '40px',
                backgroundColor: elementState ? 'gold' : 'orange',
                fontSize: elementState ? '15px' : '10px',
                color: 'black',
                cursor: 'pointer',
                transition: '0.3s ease'
              }}>Insert Datas!!</Button>


 */