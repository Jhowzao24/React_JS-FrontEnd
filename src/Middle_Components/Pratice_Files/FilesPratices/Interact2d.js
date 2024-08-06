import { Button, Card } from 'antd';
import React, { useState, useRef } from 'react';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { Stage, Layer, Line, Text, Group, Rect, Circle } from 'react-konva';
import * as Tone from 'tone';

const ViolinString = ({ points, notes, onClick }) => (
  <>
    <Line
      points={points}
      stroke="cyan"
      strokeWidth={5}
      lineCap="round"
    />
    {notes.map((note, index) => (
      <Circle
        key={index}
        x={points[0]}
        y={points[1] + (index * 50)} // Distribui os pontos ao longo da corda
        radius={8}
        fill="blue"
        onClick={() => onClick(note)}
      />
    ))}
  </>
);

const VirtualViolin = () => {
  const [currentNote, setCurrentNote] = useState(null);
  const [synth] = useState(new Tone.Synth().toDestination());

  const handleStringClick = (note) => {
    setCurrentNote(note);
    synth.triggerAttackRelease(note, '8n');
  };

  const strings = [
    { 
      notes: ['G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'], 
      points: [100, 50, 100, 400 + (10 * 30)] 
    },
    { 
      notes: ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F#5'], 
      points: [150, 50, 150, 400 + (10 * 30)] 
    },
    { 
      notes: ['A4', 'B4', 'C#5', 'D5', 'E5', 'F#5', 'G5', 'A5', 'B5', 'C#6'], 
      points: [200, 50, 200, 400 + (10 * 30)] 
    },
    { 
      notes: ['E5', 'F#5', 'G#5', 'A5', 'B5', 'C#6', 'D6', 'E6', 'F#6', 'G#6'], 
      points: [250, 50, 250, 400 + (10 * 30)] 
    },
  ];


  /*
  const strings = [
    { 
      notes: ['G3', 'A3', 'B3', 'C4', 'D4', 'E4'], 
      points: [100, 50, 100, 350] 
    },
    { 
      notes: ['D4', 'E4', 'F#4', 'G4', 'A4', 'B4'], 
      points: [150, 50, 150, 350] 
    },
    { 
      notes: ['A4', 'B4', 'C#5', 'D5', 'E5', 'F#5'], 
      points: [200, 50, 200, 350] 
    },
    { 
      notes: ['E5', 'F#5', 'G#5', 'A5', 'B5', 'C#6'], 
      points: [250, 50, 250, 350] 
    },
  ];
  */

  return (
    <div>
      <h1>Virtual Violin</h1>
      <br/>
      <h3>Play it by yourself!!, click on at each circle and hear the sound on the violin strings!!</h3>
      <Stage width={400} height={550}>
        <Layer>
          {strings.map((string, index) => (
            <ViolinString
              key={index}
              points={string.points}
              notes={string.notes}
              onClick={handleStringClick}
            />
          ))}
        </Layer>
      </Stage>
      {currentNote && <Text text={`Playing: ${currentNote}`} x={20} y={10} fontSize={20} />}
    </div>
  );
};


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
      <h1>Music score guy, please,  put any notes and enjoy!!</h1>
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
                fontSize={25}
                fontFamily="fantasy"
                fill="gold"
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


const SoundAndDraw = () => {
  return (
    <div>
      <fieldset style={{margin: '60px'}}>
        <Card style={{backgroundColor: 'purple', color: 'white'}}>
          <VirtualViolin/>
        </Card>
      </fieldset>
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

/*
      <br/>
      <div style={{color: 'white'}}>
        <h1>Music Checker</h1>
        <AudioChecker correctFrequency={440} threshold={10} />
      </div>
*/

/*

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

*/