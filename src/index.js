import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';

import './index.css';
import { Layout } from 'antd';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import ParentBooking from './components/pages/ParentBooking';

ReactDOM.render(
  <Router>
    <React.StrictMode>     
      <Layout>  
        <App />            
      </Layout>    
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

function App() { 
  const history = useHistory();
  return (
    <Layout.Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Switch>
        <Route path="/parent/booking" component={ParentBooking} />    
        </Switch>
    </Layout.Content>
  )  
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
