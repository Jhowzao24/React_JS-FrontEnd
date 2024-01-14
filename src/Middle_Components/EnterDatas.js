import { Button } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Input } from '@mui/material';
/*import Popup from 'reactjs-popup';*/
import { Card } from 'antd';
import axios from 'axios';


const EnterComponent = () => {
  const apiUrl = 'http://127.0.0.1:8000/Urls/Register_Datas/';
  const [dados, setDados] = useState([]);
  const [novoDado, setNovoDado] = useState({
    FullName: '',
    age: 0,
    ResidencePhone: '',
    WhatsApp: '',
    Adress: '',
    SelfDescription: '',
    InstrumentChoice: ''
    // Outras propriedades conforme necessário
  });
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setDados(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  const criarDado = async () => {
    try {
      await axios.post(apiUrl, novoDado);
      fetchData(); // Recarrega os dados após a criação bem-sucedida
      // Limpa os campos do formulário após a criação bem-sucedida
      setNovoDado({ FullName: '', age: 0, ResidencePhone: '', WhatsApp: '', Adress: '', SelfDescription: '', InstrumentChoices: ({}) /* Outras propriedades conforme necessário */ });
      alert('Dados criados com sucesso!!')
    } catch (error) {
      console.error('Erro ao criar dado:', error);
    }
  };

  const atualizarDado = async (id, novoNome) => {
    try {
      await axios.put(`${apiUrl}/${id}`, { FullName: novoNome });
      fetchData(); // Recarrega os dados após a atualização bem-sucedida
    } catch (error) {
      console.error('Erro ao atualizar dado:', error);
    }
  };

  const deletarDado = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      fetchData(); // Recarrega os dados após a exclusão bem-sucedida
    } catch (error) {
      console.error('Erro ao excluir dado:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Busca os dados ao montar o componente
  }, []);

  return (
    <div style={{height: '730px'}}>
      <Card style={{width: '400px', height: '630px', color: 'WindowFrame', backgroundColor: 'Highlight'}}>
        <h3 style={{color: 'Window'}}>Datas Enter</h3>
      <ul>
        {dados.map((dado) => (
        <li key={dado.id}>
          {dado.FullName}{' '}
          {dado.age}{0}
          {dado.ResidencePhone}{' '}
          {dado.WhatsApp}{' '}
          {dado.Adress}{' '}
          {dado.Selfdescription}{' '}
          {dado.InstrumentChoice}{' '}
          <button onClick={() => atualizarDado(dado.id, 'NovoNome')}>Atualizar</button>
          <button onClick={() => deletarDado(dado.id)}>Excluir</button>
        </li>
      ))}
    </ul>
    <div>
      <h2>Criar Novo Dado</h2>
        <form>
          <div>
            <label>Name:</label>
          </div>
          <Input
              type="text"
              id="nomeInput"
              value={novoDado.FullName}
              onChange={(e) => setNovoDado({ FullName: e.target.value })}
              style={{color: 'cyan'}}
          />
          <br />
          <div>
            <label>Age:</label>
          </div>
          <Input
              type="text"
              id="nomeInput"
              value={novoDado.age}
              onChange={(e) => setNovoDado({ age: e.target.value })}
            style={{color: 'cyan'}}
          />
          <br />
          <div>
            <label>Residence Phone:</label>
          </div>
          <Input
              type="text"
              id="nomeInput"
              value={novoDado.ResidencePhone}
              onChange={(e) => setNovoDado({ ResidencePhone: e.target.value })}
            style={{color: 'cyan'}}
          />
          <br/>
          <div>
            <label>WhatsApp:</label>
          </div>
          <Input
              type="text"
              id="nomeInput"
              value={novoDado.WhatsApp}
              onChange={(e) => setNovoDado({ WhatsApp: e.target.value })}
            style={{color: 'cyan'}}
          />
          <br/>
          <div>
            <label>Adress:</label>
          </div>
          <Input
              type="text"
              id="nomeInput"
              value={novoDado.Adress}
              onChange={(e) => setNovoDado({ Adress: e.target.value })}
            style={{color: 'cyan'}}
          />
          <br/>
          <div>
            <label>Self Description:</label>
          </div>
          <Input
              type="text"
              id="nomeInput"
              value={novoDado.SelfDescription}
              onChange={(e) => setNovoDado({ SelfDescription: e.target.value })}
            style={{color: 'cyan'}}
          />
          <br/>
          <div>
            <label>Instrument Choices:</label>
          </div>
          <Input
              type="text"
              id="nomeInput"
              value={novoDado.InstrumentChoice}
              onChange={(e) => setNovoDado({ InstrumentChoice: e.target.value })}
            style={{color: 'cyan'}}
          />
          <br/>
          <Button style={{color: 'Highlight', backgroundColor: 'white'}} onClick={criarDado}>Adicionar</Button>
        </form>
        <br/>
      </div>
      <Button style={{backgroundColor: 'midnightblue'}}>
          <Link style={{color: 'orange'}} to='/App'><ArrowBackIcon/></Link>
        </Button>
      </Card>
    </div>
  );
};

export default EnterComponent;
