import { createSlice } from '@reduxjs/toolkit'

const game = {
  "columns": [
    {
      "cards": [
        {
          "id": 1,
          "reversed": false,
          "shape": "CLUB",
          "value": "KING",
          "order": 13
        }
      ],
      "complete": false,
      "empty": false,
      "id": 1
    },
    {
      "cards": [
        {
          "id": 2,
          "reversed": true,
          "shape": "HEART",
          "value": "8",
          "order": 8
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
      "empty": false,
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
      "empty": false,
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
      "empty": false,
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
      "empty": false,
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
      "empty": false,
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
          "shape": "SPADE",
          "value": "9",
          "order": 9
        }
      ],
      "complete": false,
      "empty": false,
      "id": 7
    },
    {
      "cards": [],
      "complete": false,
      "empty": false,
      "id": 11
    },
    {
      "cards": [],
      "complete": false,
      "empty": false,
      "id": 12
    },
    {
      "cards": [],
      "complete": false,
      "empty": false,
      "id": 13
    },
    {
      "cards": [],
      "complete": false,
      "empty": false,
      "id": 14
    }
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

const addToColumn = (state, targetColumnId, cards) => {
  console.log('Adding ' + JSON.stringify(cards) + ' to ' + targetColumnId);
  const previousColumns = state.game.columns;

  const previous = removeFromColumn(previousColumns, cards);
  previous.forEach(c => {
    if (c.id === targetColumnId) {
      cards.forEach(cardToAdd => {
        c.cards.push(cardToAdd);
      });
    }
    reverseLastCard(c.cards);
  })
  state.game.columns = previous;
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
    }
  }
})

export const { move, startDrag } = solitareSlice.actions

export default solitareSlice.reducer