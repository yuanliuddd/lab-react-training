import React, { useState ,useEffect} from 'react';

function Rating({children}) {
  const initValue = ['☆', '☆', '☆', '☆', '☆'];
  const [state, setState] = useState(initValue);
  const starNumber = Number(children); 
  console.log(starNumber);

  useEffect(() => {
    setState(state.slice(0, Math.ceil(starNumber)));
  }, [starNumber]);

  return <div>{state}</div>;
}

export default Rating;
