import React, { PureComponent } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

import { Steppy } from "react-native-steppy";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Steppy height={200} width={400} color={"#A60067"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
});
