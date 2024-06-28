import { Button } from 'antd';
import React, { useState, useEffect, useRef } from 'react';
import { ReactMic } from 'react-mic';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { Stage, Layer, Line, Text, Group, Rect } from 'react-konva';


const MusicalScoreApp = () => {
  const [notes, setNotes] = useState([]);

  const handleStageClick = (e) => {
    const newNote = {
      id: notes.length + 1,
      x: e.evt.layerX,
      y: e.evt.layerY,
      content: "C4", // Exemplo de conteúdo, pode ser dinâmico ou fixo
    };
    setNotes([...notes, newNote]);
  };

  const renderStaves = () => {
    const staves = [];
    const lines = ['E', 'G', 'B', 'D', 'F']; // Linhas do pentagrama
    for (let i = 0; i < 5; i++) {
      const y = 100 + i * 50;
      staves.push(
        <Group key={i}>
          <Line points={[50, y, 750, y]} stroke="black" strokeWidth={2} />
          <Text text={lines[i]} x={30} y={y - 5} fontSize={20} fontFamily="Arial" />
        </Group>
      );
    }
    return staves;
  };

  return (
    <div>
      <h1>Musical Score with Konva.js</h1>
      <Stage
        width={800}
        height={400}
        onClick={handleStageClick}
        style={{ border: '1px solid black' }}
      >
        <Layer>
          {renderStaves()}
          {notes.map((note) => (
            <Group key={note.id} x={note.x} y={note.y}>
              <Rect width={40} height={40} fill="black" />
              <Text
                text={note.content}
                fontSize={16}
                fontFamily="Arial"
                fill="white"
                align="center"
                verticalAlign="middle"
                x={note.x - 20}
                y={note.y - 20}
                width={40}
                height={40}
              />
            </Group>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

/*
const MusicalScoreApp = () => {
  const [notes, setNotes] = useState([]);

  const handleStageClick = (e) => {
    const newNote = {
      id: notes.length + 1,
      x: e.evt.layerX,
      y: e.evt.layerY,
    };
    setNotes([...notes, newNote]);
  };

  const renderStaves = () => {
    const staves = [];
    const lines = ['E', 'G', 'B', 'D', 'F']; // Linhas do pentagrama
    for (let i = 0; i < 5; i++) {
      const y = 100 + i * 50;
      staves.push(
        <Group key={i}>
          <Line points={[50, y, 750, y]} stroke="black" strokeWidth={2} />
          <Text text={lines[i]} x={30} y={y - 5} fontSize={20} fontFamily="Arial" />
        </Group>
      );
    }
    return staves;
  };

  return (
    <div>
      <h1>Musical Score with Konva.js</h1>
      <Stage
        width={800}
        height={400}
        onClick={handleStageClick}
        style={{ border: '1px solid black' }}
      >
        <Layer>
          {renderStaves()}
          {notes.map((note) => (
            <Group key={note.id} x={note.x} y={note.y}>
              <Rect width={20} height={20} fill="black" />
            </Group>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
*/


/*

const MusicalScoreApp = () => {
  const [notes, setNotes] = useState([]);

  const handleStageClick = (e) => {
    const newNote = {
      id: notes.length + 1,
      x: e.evt.layerX,
      y: e.evt.layerY,
    };
    setNotes([...notes, newNote]);
  };

  const renderStaves = () => {
    const staves = [];
    for (let i = 0; i < 5; i++) {
      const y = 100 + i * 50;
      staves.push(
        <Line key={i} points={[50, y, 750, y]} stroke="black" strokeWidth={2} />
      );
    }
    return staves;
  };

  return (
    <div>
      <h1>Musical Score with Konva.js</h1>
      <Stage
        width={800}
        height={400}
        onClick={handleStageClick}
        style={{ border: '1px solid black' }}
      >
        <Layer>
          {renderStaves()}
          {notes.map((note) => (
            <Group key={note.id} x={note.x} y={note.y}>
              <Rect width={20} height={20} fill="black" />
            </Group>
          ))}
        </Layer>
      </Stage>
    </div>
  );
};
*/


/*
const AppNotes = () => {
  const VF = Flow;
  const synth = new Tone.Synth().toDestination();

  const [notes, setNotes] = useState([
    { note: 'C4', duration: 'q' },
    { note: 'D4', duration: 'q' },
    { note: 'E4', duration: 'q' },
    { note: 'F4', duration: 'q' },
  ]);

  const playNote = (note) => {
    synth.triggerAttackRelease(note, '8n');
  };

  const renderSheetMusic = () => {
    const renderer = new VF.Renderer(document.getElementById('sheet-music'), VF.Renderer.Backends.SVG);
    renderer.resize(500, 200);
    const context = renderer.getContext();
    const stave = new VF.Stave(10, 40, 400);
    stave.addClef('treble').addTimeSignature('4/4');
    stave.setContext(context).draw();

    const vexNotes = notes.map((note) => new VF.StaveNote({
      clef: 'treble',
      keys: [note.note],
      duration: note.duration,
    }));

    const voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(vexNotes);
    new VF.Formatter().joinVoices([voice]).format([voice], 400);
    voice.draw(context, stave);
  };

  return (
    <div className="App">
      <h1>Interactive Music Teaching App</h1>
      <div id="sheet-music" />
      <div className="note-buttons">
        {notes.map((note, index) => (
          <button key={index} onClick={() => playNote(note.note)}>
            {note.note}
          </button>
        ))}
      </div>
      <button onClick={renderSheetMusic}>Render Sheet Music</button>
    </div>
  );
};
*/


const DrawBox = () => {
  const canvasRef = useRef(null);

  const clearCanvas = () => {
    canvasRef.current.clearCanvas();
  };

  const undo = () => {
    canvasRef.current.undo();
  };

  return (
    <div>
      <ReactSketchCanvas
        ref={canvasRef}
        strokeWidth={5}
        strokeColor="blue"
        canvasColor="black"
        width="100%"
        height="500px"
        style={{ borderWidth: '3px', borderRadius: '30px', borderColor: 'cyan' }}
      />
      <Button onClick={clearCanvas}>To clean</Button>
      <Button onClick={undo}>Undo</Button>
    </div>
  );
};

// Define o tabuleiro do quebra-cabeça com as posições originais das peças

const AudioChecker = ({ correctFrequency = 440, threshold = 10 }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [result, setResult] = useState(null);
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);
  const mediaStreamSourceRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      startAnalyzing();
    } else {
      stopAnalyzing();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRecording]);

  const startAnalyzing = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaStreamSourceRef.current = audioContextRef.current.createMediaStreamSource(stream);
        analyserRef.current = audioContextRef.current.createAnalyser();
        analyserRef.current.fftSize = 2048;
        mediaStreamSourceRef.current.connect(analyserRef.current);

        analyze();
      })
      .catch(error => {
        console.error('Error accessing microphone', error);
      });
  };

  const stopAnalyzing = () => {
    if (mediaStreamSourceRef.current) {
      mediaStreamSourceRef.current.disconnect();
    }
    if (analyserRef.current) {
      analyserRef.current.disconnect();
    }
  };


  const analyze = () => {
    if (!analyserRef.current) return;

    const bufferLength = analyserRef.current.fftSize;
    const dataArray = new Float32Array(bufferLength);

    const checkFrequency = () => {
      analyserRef.current.getFloatTimeDomainData(dataArray);

      const autoCorrelate = (buf, sampleRate) => {
        const SIZE = buf.length;
        let rms = 0;

        for (let i = 0; i < SIZE; i++) {
          rms += buf[i] * buf[i];
        }
        rms = Math.sqrt(rms / SIZE);

        if (rms < 0.01) return -1;

        let r1 = 0, r2 = SIZE - 1, thres = 0.2;
        for (let i = 0; i < SIZE / 2; i++) {
          if (Math.abs(buf[i]) < thres) {
            r1 = i;
            break;
          }
        }
        for (let i = 1; i < SIZE / 2; i++) {
          if (Math.abs(buf[SIZE - i]) < thres) {
            r2 = SIZE - i;
            break;
          }
        }

        buf = buf.slice(r1, r2);
        const newSize = buf.length;
        const c = new Array(newSize).fill(0);
        for (let i = 0; i < newSize; i++) {
          for (let j = 0; j < newSize - i; j++) {
            c[i] = c[i] + buf[j] * buf[j + i];
          }
        }

        let d = 0; while (c[d] > c[d + 1]) d++;
        let maxval = -1, maxpos = -1;
        for (let i = d; i < newSize; i++) {
          if (c[i] > maxval) {
            maxval = c[i];
            maxpos = i;
          }
        }

        let T0 = maxpos;
        const x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
        const a = (x1 + x3 - 2 * x2) / 2;
        const b = (x3 - x1) / 2;
        if (a) T0 = T0 - b / (2 * a);

        return sampleRate / T0;
      };

      const frequency = autoCorrelate(dataArray, audioContextRef.current.sampleRate);
      console.log('Detected frequency:', frequency);

      if (frequency !== -1 && Math.abs(frequency - correctFrequency) <= threshold) {
        setResult('Good');
      } else {
        setResult('Bad');
      }

      if (isRecording) {
        requestAnimationFrame(checkFrequency);
      }
    };

    checkFrequency();
  };
  
  /*
  const analyze = () => {
    if (!analyserRef.current) return;

    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const checkFrequency = () => {
      analyserRef.current.getByteFrequencyData(dataArray);

      let maxIndex = 0;
      for (let i = 1; i < bufferLength; i++) {
        if (dataArray[i] > dataArray[maxIndex]) {
          maxIndex = i;
        }
      }

      const nyquist = audioContextRef.current.sampleRate / 2;
      const frequency = maxIndex * (nyquist / bufferLength);

      if (Math.abs(frequency - correctFrequency) <= threshold) {
        setResult('Good');
      } else {
        setResult('Bad');
      }

      if (isRecording) {
        requestAnimationFrame(checkFrequency);
      }
    };

    checkFrequency();
  };*/

  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  return (
    <div style={{color: 'gold'}}>
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onStop={() => {}}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <Button onClick={handleStartRecording} disabled={isRecording}>
        Start Recording
      </Button>
      <Button onClick={handleStopRecording} disabled={!isRecording}>
        Stop Recording
      </Button>
      {result && <h3>Result: {result}</h3>}
    </div>
  );
};


const SoundAndDraw = () => {
  return (
    <div>
      <br/>
      <div style={{color: 'white'}}>
        <h1>Music Checker</h1>
        <AudioChecker correctFrequency={440} threshold={10} />
      </div>
      <div style={{margin: '30px', color: 'olive', fontFamily: 'fantasy'}}>
      <h1>Draw a Clave</h1>
      <h3>Your choice, it is up to you!!</h3>
      <DrawBox />
      </div>
      <br/>
      <MusicalScoreApp/>
    </div>
  );
};

export default SoundAndDraw;