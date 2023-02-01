import './EmptyCard.css'

const EmptyCard = (props) => {
    return (
        <div className='card-wrapper empty' onDragOver={props.onDragOver} onDrop={props.onDrop}>
            <div className="inner-circle"></div>
        </div>
    );
}

export default EmptyCard;