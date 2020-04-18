import React, { PureComponent } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../../themes";

export default class StepPanel extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    currentStep: PropTypes.bool.isRequired,
    inactiveStep: PropTypes.bool.isRequired,
    failedStep: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    color: Colors.charcoalGrey,
    height: 200,
    width: 200,
    radius: 100,
    currentStep: false,
    inactiveStep: true,
    failedStep: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    var stepColor = this.props.color;
    if (this.props.currentStep) {
      stepColor = Colors.snow;
    } else if (this.props.inactiveStep) {
      stepColor = Colors.charcoalGrey;
    } else if (this.props.failedStep) {
      stepColor = Colors.red;
    }
    return (
      <View
        style={{
          height: this.props.height,
          width: this.props.width,
        }}
      >
        <View
          style={{
            backgroundColor: stepColor,
            height: this.props.height,
            width: this.props.width,
            borderRadius: this.props.radius,
          }}
        />
      </View>
    );
  }
}
