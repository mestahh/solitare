import './Card';
import './Tableau.css';
import TableauColumn from './TableauColumn';

function Tableau(props) {

  return (
    <section id="tableau">
      {
        props.tableau.map((column, index) => (
          <TableauColumn column={column.column} key={index}/>
        ))
      }
    </section>
  );
}

export default Tableau