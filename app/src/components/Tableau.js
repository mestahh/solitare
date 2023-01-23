import './Tableau.css'
import './Card';
import Card from './Card';

function Tableau(props) {

    return (
      <section id="tableau">
        { 
          props.tableau.map((column) => (
            <div className="tableau-column">
              {
                column.column.map((card, index) => (
                  <Card 
                  value={card.value} 
                  shape={card.shape} 
                  reversed={card.reversed}
                  index={index} 
                  key={card.value + '_' + card.shape}/>
                ))}
            </div>
          ))
        }
      </section>
    );
  }

  export default Tableau