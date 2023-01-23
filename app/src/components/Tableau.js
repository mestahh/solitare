import { useState } from 'react';
import './Card';
import './Tableau.css';
import TableauColumn from './TableauColumn';

function Tableau(props) {

  return (
    <section id="tableau">
      {
        props.tableau.map((column) => (
          <TableauColumn 
            column={column} 
            key={column.id} 
            // onAddToColumn={addToColumnHandler} 
            // onRemoveFromColumn={removeFromColumnHandler}
            />
        ))
      }
    </section>
  );
}

export default Tableau