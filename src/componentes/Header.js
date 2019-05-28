import React,{Component} from 'react';

export default class Header extends Component {

    render() {
        return (
            <header> <h1>{this.props.titulo}</h1></header>
        );
    }
}