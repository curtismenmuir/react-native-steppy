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
  };

  static defaultProps = {
    color: "#000000",
    width: 200,
    steps: ["A", "B", "C", "D", "E"],
  };

  constructor(props) {
    super(props);
  }

  render() {
    const panelHeight = getSizeMultiplication(this.props.width, 0.12);

    const panelContents = this.props.steps.map((data, index) => {
      if (index !== this.props.steps.length - 1) {
        return (
          <View style={{ flexDirection: "row" }} key={index}>
            <StepPanel
              height={panelHeight}
              width={getSizeMultiplication(this.props.width, 0.12)}
              color={Colors.green}
            />
            <StepSeparator
              height={panelHeight}
              width={getSizeMultiplication(this.props.width, 0.08)}
              color={Colors.red}
            />
          </View>
        );
      } else {
        return (
          <StepPanel
            height={panelHeight}
            width={getSizeMultiplication(this.props.width, 0.12)}
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
          height: panelHeight,
          width: this.props.width,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {panelContents}
      </View>
    );
  }
}
