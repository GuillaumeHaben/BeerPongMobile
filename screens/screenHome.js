import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Button, Text} from 'native-base';

function screenHome({ navigation }) {
    return (
      <View style={styles.container}>
        <Button block info
          onPress={() => {navigation.navigate('Game')}}>
          <Text>Start a Game</Text>
        </Button>
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

export default screenHome;