import { createSlice } from '@reduxjs/toolkit';
import { STOCK_COLUMN_ID, WASTE_COLUMN_ID } from './helpers/columnIds';
import { canItFollow, canItFollowOnFoundation } from './helpers/draghelper';

const game = {
  "columns": []
}

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
  cardToMove.reversed = false;
  wasteColumn.cards.push(cardToMove);
  stockColumn.cards.pop();
}

const addToColumn = (state, targetColumnId, cards) => {
  const targetColumn = getColumn(state, targetColumnId);
  const sourceColumn = getSourceColumn(state.game.columns, cards);
  if (isFoundation(state, targetColumnId)) {
    addToColumnConditionally(sourceColumn, targetColumn, cards, canItFollowOnFoundation);
  } else {
    addToColumnConditionally(sourceColumn, targetColumn, cards, canItFollow);
  }
}

const addToColumnConditionally = (sourceColumn, targetColumn, cards, condition) => {
  if (condition(targetColumn.cards, cards)) {
    removeFromColumn(sourceColumn, cards);
    cards.forEach(cardToAdd => {
      targetColumn.cards.push(cardToAdd);
    });
    reverseLastCard(sourceColumn.cards);
  }
}

const removeFromColumn = (column, cardsToRemove) => {
  const cardIdsToRemove = cardsToRemove.map(c => c.id);
  const filteredCards = column.cards.filter(c => !cardIdsToRemove.includes(c.id));
  column.cards = filteredCards;
}

const getSourceColumn = (columns, cards) => {
  var sourceColumn;
  columns.forEach(column => {
    if (column.cards.filter(c => c.id == cards[0].id).length > 0) {
      sourceColumn = column;
    }
  });
  return sourceColumn;
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
    },  

    loadColumns: (state, action) => {
      console.log(action);
      state.game.columns = action.payload.data;
    }
  }
})

export const { move, startDrag, moveToWaste, wasteToStock, loadColumns } = solitareSlice.actions

export default solitareSlice.reducer

// export function deal() {
//   return async function callDealApi(dispatch, getState) {
//     const response = await fetch(`http://localhost:8080/api/deal`, { method: 'POST' })
//       .then(response => response.json())
//       .then((data) => {
//         dispatch(loadColumns({ data: data }))
//       });

//   }
// }