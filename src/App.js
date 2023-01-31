import { useSelector } from 'react-redux';
import './App.css';
import Stock from './components/Stock';
import Tableau from './components/Tableau';

function App() {

  const game = useSelector(state => state.solitare.game);

  return (
    <div>
      <header>
      </header>
      <main>
        <section id="main-top">
          <Tableau columns={game.columns.slice(7, 11)} cardOverlap='-174' />
          <Stock stock={game.columns.filter(c => c.type === 'stock')[0]} waste={game.columns.filter(c => c.type === 'waste')[0]} />
        </section>
        <Tableau columns={game.columns.slice(0, 7)} cardOverlap='-135' />
      </main>
    </div>
  );
}

export default App;
