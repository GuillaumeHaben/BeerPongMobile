import React from 'react';
import { StyleSheet, View} from 'react-native';
import Game from '../components/Game';

function screenGame({ route }) {
  
  const { id } = route.params;

  return (
    <View style={ styles.game }>
      <Game id={ id }></Game>
    </View>
  );
}

const styles = StyleSheet.create({
    game: {
        flex: 1,
        padding:25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
});

  export default screenGame;