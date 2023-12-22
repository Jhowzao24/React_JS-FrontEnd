import React, {useState, useEffect} from 'react';
import BackEndService from './Api_Service';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function EntryDatas(props){
    const [Full_Name, setFullName] = useState('')
    const [Age, setAge] = useState('')
    const [E_Mail, setE_Mail] = useState('')
    const [CPF, setCPF] = useState('')
    const [Cellphone_Number_WhatsApp, setWhatsNumPhone] = useState('')
    const [Home_TelephoNumber, setTelNumber] = useState('')
    const [Street_Neighbor, setNeighbor] = useState('')
    const [Ident_Num_Home, setNumHome] = useState('')
    const [Neighbor, setNeighb] = useState('')
    const [Self_Description, setDescription] = useState('')
    const [Modulo_Atual, setAtualMo] = useState('')
    const [Tipo_instrumento, setInstrumentoType] = useState('')

    useEffect(() => {
        setFullName(props.told.Full_Name)
        setAge(props.Dreg.Age)
        setE_Mail(props.R.E_Mail)
        setCPF(props.R.CPF)
        setWhatsNumPhone(props.R.Cellphone_Number_WhatsApp)
        setTelNumber(props.R.Home_TelephoNumber)
        setNeighbor(props.R.Street_Neighbor)
        setNumHome(props.R.Ident_Num_Home)
        setNeighb(props.R.Neighbor)
        setDescription(props.R.Self_Description)
        setAtualMo(props.R.Modulo_Atual)
        setInstrumentoType(props.R.Tipo_instrumento)
    }, [props.Dreg]);

    const insertReg = () => {
        BackEndService.InsertR({
            Full_Name,
            Age,
            E_Mail,
            CPF,
            Cellphone_Number_WhatsApp,
            Home_TelephoNumber,
            Street_Neighbor,
            Ident_Num_Home,
            Neighbor,
            Self_Description,
            Modulo_Atual,
            Tipo_instrumento,
        })
        .then(resp => console.log(resp))
    };
    return(
        <div>
            ola
        </div>
    )
}