import React, { useState ,useEffect} from 'react';

function Rating({children}) {
  const initValue = ['☆', '☆', '☆', '☆', '☆'];
  const [state, setState] = useState(initValue);
  const starNumber = Number(children); 

  useEffect(() => {
    setState(state.splice(0, Math.ceil(starNumber)));

  }, [starNumber]);
  return <div>{state}</div>;
}

export default Rating;
