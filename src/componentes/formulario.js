import React,{Component} from 'react';

import PropTypes from 'prop-types';

export default class FormularioGastos extends Component {

     nametask = React.createRef();
    

     addtask =(e)=>{
     //prevenir el defauld

     e.preventDefault();

     //crear el objeto 
     const task = {
         nametask : this.nametask.current.value,
         status:false
         
     }
     // agregar y enviar los datos
        
           this.props.addtasks(task);
     //resetear formulario
      

    }

    render() {
        return (
         <form onSubmit = {this.addtask}   >
            <h2>Add task</h2>
            <div className="campo">
                <label>Name task</label>
                <input  ref = {this.nametask}className="u-full-width" type="text" placeholder="new form" />
            </div>

            

            <input className="button-primary u-full-width" type="submit" value="Add" />
        </form>
        );
    }
}

