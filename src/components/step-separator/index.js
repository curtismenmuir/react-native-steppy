import React, { PureComponent } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { getSizeMultiplication } from "../../services";
import { Colors } from "../../themes";

export default class StepSeparator extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    dashCount: PropTypes.number.isRequired,
  };

  static defaultProps = {
    color: Colors.charcoalGrey,
    height: 200,
    width: 200,
    dashCount: 5,
  };

  constructor(props) {
    super(props);
  }

  getPanelPadding() {
    switch (this.props.dashCount) {
      case 2:
        return { separator: 0.2, outerRowPadding: 0.2, innerRowPadding: 0.2 };
      case 3:
        return { separator: 0.2, outerRowPadding: 0.1, innerRowPadding: 0.1 };
      case 4:
        return {
          separator: 0.125,
          outerRowPadding: 0.1,
          innerRowPadding: 0.1,
        };
      case 5:
        return {
          separator: 0.11,
          outerRowPadding: 0.075,
          innerRowPadding: 0.075,
        };
    }
  }

  render() {
    const topPadding = getSizeMultiplication(this.props.height, 0.45);
    const centerPanel = getSizeMultiplication(this.props.height, 0.1);
    const paddingSizes = this.getPanelPadding();
    const separatorSize = getSizeMultiplication(
      this.props.width,
      paddingSizes.separator
    );
    const outerRowPadding = getSizeMultiplication(
      this.props.width,
      paddingSizes.outerRowPadding
    );
    const innerRowPadding = getSizeMultiplication(
      this.props.width,
      paddingSizes.innerRowPadding
    );

    const panelContents = [];
    for (var i = 0; i < this.props.dashCount; i++) {
      if (i === this.props.dashCount - 1) {
        panelContents.push(
          <View
            key={i}
            style={{ width: separatorSize, backgroundColor: this.props.color }}
          />
        );
      } else {
        panelContents.push(
          <View key={i} style={{ flexDirection: "row" }}>
            <View
              style={{
                width: separatorSize,
                backgroundColor: this.props.color,
              }}
            />
            <View style={{ width: innerRowPadding }} />
          </View>
        );
      }
    }
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
          <View style={{ width: outerRowPadding }} />
          {panelContents}
          <View style={{ width: outerRowPadding }} />
        </View>
        <View style={{ height: topPadding }} />
      </View>
    );
  }
}
