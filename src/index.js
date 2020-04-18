import React, { PureComponent } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { StepPanel, StepSeparator } from "./components";
import { getSizeMultiplication } from "./services";
import { Colors } from "./themes";

export default class Steppy extends PureComponent {
  static propTypes = {
    color: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    steps: PropTypes.array.isRequired,
    dashCount: PropTypes.number.isRequired,
  };

  // TODO - limit steps + dashCount props to 5 max & 2 min
  static defaultProps = {
    color: "#000000",
    width: 200,
    steps: ["A", "B", "C", "D", "E"],
    dashCount: 5,
  };

  constructor(props) {
    super(props);
  }

  getPanelSizes() {
    switch (this.props.steps.length) {
      case 2:
        return { separator: 0.5, padding: 0.15 };
      case 3:
        return { separator: 0.25, padding: 0.1 };
      case 4:
        return { separator: 0.15, padding: 0.075 };
      case 5:
        return { separator: 0.1, padding: 0.05 };
    }
  }

  render() {
    const panelSize = getSizeMultiplication(this.props.width, 0.1);
    const radius = getSizeMultiplication(this.props.width, 0.5);
    const sizes = this.getPanelSizes();
    const padding = getSizeMultiplication(this.props.width, sizes.padding);

    const panelContents = this.props.steps.map((data, index) => {
      if (index !== this.props.steps.length - 1) {
        return (
          <View style={{ flexDirection: "row" }} key={index}>
            <StepPanel
              height={panelSize}
              width={panelSize}
              radius={radius}
              color={Colors.green}
            />
            <StepSeparator
              height={panelSize}
              width={getSizeMultiplication(this.props.width, sizes.separator)}
              color={"#3C3C3C"}
              dashCount={this.props.dashCount}
            />
          </View>
        );
      } else {
        return (
          <StepPanel
            height={panelSize}
            width={panelSize}
            radius={radius}
            color={Colors.green}
            key={index}
          />
        );
      }
    });
    return (
      <View
        style={{
          backgroundColor: this.props.color,
          height: panelSize,
          width: this.props.width,
          flexDirection: "row",
        }}
      >
        <View style={{ width: padding }} />
        {panelContents}
        <View style={{ width: padding }} />
      </View>
    );
  }
}
