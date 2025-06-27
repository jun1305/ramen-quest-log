import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../services/firebase';

export default function LogForm() {
  const [storeName, setStoreName] = useState('');
  const [menuName, setMenuName] = useState('');
  const [bowls, setBowls] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await addDoc(collection(db, 'logs'), {
        storeName,
        menuName,
        bowls,
        createdAt: new Date(),
        userId: 'current-user-id' // 後で認証ユーザーIDに変更
      });
      
      // フォームをリセット
      setStoreName('');
      setMenuName('');
      setBowls(1);
      
      alert('ログを追加しました！');
    } catch (error) {
      console.error('Error adding log:', error);
      alert('エラーが発生しました');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>ラーメンログを追加</h3>
      <div>
        <input
          type="text"
          placeholder="店名"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="メニュー名"
          value={menuName}
          onChange={(e) => setMenuName(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="number"
          min="1"
          value={bowls}
          onChange={(e) => setBowls(Number(e.target.value))}
          required
        />
        <span>杯</span>
      </div>
      <button type="submit">ログを追加</button>
    </form>
  );
}