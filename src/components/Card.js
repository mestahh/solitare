import './Card.css';

const Card = props => {

    const value = props.card.value.toLowerCase();
    const shape = props.card.shape.toLowerCase();
    const index = props.index;
    const reversedStyle = props.card.reversed ? 'card-wrapper-inner reversed' : 'card-wrapper-inner';
    const id = shape + '_' + value;

    const imageUrl = '/cards/' + value + '_of_' + shape + 's.png';
    var cardPosition = { top: (props.cardOverlap * index) + 'px' };


    return (
        <div
            id={id}
            draggable={props.card.reversed}
            className="card-wrapper"
            onDragStart={props.onDragStart}
            onDragEnd={props.onDragEnd}
            onDragOver={props.onDragOver}
            onDrop={props.onDrop}
            style={cardPosition}>
            <div className={reversedStyle}>
                <div className="card-front">
                    <img src={imageUrl} alt="Card image" />
                </div>
                <div className="card-back">
                    <img src="/cards/background.png" alt="Card back" />
                </div>
            </div>
        </div>
    );
}

export default Card;