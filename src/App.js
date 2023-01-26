import { useSelector } from 'react-redux';
import './App.css';
import Deck from './components/Deck';
import Tableau from './components/Tableau';

function App() {

  const game = useSelector(state => state.solitare.game);


  console.log(game.columns.filter(c => c.type === 'tableau')[0]);
  return (
    <div>
      <header>
      </header>
      <main>
        <section id="main-top">
          <Tableau columns={game.columns.slice(7, 11)} cardOverlap='-174' />
          <Deck deck={game.columns.filter(c => c.type === 'deck')[0]} />
        </section>
        <Tableau columns={game.columns.slice(0, 7)} cardOverlap='-135' />
      </main>
    </div>
  );
}

export default App;
