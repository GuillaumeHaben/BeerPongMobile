import React, { useReducer, useEffect } from 'react';
import { Button, Text, Container} from 'native-base';
import { initialState, reducer } from "../reducers/Main.js";

function Game({ id }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    console.log(state.games)

    function getGame(games, id) {
      return games.find((game) => game.id === id)
    }

    const game = getGame(state.games, id);

    return (
      <Container>
      <Text>Game ID = { game.id }</Text>
        <Button block success
          onPress={() => { dispatch({type: "UPDATE_GAME_INCREMENT", id: game.id, counter:"Hit"}) }}>
          <Text>HIT</Text>
        </Button>
        <Button block danger
          onPress={() => { dispatch({type: "UPDATE_GAME_INCREMENT", id: game.id, counter:"Miss"}) }}>
          <Text>MISS</Text>
        </Button>

        <Text>Hit = { game.counterHit } | Miss = { game.counterMiss }</Text>
        <Text>Total = { game.counterHit + game.counterMiss}</Text>
        <Text>{isNaN(game.counterHit / game.counterHit + game.counterMiss) ? 0 : Math.floor(game.counterHit / game.counterHit + game.counterMiss) * 100 }% success</Text>

        <Button block disabled
          onPress={() => {resetCounters()}}>
          <Text>RESET</Text>
        </Button>
      </Container>
    );
    
}

export default Game;