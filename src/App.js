import './App.css';
import Stars from './components/Stars';

function App() {
  return (
    <>
      <Stars count={8}></Stars>
      <Stars count={5}></Stars>
      <Stars count={2}></Stars>
      <Stars count={0}></Stars>
    </>
  );
}

export default App;
