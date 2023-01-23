import { useState } from "react";
import Card from "./Card";
import EmptyCard from "./EmptyCard";
import canItFollow from "../helpers/draghelper";

const TableauColumn = (props) => {

    const [cards, setCards] = useState(props.column.cards);
    const id = props.column.id;

    const addToColumn = (card) => {
        setCards((previous) => {
            return [...previous, card];
        });
    }

    const reverseLastCard = (column) => {
        if (column.length > 0) {
            let lastCard = column[column.length - 1];
            if (lastCard.reversed) {
                lastCard.reversed = false;
            }
        }
    }

    const removeFromColumn = (card) => {
        setCards((previous) => {
            let filtered = [...previous].filter(c => !(c.shape == card.shape && c.value == card.value))
            reverseLastCard(filtered);
            return filtered;
        });
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

    const allowDropOnEmpty = (event) => {
        event.preventDefault();
    };

    const dropHandler = (event) => {
        event.preventDefault();
        var cardAsString = event.dataTransfer.getData("text");
        var card = JSON.parse(cardAsString);

        if (canItFollow(cards, card)) {
            addToColumn(card); 
        }
    };

    var renderedColumn;
    if (cards.length > 0) {
        renderedColumn =
            (
                <div className="tableau-column">
                    {
                        cards.map((card, index) => (
                            <Card
                                onDragStart={(event) => dragStartHandler(event, card)}
                                onDragEnd={(event) => dragEndHandler(event, card)}
                                onDragOver={(event) => allowDrop(event, card)}
                                onDrop={dropHandler}
                                card={card}
                                index={index}
                                key={card.value + '_' + card.shape} />
                        ))}
                </div>
            );
    } else {
        renderedColumn = (
            <div className="tableau-column">
                <EmptyCard
                    onDragOver={allowDropOnEmpty}
                    onDrop={dropHandler}
                />
            </div>
        );
    }

    return renderedColumn;
}

export default TableauColumn;