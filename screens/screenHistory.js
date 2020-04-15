import React, { useContext } from 'react';
import { StyleSheet, View, Alert} from 'react-native';
import { Button, Body, List, ListItem, Text, Container, Content, Left, Right, Thumbnail, } from 'native-base';
import { Context } from "../context/MyContext.js";
import { successRate, getGameLastScore } from "../utils/toolsGame.js";
import moment from 'moment';

function screenHistory({ navigation }) {

  const [state, dispatch] = useContext(Context);
  const DeleteAlert = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete all games?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => dispatch({type: "DELETE_GAMES"})}
      ],
      {cancelable: false},
    );
  };

  return (
    state.games.length != 0 ? 
    <Container>
         <Button full danger
           onPress={ DeleteAlert }>
           <Text>Delete All Games</Text>
         </Button>
        <Content>
          <List>
            { state.games.map(game => (
            <ListItem thumbnail key={ game.id } onPress={() => { navigation.navigate('Game', { id: game.id }) }}>
              <Left>
                <Thumbnail square source={ require("../assets/redCup.png") } />
              </Left>
              <Body>
                <Text>Game { game.id }</Text>
                <Text note numberOfLines={1}>Success rate: { successRate(getGameLastScore(game).hit, getGameLastScore(game).miss) }%</Text>
                <Text note numberOfLines={1}>{game.status == 1 ? "Win" : (game.status == 0 ? "Loose" : "Pending") }</Text>
              </Body>
              <Right>
                <Text note>{ moment(game.date).format('L') }</Text>
              </Right>
            </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    :
    <View style={styles.history}>
      <Text>No game so far...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  history: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default screenHistory;