import { useContext } from 'react';

import { MessageList } from './component/MessageList';
import { LoginBox } from './component/LoginBox';
import { SendMessageForm } from './component/SendMessageForm';
import { AuthContext } from './context/auth';

import styles from './App.module.scss';

export function App() {
  const { user } = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${!!user ? styles.contentSigned : ''}`}>
      <MessageList />
      { !!user ? <SendMessageForm /> : <LoginBox /> }
    </main>
  )
}
