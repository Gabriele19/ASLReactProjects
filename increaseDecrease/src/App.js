import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = { //oggetto
    ita: 0,
    sto: 0,
    ing: 0,
    info: 0,
    media: 0
  }

  increment(materia){
    switch(materia){
      case "ita":
                if(this.state.ita < 10)
                  this.setState({ita: this.state.ita + 1});
                break;
      case "sto":
                if(this.state.sto < 10)  
                  this.setState({sto: this.state.sto + 1});
                break;
      case "ing":
                if(this.state.ing < 10)
                  this.setState({ing: this.state.ing + 1});
                break;
      case "info":
                if(this.state.info < 10)
                  this.setState({info: this.state.info + 1});                              
                break;
      }
  }

  decrement(materia){
    switch(materia){
      case "ita":
                if(this.state.ita > 0)
                  this.setState({ita: this.state.ita - 1});
                break;
      case "sto":
                if(this.state.sto > 0)
                  this.setState({sto: this.state.sto - 1});
                break;
      case "ing":
                if(this.state.ing > 0)
                this.setState({ing: this.state.ing - 1});
                break;
      case "info":
                if(this.state.info > 0)
                  this.setState({info: this.state.info - 1});                              
                break;
      }
  }

  calcolaMedia(ita, sto, ing, info){
    this.setState({media:(ita + sto + ing + info)/4});
  }

  render(){
      return(
        <div>
          <h1>Media Voti</h1>
          <h2>Italiano: {this.state.ita}</h2>
          <button onClick={() => this.increment("ita")}>
            Increment
          </button>
          <button onClick={() => this.decrement("ita")}>
            Decrement
          </button>
          <br></br>
          <h2>Storia: {this.state.sto}</h2>
          <button onClick={() => this.increment("sto")}>
            Increment
          </button>
          <button onClick={() => this.decrement("sto")}>
            Decrement
          </button>
          <h2>Inglese: {this.state.ing}</h2>
          <button onClick={() => this.increment("ing")}>
            Increment
          </button>
          <button onClick={() => this.decrement("ing")}>
            Decrement
          </button>
          <h2>Info: {this.state.info}</h2>
          <button onClick={() => this.increment("info")}>
            Increment
          </button>
          <button onClick={() => this.decrement("info")}>
            Decrement
          </button>
          
          <div class="media">
            <h2>Media {this.state.media}</h2>
            <button onClick={() => this.calcolaMedia(this.state.ita, this.state.sto, this.state.ing, this.state.info)}>
              Calcola Media Voti
            </button>
          </div>
        </div>
      );
    }
  }

export default App;