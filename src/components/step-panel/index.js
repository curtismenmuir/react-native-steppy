import React, { PureComponent } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

export default class StepPanel extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
  };

  static defaultProps = {
    color: "#000000",
    height: 200,
    width: 200,
    radius: 100,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          height: this.props.height,
          width: this.props.width,
        }}
      >
        <View
          style={{
            backgroundColor: this.props.color,
            height: this.props.height,
            width: this.props.width,
            borderRadius: this.props.radius,
          }}
        />
      </View>
    );
  }
}
