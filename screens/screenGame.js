import React from 'react';
import { StyleSheet, View} from 'react-native';
import Game from '../components/Game';

function screenGame() {


  return (
    <View style={styles.container}>
      <Game></Game>
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