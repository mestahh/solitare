export const canItFollow = (targetColumn, cardsToDrop) => {
    if (targetColumn.length === 0) {
        return true;
    }
    const cardToDrop = cardsToDrop[0];

    const lastCard = targetColumn[targetColumn.length - 1];
    if ((lastCard.order == (cardToDrop.order + 1)) ||
        (lastCard.order === 2 && cardToDrop.value === 'ACE')) {
        if (cardToDrop.shape == 'DIAMOND' || cardToDrop.shape == 'HEART') {
            if (lastCard.shape == 'CLUB' || lastCard.shape == 'SPADE') {
                return true;
            }
            return false;
        }
        if (cardToDrop.shape == 'CLUB' || cardToDrop.shape == 'SPADE') {
            if (lastCard.shape == 'DIAMOND' || lastCard.shape == 'HEART') {
                return true;
            }
            return false;
        }
    }
    return false;
}

export const canItFollowOnFoundation = (targetColumn, cardsToDrop) => {

    const cardToDrop = cardsToDrop[0];
    if (targetColumn.length === 0 && cardToDrop.value === 'ACE') {
        return true;
    }

    const lastCard = targetColumn[targetColumn.length - 1];

    if (cardToDrop.order == (lastCard.order + 1)) {
        if (cardToDrop.shape === lastCard.shape) {
            return true;
        }
    }
    return false;
}