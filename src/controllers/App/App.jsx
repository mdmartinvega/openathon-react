import React, { Component } from 'react';
import { Header, Footer, Loader, Notification } from '../../components';
import { Fetch } from '../../services/api';
import { BrowserRouter } from 'react-router-dom';

const FETCH_OPTIONS = {
  method: 'GET',
  headers: {}
};

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App__root">

            <Fetch path={'general'} options={FETCH_OPTIONS}>
              {({ data, loading, error }) => {
                if (error) {
                  return (
                    <Notification type="error"
                      message={error.message}
                    />
                  );
                }
                if (loading) {
                  return <Loader />;
                }
                if (data && data.logo) {
                  return <Header logo={data.logo} />
                }
                return <p>No data yet ...</p>;
              }}
            </Fetch>

            <p className="Main">
              Main content
            </p>
            
            <Footer />
          </div>
        </BrowserRouter>
      </div>
      );
  }
}

export default App;
