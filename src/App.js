import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams';


const App = () => {
  return (
    <div>
      <h1 id={'sth important'}>The Eternal Menu</h1>
      <SearchParams/>
      {/*<Pet name={'Luna'} animal={'dog'} breed={'Havanese'}/>*/}
      {/*<Pet name={'Pepper'} animal={'bird'} breed={'Cockateel'}/>*/}
      {/*<Pet name={'Doink'} animal={'cat'} breed={'mixed'}/>*/}
    </div>
  );
};

ReactDOM.render( <App/>, document.getElementById( 'root' ) );