import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const RocketIcon = <Icon name="rocket" size={20} />;

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string
};

const TabIcon = props => {
  return (
    <Text style={{ color: props.focused ? "red" : "black" }}>
      {props.title}
    </Text>
  );
};

TabIcon.propTypes = propTypes;

export default TabIcon;
