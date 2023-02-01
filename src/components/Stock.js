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

    const moveStockToWaste = (event, card) => {
        dispatch(moveToWaste({ 'targetColumnId': WASTE_COLUMN_ID, 'cards': [card] }));
    }

    const moveWasteToStock = () => {
        dispatch(wasteToStock());
    }

    const stockCards = props.stock.cards;
    const wasteCards = props.waste.cards.slice(-3);

    var stock;

    if (stockCards.length == 0) {
        stock = <div onClick={moveWasteToStock} className={styles.emptyCard}><EmptyCard onDragOver={noDrop} onDrop={noDrop} /></div>
    } else {
        stock = stockCards.map((card, index) =>
            <div onClick={(event) => moveStockToWaste(event, card)} key={card.id}>
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


    return (
        <div className={styles.stock}>
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
                <div className={styles.stock}>{stock}</div>
            </div>

        </div >
    );
}

export default Stock;