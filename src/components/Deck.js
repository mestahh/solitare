import { useDispatch } from 'react-redux';
import { startDrag } from '../solitareSlice';
import Card from './Card';
import './Deck.css';
import EmptyCard from './EmptyCard';

const Deck = (props) => {

    const dispatch = useDispatch();

    const noDrop = () => {
        return false;
    }

    const dragStartHandler = (event, card) => {

        if (card.reversed) {
            return false;
        }
        // let cardIndex = cards.indexOf(card);

        // let cardsToMove = [];
        // cards.map((c, index) => {
        //     if (index >= cardIndex) {
        //         cardsToMove.push(c);
        //     }
        // });
        dispatch(startDrag([card]));
    };

    return (
        <div className="deck">
            <EmptyCard onDragOver={noDrop} onDrop={noDrop} />
            <div className="deck-cards">
                {
                    props.deck.cards.map((card, index) =>
                        <Card
                            onDragStart={(event) => dragStartHandler(event, card)}
                            onDragOver={noDrop}
                            onDrop={noDrop}
                            card={card}
                            index={index}
                            cardOverlap={'-175'}
                            key={card.id} />
                    )
                }
            </div>

        </div>
    );
}

export default Deck;