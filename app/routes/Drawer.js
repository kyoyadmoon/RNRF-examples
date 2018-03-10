import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Router, Stack, Scene, Drawer } from "react-native-router-flux";
import TabIcon from "../components/TabIcon";
import TabHome from "../screens/TabHome";
import About from "../screens/About";
import DrawerContent from "../components/drawer/DrawerContent";
import Icon from "react-native-vector-icons/SimpleLineIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  tabBarStyle: {
    backgroundColor: "#eee"
  },
  tabBarSelectedItemStyle: {
    backgroundColor: "#ddd"
  },
  titleStyle: {
    color: "white"
  }
});

const DrawerIcon = <Icon name="menu" color="blue" size={20} />;

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" navigationBarStyle={{ backgroundColor: "skyblue" }}>
          <Drawer
            hideNavBar
            key="drawer"
            contentComponent={DrawerContent}
            drawerIcon={DrawerIcon}
            drawerWidth={300}
          >
            <Stack
              key="tab1"
              titleStyle={styles.titleStyle}
              title="Tab #1"
              keyPrefix="tab1"
            >
              <Scene key="tab1_home" component={TabHome} />
              <Scene key="tab1_about" component={About} title="tab1_about" />
            </Stack>
            <Stack
              key="tab2"
              titleStyle={styles.titleStyle}
              title="Tab #2"
              keyPrefix="tab2"
            >
              <Scene key="tab2_home" component={TabHome} />
              <Scene key="tab2_about" component={About} title="tab2_about" />
            </Stack>
            <Stack
              key="tab3"
              title="Tab #3"
              keyPrefix="tab3"
              navigationBarStyle={{ backgroundColor: "pink" }}
              titleStyle={styles.titleStyle}
            >
              <Scene key="tab3_home" component={TabHome} />
              <Scene key="tab3_about" component={About} title="tab3_about" />
            </Stack>
          </Drawer>
        </Stack>
      </Router>
    );
  }
}
