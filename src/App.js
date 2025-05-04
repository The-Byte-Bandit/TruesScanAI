import logo from './logo.svg';
import './App.css';
import './index.css';
import Home from './pages/home.tsx';
import styles from './style.js';

function App() {
  return (
    <div className={`${styles.paddingMain} min-w-full min-h-screen bg-theme`}>
      <Home/>
    </div>
  );
}

export default App;
