import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { Button, Text} from 'native-base';

function screenGame() {

    const [counterHit, updateCounterHit] = useState(0);
    const [counterMiss, updateCounterMiss] = useState(0);

    function resetCounters(){
        updateCounterHit(0);
        updateCounterMiss(0);
    }
  
    return (
      <View style={styles.container}>
       <Button full success
          onPress={() => {
            updateCounterHit(counterHit+1);
          }}>
          <Text>HIT</Text>
        </Button>
        <Button full danger
          onPress={() => {
            updateCounterMiss(counterMiss+1);
          }}>
          <Text>MISS</Text>
        </Button>

        <Text>Hit = {counterHit} | Miss = {counterMiss}</Text>
        <Text>Total = {counterHit + counterMiss}</Text>
        <Text>{(isNaN(counterHit/(counterHit+counterMiss))) ? 0 : Math.floor(counterHit/(counterHit+counterMiss)*100)}% success</Text>

        <Button full
          onPress={() => {resetCounters()}}>
          <Text>RESET</Text>
        </Button>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

  export default screenGame;