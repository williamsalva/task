import React,{Component} from 'react';

export default class Task extends Component {

    render() {
           console.log(this.props.task);
           
        const {nametask,status} = this.props.task;
        return (
            <div className="class-name">
             <li className ="task"> 
                   <p>


                       {nametask}

                     
                       

                       
                       
                   </p>
             </li>




            </div>
        );
    }
}