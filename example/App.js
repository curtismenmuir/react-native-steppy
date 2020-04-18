import React, { PureComponent } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Steppy } from "react-native-steppy";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const exampleSteps = [
      {
        title: "A",
      },
      {
        title: "B",
      },
      {
        title: "C",
      },
      {
        title: "D",
      },
      {
        title: "E",
      },
    ];
    return (
      <View style={styles.container}>
        <Steppy
          width={800}
          color={"#201C29"}
          steps={exampleSteps}
          dashCount={3}
          position={2}
          failedSteps={[1]}
          isComplete={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
});
