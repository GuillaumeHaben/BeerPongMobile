export const initialState = {
    games: [],
    profile: []
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_GAME":
        {
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
      case "DELETE_GAME":
        {
          const games = Object.assign([], state.games);
          games.splice(-1,1);
          return { ...state,
            games: games,
          };
        }
      default:
        return state;
    }
  };