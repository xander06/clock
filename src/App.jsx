import './App.css';
import Clock from './components/Clock';
import React, { Component } from 'react';
import FuncitonalClock from './components/FuncitonalClock';

class App extends Component {

 state = {
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0
  }
  
 componentDidMount () {
   setInterval(() => {
     this.setClock()
   }, 1000);
 }

 

   setClock = () =>{
    
      const currentDate = new Date();
       let secondRatio = currentDate.getSeconds() / 60;
       let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
       let hourRatio = (minuteRatio + currentDate.getHours()) / 12;
      this.setState({secondRatio: secondRatio = currentDate.getSeconds() / 60}) 
       this.setState({minuteRatio: minuteRatio = (secondRatio + currentDate.getMinutes()) / 60}) 
       this.setState({hourRatio:hourRatio = (minuteRatio + currentDate.getHours()) / 12});
      
   }    
  

  render(){
   const {secondRatio, minuteRatio, hourRatio} = this.state
    return (
      <div>
       <h1 className='titapp'>RELOJ ANALOGICO con clases</h1>
       <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio}/>
       <h1 className='titapp'>RELOJ ANALOGICO con mucha ayuda</h1>
       <FuncitonalClock />
      </div>
    );
  }
}
export default App;