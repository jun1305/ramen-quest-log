import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { firebaseApp } from '../services/firebase';

const auth = getAuth(firebaseApp);

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        ラーメンを食べた！
      </button>
      <p>杯数: {count}</p>
      <button onClick={() => auth.signOut()}>ログアウト</button>
    </div>
  );
}