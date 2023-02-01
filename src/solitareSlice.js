import { createSlice } from '@reduxjs/toolkit';
import { STOCK_COLUMN_ID, WASTE_COLUMN_ID } from './helpers/columnIds';
import { canItFollow, canItFollowOnFoundation } from './helpers/draghelper';

const game = {
  "columns": [{"id":1,"type":"tableau","cards":[{"id":4,"reversed":false,"shape":"HEART","value":"4","order":3}]},{"id":2,"type":"tableau","cards":[{"id":32,"reversed":true,"shape":"CLUB","value":"6","order":5},{"id":29,"reversed":false,"shape":"CLUB","value":"3","order":2}]},{"id":3,"type":"tableau","cards":[{"id":21,"reversed":true,"shape":"DIAMOND","value":"8","order":7},{"id":6,"reversed":true,"shape":"HEART","value":"6","order":5},{"id":37,"reversed":false,"shape":"CLUB","value":"JACK","order":10}]},{"id":4,"type":"tableau","cards":[{"id":14,"reversed":true,"shape":"DIAMOND","value":"ACE","order":0},{"id":24,"reversed":true,"shape":"DIAMOND","value":"JACK","order":10},{"id":3,"reversed":true,"shape":"HEART","value":"3","order":2},{"id":33,"reversed":false,"shape":"CLUB","value":"7","order":6}]},{"id":5,"type":"tableau","cards":[{"id":36,"reversed":true,"shape":"CLUB","value":"10","order":9},{"id":13,"reversed":true,"shape":"HEART","value":"KING","order":12},{"id":49,"reversed":true,"shape":"SPADE","value":"10","order":9},{"id":35,"reversed":true,"shape":"CLUB","value":"9","order":8},{"id":40,"reversed":false,"shape":"SPADE","value":"ACE","order":0}]},{"id":6,"type":"tableau","cards":[{"id":42,"reversed":true,"shape":"SPADE","value":"3","order":2},{"id":47,"reversed":true,"shape":"SPADE","value":"8","order":7},{"id":10,"reversed":true,"shape":"HEART","value":"10","order":9},{"id":15,"reversed":true,"shape":"DIAMOND","value":"2","order":1},{"id":16,"reversed":true,"shape":"DIAMOND","value":"3","order":2},{"id":31,"reversed":false,"shape":"CLUB","value":"5","order":4}]},{"id":7,"type":"tableau","cards":[{"id":44,"reversed":true,"shape":"SPADE","value":"5","order":4},{"id":45,"reversed":true,"shape":"SPADE","value":"6","order":5},{"id":7,"reversed":true,"shape":"HEART","value":"7","order":6},{"id":8,"reversed":true,"shape":"HEART","value":"8","order":7},{"id":11,"reversed":true,"shape":"HEART","value":"JACK","order":10},{"id":25,"reversed":true,"shape":"DIAMOND","value":"QUEEN","order":11},{"id":50,"reversed":false,"shape":"SPADE","value":"JACK","order":10}]},{"id":11,"type":"foundation","cards":[]},{"id":12,"type":"foundation","cards":[]},{"id":13,"type":"foundation","cards":[]},{"id":14,"type":"foundation","cards":[]},{"id":15,"type":"stock","cards":[{"id":41,"reversed":true,"shape":"SPADE","value":"2","order":1},{"id":20,"reversed":true,"shape":"DIAMOND","value":"7","order":6},{"id":39,"reversed":true,"shape":"CLUB","value":"KING","order":12},{"id":34,"reversed":true,"shape":"CLUB","value":"8","order":7},{"id":1,"reversed":true,"shape":"HEART","value":"ACE","order":0},{"id":18,"reversed":true,"shape":"DIAMOND","value":"5","order":4},{"id":51,"reversed":true,"shape":"SPADE","value":"QUEEN","order":11},{"id":26,"reversed":true,"shape":"DIAMOND","value":"KING","order":12},{"id":5,"reversed":true,"shape":"HEART","value":"5","order":4},{"id":48,"reversed":true,"shape":"SPADE","value":"9","order":8},{"id":38,"reversed":true,"shape":"CLUB","value":"QUEEN","order":11},{"id":2,"reversed":true,"shape":"HEART","value":"2","order":1},{"id":22,"reversed":true,"shape":"DIAMOND","value":"9","order":8},{"id":46,"reversed":true,"shape":"SPADE","value":"7","order":6},{"id":19,"reversed":true,"shape":"DIAMOND","value":"6","order":5},{"id":23,"reversed":true,"shape":"DIAMOND","value":"10","order":9},{"id":9,"reversed":true,"shape":"HEART","value":"9","order":8},{"id":52,"reversed":true,"shape":"SPADE","value":"KING","order":12},{"id":30,"reversed":true,"shape":"CLUB","value":"4","order":3},{"id":17,"reversed":true,"shape":"DIAMOND","value":"4","order":3},{"id":43,"reversed":true,"shape":"SPADE","value":"4","order":3},{"id":12,"reversed":true,"shape":"HEART","value":"QUEEN","order":11},{"id":28,"reversed":true,"shape":"CLUB","value":"2","order":1},{"id":27,"reversed":true,"shape":"CLUB","value":"ACE","order":0}]},{"id":16,"type":"waste","cards":[]}]
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
    }
  }
})

export const { move, startDrag, moveToWaste, wasteToStock } = solitareSlice.actions

export default solitareSlice.reducer