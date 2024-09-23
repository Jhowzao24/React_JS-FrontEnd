//import { Button, Input } from 'antd';
//import TextArea from 'antd/es/input/TextArea';
//import { useCardWallet } from './Armazenator';
import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';

const AppBlocks = () => {
  const [cards, setCards] = useState([]);
  const [pasta, setPasta] = useState([]);
  const [novoCard, setNovoCard] = useState({ titulo: '', descricao: '' });

  // Carregar os cards da pasta do LocalStorage ao iniciar
  useEffect(() => {
    const pastaSalva = localStorage.getItem('pasta');
    if (pastaSalva) {
      setPasta(JSON.parse(pastaSalva));
    }
  }, []);

  // Função para criar um novo card de nota musical
  const criarNovoCard = () => {
    if (novoCard.titulo && novoCard.descricao) {
      const novoId = cards.length + pasta.length + 1;
      const card = {
        id: novoId,
        titulo: novoCard.titulo,
        descricao: novoCard.descricao,
        editando: false,
      };
      setCards([...cards, card]);
      setNovoCard({ titulo: '', descricao: '' });
    }
  };

  // Função para adicionar o card à pasta e salvar no LocalStorage
  const adicionarNaPasta = (id) => {
    const cardSelecionado = cards.find(card => card.id === id);
    const novaPasta = [...pasta, cardSelecionado];
    setPasta(novaPasta);
    setCards(cards.filter(card => card.id !== id));
    localStorage.setItem('pasta', JSON.stringify(novaPasta));
  };

  // Função para retirar o card da pasta e movê-lo de volta para edição
  const retirarDaPasta = (id) => {
    const cardRetirado = pasta.find(card => card.id === id);
    const novaPasta = pasta.filter(card => card.id !== id);
    setCards([...cards, cardRetirado]);
    setPasta(novaPasta);
    localStorage.setItem('pasta', JSON.stringify(novaPasta));
  };

  // Função para excluir um card
  const excluirCard = (id, tipo) => {
    if (tipo === 'cards') {
      setCards(cards.filter(card => card.id !== id));
    } else if (tipo === 'pasta') {
      const novaPasta = pasta.filter(card => card.id !== id);
      setPasta(novaPasta);
      localStorage.setItem('pasta', JSON.stringify(novaPasta));
    }
  };

  // Função para ativar o modo de edição
  const editarCard = (id, tipo) => {
    if (tipo === 'cards') {
      setCards(cards.map(card =>
        card.id === id ? { ...card, editando: true } : card
      ));
    } else if (tipo === 'pasta') {
      setPasta(pasta.map(card =>
        card.id === id ? { ...card, editando: true } : card
      ));
    }
  };

  // Função para finalizar a edição
  const finalizarEdicao = (id, tipo) => {
    if (tipo === 'cards') {
      setCards(cards.map(card =>
        card.id === id ? { ...card, editando: false } : card
      ));
    } else if (tipo === 'pasta') {
      const novaPasta = pasta.map(card =>
        card.id === id ? { ...card, editando: false } : card
      );
      setPasta(novaPasta);
      localStorage.setItem('pasta', JSON.stringify(novaPasta));
    }
  };

  // Função para salvar as alterações do card
  const alterarCard = (id, campo, valor, tipo) => {
    if (tipo === 'cards') {
      setCards(cards.map(card =>
        card.id === id ? { ...card, [campo]: valor } : card
      ));
    } else if (tipo === 'pasta') {
      const novaPasta = pasta.map(card =>
        card.id === id ? { ...card, [campo]: valor } : card
      );
      setPasta(novaPasta);
      localStorage.setItem('pasta', JSON.stringify(novaPasta));
    }
  };

  return (
    <div style={styles.container}>
      <h2>Criar Nova Nota Musical</h2>
      <div style={styles.formNovoCard}>
        <Input
          type="text"
          placeholder="Título da nota musical"
          value={novoCard.titulo}
          onChange={(e) => setNovoCard({ ...novoCard, titulo: e.target.value })}
          style={styles.input}
        />
        <textarea
          placeholder="Descrição da nota musical"
          value={novoCard.descricao}
          onChange={(e) => setNovoCard({ ...novoCard, descricao: e.target.value })}
          style={styles.textarea}
        />
        <Button onClick={criarNovoCard} style={styles.button}>
          Criar Nota
        </Button>
      </div>

      <h2>Notas Musicais Criadas</h2>
      <div style={styles.areaDeCards}>
        {cards.map((card) => (
          <div key={card.id} style={styles.card}>
            {card.editando ? (
              <>
                <Input
                  type="text"
                  value={card.titulo}
                  onChange={(e) => alterarCard(card.id, 'titulo', e.target.value, 'cards')}
                  style={styles.input}
                />
                <textarea
                  value={card.descricao}
                  onChange={(e) => alterarCard(card.id, 'descricao', e.target.value, 'cards')}
                  style={styles.textarea}
                />
                <Button onClick={() => finalizarEdicao(card.id, 'cards')} style={styles.button}>
                  Finalizar
                </Button>
              </>
            ) : (
              <div style={{backgroundColor: 'orangeRed', margin: '30px', color: 'cyan'}}>
                <h3>{card.titulo}</h3>
                <p>{card.descricao}</p>
                <Button onClick={() => editarCard(card.id, 'cards')} style={styles.button}>
                  Editar
                </Button>
                <Button onClick={() => adicionarNaPasta(card.id)} style={styles.button}>
                  Adicionar à Pasta
                </Button>
                <Button onClick={() => excluirCard(card.id, 'cards')} style={styles.button}>
                  Excluir
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>

      <h2>Pasta de Notas Musicais</h2>
      <div style={styles.pasta}>
        {pasta.map((card) => (
          <div key={card.id} style={styles.card}>
            {card.editando ? (
              <>
                <Input
                  type="text"
                  value={card.titulo}
                  onChange={(e) => alterarCard(card.id, 'titulo', e.target.value, 'pasta')}
                  style={styles.input}
                />
                <textarea
                  value={card.descricao}
                  onChange={(e) => alterarCard(card.id, 'descricao', e.target.value, 'pasta')}
                  style={styles.textarea}
                />
                <Button onClick={() => finalizarEdicao(card.id, 'pasta')} style={styles.button}>
                  Finalizar
                </Button>
              </>
            ) : (
              <div style={{backgroundColor: 'ivory', margin: '-20px'}}>
                <h3>{card.titulo}</h3>
                <p>{card.descricao}</p>
                <Button onClick={() => editarCard(card.id, 'pasta')} style={styles.button}>
                  Editar
                </Button>
                <Button onClick={() => retirarDaPasta(card.id)} style={styles.button}>
                  Retirar da Pasta
                </Button>
                <Button onClick={() => excluirCard(card.id, 'pasta')} style={styles.button}>
                  Excluir
                </Button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos inline para o layout
const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'cyan'
  },
  formNovoCard: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: 'gold'
  },
  input: {
    display: 'block',
    width: '15%',
  }
};


const MyApp = () => {
  const [notas, setNotas] = useState([]);
  const [notaAtual, setNotaAtual] = useState("");
  
  // Adiciona nova nota
  const adicionarNota = () => {
    if (notaAtual.trim() !== "") {
      setNotas([...notas, notaAtual]);
      setNotaAtual(""); // Limpa o campo de texto após adicionar
    }
  };

  // Remove uma nota
  const removerNota = (index) => {
    setNotas(notas.filter((_, i) => i !== index));
  };

  // Limpa todas as notas
  const limparNotas = () => {
    setNotas([]);
  };
  const styles = {
    quadro: {
      width: '400px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: 'red',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      margin: '20px auto',
    },
    input: {
      width: '30%',
      height: '30px',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginBottom: '10px',
    },
    button: {
      margin: '5px',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: 'purple',
      color: 'white',
      cursor: 'pointer',
    },
    buttonRemover: {
      marginTop: '10px',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: 'red',
      color: 'white',
      cursor: 'pointer',
    },
    notas: {
      marginTop: '20px',
      textAlign: 'left',
      width: '50px'
    },
    nota: {
      backgroundColor: 'blue',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginBottom: '10px',
      position: 'relative',
    },
  };
  return(
    <div>
      <h2>Bloco de Notas</h2>

      <textarea
      style={styles.input}
      value={notaAtual}
      onChange={(e) => setNotaAtual(e.target.value)}
      placeholder="Escreva sua nota aqui"
      />

      <div>
        <button onClick={adicionarNota} style={styles.button}>
          Adicionar Nota
        </button>
        <button onClick={limparNotas} style={styles.button}>
          Limpar Notas
        </button>
      </div>

      <div style={styles.notas}>
        {notas.map((nota, index) => (
          <div key={index} style={styles.nota}>
            <p>{nota}</p>
            <button onClick={() => removerNota(index)} style={styles.buttonRemover}>
              Excluir
            </button>
          </div>
        ))}
      </div>
      <AppBlocks/>
    </div>
  )
}

/*const AppCards = ({ onCardCreate }) => {
  // Função para criar uma nova carteira

    // Estado para armazenar os cards
    const { addCardToWallet, removeCardFromWallet } = useCardWallet();
    const [cards, setCards] = useState([]);
  
    // Função para criar um novo card (simulando useCreate)
    const createCard = () => {
      const newCard = {
        id: Date.now(), // Gerar um id único
        title: '',
        image: '',
        description: ''
      };

      onCardCreate(newCard);
  
      // Adicionar o novo card ao estado
      setCards([...cards, newCard]);
      addCardToWallet(newCard);
    };
  
    // Função para editar o card
    const handleEditCard = (id, field, value) => {
      const updatedCards = cards.map((card) => 
        card.id === id ? { ...card, [field]: value } : card
      );
      setCards(updatedCards);
    };
    
      // Função para finalizar o card (sair do modo de edição)
      const finalizeCard = (id) => {
        const updatedCards = cards.map((card) =>
          card.id === id ? { ...card, isEditing: false } : card
        );
        setCards(updatedCards);
      };

      const editCard = (id) => {
        const updatedCards = cards.map((card) =>
          card.id === id ? { ...card, isEditing: true } : card
        );
        setCards(updatedCards);
      };

      /*const deleteCard = (id) => {
        const updatedCards = cards.filter((card) => card.id !== id); // Filtra todos os cards menos o que tem o ID correspondente
        setCards(updatedCards); // Atualiza o estado com a nova lista de cards
      };*/

      /*const deleteCard = (id) => {
        setCards(cards.filter((card) => card.id !== id));
        removeCardFromWallet(id);
      };
  
    return (
      <div>
        <Button onClick={createCard}>Criar Novo Card</Button>

        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
            {cards.map((card) => (
                <div
                key={card.id}
                style={{
                    border: '1px solid #ccc',
                    padding: '20px',
                    width: '300px',
                    margin: '10px',
                    borderRadius: '30px',
                    backgroundColor: 'aliceblue',
                    color: 'gold'
                }}
            >
            {card.isEditing ? (
            // Modo de edição
            <>
              <Input
                type="text"
                value={card.title}
                onChange={(e) => handleEditCard(card.id, 'title', e.target.value)}
                style={{ fontSize: '18px', marginBottom: '10px', width: '100%' }}
            />
            <TextArea
            value={card.description}
            onChange={(e) => handleEditCard(card.id, 'description', e.target.value)}
            style={{ width: '100%', height: '80px', marginBottom: '10px' }}
            />
            <Input
            type="text"
            placeholder="URL da Imagem"
            value={card.image}
            onChange={(e) => handleEditCard(card.id, 'image', e.target.value)}
            style={{ width: '100%', marginBottom: '10px' }}
            />
            {card.image && (
                <img
                src={card.image}
                alt={card.title}
                style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                />
            )}
            <Button onClick={() => finalizeCard(card.id)}>Finalizar</Button>
            <Button onClick={() => deleteCard(card.id)} style={{ background: 'red', color: 'white' }}>
              Excluir
            </Button>
            </>
        ) : (
            // Modo de visualização (card finalizado)
            <>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                {card.image && (
                  <>
                    <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
                    />
                  </>
                )}
                <Button onClick={() => editCard(card.id)}>Editar</Button>
                <Button onClick={() => deleteCard(card.id)} style={{ background: 'red', color: 'white' }}>
                  Excluir
                </Button>
            </>
          )}
        </div>
    ))}
    </div>
    </div>
    );
  };*/

  /*const CardLayout = ({ title, description, image }) => {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2>{title}</h2>
        <h4>{description}</h4>
        {image && <img src={image} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />}
      </div>
    );
  };*/

/*const Wallet = () => {
  const [wallets, setWallets] = useState([]);
  const [currentWalletId, setCurrentWalletId] = useState(null);

  // Função para criar uma nova carteira
  const createWallet = () => {
    const newWallet = {
      id: Date.now(),
      name: `Carteira ${wallets.length + 1}`,
      cards: [] // Carteira começa sem cards
    };
    setWallets([...wallets, newWallet]);
    setCurrentWalletId(newWallet.id); // Define a carteira criada como ativa
  };

  // Função para adicionar um card a uma carteira específica
  const addCardToWallet = (newCard) => {
    if (!currentWalletId) {
      alert('Crie uma carteira primeiro!');
      return;
    }

    setWallets((prevWallets) =>
      prevWallets.map((wallet) =>
        wallet.id === currentWalletId
          ? { ...wallet, cards: [...wallet.cards, newCard] }
          : wallet
      ));

    // Adiciona o card à carteira ativa
    setWallets(wallets.map(wallet => {
      if (wallet.id === currentWalletId) {
        return {
          ...wallet,
          cards: [...wallet.cards, newCard]
        };
      }
      return wallet;
    }));
  };

  return (
    <div>
      <Button onClick={createWallet}>Criar Carteira</Button>

      <AppCards onCardCreate={addCardToWallet} />

      <div style={{ marginTop: '20px' }}>
        <h2>Carteiras Criadas</h2>


        {wallets.length === 0 ? (
          <p>Nenhuma carteira criada ainda.</p>
        ) : (
          wallets.map((wallet) => (
            <div key={wallet.id} style={{ border: '1px solid #000', marginBottom: '20px', padding: '10px' }}>
              <h3>{wallet.name}</h3>


              {wallet.cards.length === 0 ? (
                <p>Nenhum card nesta carteira.</p>
              ) : (
                wallet.cards.map((card) => (
                  <>
                    <CardLayout
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    />
                  </>
                ))
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};*/

export default MyApp;