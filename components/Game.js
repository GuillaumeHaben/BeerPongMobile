import React, { useState } from 'react';
import { Button, Text, Container} from 'native-base';

function Game() {

    const [counterHit, updateCounterHit] = useState(0);
    const [counterMiss, updateCounterMiss] = useState(0);

    function resetCounters(){
        updateCounterHit(0);
        updateCounterMiss(0);
    }
  
    return (
      <Container>
        <Button block success
          onPress={() => {
            updateCounterHit(counterHit+1);
          }}>
          <Text>HIT</Text>
        </Button>
        <Button block danger
          onPress={() => {
            updateCounterMiss(counterMiss+1);
          }}>
          <Text>MISS</Text>
        </Button>

        <Text>Hit = {counterHit} | Miss = {counterMiss}</Text>
        <Text>Total = {counterHit + counterMiss}</Text>
        <Text>{(isNaN(counterHit/(counterHit+counterMiss))) ? 0 : Math.floor(counterHit/(counterHit+counterMiss)*100)}% success</Text>

        <Button block
          onPress={() => {resetCounters()}}>
          <Text>RESET</Text>
        </Button>
      </Container>
    );
    
}

export default Game;