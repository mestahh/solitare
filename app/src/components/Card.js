import './Card.css';

const Card = props => {

    const value = props.card.value.toLowerCase();
    const shape = props.card.shape.toLowerCase();
    const index = props.index;
    const reversedStyle = props.card.reversed ? 'card-wrapper-inner reversed' : 'card-wrapper-inner';
    const id = shape + '_' + value;

    const imageUrl = '/cards/' + value + '_of_' + shape + 's.png';

    const dragStartHandler = (event) => {
        if (props.reversed) {
            return false;
        }
        event.dataTransfer.setData("text", JSON.stringify(props.card));
    }

    const allowDrop = (ev) => {
        if (props.card.reversed) {
            return false;
        }
        // here I have to examine wether I can drop the card here or not
        ev.preventDefault();
    }

    const drop = (ev) => {
        ev.preventDefault();
        var card = ev.dataTransfer.getData("text");
        props.addToColumn(JSON.parse(card));
    }

    const dragEndedHandler = () => {
        //props.removeFromColumn(card);
    }

    return (
        <div
            id={shape + '_' + value}
            draggable={props.card.reversed}
            className="card-wrapper"
            onDragStart={dragStartHandler}
            onDragEnd={dragEndedHandler}
            onDragOver={allowDrop}
            onDrop={drop}
            style={{ top: (-8 * index) + 'rem' }}>
            <div className={reversedStyle}>
                <div className="card-front">
                    <img src={imageUrl} alt="Avatar" />
                </div>
                <div className="card-back">
                    <img src="/cards/background.png" alt="Avatar" />
                </div>
            </div>
        </div>
    );
}

export default Card;