import React, { useState } from 'react'

function Hoc(WrappedComponent,incrementedby=1 ) {
  return function EnhancedComponent(props) {
    const [count, setCount] = useState(0);

    return (
      <>
        <WrappedComponent
          {...props}
          count={(count)}
          incrementCount={() => setCount(count + incrementedby)}
        />
      </>
    );
  };
}

export default Hoc
