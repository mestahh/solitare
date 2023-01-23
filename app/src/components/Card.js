import './Card.css';

const Card = props => {

    const value = props.card.value.toLowerCase();
    const shape = props.card.shape.toLowerCase();
    const index = props.index;
    const reversedStyle = props.card.reversed ? 'card-wrapper-inner reversed' : 'card-wrapper-inner';
    const id = shape + '_' + value;

    const imageUrl = '/cards/' + value + '_of_' + shape + 's.png';

    return (
        <div
            id={id}
            draggable={props.card.reversed}
            className="card-wrapper"
            onDragStart={props.onDragStart}
            onDragEnd={props.onDragEnd}
            onDragOver={props.onDragOver}
            onDrop={props.onDrop}
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