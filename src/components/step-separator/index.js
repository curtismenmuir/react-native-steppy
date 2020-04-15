import React, { PureComponent } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { getSizeMultiplication } from "../../services";

export default class StepSeparator extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  };

  static defaultProps = {
    color: "#000000",
    height: 200,
    width: 200,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const topPadding = getSizeMultiplication(this.props.height, 0.45);
    const centerPanel = getSizeMultiplication(this.props.height, 0.1);
    const separatorSize = getSizeMultiplication(this.props.width, 0.2);
    const rowPadding = getSizeMultiplication(this.props.width, 0.1);
    return (
      <View
        style={{
          height: this.props.height,
          width: this.props.width,
        }}
      >
        <View style={{ height: topPadding }} />
        <View
          style={{
            height: centerPanel,
            flexDirection: "row",
          }}
        >
          <View style={{ width: rowPadding }} />
          <View
            style={{ width: separatorSize, backgroundColor: this.props.color }}
          />
          <View style={{ width: rowPadding }} />
          <View
            style={{ width: separatorSize, backgroundColor: this.props.color }}
          />
          <View style={{ width: rowPadding }} />
          <View
            style={{ width: separatorSize, backgroundColor: this.props.color }}
          />
          <View style={{ width: rowPadding }} />
        </View>
        <View style={{ height: topPadding }} />
      </View>
    );
  }
}
