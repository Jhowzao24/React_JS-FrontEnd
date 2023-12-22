import React, {useState} from 'react';
import Question from './QuestQuizz';

const Quiz = () => {
    const questions = [
      {
        question: '1ª) What this one is the cat?',
        options: [
          { label: 'Cachorro', image: 'https://th.bing.com/th/id/R.3ef31473d2a776fcd06d4dcb248c9898?rik=kwuxbTSjJrMdvA&pid=ImgRaw&r=0' },
          { label: 'Gato', image: 'https://th.bing.com/th/id/R.635cb33c16006577d48d3eb65e402d47?rik=JmGOd5gMb7BxZg&pid=ImgRaw&r=0' },
          { label: 'Elefante', image: 'https://th.bing.com/th/id/R.e0f81c2f7853d2b65de28552a17a44e4?rik=zZGnycdDOaGnnw&pid=ImgRaw&r=0' },
        ],
        correctAnswer: 'Gato',
      },
      {
        question: '2ª) What this one is the Volute?',
        options:[
            {label: 'Volute', image: 'https://th.bing.com/th/id/OIP.UyMVoPOCIt3E4XKQ_jwo3AHaEU?pid=ImgDet&rs=1'},
            {label: 'Arm', image: 'https://th.bing.com/th/id/R.3ce26cc697a6c87563ae5b99f3083210?rik=ZOflhZva3S5rmw&pid=ImgRaw&r=0'},
            {label: 'Mirror', image: 'https://th.bing.com/th/id/OIP.QxUhsDmYMKIb97jMmOoXPQHaEo?pid=ImgDet&rs=1'}
        ],
        correctAnswer: 'Volute',
      },
      {
        question: '3ª) What the images bellow is the note SOL?',
        options:[
            {label: 'linha3', image: 'https://lh6.googleusercontent.com/proxy/5wHDd3K9qnwmOQu6MOKEx-1rbDP5ujLIre7HjYojwQcwfzFV80zgLxt1qXSIjp1Obltf_vg2OMKFxhjIFqn6bORFC6GBXsDL-uQ1wIktwD0=s0-d'},
            {label: 'linha2', image: 'https://i.pinimg.com/736x/a8/d6/ba/a8d6bad085e38a8928c97a87ecee743d--music-activities.jpg'},
            {label: 'linha1', image: 'https://th.bing.com/th/id/OIP.t-okCtUmcFtKRqa88vsoXQHaEm?pid=ImgDet&rs=1'}
        ],
        correctAnswer: 'linha3',
      }
      // Adicione outras perguntas...
    ];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
  
    const handleAnswer = (selectedOption) => {
      if (selectedOption.label === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
  
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Quiz completo
        alert(`Quiz completo! Pontuação: ${score}/${questions.length}`);
      }
    };
  
    return (
      <div>
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      </div>
    );
  };
  
  export default Quiz;