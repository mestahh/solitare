import { useState } from 'react';
import './Card';
import './Tableau.css';
import TableauColumn from './TableauColumn';

function Tableau(props) {

  const [dragEvent, setDragEvent] = useState();

  const onSuccessfulDragEvent = () => {
    setDragEvent('success');
  }

  const onUnsuccessfulDragEvent = () => {
    setDragEvent('failure');
  }

  return (
    <section id="tableau">
      {
        props.tableau.map((column) => (
          <TableauColumn 
            column={column} 
            key={column.id}
            onAddToColumn={onSuccessfulDragEvent} 
            onFailedDragEvent={onUnsuccessfulDragEvent}
            dragEvent={dragEvent}
            />
        ))
      }
    </section>
  );
}

export default Tableau