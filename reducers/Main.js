export const initialState = {
    games: []
  };
  
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_GAME": {
      const newId = parseInt(state.games.length)
      const newGame = {
        id: newId,
        counterHit: 0,
        counterMiss: 0
      };
      return { ...state,
        games: [...state.games, newGame],
      };
    }
    case "UPDATE_GAME_INCREMENT": {
      /**
       * action.id: Game id to modify
       * action.counter: Counter to increment, "Hit" or "Miss"
       */
      const gamesCopy = state.games.map((game) => {
        if (game.id === action.id) {
          if (action.counter == "Hit") {
            game.counterHit = game.counterHit + 1;
          }
          if (action.counter == "Miss") {
            game.counterMiss = game.counterMiss + 1;
          }
        }
        return game
      });
      return { ...state,
        games: gamesCopy,
      };
    }
    case "DELETE_GAMES": {
      return { games: [] }
    }
    case "DELETE_GAME": {
      /**
       * action.id: Game id to delete
       */
      const gamesCopy = state.games.filter( game => game.id !== action.id);
      return { ...state,
        games: gamesCopy,
      };
    }
    default:
      return state;
  }
};