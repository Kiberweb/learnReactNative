import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";

export default function CustomButton({ text, handlePress, type = "PRIMARY" }) {
  return (
    <TouchableHighlight
      style={[styles.container, styles[`btn_${type}`]]}
      onPress={handlePress}
    >
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 40,

    alignItems: "center",
    justifyContent: "center",

    marginTop: 30,

    borderRadius: 5,
  },
  btn_PRIMARY: {
    backgroundColor: "#4169F5",
  },
  btn_TERTIARY: {
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 16,
  },
  text_PRIMARY: {
    color: "white",
  },
  text_TERTIARY: {
    color: "#708090",
  },
});
