import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';

interface Log {
  id: string;
  storeName: string;
  menuName: string;
  bowls: number;
  createdAt: any;
}

export default function LogsList() {
  const [logs, setLogs] = useState<Log[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'logs'), orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const logsData: Log[] = [];
      querySnapshot.forEach((doc) => {
        logsData.push({
          id: doc.id,
          ...doc.data()
        } as Log);
      });
      setLogs(logsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>読み込み中...</div>;
  }

  return (
    <div>
      <h3>ラーメンログ一覧</h3>
      {logs.length === 0 ? (
        <p>まだログがありません</p>
      ) : (
        <ul>
          {logs.map((log) => (
            <li key={log.id}>
              <strong>{log.storeName}</strong> - {log.menuName} ({log.bowls}杯)
              <br />
              <small>{log.createdAt?.toDate?.()?.toLocaleString() || '日時不明'}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}