import { useState } from 'react';
import canItFollow from "../helpers/draghelper";
import './Card';
import './Foundation.css';
import './Tableau.css';
import TableauColumn from './TableauColumn';

const Foundation = (props) => {

    const [columns, setColumns] = useState(props.foundation);

    const reverseLastCard = (column) => {
        // if (column.length > 0) {
        //     let lastCard = column[column.length - 1];
        //     if (lastCard.reversed) {
        //         lastCard.reversed = false;
        //     }
        // }
    }

    const addToColumn = (columnId, cards) => {
        console.log('Adding to foundation');
        setColumns((previousColumns) => {
            const previous = removeFromColumn(previousColumns, cards);
            previous.forEach(c => {
                if (c.id === columnId) {
                    cards.forEach(cardToAdd => {
                        c.cards.push(cardToAdd);
                    });
                }
                reverseLastCard(c.cards);
            })
            return previous;
        });
    }

    const removeFromColumn = (previousColumns, cardsToRemove) => {
        const prev = [...previousColumns];
        const cardIdsToRemove = cardsToRemove.map(c => c.id);
        const newColumns = [];
        prev.forEach(c => {
            let newColumn = c.cards.filter(card => !cardIdsToRemove.includes(card.id));
            newColumns.push({ ...c, cards: newColumn });
        });
        return newColumns;
    }

    const allowDrop = (event, column) => {
        event.preventDefault();
    };

    const dropHandler = (event, column) => {
        event.preventDefault();
        var cardsAsString = event.dataTransfer.getData("text");

        if (cardsAsString) {
            var cards = JSON.parse(cardsAsString);
            if (canItFollow(column.cards, cards) || column.cards.length === 0) {
                addToColumn(column.id, cards);
            }
        }
    }

    return (
        <section className="foundation">
            {
                columns.map((column) => (
                    <TableauColumn
                        column={column}
                        key={column.id}
                        onDragOver={(event) => allowDrop(event, column)}
                        onDrop={(event) => dropHandler(event, column)}
                    />
                ))
            }
        </section>
    );
};

export default Foundation;