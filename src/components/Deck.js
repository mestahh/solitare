import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startDrag } from '../solitareSlice';
import Card from './Card';
import styles from './Deck.module.css';
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
            } else if (previous.start + 3 == previous.end) {
                return { start: previous.start + 1, end: previous.end + 1 };
            } else {
                return { start: previous.start, end: previous.end + 1 };
            }
        });
    }

    const restorePack = () => {
        setOpenedCardIndexes({ start: 0, end: 0 });
    }

    return (
        <div className={styles.deck}>
            <div onClick={restorePack}><EmptyCard onDragOver={noDrop} onDrop={noDrop} /></div>
            <div className={styles.deckCards}>
                <div className={styles.openedCards}>
                    {
                        props.deck.cards.slice(openedCardIndexes.start, openedCardIndexes.end).map((card, index) =>
                            <div class={styles.openedCard}>
                                <Card
                                    onDragStart={(event) => dragStartHandler(event, card)}
                                    onDragOver={noDrop}
                                    onDrop={noDrop}
                                    card={card}
                                    index={index}
                                    key={card.id} />
                            </div>
                        )
                    }

                </div>
                <div className={styles.pack} onClick={toOpenCards}>
                    {
                        props.deck.cards.slice(openedCardIndexes.end).reverse().map((card, index) =>
                            <Card
                                onDragStart={(event) => dragStartHandler(event, card)}
                                onDragOver={noDrop}
                                onDrop={noDrop}
                                card={card}
                                index={index}
                                cardOverlap={'-173'}
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