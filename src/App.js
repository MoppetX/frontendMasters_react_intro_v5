import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  return (
    // strictMode will warn you if you try to use a react feature they want to deprecate soon
    // will do nothing in production
    <React.StrictMode>
      <div>
        <h1 id={'sth important'}>The Eternal Menu</h1>
        <SearchParams/>
        {/*<Pet name={'Luna'} animal={'dog'} breed={'Havanese'}/>*/}
        {/*<Pet name={'Pepper'} animal={'bird'} breed={'Cockateel'}/>*/}
        {/*<Pet name={'Doink'} animal={'cat'} breed={'mixed'}/>*/}
      </div>
    </React.StrictMode>
  );
};

ReactDOM.render( <App/>, document.getElementById( 'root' ) );