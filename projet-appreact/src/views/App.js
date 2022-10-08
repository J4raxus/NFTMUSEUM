import React from 'react';
import './App.css';
import Home from '../components/Home';
import Formu from '../components/Formu';
import Resume from '../components/Resume';
import {Link} from 'react-router-dom';


class App extends React.Component {

  constructor(props){
    super(props)

    this.state={
    }
  }


  async componentDidMount(){
  }


  render(){
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}

export default App;