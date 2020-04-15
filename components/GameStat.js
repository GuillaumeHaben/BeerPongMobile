import React from 'react';
import { Text} from 'native-base';
import { StyleSheet, View, Dimensions} from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { successRate, getGameLastScore } from "../utils/toolsGame.js";

function GameStat({ game }) {

    const gameHit =  getGameLastScore(game).hit;
    const gameMiss =  getGameLastScore(game).miss; 

    // Chart config
    const chartConfig = { color: (opacity = 1) => `rgba(44, 62, 80, ${opacity})` };
    let rateOverTime = []
    for(var i = 1; i < game.history.length; i += 2) {
      rateOverTime.push(successRate(game.history[i].hit, game.history[i].miss));
    }
    const data = {
      datasets: [
        {
          data: rateOverTime,
          color: () => `rgb(231, 76, 60, 0.8)`,
        }
      ]
    };
    const screenWidth = Dimensions.get("window").width;

    return (
      game ? 
      <View>
        <Text>Result : { game.status==1 ? "Win" : "Loose" } </Text>
        <Text>{ gameHit } HIT</Text>
        <Text>{ gameMiss } Miss</Text>
        <Text>{ gameHit + gameMiss } shots</Text>
        <Text>{ successRate(gameHit, gameMiss) }%{'\n'}success</Text>
        {rateOverTime.length > 0 &&
        <LineChart
          data={data}
          width={screenWidth}
          height={256}
          formatYLabel={(value) => {return parseInt(value)}}
          verticalLabelRotation={30}
          chartConfig={chartConfig}
          fromZero={true}
          bezier
          withDots={false}
          style={{marginLeft:-30}}
        />}
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