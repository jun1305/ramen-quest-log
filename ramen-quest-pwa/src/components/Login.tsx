import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../services/firebase';

const auth = getAuth(firebaseApp);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('登録成功！');
    } catch (error: any) {
      alert(error.message);
    }
  };

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('ログイン成功！');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>ログイン / 新規登録</h2>
      <input
        type="email"
        placeholder="メールアドレス"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={signUp}>新規登録</button>
      <button onClick={signIn}>ログイン</button>
    </div>
  );
}
