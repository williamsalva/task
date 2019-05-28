import React,{Component} from 'react';
import Task from './Task';

export default class Listado extends Component {
    
    render() {
        return (
            <div className="tasklist">
                

                
                   {Object.keys(this.props.tasks).map(key =>(

                        <Task
                             key={key}
                            task= {this.props.tasks[key]}
                            />



                   ))}

                 
              
                  
            </div>
        )
    }
}