import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lord of the Rings Memes</h1>
      </header>
      <MapComponent />
    </div>
  );
}

class MapComponent extends React.Component {
  constructor (props) {
    super(props);
  }
  render(){
    return(
      <div>
        <div id="backgroundMap">
          <Location />
        </div>
      </div>
    )
  }
}

class Location extends React.Component {
  constructor (props) {
    super(props);
  }
  render(){
    return(
      <div className="locationStar">
        <i className="fas fa-bahai spin"></i>
      </div>
    )
  }
}




export default App;
