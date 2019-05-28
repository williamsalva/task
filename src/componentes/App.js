import React, { Component } from 'react';
import Header from './Header';
import '../css/App.css';
import Formulario from './formulario';
import Listado from './Listado';





class App extends Component {
    
 

     
    


    state={

      
      
      tasks:{
        
      }
    }


    //addtask
  addtasks = task  =>{
      const tasks= {...this.state.tasks}
     
      




      tasks[`tasks${Date.now()}`]=task;
      
      
      

      this.setState({

        tasks
      })}
         
      //Restar del presupuesto cuando un gaste se crea

     




  
  



  render() {
    return (
      <div className="App container">
        <Header titulo = 'Task'/>
      


       <div className="contenido-principal contenido">
        <div className ="row">
          <div className ="one-half column">
           <Formulario
            addtasks= {this.addtasks}
           
           
           
           />
     
          </div>
          <div className="one-half column">
         <Listado   tasks= {this.state.tasks}/>
        

         
     
          </div>
     
     
     
        </div>
      </div>
      </div>




    );
  }
}

export default App;
