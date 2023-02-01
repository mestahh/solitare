import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Stock from './components/Stock';
import Tableau from './components/Tableau';
import deal from './helpers/deal';
import { loadColumns } from './solitareSlice';

function App() {

  const game = useSelector(state => state.solitare.game);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadColumns({ data: deal() }));
  }, []);

  var gameArea;
  if (game.columns.length == 0) {
    gameArea = '';
  } else {
    console.log(game.columns);
    gameArea = (
      <main>
        <section id="main-top">
          <Tableau columns={game.columns.slice(7, 11)} cardOverlap='-174' />
          <Stock stock={game.columns.filter(c => c.type === 'stock')[0]} waste={game.columns.filter(c => c.type === 'waste')[0]} />
        </section>
        <Tableau columns={game.columns.slice(0, 7)} cardOverlap='-135' />
      </main>
    )
  }

  return (
    <div>
      <header>
      </header>
      {gameArea}
    </div >
  );
}

export default App;
