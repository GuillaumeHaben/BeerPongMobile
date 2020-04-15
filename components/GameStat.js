import React from 'react';
import { Text} from 'native-base';
import { StyleSheet, View} from 'react-native';
import { successRate, getGameLastScore } from "../utils/toolsGame.js";

function GameStat({ game }) {

    const gameHit =  getGameLastScore(game).hit;
    const gameMiss =  getGameLastScore(game).miss; 

    return (
      game ? 
      <View>
        <View>
            <Text>Result : { game.status==1 ? "Win" : "Loose" } </Text>
        </View>
         <View style={styles.buttonRow}>
            <Text style={styles.textScore}>{ gameHit } HIT</Text>
        </View>
        <View style={styles.buttonRow}>
            <Text style={styles.textScore}>{ gameMiss } MISS</Text>
        </View>
        <View style={styles.totalInfoRow}>
          <Text>{ gameHit + gameMiss } shots</Text>
        </View>
        <View style={styles.buttonRow}>
          <Text style={styles.textScore}>{ successRate(gameHit, gameMiss) }%{'\n'}success</Text>
        </View>
      </View> : <Text>Loading ...</Text>
    );
    
}

const styles = StyleSheet.create({
  buttonRow:{
    flex: 1,
    borderRadius: 5,
    borderColor:'silver',
    borderWidth:0.5,
    //marginHorizontal:10,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  totalInfoRow:{
    flex:1,
    borderRadius: 5,
    borderColor:'silver',
    borderWidth:0.5,
    //marginHorizontal:10,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  bottomInfoRow:{
    flex:1,
    borderRadius: 5,
    borderWidth:0.5,
    borderColor:'silver',
    margin:10,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  textScore:{
    textAlign:'center',
  }

});

export default GameStat;