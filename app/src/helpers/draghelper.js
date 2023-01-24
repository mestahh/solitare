const canItFollow = (targetColumn, cardsToDrop) => {


    if (targetColumn.length === 0) {
        return true;
    }
    const cardToDrop = cardsToDrop[0];

    const lastCard = targetColumn[targetColumn.length - 1];

    // if (value.order == (card.value.order + 1)) {
    if (cardToDrop.shape == 'DIAMOND' || cardToDrop.shape == 'HEART') {
        if (lastCard.shape == 'CLUB' || lastCard.shape == 'SPADE') {
            return true
        }
        return false
    }
    if (cardToDrop.shape == 'CLUB' || cardToDrop.shape == 'SPADE') {
        if (lastCard.shape == 'DIAMOND' || lastCard.shape == 'HEART') {
            return true
        }
        return false
    }
    // }
    // return false
}

export default canItFollow;