import { useDispatch, useSelector } from 'react-redux';
import canItFollow from "../helpers/draghelper";
import { move } from '../solitareSlice';
import './Card';
import './Tableau.css';
import TableauColumn from './TableauColumn';

function Tableau(props) {

  const dispatch = useDispatch();
  const draggedCards = useSelector(state => state.solitare.draggedCards);

  const dropHandler = (event, column) => {
    event.preventDefault();
    dispatch(move({ 'targetColumnId': column.id, 'cards': draggedCards }));
  }

  return (
    <section id="tableau">
      {
        props.columns.map((column) => (
          <TableauColumn
            column={column}
            key={column.id}
            cardOverlap={props.cardOverlap}
            onDrop={(event) => dropHandler(event, column)}
          />
        ))
      }
    </section>
  );
}

export default Tableau