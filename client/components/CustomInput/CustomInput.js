import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function CustomInput({
  type = "default",
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={type}
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",

    borderColor: "#a9a9a9",
    borderWidth: 1,
    borderRadius: 5,

    marginVertical: 10,
  },
  input: {
    height: 40,
    backgroundColor: "white",
    padding: 10,
    fontSize: 18,
  },
});
