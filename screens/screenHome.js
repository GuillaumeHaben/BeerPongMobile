import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Button, Text} from 'native-base';

function screenHome({ navigation }) {
    return (
      <View style={styles.home}>
        <Button block info
          onPress={() => {navigation.navigate('Game')}}>
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