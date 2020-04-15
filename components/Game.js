import React, { useContext } from 'react';
import { Button, Icon, Text} from 'native-base';
import { StyleSheet, View, Alert} from 'react-native';
import { Context } from "../context/MyContext.js";
import { useNavigation } from '@react-navigation/native';
import { successRate, getGameLastScore } from "../utils/toolsGame.js";

function Game({ game }) {

    const [state, dispatch] = useContext(Context);
    const navigation = useNavigation();
    const gameHit =  getGameLastScore(game).hit;
    const gameMiss =  getGameLastScore(game).miss; 

    const GameEndAlert = (gameId) => {
      Alert.alert(
        'Confirmation',
        'So, what\'s the result ?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {text: 'Win', onPress: () => { dispatch({type: "FINISH_GAME", id: gameId, status: 1}); navigation.navigate('Game')}},
          {text: 'Loose', onPress: () => { dispatch({type: "FINISH_GAME", id: gameId, status:0}); navigation.navigate('Game')}}
        ],
        {cancelable: false},
      );
    }

    return (
      game ? 
      <View>

         <View style={styles.buttonRow}>
          <Button style={styles.buttonHit} block success
            onPress={() => { dispatch({type: "UPDATE_GAME_INCREMENT", id: game.id, counter:"Hit"}) }}>
            <Text style={styles.textScore}>{ gameHit }{'\n'}HIT</Text>
          </Button>
          <Button transparent
            onPress={() => { dispatch({type: "UPDATE_GAME_DECREMENT", id: game.id, counter:"Hit"}) }}>
            <Icon type='FontAwesome' name='undo' style={{ fontSize: 32 }}/>
          </Button> 
        </View>

        <View style={styles.buttonRow}>
          <Button style={styles.buttonHit} block danger
            onPress={() => { dispatch({type: "UPDATE_GAME_INCREMENT", id: game.id, counter:"Miss"}) }}>
            <Text style={styles.textScore}>{  gameMiss  }{'\n'}MISS</Text>
          </Button>
          <Button transparent 
            onPress={() => { dispatch({type: "UPDATE_GAME_DECREMENT", id: game.id, counter:"Miss"}) }}>
            <Icon type='FontAwesome' name='undo' style={{ fontSize: 32 }}/>
          </Button>
        </View>

        <View style={styles.totalInfoRow}>
          <Text>{ gameHit + gameMiss} shots</Text>
        </View>

        <View style={styles.bottomInfoRow}>
          <Text style={styles.textSucess}>{ successRate(gameHit, gameMiss) }%{'\n'}success</Text>
        </View>

        <View style={styles.buttonRowEnd}>
          <Button style={styles.buttonEnd} block warning
            onPress={() => { GameEndAlert(game.id) }}>
            <Text>END</Text>
          </Button>
        </View>
      </View> : <Text>Loading ...</Text>
    );
    
}

const styles = StyleSheet.create({
  buttonRow:{
    flex: 4,
    width: "100%",
    margin:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  totalInfoRow:{
    flex:1,
    borderRadius: 5,
    borderColor:'silver',
    borderWidth:0.5,
    marginHorizontal:10,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  bottomInfoRow:{
    flex:4,
    borderRadius: 5,
    borderWidth:0.5,
    borderColor:'silver',
    margin:10,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  buttonHit: {
    flex:1,
    height:'100%',
  },
  buttonRowEnd:{
    flex: 1,
    width: "100%",
    marginHorizontal:10,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  buttonEnd: {
    fontSize:30,
    width:'100%',
    fontWeight:'bold',
    textAlign: 'center',
  },
  textScore:{
    fontSize:30,
    fontWeight:'bold',
    textAlign: 'center',
  },
  textSucess:{
    fontSize:30,
    fontWeight:'bold',
    textAlign: 'center',
  },
});

export default Game;