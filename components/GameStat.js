import React, { useContext } from 'react';
import { Button, Icon, Text} from 'native-base';
import { StyleSheet, View} from 'react-native';
import { Context } from "../context/MyContext.js"

function GameStat({ game }) {

    const [state, dispatch] = useContext(Context);

     /**
     * Return successRate of the current game
     * @param {*} hit Number of hit
     * @param {*} miss Number of miss
     * return a percentage
     */
    function successRate(hit, miss) {
      if (hit == 0 && miss == 0) return 0;
      return Math.floor(100 * hit / (hit + miss));
    }

    return (
      game ? 
      <View>
        <View>
            <Text>Result : { game.status==1 ? "Win" : "Loose" } </Text>
        </View>

         <View style={styles.buttonRow}>
            <Text style={styles.textScore}>{ game.counterHit } HIT</Text>
        </View>

        <View style={styles.buttonRow}>
            <Text style={styles.textScore}>{ game.counterMiss } MISS</Text>
        </View>

        <View style={styles.totalInfoRow}>
          <Text>{ game.counterHit + game.counterMiss} shots</Text>
        </View>

        <View style={styles.buttonRow}>
          <Text style={styles.textScore}>{ successRate(game.counterHit, game.counterMiss) }%{'\n'}success</Text>
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