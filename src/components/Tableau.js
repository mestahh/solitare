import { useState } from 'react';
import './Card';
import './Tableau.css';
import TableauColumn from './TableauColumn';
import canItFollow from "../helpers/draghelper";

function Tableau(props) {

  const dropHandler = (event, column) => {
    event.preventDefault();
    var cardsAsString = event.dataTransfer.getData("text");
    
    if (cardsAsString) {
      var cards = JSON.parse(cardsAsString);
      if (canItFollow(column.cards, cards) || column.cards.length === 0) {
        props.addToColumn(column.id, cards);
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