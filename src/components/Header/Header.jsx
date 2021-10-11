import React from "react";
import { Menu } from '../../components';
import './Header.css';

class Header extends React.Component {
    //Instructions go here
    render() {
        return(
            //JSX expression
        <div className="Header">
            <div className="Header__logo">
                <img alt="Accenture Logo"
                src={this.props.logo}
                />
            </div>
            <h1 className="Header__title">II OPENATHON Custom Open Cloud</h1>
           <Menu /> 
        </div>
    );
    }
}

export default Header;