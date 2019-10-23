import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import SearchParams from './SearchParams';
import Details from './Details';


const App = () => {
  return (
    // strictMode will warn you if you try to use a react feature they want to deprecate soon
    // will do nothing in production
    <React.StrictMode>
      <div>
        <h1 id={'sth important'}>The Eternal Menu</h1>
        
        <Router>
          <SearchParams path={'/'}/>
          <Details path={'/details/:id'}/>
        </Router>
      
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render( <App/>, document.getElementById( 'root' ) );