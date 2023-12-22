import { IconButton } from '@material-ui/core';
import { Fab, Grid, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from 'antd';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MusicCreationScreen = () => {
    const [figures, setFigures] = useState([
        '♩',
        '♪',
        '♫',
        '♬'
    ]);
    const [signals, setSignals] = useState([
        '♭',
        '♮',
        '♯',
        '𝄞',
        '𝄡',
        '𝄢',
        '𝄪',
        '𝄫',
        '🎼'
    ]);


    const [lettersDOB, setLettersDOB] = useState('');
    const [lettersDON, setLettersDON] = useState('');
    const [lettersDOC, setLettersDOC] = useState('');
    const [lettersDOSC, setLettersDOSC] = useState('');


    const [lettersREB, setLettersREB] = useState('');
    const [lettersREN, setLettersREN] = useState('');
    const [lettersREC, setLettersREC] = useState('');
    const [lettersRESC, setLettersRESC] = useState('');


    const [lettersMIB, setLettersMIB] = useState('');
    const [lettersMIN, setLettersMIN] = useState('');
    const [lettersMIC, setLettersMIC] = useState('');
    const [lettersMISC, setLettersMISC] = useState('');


    const [lettersFAB, setLettersFAB] = useState('');
    const [lettersFAN, setLettersFAN] = useState('');
    const [lettersFAC, setLettersFAC] = useState('');
    const [lettersFASC, setLettersFASC] = useState('');


    const [lettersSOLB, setLettersSOLB] = useState('');
    const [lettersSOLN, setLettersSOLN] = useState('');
    const [lettersSOLC, setLettersSOLC] = useState('');
    const [lettersSOLSC, setLettersSOLSC] = useState('');


    const [lettersLAB, setLettersLAB] = useState('');
    const [lettersLAN, setLettersLAN] = useState('');
    const [lettersLAC, setLettersLAC] = useState('');
    const [lettersLASC, setLettersLASC] = useState('');


    const [lettersSIB, setLettersSIB] = useState('');
    const [lettersSIN, setLettersSIN] = useState('');
    const [lettersSIC, setLettersSIC] = useState('');
    const [lettersSISC, setLettersSISC] = useState('');


    const [image, setImage] = useState([]);

    const handleAddNoteDOB = (letra) => {
        setLettersDOB(lettersDOB + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteDON = (letra) => {
        setLettersDON(lettersDON + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteDOC = (letra) => {
        setLettersDOC(lettersDOC + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteDOSC = (letra) => {
        setLettersDOSC(lettersDOSC + letra);
        toast.success('Successfully placed note');
    };


    const handleAddNoteREB = (letra) => {
        setLettersREB(lettersREB + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteREN = (letra) => {
        setLettersREN(lettersREN + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteREC = (letra) => {
        setLettersREC(lettersREC + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteRESC = (letra) => {
        setLettersRESC(lettersRESC + letra);
        toast.success('Successfully placed note');
    };


    const handleAddNoteMIB = (letra) => {
        setLettersMIB(lettersMIB + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteMIN = (letra) => {
        setLettersMIN(lettersMIN + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteMIC = (letra) => {
        setLettersMIC(lettersMIC + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteMISC = (letra) => {
        setLettersMISC(lettersMISC + letra);
        toast.success('Successfully placed note');
    };


    const handleAddNoteFAB = (letra) => {
        setLettersFAB(lettersFAB + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteFAN = (letra) => {
        setLettersFAN(lettersFAN + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteFAC = (letra) => {
        setLettersFAC(lettersFAC + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteFASC = (letra) => {
        setLettersFASC(lettersFASC + letra);
        toast.success('Successfully placed note');
    };


    const handleAddNoteSOLB = (letra) => {
        setLettersSOLB(lettersSOLB + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteSOLN = (letra) => {
        setLettersSOLN(lettersSOLN + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteSOLC = (letra) => {
        setLettersSOLC(lettersSOLC + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteSOLSC = (letra) => {
        setLettersSOLSC(lettersSOLSC + letra);
        toast.success('Successfully placed note');
    };


    const handleAddNoteLAB = (letra) => {
        setLettersLAB(lettersLAB + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteLAN = (letra) => {
        setLettersLAN(lettersLAN + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteLAC = (letra) => {
        setLettersLAC(lettersLAC + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteLASC = (letra) => {
        setLettersLASC(lettersLASC + letra);
        toast.success('Successfully placed note');
    };


    const handleAddNoteSIB = (letra) => {
        setLettersSIB(lettersSIB + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteSIN = (letra) => {
        setLettersSIN(lettersSIN + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteSIC = (letra) => {
        setLettersSIC(lettersSIC + letra);
        toast.success('Successfully placed note');
    };
    const handleAddNoteSISC = (letra) => {
        setLettersSISC(lettersSISC + letra);
        toast.success('Successfully placed note');
    };


    const handleRemoveDOB = (letra) => {
        const novaString = lettersDOB.replace(letra, '');
        setLettersDOB(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveDON = (letra) => {
        const novaString = lettersDON.replace(letra, '');
        setLettersDON(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveDOC= (letra) => {
        const novaString = lettersDOC.replace(letra, '');
        setLettersDOC(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveDOSC = (letra) => {
        const novaString = lettersDOSC.replace(letra, '');
        setLettersDOSC(novaString);
        toast.success('Removed with success');
    };


    const handleRemoveREB = (letra) => {
        const novaString = lettersREB.replace(letra, '');
        setLettersREB(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveREN = (letra) => {
        const novaString = lettersREN.replace(letra, '');
        setLettersREN(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveREC = (letra) => {
        const novaString = lettersREC.replace(letra, '');
        setLettersREC(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveRESC = (letra) => {
        const novaString = lettersRESC.replace(letra, '');
        setLettersRESC(novaString);
        toast.success('Removed with success');
    };


    const handleRemoveMIB = (letra) => {
        const novaString = lettersMIB.replace(letra, '');
        setLettersMIB(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveMIN = (letra) => {
        const novaString = lettersMIN.replace(letra, '');
        setLettersMIN(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveMIC = (letra) => {
        const novaString = lettersMIC.replace(letra, '');
        setLettersMIC(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveMISC = (letra) => {
        const novaString = lettersMISC.replace(letra, '');
        setLettersMISC(novaString);
        toast.success('Removed with success');
    };


    const handleRemoveFAB = (letra) => {
        const novaString = lettersFAB.replace(letra, '');
        setLettersFAB(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveFAN = (letra) => {
        const novaString = lettersFAN.replace(letra, '');
        setLettersFAN(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveFAC = (letra) => {
        const novaString = lettersFAC.replace(letra, '');
        setLettersFAC(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveFASC = (letra) => {
        const novaString = lettersFASC.replace(letra, '');
        setLettersFASC(novaString);
        toast.success('Removed with success');
    };


    const handleRemoveSOLB = (letra) => {
        const novaString = lettersSOLB.replace(letra, '');
        setLettersSOLB(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveSOLN = (letra) => {
        const novaString = lettersSOLN.replace(letra, '');
        setLettersSOLN(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveSOLC = (letra) => {
        const novaString = lettersSOLC.replace(letra, '');
        setLettersSOLC(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveSOLSC = (letra) => {
        const novaString = lettersSOLSC.replace(letra, '');
        setLettersSOLSC(novaString);
        toast.success('Removed with success');
    };


    const handleRemoveLAB = (letra) => {
        const novaString = lettersLAB.replace(letra, '');
        setLettersLAB(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveLAN = (letra) => {
        const novaString = lettersLAN.replace(letra, '');
        setLettersLAN(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveLAC = (letra) => {
        const novaString = lettersLAC.replace(letra, '');
        setLettersLAC(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveLASC = (letra) => {
        const novaString = lettersLASC.replace(letra, '');
        setLettersLASC(novaString);
        toast.success('Removed with success');
    };


    const handleRemoveSIB = (letra) => {
        const novaString = lettersSIB.replace(letra, '');
        setLettersSIB(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveSIN = (letra) => {
        const novaString = lettersSIN.replace(letra, '');
        setLettersSIN(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveSIC = (letra) => {
        const novaString = lettersSIC.replace(letra, '');
        setLettersSIC(novaString);
        toast.success('Removed with success');
    };
    const handleRemoveSISC = (letra) => {
        const novaString = lettersSISC.replace(letra, '');
        setLettersSISC(novaString);
        toast.success('Removed with success');
    };


  const handleAddImage = () => {
    const newImage = {
      id: image,
      src: "https://i.pinimg.com/originals/66/5b/a3/665ba3d945652ddff5ad0ecacddd5976.gif" // Insira a URL da imagem desejada aqui
    };
    setImage([...image, newImage]);
    toast.success('Successfully placed Image');
  };

  const removeItem = index => {
    const updatedItems = [...image];
    updatedItems.splice(index, 1);
    setImage(updatedItems);
    toast.success('Image Removed Successfully');
  };

  return (
    <div style={{width: '600px', color: 'white', textAlign: 'center', boxShadow: '0 0 10px 20px'}}>
      <h1>𝓒𝓡𝓔𝓐𝓣𝓔 𝓟𝓔𝓝𝓣𝓐𝓖𝓡𝓐𝓜</h1>
      <h2>𝓝𝓸𝓽𝓮𝓼</h2>
      <br/><br/><br/>
      <Grid container spacing={3} style={{float: 'left', paddingLeft: '65px'}}>
      <Grid container spacing={5} style={{float: 'left', paddingLeft: '20px', backgroundColor: 'black', height: '50px', width: '800px'}}>
            <Popup trigger={<Fab style={{backgroundColor: 'gray', color: 'white'}}>DÓ</Fab>}>
                <div style={{width: '250px', margin: '-20px', backgroundColor: 'blue'}}>
                <MenuItem>
                    <Button style={{width: '250px', color: 'white', backgroundColor: 'midnightblue', boxShadow: '0 0 1px 1px', fontFamily: 'serif', fontSize: '16px', height: '23px'}} onClick={() => handleAddNoteDOB('♩')}>♩/B</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '15px'}}>
                    <Button style={{width: '250px', color: 'white', backgroundColor: 'midnightblue', boxShadow: '0 0 1px 1px', fontFamily: 'serif', fontSize: '16px', height: '23px'}} onClick={() => handleAddNoteDOC('♪')}>♪/C</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '15px'}}>
                    <Button style={{width: '250px', color: 'white', backgroundColor: 'midnightblue', boxShadow: '0 0 1px 1px', fontFamily: 'serif', fontSize: '16px', height: '23px'}} onClick={() => handleAddNoteDON('♩')}>♩/n</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '15px'}}>
                    <Button style={{width: '250px', color: 'white', backgroundColor: 'midnightblue', boxShadow: '0 0 1px 1px', fontFamily: 'serif', fontSize: '16px', height: '23px'}} onClick={() => handleAddNoteDOSC('♬')}>♬/SC</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '15px'}}>
                    <Button style={{width: '250px',backgroundColor: 'white', boxShadow: '0 0 1px 1px', color: 'red', fontFamily: 'serif', fontSize: '16px', height: '23px'}} onClick={() => handleRemoveDOB('♩')}><DeleteIcon/>♩/B</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '15px'}}>
                    <Button style={{width: '250px',backgroundColor: 'white', color: 'red', boxShadow: '0 0 1px 1px', fontFamily: 'serif', fontSize: '16px', height: '23px'}} onClick={() => handleRemoveDON('♩')}><DeleteIcon/>♩/n</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '15px'}}>
                    <Button style={{width: '250px',backgroundColor: 'white', color: 'red', boxShadow: '0 0 1px 1px', fontFamily: 'serif', fontSize: '16px', height: '23px'}} onClick={() => handleRemoveDOC('♪')}><DeleteIcon/>♪/n</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '15px'}}>
                    <Button style={{width: '250px',backgroundColor: 'white', color: 'red', boxShadow: '0 0 1px 1px', fontFamily: 'serif', fontSize: '16px', height: '23px'}} onClick={() => handleRemoveDOSC('♬')}><DeleteIcon/>♬/n</Button>
                </MenuItem>
                </div>
            </Popup>
      </Grid>
      <br/><br/>
      <Grid container spacing={6} style={{float: 'left', paddingLeft: '100px'}}>
            <Popup trigger={<Fab style={{backgroundColor: 'gray', color: 'white'}}>RÉ</Fab>}>
                <div style={{width: '200px', backgroundColor: 'Highlight', margin: '-23px'}}>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '16px', height: '25px'}} onClick={() => handleAddNoteREB('♩')}>B/♩</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '16px', height: '25px'}} onClick={() => handleAddNoteREC('♪')}>C/♪</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '16px', height: '25px'}} onClick={() => handleAddNoteREN('♩')}>N/♩</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '16px', height: '25px'}} onClick={() => handleAddNoteRESC('♬')}>SC/♬</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', backgroundColor: 'lightsalmon', color: 'blue', boxShadow: '0 0 1px 1px', fontFamily: 'serif', fontSize: '16px', height: '25px'}} onClick={() => handleRemoveREB('♩')}><DeleteIcon/>♩/B</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', backgroundColor: 'lightsalmon', color: 'blue', boxShadow: '0 0 1px 1px', fontFamily: 'serif', fontSize: '16px', height: '25px'}} onClick={() => handleRemoveREN('♩')}><DeleteIcon/>♩/N</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', backgroundColor: 'lightsalmon', color: 'blue', boxShadow: '0 0 1px 1px', fontFamily: 'serif', fontSize: '16px', height: '25px'}} onClick={() => handleRemoveREC('♪')}><DeleteIcon/>♪/C</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', backgroundColor: 'lightsalmon', color: 'blue', boxShadow: '0 0 1px 1px', fontFamily: 'serif', fontSize: '16px', height: '25px'}} onClick={() => handleRemoveRESC('♬')}><DeleteIcon/>♬/SC</Button>
                </MenuItem>
                </div>
            </Popup>
        </Grid>
        <Grid container spacing={13.5} style={{float: 'left', paddingLeft: '230px'}}>
            <Popup trigger={<Fab style={{backgroundColor: 'gray', color: 'white'}}>MI</Fab>}>
                <div style={{backgroundColor: 'lightblue', margin: '-27px', width: '200px'}}>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', color: 'midnightblue', boxShadow: '0 0 1px 1px', height: '20px', fontSize: '16px'}} onClick={() => handleAddNoteMIB('♩')}>♩/B</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', color: 'midnightblue', boxShadow: '0 0 1px 1px', height: '20px', fontSize: '16px'}} onClick={() => handleAddNoteMIN('♩')}>♩/N</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', color: 'midnightblue', boxShadow: '0 0 1px 1px', height: '20px', fontSize: '16px'}} onClick={() => handleAddNoteMIC('♪')}>♪/C</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', color: 'midnightblue', boxShadow: '0 0 1px 1px', height: '20px', fontSize: '16px'}} onClick={() => handleAddNoteMISC('♬')}>♬/SC</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', backgroundColor: 'lightsalmon', color: 'red', boxShadow: '0 0 1px 1px', fontFamily: 'serif', height: '20px', fontSize: '16px'}} onClick={() => handleRemoveMIB('♩')}><DeleteIcon/>♩/B</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', backgroundColor: 'lightsalmon', color: 'red', boxShadow: '0 0 1px 1px', fontFamily: 'serif', height: '20px', fontSize: '16px'}} onClick={() => handleRemoveMIN('♩')}><DeleteIcon/>♩/N</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', backgroundColor: 'lightsalmon', color: 'red', boxShadow: '0 0 1px 1px', fontFamily: 'serif', height: '20px', fontSize: '16px'}} onClick={() => handleRemoveMIC('♪')}><DeleteIcon/>♪/C</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', backgroundColor: 'lightsalmon', color: 'red', boxShadow: '0 0 1px 1px', fontFamily: 'serif', height: '20px', fontSize: '16px'}} onClick={() => handleRemoveMISC('♬')}><DeleteIcon/>♬/SC</Button>
                </MenuItem>
                </div>
            </Popup>
        </Grid>
        <Grid container spacing={13.5} style={{float: 'left', paddingLeft: '300px'}}>
            <Popup trigger={<Fab style={{backgroundColor: 'gray', color: 'white'}}>FÁ</Fab>}>
                <div style={{backgroundColor: 'gray', margin: '-30px'}}>
                <MenuItem style={{paddingLeft: '5px', alignContent: 'center', backgroundColor: 'lightblue'}}>
                    <Button style={{width: '250px', color: 'blue', boxShadow: '0 0 1px 1px', fontSize: '16px', height: '25px', textAlign: 'center'}} onClick={() => handleAddNoteFAB('♩')}>♩/B</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px', backgroundColor: 'gold'}}>
                    <Button style={{width: '250px', color: 'blue', boxShadow: '0 0 1px 1px', fontSize: '16px', height: '25px'}} onClick={() => handleAddNoteFAN('♩')}>♩/N</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px', backgroundColor: 'dodgerblue'}}>
                    <Button style={{width: '250px', color: 'darkblue', boxShadow: '0 0 1px 1px', fontSize: '16px', height: '25px'}} onClick={() => handleAddNoteFAC('♪')}>♪/C</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '16px', height: '25px'}} onClick={() => handleAddNoteFASC('♬')}>♬/SC</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px',backgroundColor: 'lightsalmon', color: 'red', boxShadow: '0 0 1px 1px', fontFamily: 'serif', height: '25px', fontSize: '16px'}} onClick={() => handleRemoveFAB('♩')}><DeleteIcon/>♩/B</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px',backgroundColor: 'lightsalmon', color: 'red', boxShadow: '0 0 1px 1px', fontFamily: 'serif', height: '25px', fontSize: '16px'}} onClick={() => handleRemoveFAN('♩')}><DeleteIcon/>♩/N</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px',backgroundColor: 'lightsalmon', color: 'red', boxShadow: '0 0 1px 1px', fontFamily: 'serif', height: '25px', fontSize: '16px'}} onClick={() => handleRemoveFAC('♪')}><DeleteIcon/>♪/C</Button>
                </MenuItem>
                <MenuItem style={{paddingLeft: '5px'}}>
                    <Button style={{width: '250px',backgroundColor: 'lightsalmon', color: 'red', boxShadow: '0 0 1px 1px', fontFamily: 'serif', height: '25px', fontSize: '16px'}} onClick={() => handleRemoveFASC('♬')}><DeleteIcon/>♬/SC</Button>
                </MenuItem>
                </div>
            </Popup>
        </Grid>
        <Grid container spacing={13.5} style={{float: 'left', paddingLeft: '370px'}}>
            <Popup trigger={<Fab style={{backgroundColor: 'gray', color: 'white', textAlign: 'center'}}>SOL</Fab>}>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteSOLB('♩')}>♩/B</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteSOLN('♩')}>♩/N</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteSOLC('♪')}>♪/C</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteSOLSC('♬')}>♬/SC</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveSOLB('♩')}><DeleteIcon/>♩/B</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveSOLN('♩')}><DeleteIcon/>♩/N</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveSOLC('♪')}><DeleteIcon/>♪/c</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveSOLSC('♬')}><DeleteIcon/>♬/SC</Button>
                </MenuItem>
            </Popup>
        </Grid>
        <Grid container spacing={13.5} style={{float: 'left', paddingLeft: '440px'}}>
            <Popup trigger={<Fab style={{backgroundColor: 'gray', color: 'white'}}>LÁ</Fab>}>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteLAB('♩')}>♩/B</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteLAN('♩')}>♩/N</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteLAC('♪')}>♪/C</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteLASC('♬')}>♬/SC</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveLAB('♩')}><DeleteIcon/>♩/B</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveLAN('♩')}><DeleteIcon/>♩/N</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveLAC('♪')}><DeleteIcon/>♪/C</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveLASC('♬')}><DeleteIcon/>♬/SC</Button>
                </MenuItem>
            </Popup>
        </Grid>
        <Grid container spacing={13.5} style={{float: 'left', paddingLeft: '510px'}}>
            <Popup trigger={<Fab style={{backgroundColor: 'gray', color: 'white'}}>SI</Fab>}>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteREB('♩')}>♩/B</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteREN('♩')}>♩/N</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteREC('♪')}>♪/C</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteRESC('♬')}>♬/SC</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveREB('♩')}><DeleteIcon/>♩/B</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveREN('♩')}><DeleteIcon/>♩/N</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveREC('♪')}><DeleteIcon/>♪/C</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveRESC('♬')}><DeleteIcon/>♬/SC</Button>
                </MenuItem>
            </Popup>
        </Grid>
      <Grid container spacing={15} style={{float: 'left', paddingLeft: '590px'}}>
        <Button style={{backgroundColor: 'Highlight', boxShadow: '0 0 1px 1px', color: 'white'}} onClick={handleAddImage}>Add 🎼</Button>
      </Grid>
      <Grid container spacing={10} style={{float: 'left', paddingLeft: '560px'}}>
        <Button onClick={removeItem}><DeleteIcon/>  🎼</Button>
      </Grid>
      </Grid>

      <div>
        {image.map((image) => (
            <img style={{width: '700px'}} key={image.id} src={image.src} alt={`Imagem ${image.id}`} />
        ))}
        <Grid container spacing={125.3} style={{float: 'left', paddingLeft: '1060px'}}>
            <h1 style={{position: 'absolute', color: 'black', fontSize: '19px'}}>{lettersDOB}</h1>
        </Grid>
        <Grid container spacing={128.3} style={{float: 'left', paddingLeft: '1083px'}}>
            <h1 style={{position: 'absolute', color: 'black', fontSize: '19px'}}>{lettersDON}</h1>
        </Grid>
        <Grid container spacing={123.7} style={{float: 'left', paddingLeft: '1050px'}}>
            <h1 style={{position: 'absolute', color: 'black', fontSize: '10px'}}>{lettersREB}</h1>
        </Grid>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MusicCreationScreen;