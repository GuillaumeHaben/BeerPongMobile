import React, { useContext } from 'react';
import { StyleSheet, View} from 'react-native';
import { Button, Text} from 'native-base';
import { Context } from "../context/MyContext.js"

function screenHome({ navigation }) {

  const [state, dispatch] = useContext(Context);

  return (
    <View style={styles.home}>
      <Button style={styles.button} block info
        onPress={() => { navigation.navigate('Game', { id: state.games.length }) }}>
        <Text style={styles.text}>Start a Game</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    home: {
      flex: 1,
      padding: 25,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    button: {
      height: '10%',
      justifyContent: 'center',
    },
    text: {
      fontSize: 20,
      color: 'white',
      justifyContent: 'center',
    },
  });

export default screenHome;