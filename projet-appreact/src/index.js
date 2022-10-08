import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import Formu from './components/Formu'
import Resume from './components/Resume';
import Nft from './components/Nft';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'




const Root = () => {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/Formu' component={Formu} />
          <Route exact path='/Resume' component={Resume} />
          <Route exact path='/Nft' component={Nft} />
        </Switch>
      </Router>
  );
}


// const Moon = () => {
//   return (
//     <Router>
//         <Route exact path='/Formu' component={Formu} />
//     </Router>
// );
// }

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Moon />
//   </React.StrictMode>,
//   document.getElementById('test')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
