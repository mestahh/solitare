import { useEffect, useReducer, useState } from 'react';
import { useDispatch } from 'react-redux';
import { startDrag } from '../solitareSlice';
import Card from './Card';
import './Deck.css';
import EmptyCard from './EmptyCard';

const Deck = (props) => {

    const dispatch = useDispatch();

    const [openedCardIndexes, setOpenedCardIndexes] = useState({ start: 0, end: 0 });

    const noDrop = () => {
        return false;
    }

    const dragStartHandler = (event, card) => {
        if (card.reversed) {
            return false;
        }
        dispatch(startDrag([card]));
    };

    const toOpenCards = (event) => {
        setOpenedCardIndexes((previous) => {
            if (previous.start == 0 && previous.end == 0) {
                return { start: 0, end: 1 };
            } else if(previous.start + 3 == previous.end) {
                return {start: previous.start + 1, end: previous.end + 1};
            } else {
                return { start: previous.start, end: previous.end + 1 };
            }
        });
    }

    const restorePack = () => {
        setOpenedCardIndexes({ start: 0, end: 0 });
    }

    return (
        <div className="deck">
            <div onClick={restorePack}><EmptyCard onDragOver={noDrop} onDrop={noDrop} /></div>
            <div className="deck-cards">
                <h1>{openedCardIndexes.start} {openedCardIndexes.end} </h1>
                <div className="opened-cards">
                    {
                        props.deck.cards.slice(openedCardIndexes.start, openedCardIndexes.end).map((card, index) =>
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
                <div className="pack" onClick={toOpenCards}>
                    {
                        props.deck.cards.slice(openedCardIndexes.end).reverse().map((card, index) =>
                            <Card
                                onDragStart={(event) => dragStartHandler(event, card)}
                                onDragOver={noDrop}
                                onDrop={noDrop}
                                card={card}
                                index={index}
                                cardOverlap={'-175'}
                                key={card.id}
                            />
                        )
                    }
                </div>
            </div>

        </div >
    );
}

export default Deck;