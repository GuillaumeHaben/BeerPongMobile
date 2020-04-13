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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

  export default screenGame;