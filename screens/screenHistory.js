import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Text} from 'native-base';

function screenHistory() {

  return (
    <View style={styles.history}>
      <Text>This is History</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    history: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'powderblue',
    },
});

export default screenHistory;