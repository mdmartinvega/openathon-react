import React from "react";

class Menu extends React.Component {
    render() {
        return (
        <div className="Menu">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#innovation">Innovation</a></li>
                    <li><a href="#guestbook">Guestbook</a></li>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Menu;