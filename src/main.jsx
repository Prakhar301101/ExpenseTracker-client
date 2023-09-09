import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

/**Steps
 * Create landing Page(Simple and takes you to Login or Register Page) done
 * Create Login,Register feature done
 * Create Expense Tracker UI done
 * show expense & add expense(+ve/-ve) 
 * 4-5days frontend(1day each)
 * Create Backend 
 * Model for User and Expense
 * connect with mongoDB
 * Models and database time reqd 1day
 * APIs for login,register and auth(JWT) time reqd1-2days
 * Added Logout feature and logout api endpoint to set JWT as null
 * create middleware for jwt auth
 * API for adding expense(POST) 1day
 * API to get all expense by user(GET) 1day
 * API for deleting expense (DELETE/POST)
 * 4-5 days backend
 * 
 * Project Start 4/9/23
 * Project deadline 14/9/23
 */
