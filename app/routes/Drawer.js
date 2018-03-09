import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Router, Stack, Scene, Tabs, Drawer } from "react-native-router-flux";
import TabIcon from "../components/TabIcon";
import Home from "../screens/Home";
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
            // drawerImage={MenuIcon}
            drawerIcon={DrawerIcon}
            drawerWidth={300}
          >
            <Stack
              key="tab1"
              tabBarLabel="TAB #1"
              inactiveBackgroundColor="#FFF"
              activeBackgroundColor="#DDD"
              icon={TabIcon}
              // navigationBarStyle={{  }}
              titleStyle={{ color: "white", alignSelf: "center" }}
            >
              <Scene key="tab1_home" component={Home} title="Tab1 Home"/>
              <Scene key="about" component={About} title="Tab1 About" test={'testing'}/>
            </Stack>
            <Stack
              key="tab2"
              tabBarLabel="TAB #1"
              inactiveBackgroundColor="#FFF"
              activeBackgroundColor="#DDD"
              icon={TabIcon}
              titleStyle={{ color: "white", alignSelf: "center" }}
            >
              <Scene key="tab2_home" component={Home} title="Tab2 Home"/>
            </Stack>
            <Stack
              key="tab3"
              tabBarLabel="TAB #1"
              inactiveBackgroundColor="#FFF"
              activeBackgroundColor="#DDD"
              icon={TabIcon}
              navigationBarStyle={{ backgroundColor: "pink" }}
              titleStyle={{ color: "white", alignSelf: "center" }}
            >
              <Scene key="tab3_home" component={Home} title="Tab3 Home"/>
            </Stack>
          </Drawer>
        </Stack>
      </Router>
    );
  }
}
