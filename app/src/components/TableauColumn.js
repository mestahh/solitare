import Card from "./Card";
import EmptyCard from "./EmptyCard";

const TableauColumn = (props) => {

    const id = props.column.id;

    const dragStartHandler = (event, card) => {
        if (card.reversed) {
            return false;
        }
        console.log('Drag started', card);
        event.dataTransfer.setData("text", JSON.stringify(card));
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