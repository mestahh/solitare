import { useState } from "react";
import Card from "./Card";

const TableauColumn = (props) => {

    const [column, setColumn] = useState(props.column);

    const addToColumn = (card) => {
        setColumn((previous) => {
            return [...previous, card];
        });
    }

    return (
        <div className="tableau-column">
            {
                column.map((card, index) => (
                    <Card
                        card={card}
                        value={card.value}
                        shape={card.shape}
                        reversed={card.reversed}
                        index={index}
                        addToColumn={addToColumn}
                        key={card.value + '_' + card.shape} />
                ))}
        </div>
    );
}

export default TableauColumn;