import React, { Component } from "react";
import { Text, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";

import BasicRoutes from "./routes/BasicRoutes";
import PassData from './routes/PassData';
import Tabs from "./routes/Tabs";
import Drawer from "./routes/Drawer";

export default class Routes extends Component {
  render() {
    return <BasicRoutes />;
  }
}
