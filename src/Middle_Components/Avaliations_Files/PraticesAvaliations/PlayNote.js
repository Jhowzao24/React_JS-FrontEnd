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