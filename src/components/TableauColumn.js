import { useDispatch } from "react-redux";
import { startDrag } from "../solitareSlice";
import Card from "./Card";
import EmptyCard from "./EmptyCard";
import { useSelector } from "react-redux";

const MIN_FOUNDATION_COLUMN_ID = 10;

const TableauColumn = (props) => {

    const dispatch = useDispatch();
    const draggedCards = useSelector(state => state.solitare.draggedCards);

    const allowDrop = (event) => {
        if (draggedCards.length > 1 && props.column.id > MIN_FOUNDATION_COLUMN_ID) {
            return false;
        }
        event.preventDefault();
    };

    const dragStartHandler = (event, card) => {

        let cards = props.column.cards;

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
    if (props.column.cards.length > 0) {
        renderedColumn =
            (
                <div className="tableau-column">
                    {
                        props.column.cards.map((card, index) => (
                            <Card
                                onDragStart={(event) => dragStartHandler(event, card)}
                                onDragOver={allowDrop}
                                onDrop={props.onDrop}
                                card={card}
                                index={index}
                                cardOverlap={props.cardOverlap}
                                key={card.id} />
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