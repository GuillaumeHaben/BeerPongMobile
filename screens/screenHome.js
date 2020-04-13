import React, { useContext } from 'react';
import { StyleSheet, View} from 'react-native';
import { Button, Text} from 'native-base';
import { Context } from "../context/MyContext.js"

function screenHome({ navigation }) {

  const [state, dispatch] = useContext(Context);

  return (
    <View style={styles.home}>
      <Button block info
        onPress={() => { navigation.navigate('Game', { id: state.games.length }) }}>
        <Text>Start a Game</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default screenHome;