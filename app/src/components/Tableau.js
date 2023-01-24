import { useState } from 'react';
import './Card';
import './Tableau.css';
import TableauColumn from './TableauColumn';
import canItFollow from "../helpers/draghelper";

function Tableau(props) {

  const [columns, setColumns] = useState(props.tableau);

  const reverseLastCard = (column) => {
    if (column.length > 0) {
      let lastCard = column[column.length - 1];
      if (lastCard.reversed) {
        lastCard.reversed = false;
      }
    }
  }

  const addToColumn = (columnId, card) => {
    setColumns((previousColumns) => {
      const previous = removeFromColumn(previousColumns, card);
      previous.forEach(c => {
        if (c.id === columnId) {
          c.cards.push(card);
        }
        reverseLastCard(c.cards);
      })
      
      return previous;
    });
  }

  const removeFromColumn = (previousColumns, cardToRemove) => {
    const prev = [...previousColumns];
    const newColumns = [];
    prev.forEach(c => {
      let newColumn = c.cards.filter(card => card.id !== cardToRemove.id);
      newColumns.push({ ...c, cards: newColumn });
    })
    return newColumns;
  }

  const allowDrop = (event, column) => {
    console.log('allowing drop on ' + column.id);
    event.preventDefault();
  };

  const dropHandler = (event, column) => {
    event.preventDefault();
    var cardAsString = event.dataTransfer.getData("text");
    var card = JSON.parse(cardAsString);
    if (canItFollow(column.cards, card) || column.cards.length === 0) {
      addToColumn(column.id, card);
    }
  }

  return (
    <section id="tableau">
      {
        columns.map((column) => (
          <TableauColumn
            column={column}
            key={column.id}
            onDragOver={(event) => allowDrop(event, column)}
            onDrop={(event) => dropHandler(event, column)}
          />
        ))
      }
    </section>
  );
}

export default Tableau