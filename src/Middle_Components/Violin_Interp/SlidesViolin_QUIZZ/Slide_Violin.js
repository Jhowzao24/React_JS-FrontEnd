import { StepLabel } from '@material-ui/core';
import { Button, Input } from 'antd';
import React, { useState } from 'react';

const Quiz = ({ quizData }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleSubmit = () => {
      setShowResult(true);
    };
  
    return (
      <div className="quiz">
        <p>{quizData.question}</p>
        <form>
          {quizData.options.map((option, index) => (
            <div key={index}>
              <Input
                type="radio"
                id={`option-${index}`}
                name="quiz"
                value={option}
                onChange={handleOptionChange}
              />
              <StepLabel htmlFor={`option-${index}`}>{option}</StepLabel>
            </div>
          ))}
          <Button type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
        {showResult && (
          <p>
            {selectedOption === quizData.correctAnswer ? 'Correct!' : 'Wrong!'}
          </p>
        )}
      </div>
    );
  };
  
  
  const Slide = ({ slideData }) => {
    const { image, text, quiz } = slideData;
  
    return (
      <div className="slide">
        <img src={image} alt="Slide" style={{ maxWidth: '100%' }}/>
        <p>{text}</p>
        {quiz && <Quiz quizData={quiz} />}
      </div>
    );
  };
  
  
  const Slideshow = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };
  
    return (
      <div className="slideshow">
        <Slide slideData={slides[currentSlide]} />
        <Button onClick={prevSlide} disabled={slides.length <= 1}>Previous</Button>
        <Button onClick={nextSlide} disabled={slides.length <= 1}>Next</Button>
      </div>
    );
  };
  
  
  const slides = [
    {
      image: 'https://th.bing.com/th/id/R.e314b999600e25ed46794f675d317a47?rik=MHq3PjyubaBA7Q&pid=ImgRaw&r=0',
      text: 'The king of the orchestra',
      quiz: {
        question: 'What is the best instrument to make the high-pietched sound??',
        options: ['Viola', 'Violin', 'Cello'],
        correctAnswer: 'Violin'
      }
    },
    {
      image: 'https://th.bing.com/th/id/R.bb8e69d5c24a30a9e1679726826b9046?rik=vtJ7oQe5Hvb1YQ&pid=ImgRaw&r=0',
      text: 'The older of the music instruments',
      quiz: {
        question: 'What is the instrument that we can to play the bass sound?',
        options: ['Viola', 'Cello', 'Violin'],
        correctAnswer: 'Cello',
      }
    },
    {
        image: 'https://th.bing.com/th/id/OIP.7rfMRdG-sCXheAGt8KWw4wHaJ4?rs=1&pid=ImgDetMain',
        text: 'The Viola is the instrument that make the?...',
        quiz: {
            question: 'Choice one of the elements below!!',
            option: ['Tenor', 'Soprano', 'Bass'],
            correctAnswer: 'Tenor',
        }
    },
    {
        image: 'hgh-hghghg-jpg',
        text: 'What is the paper?',
        quiz: {
            question: 'What the follow paper is the corect?',
            option: ['Card Paper', 'Paper', 'Tooltip'],
            correctAnswer: 'Tooltip',
        }
    }
    // Adicione mais slides conforme necessário
  ];

  export default function Violin_Slider_Quizzes(){
    return(
        <div>
            <Slideshow slides={slides} />
        </div>
    )
  }