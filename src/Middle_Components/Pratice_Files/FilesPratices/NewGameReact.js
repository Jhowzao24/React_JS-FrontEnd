import { Button } from 'antd';
import React, { Component } from 'react';

class MusicMemoryGame extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: ['Dó', 'Re', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'],
      sequence: [],
      userSequence: [],
      level: 1,
      message: 'Memorize the sequence and click Play',
      isPlaying: false,
    };
  }

  generateSequence = () => {
    const newSequence = [];
    for (let i = 0; i < this.state.level; i++) {
      const randomIndex = Math.floor(Math.random() * this.state.notes.length);
      newSequence.push(this.state.notes[randomIndex]);
    }
    return newSequence;
  };

  playSequence = () => {
    this.setState({ isPlaying: true, message: 'Watch and listen carefully' });

    const sequence = this.generateSequence();
    this.setState({ sequence });

    sequence.forEach((note, index) => {
      setTimeout(() => {
        this.highlightButton(note);
      }, index * 1000);
    });

    setTimeout(() => {
      this.setState({ message: 'Now it\'s your turn!' });
    }, sequence.length * 1000);
  };

  highlightButton = (note) => {
    // You can add UI logic here to highlight the corresponding button
    // For example, changing the button's color or opacity
    console.log(`Highlighting ${note}`);
  };

  handleButtonClick = (note) => {
    if (!this.state.isPlaying) return;

    const userSequence = [...this.state.userSequence, note];
    this.setState({ userSequence });

    const index = userSequence.length - 1;

    if (userSequence[index] !== this.state.sequence[index]) {
      this.endGame();
      return;
    }

    if (userSequence.length === this.state.sequence.length) {
      setTimeout(() => {
        this.setState({
          level: this.state.level + 1,
          userSequence: [],
          isPlaying: false,
          message: 'Correct! Click Play for the next round.',
        });
      }, 1000);
    }
  };

  endGame = () => {
    this.setState({
      message: `Game over! You reached level ${this.state.level}`,
      level: 1,
      sequence: [],
      userSequence: [],
      isPlaying: false,
    });
  };

  render() {
    const { notes, message, isPlaying } = this.state;

    return (
      <div style={{backgroundColor: 'white', color: 'yellowgreen', boxShadow: '0 0 7px 10px'}}>
        <h1>Music Memory Game</h1>
        <p style={{color: 'blue'}}>{message}</p>
        <div>
          {notes.map((note) => (
            <button
              key={note}
              onClick={() => this.handleButtonClick(note)}
              disabled={!isPlaying}
            >
              {note}
            </button>
          ))}
        </div>
        <Button type='primary' onClick={this.playSequence} disabled={isPlaying}>
          Start
        </Button>
      </div>
    );
  }
}

export default MusicMemoryGame;

