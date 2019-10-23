import React from 'react';


const Details = props => {
  return (
    // TODO: doesn't work the same way
    <div>
      {/*<pre>*/}
      {/*<code>{JSON.stringify( props, null, 2 )}</code>*/}
      {/*</pre>*/}
      {console.log( JSON.stringify( props, null, 2 ) )};
    </div>
  );
  
};

export default Details;