import { useSelector } from 'react-redux';
import './App.css';
import Tableau from './components/Tableau';

function App() {

  const gameState = useSelector(state => state.solitare.value);

  return (
    <div>
      <header>
      </header>
      <main>
        <section id="main-top">
          <Tableau columns={gameState.columns.slice(7)} />
        </section>
        <Tableau columns={gameState.columns.slice(0, 7)} />
      </main>
    </div>
  );
}

export default App;
