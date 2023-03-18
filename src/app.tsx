import { Button } from 'antd';
import { useState } from 'react';

export const App = () => {
  const [str, setStr] = useState('Hello World');

  return (
    <>
      <div className="bold">{str}</div>
      <Button className="text-blue" type="primary" onClick={() => setStr('666')}>
        click me
      </Button>
    </>
  );
};
