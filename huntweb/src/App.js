import React, { Component} from 'react';
import Header from './components/Header';
import Main from './pages/main';
import api from '../src/services/api';
import Routes from './routes';


import './styles.css';


class App extends Component {

 render(){
  return (
    <div className="App">
   <Header />
   <Routes />
    </div>
  );
}
}

export default App;
