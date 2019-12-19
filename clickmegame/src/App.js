import React, { Component } from 'react';
import Title from "./components/Title";
import ImagesCard from "./components/ImagesCard";
import gameimages from "./gameimages.json";
import Wrapper from "./components/Wrapper";

class App extends Component {

  state = { 
    gameimages,
    score: 0,
    highscore: 0
  };

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.gameimages.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over!!! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.gameimages.find((o, i) => {
      if (o.id === id) {
        if(gameimages[i].count === 0){
          gameimages[i].count = gameimages[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.gameimages.sort(() => Math.random() - 0.5)
          return true;         
        } else {
           this.gameOver();
         }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>Clicky Game</Title>        
        
        {this.state.gameimages.map(images => (
          <ImagesCard
            clickCount = {this.clickCount}
            id={images.id}
            key={images.id}
            image={images.image}
          />
        ))}
        
      </Wrapper>
    );
  }
}

export default App;
