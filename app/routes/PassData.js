import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { Router, Stack, Scene, Actions } from "react-native-router-flux";
import Home from "../screens/Home";
import About from "../screens/About";

class FromScreen extends Component {
  render() {
    return (
      <Button
        onPress={() => {
          Actions.target({ something: "123" });
        }}
        title="Go To Target"
      />
    );
  }
}

class TargetScreen extends Component {
  render() {
    return <Text style={{ alignSelf: "center" }}>{this.props.something}</Text>;
  }
}

export default class PassData extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="from" component={FromScreen} title="From" />
          <Scene key="target" component={TargetScreen} title="Target" />
        </Stack>
      </Router>
    );
  }
}
