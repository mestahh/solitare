import { useState } from "react";
import Card from "./Card";
import EmptyCard from "./EmptyCard";

const TableauColumn = (props) => {

    const id = props.column.id;
    const cards = props.column.cards;
    
    const dragStartHandler = (event, card) => {

        let cards = props.column.cards;

        if (card.reversed) {
            return false;
        }
        let cardIndex = cards.indexOf(card);

        if (cardIndex === cards.length - 1) {
            event.dataTransfer.setData("text", JSON.stringify([card]));
        } else {
            let cardsToMove = [];
            cards.map((c, index) => {
                if (index >= cardIndex) {
                    cardsToMove.push(c);
                }
            });
            event.dataTransfer.setData("text", JSON.stringify(cardsToMove));
        }
    };

    var renderedColumn;
    if (props.column.cards.length > 0) {
        renderedColumn =
            (
                <div className="tableau-column">
                    {
                        props.column.cards.map((card, index) => (
                            <Card
                                onDragStart={(event) => dragStartHandler(event, card)}
                                onDragOver={props.onDragOver}
                                onDrop={props.onDrop}
                                card={card}
                                index={index}
                                key={card.id} />
                        ))}
                </div>
            );
    } else {
        renderedColumn = (
            <div className="tableau-column">
                <EmptyCard
                    onDragOver={props.onDragOver}
                    onDrop={props.onDrop}
                />
            </div>
        );
    }

    return renderedColumn;
}

export default TableauColumn;