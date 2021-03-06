import moment from "moment";

export const initialState = {
    games: [{
      id: 0,
      history:[
        {
          hit: 0,
          miss: 0
        }
      ],
      date: moment(),
      status:1, //-1 : pending | 0 : lost | 1 : win
    }]
  };
  
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_GAME": {
      const newId = parseInt(state.games.length)
      const newGame = {
        id: newId,
        history:[
          {
            hit: 0,
            miss: 0
          }
        ],
        date: moment(),
        status:-1, //-1 : pending | 0 : lost | 1 : win
      };
      return { ...state,
        games: [...state.games, newGame],
      };
    }
    case "FINISH_GAME":{
      /**
       * action.id: Game id to modify
       * action.status: // 0 if lost | 1 if win
       */
      const gamesCopy = state.games.map((game) => {
        if (game.id === action.id) {
          game.status = action.status;
        }
        return game
      });
      return { ...state,
        games: gamesCopy,
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
            game.history.push({
              hit: game.history[game.history.length - 1].hit + 1,
              miss: game.history[game.history.length - 1].miss
            });
          }
          if (action.counter == "Miss") {
            game.history.push({
              hit: game.history[game.history.length - 1].hit,
              miss: game.history[game.history.length - 1].miss + 1
            });
          }
        }
        return game
      });
      return { ...state,
        games: gamesCopy,
      };
    }
    case "UPDATE_GAME_DECREMENT": {
      /**
       * action.id: Game id to modify
       * action.counter: Counter to decrement, "Hit" or "Miss"
       */
      const gamesCopy = state.games.map((game) => {
        if (game.id === action.id) {
          game.history.pop();
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