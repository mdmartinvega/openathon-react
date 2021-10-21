import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const API_HOST = 'http://localhost:3001/';


const defaultProps = {
    fetchAfterMount: true,
    url: null,
    method: 'get',
    baseURL: 'http://localhost:3001/',
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    }
}

class Fetch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: false,
            error: null
        };
    }

    //Using Async/Await rather than Promises has several advantages: makes our code more readable and clean, 
    //with the same construct allows to handle both synchronous and asynchronous errors and it’s much easier to debug. 
    //Use setState() to store the returned data/error.

    fetchData = async() => {
        this.setState({ loading: true });
        const { children, fetchAfterMount, ...requestConfig } = this.props;
        try {
            const response = await axios(requestConfig);
            this.setState({ data: response.data, loading: false});
        } catch (error) {
            this.setState({ error, loading: false});
        }
    }
    

    componentDidMount() {
        if (this.props.fetchAfterMount) this.fetchData();
    }

    render() {
        const {
            state: { data, loading, error },
            props: { children },
            fetchData
        } = this;
    
        return children({
            data,
            loading,
            error,
            fetchData
        });
    }
}

Fetch.defaultProps = defaultProps;
Fetch.propTypes = {
    url: PropTypes.string.isRequired
}

export default Fetch;
