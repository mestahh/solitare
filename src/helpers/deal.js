const createDeck = () => {
    return [
        { "id": 1, "shape": "HEART", value: "ACE", reversed: true, order: 0 },
        { "id": 2, "shape": "HEART", value: "2", reversed: true, order: 1 },
        { "id": 3, "shape": "HEART", value: "3", reversed: true, order: 2 },
        { "id": 4, "shape": "HEART", value: "4", reversed: true, order: 3 },
        { "id": 5, "shape": "HEART", value: "5", reversed: true, order: 4 },
        { "id": 6, "shape": "HEART", value: "6", reversed: true, order: 5 },
        { "id": 7, "shape": "HEART", value: "7", reversed: true, order: 6 },
        { "id": 8, "shape": "HEART", value: "8", reversed: true, order: 7 },
        { "id": 9, "shape": "HEART", value: "9", reversed: true, order: 8 },
        { "id": 10, "shape": "HEART", value: "10", reversed: true, order: 9 },
        { "id": 11, "shape": "HEART", value: "JACK", reversed: true, order: 10 },
        { "id": 12, "shape": "HEART", value: "QUEEN", reversed: true, order: 11 },
        { "id": 13, "shape": "HEART", value: "KING", reversed: true, order: 12 },

        { "id": 14, "shape": "DIAMOND", value: "ACE", reversed: true, order: 0 },
        { "id": 15, "shape": "DIAMOND", value: "2", reversed: true, order: 1 },
        { "id": 16, "shape": "DIAMOND", value: "3", reversed: true, order: 2 },
        { "id": 17, "shape": "DIAMOND", value: "4", reversed: true, order: 3 },
        { "id": 18, "shape": "DIAMOND", value: "5", reversed: true, order: 4 },
        { "id": 19, "shape": "DIAMOND", value: "6", reversed: true, order: 5 },
        { "id": 20, "shape": "DIAMOND", value: "7", reversed: true, order: 6 },
        { "id": 21, "shape": "DIAMOND", value: "8", reversed: true, order: 7 },
        { "id": 22, "shape": "DIAMOND", value: "9", reversed: true, order: 8 },
        { "id": 23, "shape": "DIAMOND", value: "10", reversed: true, order: 9 },
        { "id": 24, "shape": "DIAMOND", value: "JACK", reversed: true, order: 10 },
        { "id": 25, "shape": "DIAMOND", value: "QUEEN", reversed: true, order: 11 },
        { "id": 26, "shape": "DIAMOND", value: "KING", reversed: true, order: 12 },

        { "id": 27, "shape": "CLUB", value: "ACE", reversed: true, order: 0 },
        { "id": 28, "shape": "CLUB", value: "2", reversed: true, order: 1 },
        { "id": 29, "shape": "CLUB", value: "3", reversed: true, order: 2 },
        { "id": 30, "shape": "CLUB", value: "4", reversed: true, order: 3 },
        { "id": 31, "shape": "CLUB", value: "5", reversed: true, order: 4 },
        { "id": 32, "shape": "CLUB", value: "6", reversed: true, order: 5 },
        { "id": 33, "shape": "CLUB", value: "7", reversed: true, order: 6 },
        { "id": 34, "shape": "CLUB", value: "8", reversed: true, order: 7 },
        { "id": 35, "shape": "CLUB", value: "9", reversed: true, order: 8 },
        { "id": 36, "shape": "CLUB", value: "10", reversed: true, order: 9 },
        { "id": 37, "shape": "CLUB", value: "JACK", reversed: true, order: 10 },
        { "id": 38, "shape": "CLUB", value: "QUEEN", reversed: true, order: 11 },
        { "id": 39, "shape": "CLUB", value: "KING", reversed: true, order: 12 },

        { "id": 40, "shape": "SPADE", value: "ACE", reversed: true, order: 0 },
        { "id": 41, "shape": "SPADE", value: "2", reversed: true, order: 1 },
        { "id": 42, "shape": "SPADE", value: "3", reversed: true, order: 2 },
        { "id": 43, "shape": "SPADE", value: "4", reversed: true, order: 3 },
        { "id": 44, "shape": "SPADE", value: "5", reversed: true, order: 4 },
        { "id": 45, "shape": "SPADE", value: "6", reversed: true, order: 5 },
        { "id": 46, "shape": "SPADE", value: "7", reversed: true, order: 6 },
        { "id": 47, "shape": "SPADE", value: "8", reversed: true, order: 7 },
        { "id": 48, "shape": "SPADE", value: "9", reversed: true, order: 8 },
        { "id": 49, "shape": "SPADE", value: "10", reversed: true, order: 9 },
        { "id": 50, "shape": "SPADE", value: "JACK", reversed: true, order: 10 },
        { "id": 51, "shape": "SPADE", value: "QUEEN", reversed: true, order: 11 },
        { "id": 52, "shape": "SPADE", value: "KING", reversed: true, order: 12 }
    ];
}


const deal = () => {

    const deck = createDeck();
    shuffleArray(deck);

    let c1 = createColumn(1, "tableau", deck, 1);
    let c2 = createColumn(2, "tableau", deck, 2);
    let c3 = createColumn(3, "tableau", deck, 3);
    let c4 = createColumn(4, "tableau", deck, 4);
    let c5 = createColumn(5, "tableau", deck, 5);
    let c6 = createColumn(6, "tableau", deck, 6);
    let c7 = createColumn(7, "tableau", deck, 7);

    let f1 = createColumn(11, "foundation", deck, 0);
    let f2 = createColumn(12, "foundation", deck, 0);
    let f3 = createColumn(13, "foundation", deck, 0);
    let f4 = createColumn(14, "foundation", deck, 0);

    let stock = createColumn(15, "stock", deck, 24);
    let waste = createColumn(16, "waste", deck, 0);

    reverseLastCard(c1)
    reverseLastCard(c2);
    reverseLastCard(c3);
    reverseLastCard(c4);
    reverseLastCard(c5);
    reverseLastCard(c6);
    reverseLastCard(c7);

    return [c1, c2, c3, c4, c5, c6, c7, f1, f2, f3, f4, stock, waste];
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const createColumn = (id, type, deck, numberOfCards) => {
    const cards = [];
    for (var i = 0; i < numberOfCards; i++) {
        cards.push(deck.pop());
    }
    return { id: id, type: type, cards: cards };
}

const reverseLastCard = (column) => {
    const lastCard = column.cards[column.cards.length - 1];
    lastCard.reversed = false;
}

export default deal;