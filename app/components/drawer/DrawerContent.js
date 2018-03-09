import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Button, Text, View, ViewPropTypes } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red',
  },
});

class DrawerContent extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string,
  }

  static contextTypes = {
    drawer: PropTypes.object,
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Drawer Content</Text>
        <Button onPress={Actions.closeDrawer}>Back</Button> */}
        <Text>Title: {this.props.title}</Text>
        {this.props.name === 'tab_1_1' &&
          <Button onPress={Actions.tab_1_2}>next screen for tab1_1</Button>
        }
        {this.props.name === 'tab_2_1' &&
          <Button onPress={Actions.tab_2_2}>next screen for tab2_1</Button>
        }
        <Button onPress={Actions.pop} title="Back" />
        <Button onPress={Actions.tab1} title="Tab1" />
        <Button onPress={Actions.tab2} title="Tab2" />
        <Button onPress={Actions.tab3} title="Tab3" />
      </View >
    );
  }
}

export default DrawerContent;
