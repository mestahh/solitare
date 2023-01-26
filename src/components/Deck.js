import './Deck.css';
import EmptyCard
 from './EmptyCard';
const Deck = (props) => {

    const noDrop = () => {
        return false;
    }

    return (
        <div className="deck">
            <EmptyCard onDragOver={noDrop} onDrop={noDrop}/>
        </div>
    );
}

export default Deck;