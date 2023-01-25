import { useDispatch } from 'react-redux';
import canItFollow from "../helpers/draghelper";
import { move } from '../solitareSlice';
import './Card';
import './Tableau.css';
import TableauColumn from './TableauColumn';

function Tableau(props) {

  const dispatch = useDispatch();

  const dropHandler = (event, column) => {
    event.preventDefault();
    var cardsAsString = event.dataTransfer.getData("text");
    
    if (cardsAsString) {
      var cards = JSON.parse(cardsAsString);
      if (canItFollow(column.cards, cards) || column.cards.length === 0) {
        dispatch(move({'targetColumnId': column.id, 'cards': cards}));
      }
    }
  }

  return (
    <section id="tableau">
      {
        props.columns.map((column) => (
          <TableauColumn
            column={column}
            key={column.id}
            onDrop={(event) => dropHandler(event, column)}
          />
        ))
      }
    </section>
  );
}

export default Tableau