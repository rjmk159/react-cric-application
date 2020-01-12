import React from 'react';
import Header from './components/Header';
import Main from './container/Main'

class App extends React.Component {
  state={
    matchDetail:false,
    playerDetail:false,
    matches:[]
  }
  
  render(){
    return (
      <div className="main">
        <Header/>
        <Main />
      </div>
    );
  }
 
}

export default App;
