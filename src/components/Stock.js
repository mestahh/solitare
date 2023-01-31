import { useDispatch } from 'react-redux';
import { moveToWaste, startDrag, wasteToStock } from '../solitareSlice';
import Card from './Card';
import EmptyCard from './EmptyCard';
import styles from './Stock.module.css';

const WASTE_COLUMN_ID = 16;

const Stock = (props) => {

    const dispatch = useDispatch();

    const noDrop = () => {
        return false;
    }

    const dragStartHandler = (event, card, index, cards) => {
        if (cards.length - 1 != index) {
            return;
        }
        if (card.reversed) {
            return false;
        }
        dispatch(startDrag([card]));
    };

    const toOpenCards = (event, card) => {
        dispatch(moveToWaste({ 'targetColumnId': WASTE_COLUMN_ID, 'cards': [card] }));
    }

    const restorePack = () => {
        dispatch(wasteToStock());
    }

    const stockCards = props.stock.cards;
    const wasteCards = props.waste.cards.slice(-3);

    return (
        <div className={styles.stock}>
            <div onClick={restorePack}><EmptyCard onDragOver={noDrop} onDrop={noDrop} /></div>
            <div className={styles.stockCards}>
                <div className={styles.wasteCards}>
                    {
                        wasteCards.map((card, index) =>
                            <div className={styles.wasteCard} key={card.id}>
                                <Card
                                    onDragStart={(event) => dragStartHandler(event, card, index, wasteCards)}
                                    onDragOver={noDrop}
                                    onDrop={noDrop}
                                    card={card}
                                    index={index}
                                />
                            </div>
                        )
                    }

                </div>
                <div className={styles.stock}>
                    {
                        stockCards.map((card, index) =>
                            <div onClick={(event) => toOpenCards(event, card)} key={card.id}>
                                <Card
                                    onDragStart={(event) => dragStartHandler(event, card, index, stockCards)}
                                    onDragOver={noDrop}
                                    onDrop={noDrop}
                                    card={card}
                                    index={index}
                                    cardOverlap={'-173'}

                                />
                            </div>
                        )
                    }
                </div>
            </div>

        </div >
    );
}

export default Stock;