import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { firebaseApp } from './services/firebase';
import Login from './components/Login';
import Counter from './components/Counter';
import LogForm from './components/LogForm';
import LogsList from './components/LogsList';

const auth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (!user) {
    return <Login />;
  }

  return (
    <>
      <h1>Hello Quest</h1>
      <p>ようこそ、{user.email}さん！</p>
      <Counter />
      <LogForm />
      <LogsList />
    </>
  );
}

export default App;



