import { Fab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Button, Card } from 'antd';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';

export default function PentCreator(){
    const [DO, setDO] = useState('');
    const [RE, setRE] = useState('');
    const [MI, setMI] = useState('');
    const [FA, setFA] = useState('');
    const [SOL, setSOL] = useState('');
    const [LA, setLA] = useState('');
    const [SI, setSI] = useState('');
    const ChangeDO = (num) => {
        switch(num){
            case 1:
                setDO('DÓ');
                break;
            case 2:
                setDO('RÉ');
                break;
            case 3:
                setDO('MI');
                break;
            case 4:
                setDO('FÁ');
                break;
            case 5:
                setDO('SOL');
                break;
            case 6:
                setDO('LÁ');
                break;
            case 7:
                setDO('SI');
                break;
            case 8:
                setDO('#DÓ');
                break;
            case 9:
                setDO('bRÉ');
                break;
            case 10:
                setDO('#RÉ');
                break;
            case 11:
                setDO('bMI');
                break;
            case 12:
                setDO('#FÁ');
                break;
            case 13:
                setDO('bSOL');
                break;
            case 14:
                setDO('#SOL');
                break;
            case 15:
                setDO('bLÁ');
                break;
            case 16:
                setDO('#LÁ');
                break;
            case 17:
                setDO("bSI");
                break;
            case 18:
                setDO('');
                break;
            default:
                return null;
        }
    };
    const ChangeRE = (num) => {
        switch(num){
            case 1:
                setRE('RÉ');
                break;
            case 2:
                setRE('MI');
                break;
            case 3:
                setRE('FÁ');
                break;
            case 4:
                setRE('SOL');
                break;
            case 5:
                setRE('LÁ');
                break;
            case 6:
                setRE('SI');
                break;
            case 7:
                setRE('DÓ');
                break;
            case 8:
                setRE('#RÉ');
                break;
            case 9:
                setRE('bMI');
                break;
            case 10:
                setRE('#FÁ');
                break;
            case 11:
                setRE('bSOL');
                break;
            case 12:
                setRE('#SOL');
                break;
            case 13:
                setRE('bLÁ');
                break;
            case 14:
                setRE('#LÁ');
                break;
            case 15:
                setRE('bSI');
                break;
            case 16:
                setRE('');
                break;
            default:
                return null;
        }
    };
    const ChangeMI = (num) => {
        switch(num){
            case 1:
                setMI('MI');
                break;
            case 2:
                setMI('FÁ');
                break;
            case 3:
                setMI('SOL');
                break;
            case 4:
                setMI('LÁ');
                break;
            case 5:
                setMI('SI');
                break;
            case 6:
                setMI('DÓ');
                break;
            case 7:
                setMI('RÉ');
                break;
            case 8:
                setMI('#RÉ');
                break;
            case 9:
                setMI('bMI');
                break;
            case 10:
                setMI('#FÁ');
                break;
            case 11:
                setMI('bSOL');
                break;
            case 12:
                setMI('#SOL');
                break;
            case 13:
                setMI('bLÁ');
                break;
            case 14:
                setMI('#LÁ');
                break;
            case 15:
                setMI('bSI');
                break;
            case 16:
                setMI('');
                break;
            default:
                return null;
        }
    };
    const ChangeFA = (num) => {
        switch(num){
            case 1:
                setFA('FÁ');
                break;
            case 2:
                setFA('SOL');
                break;
            case 3:
                setFA('LÁ');
                break;
            case 4:
                setFA('SI');
                break;
            case 5:
                setFA('DÓ');
                break;
            case 6:
                setFA('RÉ');
                break;
            case 7:
                setFA('MI');
                break;
            case 8:
                setFA('#RÉ');
                break;
            case 9:
                setFA('bMI');
                break;
            case 10:
                setFA('#FÁ');
                break;
            case 11:
                setFA('bSOL');
                break;
            case 12:
                setFA('#SOL');
                break;
            case 13:
                setFA('bLÁ');
                break;
            case 14:
                setFA('#LÁ');
                break;
            case 15:
                setFA('bSI');
                break;
            case 16:
                setFA('');
                break;
            default:
                return null;
        }
    };
    const ChangeSOL = (num) => {
        switch(num){
            case 1:
                setSOL('SOL');
                break;
            case 2:
                setSOL('LÁ');
                break;
            case 3:
                setSOL('SI');
                break;
            case 4:
                setSOL('DÓ');
                break;
            case 5:
                setSOL('RÉ');
                break;
            case 6:
                setSOL('MI');
                break;
            case 7:
                setSOL('FÁ');
                break;
            case 8:
                setSOL('#RÉ');
                break;
            case 9:
                setSOL('bMI');
                break;
            case 10:
                setSOL('#FÁ');
                break;
            case 11:
                setSOL('bSOL');
                break;
            case 12:
                setSOL('#SOL');
                break;
            case 13:
                setSOL('bLÁ');
                break;
            case 14:
                setSOL('#LÁ');
                break;
            case 15:
                setSOL('bSI');
                break;
            case 16:
                setSOL('');
                break;
            default:
                return null;
        }
    };
    const ChangeLA = (num) => {
        switch(num){
            case 1:
                setLA('LÁ');
                break;
            case 2:
                setLA('SI');
                break;
            case 3:
                setLA('DÓ');
                break;
            case 4:
                setLA('RÉ');
                break;
            case 5:
                setLA('MI');
                break;
            case 6:
                setLA('FÁ');
                break;
            case 7:
                setLA('SOL');
                break;
            case 8:
                setLA('#RÉ');
                break;
            case 9:
                setLA('bMI');
                break;
            case 10:
                setLA('#FÁ');
                break;
            case 11:
                setLA('bSOL');
                break;
            case 12:
                setLA('#SOL');
                break;
            case 13:
                setLA('bLÁ');
                break;
            case 14:
                setLA('#LÁ');
                break;
            case 15:
                setLA('bSI');
                break;
            case 16:
                setLA('');
                break;
            default:
                return null;
        }
    };
    const ChangeSI = (num) => {
        switch(num){
            case 1:
                setSI('SI');
                break;
            case 2:
                setSI('DÓ');
                break;
            case 3:
                setSI('RÉ');
                break;
            case 4:
                setSI('MI');
                break;
            case 5:
                setSI('FÁ');
                break;
            case 6:
                setSI('SOL');
                break;
            case 7:
                setSI('LÁ');
                break;
            case 8:
                setSI('#RÉ');
                break;
            case 9:
                setSI('bMI');
                break;
            case 10:
                setSI('#FÁ');
                break;
            case 11:
                setSI('bSOL');
                break;
            case 12:
                setSI('#SOL');
                break;
            case 13:
                setSI('bLÁ');
                break;
            case 14:
                setSI('#LÁ');
                break;
            case 15:
                setSI('bSI');
                break;
            case 16:
                setSI('');
                break;
            default:
                return null;
        }
    };
    const rows = [
        { id: 1}
      ];
    const [showTable, setShowTable] = useState(false);

    const handleButtonClick = () => {
      setShowTable(true);
    };
    const handleCloseClick = () => {
        setShowTable(false);
    }
    return(
        <div>
            <Card>
                <h1>Build by yourselves</h1>
            </Card>
            <Popup trigger={<Fab>1º</Fab>}>
                <Card>
                    <Button onClick={() => ChangeDO(1)}>DÓ</Button>
                    <Button onClick={() => ChangeDO(2)}>RÉ</Button>
                    <Button onClick={() => ChangeDO(3)}>MI</Button>
                    <Button onClick={() => ChangeDO(4)}>FÁ</Button>
                    <Button onClick={() => ChangeDO(5)}>SOL</Button>
                    <Button onClick={() => ChangeDO(6)}>LÁ</Button>
                    <Button onClick={() => ChangeDO(7)}>SI</Button>
                    <Button onClick={() => ChangeDO(8)}>#DÓ</Button>
                    <Button onClick={() => ChangeDO(9)}>bRÉ</Button>
                    <Button onClick={() => ChangeDO(10)}>#RÉ</Button>
                    <Button onClick={() => ChangeDO(11)}>bMI</Button>
                    <Button onClick={() => ChangeDO(12)}>#FÁ</Button>
                    <Button onClick={() => ChangeDO(13)}>bSOL</Button>
                    <Button onClick={() => ChangeDO(14)}>#SOL</Button>
                    <Button onClick={() => ChangeDO(15)}>bLÁ</Button>
                    <Button onClick={() => ChangeDO(16)}>#LÁ</Button>
                    <Button onClick={() => ChangeDO(17)}>bSI</Button>
                    <Button onClick={() => ChangeDO(18)}>X</Button>
                </Card>
            </Popup>
            <Popup trigger={<Fab>2º</Fab>}>
                <Card>
                    <Button onClick={() => ChangeRE(1)}>RÉ</Button>
                    <Button onClick={() => ChangeRE(2)}>MI</Button>
                    <Button onClick={() => ChangeRE(3)}>FÁ</Button>
                    <Button onClick={() => ChangeRE(4)}>SOL</Button>
                    <Button onClick={() => ChangeRE(5)}>LÁ</Button>
                    <Button onClick={() => ChangeRE(6)}>SI</Button>
                    <Button onClick={() => ChangeRE(7)}>DÓ</Button>
                    <Button onClick={() => ChangeRE(8)}>#RÉ</Button>
                    <Button onClick={() => ChangeRE(9)}>bMI</Button>
                    <Button onClick={() => ChangeRE(10)}>#FÁ</Button>
                    <Button onClick={() => ChangeRE(11)}>bSOL</Button>
                    <Button onClick={() => ChangeRE(12)}>#SOL</Button>
                    <Button onClick={() => ChangeRE(13)}>bLÁ</Button>
                    <Button onClick={() => ChangeRE(14)}>#LÁ</Button>
                    <Button onClick={() => ChangeRE(15)}>bSI</Button>
                    <Button onClick={() => ChangeRE(16)}>X</Button>
                </Card>
            </Popup>
            <Popup trigger={<Fab>3º</Fab>}>
                <Card>
                    <Button onClick={() => ChangeMI(1)}>MI</Button>
                    <Button onClick={() => ChangeMI(2)}>FÁ</Button>
                    <Button onClick={() => ChangeMI(3)}>SOL</Button>
                    <Button onClick={() => ChangeMI(4)}>LÁ</Button>
                    <Button onClick={() => ChangeMI(5)}>SI</Button>
                    <Button onClick={() => ChangeMI(6)}>DÓ</Button>
                    <Button onClick={() => ChangeMI(7)}>RÉ</Button>
                    <Button onClick={() => ChangeMI(8)}>#RÉ</Button>
                    <Button onClick={() => ChangeMI(9)}>bMI</Button>
                    <Button onClick={() => ChangeMI(10)}>#FÁ</Button>
                    <Button onClick={() => ChangeMI(11)}>bSOL</Button>
                    <Button onClick={() => ChangeMI(12)}>#SOL</Button>
                    <Button onClick={() => ChangeMI(13)}>bLÁ</Button>
                    <Button onClick={() => ChangeMI(14)}>#LÁ</Button>
                    <Button onClick={() => ChangeMI(15)}>bSI</Button>
                    <Button onClick={() => ChangeMI(16)}>X</Button>
                </Card>
            </Popup>
            <Popup trigger={<Fab>4º</Fab>}>
                <Card>
                    <Button onClick={() => ChangeFA(1)}>FÁ</Button>
                    <Button onClick={() => ChangeFA(2)}>SOL</Button>
                    <Button onClick={() => ChangeFA(3)}>LÁ</Button>
                    <Button onClick={() => ChangeFA(4)}>SI</Button>
                    <Button onClick={() => ChangeFA(5)}>DÓ</Button>
                    <Button onClick={() => ChangeFA(6)}>RÉ</Button>
                    <Button onClick={() => ChangeFA(7)}>MI</Button>
                    <Button onClick={() => ChangeFA(8)}>#RÉ</Button>
                    <Button onClick={() => ChangeFA(9)}>bMI</Button>
                    <Button onClick={() => ChangeFA(10)}>#FÁ</Button>
                    <Button onClick={() => ChangeFA(11)}>bSOL</Button>
                    <Button onClick={() => ChangeFA(12)}>#SOL</Button>
                    <Button onClick={() => ChangeFA(13)}>bLÁ</Button>
                    <Button onClick={() => ChangeFA(14)}>#LÁ</Button>
                    <Button onClick={() => ChangeFA(15)}>bSI</Button>
                    <Button onClick={() => ChangeFA(16)}>X</Button>
                </Card>
            </Popup>
            <Popup trigger={<Fab>5º</Fab>}>
                <Card>
                    <Button onClick={() => ChangeSOL(1)}>SOL</Button>
                    <Button onClick={() => ChangeSOL(2)}>LÁ</Button>
                    <Button onClick={() => ChangeSOL(3)}>SI</Button>
                    <Button onClick={() => ChangeSOL(4)}>DÓ</Button>
                    <Button onClick={() => ChangeSOL(5)}>RÉ</Button>
                    <Button onClick={() => ChangeSOL(6)}>MI</Button>
                    <Button onClick={() => ChangeSOL(7)}>FÁ</Button>
                    <Button onClick={() => ChangeSOL(8)}>#RÉ</Button>
                    <Button onClick={() => ChangeSOL(9)}>bMI</Button>
                    <Button onClick={() => ChangeSOL(10)}>#FÁ</Button>
                    <Button onClick={() => ChangeSOL(11)}>bSOL</Button>
                    <Button onClick={() => ChangeSOL(12)}>#SOL</Button>
                    <Button onClick={() => ChangeSOL(13)}>bLÁ</Button>
                    <Button onClick={() => ChangeSOL(14)}>#LÁ</Button>
                    <Button onClick={() => ChangeSOL(15)}>bSI</Button>
                    <Button onClick={() => ChangeSOL(16)}>X</Button>
                </Card>
            </Popup>
            <Popup trigger={<Fab>6º</Fab>}>
                <Card>
                    <Button onClick={() => ChangeLA(1)}>LÁ</Button>
                    <Button onClick={() => ChangeLA(2)}>SI</Button>
                    <Button onClick={() => ChangeLA(3)}>DÓ</Button>
                    <Button onClick={() => ChangeLA(4)}>RÉ</Button>
                    <Button onClick={() => ChangeLA(5)}>MI</Button>
                    <Button onClick={() => ChangeLA(6)}>FÁ</Button>
                    <Button onClick={() => ChangeLA(7)}>SOL</Button>
                    <Button onClick={() => ChangeLA(8)}>#RÉ</Button>
                    <Button onClick={() => ChangeLA(9)}>bMI</Button>
                    <Button onClick={() => ChangeLA(10)}>#FÁ</Button>
                    <Button onClick={() => ChangeLA(11)}>bSOL</Button>
                    <Button onClick={() => ChangeLA(12)}>#SOL</Button>
                    <Button onClick={() => ChangeLA(13)}>bLÁ</Button>
                    <Button onClick={() => ChangeLA(14)}>#LÁ</Button>
                    <Button onClick={() => ChangeLA(15)}>bSI</Button>
                    <Button onClick={() => ChangeLA(16)}>X</Button>
                </Card>
            </Popup>
            <Popup trigger={<Fab>7º</Fab>}>
                <Card>
                    <Button onClick={() => ChangeSI(1)}>SI</Button>
                    <Button onClick={() => ChangeSI(2)}>DÓ</Button>
                    <Button onClick={() => ChangeSI(3)}>RÉ</Button>
                    <Button onClick={() => ChangeSI(4)}>MI</Button>
                    <Button onClick={() => ChangeSI(5)}>FÁ</Button>
                    <Button onClick={() => ChangeSI(6)}>SOL</Button>
                    <Button onClick={() => ChangeSI(7)}>LÁ</Button>
                    <Button onClick={() => ChangeSI(8)}>#RÉ</Button>
                    <Button onClick={() => ChangeSI(9)}>bMI</Button>
                    <Button onClick={() => ChangeSI(10)}>#FÁ</Button>
                    <Button onClick={() => ChangeSI(11)}>bSOL</Button>
                    <Button onClick={() => ChangeSI(12)}>#SOL</Button>
                    <Button onClick={() => ChangeSI(13)}>bLÁ</Button>
                    <Button onClick={() => ChangeSI(14)}>#LÁ</Button>
                    <Button onClick={() => ChangeSI(15)}>bSI</Button>
                    <Button onClick={() => ChangeSI(16)}>X</Button>
                </Card>
            </Popup>
            <Button style={{backgroundColor: 'black'}} onClick={handleButtonClick}>Table!</Button>
            {showTable && (
                <TableContainer component={Paper} style={{ marginTop: '20px' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Notes</TableCell>
                                <Button style={{float: 'right', backgroundColor: 'red', color: 'cyan'}} onClick={handleCloseClick}>X</Button>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{DO}</TableCell>
                                <TableCell>{RE}</TableCell>
                                <TableCell>{MI}</TableCell>
                                <TableCell>{FA}</TableCell>
                                <TableCell>{SOL}</TableCell>
                                <TableCell>{LA}</TableCell>
                                <TableCell>{SI}</TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    )
}

/*<div><img src='https://th.bing.com/th/id/R.c0ad62307a353d36d88d8f6f6ce88f50?rik=1NFTWwNAWPCh%2bg&riu=http%3a%2f%2f2.bp.blogspot.com%2f-GOMeNQ2ZQLU%2fUR-hm-sbROI%2fAAAAAAAAB1g%2fXPN6jR_9A6s%2fs1600%2fpentagrama.png&ehk=N7%2bsEs6%2bi71QGA8kU0NDstk6Zb9nS008JCh9Oojoq2o%3d&risl=&pid=ImgRaw&r=0' alt='Pentagrama//'/></div>*/