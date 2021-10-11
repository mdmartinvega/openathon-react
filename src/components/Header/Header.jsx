import React from "react";
import { Menu } from '../../components';

class Header extends React.Component {
    //Instructions go here
    render() {
        return(
            //JSX expression
        <div className="Header">
            <div className="Header__logo">
                <img alt="Accenture Logo"
                src="https://www.accenture.com/t20180820T081710Z__w__/us-en/_acnmedia/Accenture/Dev/Redesign/Acc_Logo_Black_Purple_RGB.PNG"
                />
            </div>
            <h1 className="Header__title">II OPENATHON Custom Open Cloud</h1>
           <Menu /> 
        </div>
    );
    }
}

export default Header;