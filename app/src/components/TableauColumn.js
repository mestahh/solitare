import { useState } from "react";
import Card from "./Card";

const TableauColumn = (props) => {

    const [column, setColumn] = useState(props.column);

    const addToColumn = (card) => {
        setColumn((previous) => {
            return [...previous, card];
        });
    }

    const reverseLastCard = (column) => {
        let lastCard = column[column.length - 1];
        if (lastCard.reversed) {
            lastCard.reversed = false;
        }
    }

    const removeFromColumn = (card) => {
        setColumn((previous) => {
            let filtered = [...previous].filter(c => !(c.shape == card.shape && c.value == card.value))
            reverseLastCard(filtered);
            return filtered;
        })
    }

    const dragEndHandler = (event, card) => {
        if (event.dataTransfer.dropEffect === 'copy') {
            removeFromColumn(card);
        }
    };

    const dragStartHandler = (event, card) => {
        if (card.reversed) {
            return false;
        }
        event.dataTransfer.setData("text", JSON.stringify(card));
    };

    const allowDrop = (event, card) => {
        if (card.reversed) {
            return false;
        }
        event.preventDefault();
    };

    const dropHandler = (event) => {
        event.preventDefault();
        var card = event.dataTransfer.getData("text");
        addToColumn(JSON.parse(card));
    };

    return (
        <div className="tableau-column">
            {
                column.map((card, index) => (
                    <Card
                        onDragStart={(event) => dragStartHandler(event, card)}
                        onDragEnd={(event) => dragEndHandler(event, card)}
                        onDragOver={(event) => allowDrop(event, card)}
                        onDrop={dropHandler}
                        card={card}
                        index={index}
                        addToColumn={addToColumn}
                        key={card.value + '_' + card.shape} />
                ))}
        </div>
    );
}

export default TableauColumn;