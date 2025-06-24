import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello Quest</h1>
      <button onClick={() => setCount(count + 1)}>
        ラーメンを食べた！
      </button>
      <p>杯数: {count}</p>
    </>
  );
}

export default App;
