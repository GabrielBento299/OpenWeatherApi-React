import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './assets/styles/global.module.scss';
import Home from './components/Home';

function App() {
  return (
    <div className={styles.container}>
      <ToastContainer autoClose={1500} position={toast.POSITION.TOP_CENTER} />
      <Home />
    </div>
  );
}

export default App;
