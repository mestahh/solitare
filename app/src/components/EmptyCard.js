import './EmptyCard.css'

const EmptyCard = (props) => {
    return (
        <div className='card-wrapper empty'>
            <div
                className="inner-circle"
                onDragOver={props.onDragOver}
                onDrop={props.onDrop}
            ></div>
        </div>
    );
}

export default EmptyCard;