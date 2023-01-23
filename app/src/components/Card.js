import './Card.css';

const Card = props => {

    const value = props.value.toLowerCase();
    const shape = props.shape.toLowerCase();
    const index = props.index;
    const reversedStyle = props.reversed ? 'card-wrapper-inner reversed' : 'card-wrapper-inner';
    const id = shape + '_' + value;

    const imageUrl = '/cards/' + value + '_of_' + shape + 's.png';

    const dragStartHandler = (event) => {
        event.dataTransfer.setData("card", id);
    }

    const allowDrop = (ev) => {
        if (props.reversed) {
            return false;
        }
        // here I have to examine wether I can drop the card here or not
        ev.preventDefault();
    }

    const drop = (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("card");
        document.getElementById(id).appendChild(document.getElementById(data));

        // here I have to update the column in the state with the new card
    }

    return (
        <div
            id={shape + '_' + value}
            className="card-wrapper"
            onDragStart={dragStartHandler}
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