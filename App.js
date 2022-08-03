import * as React from "react";
import { StyleSheet, View } from "react-native";

import ScreenNavigator from "./navigation";

export default function App() {
  return (
    <View style={styles.root}>
      <ScreenNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
});
