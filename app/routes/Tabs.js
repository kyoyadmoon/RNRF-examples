import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Router, Stack, Scene, Tabs } from "react-native-router-flux";
import TabIcon from "../components/TabIcon";
import TabsHome from "../screens/TabsHome";
import About from "../screens/About";

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

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" navigationBarStyle={{ backgroundColor: "skyblue" }}>
          <Tabs
            hideNavBar
            key="tabbar"
            swipeEnabled
            showLabel={false}
            tabBarStyle={styles.tabBarStyle}
            activeBackgroundColor="rgba(0,100,250,.2)"
            inactiveBackgroundColor="white"
          >
            <Stack
              key="tab1"
              title="Tab #1"
              tabBarLabel="TAB #1"
              inactiveBackgroundColor="#FFF"
              activeBackgroundColor="#DDD"
              icon={TabIcon}
              titleStyle={{ color: "white", alignSelf: "center" }}
              keyPrefix="tab1"
            >
              <Scene key="tab1_home" component={TabsHome} />
              <Scene key="tab1_about" component={About} title="tab1_about"/>
            </Stack>
            <Stack
              key="tab2"
              title="Tab #2"
              tabBarLabel="TAB #1"
              inactiveBackgroundColor="#FFF"
              activeBackgroundColor="#DDD"
              icon={TabIcon}
              titleStyle={{ color: "white", alignSelf: "center" }}
              keyPrefix="tab2"
            >
              <Scene key="tab2_home" component={TabsHome} />
              <Scene key="tab2_about" component={About} title="tab2_about" />
            </Stack>
            <Stack
              key="tab3"
              title="Tab #3"
              tabBarLabel="TAB #1"
              inactiveBackgroundColor="#FFF"
              activeBackgroundColor="#DDD"
              icon={TabIcon}
              titleStyle={{ color: "white", alignSelf: "center" }}
              keyPrefix="tab3"
            >
              <Scene key="tab3_home" component={TabsHome} />
              <Scene key="tab3_about" component={About}  title="tab3_about" />
            </Stack>
          </Tabs>
        </Stack>
      </Router>
    );
  }
}