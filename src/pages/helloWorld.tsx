import { useEffect, useState } from 'react';

export const HelloWorld = () => {
  const [str, setStr] = useState('Hello World');

  useEffect(() => {
    console.log(`str is changed : ${str}`);
  }, [str]);

  return (
    <>
      <h1>{str}</h1>
      <button onClick={() => setStr('666')}>click me</button>
    </>
  );
};
