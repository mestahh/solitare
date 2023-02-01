import { useDispatch } from "react-redux";
import { move, startDrag } from "../solitareSlice";
import Card from "./Card";
import EmptyCard from "./EmptyCard";
import { useSelector } from "react-redux";

const TableauColumn = (props) => {

    const dispatch = useDispatch();
    const draggedCards = useSelector(state => state.solitare.draggedCards);
    const cards = props.column.cards;
    const column = props.column;

    const allowDrop = (event) => {
        if (draggedCards.length > 1 && column.type === "foundation") {
            return false;
        }
        event.preventDefault();
    };

    const moveToFoundation = () => {
        let cardToMove = [cards[cards.length - 1]];

        dispatch(startDrag([cardToMove]));
        const foundationIds = [11, 12, 13, 14];
        foundationIds.forEach(id => {
            dispatch(move({ 'targetColumnId': id, 'cards': cardToMove }));
        });
    }

    const dragStartHandler = (event, card) => {
        if (card.reversed) {
            return false;
        }
        let cardIndex = cards.indexOf(card);

        let cardsToMove = [];
        cards.map((c, index) => {
            if (index >= cardIndex) {
                cardsToMove.push(c);
            }
        });
        dispatch(startDrag(cardsToMove));
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
                                onDragOver={allowDrop}
                                onDrop={props.onDrop}
                                card={card}
                                index={index}
                                cardOverlap={props.cardOverlap}
                                key={card.id} 
                                onDblClick={moveToFoundation}
                                />
                        ))}
                </div>
            );
    } else {
        renderedColumn = (
            <div className="tableau-column">
                <EmptyCard
                    onDragOver={allowDrop}
                    onDrop={props.onDrop}
                />
            </div>
        );
    }

    return renderedColumn;
}

export default TableauColumn;