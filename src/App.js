import { useSelector } from 'react-redux';
import './App.css';
import Tableau from './components/Tableau';

function App() {

  const game = useSelector(state => state.solitare.game);

  return (
    <div>
      <header>
      </header>
      <main>
        <section id="main-top">
          <Tableau columns={game.columns.slice(7)} cardOverlap='-174' />
        </section>
        <Tableau columns={game.columns.slice(0, 7)} cardOverlap='-135' />
      </main>
    </div>
  );
}

export default App;
