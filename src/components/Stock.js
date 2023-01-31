import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { moveToWaste, startDrag, wasteToStock } from '../solitareSlice';
import Card from './Card';
import styles from './Stock.module.css';
import EmptyCard from './EmptyCard';

const WASTE_COLUMN_ID = 16;

const Stock = (props) => {

    const dispatch = useDispatch();

    const noDrop = () => {
        return false;
    }

    const dragStartHandler = (event, card) => {
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

    return (
        <div className={styles.stock}>
            <div onClick={restorePack}><EmptyCard onDragOver={noDrop} onDrop={noDrop} /></div>
            <div className={styles.stockCards}>
                <div className={styles.wasteCards}>
                    {
                        props.waste.cards.slice(-3).map((card, index) =>
                            <div className={styles.wasteCard} key={card.id}>
                                <Card
                                    onDragStart={(event) => dragStartHandler(event, card)}
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
                        props.stock.cards.map((card, index) =>
                            <div onClick={(event) => toOpenCards(event, card)} key={card.id}>
                                <Card
                                    onDragStart={(event) => dragStartHandler(event, card)}
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