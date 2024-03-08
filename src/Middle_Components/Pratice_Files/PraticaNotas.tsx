import React, {useState} from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Tooltip } from '@material-ui/core';
import { Button } from 'antd';

const Violin: React.FC = () => {
  const playNote = (frequency: number) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; // Pode experimentar com outros tipos de ondas
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.connect(audioContext.destination);
    oscillator.start();
    setTimeout(() => oscillator.stop(), 500); // Ajuste o tempo de duração do som
  };

  const handleClickNote = (frequency: number) => {
    playNote(frequency);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button type="primary" onClick={handleClickOpen}>
            Abrir diálogo
        </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">Violin Scales</DialogTitle>
        <DialogContent style={{backgroundColor: 'midnightblue'}}>
        <div style={{color: 'cyan'}}>
        <h3>Natural notes/ Dó Scale</h3>
        <details><summary>Loose Violin strings</summary>
            <Tooltip title='Bass violin string loose'>
                <button onClick={() => handleClickNote(190.63)}>SOL</button>
            </Tooltip>
            <Tooltip title='RÉ, Second string in violin!'>
                <button onClick={() => handleClickNote(293.66)}>RÉ</button>
            </Tooltip>
            <Tooltip title='LÁ, Third String on the violin'>
                <button onClick={() => handleClickNote(440.00)}>LÁ</button>
            </Tooltip>
            <Tooltip title='MI, Fourth String on the violin, Higher-pitched string'>
                <button onClick={() => handleClickNote(645.63)}>MI</button>
            </Tooltip>
        </details>
        <details><summary>Scale in SOL Major</summary>
        <Tooltip title='Bass violin string loose'>
         <button onClick={() => handleClickNote(261.63)}>SOL</button>
        </Tooltip>
        <Tooltip title='LÁ, first finger on the SOL string'>
            <button onClick={() => handleClickNote(293.66)}>LÁ</button>
        </Tooltip>
        <Tooltip title='SI, second finger on the SOL string, away from the first finger'>
            <button onClick={() => handleClickNote(329.63)}>SI</button>
        </Tooltip>
        <Tooltip title='DÓ, Third finger on the SOL string'>
            <button onClick={() => handleClickNote(523.25)}>DÓ</button>
        </Tooltip>
        <Tooltip title='RÉ, fourth finger on the SOL string, or the loose next string'>
            <button onClick={() => handleClickNote(261.63)}>RÉ</button>
        </Tooltip>
        <Tooltip title='MI, first finger on the RÉ string'>
            <button onClick={() => handleClickNote(329.63)}>MI</button>
        </Tooltip>
        <Tooltip title='FÁ, second finger on the RÉ string'>
            <button onClick={() => handleClickNote(349.23)}>FÁ</button>
        </Tooltip>
        <Tooltip title='SOL, Third finger on the RÉ string, the last note in the scale'>
            <button onClick={() => handleClickNote(392.00)}>SOL</button>
        </Tooltip>
        </details>
        <details><summary>Scale Bass LÁ</summary>
            <button onClick={() => handleClickNote(261.63)}>DÓ</button>
            <button onClick={() => handleClickNote(293.66)}>RÉ</button>
            <button onClick={() => handleClickNote(329.63)}>MI</button>
            <button onClick={() => handleClickNote(349.23)}>FÁ</button>
            <button onClick={() => handleClickNote(392.00)}>SOL</button>
            <button onClick={() => handleClickNote(440.00)}>LÁ</button>
            <button onClick={() => handleClickNote(493.88)}>SI</button>
            <button onClick={() => handleClickNote(523.25)}>DÓ</button>
        </details>
        <details><summary>Scale DÓ</summary>
            <button onClick={() => handleClickNote(261.63)}>DÓ</button>
            <button onClick={() => handleClickNote(293.66)}>RÉ</button>
            <button onClick={() => handleClickNote(329.63)}>MI</button>
            <button onClick={() => handleClickNote(349.23)}>FÁ</button>
            <button onClick={() => handleClickNote(392.00)}>SOL</button>
            <button onClick={() => handleClickNote(440.00)}>LÁ</button>
            <button onClick={() => handleClickNote(493.88)}>SI</button>
            <button onClick={() => handleClickNote(523.25)}>DÓ</button>
            <p>Sharped notes</p>
            <button onClick={() => handleClickNote(270.50)}>DÓ#</button>
            <button onClick={() => handleClickNote(310.66)}>RÉ#</button>
            <button onClick={() => handleClickNote(329.63)}>MI</button>
            <button onClick={() => handleClickNote(359.23)}>FÁ#</button>
            <button onClick={() => handleClickNote(425.00)}>SOL#</button>
            <button onClick={() => handleClickNote(453.00)}>LÁ#</button>
            <button onClick={() => handleClickNote(453.00)}>SIb</button>
            <button onClick={() => handleClickNote(540.25)}>DÓ#</button>
        </details>
        <br/>
        <details><summary>Scale RÉ</summary>
            <button onClick={() => handleClickNote(261.63)}>DÓ</button>
            <button onClick={() => handleClickNote(293.66)}>RÉ</button>
            <button onClick={() => handleClickNote(329.63)}>MI</button>
            <button onClick={() => handleClickNote(349.23)}>FÁ</button>
            <button onClick={() => handleClickNote(392.00)}>SOL</button>
            <button onClick={() => handleClickNote(440.00)}>LÁ</button>
            <button onClick={() => handleClickNote(493.88)}>SI</button>
            <button onClick={() => handleClickNote(523.25)}>DÓ</button>
        </details>
      </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Violin;

/*            <button onClick={() => handleClickNote(329.63)}>MI</button>
            <button onClick={() => handleClickNote(349.23)}>FÁ</button>
            <button onClick={() => handleClickNote(392.00)}>SOL</button>
            <button onClick={() => handleClickNote(440.00)}>LÁ</button>
            <button onClick={() => handleClickNote(493.88)}>SI</button>
            <button onClick={() => handleClickNote(523.25)}>DÓ</button>
*/