import './Card.css';

const Card = props => {

    const value = props.value.toLowerCase();
    const shape = props.shape.toLowerCase();
    const index = props.index;
    const reversedStyle = props.reversed ? 'card-wrapper-inner reversed' : 'card-wrapper-inner';


    const imageUrl = '/cards/' + value + '_of_' + shape + 's.png';

    return (
        <div className="card-wrapper" style={{ top: (-8 * index) + 'rem' }}>
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