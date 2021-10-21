import React from "react";
import { Menu, Notification, Loader } from '../../components';
import './Header.css';
import { Fetch } from '../../services/api';


class Header extends React.Component {
    render() {
        return(
        <div className="Header">
            <Fetch url="general" method="get">
            {({ data, loading, error }) => {
                if (error) {
                    return (
                        <Notification type="error"
                            message= {error.message}
                        />
                    );
                }
                if (loading) {
                    return <Loader />;
                }
                if (data && data.logo) {
                    return (
                        <img alt="Accenture Logo"
                            src={data.logo}
                        />
                    );
                }
                return <Loader />;
            }}
            </Fetch>
            <Menu />
        </div>
    );
    }
}

export default Header;