import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Input } from '@mui/material';
import Popup from 'reactjs-popup';
import { Card, Divider } from 'antd';
import axios from 'axios';

export default function ApiCrud(){
  const [formData, setFormData] = useState({
    Nome: '',
    Sobrenome: '',
    WhatsApp: '',
    InstrumentoPref: '',
    Localidade: ''
  });
  const handleInputChange = (e) => {
    const { Nome, value } = e.target;
    const { Sobrenome } = e.target;
    const { WhatsApp } = e.target;
    const { InstrumentoPref } = e.target;
    const { Localidade } = e.target;
    setFormData({ ...formData, [Nome]: value });
    setFormData({ ...formData, [Sobrenome]: value});
    setFormData({ ...formData, [WhatsApp]: value});
    setFormData({ ...formData, [InstrumentoPref]: value});
    setFormData({ ...formData, [Localidade]: value});
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/Urls/ViewsStudy/', formData);
      console.log('Dados inseridos com sucesso:', response.data);
      alert('Dados inseridos com Sucesso!!')
      // Pode adicionar lógica para atualizar o estado local ou redirecionar, se necessário
    } catch (error) {
      console.error('Erro ao inserir dados:', error);
    }
  };


  return(
    <div style={{height: '300px', width: '450px'}}>
      <Card>
        <h3>Here you will insert your datas for us to have the whole great control of your access to our system! You will have fun a lot here with the all exercises maded!! Please enjoy it a lot!!</h3>
      </Card>
      <Popup trigger={<Button style={{backgroundColor: 'Highlight', color: 'white'}}>Access the Insert Datas!!</Button>}>
      <Card style={{backgroundColor: 'Highlight', color: 'white'}}>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Name:
            <Input type="text" name="nome" value={formData.nome} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Lastname:
            <Input type="email" name="lastname" value={formData.Sobrenome} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            WhatsApp:
            <Input type="email" name="whatsapp" value={formData.WhatsApp} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Instrument Prefered:
            <Input type="email" name="instrumentopref" value={formData.InstrumentoPref} onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Place:
            <Input type="email" name="localidade" value={formData.Localidade} onChange={handleInputChange} />
          </label>
        </div>
      <Button style={{backgroundColor: 'blue', color: 'white'}} type="submit">Inserir Dados</Button>
      <br/>
      <Divider/>
      <br/>
      <Link to='./App'>
        <Button><ArrowBackIcon/></Button>
      </Link>
    </form>
      </Card>
      </Popup>
      <br/>
      <Button style={{backgroundColor: 'white', color: 'blue'}}>
        <a href='http://127.0.0.1:8000/Urls/ViewsStudy/' alt='datasnsert/edit/delete'>
          Insert Datas
        </a>
      </Button>
    </div>
  )
}

/*
export default function SeuComponente() {
  const [dados, setDados] = useState([]);
  const [novoDado, setNovoDado] = useState({
    nome: '',
    Sobrenome: '',
    WhatsApp: '',
    InstrumentoPref: '',
    Localidade: ''
    // outras propriedades conforme necessário
  });

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/Urls/ViewsStudy/');
        const dadosAPI = await response.json();
        setDados(dadosAPI);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    // Chama a função para buscar dados ao montar o componente
    fetchData();
  }, []);

  const handleChange = (event) => {
    // Atualiza o estado do novoDado conforme o usuário digita no formulário
    setNovoDado({
      ...novoDado,
      [event.target.Nome]: event.target.value,
      [event.target.Sobrenome]: event.target.value,
      [event.target.WhatsApp]: event.target.value,
      [event.target.InstrumentoPref]: event.target.value,
      [event.target.Localidade]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Faz a chamada à API para criar um novo dado
      const response = await fetch('http://127.0.0.1:8000/Urls/ViewsStudy/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoDado),
      });

      // Verifica se a chamada foi bem-sucedida e atualiza o estado dos dados
      if (response.ok) {
        const novoDadoCriado = await response.json();
        setDados([...dados, novoDadoCriado]);

        // Limpa os campos do formulário após a criação bem-sucedida
        setNovoDado({
          Nome: '',
          Sobrenome: '',
          WhatsApp: '',
          InstrumentoPref: '',
          Localidade: ''
        });
      } else {
        console.error('Erro ao criar novo dado:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao criar novo dado:', error);
    }
  };

  return (
    <div>
      <Card>
      <ul>
        {dados.map((dado) => (
          <li key={dado.id}>
            {dado.Nome}
            {dado.Sobrenome}
            {dado.WhatsApp}
            {dado.InstrumentoPref}
            {dado.Localidade}
          </li>

        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <Input
            type="text"
            name="nome"
            value={novoDado.Nome}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Lastname:
          <Input
            type="text"
            name="sobrenome"
            value={novoDado.Sobrenome}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          WhatsApp:
          <Input
            type="text"
            name="WhatsApp"
            value={novoDado.WhatsApp}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Instrument Preferred:
          <Input
            type="text"
            name="instrumentoprefer"
            value={novoDado.InstrumentoPref}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Place:
          <Input
            type="text"
            name="place"
            value={novoDado.Localidade}
            onChange={handleChange}
          />
        </label>
        <br/>
        <br/>
        <Button style={{backgroundColor: 'Highlight', color: 'white'}} onClick={handleSubmit}>Criar Novo Dado</Button>
      </form>
      <Link to='/App'>
        <Button style={{backgroundColor: 'darkblue', color: 'red'}}>
          <ArrowBackIcon/>
        </Button>
      </Link>
      </Card>
    </div>
  )
};
*/