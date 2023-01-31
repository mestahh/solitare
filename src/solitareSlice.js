import { createSlice } from '@reduxjs/toolkit'
import { canItFollow, canItFollowOnFoundation } from './helpers/draghelper';

const STOCK_COLUMN_ID = 15;
const WASTE_COLUMN_ID = 16;

const game = {
  "columns": [
    {
      "cards": [
        {
          "id": 1,
          "reversed": false,
          "shape": "CLUB",
          "value": "ACE",
          "order": 1
        }
      ],
      "complete": false,
      "type": "tableau",
      "id": 1
    },
    {
      "cards": [
        {
          "id": 2,
          "reversed": true,
          "shape": "HEART",
          "value": "ACE",
          "order": 1
        },
        {
          "id": 3,
          "reversed": false,
          "shape": "DIAMOND",
          "value": "3",
          "order": 3
        }
      ],
      "complete": false,
      "type": "tableau",
      "id": 2
    },
    {
      "cards": [
        {
          "id": 4,
          "reversed": true,
          "shape": "CLUB",
          "value": "7",
          "order": 7
        },
        {
          "id": 5,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "JACK",
          "order": 11
        },
        {
          "id": 6,
          "reversed": false,
          "shape": "CLUB",
          "value": "4",
          "order": 4
        }
      ],
      "complete": false,
      "type": "tableau",
      "id": 3
    },
    {
      "cards": [
        {
          "id": 7,
          "reversed": true,
          "shape": "CLUB",
          "value": "ACE",
          "order": 1
        },
        {
          "id": 8,
          "reversed": true,
          "shape": "CLUB",
          "value": "9",
          "order": 9,
          "order": 9
        },
        {
          "id": 9,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "6",
          "order": 6
        },
        {
          "id": 10,
          "reversed": false,
          "shape": "DIAMOND",
          "value": "8",
          "order": 8
        }
      ],
      "complete": false,
      "type": "tableau",
      "id": 4
    },
    {
      "cards": [
        {
          "id": 11,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "5",
          "order": 5
        },
        {
          "id": 12,
          "reversed": true,
          "shape": "HEART",
          "value": "5",
          "order": 5
        },
        {
          "id": 13,
          "reversed": true,
          "shape": "SPADE",
          "value": "4",
          "order": 4
        },
        {
          "id": 14,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "7",
          "order": 7
        },
        {
          "id": 15,
          "reversed": false,
          "shape": "CLUB",
          "value": "JACK",
          "order": 11
        }
      ],
      "complete": false,
      "type": "tableau",
      "id": 5
    },
    {
      "cards": [
        {
          "id": 16,
          "reversed": true,
          "shape": "CLUB",
          "value": "QUEEN",
          "order": 12
        },
        {
          "id": 17,
          "reversed": true,
          "shape": "SPADE",
          "value": "10",
          "order": 10
        },
        {
          "id": 18,
          "reversed": true,
          "shape": "SPADE",
          "value": "6",
          "order": 6
        },
        {
          "id": 19,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "9",
          "order": 9
        },
        {
          "id": 20,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "KING",
          "order": 13
        },
        {
          "id": 21,
          "reversed": false,
          "shape": "HEART",
          "value": "6",
          "order": 6
        }
      ],
      "complete": false,
      "type": "tableau",
      "id": 6
    },
    {
      "cards": [
        {
          "id": 22,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "10",
          "order": 10
        },
        {
          "id": 23,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "2",
          "order": 2
        },
        {
          "id": 24,
          "reversed": true,
          "shape": "HEART",
          "value": "9",
          "order": 9
        },
        {
          "id": 25,
          "reversed": true,
          "shape": "HEART",
          "value": "4",
          "order": 4
        },
        {
          "id": 26,
          "reversed": true,
          "shape": "CLUB",
          "value": "8",
          "order": 8
        },
        {
          "id": 27,
          "reversed": true,
          "shape": "CLUB",
          "value": "10",
          "order": 10
        },
        {
          "id": 28,
          "reversed": false,
          "shape": "HEART",
          "value": "2",
          "order": 2
        }
      ],
      "complete": false,
      "type": "tableau",
      "id": 7
    },
    {
      "cards": [],
      "complete": false,
      "type": "foundation",
      "id": 11
    },
    {
      "cards": [],
      "complete": false,
      "type": "foundation",
      "id": 12
    },
    {
      "cards": [],
      "complete": false,
      "type": "foundation",
      "id": 13
    },
    {
      "cards": [],
      "complete": false,
      "type": "foundation",
      "id": 14
    },
    {
      "cards": [
        {
          "id": 37,
          "reversed": true,
          "shape": "CLUB",
          "value": "ACE",
          "order": 1
        },
        {
          "id": 38,
          "reversed": true,
          "shape": "CLUB",
          "value": "9",
          "order": 9,
          "order": 9
        },
        {
          "id": 39,
          "reversed": true,
          "shape": "DIAMOND",
          "value": "6",
          "order": 6
        },
        {
          "id": 30,
          "reversed": false,
          "shape": "DIAMOND",
          "value": "10",
          "order": 10
        }
      ],
      "complete": false,
      "type": "stock",
      "id": STOCK_COLUMN_ID
    },
    {
      "cards": [],
      "complete": false,
      "type": "waste",
      "id": WASTE_COLUMN_ID
    },

  ]
};

const reverseLastCard = (column) => {
  if (column.length > 0) {
    let lastCard = column[column.length - 1];
    if (lastCard.reversed) {
      lastCard.reversed = false;
    }
  }
}

const isFoundation = (state, columnId) => {
  const column = getColumn(state, columnId)
  return column.type === "foundation";
}

const getColumn = (state, columnId) => {
  return state.game.columns.filter(c => c.id === columnId)[0]
}

const addToWaste = (state) => {
  const wasteColumn = getColumn(state, WASTE_COLUMN_ID);
  const stockColumn = getColumn(state, STOCK_COLUMN_ID);
  const cardToMove = stockColumn.cards[stockColumn.cards.length - 1];
  wasteColumn.cards.push(cardToMove);
  stockColumn.cards.pop();
  if (stockColumn.cards.length > 0) {
    stockColumn.cards[stockColumn.cards.length - 1].reversed = false;
  }

}

const addToColumn = (state, targetColumnId, cards) => {

  const targetColumn = getColumn(state, targetColumnId);

  if (isFoundation(state, targetColumnId)) {
    if (canItFollowOnFoundation(targetColumn.cards, cards) || targetColumn.cards.length === 0) {
      const newColumnState = removeFromColumn(state.game.columns, cards);
      newColumnState.forEach(c => {
        if (c.id === targetColumnId) {
          cards.forEach(cardToAdd => {
            c.cards.push(cardToAdd);
          });
        }
        reverseLastCard(c.cards);
      })
      state.game.columns = newColumnState;
    }
  } else {
    if (canItFollow(targetColumn.cards, cards) || targetColumn.cards.length === 0) {
      const newColumnState = removeFromColumn(state.game.columns, cards);
      newColumnState.forEach(c => {
        if (c.id === targetColumnId) {
          cards.forEach(cardToAdd => {
            c.cards.push(cardToAdd);
          });
        }
        reverseLastCard(c.cards);
      })
      state.game.columns = newColumnState;
    }
  }
}

const removeFromColumn = (previousColumns, cardsToRemove) => {
  const prev = [...previousColumns];
  const cardIdsToRemove = cardsToRemove.map(c => c.id);
  const newColumns = [];
  prev.forEach(c => {
    let newColumn = c.cards.filter(card => !cardIdsToRemove.includes(card.id));
    newColumns.push({ ...c, cards: newColumn });
  });
  return newColumns;
}

const getSourceColumn = (columns, cards) => {
  columns.forEach(c => {
    let foundCards = c.cards.filter(card => cards.includes(card));
    if (foundCards.length != 0) {
      return c.id;
    }
  });
}

export const solitareSlice = createSlice({
  name: 'Solitare',
  initialState: {
    game: game,
    draggedCards: []
  },
  reducers: {
    startDrag: (state, action) => {
      state.draggedCards = action.payload;
    },

    move: (state, action) => {
      addToColumn(state, action.payload.targetColumnId, action.payload.cards);
      state.draggedCards = [];
    },

    moveToWaste: (state, action) => {
      addToWaste(state);
      state.draggedCards = [];
    },

    wasteToStock: (state) => {
      const stock = getColumn(state, STOCK_COLUMN_ID);
      const waste = getColumn(state, WASTE_COLUMN_ID);

      stock.cards = waste.cards;
      stock.cards.slice(0, -1).map(c => c.reversed = true);
      waste.cards = []
    }
  }
})

export const { move, startDrag, moveToWaste, wasteToStock } = solitareSlice.actions

export default solitareSlice.reducer