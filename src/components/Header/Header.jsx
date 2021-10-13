import React from "react";
import { Menu, Notification, Loader } from '../../components';
import './Header.css';
import { Fetch } from '../../services/api';

const FETCH_OPTIONS = {
    method: 'GET',
    headers: {}
};

class Header extends React.Component {
    render() {
        return(
        <div className="Header">
            <Fetch path={'general'} options={FETCH_OPTIONS}>
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