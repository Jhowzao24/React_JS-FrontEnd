/* eslint-disable no-undef */
/*import { Fab, Grid, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from 'antd';
import Popup from 'reactjs-popup';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';*/
import React, { useState } from 'react';
import { Select,  MenuItem, FormControl, Divider } from '@mui/material';
import { Button, Card, Input, Tooltip } from 'antd';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { useTable, useSortBy, useFilters } from 'react-table';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateData,
}) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    updateData(index, id, value);
  };

  return <Input value={value} onChange={onChange} onBlur={onBlur} />;
};

// Definindo a célula padrão como editável
const defaultColumn = {
  Cell: EditableCell,
};

const DataTable = ({ columns, data, updateData, removeData }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter, // Adicionando setFilter para a filtragem
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      updateData,
    },
    useFilters,
    useSortBy
  );

  return (
    <div><br/>
      <fieldset style={{borderRadius: '5px', borderWidth: '3px', borderStyle: 'double', borderColor: 'cyan'}}>
        <h4>Search your datas here one by one!!</h4>
        <Input
          placeholder="Search input data..."
          onChange={e => setFilter('input', e.target.value)} // Filtrando a coluna 'input'
          style={{ marginBottom: '10px', width: '130px'}}
        />
      </fieldset>
      <table {...getTableProps()} style={{ border: 'solid 1px blue', marginTop: '20px' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Tooltip title='Click here to sort the objects youve placed!'>
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
                </Tooltip>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '3px',
                      border: 'solid 3px cyan',
                      background: 'darkcyan',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const ChordGenerator = () => {
    // Estado para armazenar o acorde selecionado
    const [selectedChordViolin, setSelectedChordViolin] = useState('');
    const [selectedChordViola, setSelectedChordViola] = useState('');
    const [selectedChordCello, setSelectedChordCello] = useState(''); // Acorde inicial
  
    // Lista de acordes disponíveis (poderia ser expandida)
    const chordsViolin = ['Select an interval', 'DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LA', 'SI'];
    const chordsViola = ['Select an interval', 'DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LA', 'SI'];
    const chordsCello = ['Select an interval', 'DÓ', 'RÉ', 'MI', 'FÁ', 'SOL', 'LA', 'SI'];
  
    // Função para renderizar as notas do acorde selecionado
    const renderChordNotesViolin = () => {
      // Mapeia cada acorde para suas respectivas notas
      switch (selectedChordViolin) {
        case 'Select an interval':
            return [];
        case 'DÓ':
          return ['Notes of the Acordes:', 'DÓ', 'MI', 'DÓ', 'MI'];
        case 'RÉ':
          return ['Notes of the Acordes:', 'RÉ', 'FÁ', 'LA', 'FA'];
        case 'MI':
          return ['Notes of the Acordes:', 'MI', 'SOL', 'SI', 'MI'];
        case 'FÁ':
          return ['Notes of the Acordes:', 'FÁ', 'LA', 'DÓ', 'FÁ'];
        case 'SOL':
          return ['Notes of the Acordes:', 'SOL', 'SI', 'RÉ', 'LA'];
        case 'LA':
          return ['Notes of the Acordes:', 'LA', 'DÓ', 'MI', 'LA'];
        case 'SI':
          return ['Notes of the Acordes:', 'SI', 'RÉ', 'FÁ', 'SI'];
        default:
          return [];
      }
    };
    const renderChordNotesViola = () => {
        // Mapeia cada acorde para suas respectivas notas
        switch (selectedChordViola) {
          case 'Select an interval':
            return [];
          case 'DÓ':
            return ['Notes of the Acordes:', 'DÓ', 'MI', 'DÓ', 'MI'];
          case 'RÉ':
            return ['Notes of the Acordes:', 'RÉ', 'FÁ', 'LA', 'FA'];
          case 'MI':
            return ['Notes of the Acordes:','MI', 'SOL', 'SI', 'MI'];
          case 'FÁ':
            return ['Notes of the Acordes:','FÁ', 'LA', 'DÓ', 'FÁ'];
          case 'SOL':
            return ['Notes of the Acordes:','SOL', 'SI', 'RÉ', 'LA'];
          case 'LA':
            return ['Notes of the Acordes:','LA', 'DÓ', 'MI', 'LA'];
          case 'SI':
            return ['Notes of the Acordes:', 'SI', 'RÉ', 'FÁ', 'SI'];
          default:
            return [];
        }
      };
      const renderChordNotesCello = () => {
        // Mapeia cada acorde para suas respectivas notas
        switch (selectedChordCello) {
          case 'Select an interval':
            return [];
          case 'DÓ':
            return ['Notes of the Acordes:','DÓ', 'MI', 'DÓ', 'MI'];
          case 'RÉ':
            return ['Notes of the Acordes:','RÉ', 'FÁ', 'LA', 'FA'];
          case 'MI':
            return ['Notes of the Acordes:','MI', 'SOL', 'SI', 'MI'];
          case 'FÁ':
            return ['Notes of the Acordes:','FÁ', 'LA', 'DÓ', 'FÁ'];
          case 'SOL':
            return ['Notes of the Acordes:','SOL', 'SI', 'RÉ', 'LA'];
          case 'LA':
            return ['Notes of the Acordes:','LA', 'DÓ', 'MI', 'LA'];
          case 'SI':
            return ['Notes of the Acordes:','SI', 'RÉ', 'FÁ', 'SI'];
          default:
            return [];
        }
      };
      const dataScales = [{
        nameInstrument: 'Violin',
        notes: 'DÓ, RÉ, MI, FÁ, SOL, LÁ, SI',
        scaleDO: '(DÓ) = DÓ, MI, DÓ, MI',
        scaleRE: '(RÉ) = RÉ, FÁ, LÁ, RÉ',
        scaleMI: '(MI) = MI, SOL, SI, RÉ, SOL',
        scaleFA: '(FÁ) = DÓ, FÁ, DÓ(n), FÁ',
        scaleSOL: '(SOL) = SOL, RÉ, SI, SOL',
        scaleLA: '(LÁ) = LÁ, MI, DÓ, LÁ',
        scaleSI: '(LÁ) = LÁ, MI, DÓ, LÁ'
      },{
        nameInstrument: 'Viola',
        notes: 'DÓ, RÉ, MI, FÁ, SOL, LÁ, SI',
        scaleDO: '(DÓ) = DÓ, SOL, MI, DÓ',
        scaleRE: '(RÉ) = RÉ, SI, FÁ, RÉ',
        scaleMI: '(MI) = MI, SI, SOL, MI',
        scaleFA: '(FÁ) = FÁ, DÓ, Lá, SI',
        scaleSOL: '(SOL) = SOL, RÉ, SI, SOL',
        scaleLA: '(LÁ) = LÁ, Mi, DÓ',
        scaleSI: '(SI) = SI, FÁ, RÉ'
      },{
        nameInstrument: 'Cello',
        notes: 'DÓ, RÉ, MI, FÁ, SOL, LÁ, SI',
        scaleDO: '(DÓ) = DÓ, SOL, MI, DÓ',
        scaleRE: '(RÉ) = RÉ, SI, FÁ, RÉ',
        scaleMI: '(MI) = MI, SI, SOL, MI',
        scaleFA: '(FÁ) = FÁ, DÓ, Lá, SI',
        scaleSOL: '(SOL) = SOL, RÉ, SI, SOL',
        scaleLA: '(LÁ) = LÁ, Mi, DÓ',
        scaleSI: '(SI) = SI, FÁ, RÉ'
      }];
      const columns = [{
        Headers: 'NameInstrument',
        accessor: 'nameInstrument'
      },{
        Headers: 'Notes',
        accessor: 'notes'
      },{
        Headers: 'ScaleDO',
        accessor: 'scaleDO'
      },{
        Headers: 'ScaleRE',
        accessor: 'scaleRE'
      },{
        Headers: 'ScaleMI',
        accessor: 'scaleMI'
      },{
        Headers: 'ScaleFA',
        accessor: 'scaleFA'
      },{
        Headers: 'ScaleSOL',
        accessor: 'scaleSOL'
      },{
        Headers: 'ScaleLA',
        accessor: 'scaleLA'
      },{
        Headers: 'ScaleSI',
        accessor: 'scaleSI'
      }];
      const datasForm = [{
        type: [
            <FormControl style={{borderColor: 'cyan'}}>
            <h3 htmlFor="chord-select">Select a chord from the Violin:</h3>
                <Select
                    id="chord-select"
                    value={selectedChordViolin}
                    onChange={(e) => setSelectedChordViolin(e.target.value)}
                >
                    {chordsViolin.map((chordViolin) => (
                        <MenuItem style={{color: 'cyan', backgroundColor: 'Highlight'}} key={chordViolin} value={chordViolin}>
                            {chordViolin}
                        </MenuItem>
                    ))}
                </Select>
                <br/>
                <div>
                    <h3>{renderChordNotesViolin().join(', ')}</h3>
                </div>
            </FormControl>
        ],
      },{
        type: [
            <FormControl>
            <h3 htmlFor="chord-select">Select a chord from the Viola:</h3>
                <Select
                    id="chord-select"
                    value={selectedChordViola}
                    onChange={(e) => setSelectedChordViola(e.target.value)}
                >
                    {chordsViola.map((chordViola) => (
                        <MenuItem style={{color: 'cyan', backgroundColor: 'Highlight'}} key={chordViola} value={chordViola}>
                            {chordViola}
                        </MenuItem>
                    ))}
                </Select>
                <div>
                    <p>{renderChordNotesViola().join(', ')}</p>
                </div>
            </FormControl>
        ],
      },{
        type: [
            <FormControl>
            <h3 htmlFor="chord-select">Select an acord from the Cello:</h3>
                <Select
                    id="chord-select"
                    value={selectedChordCello}
                    onChange={(e) => setSelectedChordCello(e.target.value)}
                >
                    {chordsCello.map((chordCello) => (
                        <MenuItem style={{color: 'cyan', backgroundColor: 'Highlight'}} key={chordCello} value={chordCello}>
                            {chordCello}
                        </MenuItem>
                    ))}
                </Select>
                <div>
                    <p>{renderChordNotesCello().join(', ')}</p>
                </div>
            </FormControl>
        ],
      }];
      const dataColumns = [{
        Headers: 'Type',
        accessor: 'type'
      }];
    return (
      <div style={{paddingRight: '450px'}}>
        <Card style={{backgroundColor: 'lightsteelblue', color: 'grey'}}>
        <h1>Musical Chord Visualizer</h1>
          <ReactTable
                style={{backgroundColor: 'black', color: 'cyan', fontFamily: 'cursive', fontSize: '10px', width: '750px'}}
                data={dataScales}
                columns={columns}
                defaultPageSize = {3}
                pageSizeOptions = {[1,2,3]}
            /><br/><Divider/><br/>
            <ReactTable
                style={{backgroundColor: 'gold', color: 'black', fontFamily: 'serif', fontSize: '20px'}}
                data={datasForm}
                columns={dataColumns}
                defaultPageSize = {3}
                pageSizeOptions = {[1,2,3]}
            />
        </Card>
      </div>
    );
  };


const Metronome = () => {
    const [inputData, setInputData] = useState('');
    const [tableData, setTableData] = useState([]);
  
    const handleInputChange = (e) => {
      setInputData(e.target.value);
    };
  
    const handleAddData = () => {
      setTableData(prevData => [...prevData, { input: inputData }]);
      setInputData('');
    };
    const columns = React.useMemo(
        () => [
          {
            Header: 'Datas puted',
            accessor: 'input',
          },
          {
            Header: 'Actions',
            accessor: 'actions',
            Cell: ({ row }) => (
              <Button onClick={() => removeData(row.index)}>Delete</Button>
            ),
          },
        ],
        []
      );
      const removeData = (index) => {
        setTableData(prevData => prevData.filter((_, i) => i !== index));
      };
      const EstiloInput = {
        width: '350px',
        placeHolder: '5px',
        fontFamily: 'serif',
        fontSize: '14px',
        float: 'left',
        color: 'cyan',
        backgroundColor: 'orangered'
      };
      const H3 = {
        color: 'yellow',
        fontSize: '16px',
        fontFamily: 'cursive',
      };
      const updateData = (rowIndex, columnId, value) => {
        setTableData(oldData =>
          oldData.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...row,
                [columnId]: value,
              };
            }
            return row;
          })
        );
      };
  return (
    <div>
        <header className="App-header">
            <ChordGenerator />
        </header>
        <center style={EstiloInput}>
          <h1>This exercise was made to you, for create a scale, puting datas in the input, one by one note for each time, and you will must to sort if your wishes!</h1>
            <h3 style={H3}>Please put a value that is equal a scale<br/> and see the result printed below!</h3><br/>
          <Popup trigger={<Button> Open Input Form </Button>} modal nested>
            {close => (
              <div>
                <h2>Enter Data</h2>
                <form
                  onSubmit={(e) => {
                  e.preventDefault();
                  handleAddData();
                  close();
                  }}
                >
                  <Input
                    type="text"
                    value={inputData}
                    onChange={handleInputChange}
                    placeholder="Enter some data"
                  />
                  <Button onClick={handleAddData}>Add to Table</Button>
                </form>
                <Button onClick={close}>Close</Button>
              </div>
            )}
          </Popup>
            <DataTable columns={columns} data={tableData} updateData={updateData} removeData={removeData} />
        </center>
    </div>
  );
};

export default Metronome;

/*
const Modal = ({ show, onClose, content }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h3>This is an interbal of 2ª</h3>
          {content}
        </div>
      </div>
    );
  };

  const ModalInt2 = ({ see, onStop, content2}) => {
    if(see){
        return null;
    }
    return(
        <div className="modal">
            <div className="modal-content">
            <span className="closeing"  onClick={onStop}>&times;</span>
            <h3>This is an interval of 3ª</h3>
            {content2}
            </div>
        </div>
    )
  };

  const ModalInt3 = ({ mostrar, parar, conteudo}) => {
    if(mostrar){
        return null;
    }
    return(
        <div className="modal">
            <div className="modal-content">
            <span className="closeing"  onClick={parar}>&times;</span>
            <h3>This is an interval of 4ª</h3>
            {conteudo}
            </div>
        </div>
    )
  }

  const ModalInt4 = ({ mostra, para, conteud}) => {
    if(mostra){
        return null;
    }
    return(
        <div className="modal">
            <div className="modal-content">
            <span className="closeing"  onClick={para}>&times;</span>
            <h3>This is interval of 5ª</h3>
            {conteud}
            </div>
        </div>
    )
  }
*/

/*
const Table = ({ columns, data}) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    },
  );
  
    return (
      <table {...getTableProps()} style={{ border: 'solid 1px blue' }} >
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px red',
                    background: 'aliceblue',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      background: 'papayawhip',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
*/

/*<DataTable columns={columns} data={tableData} removeData={removeData}  /> */

/* 
    const [showModal, setShowModal] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

      const modal_content = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      };

      /*
      const closeing = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        fontSize: '24px',
      }
        */

      /*const handleChange = (event) => {
        setSelectedOption(event.target.value);
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
    
      const renderModalContent = () => {
        switch (selectedOption) {
          case 'option1':
            return <Modal />;
          case 'option2':
            return <ModalInt2 />;
          case 'option3':
            return <ModalInt3 />;
          case 'option4':
            return <ModalInt4/>;
          default:
            return null;
        }
      };
        <h1>Let's identify the intervals!</h1>
        <p>Intervals</p>
        <select style={modal_content} value={selectedOption} onChange={handleChange}>
            <option value="">Select an interval! Please!!</option>
            <option value="option1">2ª interval</option>
            <option value="option2">3ª Interval</option>
            <option value="option3">4ª Interval</option>
            <option value="option4">4ª Interval</option>
            <option value="option5">5ª Interval</option>
            <option value="option6">6ª Interval</option>
            <option value="option7">7ª Interval</option>
            <option value="option8">8ª Interval</option>
        </select>
        <fieldset>
        <Modal show={showModal} onClose={closeModal} content={renderModalContent()} />
        </fieldset>
*/

/*
     <h2>Metronome</h2>
      
      <input 
        type="range" 
        min="40" 
        max="200" 
        value={bpm} 
        onChange={(e) => setBpm(e.target.value)} 
      />
      <p>BPM: {bpm}</p>
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Stop" : "Start"}
      </button>
      <audio ref={audioRef} src="" />
*/



/*
const MusicCreationScreen = ({onADD}) => {
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
    const [formulaCompasso4, setFormula4] = useState('');
    const [formulaCompasso3, setFormula3] = useState('');
    const [formulaCompasso2, setFormula2] = useState('');
    const [formulaCompasso12, setFormula12] = useState('');
    const [formulaCompasso9, setFormula9] = useState('');
    const [formulaCompasso6, setFormula6] = useState('');
    const handleAddFormula4 = (formula) => {
        setFormula4(formulaCompasso4 + formula);
        toast.success('Successfully placed note');
    };
    const handleAddFormula3 = (formula) => {
        setFormula3(formulaCompasso3 + formula);
        toast.success('Successfully placed note');
    };
    const handleAddFormula2 = (formula) => {
        setFormula2(formulaCompasso2 + formula);
        toast.success('Successfully placed note');
    };
    const handleAddFormula12 = (formula) => {
        setFormula12(formulaCompasso12 + formula);
        toast.success('Successfully placed note');
    };
    const handleAddFormula9 = (formula) => {
        setFormula9(formulaCompasso9 + formula);
        toast.success('Successfully placed note');
    };
    const handleAddFormula6 = (formula) => {
        setFormula6(formulaCompasso6 + formula);
        toast.success('Successfully placed note');
    };
    const [claveDO, setClaveDO] = useState('');
    const [claveFA, setClaveFA] = useState('');
    const [claveSOL, setClaveSOL] = useState('');
    const handleAddClaveDO = (sinal) => {
        setClaveDO(claveDO + sinal);
        toast.success('Successfully placed note');
    };
    const handleAddClaveFA = (sinal) => {
        setClaveFA(claveFA + sinal);
        toast.success('Successfully placed note');
    };
    const handleAddClaveSOL = (sinal) => {
        setClaveSOL(claveSOL + sinal);
        toast.success('Successfully placed note');
    };

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
      src: "https://th.bing.com/th/id/OIP.gidjb3PAJRhfgDVm4EgAIQHaFJ?rs=1&pid=ImgDetMain" // Insira a URL da imagem desejada aqui
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
        <Grid container spacing={13.5} style={{float: 'left', paddingLeft: '440px'}}>
            <Popup trigger={<Fab style={{backgroundColor: 'gray', color: 'white'}}>LÁ</Fab>}>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteSIB('♩')}>♩/B</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteSIC('♩')}>♩/N</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteSIN('♪')}>♪/C</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '11px'}} onClick={() => handleAddNoteSISC('♬')}>♬/SC</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveSIB('♩')}><DeleteIcon/>♩/B</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveSIN('♩')}><DeleteIcon/>♩/N</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveSIC('♪')}><DeleteIcon/>♪/C</Button>
                </MenuItem>
                <MenuItem>
                <Button style={{backgroundColor: 'lightsalmon', color: 'white', boxShadow: '0 0 1px 1px', fontFamily: 'serif'}} onClick={() => handleRemoveSISC('♬')}><DeleteIcon/>♬/SC</Button>
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
        <Grid container spacing={23} style={{float: 'left', paddingLeft: '165px'}}>
            <Popup trigger={<Fab style={{backgroundColor: 'gold', color: 'black', fontFamily: 'fantasy', letterSpacing: '3px'}}>Claves</Fab>}>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '20px'}} onClick={() => handleAddClaveDO('𝄡')}>𝄡</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '20px'}} onClick={() => handleAddClaveFA('𝄢')}>𝄢</Button>
                </MenuItem>
                <MenuItem>
                    <Button style={{width: '70px', color: 'midnightblue', boxShadow: '0 0 1px 1px', fontSize: '20px'}} onClick={() => handleAddClaveSOL('𝄞')}>𝄞</Button>
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

        <Grid container spacing={28} style={{float: 'left', paddingLeft: '600px'}}>
            <h1 style={{position: 'absolute', color: 'black', fontSize: '19px'}}>{lettersDOB}</h1>
        </Grid>
        <Grid container spacing={30} style={{float: 'left', paddingLeft: '600px'}}>
            <h1 style={{position: 'absolute', color: 'black', fontSize: '19px'}}>{lettersREB}</h1>
        </Grid>
        <Grid container spacing={40} style={{float: 'left', paddingLeft: '600px'}}>
            <h1 style={{position: 'absolute', color: 'black', fontSize: '19px'}}>{lettersMIB}</h1>
        </Grid>
        <Grid container spacing={50} style={{float: 'left', paddingLeft: '600px'}}>
            <h1 style={{position: 'absolute', color: 'black', fontSize: '19px'}}>{lettersFAB}</h1>
        </Grid>
        <Grid container spacing={30} style={{float: 'left', paddingLeft: '600px'}}>
            <h1 style={{position: 'absolute', color: 'black', fontSize: '19px'}}>{lettersSOLB}</h1>
        </Grid>
        <Grid container spacing={127.5} style={{float: 'left', paddingLeft: '1078px'}}>
            <h1 style={{position: 'absolute', color: 'black', fontSize: '19px'}}>{lettersLAB}</h1>
        </Grid>


        <Grid container spacing={128.3} style={{float: 'left', paddingLeft: '1083px'}}>
            <h1 style={{position: 'absolute', color: 'black', fontSize: '19px'}}>{lettersDON}</h1>
        </Grid>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MusicCreationScreen;
*/