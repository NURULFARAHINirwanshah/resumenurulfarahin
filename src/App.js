import React, { Component } from 'react';
import './App.css';
import Resume from './Resume';
import {Button} from 'semantic-ui-react';


class App extends Component {
  render() {
    return (
 	<div className="App">
    	<Resume/>
    	<Button onClick={()=>window.print()} className="btnprint" circular color='black' icon='print'/>
    </div>
    	);
  	}
}

export default App;
